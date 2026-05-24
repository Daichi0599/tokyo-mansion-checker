import type { Metadata } from "next";
import Link from "next/link";

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

const SUB_TOOLS = [
  {
    icon: "🔍",
    title: "物件診断",
    desc: "坪単価・管理費・10年後売却価格を即チェック",
    href: "/check",
    color: "text-indigo-600",
    bg: "hover:bg-indigo-50 border-indigo-100",
  },
  {
    icon: "🚗",
    title: "車コスト診断",
    desc: "購入・カーシェア・リースを10年総額で比較",
    href: "/car",
    color: "text-emerald-600",
    bg: "hover:bg-emerald-50 border-emerald-100",
  },
  {
    icon: "👶",
    title: "子育て費用試算",
    desc: "0歳〜大学まで進路別にシミュレーション",
    href: "/child",
    color: "text-orange-600",
    bg: "hover:bg-orange-50 border-orange-100",
  },
];

const ARTICLES = [
  {
    tag: "年収・購入可能額",
    title: "年収別マンション購入可能額の目安【早見表付き】",
    href: "/articles/nenshu-mansion-price",
  },
  {
    tag: "金利",
    title: "変動金利 vs 固定金利、どちらが得か？2026年版",
    href: "/articles/jutaku-loan-hendokinri-koteikinri",
  },
  {
    tag: "返済比率",
    title: "住宅ローンの返済比率は何%が安全？年収別の目安を解説",
    href: "/articles/juutaku-loan-burden-rate",
  },
  {
    tag: "買い時",
    title: "都内マンション、2025〜2026年は買い時か？",
    href: "/articles/mansion-kaidoki-2025",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-14">

        {/* ── ヒーロー ── */}
        <header className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">
            30代のお金の一歩目に
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              気になったら、<br className="sm:hidden" />
              <span className="text-blue-600">まずここから。</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
              マンション・車・子育て費用——<br />
              大きな決断の前に、数字で整理しよう。
            </p>
          </div>

          {/* 主要CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/mansion"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-7 py-3.5 rounded-xl text-sm transition-colors shadow-md"
            >
              🏠 マンション購入診断を始める →
            </Link>
            <Link
              href="/check"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-bold px-5 py-3.5 rounded-xl text-sm border border-gray-200 transition-colors"
            >
              🔍 気になる物件を診断する
            </Link>
          </div>

          {/* 安心バッジ */}
          <div className="flex flex-wrap justify-center gap-2">
            {["完全無料", "匿名OK", "データ保存なし", "営業電話なし"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                ✓ {b}
              </span>
            ))}
          </div>
        </header>

        {/* ── マンション診断（メインツール） ── */}
        <section className="space-y-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Main Tool</p>

          <Link
            href="/mansion"
            className="block rounded-2xl overflow-hidden shadow-md border-2 border-blue-300 hover:border-blue-400 transition-all hover:shadow-lg"
          >
            {/* カードヘッダー */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏠</span>
                <div>
                  <p className="text-white font-extrabold text-base leading-tight">マンション購入診断</p>
                  <p className="text-blue-200 text-xs mt-0.5">「無理なく買える価格」を3分で算出</p>
                </div>
              </div>
              <span className="text-white font-bold text-xl">→</span>
            </div>
            {/* カードボディ */}
            <div className="bg-white px-6 py-4">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                年収・生活費・管理費を入力するだけ。銀行の「借りられる額」ではなく、家計を崩さない安全な購入価格がわかります。
              </p>
              <div className="flex flex-wrap gap-2">
                {["約3分で完了", "世帯年収対応", "負担率チェック", "金利シミュレーション"].map((b) => (
                  <span key={b} className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 border-t border-blue-100 px-6 py-2.5">
              <p className="text-xs font-extrabold text-blue-700">今すぐ診断を始める →</p>
            </div>
          </Link>
        </section>

        {/* ── サブツール3つ ── */}
        <section className="space-y-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Other Tools</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SUB_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={`block rounded-xl border bg-white px-4 py-4 transition-colors ${tool.bg}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{tool.icon}</span>
                  <div>
                    <p className={`text-sm font-extrabold ${tool.color}`}>{tool.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── コラム記事ピックアップ ── */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Column</p>
            <Link href="/articles" className="text-xs font-bold text-blue-600 hover:underline">
              すべて見る →
            </Link>
          </div>
          <div className="space-y-2">
            {ARTICLES.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-blue-200 hover:bg-blue-50 transition-colors"
              >
                <span className="shrink-0 text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {a.tag}
                </span>
                <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-1">{a.title}</p>
                <span className="shrink-0 text-gray-400 text-xs ml-auto">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── コンセプト ── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 space-y-3 text-center">
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
          <p>© 2026 30Lab</p>
        </footer>

      </div>
    </div>
  );
}
