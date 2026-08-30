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
          <li>すべて額面年収ベースの簡易試算です。税金・社会保険料を差し引いた手取りベースの計算ではありません。</li>
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
