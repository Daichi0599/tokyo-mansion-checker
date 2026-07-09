import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "子育て費用は総額いくら？0歳〜大学卒業までの目安【公立vs私立の早見表】｜30Lab",
  description:
    "子ども1人を育てる総額は教育費＋養育費で2,000万〜4,000万円超が目安。幼稚園から大学まで公立・私立別の教育費早見表、フェーズ別の家計負担の山、児童手当など支援制度まで解説。無料ツールで進路別の総額も試算できます。",
  keywords: [
    "子育て費用 総額",
    "子供 一人 いくらかかる",
    "教育費 公立 私立 比較",
    "子育て 費用 大学まで",
    "教育費 総額 目安",
  ],
  openGraph: {
    title: "子育て費用は総額いくら？0歳〜大学卒業までの目安【公立vs私立の早見表】",
    description: "教育費＋養育費で2,000万〜4,000万円超。公立・私立別の早見表とフェーズ別の負担の山を解説。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "子育て費用は総額いくら？0歳〜大学卒業までの目安",
    description: "公立・私立別の教育費早見表とフェーズ別の家計負担。無料ツールで進路別に試算も。",
  },
};

const FAQ_ITEMS = [
  {
    q: "子ども1人を育てるのに総額いくらかかりますか？",
    a: "教育費と養育費（食費・衣類・医療など）を合わせて、オール公立なら約2,000万〜2,500万円、中学から私立なら約3,000万円前後、小学校から私立なら4,000万円超が一般的な目安です。進路の選択で1,000万円単位の差が生まれます。",
  },
  {
    q: "教育費が一番かかる時期はいつですか？",
    a: "大学期（18〜22歳）が最大の山で、国公立でも4年間で約250万円、私立理系なら550万円以上が目安です。次に大きいのが私立に通わせる場合の中高期。この2つの山に向けて、負担が軽い小学校期（公立の場合）にどれだけ積み立てられるかが勝負になります。",
  },
  {
    q: "児童手当などの支援でどのくらい戻ってきますか？",
    a: "児童手当（0歳〜高校生年代まで、月1〜1.5万円）だけで総額200万円超になります。加えて幼保無償化、高等学校就学支援金、東京都の私立高校授業料実質無償化（所得制限なし）など、支援制度を合計すると数百万円規模の軽減が見込めます。申請が必要なものが多いため、もらい漏れに注意しましょう。",
  },
  {
    q: "住宅ローンと子育て費用は両立できますか？",
    a: "できますが、順番が重要です。子育て費用のピーク（大学期・私立中高期）を見越して、住宅ローンの返済比率は年収の25%以内に抑えるのが安全圏。「教育費の山が来る時期に、ローンと重なっても耐えられるか」を先に試算してから物件価格を決めることをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "子育て費用は総額いくら？0歳〜大学卒業までの目安【公立vs私立の早見表】",
  description:
    "子ども1人の総額は教育費＋養育費で2,000万〜4,000万円超。公立・私立別の早見表とフェーズ別の負担を解説。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  mainEntityOfPage: "https://30lab.vercel.app/articles/kosodate-hiyou-sougaku",
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

export default function KosodateHiyouSougakuPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">子育て費用の総額</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-amber-500/10 text-amber-300 font-semibold px-2 py-0.5 rounded-full border border-amber-500/20">子育て・教育費</span>
          <span className="text-xs text-slate-500">2026年7月</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          <span className="text-amber-400">子育て費用は総額いくら？</span><br />
          0歳〜大学卒業までの目安【公立vs私立の早見表】
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「子ども1人にいくらかかるのか」——結論から言うと、教育費と養育費を合わせて<strong className="text-white">オール公立で約2,000万〜2,500万円、私立中心なら4,000万円超</strong>が一般的な目安です。ただし総額の数字だけ見ても計画は立ちません。大事なのは「いつ・どのフェーズで山が来るか」。この記事では公立・私立別の早見表と、家計負担の山の乗り越え方を整理します。
        </p>

        {/* ━━ 総額の内訳 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-amber-500/20">
            💰 総額の構造：教育費＋養育費
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            子育て費用は大きく2つに分かれます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-bold text-amber-300 mb-1">📚 教育費</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">学校の学費・給食費・塾・習い事など。<strong className="text-white">進路によって差が激しい</strong>のがこちら。</p>
              <p className="text-xs text-slate-400">オール公立：約800〜1,000万円<br />私立中心：約2,000〜2,500万円超</p>
            </div>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-bold text-emerald-300 mb-1">🍚 養育費</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">食費・衣類・医療・レジャーなど生活にかかるお金。<strong className="text-white">進路に関係なくほぼ一定</strong>。</p>
              <p className="text-xs text-slate-400">22年間で約1,300〜1,600万円が目安</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">※文部科学省「子供の学習費調査」等の公的調査をもとにした一般的な目安です。地域・家庭により大きく変動します。</p>
        </section>

        {/* ━━ 早見表 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-amber-500/20">
            📊 教育費の早見表【公立 vs 私立】
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">フェーズ</th>
                  <th className="text-right px-3 py-3 font-bold text-emerald-400 border-b border-slate-700">公立</th>
                  <th className="text-right px-3 py-3 font-bold text-amber-400 border-b border-slate-700">私立</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { phase: "幼稚園・保育園（3年）", pub: "約50〜70万円※", priv: "約150〜160万円※" },
                  { phase: "小学校（6年）", pub: "約200〜220万円", priv: "約950〜1,000万円" },
                  { phase: "中学校（3年）", pub: "約160〜170万円", priv: "約420〜440万円" },
                  { phase: "高校（3年）", pub: "約150〜160万円", priv: "約310〜320万円" },
                  { phase: "大学（4年・授業料等）", pub: "約250万円（国公立）", priv: "約400万円（文系）〜550万円超（理系）" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-3 py-3 font-bold text-white text-xs">{row.phase}</td>
                    <td className="px-3 py-3 text-right text-emerald-400 text-xs">{row.pub}</td>
                    <td className="px-3 py-3 text-right text-amber-400 text-xs">{row.priv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">※幼保無償化（2019年〜）により認可保育園・幼稚園の保育料は3〜5歳で大きく軽減されています。表は給食費・課外活動等を含む目安。塾・習い事は別途（月1〜5万円が目安）。</p>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <p className="text-sm font-bold text-amber-300 mb-1">💡 分かれ道は「中学から私立にするか」</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              オール公立と「中学から私立」の差は、中高6年＋私立大で<strong className="text-white">約1,000万円</strong>。東京では中学受験率が高く、この選択が家計計画の最大の分岐点になります。マンション購入の予算を決める前に、教育方針の方向性だけでも夫婦で揃えておくと後悔が減ります。
            </p>
          </div>
        </section>

        {/* ━━ ツールCTA ━━ */}
        <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-amber-300 mb-1">👶 わが家の場合はいくら？を60秒で試算</p>
          <p className="text-sm font-black text-white mb-2">進路別・子どもの人数別に総額をシミュレーション</p>
          <p className="text-xs text-slate-400 mb-3">保育園・小中高・大学・習い事の選択肢を選ぶだけで、0歳〜大学卒業までの総費用と月々の積立目安を自動計算。児童手当などの支援制度の概算も差し引けます。</p>
          <Link href="/child" className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-colors">
            👶 子育て費用シミュレーターを使う →
          </Link>
        </div>

        {/* ━━ フェーズ別の山 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-amber-500/20">
            ⛰️ 家計負担の「山」はいつ来るか
          </h2>
          <div className="space-y-3">
            {[
              { phase: "0〜5歳：山は小さい（無償化の恩恵）", body: "幼保無償化と児童手当で、認可保育園なら負担は想像より軽め。ここが「貯めどき第1期」。児童手当を全額積み立てるだけで大学費用の相当部分を確保できます。", color: "border-emerald-500/40 bg-emerald-500/10", text: "text-emerald-300" },
              { phase: "6〜12歳（公立の場合）：最大の貯めどき", body: "公立小学校なら学費負担は最も軽い時期。ただし中学受験をするなら小4〜小6で塾代が年50〜100万円級に跳ね上がるため、方針次第でこの期間の景色は一変します。", color: "border-blue-500/40 bg-blue-500/10", text: "text-blue-300" },
              { phase: "13〜18歳：私立なら第1の山", body: "私立中高は年100〜130万円規模。東京都は私立高校授業料の実質無償化（所得制限なし）があるため、高校期の負担は以前より軽減されています。", color: "border-amber-500/40 bg-amber-500/10", text: "text-amber-300" },
              { phase: "18〜22歳：最大の山（大学）", body: "入学金＋授業料に加え、下宿なら仕送りも。私立理系＋下宿だと4年で1,000万円近くになるケースも。この山に向けた積立が子育て家計の本丸です。", color: "border-red-500/40 bg-red-500/10", text: "text-red-300" },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border-2 p-4 ${item.color}`}>
                <p className={`text-sm font-bold mb-1 ${item.text}`}>{item.phase}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ 住宅ローンとの両立 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-amber-500/20">
            🏠 マンション購入と子育て費用の両立
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            30代の家計で最大の判断は「住宅ローンと教育費の山を同時に乗り切れるか」です。順番を間違えると、教育費のピーク時にローンが重くのしかかります。
          </p>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
            <p className="text-sm font-bold text-blue-300 mb-2">おすすめの判断順序</p>
            <ol className="text-sm text-slate-200 space-y-2">
              <li className="flex items-start gap-2"><span className="font-black text-blue-400">1.</span><span>教育方針のざっくりした方向性を決める（オール公立？中学から私立？）</span></li>
              <li className="flex items-start gap-2"><span className="font-black text-blue-400">2.</span><span>子育て費用シミュレーターで総額と月々の積立目安を出す</span></li>
              <li className="flex items-start gap-2"><span className="font-black text-blue-400">3.</span><span>その積立を確保した上で、返済比率25%以内に収まる物件価格を決める</span></li>
            </ol>
          </div>
        </section>

        {/* ━━ FAQ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-amber-500/20">
            ❓ よくある質問
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-4">
                <p className="text-sm font-bold text-amber-300 mb-2">Q. {item.q}</p>
                <p className="text-xs text-slate-300 leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

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
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">
          ※本記事は情報提供を目的としており、金額は公的調査等をもとにした一般的な目安です。実際の費用は地域・学校・家庭の方針により大きく異なります。支援制度は改正される場合があるため、最新情報は各自治体・学校にご確認ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/tomobataraki-jutaku-loan" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">👫</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">共働き夫婦の住宅ローン｜世帯年収別の購入可能額</span>
            </Link>
            <Link href="/articles/juutaku-loan-burden-rate" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📊</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローンの返済比率は何%が安全？年収別の目安を解説</span>
            </Link>
            <Link href="/articles/chintai-vs-kounyu" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏠</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">賃貸 vs 購入、結局どっちが得？30代向けに徹底比較</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
