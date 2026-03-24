import type { Metadata } from "next";
import PropertyDiagnosis from "@/components/PropertyDiagnosis";

export const metadata: Metadata = {
  title: "物件診断 | 坪単価・管理費・10年後まで即チェック — 30Lab",
  description:
    "SUUMOなどで見つけた物件のスペックを入力するだけ。坪単価のエリア相場比較・管理費の適正チェック・10年後の推定売却価格を無料診断。結果をシェアしてパートナーと一緒に検討できます。",
  openGraph: {
    title: "物件診断 | 坪単価・管理費・10年後まで即チェック",
    description:
      "気になるマンションのスペックを入力 → 予算・割安感・管理費を即判定。結果をシェアして相談できます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "物件診断 | 坪単価・管理費・10年後まで即チェック",
    description: "坪単価・管理費・10年後推定を無料で診断。結果をシェアして相談できます。",
  },
};

export default function CheckPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

        {/* ヒーロー */}
        <header className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">
            🔍 Step 2 — 物件を評価する
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
            気になる物件を<br className="sm:hidden" />すぐ診断
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            SUUMOで見つけた物件のスペックを入力 → 予算・割安感・管理費を即確認。
            結果をシェアしてパートナーと一緒に検討できます。
          </p>
        </header>

        {/* Step 1 誘導バナー */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-blue-700">💡 Step 1 を先にやると精度UP</p>
            <p className="text-xs text-gray-500 mt-0.5">
              自分の安全購入価格を診断すると、予算シグナルが自動で連携されます
            </p>
          </div>
          <a
            href="/"
            className="shrink-0 text-xs font-bold bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            購入上限を診断 →
          </a>
        </div>

        {/* 物件診断 */}
        <PropertyDiagnosis />

        {/* フッター */}
        <footer className="text-center text-xs text-gray-400 pb-4 space-y-1">
          <p>本ツールは参考情報の提供を目的としています。投資・金融アドバイスではありません。</p>
          <p>© 2025 30Lab</p>
        </footer>
      </div>
    </div>
  );
}
