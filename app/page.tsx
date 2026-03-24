/* ── ツールカード ──────────────────────────────────────────── */
const TOOLS = [
  {
    icon:    "🏠",
    step:    "Step 1",
    title:   "マンション購入診断",
    desc:    "「借りられる額」ではなく「無理なく買える額」がわかる。世帯年収・生活費・管理費から安全購入価格を算出。",
    badges:  ["約3分", "世帯年収対応", "負担率チェック"],
    cta:     "無料で診断する →",
    href:    "/mansion",
    color:   "blue",
  },
  {
    icon:    "🔍",
    step:    "Step 2",
    title:   "物件診断",
    desc:    "SUUMOで見つけた物件をすぐ評価。坪単価のエリア比較・管理費の適正チェック・10年後の推定売却価格。",
    badges:  ["坪単価比較", "管理費チェック", "シェア機能"],
    cta:     "物件を診断する →",
    href:    "/check",
    color:   "indigo",
  },
  {
    icon:    "🚗",
    step:    null,
    title:   "車コスト診断",
    desc:    "購入・ローン・カーシェア・リースを10年総コストで比較。都内在住者向けの現実的なコスト試算。",
    badges:  ["10年総コスト", "4パターン比較"],
    cta:     "比較する →",
    href:    "/car",
    color:   "emerald",
  },
  {
    icon:    "👶",
    step:    null,
    title:   "子育て費用試算",
    desc:    "0歳〜大学卒業まで。公立・私立・習い事の選択で教育費がどう変わるかを可視化。補助金・助成金も確認。",
    badges:  ["教育費シミュレーション", "補助金確認"],
    cta:     "試算する →",
    href:    "/child",
    color:   "orange",
  },
];

const COLOR_MAP: Record<string, { border: string; bg: string; text: string; badge: string; btn: string }> = {
  blue:   { border: "border-blue-200",   bg: "bg-blue-50",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-700",   btn: "bg-blue-600 hover:bg-blue-700"   },
  indigo: { border: "border-indigo-200", bg: "bg-indigo-50", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-700", btn: "bg-indigo-600 hover:bg-indigo-700" },
  emerald:{ border: "border-emerald-200",bg: "bg-emerald-50",text: "text-emerald-700",badge: "bg-emerald-100 text-emerald-700",btn: "bg-emerald-600 hover:bg-emerald-700"},
  orange: { border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-700", badge: "bg-orange-100 text-orange-700", btn: "bg-orange-500 hover:bg-orange-600" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-12">

        {/* ── ヒーロー ── */}
        <header className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">
            30代の大きな決断を、数字で支える
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            買う前に、<br className="sm:hidden" />
            <span className="text-blue-600">数字で確かめる。</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            マンション購入・物件選び・車・子育て費用。<br />
            30代が直面するお金の判断を、無料ツールでサポートします。
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
            {TOOLS.map((tool) => {
              const c = COLOR_MAP[tool.color];
              return (
                <a
                  key={tool.href}
                  href={tool.href}
                  className={`block rounded-2xl border-2 ${c.border} bg-white hover:${c.bg} transition-colors shadow-sm overflow-hidden`}
                >
                  <div className="px-5 py-5 flex items-start gap-4">
                    <span className="text-3xl shrink-0 mt-0.5">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {tool.step && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                            {tool.step}
                          </span>
                        )}
                        <p className="text-base font-extrabold text-gray-900">{tool.title}</p>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed mb-2">{tool.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tool.badges.map((b) => (
                          <span key={b} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className={`shrink-0 text-sm font-bold ${c.text} mt-1`}>→</span>
                  </div>
                  <div className={`px-5 py-3 ${c.bg} border-t ${c.border}`}>
                    <p className={`text-xs font-bold ${c.text}`}>{tool.cta}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ── コンセプト ── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 space-y-4 text-center">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">About 30Lab</p>
          <p className="text-base font-extrabold text-gray-800 leading-snug">
            「なんとなく決める」をなくしたい
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            マンション・車・子育て——30代は大きな出費が重なる時期です。<br />
            でも、「実際いくらかかるか」を正確に把握できている人は少ない。<br />
            30Labは、数字の根拠を持って決断できるツールを作っています。
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
