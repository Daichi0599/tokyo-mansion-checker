import type { Metadata } from "next";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "共働き夫婦の家計分担、みんなどうしてる？割合制・費目別・共同口座を比較｜30Lab",
  description:
    "共働き夫婦の生活費の分担方法を徹底比較。折半・収入比例・費目別・共同口座それぞれのメリット・デメリットと、揉めないためのルールの決め方を解説。",
  keywords: [
    "共働き 家計 分担 割合",
    "夫婦 生活費 分担",
    "共働き 家計管理 方法",
    "夫婦 共同口座 メリット",
    "生活費 折半 割合",
  ],
  openGraph: {
    title: "共働き夫婦の家計分担、みんなどうしてる？",
    description: "折半・収入比例・費目別・共同口座の違いと、揉めないルールの決め方を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "共働き夫婦の家計分担、みんなどうしてる？",
    description: "折半・収入比例・費目別・共同口座を比較。揉めないルールの決め方。",
  },
};

export default function TomobatarakiKakeiBuntanPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* パンくず */}
        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">共働き家計の分担</span>
        </nav>

        {/* タグ・日付 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">共働き・家計管理</span>
          <span className="text-xs text-slate-400">2026年最新</span>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          共働き夫婦の家計分担、<br />
          <span className="text-blue-400">みんなどうしてる？</span>
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「生活費、折半でいいの？」「相手の給料を知らないまま結婚した」——共働き夫婦にとって家計分担は最初につまずきやすいポイントです。この記事では代表的な4つの分担方法と、それぞれの向き不向きを整理します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📊 実際どうしてる？分担方法の実態
          </h2>
          <div className="space-y-3 mb-4">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">収入に応じた一部負担（比例制）</span>
                <span className="text-lg font-black text-emerald-400">46.4%</span>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">完全折半</span>
                <span className="text-lg font-black text-emerald-400">37.3%</span>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">お財布は別々（項目ごとに個別負担）</span>
                <span className="text-lg font-black text-emerald-400">54.0%</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">※ 新婚（令和婚）夫婦に限ると73.0%</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">※ ゼクシィ「共働き夫婦の生活費」調査、オカネコ「夫婦のお財布事情」調査（2025年）をもとにした目安。複数の分担方法を併用しているケースもあります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ⚖️ 4つの分担方法を比較
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "①完全折半",
                desc: "生活費を2分の1ずつ負担する、最もシンプルな方法。",
                merit: "計算が簡単で不公平感が出にくい。",
                demerit: "収入差が大きいと、収入が低い側の負担感が重くなる。",
              },
              {
                title: "②収入比例制",
                desc: "「夫6：妻4」のように、収入の割合に応じて負担額を決める方法。",
                merit: "収入差があっても負担感のバランスを取りやすい。",
                demerit: "昇給・転職のたびに割合を見直す手間がかかる。",
              },
              {
                title: "③費目別分担",
                desc: "「家賃・光熱費は夫、食費・日用品は妻」のように項目ごとに担当を分ける方法。",
                merit: "お互いの支出に口を出しにくく、精神的な自由度が高い。",
                demerit: "全体の貯蓄額やお金の流れが見えにくくなりやすい。",
              },
              {
                title: "④共同口座に一定額を入金",
                desc: "毎月決まった額を共同口座に入れ、そこから生活費を引き落とす方法。",
                merit: "家計の可視化がしやすく、貯蓄計画も立てやすい。データ上、共同口座を持つ夫婦は持たない夫婦より金融資産が平均550万円多いという調査結果もある。",
                demerit: "個人の自由に使えるお金との線引きを最初に決めておく必要がある。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-black text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-300 mb-2">{item.desc}</p>
                <p className="text-xs text-emerald-400 mb-1">✅ メリット：{item.merit}</p>
                <p className="text-xs text-red-400">❌ デメリット：{item.demerit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ アフィリエイト CTA ━━ */}
        <AffiliateCta
          program="fpsoudan"
          page="tomobataraki-kakei-buntan"
          heading="分担ルールを決める前に、家計全体を可視化する"
          title="2人の収支をお金のプロと一緒に整理する"
          note="分担方法だけ決めても、貯蓄目標が曖昧だと結局揉めやすくなります。将来の住宅費・教育費まで含めて無料でオンライン相談できます。"
        />

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🤝 揉めないための3つのルール
          </h2>
          <div className="space-y-3 mb-4">
            {[
              { title: "① 「貯蓄目標」を先に決めてから分担を決める", body: "分担割合の話し合いは「何にいくら払うか」から入ると揉めやすい。先に「毎月いくら貯めるか」を2人で合意してから、残りをどう分けるかを話すとスムーズ。" },
              { title: "② 収入・支出をどこまで開示するか最初に決める", body: "「お財布は別々」派でも、住宅ローンを組む段階では世帯年収の開示が必須になる。将来のライフイベントを見据えて、開示範囲を早めに擦り合わせておく。" },
              { title: "③ 半年〜1年に一度、割合を見直すタイミングを作る", body: "昇給・転職・産休育休などで収入バランスは変わる。「見直す日」をあらかじめ決めておくと、都度の言い出しにくさがなくなる。" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 まとめ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📌 まとめ：正解は一つじゃない、更新前提で決める
          </h2>
          <div className="bg-blue-500/10 rounded-xl border border-blue-500/30 p-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              分担方法は「収入比例制」と「折半」がほぼ拮抗しており（46.4% vs 37.3%）、<strong className="text-white">どれか一つが正解というわけではありません</strong>。
            </p>
            <p>
              重要なのは分担割合そのものより、<strong className="text-white">貯蓄目標を先に共有していること</strong>と、<strong className="text-white">見直すタイミングを決めておくこと</strong>です。
            </p>
            <p>
              将来住宅購入を考えているなら、世帯年収から購入可能額を試算しておくと、分担ルールの話し合いにも具体的な目安が生まれます。
            </p>
          </div>
        </section>

        {/* 内部ツール誘導 */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">世帯年収での購入可能額を試算してみる</p>
          <p className="text-xs mb-4 opacity-90">2人分の年収・貯蓄ペースを入れるだけで、無理のない購入価格帯がわかります。</p>
          <Link
            href="/mansion"
            className="inline-block bg-slate-800 text-blue-300 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
          >
            無料マンション診断ツールを使う →
          </Link>
        </div>

        {/* 著者情報 */}
        <div className="mt-12 border-t border-slate-700 pt-8">
          <div className="flex items-start gap-4 bg-slate-800 rounded-2xl p-5">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-xl flex-shrink-0">🏠</div>
            <div className="flex-1">
              <p className="font-bold text-white text-sm">たろう｜都内マンション研究中</p>
              <p className="text-xs text-slate-400 mt-0.5">大企業勤務・アラサー・東京都在住</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                「年収はある程度あるが、都内マンションを本当に買っていいか判断できない」という自身の経験からこのサイトを制作。複数の不動産会社・銀行・FPへのヒアリングをもとにコンテンツを作成しています。
              </p>
              <div className="flex gap-3 mt-2">
                <a href="https://x.com/30lab_jp" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">𝕏 @30lab_jp</a>
                <a href="https://note.com/30lab" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">note</a>
              </div>
            </div>
          </div>
        </div>

        {/* 免責事項 */}
        <p className="text-xs text-slate-400 mt-4 leading-relaxed">
          ※本記事は情報提供を目的としており、特定の金融商品・サービスの利用を推奨するものではありません。統計値はゼクシィ・オカネコ・スマートバンクの各種調査（2025〜2026年）を参照した目安であり、個々の状況により異なります。具体的な家計設計は専門家にご相談ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/tomobataraki-jutaku-loan" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💑</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">共働き夫婦の住宅ローン｜世帯年収別の購入可能額</span>
            </Link>
            <Link href="/articles/kekkon-chochiku-30dai" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💒</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">結婚費用と貯金、30代夫婦のリアルな平均額</span>
            </Link>
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
