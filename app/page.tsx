import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "都内マンション・車・出産・子育て費用の無料診断ツール｜30Lab",
  description:
    "都内マンション購入・物件診断・車の維持費・出産費用・子育て費用——30代の大きな決断を数字で整理できる無料ツール集。完全無料・匿名OK・データ保存なし・営業電話なし。",
  keywords: ["マンション購入診断", "物件診断", "車コスト比較", "出産費用 シミュレーション", "子育て費用試算", "30代 お金"],
  openGraph: {
    title: "都内マンション・車・出産・子育て費用の無料診断ツール｜30Lab",
    description:
      "マンション・車・出産・子育て費用。大きな決断の前に数字で整理できる無料ツール集。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "都内マンション・車・出産・子育て費用の無料診断ツール｜30Lab",
    description:
      "マンション・車・出産・子育て費用。大きな決断の前に数字で整理できる無料ツール集。完全無料・匿名OK。",
  },
};

/**
 * 30代がぶつかる決断を、直面する順に並べる。
 * 以前はマンション診断だけを Main Tool として大きく出し、残りを Other Tools と
 * していたため、マンション×住宅ローンの専門サイトに見えていた。
 * どれも同じ大きさの決断なので、並列に扱う。
 */
const TOOLS = [
  {
    icon: "🏠",
    question: "家、いくらまでなら買っていい？",
    title: "マンション購入診断",
    desc: "銀行の「借りられる額」ではなく、家計を崩さない価格を出します。金利上昇シミュレーションつき。",
    href: "/mansion",
    color: "text-blue-300",
    border: "hover:border-blue-500/60",
    glow: "bg-blue-500/10",
  },
  {
    icon: "🔍",
    question: "この物件、高い？安い？",
    title: "物件診断",
    desc: "坪単価をエリア相場と比較し、管理費や10年後の売却価格まで即チェック。",
    href: "/check",
    color: "text-indigo-300",
    border: "hover:border-indigo-500/60",
    glow: "bg-indigo-500/10",
  },
  {
    icon: "🤰",
    question: "出産って結局いくらかかる？",
    title: "出産費用シミュレーター",
    desc: "無痛分娩・帝王切開に対応。一時金や育休給付まで差し引いた実際の収支が出ます。",
    href: "/birth",
    color: "text-pink-300",
    border: "hover:border-pink-500/60",
    glow: "bg-pink-500/10",
  },
  {
    icon: "👶",
    question: "子ども1人、育てるのにいくら？",
    title: "子育て費用試算",
    desc: "中学受験や進路別に0歳〜大学まで試算。児童手当・018サポートを引いた実質負担も。",
    href: "/child",
    color: "text-amber-300",
    border: "hover:border-amber-500/60",
    glow: "bg-amber-500/10",
  },
  {
    icon: "🚗",
    question: "都内で車、持つべき？",
    title: "車コスト診断",
    desc: "カーシェア・中古車・新車を10年の総額で比較。駐車場代込みで判定します。",
    href: "/car",
    color: "text-emerald-300",
    border: "hover:border-emerald-500/60",
    glow: "bg-emerald-500/10",
  },
  {
    icon: "🏦",
    question: "毎月いくら返す？",
    title: "ローン返済計算",
    desc: "借入額・金利・返済期間から月返済額を即計算。",
    href: "/loan",
    color: "text-slate-300",
    border: "hover:border-slate-500",
    glow: "bg-slate-700",
  },
];

/**
 * ピックアップはサイトの軸（エリア・資産価値／子育て／物件そのもの）から選ぶ。
 * 以前は年収・金利・返済比率と金融一般論が3枠を占めていて、
 * 住宅ローン解説サイトのように見えていた。
 */
const ARTICLES = [
  {
    tag: "エリア",
    title: "城南エリアのマンションが高くて買えない人へ",
    href: "/articles/jonan-mansion-takakute-kaenai",
  },
  {
    tag: "エリア",
    title: "城南の代わりになる街は？代替候補5エリアを比較",
    href: "/articles/jonan-daitai-area",
  },
  {
    tag: "子育て",
    title: "子育て費用は総額いくら？0歳〜大学卒業までの目安",
    href: "/articles/kosodate-hiyou-sougaku",
  },
  {
    tag: "物件メモ",
    title: "デベロッパー比較｜三井・野村・東急・モリモト",
    href: "/articles/mansion-developer-brand",
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
              {/* h1 にキーワードが1語も入っていなかったため、ブランドコピーは残したまま
                  何のサイトかを示す一文を h1 の中に含めている */}
              <span className="block text-base sm:text-lg font-bold text-slate-200 mt-3">
                都内マンション・車・出産・子育て費用の無料診断ツール
              </span>
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              「いくらまで買える？」「車、持つべき？」<br />
              漠然とした不安を、数字に変える無料ツール集。
            </p>
          </div>

          {/* ツール一覧チップ */}
          <div
            className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full max-w-lg mx-auto"
            style={{ animation: "fadeUp 0.45s ease-out 0.13s both" }}
          >
            {[
              { icon: "🏠", label: "マンション診断" },
              { icon: "🔍", label: "物件チェック" },
              { icon: "🏦", label: "ローン計算" },
              { icon: "🚗", label: "車コスト比較" },
              { icon: "🤰", label: "出産費用" },
              { icon: "👶", label: "子育て試算" },
            ].map((t) => (
              <span
                key={t.label}
                className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 border border-slate-700 rounded-xl px-2 py-2 text-slate-300 font-medium"
              >
                <span className="text-xl">{t.icon}</span>
                <span className="text-[10px] leading-tight text-center">{t.label}</span>
              </span>
            ))}
          </div>

          {/* 差別化ポイント。
              以前は「累計1,200+件の診断完了」と件数を出していたが、GA4の実数は
              175件で、しかも大半が開発中の自己テストだった。検証できない数字を
              置くより、実際に他のツールがやっていないことを書くほうが誠実で強い。 */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-300"
            style={{ animation: "fadeUp 0.45s ease-out 0.15s both" }}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-base">📊</span>
              管理費・修繕積立金まで含めた<strong className="text-white">実質住居費</strong>で計算
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-base">⚠️</span>
              <strong className="text-white">金利上昇シミュレーション</strong>対応
            </span>
          </div>

          {/* 主要CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animation: "fadeUp 0.45s ease-out 0.2s both" }}
          >
            <Link
              href="/mansion"
              className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-extrabold px-7 py-3.5 rounded-xl text-sm transition-colors"
              style={{ animation: "pulseBlue 2.8s ease-in-out 0.8s infinite" }}
            >
              🏠 マンション購入診断を始める →
            </Link>
            <Link
              href="/check"
              className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-7 py-3.5 rounded-xl text-sm border border-slate-600 transition-colors"
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
        <section className="space-y-3">
          <AnimateIn>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tools</p>
              <h2 className="text-lg font-black text-white mt-1">30代がぶつかる決断</h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-1">
                どれも数百万〜数千万円が動く話なのに、なんとなくで決めてしまいがちなものばかり。まず数字にしてみるところから。
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TOOLS.map((tool, i) => (
              <AnimateIn key={tool.href} delay={i * 60}>
                <Link
                  href={tool.href}
                  className={`flex flex-col gap-2 h-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 transition-all duration-200 hover:-translate-y-1 ${tool.border}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl p-2 rounded-xl shrink-0 ${tool.glow}`}>{tool.icon}</span>
                    <p className={`text-base font-black leading-snug ${tool.color}`}>
                      {tool.question}
                    </p>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">{tool.desc}</p>
                  <p className="text-sm font-bold text-slate-200">{tool.title} →</p>
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
