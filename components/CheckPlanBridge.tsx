"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trackPlanEvent } from "@/lib/analytics";

/**
 * /checkは特定の物件（価格・坪単価・管理費など）を診断する一時的なチェックリスト的ツールで、
 * LifeProfile（世帯の継続的な条件）に自然に対応する概念が無い。そのため他ツールのような
 * プリフィル・自動書き戻しは行わず、遷移元に応じた導線（バナー／橋渡しCTA）だけを提供する。
 */
export function CheckPlanBanner() {
  const searchParams = useSearchParams();
  const fromPlan = searchParams.get("from") === "plan";
  if (!fromPlan) return null;

  return (
    <div className="flex items-center justify-between gap-3 bg-indigo-500/10 border border-indigo-500/30 rounded-xl px-4 py-2.5">
      <p className="text-xs text-indigo-300">📋 『わが家のプラン』から来ました</p>
      <Link href="/plan/result" className="text-xs font-bold text-indigo-300 hover:text-indigo-200 shrink-0 whitespace-nowrap">
        プランに戻る →
      </Link>
    </div>
  );
}

export function CheckPlanBridgeCta() {
  const searchParams = useSearchParams();
  const fromPlan = searchParams.get("from") === "plan";
  if (fromPlan) return null;

  return (
    <section className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-4 space-y-2">
      <p className="text-sm font-bold text-white">住宅・教育費・車と合わせて見るとどうなる？</p>
      <p className="text-xs text-slate-300 leading-relaxed">
        「わが家のプラン」で、住宅・子育て・車の費用もまとめて確認できます。
      </p>
      <Link
        href="/plan"
        onClick={() => trackPlanEvent("detail_tool_bridge", { tool: "check" })}
        className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
      >
        わが家のプランを見る →
      </Link>
    </section>
  );
}
