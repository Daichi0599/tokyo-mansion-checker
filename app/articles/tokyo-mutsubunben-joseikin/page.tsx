import type { Metadata } from "next";
import Link from "next/link";

const OFFICIAL_URL = "https://www.fukushi.metro.tokyo.lg.jp/kodomo/shussan/mutsubunben/subsidy";

export const metadata: Metadata = {
  title: "東京都の無痛分娩助成（最大10万円）で落としやすい条件と申請の段取り｜30Lab",
  description:
    "東京都の無痛分娩費用助成を使うために、産院選びの前に確認しておきたいこと。対象医療機関、都内での妊娠届と住民登録、電子申請のみ・出産翌日から1年以内、後日振込という段取りを、夫の備忘メモとして整理。",
  keywords: [
    "無痛分娩 助成 東京都",
    "無痛分娩 費用 東京",
    "東京都 無痛分娩 助成 条件",
    "無痛分娩 助成金 申請",
    "出産育児一時金 75万円",
  ],
  openGraph: {
    title: "東京都の無痛分娩助成で落としやすい条件と申請の段取り",
    description:
      "最大10万円。ただし対象医療機関・都内での妊娠届と住民登録・電子申請のみ・後日振込。産院を決める前に確認すること。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "東京都の無痛分娩助成で落としやすい条件",
    description: "最大10万円。産院を決める前に確認しておくことを整理しました。",
  },
};

