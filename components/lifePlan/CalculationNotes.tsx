"use client";

import { clearLifeProfile } from "@/lib/lifePlan";

export default function CalculationNotes() {
  const handleClear = () => {
    if (typeof window !== "undefined" && !window.confirm("入力内容を削除します。よろしいですか？")) return;
    // clearLifeProfile が useLifeProfile の購読者に変更通知するため、
    // 呼び出し側で状態を更新する必要はない
    clearLifeProfile();
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-4 space-y-2">
        <p className="text-xs font-bold text-slate-300">計算条件・免責事項</p>
        <ul className="text-xs text-slate-500 leading-relaxed list-disc pl-4 space-y-1">
          <li>月々の収支は、年収帯に応じた概算の手取り率をかけた試算です（詳細な所得税・住民税・社会保険料の計算ではありません）。</li>
          <li>賞与（ボーナス）は月割りせず、年間の手取り目安を頭金・特別支出用の別枠として表示しています。月間余力には含まれていません。</li>
          <li>月間余力は、住居費・生活費・車・NISA/株などの積立額を全て支出として引いた後に手元に残る額です。この額がそのまま毎月の貯金純増のイメージになります。</li>
          <li>「余裕あり／ぎりぎり／赤字」は月間余力の目安による自動判定で、実際の生活可能性を保証するものではありません。</li>
          <li>教育費・車の維持費は都内の一般的な相場から概算しています。実際の金額とは異なる場合があります。</li>
          <li>入力内容はこの端末のブラウザにのみ保存され、サーバーには送信されません。</li>
        </ul>
      </div>

      <button
        type="button"
        onClick={handleClear}
        className="text-xs font-semibold text-slate-500 hover:text-red-400 transition-colors underline underline-offset-2"
      >
        入力内容を削除する
      </button>
    </div>
  );
}
