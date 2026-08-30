import type { ScenarioSnapshot } from "@/lib/lifePlan/scenarios";

const STATUS_STYLE: Record<ScenarioSnapshot["status"], { label: string; badge: string }> = {
  comfortable: { label: "余裕あり", badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
  tight: { label: "ぎりぎり", badge: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
  deficit: { label: "赤字", badge: "bg-red-500/15 text-red-300 border-red-500/30" },
};

export default function ScenarioSnapshotCard({ scenario, isWorst }: { scenario: ScenarioSnapshot; isWorst: boolean }) {
  const style = STATUS_STYLE[scenario.status];
  return (
    <div
      className={`rounded-2xl border p-4 space-y-3 ${
        isWorst ? "border-blue-500/50 bg-blue-500/5" : "border-slate-700 bg-slate-800"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-black text-white">{scenario.label}</p>
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${style.badge}`}>
          {style.label}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-[10px] text-slate-400">収入</p>
          <p className="text-sm font-bold text-slate-200">{scenario.monthlyIncome}万</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400">支出</p>
          <p className="text-sm font-bold text-slate-200">{scenario.monthlyExpenses}万</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400">余力</p>
          <p className={`text-sm font-bold ${scenario.monthlyBalance < 0 ? "text-red-400" : "text-emerald-300"}`}>
            {scenario.monthlyBalance}万
          </p>
        </div>
      </div>

      {scenario.majorCosts.length > 0 && (
        <div className="pt-2 border-t border-slate-700/60 space-y-1">
          {scenario.majorCosts.map((c) => (
            <div key={c.label} className="flex items-center justify-between text-xs text-slate-400">
              <span>{c.label}</span>
              <span>{c.amount}万</span>
            </div>
          ))}
        </div>
      )}

      {scenario.notes.map((note) => (
        <p key={note} className="text-[11px] text-slate-500 leading-relaxed pt-1">
          ※ {note}
        </p>
      ))}
    </div>
  );
}
