import type { LifeProfile, CarPlan } from "@/types/lifePlan";
import type { CarInputs } from "@/lib/carCost";

/**
 * /car ⇄ LifeProfile の橋渡し。
 * /car は「使い方（日数・時間・駐車場代）」を入力させる詳細診断、LifeProfile.car は
 * 横断診断向けの概算（プラン種別＋駐車場代＋利用日数）なので構造が異なる。
 * hoursPerUse は横断診断側に対応する項目が無いため、lib/carCost.ts の概算計算と
 * 揃えた標準値（3時間）で補う。
 */
const HOURS_PER_USE_DEFAULT = 3;

const LABEL_TO_CAR_PLAN: Record<string, CarPlan> = {
  "カーシェア": "carshare",
  "中古車購入": "used",
  "新車購入": "new",
};

export function toCarInputs(profile: LifeProfile): CarInputs {
  return {
    usageDaysPerMonth: profile.car.monthlyUseDays,
    hoursPerUse: HOURS_PER_USE_DEFAULT,
    parkingFeeMan: profile.car.parkingFee,
  };
}

/** /car の診断結果をLifeProfileへ書き戻す。おすすめラベルが取れない場合は既存のplanを維持する */
export function applyCarResultToProfile(
  profile: LifeProfile,
  inputs: CarInputs,
  recommendedLabel: string | undefined
): LifeProfile {
  const plan = (recommendedLabel ? LABEL_TO_CAR_PLAN[recommendedLabel] : undefined) ?? profile.car.plan;
  return {
    ...profile,
    car: {
      plan,
      parkingFee: inputs.parkingFeeMan,
      monthlyUseDays: inputs.usageDaysPerMonth,
    },
  };
}
