"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import type { LifeProfile } from "@/types/lifePlan";
import { useLifeProfile, saveLifeProfile } from "@/lib/lifePlan";
import { buildScenarios, findWorstScenario, householdAnnualNetBonus } from "@/lib/lifePlan/scenarios";
import { buildRecommendations } from "@/lib/lifePlan/recommendations";
import { buildSafePlan } from "@/lib/lifePlan/safePlan";
import { trackPlanEvent } from "@/lib/analytics";
import ConclusionCard from "@/components/lifePlan/ConclusionCard";
import ScenarioSnapshotCard from "@/components/lifePlan/ScenarioSnapshotCard";
import ScenarioComparison from "@/components/lifePlan/ScenarioComparison";
import RecommendationList from "@/components/lifePlan/RecommendationList";
import PlanEditPanel from "@/components/lifePlan/PlanEditPanel";
import WealthProjectionSection from "@/components/lifePlan/WealthProjectionSection";
import CalculationNotes from "@/components/lifePlan/CalculationNotes";
import AffiliateCta from "@/components/AffiliateCta";

const DETAIL_TOOLS: { tool: "mansion" | "check" | "birth" | "child" | "car"; href: string; icon: string; label: string }[] = [
  { tool: "mansion", href: "/mansion?from=plan", icon: "🏠", label: "マンション購入診断" },
  { tool: "check", href: "/check", icon: "🔍", label: "物件診断" },
  { tool: "birth", href: "/birth?from=plan", icon: "🤰", label: "出産費用シミュレーター" },
  { tool: "child", href: "/child", icon: "👶", label: "子育て費用試算" },
  { tool: "car", href: "/car?from=plan", icon: "🚗", label: "車コスト診断" },
];

export default function PlanResultPage() {
  // useSyncExternalStore経由でlocalStorageを購読する。setStateをuseEffect内で
  // 呼ばずに済むため react-hooks/set-state-in-effect を踏まず、かつ
  // SSR/初回ハイドレーションでは常にundefined（読み込み中）を返すためハイドレーション不整合も起きない。
  const profile = useLifeProfile();
  const completedRef = useRef(false);

  const scenarios = useMemo(() => (profile ? buildScenarios(profile) : null), [profile]);
  const worst = useMemo(() => (scenarios ? findWorstScenario(scenarios) : null), [scenarios]);
  const recommendations = useMemo(
    () => (profile && scenarios ? buildRecommendations(profile, scenarios) : []),
    [profile, scenarios]
  );
  const safePlan = useMemo(() => (profile ? buildSafePlan(profile) : null), [profile]);
  const safeScenarios = useMemo(
    () => (safePlan ? buildScenarios(safePlan.profile) : null),
    [safePlan]
  );

  useEffect(() => {
    if (profile && scenarios && !completedRef.current) {
      completedRef.current = true;
      const includedTopics = [
        profile.housing.intent !== "none" ? "housing" : null,
        profile.family.children > 0 ? "family" : null,
        profile.car.plan !== "none" ? "car" : null,
      ]
        .filter(Boolean)
        .join(",");
      trackPlanEvent("plan_complete", { entry_intent: profile.entryIntent, included_topics: includedTopics });
    }
  }, [profile, scenarios]);

  // loading中（undefined）はローディング表示、明示的にnull（データ不足）は案内表示
  if (profile === undefined) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <p className="text-slate-400 text-sm">読み込み中…</p>
      </div>
    );
  }

  if (!profile || !scenarios || !worst || !safePlan || !safeScenarios) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-4">
          <p className="text-lg font-black text-white">まだプランが作成されていません</p>
          <p className="text-sm text-slate-400">
            結果を見るには、先に「わが家のプラン」で条件を入力してください。
          </p>
          <Link
            href="/plan"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            わが家のプランを作る →
          </Link>
        </div>
      </div>
    );
  }

  const handleProfileChange = (next: LifeProfile, fieldGroup: "household" | "housing" | "family" | "car") => {
    // saveLifeProfile が useLifeProfile の購読者に変更通知するため、
    // ローカルstateを別途更新する必要はない
    saveLifeProfile(next);
    trackPlanEvent("scenario_change", { field_group: fieldGroup });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <nav className="flex items-center gap-1.5 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-300">ホーム</Link>
          <span>/</span>
          <Link href="/plan" className="hover:text-blue-300">わが家のプラン</Link>
          <span>/</span>
          <span className="text-slate-200">結果</span>
        </nav>

        <ConclusionCard worst={worst} annualNetBonus={householdAnnualNetBonus(profile)} />

        <section className="space-y-3">
          <h2 className="text-lg font-black text-white">5つの時点で見る</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {scenarios.map((s) => (
              <ScenarioSnapshotCard key={s.id} scenario={s} isWorst={s.id === worst.id} />
            ))}
          </div>
        </section>

        <ScenarioComparisonSection
          wishScenarios={scenarios}
          safePlan={safePlan}
          safeScenarios={safeScenarios}
        />

        <WealthProjectionSection profile={profile} />

        <RecommendationList recommendations={recommendations} />

        <PlanEditPanel profile={profile} onChange={handleProfileChange} />

        <section className="space-y-3">
          <h2 className="text-lg font-black text-white">詳細な診断へ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {DETAIL_TOOLS.map((t) => (
              <Link
                key={t.tool}
                href={t.href}
                onClick={() => trackPlanEvent("detail_tool_open", { tool: t.tool, source: "plan_result" })}
                className="flex flex-col items-center gap-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-4 hover:border-slate-500 transition-colors"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="text-xs font-semibold text-slate-300 text-center">{t.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {profile.housing.intent !== "none" && (
          <section className="pt-2">
            <AffiliateCta
              program="hikkoshi"
              page="plan-result"
              heading="購入が具体化したあとで大丈夫"
              title="引っ越し費用も、1社だけで決めずに比べる"
              note="物件が決まってから使うサービスです。今すぐ申し込む必要はありません。時期が来たら、最大10社の見積もりを同じ条件で比較できます。"
              cta="引っ越し料金を無料で比較する →"
            />
          </section>
        )}

        <CalculationNotes />
      </div>
    </div>
  );
}

/** scenario_compare は比較セクションが表示された時点で1回だけ発火する */
function ScenarioComparisonSection(props: Parameters<typeof ScenarioComparison>[0]) {
  const firedRef = useRef(false);
  useEffect(() => {
    if (!firedRef.current) {
      firedRef.current = true;
      trackPlanEvent("scenario_compare", { adjustment_type: props.safePlan.adjustmentType });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <ScenarioComparison {...props} />;
}
