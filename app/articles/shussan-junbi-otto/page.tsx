import type { Metadata } from "next";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "夫がやる出産準備ジャーニー｜妊娠判明から1歳まで、お金で先回りすること｜30Lab",
  description:
    "妊娠がわかってから子どもが1歳になるまで、夫が担当できるお金まわりの準備を時系列で整理。医療保険の締切、健保組合の付加給付、出生後休業支援給付、児童手当の15日ルール、保活の逆算まで。",
  keywords: [
    "出産 準備 夫",
    "出産 お金 準備",
    "産後パパ育休 給付金",
    "出生後休業支援給付金",
    "妊娠 やることリスト 夫",
  ],
  openGraph: {
    title: "夫がやる出産準備ジャーニー｜お金で先回りすること",
    description:
      "妊娠判明から1歳まで、夫が担当できるお金の準備を時系列で。調べないともらえない給付を落とさないために。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "夫がやる出産準備ジャーニー",
    description: "妊娠判明から1歳まで、夫が担当できるお金の準備を時系列で整理しました。",
  },
};

const FAQ_ITEMS = [
  {
    q: "夫は出産準備で何を担当すればいいですか？",
    a: "お金と手続きです。妻は体調管理・妊婦健診・出産そのもので手一杯になります。一方で出産まわりのお金は「申請しないともらえない」ものばかりで、しかも締切があります。ここは体調に左右されない夫が引き取れる領域です。",
  },
  {
    q: "夫が育休を取らないと損をしますか？",
    a: "金額としては損をします。出生後休業支援給付は、夫婦ともに通算14日以上の育休を取ることが条件で、父親は子の出生後8週以内に取得する必要があります。満たすと育児休業給付が67%から80%に上がり、社会保険料の免除と非課税を合わせて手取り10割相当になります。対象は最長28日分です。夫が取らなければ、この上乗せは妻の分も含めて発生しません。",
  },
  {
    q: "医療保険は妊娠がわかってからでも入れますか？",
    a: "入れる商品はありますが、条件が付くのが一般的です。妊娠後の加入では、帝王切開や切迫早産といった今回の妊娠・出産に関わる部分が保障の対象外になるケースが多くあります。帝王切開は決して例外的なものではないため、備えるつもりなら妊娠前、遅くとも判明後すぐが分かれ目になります。",
  },
  {
    q: "健康保険組合の付加給付とは何ですか？",
    a: "国の出産育児一時金50万円とは別に、勤務先の健康保険組合が独自に上乗せする給付です。数万円から十数万円が多く、組合によって有無も金額も違います。自動では振り込まれず申請が必要なことが多いため、まず自分の健保のサイトを見るところから始めてください。",
  },
  {
    q: "児童手当はいつ申請すればいいですか？",
    a: "出生日の翌日から15日以内が目安です。この期間内に申請すれば出生の翌月分から受け取れますが、遅れると申請した月の翌月分からになり、遅れた分は遡って受け取れません。産後に動くのは現実的に難しいので、書類は臨月のうちに揃えておくのが安全です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "夫がやる出産準備ジャーニー｜妊娠判明から1歳まで、お金で先回りすること",
  description:
    "妊娠がわかってから子どもが1歳になるまで、夫が担当できるお金まわりの準備を時系列で整理。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-08-18",
  dateModified: "2026-08-18",
  mainEntityOfPage: "https://30lab.vercel.app/articles/shussan-junbi-otto",
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

/** あとから気づいても遡れないもの。ここだけ押さえれば大きな取りこぼしは防げる */
const DEADLINES = [
  {
    what: "医療保険への加入",
    when: "妊娠前〜判明直後",
    why: "妊娠後の加入は、今回の帝王切開・切迫早産が保障対象外になることが多い",
    lost: "帝王切開時の給付",
  },
  {
    what: "夫の育休の取得",
    when: "産後8週以内（申し出は原則2週間前）",
    why: "出生後休業支援給付は夫婦ともに通算14日以上の取得が条件",
    lost: "給付率13%の上乗せ（最大28日分・夫婦両方）",
  },
  {
    what: "限度額適用認定証",
    when: "臨月までに",
    why: "帝王切開になったとき、窓口での支払いを自己負担限度額までに抑えられる",
    lost: "一時的な立替（十数万円）",
  },
  {
    what: "児童手当の申請",
    when: "出生日の翌日から15日以内",
    why: "遅れると申請月の翌月分からになり、遡れない",
    lost: "月1〜1.5万円 × 遅れた月数",
  },
  {
    what: "保育園の申し込み",
    when: "4月入園なら前年の10〜12月",
    why: "生まれ月によって、0歳4月に申し込めるかどうかが決まる",
    lost: "認可外との差額（月3万円前後）",
  },
];

const PHASES = [
  {
    period: "妊娠判明 〜 12週",
    title: "ここでしか決められないことを片づける",
    color: { border: "border-pink-500/40", bg: "bg-pink-500/10", text: "text-pink-300" },
    items: [
      {
        head: "医療保険を見直す（締切がある）",
        body: "妊娠後に加入すると、今回の帝王切開や切迫早産が保障の対象外になるのが一般的です。すでに加入済みなら、いまの契約で帝王切開が対象になっているかを確認しておきます。ここは時間が経つほど選択肢が減る、数少ない項目です。",
      },
      {
        head: "自分の健康保険組合を調べる",
        body: "国の出産育児一時金50万円とは別に、勤務先の健保が独自の付加給付を出している場合があります。数万〜十数万円で、組合によって有無も額も違います。夫側の健保に付加給付があるなら、どちらの扶養で申請するかで受け取れる額が変わることもあります。",
      },
      {
        head: "会社の制度を洗い出す",
        body: "配偶者出産休暇、育休の社内規定、出産祝金。就業規則を読むか人事に聞けば済む話ですが、たいてい誰も教えてくれません。育休を取る前提で、いつ誰に言うかの段取りもここから考え始めます。",
      },
      {
        head: "産院を決める（費用が50万円以上変わる）",
        body: "都内の正常分娩は総額60〜70万円、無痛分娩や人気の産院だと130〜150万円。しかも人気の産院は妊娠判明後すぐに分娩予約が埋まります。お金の判断と予約の締切が同時に来るのがこの時期です。",
      },
    ],
  },
  {
    period: "安定期（〜27週）",
    title: "いちばん金額が動く判断をする",
    color: { border: "border-amber-500/40", bg: "bg-amber-500/10", text: "text-amber-300" },
    items: [
      {
        head: "夫が育休を取るか、いつ取るかを決める",
        body: "ここが最大の金額インパクトです。出生後休業支援給付は、夫婦ともに通算14日以上の育休を取ることが条件で、父親は産後8週以内に取る必要があります。満たせば給付率が67%から80%になり、社会保険料の免除と非課税を合わせて手取り10割相当。対象は最長28日分です。取らなければ、この上乗せは妻の分も含めて発生しません。",
      },
      {
        head: "出産育児一時金の直接支払制度を産院で手続きする",
        body: "これをやっておくと50万円が産院に直接支払われ、窓口では差額だけ払えば済みます。やらないと一度全額を立て替えることになります。",
      },
      {
        head: "里帰りするかを決める",
        body: "里帰り先での妊婦健診は、住んでいる自治体の補助券がそのまま使えないことがあります。いったん自費で払って後から払い戻す手続きになるため、領収書の保管が必要です。交通費も含めて予算を見ておきます。",
      },
    ],
  },
  {
    period: "臨月（28週〜）",
    title: "産後は動けないので、先に書類を揃える",
    color: { border: "border-purple-500/40", bg: "bg-purple-500/10", text: "text-purple-300" },
    items: [
      {
        head: "限度額適用認定証を用意しておく",
        body: "帝王切開になった場合、手術は健康保険の対象になり高額療養費も使えます。認定証が手元にあると、窓口での支払いが自己負担限度額までで済みます。なくても後から払い戻せますが、一時的に十数万円を立て替えることになります。",
      },
      {
        head: "出生届・健保加入・児童手当の書類を先に揃える",
        body: "産後の2週間は、想像しているより動けません。用紙の入手と、記入できる欄の記入まで済ませておくと退院後の負担がまったく違います。",
      },
      {
        head: "ベビー用品と、産後の外注予算を決める",
        body: "ベビー用品は50万円前後が目安で、短期間に集中します。あわせて家事代行・宅配・ミールキットの予算も決めておくと、そのとき揉めません。ここを削ると別のところにコストが出ます。",
      },
    ],
  },
  {
    period: "出産直後 〜 1ヶ月",
    title: "期限のある申請を落とさない",
    color: { border: "border-blue-500/40", bg: "bg-blue-500/10", text: "text-blue-300" },
    items: [
      {
        head: "出生届（14日以内）と健康保険の加入",
        body: "健保への加入が済まないと乳幼児医療証も出ません。届出はセットで動かします。",
      },
      {
        head: "児童手当（出生日の翌日から15日以内）",
        body: "この期間内なら出生の翌月分から受け取れます。遅れると申請月の翌月分からになり、遅れた分は戻りません。金額としては月1〜1.5万円です。",
      },
      {
        head: "018サポート（東京都）",
        body: "0〜18歳に月5,000円、所得制限なし。18年で1人あたり108万円になりますが、年1回の申請が必要です。自動では始まりません。",
      },
      {
        head: "出産手当金・育児休業給付の申請",
        body: "どちらも勤務先経由です。夫の育休分も忘れずに。あわせて出産費用の領収書は、翌年の医療費控除のためにまとめて保管しておきます。",
      },
    ],
  },
  {
    period: "育休 〜 復職（〜1歳）",
    title: "世帯の収入が変わる。ここで住居費を見直す",
    color: { border: "border-emerald-500/40", bg: "bg-emerald-500/10", text: "text-emerald-300" },
    items: [
      {
        head: "保活は前年の10〜12月に動く",
        body: "4月入園の申し込みは前年の秋です。つまり生まれ月によって、0歳4月に申し込めるかどうかが決まります。認可に入れるかどうかで月3万円前後変わるので、これは立派なお金の話です。",
      },
      {
        head: "復職の形（フルタイム・時短・退職）で世帯年収を引き直す",
        body: "時短にすると年収は8割前後になることが多く、これは住宅ローンの返済比率にそのまま効きます。育休中の給付は最長でも1年前後で終わるため、復職後の実際の手取りで家計を組み直す必要があります。",
      },
      {
        head: "住宅ローンとの両立を再点検する",
        body: "購入前に立てた返済計画は、たいてい共働きフルタイムが前提になっています。産後の働き方が変わるなら、そのタイミングで返済比率を計算し直しておくと、あとで慌てません。",
      },
    ],
  },
];

export default function ShussanJunbiOttoPage() {
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
          <span className="text-slate-200">夫がやる出産準備</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-pink-500/10 text-pink-200 font-semibold px-2 py-0.5 rounded-full border border-pink-500/20">
            出産・子育て
          </span>
          <span className="text-xs text-slate-400">2026年8月</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          夫がやる<span className="text-pink-400">出産準備ジャーニー</span>
          <br />
          妊娠判明から1歳まで、お金で先回りすること
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          出産まわりの情報は、そのほとんどが妊娠している側に向けて書かれています。
          でも実際に手を動かす余地が大きいのは、体調に左右されない夫のほうです。
          しかも出産のお金は
          <strong className="text-white">「申請しないともらえない」ものばかりで、しかも締切があります</strong>。
          この記事は、夫が担当できるお金の準備を時系列に並べたものです。
        </p>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          先に結論だけ言うと、いちばん大きいのは
          <strong className="text-white">夫が育休を取るかどうか</strong>
          です。金額にして数十万円が、夫の判断ひとつで出たり消えたりします。
        </p>

        {/* ━━ 落とすと戻らないもの ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            ⏳ 落とすと取り返せないもの
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            出産まわりの制度は、あとから気づいても遡れないものが多くあります。先にここだけ押さえておけば、大きな取りこぼしは防げます。
          </p>

          <div className="space-y-3">
            {DEADLINES.map((d) => (
              <div key={d.what} className="bg-slate-800 rounded-xl border border-slate-700 p-4">
                <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                  <p className="text-sm font-black text-white">{d.what}</p>
                  <span className="text-xs font-bold text-pink-300 shrink-0">{d.when}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-1.5">{d.why}</p>
                <p className="text-xs text-orange-400">落とすと消えるもの：{d.lost}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ ツール導線 ━━ */}
        <div className="bg-slate-800 rounded-2xl border border-pink-500/30 p-5 mb-10">
          <p className="text-sm font-bold text-white mb-1">まず自分の数字を出しておく</p>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            分娩方法と育休の長さを入れると、出産期にいくら出ていき、給付でいくら戻るかが出ます。予算の当たりをつけてから動くと、産院選びの判断が早くなります。
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/birth/checklist"
              className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              ✅ チェックリストで今週の分だけ見る →
            </Link>
            <Link
              href="/birth"
              className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              🤰 費用を試算する
            </Link>
          </div>
        </div>

        {/* ━━ フェーズ別 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            🗓️ 時系列でやること
          </h2>

          <div className="space-y-6">
            {PHASES.map((phase) => (
              <div key={phase.period} className={`rounded-2xl border ${phase.color.border} ${phase.color.bg} p-5`}>
                <p className={`text-xs font-bold ${phase.color.text} mb-1`}>{phase.period}</p>
                <p className="text-base font-black text-white mb-3">{phase.title}</p>

                <div className="space-y-3">
                  {phase.items.map((item) => (
                    <div key={item.head} className="bg-slate-800/80 rounded-xl border border-slate-700 p-4">
                      <p className="text-sm font-bold text-white mb-1">{item.head}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCta
          program="fpsoudan"
          page="shussan-junbi-otto"
          heading="産休・育休で収入が変わる前に"
          title="出産前に、家計の組み替えをプロに見てもらう"
          note="育休中の生活費、保険の見直し、住宅ローンとの両立。産まれてからでは腰を据えて考える時間が取れないので、動けるうちに整理しておくと後が楽です。"
        />

        {/* ━━ まとめ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-pink-500/20">
            💡 夫が引き取るべきなのは「調べる」の部分
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            ここまで並べたものの多くは、難しい判断ではありません。
            <strong className="text-white">健保のサイトを見る、就業規則を読む、役所のページを開く</strong>
            ——それだけで済む話がほとんどです。ただ、妊娠中の本人がそれをやるのは負担が大きい。だからここは夫が引き取れます。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            そして繰り返しになりますが、
            <strong className="text-white">いちばん金額が大きいのは夫が育休を取るかどうか</strong>
            です。これは調べる話ではなく決める話で、しかも産後8週という期限があります。安定期のうちに結論を出しておくのが現実的です。
          </p>
        </section>

        {/* ━━ FAQ ━━ */}
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

        {/* ━━ 関連 ━━ */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連</h2>
          <div className="space-y-2">
            {[
              { href: "/birth/checklist", label: "✅ 出産準備チェックリスト", desc: "予定日を入れると今週の分だけ出る" },
              { href: "/birth", label: "🤰 出産費用シミュレーター", desc: "給付まで差し引いた収支を試算" },
              { href: "/child", label: "👶 子育て費用シミュレーター", desc: "0歳〜大学卒業までの総額と実質負担" },
              { href: "/articles/kosodate-hiyou-sougaku", label: "📝 子育て費用は総額いくら？", desc: "公立vs私立の早見表と負担の山" },
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
          制度の内容・金額は2026年8月時点の一般的なものです。健康保険組合の付加給付や自治体の独自制度は、加入先・お住まいによって異なります。実際の手続きの前に、勤務先の健保と市区町村の窓口でご確認ください。
        </p>
      </div>
    </main>
  );
}
