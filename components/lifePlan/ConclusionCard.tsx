import type { ScenarioSnapshot } from "@/lib/lifePlan/scenarios";

const STATUS_LABEL: Record<ScenarioSnapshot["status"], string> = {
  comfortable: "余裕あり",
  tight: "ぎりぎり",
  deficit: "赤字",
};

export default function ConclusionCard({ worst }: { worst: ScenarioSnapshot }) {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 space-y-3">
      <p className="text-xs font-bold text-indigo-400 uppercase tracking-wide">結論</p>
      <p className="text-lg font-black text-white leading-snug">
        この計画で最も家計が厳しくなるのは、{worst.label}です。
      </p>
      <p className="text-sm text-slate-300 leading-relaxed">
        月間余力は約{worst.monthlyBalance}万円（
        <span
          className={
            worst.status === "deficit"
              ? "text-red-400 font-bold"
              : worst.status === "tight"
                ? "text-amber-400 font-bold"
                : "text-emerald-400 font-bold"
          }
        >
          {STATUS_LABEL[worst.status]}
        </span>
        ）です。この時点を基準に計画すると、他の時点はより余裕を持って迎えられます。
      </p>
      <p className="text-xs text-slate-500">
        額面年収ベースの簡易試算です。手取りベースではないため、実際の余力はこれより少なくなる場合があります。
      </p>
    </div>
  );
}
