import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30Lab | 気になったら、まずここから。",
  description:
    "マンション購入・物件診断・車・子育て費用——大きな決断の前に数字で整理できる無料ツール集。完全無料・匿名OK・データ保存なし・営業電話なし。",
  keywords: ["マンション購入診断", "物件診断", "車コスト比較", "子育て費用試算", "30代 お金"],
  openGraph: {
    title: "30Lab | 気になったら、まずここから。",
    description:
      "マンション・車・子育て費用。大きな決断の前に数字で整理できる無料ツール集。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "30Lab | 気になったら、まずここから。",
    description:
      "マンション・車・子育て費用。大きな決断の前に数字で整理できる無料ツール集。完全無料・匿名OK。",
  },
};

/* ── ツールカード ──────────────────────────────────────────── */
// Tailwindの動的クラス問題を避けるため、完全なクラス文字列をツールごとに定義
const TOOLS = [
  {
    icon:    "🏠",
    step:    "Step 1",
    title:   "マンション購入診断",
    desc:    "「借りられる額」ではなく「無理なく買える額」がわかる。世帯年収・生活費・管理費から安全購入価格を算出。",
    badges:  ["約3分", "世帯年収対応", "負担率チェック"],
    cta:     "診断を始める →",
    href:    "/mansion",
    card:    "border-blue-200 hover:bg-blue-50",
    footer:  "bg-blue-50 border-blue-200",
    text:    "text-blue-700",
    badge:   "bg-blue-100 text-blue-700",
  },
  {
    icon:    "🔍",
    step:    "Step 2",
    title:   "物件診断",
    desc:    "SUUMOで見つけた物件をすぐ評価。坪単価のエリア比較・管理費の適正チェック・10年後の推定売却価格。",
    badges:  ["坪単価比較", "管理費チェック", "シェア機能"],
    cta:     "物件を診断する →",
    href:    "/check",
    card:    "border-indigo-200 hover:bg-indigo-50",
    footer:  "bg-indigo-50 border-indigo-200",
    text:    "text-indigo-700",
    badge:   "bg-indigo-100 text-indigo-700",
  },
  {
    icon:    "🚗",
    step:    null,
    title:   "車コスト診断",
    desc:    "購入・ローン・カーシェア・リースを10年総コストで比較。都内在住者向けの現実的なコスト試算。",
    badges:  ["10年総コスト", "4パターン比較"],
    cta:     "コストを比較する →",
    href:    "/car",
    card:    "border-emerald-200 hover:bg-emerald-50",
    footer:  "bg-emerald-50 border-emerald-200",
    text:    "text-emerald-700",
    badge:   "bg-emerald-100 text-emerald-700",
  },
  {
    icon:    "👶",
    step:    null,
    title:   "子育て費用試算",
    desc:    "0歳〜大学卒業まで。公立・私立・習い事の選択で教育費がどう変わるかを可視化。補助金・助成金も確認。",
    badges:  ["教育費シミュレーション", "補助金確認"],
    cta:     "費用を試算する →",
    href:    "/child",
    card:    "border-orange-200 hover:bg-orange-50",
    footer:  "bg-orange-50 border-orange-200",
    text:    "text-orange-700",
    badge:   "bg-orange-100 text-orange-700",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-12">

        {/* ── ヒーロー ── */}
        <header className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">
            30代のお金の一歩目に
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            気になったら、<br className="sm:hidden" />
            <span className="text-blue-600">まずここから。</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            マンション・車・子育て費用——<br />
            大きな決断の前に、数字で整理しよう。
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["完全無料", "匿名OK", "データ保存なし", "営業電話なし"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                ✓ {b}
              </span>
            ))}
          </div>
        </header>

        {/* ── ツール一覧 ── */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center">Tools</h2>
          <div className="space-y-4">
            {TOOLS.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className={`block rounded-2xl border-2 bg-white transition-colors shadow-sm overflow-hidden ${tool.card}`}
              >
                <div className="px-5 py-5 flex items-start gap-4">
                  <span className="text-3xl shrink-0 mt-0.5">{tool.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {tool.step && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tool.badge}`}>
                          {tool.step}
                        </span>
                      )}
                      <p className="text-base font-extrabold text-gray-900">{tool.title}</p>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">{tool.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tool.badges.map((b) => (
                        <span key={b} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tool.badge}`}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className={`shrink-0 text-sm font-bold mt-1 ${tool.text}`}>→</span>
                </div>
                <div className={`px-5 py-3 border-t ${tool.footer}`}>
                  <p className={`text-xs font-bold ${tool.text}`}>{tool.cta}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── コンセプト ── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 space-y-4 text-center">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">About 30Lab</p>
          <p className="text-base font-extrabold text-gray-800 leading-snug">
            気になり始めた、その最初の一歩に
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            「マンションって実際いくらまで買えるの？」<br />
            「車、持つべき？手放すべき？」<br />
            「子どもができたら、お金どうなる？」<br /><br />
            そんな漠然とした疑問を、数字で整理する場所。それが30Labです。
          </p>
        </section>

        {/* ── フッター ── */}
        <footer className="text-center text-xs text-gray-400 pb-4 space-y-1">
          <p>本ツールは参考情報の提供を目的としています。投資・金融アドバイスではありません。</p>
          <p>© 2025 30Lab</p>
        </footer>

      </div>
    </div>
  );
}
