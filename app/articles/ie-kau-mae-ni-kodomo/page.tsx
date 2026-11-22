import type { Metadata } from "next";
import Link from "next/link";
import ContentBridgeCta from "@/components/ContentBridgeCta";

export const metadata: Metadata = {
  title: "家を買う前に子どもが生まれる年のお金の順番｜転職・妊娠・住宅ローンの備忘メモ｜30Lab",
  description:
    "転職でローンが通りにくく、同じ時期に妊娠がわかった。家を買うのが先か、出産が先か。育休中の収入減、出産費用、住宅ローンの審査を並べて、夫の自分が調べた順番と判断が変わった場所をメモしました。",
  keywords: [
    "出産 住宅購入 順番",
    "妊娠中 住宅ローン",
    "育休 住宅ローン 審査",
    "転職 住宅ローン 出産",
    "家を買う前に子ども",
  ],
  openGraph: {
    title: "家を買う前に子どもが生まれる年のお金の順番",
    description: "転職・妊娠・住宅ローン。同じ時期に重なったとき、何を先に確かめたかの備忘メモ。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "家を買う前に子どもが生まれる年のお金の順番",
    description: "転職・妊娠・住宅ローンが重なったときに、調べた順番を残したメモです。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "家を買う前に子どもが生まれる年のお金の順番",
  description: "転職・妊娠・住宅ローンが重なったときに、調べた順番と判断が変わった場所を整理した備忘メモ。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  mainEntityOfPage: "https://30lab.vercel.app/articles/ie-kau-mae-ni-kodomo",
};

const ORDER = [
  {
    head: "ローンが通る状態か",
    body: "転職を決めたので、住宅ローンの審査で見られる勤続年数がリセットされます。調べた範囲では、転職して間もないと否決か減額になる銀行が多く、同業種の転職なら通りやすい銀行もある、というところまででした。ここが止まっていると、あとの話が全部「買えたら」の仮定になります。",
  },
  {
    head: "産む年に出ていくお金",
    body: "都内で無痛分娩を考えていると、総額で130〜150万円くらいを見ておく必要があって、出産育児一時金の50万円を引いても実質80〜100万円ほどが手出しになります。東京都の助成が使えれば最大10万円戻りますが、窓口では引かれず後日の振込なので、先に払う額は変わりません。",
  },
  {
    head: "育休中に収入がどれだけ下がるか",
    body: "育児休業給付金は、最初の180日が賃金の67%、以降は50%という作りです。手取りで見ると、家計に入る額は思っているより下がります。ここは自分の年収を入れて確かめるしかないので、後で書くツールで見ました。",
  },
  {
    head: "そのうえで、いくらなら買っていいか",
    body: "ここまで見てから、はじめて購入価格の話に戻ります。「借りられる額」ではなく、育休で収入が落ちている期間でも毎月の返済に耐えられるか、で見ます。",
  },
];

export default function IeKauMaeNiKodomoPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-300">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-300">決断ノート</Link>
          <span>/</span>
          <span className="text-slate-200">家を買う前に子どもが生まれる年</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-pink-500/10 text-pink-200 font-semibold px-2 py-0.5 rounded-full border border-pink-500/20">
            出産 × 住宅購入
          </span>
          <span className="text-xs text-slate-400">2026年11月公開</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          家を買う前に、子どもが生まれることになった
          <br />
          <span className="text-pink-400">お金の順番</span>を並べ直したメモ
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          結論から書くと、自分はまだ家を買っていません。転職を決めたせいで、住宅ローンの審査で見られる勤続年数が足りなくなり、買う順番を間違えたからです。そして同じころに、妻の妊娠がわかりました。出産は来年の初めです。
        </p>
        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          どちらも「いつかは」と思っていたことが、ほぼ同じ年に重なって、しかも期限だけは向こうから勝手に来る。この記事は、そこで自分が何を先に確かめて、どこで考えが変わったかを残した備忘メモです。正解は書けません。まだ決着していない途中の話です。
        </p>

        <aside className="mb-10 rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5">
          <p className="text-sm font-black text-pink-200 mb-2">先に、いちばん考えが変わったところ</p>
          <p className="text-sm text-slate-200 leading-relaxed">
            最初は「買えるかどうか」から考えていました。でも、出産と育休の分を先に並べてみると、本当に見るべきなのは<strong className="text-white">買えるかではなく、収入が落ちている期間を越えられるか</strong>のほうでした。審査に通る額と、安心して住める額は、別物です。
          </p>
        </aside>

        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            🗓️ 調べた順番
          </h2>
          <ol className="space-y-3">
            {ORDER.map((o, i) => (
              <li key={o.head} className="flex gap-3 bg-slate-800 rounded-xl border border-slate-700 p-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-pink-500/20 text-pink-200 text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-white mb-1">{o.head}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{o.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            🔁 家を先にする案と、子どもを先にする案
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            家を先にする案は、出産の前に買ってしまう形です。ただ、いまの自分の条件だとローンの審査がそもそも厳しいので、現実的ではありませんでした。かりに通っても、購入直後に出産費用が出て、そのあと収入が下がる期間が来ます。重なる時期の資金が、いちばん薄くなります。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            子どもを先にする案は、出産と育休を越えてから、勤続年数も積んで、あらためて買う形です。賃貸のあいだは家賃がかかり続けるので、その分は割高になります。ただ、ローンの条件がよくなるまでの時間と、収入が戻るまでの時間が、同じ方向に動きます。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            家は、ローンが組めるようになったら買いたいと思っています。ただそれがいつになるかは、まだ決着していません。これは自分の事情で並べた順番で、収入の安定度や、いまの家賃や、頭金の有無で、前者が正解になる人もいるはずです。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            🧮 重なる年を、数字で並べたもの
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            頭で考えるより、年収と家賃を入れて並べたほうが早かったので、自分用に作ったツールを使いました。出産費用の試算では、一時金や助成を引いた実質の手出しが出ます。育休中の収入減は、本人とパートナーの年収を入れて見られる形にしています。
          </p>
          <div className="space-y-3">
            <ContentBridgeCta
              href="/plan?source=ie_article"
              source="life_order_article"
              destination="plan"
              eyebrow="重なる年をまとめて見る"
              title="家・出産・車を、同じ年収で並べて確かめる"
              body="年収と家賃を入れると、出産費用と育休中の収入減、購入後の毎月の負担を、まとめて見られます。"
              cta="家・出産・車をまとめて見る →"
            />
            <Link
              href="/birth?source=ie_article"
              className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              🤰 出産費用だけ試算する →
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            ⚠️ まだ決まっていないこと
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            ローンの審査基準は銀行ごとに違うので、「転職直後は通らない」とは言い切れません。勤続年数の見方も、年収や職種との組み合わせで変わります。自分の場合も、実際に事前審査を出して確かめたわけではないので、そこは仮定のままです。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            出産費用や助成も、産院と条件で変わります。続きがわかったら、この記事は書き換えます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連</h2>
          <div className="space-y-2">
            {[
              { href: "/articles/tomobataraki-jutaku-loan", label: "共働き夫婦の住宅ローン｜世帯年収別の購入可能額と注意すべきリスク" },
              { href: "/articles/jutaku-loan-shinsa-ochita", label: "住宅ローン審査｜勤続年数・年収基準・落ちる原因" },
              { href: "/articles/tokyo-mutsubunben-joseikin", label: "東京都の無痛分娩助成で落としやすい条件と申請の段取り" },
              { href: "/articles/shussan-junbi-otto", label: "夫がやる出産準備ジャーニー｜妊娠判明から1歳まで、お金で先回りすること" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-slate-500 transition-colors group"
              >
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{l.label}</span>
                <span className="ml-auto text-slate-600 group-hover:text-slate-400 text-xs">→</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="text-xs text-slate-500 leading-relaxed">
          個人の備忘メモで、専門家の助言ではありません。ローンや給付の条件は変わるので、実際の判断では金融機関・勤務先・自治体の最新情報を確認してください。
        </p>
      </div>
    </main>
  );
}
