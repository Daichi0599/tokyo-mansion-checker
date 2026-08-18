import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "新NISA、30代はいくらから始めるべき？住宅資金と両立させる考え方｜30Lab",
  description:
    "30代が新NISAを始めるなら毎月いくらが目安か解説。つみたて投資枠・成長投資枠の仕組み、住宅購入資金やライフイベントと両立させる積立額の考え方を紹介。",
  keywords: [
    "新NISA 30代 いくらから",
    "新NISA 始め方 30代",
    "つみたて投資枠 成長投資枠",
    "新NISA 住宅資金 両立",
    "30代 資産形成 いくら",
  ],
  openGraph: {
    title: "新NISA、30代はいくらから始めるべき？",
    description: "つみたて投資枠・成長投資枠の仕組みと、住宅資金と両立させる積立額の考え方を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "新NISA、30代はいくらから始めるべき？",
    description: "新NISAの仕組みと、住宅資金と両立させる積立額の考え方。",
  },
};

export default function ShinNisa30daiHajimekataPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* パンくず */}
        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">新NISA 30代の始め方</span>
        </nav>

        {/* タグ・日付 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">資産形成</span>
          <span className="text-xs text-slate-400">2026年最新</span>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          新NISA、30代は<br />
          <span className="text-blue-400">いくらから始めるべき？</span>
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「NISAは始めた方がいいと聞くけど、住宅資金も貯めたいし、いくらまで回していいかわからない」——30代は結婚・住宅・子育てとお金のイベントが重なる時期だからこそ、新NISAへの配分は慎重に考える必要があります。この記事では制度の基本と、住宅資金と両立させる考え方を整理します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🧾 新NISAの基本をおさらい
          </h2>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-4">
            <div className="space-y-1 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>年間投資枠</span><span className="font-semibold text-white">最大360万円</span>
              </div>
              <div className="flex justify-between pl-3">
                <span className="text-xs">・つみたて投資枠</span><span className="text-xs">120万円</span>
              </div>
              <div className="flex justify-between pl-3">
                <span className="text-xs">・成長投資枠</span><span className="text-xs">240万円</span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-1 mt-1">
                <span>生涯の非課税保有限度額</span><span className="font-semibold text-white">1,800万円</span>
              </div>
              <div className="flex justify-between pl-3">
                <span className="text-xs">・うち成長投資枠の上限</span><span className="text-xs">1,200万円</span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-1 mt-1">
                <span>非課税保有期間</span><span className="font-semibold text-white">無期限</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">※ 2024年開始の新NISA制度。税制は今後改正される可能性があるため、最新情報は金融庁・証券会社の公式情報でご確認ください。</p>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            「年間360万円まで」と聞くと大きな金額に感じますが、<strong className="text-white">上限を使い切る必要はありません</strong>。多くの人にとって現実的なのは、月1〜5万円程度から無理なく始めることです。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏠 住宅資金とNISA、両立できる？
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            30代がつまずきやすいのが「住宅の頭金」と「NISAでの資産形成」のどちらを優先すべきかという問題です。考え方の目安は次の通りです。
          </p>
          <div className="space-y-3">
            {[
              {
                title: "5年以内に住宅購入を予定している場合",
                body: "頭金として使う予定のお金は、値下がりリスクのあるNISA（特に成長投資枠での個別株・アクティブファンド）には回さず、預金など元本が確保された形で確保するのが基本。短期で必要なお金と長期の資産形成用のお金は財布を分けて考える。",
              },
              {
                title: "住宅購入の予定が10年以上先、または未定の場合",
                body: "つみたて投資枠を使った長期・分散・積立投資であれば、時間を味方につけやすい。毎月の余剰資金の中から無理のない額を積み立て、住宅資金用の貯蓄とは別枠で運用する考え方が現実的。",
              },
              {
                title: "両方を並行したい場合",
                body: "「毎月の貯蓄額」をまず決め、そのうち住宅資金用（預金）とNISA用（積立投資）に配分するのがシンプル。目安として、直近5年で使う予定のお金は預金、それより先の将来資金はNISAという時間軸での線引きがわかりやすい。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📈 毎月の積立額別・将来の到達額目安
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            年利4%で運用できたと仮定した場合の、積立額別のシミュレーションです（あくまで一つの前提に基づく試算で、将来の運用成果を保証するものではありません）。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">毎月の積立額</th>
                  <th className="text-right px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">10年後の目安</th>
                  <th className="text-right px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">20年後の目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: "月1万円", y10: "約147万円", y20: "約367万円" },
                  { m: "月3万円", y10: "約442万円", y20: "約1,101万円" },
                  { m: "月5万円", y10: "約736万円", y20: "約1,835万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 text-white font-semibold text-xs">{row.m}</td>
                    <td className="px-4 py-3 text-right text-emerald-400 font-bold">{row.y10}</td>
                    <td className="px-4 py-3 text-right text-emerald-400 font-bold">{row.y20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">※ 年利4%・複利での概算。実際の運用成果は市場環境により変動し、元本割れのリスクもあります。</p>
        </section>

        {/* ━━ セクション4 まとめ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📌 まとめ：まず「使う時期」で資金を仕分ける
          </h2>
          <div className="bg-blue-500/10 rounded-xl border border-blue-500/30 p-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              新NISAの年間投資枠は最大360万円、生涯非課税保有限度額は1,800万円ですが、<strong className="text-white">上限を意識する必要があるのはかなり後の話</strong>です。多くの30代にとっては、まず月1〜3万円から始めることの方が重要です。
            </p>
            <p>
              住宅購入を考えているなら、<strong className="text-white">5年以内に使う予定のお金は預金、それより先の将来資金はNISA</strong>という時間軸での仕分けが基本になります。
            </p>
            <p>
              「そもそも住宅にいくらまで回せるのか」が分かっていないと、NISAへの配分額も決めづらいので、先に購入可能額の目安を出しておくのがおすすめです。
            </p>
          </div>
        </section>

        {/* 内部ツール誘導 */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">住宅資金にいくら回せるか、先に把握する</p>
          <p className="text-xs mb-4 opacity-90">年収・貯蓄ペースを入力するだけで、無理のない購入価格帯を3分で診断できます。</p>
          <Link
            href="/mansion"
            className="inline-block bg-slate-800 text-blue-300 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
          >
            無料でマンション購入診断する →
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
          ※本記事は情報提供を目的としており、特定の金融商品への投資を推奨するものではありません。投資にはリスクがあり、元本が保証されるものではありません。制度内容・税制は変更される可能性があるため、最新情報は金融庁・証券会社の公式サイトでご確認のうえ、具体的な投資判断はご自身の責任で、必要に応じて専門家にご相談ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/kekkon-chochiku-30dai" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💒</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">結婚費用と貯金、30代夫婦のリアルな平均額</span>
            </Link>
            <Link href="/articles/tomobataraki-kakei-buntan" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🤝</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">共働き夫婦の家計分担、みんなどうしてる？</span>
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
