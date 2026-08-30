import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "30Lab｜30代の大きな決断を、数字で整理する",
  description:
    "家、車、出産、子育て。これからのお金をまとめて整理し、どこが判断の分かれ目になるかを確認できる無料ツール。完全無料・匿名OK・入力内容はブラウザ内だけで使用。",
  keywords: ["マンション購入診断", "物件診断", "車コスト比較", "出産費用 シミュレーション", "子育て費用試算", "30代 お金", "ライフプラン"],
  openGraph: {
    title: "30Lab｜30代の大きな決断を、数字で整理する",
    description: "家、車、出産、子育て。これからのお金をまとめて整理し、どこが判断の分かれ目になるかを確認できます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "30Lab｜30代の大きな決断を、数字で整理する",
    description: "家、車、出産、子育て。これからのお金をまとめて整理し、どこが判断の分かれ目になるかを確認できます。",
  },
};

/**
 * v2: 状況を選んで /plan（横断診断）へ誘導する4つの入口。
 * ツール一覧ではなく「わが家のプランを作る」を主役にするため、
 * 個別ツールは下の「個別に計算したい方へ」セクションへ移動した。
 */
const SITUATIONS: { icon: string; label: string; intent: "housing" | "family" | "car" | "all" }[] = [
  { icon: "🏠", label: "家を買いたい", intent: "housing" },
  { icon: "🤰", label: "子どもを考えている／妊娠した", intent: "family" },
  { icon: "🚗", label: "車を持つか迷っている", intent: "car" },
  { icon: "🗂️", label: "複数の予定をまとめて考えたい", intent: "all" },
];

/**
 * 個別に計算したい方へ。既存6ツールは維持しつつ、横断診断（主要CTA）より
 * 視覚的に弱い二次セクションへ移動した。
 */
const TOOLS = [
  { icon: "🏠", title: "マンション購入診断", href: "/mansion" },
  { icon: "🔍", title: "物件診断", href: "/check" },
  { icon: "🤰", title: "出産費用シミュレーター", href: "/birth" },
  { icon: "👶", title: "子育て費用試算", href: "/child" },
  { icon: "🚗", title: "車コスト診断", href: "/car" },
  { icon: "🏦", title: "ローン返済計算", href: "/loan" },
];

const ARTICLES = [
  { tag: "エリア", title: "城南エリアのマンションが高くて買えない人へ", href: "/articles/jonan-mansion-takakute-kaenai" },
  { tag: "エリア", title: "城南の代わりになる街は？代替候補5エリアを比較", href: "/articles/jonan-daitai-area" },
  { tag: "子育て", title: "子育て費用は総額いくら？0歳〜大学卒業までの目安", href: "/articles/kosodate-hiyou-sougaku" },
  { tag: "車", title: "都内でEVを買うと実際いくらか", href: "/articles/tokyo-ev-hojokin" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* ── ヒーロー（ダーク＋グロー） ── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 pt-16 pb-14 space-y-6 text-center">
          <div
            className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-500/25"
            style={{ animation: "fadeUp 0.45s ease-out both" }}
          >
            30代の大きな決断を、数字で整理する
          </div>

          <div className="space-y-3" style={{ animation: "fadeUp 0.45s ease-out 0.1s both" }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              大きな決断は、
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ひとつずつ起きるとは限らない。
              </span>
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              家、車、出産、子育て。これからのお金をまとめて整理し、
              <br />
              どこが判断の分かれ目になるかを確認できます。
            </p>
          </div>

          {/* 状況選択 → /plan?intent=... */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg mx-auto"
            style={{ animation: "fadeUp 0.45s ease-out 0.13s both" }}
          >
            {SITUATIONS.map((s) => (
              <Link
                key={s.intent}
                href={`/plan?intent=${s.intent}`}
                className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700 hover:border-blue-500/50 rounded-xl px-4 py-3 text-left transition-colors"
              >
                <span className="text-xl shrink-0">{s.icon}</span>
                <span className="text-sm font-semibold text-slate-200">{s.label}</span>
              </Link>
            ))}
          </div>

          {/* 主要CTA */}
          <div className="flex flex-col items-center gap-3" style={{ animation: "fadeUp 0.45s ease-out 0.2s both" }}>
            <Link
              href="/plan"
              className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-xl text-base transition-colors"
              style={{ animation: "pulseBlue 2.8s ease-in-out 0.8s infinite" }}
            >
              わが家のプランを作る →
            </Link>
            <p className="text-xs text-slate-400">完全無料・匿名OK・入力内容はブラウザ内だけで使用</p>
          </div>

          {/* 安心バッジ */}
          <div className="flex flex-wrap justify-center gap-2" style={{ animation: "fadeUp 0.45s ease-out 0.3s both" }}>
            {["完全無料", "匿名OK", "端末内にのみ保存", "営業電話なし"].map((b) => (
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

        {/* ── 個別に計算したい方へ ── */}
        <section className="space-y-3">
          <AnimateIn>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tools</p>
              <h2 className="text-base font-black text-white mt-1">個別に計算したい方へ</h2>
              <p className="text-sm text-slate-400 leading-relaxed mt-1">
                ひとつのテーマだけをすぐ計算したい場合は、こちらの個別ツールもそのまま使えます。
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {TOOLS.map((tool, i) => (
              <AnimateIn key={tool.href} delay={i * 40}>
                <Link
                  href={tool.href}
                  className="flex flex-col items-center gap-1.5 bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-4 hover:border-slate-500 transition-colors"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-xs font-semibold text-slate-300 text-center">{tool.title}</span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* ── 決断ノートのピックアップ ── */}
        <section className="space-y-3">
          <AnimateIn>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Notes</p>
                <p className="text-base font-black text-white mt-0.5">30代の決断ノート</p>
              </div>
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
                  <p className="text-sm font-semibold text-slate-200 leading-snug line-clamp-2">{a.title}</p>
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
                「マンションって実際いくらまで買えるの？」
                <br />
                「育休を取ったら、住宅ローンは大丈夫？」
                <br />
                「子どもができたら、お金どうなる？」
                <br />
                <br />
                そんな漠然とした疑問を、ひとつずつではなくまとめて数字で整理する場所。それが30Labです。
              </p>
              <Link href="/about" className="inline-block text-xs font-bold text-blue-400 hover:text-blue-300">
                このサイトについて →
              </Link>
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
