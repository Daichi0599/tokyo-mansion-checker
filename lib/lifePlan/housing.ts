import type { LifeProfile } from "@/types/lifePlan";
import type { DiagnosisInput, PriceMetrics } from "@/types";
import { calcPriceMetrics, PROPERTY_TAX_RATE } from "@/lib/calculator";

/**
 * LifeProfile を lib/calculator.ts の DiagnosisInput に変換する。
 * 世帯年収 = 本人年収 + パートナー年収（世帯合算は既存 /mansion のフォームと同じ扱い）。
 */
export function toDiagnosisInput(profile: LifeProfile): DiagnosisInput {
  const { household, housing } = profile;
  return {
    annualIncome: household.userIncome + household.partnerIncome,
    age: household.userAge,
    downPayment: housing.downPayment,
    interestRate: housing.interestRate,
    repaymentYears: housing.repaymentYears,
    monthlyLiving: household.monthlyLivingCost,
    managementFee: housing.managementFee,
    currentRent: household.currentRent,
  };
}

/**
 * 「希望する targetPrice を買った場合」の月々の住居費を返す。
 * lib/calculator.ts の diagnose() は「年収から安全価格を逆算する」関数で用途が逆なので、
 * ここでは price を直接指定して月返済額を出す calcPriceMetrics() を使う。
 */
export function calcHousingMetrics(profile: LifeProfile): PriceMetrics {
  const input = toDiagnosisInput(profile);
  return calcPriceMetrics(profile.housing.targetPrice, input);
}

/** 金利を rate に差し替えた場合の住宅費を計算する（v2の「金利上昇時」シナリオ用） */
export function calcHousingMetricsAtRate(profile: LifeProfile, rate: number): PriceMetrics {
  const input = { ...toDiagnosisInput(profile), interestRate: rate };
  return calcPriceMetrics(profile.housing.targetPrice, input);
}

/** 価格を変更した場合の住宅費（安全プラン生成で使う） */
export function calcHousingMetricsAtPrice(profile: LifeProfile, price: number): PriceMetrics {
  const input = toDiagnosisInput(profile);
  return calcPriceMetrics(Math.max(0, price), input);
}

/** 固定資産税の月割概算。lib/calculator.ts の calcRentComparison と同じ料率を使う（万円/月） */
export function estimateMonthlyPropertyTax(price: number): number {
  return Math.round(((price * PROPERTY_TAX_RATE) / 12) * 100) / 100;
}
