import type { LifeProfile } from "@/types/lifePlan";
import {
  calcHousingMetrics,
  calcHousingMetricsAtRate,
  estimateMonthlyPropertyTax,
} from "./housing";
import { calcFamilyBirth, calcMonthlyParentalLeaveBenefit, calcEducationPeakMonthly } from "./family";
import { calcCarMonthlyCostMan } from "@/lib/carCost";
import { estimateNetAnnualIncome, splitNetIncome } from "./netIncome";

export type ScenarioStatus = "comfortable" | "tight" | "deficit";
export type ScenarioId = "current" | "after_purchase" | "parental_leave" | "education_peak" | "rate_rise";

export interface ScenarioSnapshot {
  id: ScenarioId;
  label: string;
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlyBalance: number;
  status: ScenarioStatus;
  majorCosts: Array<{ label: string; amount: number }>;
  notes: string[];
}

const RATE_RISE_STEP = 1.0;

function judgeStatus(monthlyBalance: number, monthlyIncome: number): ScenarioStatus {
  if (monthlyBalance < 0) return "deficit";
  if (monthlyIncome > 0 && monthlyBalance >= monthlyIncome * 0.1) return "comfortable";
  return "tight";
}

function topCosts(entries: Array<{ label: string; amount: number }>, n = 3) {
  return [...entries].sort((a, b) => b.amount - a.amount).slice(0, n);
}

/**
 * 世帯の「月給部分」の手取り月収（賞与を除く）。
 * 賞与は月割りせず、毎月の資金繰りには含まれない別枠（頭金・特別支出用）として扱う。
 * 額面のまま月割りすると税・社保が引かれる前の金額になり実感と大きくズレるため、
 * lib/lifePlan/netIncome.ts の概算手取り率をかけている。
 */
function householdMonthlyIncome(profile: LifeProfile): number {
  const { household } = profile;
  const user = splitNetIncome(household.userIncome, household.userBonusAnnual);
  const partner = splitNetIncome(household.partnerIncome, household.partnerBonusAnnual);
  return (user.netSalaryAnnual + partner.netSalaryAnnual) / 12;
}

/** 世帯の年間ボーナス手取り目安。月次収支には含めず、頭金・特別支出用の別枠として表示する */
export function householdAnnualNetBonus(profile: LifeProfile): number {
  const { household } = profile;
  const user = splitNetIncome(household.userIncome, household.userBonusAnnual);
  const partner = splitNetIncome(household.partnerIncome, household.partnerBonusAnnual);
  return Math.round((user.netBonusAnnual + partner.netBonusAnnual) * 10) / 10;
}

function carMonthly(profile: LifeProfile): number {
  return calcCarMonthlyCostMan(profile.car.plan, profile.car.parkingFee);
}

/** A. 現在: 家賃ベースの現状の月間収支 */
function buildCurrentScenario(profile: LifeProfile): ScenarioSnapshot {
  const income = householdMonthlyIncome(profile);
  const car = carMonthly(profile);
  const costs = [
    { label: "家賃", amount: profile.household.currentRent },
    { label: "生活費", amount: profile.household.monthlyLivingCost },
    ...(car > 0 ? [{ label: "車", amount: car }] : []),
  ];
  const expenses = costs.reduce((s, c) => s + c.amount, 0);
  const balance = income - expenses;
  return {
    id: "current",
    label: "現在",
    monthlyIncome: Math.round(income * 10) / 10,
    monthlyExpenses: Math.round(expenses * 10) / 10,
    monthlyBalance: Math.round(balance * 10) / 10,
    status: judgeStatus(balance, income),
    majorCosts: topCosts(costs),
    notes: [],
  };
}

/** B. 住宅購入後: ローン返済＋管理費＋固定資産税＋生活費＋車 */
function buildAfterPurchaseScenario(profile: LifeProfile): ScenarioSnapshot {
  const income = householdMonthlyIncome(profile);
  const metrics = calcHousingMetrics(profile);
  const propertyTax = estimateMonthlyPropertyTax(profile.housing.targetPrice);
  const car = carMonthly(profile);
  const costs = [
    { label: "ローン返済", amount: metrics.monthlyPayment },
    { label: "管理費・修繕積立金", amount: profile.housing.managementFee },
    { label: "固定資産税(月割概算)", amount: propertyTax },
    { label: "生活費", amount: profile.household.monthlyLivingCost },
    ...(car > 0 ? [{ label: "車", amount: car }] : []),
  ];
  const expenses = costs.reduce((s, c) => s + c.amount, 0);
  const balance = income - expenses;
  return {
    id: "after_purchase",
    label: "住宅購入後",
    monthlyIncome: Math.round(income * 10) / 10,
    monthlyExpenses: Math.round(expenses * 10) / 10,
    monthlyBalance: Math.round(balance * 10) / 10,
    status: judgeStatus(balance, income),
    majorCosts: topCosts(costs),
    notes:
      profile.housing.intent === "none"
        ? ["住宅購入の予定はまだ選択されていません。仮に targetPrice で購入した場合の試算です。"]
        : [],
  };
}

