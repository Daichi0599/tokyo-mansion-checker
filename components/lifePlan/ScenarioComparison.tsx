import type { ScenarioSnapshot } from "@/lib/lifePlan/scenarios";
import type { SafePlanResult } from "@/lib/lifePlan/safePlan";

interface Props {
  wishScenarios: ScenarioSnapshot[];
  safePlan: SafePlanResult;
  safeScenarios: ScenarioSnapshot[];
}

export default function ScenarioComparison({ wishScenarios, safePlan, safeScenarios }: Props) {
  const wishWorst = wishScenarios.reduce((w, s) => (s.monthlyBalance < w.monthlyBalance ? s : w), wishScenarios[0]);
  const safeWorst = safeScenarios.reduce((w, s) => (s.monthlyBalance < w.monthlyBalance ? s : w), safeScenarios[0]);
  const noAdjustment = safePlan.adjustments.length === 0;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-black text-white">希望プランと安全プラン</h2>
        <p className="text-sm text-slate-400 mt-1">
          {noAdjustment
            ? "希望プランのまま、すべての時点で赤字は出ていません。"
            : "希望プランで赤字が出る時点があったため、車・住宅価格の順に自動で調整した安全プランと比較します。頭金・子どもの人数・出産や教育の方針は価値観に関わるため変更していません。"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">希望プラン</p>
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 space-y-1">
            <p className="text-sm text-slate-300">最も厳しい時点：{wishWorst.label}</p>
            <p className={`text-xl font-black ${wishWorst.monthlyBalance < 0 ? "text-red-400" : "text-emerald-300"}`}>
              月間余力 {wishWorst.monthlyBalance}万円
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold text-blue-300 uppercase tracking-wide">安全プラン</p>
          <div className="bg-slate-800 rounded-2xl border border-blue-500/40 p-4 space-y-1">
            <p className="text-sm text-slate-300">最も厳しい時点：{safeWorst.label}</p>
            <p className={`text-xl font-black ${safeWorst.monthlyBalance < 0 ? "text-red-400" : "text-emerald-300"}`}>
              月間余力 {safeWorst.monthlyBalance}万円
            </p>
          </div>
        </div>
      </div>

      {!noAdjustment && (
        <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-4 space-y-1">
          <p className="text-xs font-bold text-slate-300">安全プランでの調整内容</p>
          {safePlan.adjustments.map((a) => (
            <p key={a} className="text-sm text-slate-400">・{a}</p>
          ))}
        </div>
      )}
    </div>
  );
}
