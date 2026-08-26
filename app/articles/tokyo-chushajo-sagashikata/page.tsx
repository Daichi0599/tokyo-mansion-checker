import type { Metadata } from "next";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "都内の駐車場代が高すぎる｜23区の相場と、少しでも安く探す方法｜30Lab",
  description:
    "東京23区の月極駐車場は都心で月4〜7万円、城東で1.5〜3万円。10年なら180万〜840万円になります。区別の相場と、ポータル・地場の不動産屋・マンションの空き区画といった探し方の違い、そして「そもそも持つ必要があるか」を整理しました。",
  keywords: [
    "東京 駐車場 相場",
    "23区 月極駐車場 高い",
    "駐車場 探し方 東京",
    "都内 車 維持費",
    "駐車場代 節約",
  ],
  openGraph: {
    title: "都内の駐車場代が高すぎる｜23区の相場と探し方",
    description:
      "都心で月4〜7万円、10年で最大840万円。区別相場と探し方、そして持つべきかどうかを整理しました。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "都内の駐車場代が高すぎる",
    description: "23区の相場と、少しでも安く探す方法を整理しました。",
  },
};

const FAQ_ITEMS = [
  {
    q: "東京23区の月極駐車場の相場はいくらですか？",
    a: "エリアで大きく変わります。千代田区・中央区・港区の都心3区は機械式で月4〜6万円、平置きだと月5〜12万円が相場です。渋谷区・新宿区・文京区・豊島区あたりの副都心は機械式3.5〜4.5万円、平置き4〜8万円。一方で足立区・葛飾区・江戸川区といった城東エリアなら1.5〜3万円で見つかることもあります。同じ区内でも駅からの距離で数千円から1万円は動きます。",
  },
  {
    q: "駐車場代は10年でいくらになりますか？",
    a: "月2万円なら240万円、月4万円なら480万円、月7万円なら840万円です。車両価格と同じかそれ以上の規模になります。EVの補助金が国と都で最大260万円出ると聞くと大きく感じますが、都心で駐車場を借りると数年で消える金額です。車を持つかどうかを考えるとき、車両価格より先に見るべきはここだと思います。",
  },
  {
    q: "駐車場を安く借りるにはどうすればいいですか？",
    a: "駅から離すのが一番効きます。徒歩5分の場所と徒歩12分の場所で、同じ区内でも1万円前後変わることがあります。次に機械式を選ぶこと。平置きより安く、都心なら数万円の差になります。ただし車高やサイズの制限があるので、車を決める前に確認が必要です。あとは大手ポータルだけで探さず、現地の不動産屋やマンションの管理会社にも当たることです。",
  },
  {
    q: "駐車場はどこで探すのが効率的ですか？",
    a: "3つを並行するのが早いです。1つ目は月極駐車場のポータルサイトで、掲載数が多く相場観をつかむのに向いています。2つ目は借りたいエリアの地場の不動産屋で、ネットに出ていない空き区画を持っていることがあります。3つ目は近隣マンションの管理会社への問い合わせで、居住者用の区画が余っている場合に外部貸しをしていることがあります。3つ目は手間がかかりますが、相場より安いことが多いです。",
  },
  {
    q: "結局、都内で車は必要ですか？",
    a: "目的次第ですが、多くの場合は不要だと思います。駐車場代だけで年24〜84万円、そこに保険・税金・車検・ガソリンが乗ります。同じ金額をタクシーやカーシェアに使うと、都内ならかなりの回数が乗れます。子どもが生まれる、親の介護がある、趣味で頻繁に遠出するといった具体的な用途があるなら別ですが、「あると便利そう」で持つには高すぎるというのが調べた実感です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "都内の駐車場代が高すぎる｜23区の相場と、少しでも安く探す方法",
  description: "東京23区の月極駐車場の相場と探し方、持つべきかどうかを整理しました。",
  author: { "@type": "Person", name: "たろう｜30Lab", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  mainEntityOfPage: "https://30lab.vercel.app/articles/tokyo-chushajo-sagashikata",
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

/** エリア別の相場。機械式と平置きで差が大きいので分けて持つ */
const AREAS = [
  {
    label: "都心3区",
    wards: "千代田・中央・港",
    kikai: "4〜6万円",
    hiraoki: "5〜12万円",
    ten: "480〜1,440万円",
    tone: "text-red-300",
  },
  {
    label: "副都心",
    wards: "渋谷・新宿・文京・豊島",
    kikai: "3.5〜4.5万円",
    hiraoki: "4〜8万円",
    ten: "420〜960万円",
    tone: "text-orange-300",
  },
  {
    label: "城南・城西",
    wards: "目黒・世田谷・杉並・練馬 ほか",
    kikai: "2.5〜3.5万円",
    hiraoki: "3〜5万円",
    ten: "300〜600万円",
    tone: "text-yellow-300",
  },
  {
    label: "城東・城北",
    wards: "足立・葛飾・江戸川・板橋 ほか",
    kikai: "1.5〜2.5万円",
    hiraoki: "2〜3万円",
    ten: "180〜360万円",
    tone: "text-emerald-300",
  },
];

/** 探し方。手間の順に並べる。3つ目が一番安いが一番面倒 */
const METHODS = [
  {
    n: "1",
    head: "月極駐車場のポータルで相場をつかむ",
    body: "まずここから。掲載数が多いので、借りたいエリアの相場が5分でわかります。ただし人気の区画はポータルに出る前に埋まることも多いので、ここだけで決めないほうがいいです。相場観を作るための場所と考えるのが実際に近いと思います。",
    cost: "手間: 小",
  },
  {
    n: "2",
    head: "現地の不動産屋に直接聞く",
    body: "借りたいエリアの駅前にある、昔からやっていそうな不動産屋です。月極駐車場はネットに出していない物件を持っていることがあり、しかも相場より安いことがあります。「この辺で月極を探している」と言えば、その場で台帳を見てくれることが多いです。",
    cost: "手間: 中",
  },
  {
    n: "3",
    head: "近隣マンションの管理会社に当たる",
    body: "マンションの駐車場は居住者用に作られていますが、空きが出ると外部に貸すことがあります。近くのマンションの管理会社を調べて問い合わせる、という地道な方法です。手間はかかりますが、機械式で相場より数千円から1万円安いことがあります。都心ほど効きます。",
    cost: "手間: 大",
  },
];

export default function TokyoChushajoPage() {
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
          <span className="text-slate-200">都内の駐車場代</span>
        </nav>

        <header className="space-y-3">
          <h1 className="text-2xl font-black leading-tight">
            都内の駐車場代が高すぎる。23区の相場と、少しでも安く探す方法
          </h1>
          <p className="text-sm text-slate-400">2026年8月26日</p>
          <p className="text-base text-slate-200 leading-relaxed">
            <Link href="/articles/tokyo-ev-hojokin" className="text-blue-400 hover:underline">EVの補助金を調べていて</Link>、
            車両価格が100万円台まで下がることがわかった。それで一度は前向きになったのだが、
            駐車場を調べ始めたところで止まった。<strong className="text-white">車両より駐車場のほうが高い</strong>ということが、
            都内だと普通に起きる。
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">10年で見ると、車がもう一台買える</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            23区の月極駐車場をエリア別に並べるとこうなる。10年の列は、月額をそのまま120倍したものです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-2 px-2 text-slate-300 font-semibold whitespace-nowrap">エリア</th>
                  <th className="text-right py-2 px-2 text-slate-300 font-semibold whitespace-nowrap">機械式</th>
                  <th className="text-right py-2 px-2 text-slate-300 font-semibold whitespace-nowrap">平置き</th>
                  <th className="text-right py-2 px-2 text-slate-300 font-semibold whitespace-nowrap">10年</th>
                </tr>
              </thead>
              <tbody>
                {AREAS.map((a) => (
                  <tr key={a.label} className="border-b border-slate-700/60">
                    <td className="py-3 px-2">
                      <div className="text-slate-200 font-semibold whitespace-nowrap">{a.label}</div>
                      <div className="text-xs text-slate-400">{a.wards}</div>
                    </td>
                    <td className="py-3 px-2 text-right text-slate-300 whitespace-nowrap">{a.kikai}</td>
                    <td className="py-3 px-2 text-right text-slate-300 whitespace-nowrap">{a.hiraoki}</td>
                    <td className={`py-3 px-2 text-right font-bold whitespace-nowrap ${a.tone}`}>{a.ten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            ※ 平置きベースの概算です。同じ区内でも駅からの距離、屋根の有無、車室のサイズで動きます。
          </p>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5">
            <p className="text-base text-slate-200 leading-relaxed">
              都心で平置きを借りると10年で1,000万円を超える。城東でも180万円は出ていく。
              前の記事で書いたEVの補助金が国と都で最大260万円だったが、
              <strong className="text-white">都心なら3〜4年で消える金額</strong>ということになる。
              車両を安くする話と、駐車場を払い続ける話は、桁が同じで期間が違う。
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">探し方は3つあって、安い順に面倒</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            調べてみると、駐車場の探し方には手間と価格のトレードオフがはっきりある。
          </p>

          <div className="space-y-3">
            {METHODS.map((m) => (
              <div key={m.n} className="bg-slate-800 rounded-2xl border border-slate-700 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-300 font-bold text-sm flex items-center justify-center">
                    {m.n}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white">{m.head}</h3>
                    <p className="text-base text-slate-200 leading-relaxed">{m.body}</p>
                    <p className="text-xs text-slate-400">{m.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">値段に効く順番</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            どこをいじると安くなるか、効き目の大きい順に並べるとこうなった。
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 text-base text-slate-200 leading-relaxed">
              <span className="text-emerald-300 font-bold flex-shrink-0">1.</span>
              <span>
                <strong className="text-white">駅から離す。</strong>
                徒歩5分と徒歩12分で、同じ区内でも1万円前後変わることがある。毎日乗るわけでないなら、ここが一番効く。
              </span>
            </li>
            <li className="flex gap-3 text-base text-slate-200 leading-relaxed">
              <span className="text-emerald-300 font-bold flex-shrink-0">2.</span>
              <span>
                <strong className="text-white">機械式にする。</strong>
                平置きより安い。ただし車高・車幅・重量の制限があるので、
                <strong className="text-white">車を決める前に駐車場を決める</strong>ほうが順番として正しい。
                SUVを買ってから機械式に入らないと気づくのが最悪のパターン。
              </span>
            </li>
            <li className="flex gap-3 text-base text-slate-200 leading-relaxed">
              <span className="text-emerald-300 font-bold flex-shrink-0">3.</span>
              <span>
                <strong className="text-white">隣の区も見る。</strong>
                区境に住んでいるなら、道を渡るだけで相場が変わることがある。目黒と品川、文京と荒川あたりは差が出やすい。
              </span>
            </li>
            <li className="flex gap-3 text-base text-slate-200 leading-relaxed">
              <span className="text-emerald-300 font-bold flex-shrink-0">4.</span>
              <span>
                <strong className="text-white">住むところとセットで考える。</strong>
                マンションを買う・借りるときに駐車場付きかどうかで、月2〜4万円が変わる。
                これは物件価格に乗っているので厳密には無料ではないが、外部で借りるより安いことが多い。
              </span>
            </li>
          </ul>
        </section>

        <AffiliateCta program="jidoshahoken" page="tokyo-chushajo-sagashikata" />

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">それで、持つべきなのか</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            ここまで調べて、周りに聞いてみると、返ってくるのはだいたい
            <strong className="text-white">「都内なら基本いらないでしょ」</strong>だった。
            自分も同じ結論になっている。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            駐車場代だけで年24〜84万円。そこに保険、自動車税、車検、ガソリン、駐車場以外の駐車料金が乗る。
            同じ金額を都内でタクシーとカーシェアに使うと、かなりの回数が乗れてしまう。
            「あると便利そう」で持つには、負担の桁が違う。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            ただ、これは<strong className="text-white">目的がない場合の話</strong>で、
            用途がはっきりしているなら計算が変わる。子どもが生まれて病院や実家への移動が増える、
            親の介護で定期的に通う、趣味で毎週遠出する。こういう具体的な使い方があるなら、
            月4万円を払う意味は出てくると思う。
          </p>
          <p className="text-base text-slate-200 leading-relaxed">
            自分の場合は、まだそこがはっきりしていない。
            なので、いまは持たないほうに寄っている。
            決めるとしたら、生まれてから実際にどれくらい移動が発生するかを見てからになりそうです。
          </p>
        </section>

        <section className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-3">
          <h2 className="text-lg font-black text-white">10年の総額で比べられます</h2>
          <p className="text-base text-slate-200 leading-relaxed">
            購入・ローン・カーシェア・リースを、駐車場代を込みで10年の総額で比較できます。
            自分の住むエリアの駐車場代を入れると、持つ場合と持たない場合の差がそのまま出ます。
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
            相場は2026年8月時点で調べた概算です。実際の賃料は物件ごとに異なります。
          </p>
          <Link href="/articles" className="text-sm text-blue-400 hover:underline">← 30代の決断ノートに戻る</Link>
        </footer>
      </article>
    </div>
  );
}
