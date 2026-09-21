import type { LifeProfile, BirthPlan } from "@/types/lifePlan";
import type { NumChildren, ChildInput, BirthInput, BirthResult, ChildResult } from "@/lib/childCost";
import { calcBirth, calculateCosts, calcParentalLeaveBenefitTotal, JUKEN_COST } from "@/lib/childCost";

/** LifeProfile.family.birthPlan は childCost.ts の BirthCost と語彙が同じなので、そのまま渡せる */
function toBirthCost(plan: BirthPlan) {
  return plan;
}

export function toBirthInput(profile: LifeProfile): BirthInput {
  const { family } = profile;
  return {
    birthCost: toBirthCost(family.birthPlan),
    numChildren: Math.min(3, Math.max(1, family.children || 1)) as NumChildren,
    parentIncome: family.leaveTakerIncome,
    leaveMonths: family.leaveMonths,
  };
}

export function calcFamilyBirth(profile: LifeProfile): BirthResult {
  return calcBirth(toBirthInput(profile));
}

/**
 * LifeProfile には ChildInput が要求する nursery/extracurriculars/juken/childCurrentAge が無いため、
 * v2の横断診断としては「都内標準的なケース」の既定値で補って計算する。
 * 個別の詳細診断（/child）ではユーザーが直接これらを選べるので、そちらのほうが精度が高い。
 */
export function toChildInput(profile: LifeProfile): ChildInput {
  const { family } = profile;
  return {
    numChildren: Math.min(3, Math.max(1, family.children || 1)) as NumChildren,
    nursery: "hoiku_public",
    schoolPolicy: family.educationPolicy,
    university: family.university,
    extracurriculars: "standard",
    birthCost: family.birthPlan,
    // 中学受験は「小学校から私立」でなければ発生し得るため、公立方針のときだけ既定でONにする
    juken: family.educationPolicy === "all_public" ? "juken" : "none",
    childCurrentAge: 0,
    parentIncome: family.leaveTakerIncome,
  };
}

export function calcFamilyCosts(profile: LifeProfile): ChildResult {
  return calculateCosts(toChildInput(profile));
}

/**
 * 育休中の育児休業給付金は calcBirth() が「育休全期間の合計」を返す設計のため、
 * v2の「月あたり」の収支に使うには leaveMonths で割って月平均に変換する。
 */
export function calcMonthlyParentalLeaveBenefit(profile: LifeProfile): number {
  const birth = calcFamilyBirth(profile);
  const months = Math.max(1, profile.family.leaveMonths);
  return Math.round((birth.parentalLeaveBenefit / months) * 10) / 10;
}

/**
 * パートナー側の育児休業給付金（月平均）。出産手当金は出産する側だけの給付のため、
 * パートナー側には計上しない。年収はhousehold.partnerIncomeをそのまま使う
 * （本人側のleaveTakerIncomeのような別入力は設けていない）。
 */
export function calcPartnerMonthlyParentalLeaveBenefit(profile: LifeProfile): number {
  const months = Math.max(1, profile.family.partnerLeaveMonths);
  const numChildren = Math.min(3, Math.max(1, profile.family.children || 1));
  const total = calcParentalLeaveBenefitTotal(profile.household.partnerIncome / 12, profile.family.partnerLeaveMonths, numChildren);
  return Math.round((total / months) * 10) / 10;
}

/**
 * 教育費の「ピーク月額」を返す。
 * childCost.ts の phases[].costPerChild はフェーズ全体の総額であり月額ではないため、
 * ここでフェーズの年数で割って概算月額に変換し、最大のものを採用する。
 * 中学受験費用（jukenCostPerChild）は小学期の総額に混在しているため、
 * 「小学期のみ」「小学期+受験」を両方候補に入れて、実際に一番重い時期を取りこぼさないようにする。
 */
export function calcEducationPeakMonthly(profile: LifeProfile): { monthly: number; label: string } {
  const result = calcFamilyCosts(profile);
  const numChildren = Math.min(3, Math.max(1, profile.family.children || 1));

  const phaseYears: Record<string, number> = {
    "乳幼児期": 6,
    "小学期": 6,
    "中高期": 6,
    "大学期": 4,
  };

  const candidates = result.phases.map((p) => ({
    label: p.label,
    monthly: (p.costPerChild * numChildren) / (phaseYears[p.label] ?? 6) / 12,
  }));

  // 中学受験（小4〜6の3年間に集中）は小学期の年平均よりずっと重いので、単独候補として追加する
  if (result.jukenCostPerChild > 0) {
    candidates.push({
      label: "小学高学年（中学受験期）",
      monthly: (result.jukenCostPerChild * numChildren) / 3 / 12,
    });
  }

  const peak = candidates.reduce((max, c) => (c.monthly > max.monthly ? c : max), candidates[0]);
  return { monthly: Math.round(peak.monthly * 10) / 10, label: peak.label };
}

/**
 * /birth の診断結果をLifeProfileへ書き戻す。
 * /birthにはnumChildrenの入力欄が無い（常に1人分の試算）ため、人数はプロフィール側の
 * 値をそのまま尊重し、0人（未設定）のときだけ1人に補正する。
 * cesareanはLifeProfile側に対応するフィールドが無いため書き戻さない（/carのhoursPerUseと同じ扱い）。
 */
export function applyBirthResultToProfile(profile: LifeProfile, input: BirthInput): LifeProfile {
  return {
    ...profile,
    family: {
      ...profile.family,
      children: Math.max(1, profile.family.children) as LifeProfile["family"]["children"],
      birthPlan: input.birthCost,
      leaveTakerIncome: input.parentIncome,
      leaveMonths: input.leaveMonths ?? profile.family.leaveMonths,
    },
  };
}

/**
 * /child の診断結果をLifeProfileへ書き戻す。
 * nursery・extracurriculars・childCurrentAge・jukenはLifeProfile側に対応するフィールドが
 * 無いため書き戻さない（/carのhoursPerUseと同じ扱い）。
 */
export function applyChildResultToProfile(profile: LifeProfile, input: ChildInput): LifeProfile {
  return {
    ...profile,
    family: {
      ...profile.family,
      children: input.numChildren as LifeProfile["family"]["children"],
      birthPlan: input.birthCost,
      educationPolicy: input.schoolPolicy,
      university: input.university,
      leaveTakerIncome: input.parentIncome,
    },
  };
}

export { JUKEN_COST };
