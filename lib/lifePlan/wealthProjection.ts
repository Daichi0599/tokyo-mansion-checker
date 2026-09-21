import type { LifeProfile, IncomeGrowthScenario } from "@/types/lifePlan";
import { splitNetIncome, estimateNetAnnualIncome } from "./netIncome";
import { calcHousingMetrics, estimateMonthlyPropertyTax } from "./housing";
import { calcFamilyBirth, calcMonthlyParentalLeaveBenefit, calcFamilyCosts } from "./family";
import { calcCarMonthlyCostMan } from "@/lib/carCost";

/**
 * 昇給の見込みを「年率」で選ばせる。自由入力にすると精度を装いすぎるため、
 * 3段階のシナリオに絞っている。物価上昇は考慮しない（名目値のまま将来へ延ばす前提）。
 */
export const INCOME_GROWTH_RATE: Record<IncomeGrowthScenario, number> = {
  flat: 0,
  moderate: 0.01,
  strong: 0.03,
};

export const INCOME_GROWTH_LABEL: Record<IncomeGrowthScenario, string> = {
  flat: "横ばい",
  moderate: "緩やかに増加（年1%目安）",
  strong: "しっかり増加（年3%目安）",
};

export interface WealthYearPoint {
  /** 0 = 今年 */
  year: number;
  age: number;
  /** 現金・預金の累計残高（万円） */
  cashSavings: number;
  /** NISA・株などの累計積立元本（万円）。運用リターンは含まない */
  investmentPrincipal: number;
  totalAssets: number;
  events: string[];
}

/**
 * 子どもの年齢に応じた1人あたりの年間養育費を返す。
 * lib/childCost.ts の phases は「フェーズ全体の総額」なので、フェーズの年数で割って
 * 年あたりに均している（中学受験費用は小学期のcostPerChildに合算済みのため6年で均等分配になる）。
 * 習い事費用（extraCostPerChild）は0〜11歳の12年間に均等分配する。
 */
function annualChildCostPerChild(
  age: number,
  phases: { costPerChild: number }[],
  extraCostPerChild: number
): number {
  let phaseCost = 0;
  if (age >= 0 && age <= 5) phaseCost = phases[0].costPerChild / 6;
  else if (age >= 6 && age <= 11) phaseCost = phases[1].costPerChild / 6;
  else if (age >= 12 && age <= 17) phaseCost = phases[2].costPerChild / 6;
  else if (age >= 18 && age <= 21) phaseCost = phases[3].costPerChild / 4;

  const extra = age >= 0 && age <= 11 ? extraCostPerChild / 12 : 0;
  return phaseCost + extra;
}

/**
 * 現在から一定年数先までの資産推移（現金＋投資元本）を年単位で概算する。
 * 「物価が変わらない」前提の名目値シミュレーション。車の持ち方は現時点の内容が
 * そのまま続く前提（既存の5時点スナップショットと同じ簡略化）。
 * 住宅は`housing.purchaseInYears`の年から頭金を一括で取り崩し、以降はローン＋管理費、
 * それより前は現在の家賃を計上する（intentが"none"なら常に家賃のまま）。
 * 複数人の子どもは全員が同じ年に生まれ、同じ年齢で進級していく前提で扱う
 * （lib/childCost.ts の numChildren倍という既存の簡略化に合わせている）。
 */
export function buildWealthProjection(profile: LifeProfile, horizonYears?: number): WealthYearPoint[] {
  const { household, family } = profile;
  const horizon = horizonYears ?? Math.min(30, Math.max(10, 65 - household.userAge));
  const growthRate = INCOME_GROWTH_RATE[household.incomeGrowthScenario];

  const carMonthly = calcCarMonthlyCostMan(profile.car.plan, profile.car.parkingFee);
  const willPurchase = profile.housing.intent !== "none";
  const postPurchaseMonthly = willPurchase
    ? (() => {
        const metrics = calcHousingMetrics(profile);
        return metrics.monthlyPayment + profile.housing.managementFee + estimateMonthlyPropertyTax(profile.housing.targetPrice);
      })()
    : null;

  const numChildren = family.children;
  const childResult = numChildren > 0 ? calcFamilyCosts(profile) : null;
  const birth = numChildren > 0 ? calcFamilyBirth(profile) : null;
  const monthlyBenefit = numChildren > 0 ? calcMonthlyParentalLeaveBenefit(profile) : 0;
  const leaveTakerNetMonthly = estimateNetAnnualIncome(family.leaveTakerIncome) / 12;

  let cash = household.savings;
  let investment = 0;
  const points: WealthYearPoint[] = [];

  for (let year = 0; year <= horizon; year++) {
    const events: string[] = [];
    const growth = Math.pow(1 + growthRate, year);

    const user = splitNetIncome(household.userIncome * growth, household.userBonusAnnual * growth);
    const partner = splitNetIncome(household.partnerIncome * growth, household.partnerBonusAnnual * growth);
    let salaryNet = user.netSalaryAnnual + partner.netSalaryAnnual;
    const bonusNet = user.netBonusAnnual + partner.netBonusAnnual;

    if (numChildren > 0 && birth) {
      if (year === family.firstChildInYears) {
        cash -= birth.netCost;
        events.push("出産");
      }
      // 育休は誕生年の年始から始まる前提で、12ヶ月を超える分は翌年に繰り越して按分する
      const monthsThisYear =
        year === family.firstChildInYears
          ? Math.min(family.leaveMonths, 12)
          : year === family.firstChildInYears + 1
            ? Math.max(0, family.leaveMonths - 12)
            : 0;
      if (monthsThisYear > 0) {
        salaryNet -= leaveTakerNetMonthly * monthsThisYear;
        salaryNet += monthlyBenefit * monthsThisYear;
        events.push("育休中");
      }
    }

    const childAge = numChildren > 0 ? year - family.firstChildInYears : -1;
    const childCostAnnual =
      numChildren > 0 && childResult && childAge >= 0
        ? annualChildCostPerChild(childAge, childResult.phases, childResult.extraCostPerChild) * numChildren
        : 0;

    const hasPurchased = willPurchase && postPurchaseMonthly !== null && year >= profile.housing.purchaseInYears;
    if (hasPurchased && year === profile.housing.purchaseInYears) {
      cash -= profile.housing.downPayment;
      events.push("住宅購入");
    }
    const housingMonthly = hasPurchased ? (postPurchaseMonthly as number) : household.currentRent;
    const housingAnnual = housingMonthly * 12;
    const carAnnual = carMonthly * 12;
    const livingAnnual = household.monthlyLivingCost * 12;
    const investmentAnnual = household.monthlyInvestment * 12;

    const netCashFlow = salaryNet + bonusNet - housingAnnual - carAnnual - livingAnnual - childCostAnnual - investmentAnnual;
    cash += netCashFlow;
    investment += investmentAnnual;

    if (netCashFlow < 0 && !events.includes("赤字")) events.push("赤字");

    points.push({
      year,
      age: household.userAge + year,
      cashSavings: Math.round(cash * 10) / 10,
      investmentPrincipal: Math.round(investment * 10) / 10,
      totalAssets: Math.round((cash + investment) * 10) / 10,
      events,
    });
  }

  return points;
}
