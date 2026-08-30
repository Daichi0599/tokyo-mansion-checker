import type { LifeProfile } from "@/types/lifePlan";
import type { ScenarioSnapshot } from "./scenarios";
import { calcHousingMetricsAtPrice, calcHousingMetrics } from "./housing";
import { calcCarMonthlyCostMan } from "@/lib/carCost";

export interface Recommendation {
  message: string;
  relatedTool?: "mansion" | "birth" | "child" | "car";
}

function findScenario(scenarios: ScenarioSnapshot[], id: ScenarioSnapshot["id"]) {
  return scenarios.find((s) => s.id === id);
}

/**
 * ルールベースの推奨アクションを最大3件返す。
 * 出産・教育方針は価値観に関わるため、ここでは変更を提案しない
 * （提案するのは「知っておくべき数字」までで、「こう変えるべき」までは踏み込まない）。
 */
export function buildRecommendations(profile: LifeProfile, scenarios: ScenarioSnapshot[]): Recommendation[] {
  const recs: Recommendation[] = [];

  const current = findScenario(scenarios, "current");
  const afterPurchase = findScenario(scenarios, "after_purchase");
  const parentalLeave = findScenario(scenarios, "parental_leave");
  const educationPeak = findScenario(scenarios, "education_peak");
  const rateRise = findScenario(scenarios, "rate_rise");

  const onlyLeaveIsDeficit =
    parentalLeave?.status === "deficit" &&
    afterPurchase?.status !== "deficit" &&
    educationPeak?.status !== "deficit";
  if (onlyLeaveIsDeficit && parentalLeave) {
    const monthsToCover = Math.ceil(Math.abs(parentalLeave.monthlyBalance) * profile.family.leaveMonths);
    recs.push({
      message: `育休中だけ赤字になります。育休開始前に約${monthsToCover}万円の現金を用意しておくと、育休期間を乗り切れます。`,
      relatedTool: "birth",
    });
  }

  const onlyEducationIsDeficit =
    educationPeak?.status === "deficit" &&
    afterPurchase?.status !== "deficit" &&
    parentalLeave?.status !== "deficit";
  if (onlyEducationIsDeficit && profile.housing.intent !== "none") {
    const lowerPrice = Math.max(0, profile.housing.targetPrice - 500);
    const lowerMetrics = calcHousingMetricsAtPrice(profile, lowerPrice);
    const currentMetrics = calcHousingMetrics(profile);
    const diffByPrice = Math.round((currentMetrics.monthlyPayment - lowerMetrics.monthlyPayment) * 10) / 10;
    recs.push({
      message: `教育費がピークになる時期だけ厳しくなります。住宅価格を${lowerPrice}万円まで下げると、月々の返済が約${diffByPrice}万円下がります。`,
      relatedTool: "mansion",
    });
  }

  if (profile.car.plan !== "none" && current && current.monthlyBalance < current.monthlyIncome * 0.15) {
    const currentCarCost = calcCarMonthlyCostMan(profile.car.plan, profile.car.parkingFee);
    const carshareCost = calcCarMonthlyCostMan("carshare", profile.car.parkingFee);
    const improvement = Math.round((currentCarCost - carshareCost) * 10) / 10;
    if (improvement > 0) {
      recs.push({
        message: `車の維持費が家計を圧迫しています。カーシェアに変更すると、月あたり約${improvement}万円改善します。`,
        relatedTool: "car",
      });
    }
  }

  if (rateRise?.status === "deficit" && afterPurchase?.status !== "deficit") {
    recs.push({
      message: `今は問題なくても、金利が1%上がると赤字になる可能性があります。金利上昇時の返済額を事前に確認しておくと安心です。`,
      relatedTool: "mansion",
    });
  }

  if (recs.length === 0) {
    const worst = scenarios.reduce((w, s) => (s.monthlyBalance < w.monthlyBalance ? s : w), scenarios[0]);
    recs.push({
      message: `すべての時点で黒字ですが、最も厳しいのは「${worst.label}」で月間余力は約${worst.monthlyBalance}万円です。この時期を基準に計画すると安全です。`,
    });
  }

  return recs.slice(0, 3);
}