const FAQ_ITEMS = [
  {
    q: "無痛分娩を扱っている産院なら、どこでも助成の対象ですか？",
    a: "対象ではありません。東京都が公表している「対象医療機関」で出産することが前提です。無痛分娩を扱っているかどうかと、助成の対象医療機関かどうかは別の話なので、候補の産院が一覧に載っているかを先に確認します。最新の一覧は東京都福祉局のページで見られます。",
  },
  {
    q: "窓口で10万円が引かれますか？",
    a: "調べた範囲では、窓口で差し引かれる形ではなく、出産後に申請して審査が通ったあとに振り込まれる形でした。つまり産院で払う額は助成がない場合と変わりません。10万円分の立て替えが一時的に発生する前提で、資金繰りを組んでおくと安心です。",
  },
  {
    q: "妊娠後に都外から引っ越しても対象ですか？",
    a: "都外で妊娠の届出をして母子健康手帳を受け取り、そのあとで都内に引っ越した場合は対象外になります。条件は、都内の自治体で妊娠の届出をしていて、申請するまで継続して都内に住民登録があることです。転居の予定があるなら、時期と届出先を先に整理しておく必要があります。",
  },
  {
    q: "申請はいつまでにすればいいですか？",
    a: "出産日の翌日から1年以内で、電子申請のみです。郵送は受け付けていません。産後すぐは動けないので、領収書と明細を手元に揃えておき、落ち着いたタイミングで申請するのが現実的です。",
  },
  {
    q: "室料差額や食事代も助成の対象ですか？",
    a: "対象外です。助成の対象になるのは無痛分娩にかかった費用で、領収書や明細で「無痛分娩費用」の金額が分かる必要があります。産院によって明細の書き方が違う可能性があるので、事前に確認しておくと安心です。",
  },
  {
    q: "出産育児一時金が75万円になるというのは本当ですか？",
    a: "決まった話ではありません。産婦人科医会が、標準的な分娩の給付水準を75万円以上にしてほしいと求めている段階で、要望です。正常分娩を保険適用にする法律は2026年に成立していて、公布から2年以内に施行されますが、施行日も全国一律の価格も、2026年10月時点では決まっていませんでした。新しい制度のなかで無痛分娩がどう扱われるかも、調べた範囲では確認できていません。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "東京都の無痛分娩助成（最大10万円）で落としやすい条件と申請の段取り",
  description:
    "東京都の無痛分娩費用助成を使うために、産院選びの前に確認しておきたいことを夫の備忘メモとして整理。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-10-24",
  dateModified: "2026-10-24",
  mainEntityOfPage: "https://30lab.vercel.app/articles/tokyo-mutsubunben-joseikin",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const CONDITIONS = [
  {
    head: "対象医療機関で出産する",
    body: "東京都が公表している対象医療機関に限られます。無痛分娩を扱っている産院でも、一覧に載っていなければ助成は受けられません。産院を見学する前に、候補が一覧に入っているかだけ確認します。",
  },
  {
    head: "都内で妊娠届を出し、申請まで都内に住民登録がある",
    body: "都内の自治体で妊娠の届出をして母子健康手帳を受け取っていること、そして申請するまでずっと都内に住民登録があることが条件です。都外で届出をしてから都内に引っ越した場合は対象外になります。",
  },
  {
    head: "2025年10月1日以降の出産",
    body: "助成の対象になるのは2025年10月1日以降の出産です。それ以前に産んだ場合は対象になりません。",
  },
];

const FLOW = [
  { step: "出産前", text: "対象医療機関の一覧を確認し、産院に「無痛分娩費用が明細に分かる形で出るか」を聞いておく。" },
  { step: "出産時", text: "産院に払う額は、助成がない場合と変わらない。領収書と明細を必ずもらい、保管する。" },
  { step: "出産後〜1年以内", text: "電子申請のみ。出産日の翌日から1年以内。領収書・明細に無痛分娩費用の金額が分かる形で載っている必要がある。室料差額や食事代は対象外。" },
  { step: "審査後", text: "審査が通ったあとに振り込まれる（窓口では差し引かれない）。" },
];

export default function TokyoMutsubunbenJoseikinPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-300">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-300">決断ノート</Link>
          <span>/</span>
          <span className="text-slate-200">東京都の無痛分娩助成</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-pink-500/10 text-pink-200 font-semibold px-2 py-0.5 rounded-full border border-pink-500/20">
            出産・子育て
          </span>
          <span className="text-xs text-slate-400">2026年10月公開</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          東京都の<span className="text-pink-400">無痛分娩助成</span>（最大10万円）
          <br />
          産院を決める前に確認したい条件と段取り
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          東京で産む予定で、無痛分娩も候補に入れている。調べるうちに、東京都に最大10万円の助成があると知りました。
          ただ、読み込んでみると
          <strong className="text-white">条件が思ったより細かく、産院を決めたあとでは取り返せないもの</strong>
          がありました。自分の備忘として、確認した内容を整理します。
        </p>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          ここに書いたのは東京都福祉局の公式ページで確認した内容です。条件や対象医療機関は更新されることがあるので、申請の前には必ず公式ページを見てください。
        </p>

        <aside className="mb-10 rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5">
          <p className="text-sm font-black text-pink-200 mb-2">先に結論</p>
          <ul className="text-sm text-slate-200 leading-relaxed space-y-1.5 list-disc pl-5">
            <li>助成は<strong className="text-white">最大10万円</strong>。ただし対象医療機関で産むことが前提</li>
            <li>都外で妊娠届を出してから都内に引っ越すと対象外</li>
            <li>窓口では引かれず、<strong className="text-white">後日振込</strong>。産院で払う額は変わらない</li>
            <li>申請は出産翌日から1年以内、電子申請のみ</li>
          </ul>
        </aside>

        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            ✅ 使うための条件
          </h2>
          <div className="space-y-3">
            {CONDITIONS.map((c) => (
              <div key={c.head} className="bg-slate-800 rounded-xl border border-slate-700 p-4">
                <p className="text-sm font-bold text-white mb-1">{c.head}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            🗓️ お金が動く順番
          </h2>
          <ol className="space-y-3">
            {FLOW.map((f, i) => (
              <li key={f.step} className="flex gap-3 bg-slate-800 rounded-xl border border-slate-700 p-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-pink-500/20 text-pink-200 text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-white mb-0.5">{f.step}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-slate-300 leading-relaxed mt-4">
            10万円が戻ってくるとしても、先に払う額は変わりません。資金繰りの面では、
            <strong className="text-white">助成はあとからの戻り</strong>として見ておくのが安全です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            📈 一時金「75万円」の話との関係
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            出産費用の話題では、出産育児一時金が50万円から75万円になる、という見出しを見かけます。確認できたのは、
            <strong className="text-white">産婦人科医会が標準的な分娩の給付水準を75万円以上にしてほしいと求めている</strong>
            ところまでで、決まった話ではありません。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            正常分娩を保険適用にする法律は2026年に成立していて、公布から2年以内に施行されます。ただ、施行日も全国一律の価格も、2026年10月時点では決まっていませんでした。
            新しい制度のなかで無痛分娩がどう扱われるかも、調べた範囲では確認できていません。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            なので、いま産む予定の人にとっては、<strong className="text-white">制度の変更を待つより、今ある助成の条件を落とさないこと</strong>が現実的な準備になります。
            決まった内容が出たら、この記事も更新します。
          </p>
        </section>

        <div className="bg-slate-800 rounded-2xl border border-pink-500/30 p-5 mb-10">
          <p className="text-sm font-bold text-white mb-1">助成を入れた収支を見る</p>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            出産費用シミュレーターで無痛分娩を選ぶと、助成の欄が出ます。「受けられる前提」にした場合の差引と、窓口で払う額は変わらないことを並べて見られます。
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/birth"
              className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              🤰 出産費用を試算する →
            </Link>
            <a
              href={OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              東京都の公式ページ
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            ❓ よくある質問
          </h2>
          <div className="bg-slate-800 rounded-2xl border border-slate-700 px-5 divide-y divide-slate-700">
            {FAQ_ITEMS.map((f) => (
              <details key={f.q} className="py-4 group">
                <summary className="text-sm font-bold text-white cursor-pointer list-none flex items-start justify-between gap-3">
                  <span>{f.q}</span>
                  <span className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-slate-300 leading-relaxed mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連</h2>
          <div className="space-y-2">
            {[
              { href: "/articles/shussan-junbi-otto", label: "🤰 夫がやる出産準備ジャーニー", desc: "妊娠判明から1歳まで、お金で先回りすること" },
              { href: "/birth", label: "🤰 出産費用シミュレーター", desc: "給付まで差し引いた収支を試算" },
              { href: "/birth/checklist", label: "✅ 出産準備チェックリスト", desc: "予定日を入れると今週の分だけ出る" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-3 bg-slate-800 rounded-xl border border-slate-700 px-4 py-3 hover:border-slate-500 transition-colors"
              >
                <span className="text-sm font-bold text-slate-200 flex-1">{l.label}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">{l.desc}</span>
                <span className="text-slate-500 text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="text-sm text-slate-400 leading-relaxed pb-4">
          内容は2026年10月24日時点で、東京都福祉局の公式ページなどをもとに確認しています。助成の条件・対象医療機関・申請方法は変更されることがあります。申請の前に、必ず
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:underline">公式ページ</a>
          で最新の内容をご確認ください。
        </p>
      </div>
    </main>
  );
}
