import type { LifeProfile } from "@/types/lifePlan";

export type ValidationErrors = Record<string, string>;

/** 仕様書 §7.2 バリデーション の範囲チェック */
function inRange(value: number, min: number, max: number, label: string): string | null {
  if (Number.isNaN(value)) return `${label}を入力してください`;
  if (value < min || value > max) return `${label}は${min}〜${max}の範囲で入力してください`;
  return null;
}

export function validateHousehold(household: LifeProfile["household"]): ValidationErrors {
  const errors: ValidationErrors = {};
  const push = (key: string, err: string | null) => { if (err) errors[key] = err; };

  push("userAge", inRange(household.userAge, 18, 60, "年齢"));
  push("userIncome", inRange(household.userIncome, 0, 5000, "年収"));
  push("partnerIncome", inRange(household.partnerIncome, 0, 5000, "パートナーの年収"));
  push("savings", inRange(household.savings, 0, 30000, "貯蓄"));
  push("monthlyLivingCost", inRange(household.monthlyLivingCost, 0, 300, "月の生活費"));
  push("currentRent", inRange(household.currentRent, 0, 300, "いまの家賃"));

  return errors;
}

export function validateHousing(housing: LifeProfile["housing"]): ValidationErrors {
  const errors: ValidationErrors = {};
  const push = (key: string, err: string | null) => { if (err) errors[key] = err; };

  push("targetPrice", inRange(housing.targetPrice, 0, 30000, "購入価格"));
  push("downPayment", inRange(housing.downPayment, 0, 30000, "頭金"));
  push("interestRate", inRange(housing.interestRate, 0, 10, "金利"));
  push("repaymentYears", inRange(housing.repaymentYears, 5, 50, "返済年数"));
  push("managementFee", inRange(housing.managementFee, 0, 300, "管理費・修繕積立金"));

  return errors;
}

export function validateFamily(): ValidationErrors {
  // family の各項目は選択式（choice）または既定の options 内からしか選べない number field のため、
  // 範囲外の値が入る余地がない。将来 free input を許す場合はここに追加する。
  return {};
}

export function validateCar(): ValidationErrors {
  return {};
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
