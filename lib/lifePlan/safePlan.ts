import type { LifeProfile, CarPlan } from "@/types/lifePlan";
import { buildScenarios, findWorstScenario } from "./scenarios";

export interface SafePlanResult {
  profile: LifeProfile;
  adjustments: string[];
  /** 何を調整したか。UIの表示分岐や計測に使う */
  adjustmentType: "car" | "price" | "none";
}

const CAR_DOWNGRADE: Record<CarPlan, CarPlan> = {
  new: "used",
  used: "carshare",
  carshare: "none",
  none: "none",
};

const PRICE_STEP = 500; // 万円単位
const MAX_PRICE_STEPS = 20; // 上限1億円分下げても解消しない場合は打ち切る

function isAllSafe(profile: LifeProfile): boolean {
  return buildScenarios(profile).every((s) => s.status !== "deficit");
}

/**
 * 希望プラン(profile)から、赤字が解消するまで自動調整した安全プランを生成する。
 * 調整順序は仕様どおり: 1. 車のダウングレード 2. 住宅価格を500万円単位で下げる。
 * 頭金・子どもの人数・出産方針・教育方針は価値観に関わるため自動で変えない。
 * 元のprofileは変更せず、新しいオブジェクトを返す。
 */
export function buildSafePlan(profile: LifeProfile): SafePlanResult {
  let current: LifeProfile = {
    ...profile,
    household: { ...profile.household },
    housing: { ...profile.housing },
    family: { ...profile.family },
    car: { ...profile.car },
  };
  const adjustments: string[] = [];
  let adjustmentType: SafePlanResult["adjustmentType"] = "none";

  if (isAllSafe(current)) {
    return { profile: current, adjustments, adjustmentType };
  }

  // 1. 車のダウングレード
  if (current.car.plan !== "none") {
    const downgraded = CAR_DOWNGRADE[current.car.plan];
    if (downgraded !== current.car.plan) {
      const before = current.car.plan;
      current = { ...current, car: { ...current.car, plan: downgraded } };
      adjustments.push(`車のプランを「${before}」から「${downgraded}」へ変更`);
      adjustmentType = "car";
    }
  }

  if (isAllSafe(current)) {
    return { profile: current, adjustments, adjustmentType };
  }

  // 2. 住宅価格を500万円単位で下げる（頭金は変えない）
  let steps = 0;
  while (!isAllSafe(current) && steps < MAX_PRICE_STEPS && current.housing.targetPrice > current.housing.downPayment) {
    const nextPrice = Math.max(current.housing.downPayment, current.housing.targetPrice - PRICE_STEP);
    if (nextPrice === current.housing.targetPrice) break;
    current = { ...current, housing: { ...current.housing, targetPrice: nextPrice } };
    steps += 1;
  }
  if (steps > 0) {
    adjustments.push(`住宅価格を${profile.housing.targetPrice}万円から${current.housing.targetPrice}万円へ調整`);
    adjustmentType = adjustmentType === "car" ? "car" : "price";
  }

  return { profile: current, adjustments, adjustmentType };
}

export { findWorstScenario };
