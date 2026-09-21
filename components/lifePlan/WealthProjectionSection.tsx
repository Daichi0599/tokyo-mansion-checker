"use client";

import type { LifeProfile } from "@/types/lifePlan";
import type { SafePlanResult } from "@/lib/lifePlan/safePlan";
import { buildWealthProjection } from "@/lib/lifePlan/wealthProjection";
import WealthChart from "./WealthChart";

/** 節目として提示する年数（プロジェクションの長さが足りない場合はスキップする） */
const MILESTONE_YEARS = [10, 20];

export default function WealthProjectionSection({
  profile,
  safePlan,
}: {
  profile: LifeProfile;
  safePlan?: SafePlanResult;
}) {
  const points = buildWealthProjection(profile);
  const last = points[points.length - 1];
  const hasDeficitYear = points.some((p) => p.cashSavings < 0);

  // 希望プランのままで赤字が出る時点があった場合だけ、安全プランの資産推移も重ねて比較する
  const showComparison = safePlan && safePlan.adjustmentType !== "none";
  const comparisonPoints = showComparison ? buildWealthProjection(safePlan.profile, points.length - 1) : undefined;
  const comparisonLast = comparisonPoints?.[comparisonPoints.length - 1];

  return (
    <section className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-4">
      <div>
        <h2 className="text-lg font-black text-white">資産推移シミュレーション</h2>
        <p className="text-xs text-slate-400 mt-1">
          物価は変わらない前提で、現在の条件がこのまま続いた場合の資産の増え方を概算したものです。
        </p>
      </div>

      <WealthChart points={points} comparisonPoints={comparisonPoints} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {MILESTONE_YEARS.filter((y) => y <= points[points.length - 1].year).map((y) => {
          const p = points[y];
          return (
            <div key={y} className="rounded-xl bg-slate-900/50 border border-slate-700 px-3 py-2.5">
              <p className="text-xs text-slate-400">{y}年後（{p.age}歳）</p>
              <p className="text-sm font-bold text-white">
                資産合計 約{p.totalAssets.toLocaleString()}万円
              </p>
              <p className="text-xs text-slate-500">
                現金{p.cashSavings.toLocaleString()}万円＋投資元本{p.investmentPrincipal.toLocaleString()}万円
              </p>
            </div>
          );
        })}
      </div>

      {hasDeficitYear && (
        <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
          この条件だと、途中で現金残高がマイナスになる年があります。積立額や生活費の見直しが必要かもしれません。
        </p>
      )}

      <p className="text-xs text-slate-500">
        {last.year}年後（{last.age}歳）時点の想定資産合計は約{last.totalAssets.toLocaleString()}万円です。昇給・NISA積立額は「わが家の現在」の詳細設定で調整できます。
      </p>

      {showComparison && comparisonLast && (
        <p className="text-xs text-slate-400 bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2">
          安全プラン（{safePlan.adjustments.join("・")}）の場合、{comparisonLast.year}年後の資産合計は約{comparisonLast.totalAssets.toLocaleString()}万円です。
        </p>
      )}
    </section>
  );
}