/** C. 育休中: 育休取得者の収入を除外し、育児休業給付金の月平均を加算。出産の一時支出は notes で別掲する */
function buildParentalLeaveScenario(profile: LifeProfile): ScenarioSnapshot {
  const householdIncomeMonthly = householdMonthlyIncome(profile);
  // leaveTakerIncomeは賞与込みの額面年収だが、育休取得者の賞与内訳までは入力させていないため、
  // 全額を月給相当とみなして手取り換算する（実際より少し高めに引かれる可能性がある簡易概算）
  const leaveTakerMonthly = estimateNetAnnualIncome(profile.family.leaveTakerIncome) / 12;
  const benefit = calcMonthlyParentalLeaveBenefit(profile);
  const income = Math.max(0, householdIncomeMonthly - leaveTakerMonthly) + benefit;

  const metrics = calcHousingMetrics(profile);
  const propertyTax = estimateMonthlyPropertyTax(profile.housing.targetPrice);
  const car = carMonthly(profile);
  const housingCost =
    profile.housing.intent === "none" ? 0 : metrics.monthlyPayment + profile.housing.managementFee + propertyTax;

  const costs = [
    ...(housingCost > 0 ? [{ label: "住宅費", amount: Math.round(housingCost * 10) / 10 }] : []),
    { label: "生活費", amount: profile.household.monthlyLivingCost },
    ...(car > 0 ? [{ label: "車", amount: car }] : []),
  ];
  const expenses = costs.reduce((s, c) => s + c.amount, 0);
  const balance = income - expenses;

  const birth = calcFamilyBirth(profile);
  const notes: string[] = [];
  if (birth.netCost > 0) {
    notes.push(`出産費用の自己負担は一時金差し引き後で約${birth.netCost}万円（この月次収支には含めていません）`);
  }
  if (profile.family.children === 0) {
    notes.push("子どもの人数が0のため、育休シナリオは参考値です。");
  }

  return {
    id: "parental_leave",
    label: "育休中",
    monthlyIncome: Math.round(income * 10) / 10,
    monthlyExpenses: Math.round(expenses * 10) / 10,
    monthlyBalance: Math.round(balance * 10) / 10,
    status: judgeStatus(balance, income),
    majorCosts: topCosts(costs),
    notes,
  };
}

/** D. 教育費ピーク: 住宅費＋生活費＋教育方針のピーク月額＋車 */
function buildEducationPeakScenario(profile: LifeProfile): ScenarioSnapshot {
  const income = householdMonthlyIncome(profile);
  const metrics = calcHousingMetrics(profile);
  const propertyTax = estimateMonthlyPropertyTax(profile.housing.targetPrice);
  const car = carMonthly(profile);
  const peak = calcEducationPeakMonthly(profile);
  const housingCost =
    profile.housing.intent === "none" ? 0 : metrics.monthlyPayment + profile.housing.managementFee + propertyTax;

  const costs = [
    ...(housingCost > 0 ? [{ label: "住宅費", amount: Math.round(housingCost * 10) / 10 }] : []),
    { label: "生活費", amount: profile.household.monthlyLivingCost },
    { label: `教育費(${peak.label})`, amount: peak.monthly },
    ...(car > 0 ? [{ label: "車", amount: car }] : []),
  ];
  const expenses = costs.reduce((s, c) => s + c.amount, 0);
  const balance = income - expenses;

  return {
    id: "education_peak",
    label: "教育費ピーク",
    monthlyIncome: Math.round(income * 10) / 10,
    monthlyExpenses: Math.round(expenses * 10) / 10,
    monthlyBalance: Math.round(balance * 10) / 10,
    status: judgeStatus(balance, income),
    majorCosts: topCosts(costs),
    notes: profile.family.children === 0 ? ["子どもの人数が0のため、教育費シナリオは参考値です。"] : [],
  };
}

/** E. 金利上昇時: 現在の金利に+1.0ポイントして同一借入額・返済期間で再計算 */
function buildRateRiseScenario(profile: LifeProfile): ScenarioSnapshot {
  const income = householdMonthlyIncome(profile);
  const baseMetrics = calcHousingMetrics(profile);
  const risenRate = profile.housing.interestRate + RATE_RISE_STEP;
  const risenMetrics = calcHousingMetricsAtRate(profile, risenRate);
  const propertyTax = estimateMonthlyPropertyTax(profile.housing.targetPrice);
  const car = carMonthly(profile);

  const costs = [
    { label: "ローン返済(金利上昇後)", amount: risenMetrics.monthlyPayment },
    { label: "管理費・修繕積立金", amount: profile.housing.managementFee },
    { label: "固定資産税(月割概算)", amount: propertyTax },
    { label: "生活費", amount: profile.household.monthlyLivingCost },
    ...(car > 0 ? [{ label: "車", amount: car }] : []),
  ];
  const expenses = costs.reduce((s, c) => s + c.amount, 0);
  const balance = income - expenses;
  const diff = Math.round((risenMetrics.monthlyPayment - baseMetrics.monthlyPayment) * 10) / 10;

  return {
    id: "rate_rise",
    label: "金利上昇時",
    monthlyIncome: Math.round(income * 10) / 10,
    monthlyExpenses: Math.round(expenses * 10) / 10,
    monthlyBalance: Math.round(balance * 10) / 10,
    status: judgeStatus(balance, income),
    majorCosts: topCosts(costs),
    notes: [`金利が現在より${RATE_RISE_STEP}ポイント上がった場合の試算です。返済額は月${diff >= 0 ? "+" : ""}${diff}万円変わります。`],
  };
}

/** 純粋関数: 同一入力から常に同一結果を返す。UI・ブラウザAPIに依存しない */
export function buildScenarios(profile: LifeProfile): ScenarioSnapshot[] {
  return [
    buildCurrentScenario(profile),
    buildAfterPurchaseScenario(profile),
    buildParentalLeaveScenario(profile),
    buildEducationPeakScenario(profile),
    buildRateRiseScenario(profile),
  ];
}

/** 最も厳しい時点を選ぶ。月間余力が最も少ない（＝赤字が最も深い）ものを優先する */
export function findWorstScenario(scenarios: ScenarioSnapshot[]): ScenarioSnapshot {
  return scenarios.reduce((worst, s) => (s.monthlyBalance < worst.monthlyBalance ? s : worst), scenarios[0]);
}
