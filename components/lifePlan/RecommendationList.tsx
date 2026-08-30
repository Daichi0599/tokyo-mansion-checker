import Link from "next/link";
import type { Recommendation } from "@/lib/lifePlan/recommendations";

const TOOL_HREF: Record<NonNullable<Recommendation["relatedTool"]>, string> = {
  mansion: "/mansion",
  birth: "/birth",
  child: "/child",
  car: "/car",
};

const TOOL_LABEL: Record<NonNullable<Recommendation["relatedTool"]>, string> = {
  mansion: "マンション購入診断で詳しく見る",
  birth: "出産費用シミュレーターで詳しく見る",
  child: "子育て費用試算で詳しく見る",
  car: "車コスト診断で詳しく見る",
};

export default function RecommendationList({ recommendations }: { recommendations: Recommendation[] }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-black text-white">次に確認しておきたいこと</h2>
      <div className="space-y-2">
        {recommendations.map((rec, i) => (
          <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-4 space-y-2">
            <p className="text-sm text-slate-200 leading-relaxed">{rec.message}</p>
            {rec.relatedTool && (
              <Link
                href={TOOL_HREF[rec.relatedTool]}
                className="inline-block text-xs font-bold text-blue-400 hover:text-blue-300"
              >
                {TOOL_LABEL[rec.relatedTool]} →
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
