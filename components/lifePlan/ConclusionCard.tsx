import Link from "next/link";
import type { ScenarioSnapshot } from "@/lib/lifePlan/scenarios";

const STATUS_LABEL: Record<ScenarioSnapshot["status"], string> = {
  comfortable: "余裕あり",
  tight: "ぎりぎり",
  deficit: "赤字",
};

export default function ConclusionCard({
  worst,
  annualNetBonus,
}: {
  worst: ScenarioSnapshot;
  annualNetBonus: number;
}) {
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
      {annualNetBonus > 0 && (
        <p className="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-3 py-2">
          年間ボーナス手取り目安：約{annualNetBonus}万円（頭金・特別支出用の別枠です。上の月間余力には含めていません）
        </p>
      )}
      <p className="text-xs text-slate-500">
        月々の給与部分から、年収帯に応じた概算の手取り率で試算しています（詳細な税額計算ではありません）。
      </p>
      <Link
        href="#wealth-projection"
        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-300 hover:text-indigo-200"
      >
        10年後・20年後の資産推移を見る ↓
      </Link>
    </div>
  );
}
