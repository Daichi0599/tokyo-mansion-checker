import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

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
    icon: "🏦",
    title: "ローン返済計算",
    desc: "借入額・金利・返済期間から月返済額を即計算",
    href: "/loan",
    color: "text-blue-400",
    border: "hover:border-blue-500/60",
    glow: "bg-blue-500/10",
  },
  {
    icon: "🔍",
    title: "物件診断",
    desc: "坪単価・管理費・10年後売却価格を即チェック",
    href: "/check",
    color: "text-indigo-400",
    border: "hover:border-indigo-500/60",
    glow: "bg-indigo-500/10",
  },
  {
    icon: "🚗",
    title: "車コスト診断",
    desc: "購入・カーシェア・リースを10年総額で比較",
    href: "/car",
    color: "text-emerald-400",
    border: "hover:border-emerald-500/60",
    glow: "bg-emerald-500/10",
  },
  {
    icon: "👶",
    title: "子育て費用試算",
    desc: "0歳〜大学まで進路別にシミュレーション",
    href: "/child",
    color: "text-amber-400",
    border: "hover:border-amber-500/60",
    glow: "bg-amber-500/10",
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
    <div className="min-h-screen bg-slate-900 text-white">

      {/* ── ヒーロー（ダーク＋グロー） ── */}
      <div className="relative overflow-hidden">
        {/* 背景グロー */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />
        {/* ドットグリッドパターン */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 pt-16 pb-14 space-y-6 text-center">
          {/* バッジ */}
          <div
            className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-500/25"
            style={{ animation: "fadeUp 0.45s ease-out both" }}
          >
            30代の大きな決断を、数字で整理する
          </div>

          {/* ヘッドライン */}
          <div
            className="space-y-3"
            style={{ animation: "fadeUp 0.45s ease-out 0.1s both" }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              気になったら、<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                まずここから。
              </span>
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
              「いくらまで買える？」「車、持つべき？」<br />
              漠然とした不安を、数字に変える無料ツール集。
            </p>
          </div>

          {/* ツール一覧チップ */}
          <div
            className="flex flex-wrap justify-center gap-2"
            style={{ animation: "fadeUp 0.45s ease-out 0.13s both" }}
          >
            {[
              { icon: "🏠", label: "マンション診断" },
              { icon: "🔍", label: "物件チェック" },
              { icon: "🏦", label: "ローン計算" },
              { icon: "🚗", label: "車コスト比較" },
              { icon: "👶", label: "子育て試算" },
            ].map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 rounded-full px-3 py-1.5 text-xs text-slate-300 font-medium"
              >
                {t.icon} {t.label}
              </span>
            ))}
          </div>

          {/* ソーシャルプルーフ */}
          <div
            className="flex items-center justify-center gap-1.5 text-xs text-slate-500"
            style={{ animation: "fadeUp 0.45s ease-out 0.15s both" }}
          >
            <span className="text-base">👥</span>
            <span>累計 <strong className="text-slate-300">1,200+</strong> 件の診断完了</span>
          </div>

          {/* 主要CTA */}
          <div
            className="flex flex-col sm:flex-row items-stretch justify-center gap-3 w-full max-w-md mx-auto"
            style={{ animation: "fadeUp 0.45s ease-out 0.2s both" }}
          >
            <Link
              href="/mansion"
              className="flex flex-1 items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm transition-colors"
              style={{ animation: "pulseBlue 2.8s ease-in-out 0.8s infinite" }}
            >
              🏠 マンション購入診断を始める →
            </Link>
            <Link
              href="/check"
              className="flex flex-1 items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-6 py-3.5 rounded-xl text-sm border border-slate-600 transition-colors"
            >
              🔍 気になる物件を診断する
            </Link>
          </div>

          {/* 安心バッジ */}
          <div
            className="flex flex-wrap justify-center gap-2"
            style={{ animation: "fadeUp 0.45s ease-out 0.3s both" }}
          >
            {["完全無料", "匿名OK", "データ保存なし", "営業電話なし"].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full"
              >
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── コンテンツエリア ── */}
      <div className="max-w-5xl mx-auto px-4 pb-14 space-y-10">

        {/* ── メインツール ＋ サブツール（PC: 横並び） ── */}
        <section className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-[3fr_2fr] lg:gap-6">

          {/* メインツール */}
          <AnimateIn className="flex flex-col">
            <div className="flex flex-col flex-1 space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center lg:text-left">
                Main Tool
              </p>
              <Link
                href="/mansion"
                className="flex flex-col flex-1 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/70 hover:-translate-y-1 transition-all duration-200"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🏠</span>
                    <div>
                      <p className="text-white font-extrabold text-lg leading-tight">
                        マンション購入診断
                      </p>
                      <p className="text-blue-200 text-sm mt-0.5">
                        「無理なく買える価格」を3分で算出
                      </p>
                    </div>
                  </div>
                  <span className="text-white font-bold text-2xl shrink-0">→</span>
                </div>
                <div className="bg-slate-800 px-6 py-5 flex-1">
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    年収・生活費・管理費を入力するだけ。銀行の「借りられる額」ではなく、家計を崩さない安全な購入価格がわかります。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["約3分で完了", "世帯年収対応", "負担率チェック", "金利シミュレーション"].map((b) => (
                      <span
                        key={b}
                        className="text-xs font-semibold bg-blue-500/10 text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/20"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/60 border-t border-slate-700 px-6 py-3">
                  <p className="text-sm font-extrabold text-blue-400">今すぐ診断を始める →</p>
                </div>
              </Link>
            </div>
          </AnimateIn>

          {/* サブツール（2×2グリッド） */}
          <AnimateIn delay={100}>
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center lg:text-left">
                Other Tools
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SUB_TOOLS.map((tool, i) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`flex flex-col items-center text-center gap-2.5 rounded-xl border border-slate-700 bg-slate-800 px-3 py-5 transition-all duration-200 hover:-translate-y-1 ${tool.border}`}
                  >
                    <span className={`text-3xl p-2.5 rounded-xl ${tool.glow}`}>
                      {tool.icon}
                    </span>
                    <p className={`text-sm font-extrabold leading-tight ${tool.color}`}>{tool.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </AnimateIn>

        </section>

        {/* ── コラム記事ピックアップ ── */}
        <section className="space-y-3">
          <AnimateIn>
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Column</p>
              <Link href="/articles" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
                すべて見る →
              </Link>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {ARTICLES.map((a, i) => (
              <AnimateIn key={a.href} delay={i * 70}>
                <Link
                  href={a.href}
                  className="flex items-center gap-3 bg-slate-800 rounded-xl border border-slate-700 px-4 py-3.5 hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-200 h-full"
                >
                  <span className="shrink-0 text-xs font-bold bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {a.tag}
                  </span>
                  <p className="text-sm font-semibold text-slate-200 leading-snug line-clamp-2">
                    {a.title}
                  </p>
                  <span className="shrink-0 text-slate-500 text-xs ml-auto">→</span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* ── コンセプト ── */}
        <AnimateIn>
          <section
            className="rounded-2xl border border-slate-700 bg-slate-800 px-8 py-8 text-center"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
          >
            <div className="max-w-xl mx-auto space-y-3">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-wide">About 30Lab</p>
              <p className="text-base font-extrabold text-white leading-snug">
                気になり始めた、その最初の一歩に
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                「マンションって実際いくらまで買えるの？」<br />
                「車、持つべき？手放すべき？」<br />
                「子どもができたら、お金どうなる？」<br /><br />
                そんな漠然とした疑問を、数字で整理する場所。それが30Labです。
              </p>
            </div>
          </section>
        </AnimateIn>

        {/* ── フッター ── */}
        <footer className="text-center text-xs text-slate-600 pb-4 space-y-1">
          <p>本ツールは参考情報の提供を目的としています。投資・金融アドバイスではありません。</p>
          <p>© 2026 30Lab</p>
        </footer>

      </div>
    </div>
  );
}
