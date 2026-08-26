import type { Metadata } from "next";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "都内でEVを買うと実際いくらか｜国と都の補助金を引いた後の金額を車種別に並べた｜30Lab",
  description:
    "2026年度、国のCEV補助金は最大130万円、東京都のZEV補助金も最大130万円。合計で最大260万円が出る一方、車種によって額は大きく違います。日産サクラ・リーフ・テスラ・BYDなどの補助後価格を並べ、なぜ差が出るのか、申請の期限と保有義務まで整理しました。",
  keywords: [
    "EV 補助金 東京都",
    "CEV補助金 2026",
    "ZEV補助金 東京都",
    "日産サクラ 補助金",
    "電気自動車 補助金 いくら",
  ],
  openGraph: {
    title: "都内でEVを買うと実際いくらか｜補助金を引いた後の金額を車種別に",
    description:
      "国と都で最大260万円。ただし車種で額が全然違います。補助後価格を並べて、差が出る理由と期限を整理しました。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "都内でEVを買うと実際いくらか",
    description: "国と都の補助金を引いた後の金額を、車種別に並べました。",
  },
};

const FAQ_ITEMS = [
  {
    q: "東京都でEVを買うと補助金はいくら出ますか？",
    a: "2026年度は、国のCEV補助金が普通EVで上限130万円、東京都のZEV車両購入補助金も2026年7月1日以降の初度登録で上限130万円です。単純合計で最大260万円になりますが、これはあくまで上限で、実際の額は車種ごとに決まっています。日産サクラなら国58万円＋都90万円で計148万円、BYD DOLPHINなら国15万円＋都40万円で計55万円というように、同じEVでも3倍近い開きがあります。",
  },
  {
    q: "なぜ車種によって補助金額がこんなに違うのですか？",
    a: "国のCEV補助金は車両の性能だけでなく、メーカーの取り組みも評価に含まれるためです。充電インフラの整備、車両のリサイクルやアフターサービス、災害時の給電対応といった項目が加点され、その結果として同じ価格帯でも補助額に差が出ます。輸入車が国産車より低くなる傾向があるのは、この評価軸によるところが大きいです。",
  },
  {
    q: "補助金をもらうと車をすぐ手放せなくなりますか？",
    a: "はい、保有義務があります。国のCEV補助金では原則4年間の処分制限期間が設けられており、この期間内に売却や廃車をすると補助金の一部または全額を返還することになります。東京都の補助金にも同様の保有義務があります。転勤や家族構成の変化で数年内に手放す可能性があるなら、ここは事前に確認しておく必要があります。",
  },
  {
    q: "補助金の申請はいつまでにすればいいですか？",
    a: "東京都のZEV車両購入補助金は令和8年度分の受付が2026年4月30日に始まり、2027年3月31日までとなっています。ただし国・都とも予算の上限に達した時点で受付が終了するため、期日まで必ず申請できるとは限りません。過去には年度途中で締め切られた例もあります。購入を決めたら早めに動くほうが安全です。",
  },
  {
    q: "補助金があればEVは買いですか？",
    a: "車両価格だけを見れば魅力的になります。ただし都内では駐車場代が効いてきます。23区の月極駐車場は都心部で月4〜7万円、城東エリアでも1.5〜3万円が相場で、10年なら180万〜840万円です。補助金260万円は大きいですが、駐車場代はそれと同等かそれ以上の規模で毎月出ていきます。補助金の有無より、そもそも都内で車を持つ目的があるかどうかが先です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "都内でEVを買うと実際いくらか｜国と都の補助金を引いた後の金額を車種別に並べた",
  description:
    "2026年度の国CEV補助金と東京都ZEV補助金を、車種別の補助後価格として整理しました。",
  author: { "@type": "Person", name: "たろう｜30Lab", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  mainEntityOfPage: "https://30lab.vercel.app/articles/tokyo-ev-hojokin",
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

/**
 * 車種別の補助額。国と都で別々に決まっており、同じEVでも3倍近い開きがある。
 * 金額は変わるので「概算・要確認」の位置づけで出す。
 */
const KEI_EV = [
  { name: "日産サクラ", price: 244.9, kuni: 58, to: 90 },
  { name: "ホンダ N-ONE e:", price: 269.9, kuni: 58, to: 90 },
  { name: "三菱 eKクロスEV", price: 266.2, kuni: 57.4, to: 80 },
];

const FUTSU_EV = [
  { name: "日産リーフ", price: 438.9, kuni: 129, to: 90 },
  { name: "トヨタ bZ4X", price: 480.0, kuni: 130, to: 90 },
  { name: "テスラ モデル3", price: 541.3, kuni: 127, to: 70 },
  { name: "BYD DOLPHIN", price: 299.2, kuni: 15, to: 40 },
];

const PHEV = [
  { name: "トヨタ プリウスPHEV", price: 384.7, kuni: 85, to: 90 },
  { name: "三菱 アウトランダーPHEV", price: 536.9, kuni: 84, to: 80 },
];

function CarTable({ title, rows }: { title: string; rows: typeof KEI_EV }) {
  return (
    <div className="mt-6">
      <h3 className="text-base font-bold text-white mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2 px-2 text-slate-300 font-semibold whitespace-nowrap">車種</th>
              <th className="text-right py-2 px-2 text-slate-300 font-semibold whitespace-nowrap">車両価格</th>
              <th className="text-right py-2 px-2 text-slate-300 font-semibold whitespace-nowrap">国</th>
              <th className="text-right py-2 px-2 text-slate-300 font-semibold whitespace-nowrap">都</th>
              <th className="text-right py-2 px-2 text-emerald-300 font-semibold whitespace-nowrap">補助後</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const after = Math.round((c.price - c.kuni - c.to) * 10) / 10;
              return (
                <tr key={c.name} className="border-b border-slate-700/60">
                  <td className="py-2.5 px-2 text-slate-200 whitespace-nowrap">{c.name}</td>
                  <td className="py-2.5 px-2 text-right text-slate-300 whitespace-nowrap">{c.price}万</td>
                  <td className="py-2.5 px-2 text-right text-slate-400 whitespace-nowrap">{c.kuni}万</td>
                  <td className="py-2.5 px-2 text-right text-slate-400 whitespace-nowrap">{c.to}万</td>
                  <td className="py-2.5 px-2 text-right text-emerald-300 font-bold whitespace-nowrap">{after}万</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function TokyoEvHojokinPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        <nav className="flex items-center gap-1.5 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-300">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-300">ノート</Link>
          <span>/</span>
          <span className="text-slate-200">EVの補助金</span>
        </nav>

        <header className="space-y-3">
          <h1 className="text-2xl font-black leading-tight">
            都内でEVを買うと実際いくらか。補助金を引いた後の金額を車種別に並べた
          </h1>
          <p className="text-sm text-slate-400">2026年8月26日</p>
          <p className="text-base text-slate-200 leading-relaxed">
            車を持つかどうかを考えていて、EVの補助金がやたら大きいという話を聞いた。調べてみたら本当に大きくて、
            国と都を合わせると<strong className="text-white">上限で260万円</strong>になる。
            ただ、その「上限」に届く車はごく一部で、車種によって額が3倍近く違った。
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">国と都、両方から出る</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            まず前提として、EVの補助金は国と自治体の二階建てになっていて、都内なら両方もらえる。
            国のCEV補助金は2026年1月から普通EVの上限が90万円から
            <strong className="text-white">130万円</strong>に引き上げられ、東京都のZEV車両購入補助金も
            2026年7月1日以降に初度登録した車から上限が<strong className="text-white">130万円</strong>になった。
            PHEVは国が85万円、都が115万円が上限になっている。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            自宅にV2H（車から家に給電する設備）を入れると都の補助が10万円上乗せされるが、
            これは戸建て前提の話なので、マンションだと基本的に関係がない。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">車種別に見ると、差が激しい</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            ここが一番知りたかったところで、実際の額は車種ごとに決まっている。
            「最大130万円」に届くのは一部で、下は15万円台まである。
          </p>

          <CarTable title="軽EV" rows={KEI_EV} />
          <CarTable title="普通車EV" rows={FUTSU_EV} />
          <CarTable title="PHEV" rows={PHEV} />

          <p className="text-sm text-slate-400 leading-relaxed mt-4">
            ※ 2026年7月1日〜2027年3月31日に初度登録した場合の目安です。グレードや装備で変わるほか、
            制度自体が年度途中で改定されることもあります。購入前に必ず
            次世代自動車振興センターと東京都環境公社の公式情報で確認してください。
          </p>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5 mt-4">
            <p className="text-base text-slate-200 leading-relaxed">
              目を引くのは<strong className="text-white">日産サクラ</strong>で、244.9万円の車が
              148万円の補助を受けて<strong className="text-emerald-300">96.9万円</strong>になる。軽自動車としても安い部類に入る。
              逆に<strong className="text-white">BYD DOLPHIN</strong>は299.2万円に対して補助が55万円しかなく、
              車両価格はサクラより高いのに補助後は244.2万円と、2.5倍の開きがつく。
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">なぜ差が出るのか</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            調べてわかったのは、国のCEV補助金が車の性能だけで決まっていないということだった。
            航続距離のような車両側の指標に加えて、<strong className="text-white">メーカーの取り組みが加点される</strong>仕組みになっている。
            充電インフラをどれだけ整備しているか、使用済み車両のリサイクルやアフターサービスの体制があるか、
            災害時に車から給電できるか。こうした項目が評価に入る。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            輸入車の補助額が低めに出るのは、この評価軸によるところが大きい。
            テスラ モデル3が国127万円と高い一方で都が70万円にとどまるのも、
            BYDが国15万円になるのも、車の出来とは別の話として決まっている。
            納得するかどうかは別として、<strong className="text-white">「輸入EVは安く買えるはず」という前提で考えると外す</strong>ということは言える。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">もらった後に縛りがある</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            ここは見落としやすい。補助金を受け取ると<strong className="text-white">保有義務</strong>が発生する。
            国のCEV補助金は原則4年間の処分制限期間があり、その間に売却や廃車をすると補助金の返還を求められる。
            東京都の補助金にも同様の義務がある。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            転勤の可能性がある人、子どもが生まれて車のサイズが変わりそうな人、
            数年内に引っ越すかもしれない人は、ここを確認してから決めたほうがいい。
            補助金が大きいぶん、返還額も大きくなる。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            もうひとつ、<strong className="text-white">予算の上限に達すると年度途中でも受付が終わる</strong>。
            東京都は2026年4月30日に受付を開始して2027年3月31日までとしているが、
            期日まで必ず申請できる保証はない。買うと決めたなら早いほうが安全という、身も蓋もない話になる。
          </p>
        </section>

        <AffiliateCta program="jidoshahoken" page="tokyo-ev-hojokin" />

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">それでも、都内では駐車場のほうが効く</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            補助金を調べた結論として、車両価格の話としては確かに大きい。
            サクラが100万円を切るなら、検討する価値はあると思う。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            ただ、都内で車を持つときに効いてくるのは車両価格ではなかった。
            23区の月極駐車場は都心部で月4〜7万円、城東エリアでも1.5〜3万円が相場で、
            10年で見ると<strong className="text-white">180万円から840万円</strong>になる。
            補助金260万円は大きいが、駐車場代はそれと同じかそれ以上の規模で、しかも毎月出ていく。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            周りに聞くと「都内なら基本いらないんじゃない」という意見が多い。
            自分もいまのところそう思っていて、補助金で車両が安くなっても、その結論は変わらなかった。
            変わるとしたら、車を持つ目的がはっきりしている場合だけだと思う。
            そこは <Link href="/articles/tokyo-chushajo-sagashikata" className="text-blue-400 hover:underline">駐車場代の記事</Link> に分けて書いた。
          </p>
        </section>

        <section className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-3">
          <h2 className="text-lg font-black text-white">10年でいくらかかるか出せます</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            購入・ローン・カーシェア・リースを、駐車場代と保険料を込みで10年の総額で比べられます。
            補助金を引いた後の車両価格を入れれば、EVで持った場合の実際の負担が出ます。
          </p>
          <Link
            href="/car"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-xl transition-colors"
          >
            🚗 車コスト診断をひらく
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">よくある質問</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="bg-slate-800 rounded-xl border border-slate-700 p-4">
                <summary className="font-bold text-white cursor-pointer">{item.q}</summary>
                <p className="mt-3 text-base text-slate-200 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="pt-6 border-t border-slate-700 space-y-3">
          <p className="text-sm text-slate-400 leading-relaxed">
            補助金の額・条件・受付期間は変更されます。この記事は2026年8月時点で調べた内容で、
            購入の判断は必ず公式情報と販売店で確認してください。金額はグレードや装備によって変わります。
          </p>
          <Link href="/articles" className="text-sm text-blue-400 hover:underline">← 30代の決断ノートに戻る</Link>
        </footer>
      </article>
    </div>
  );
}
