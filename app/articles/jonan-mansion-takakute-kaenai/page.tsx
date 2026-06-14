import type { Metadata } from "next";
import Link from "next/link";
import { TOKYO_AREAS, calcAreaPrice } from "@/lib/areaData";

export const metadata: Metadata = {
  title: "城南エリアのマンションが高くて買えない人へ｜現実的な代替と狙い方【2026年】｜30Lab",
  description:
    "城南エリア（品川・目黒・大田・世田谷）のマンションは高くて手が届かない——そんな人向けに、同じ城南で狙える割安区・隣接エリア・物件の妥協ポイントを坪単価データつきで解説。自分の予算で買える城南エリアも診断ツールで確認できます。",
  keywords: [
    "城南エリア マンション 高い",
    "城南 マンション 予算",
    "品川区 目黒区 大田区 マンション 価格",
    "城南 買えない 代替エリア",
    "城南エリア 狙い目",
  ],
  openGraph: {
    title: "城南エリアのマンションが高くて買えない人へ｜現実的な代替と狙い方",
    description: "城南が高くて買えない人向けに、同じ城南で狙える割安区・隣接エリア・妥協ポイントを坪単価データで解説。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "城南エリアのマンションが高くて買えない人へ",
    description: "同じ城南で狙える割安区・隣接エリア・妥協ポイントを坪単価データで解説。",
  },
};

const FAQ_ITEMS = [
  {
    q: "城南エリアとはどこを指しますか？",
    a: "一般に品川区・目黒区・大田区・世田谷区を中核とするエリアを指します（港区南部を含めることもあります）。皇居の南西側に広がる、住環境とブランド力を兼ね備えた人気エリアです。",
  },
  {
    q: "城南エリアの中で比較的買いやすい区はどこですか？",
    a: "大田区が城南の中では坪単価が最も抑えめです。同じ城南でも目黒区とは坪単価で3割以上の差があり、特に蒲田・大森エリアは利便性の割に価格が現実的。田園調布のような高額エリアと混在しているため、区内でも価格差が大きい点に注意です。",
  },
  {
    q: "予算が城南に届かない場合、どう考えればいいですか？",
    a: "まず診断ツールで自分の安全購入価格を出し、その金額で城南のどの区・どの駅が射程内かを確認するのが先です。そのうえで①城南内の割安区（大田区など）②城南隣接の神奈川方面（川崎・武蔵小杉方面）③駅距離や築年数を妥協して城南内で探す、の3方向で検討すると現実的な落としどころが見つかります。",
  },
  {
    q: "城南にこだわらず資産価値を取るならどこがいいですか？",
    a: "資産性だけで見れば港区・渋谷区・千代田区（Sグレード）が最上位ですが、坪単価も最も高くなります。城南の品川・目黒（Aグレード）は資産性と住みやすさのバランスが良く、予算が許せば有力な選択肢です。詳しくは23区の資産価値ランキング記事も参考にしてください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "城南エリアのマンションが高くて買えない人へ｜現実的な代替と狙い方【2026年】",
  description:
    "城南エリアが高くて買えない人向けに、同じ城南で狙える割安区・隣接エリア・妥協ポイントを坪単価データで解説。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  mainEntityOfPage: "https://30lab.vercel.app/articles/jonan-mansion-takakute-kaenai",
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

// 城南エリア中核4区＋参考の港区
const JONAN_NAMES = ["港区", "目黒区", "品川区", "世田谷区", "大田区"];

export default function JonanMansionPage() {
  const jonan = JONAN_NAMES
    .map((n) => TOKYO_AREAS.find((a) => a.name === n)!)
    .filter(Boolean)
    .sort((a, b) => b.avgPricePerSqm - a.avgPricePerSqm);

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
          <span className="text-slate-300">城南エリアが高くて買えない人へ</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">エリア・資産価値</span>
          <span className="text-xs text-slate-500">2026年6月</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          <span className="text-blue-400">城南エリア</span>のマンションが<br />
          高くて買えない人へ｜現実的な代替と狙い方
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          品川・目黒・大田・世田谷——いわゆる城南エリアは、住環境もブランド力も申し分なく、「ここに住めたら」と憧れる人は多いはずです。私もその一人。でも実際に価格を調べると、70㎡で1億円超えがゴロゴロ。正直「これは無理だ」と一度は諦めかけました。ただ、調べていくうちに分かったのは、<strong className="text-white">城南は"区"でひとくくりにすると見誤る</strong>ということ。同じ城南でも、狙い方次第で現実的な選択肢は残っています。
        </p>

        {/* ━━ 城南の価格現実 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💰 城南エリアの価格現実（坪単価・70㎡換算）
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">区</th>
                  <th className="text-center px-2 py-3 font-bold text-slate-200 border-b border-slate-700">グレード</th>
                  <th className="text-right px-3 py-3 font-bold text-blue-300 border-b border-slate-700">坪単価</th>
                  <th className="text-right px-3 py-3 font-bold text-slate-200 border-b border-slate-700">70㎡目安</th>
                </tr>
              </thead>
              <tbody>
                {jonan.map((area, i) => {
                  const tsubo = Math.round(area.avgPricePerSqm * 3.3);
                  const price70 = calcAreaPrice(area, 70);
                  return (
                    <tr key={area.name} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                      <td className="px-3 py-3">
                        <span className="font-bold text-white text-xs">{area.name}</span>
                        <span className="block text-slate-500 text-xs">{area.desc}</span>
                      </td>
                      <td className="px-2 py-3 text-center text-xs font-bold text-slate-300">{area.assetGrade}</td>
                      <td className="px-3 py-3 text-right text-blue-300 font-semibold text-xs whitespace-nowrap">{tsubo.toLocaleString()}万/坪</td>
                      <td className="px-3 py-3 text-right font-bold text-white text-xs whitespace-nowrap">{price70.toLocaleString()}万円</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">※2024年時点の区別平均からの推計。港区は参考として記載。同一区でも駅距離・築年で大きく変わります。</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-sm font-bold text-blue-300 mb-1">💡 同じ城南でも、目黒と大田で3割以上ちがう</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              城南の中で坪単価が最も高い目黒区と、最も抑えめな大田区では、70㎡で<strong className="text-white">3,000万円以上</strong>の差が出ます。「城南は高い」と区名でまとめて諦めるのではなく、<strong className="text-white">城南の中の価格差</strong>を見るのが第一歩です。
            </p>
          </div>
        </section>

        {/* ━━ 3つの現実的選択肢 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🎯 城南が高くて買えないときの3つの選択肢
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border-2 border-emerald-500/40 bg-emerald-500/10 p-4">
              <p className="text-sm font-bold text-emerald-300 mb-1">① 城南の中の割安区を狙う（大田区）</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                大田区は同じ城南でありながら坪単価が最も現実的。田園調布のような高額エリアと、蒲田・大森のような利便性重視で価格が抑えめなエリアが混在しています。「城南に住む」というブランドを保ちつつ予算を圧縮できる、最も現実的な選択肢です。
              </p>
            </div>
            <div className="rounded-xl border-2 border-blue-500/40 bg-blue-500/10 p-4">
              <p className="text-sm font-bold text-blue-300 mb-1">② 城南隣接の神奈川方面に広げる</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                川崎市（武蔵小杉・川崎）方面は、城南の主要区へのアクセスが良いわりに価格が抑えめなことが多いエリアです。生活圏が城南とほぼ重なるため、「城南的な暮らし」を予算内で実現したい人の現実解になり得ます（価格は物件により大きく異なるため要確認）。
              </p>
            </div>
            <div className="rounded-xl border-2 border-amber-500/40 bg-amber-500/10 p-4">
              <p className="text-sm font-bold text-amber-300 mb-1">③ 城南内で「駅距離・築年数」を妥協する</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                同じ品川・目黒でも、駅徒歩10分超や築20年以上の中古に広げると価格は大きく下がります。資産性を保ちたいなら「駅近の新築」より「駅近の中古」を優先するのがコツ。立地（駅距離）は後から変えられませんが、築年数による価格差はチャンスにもなります。
              </p>
            </div>
          </div>
        </section>

        {/* ━━ 診断ツールCTA ━━ */}
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-300 mb-1">🏠 まず「城南のどこなら自分に買えるか」を数字で知る</p>
          <p className="text-sm font-black text-white mb-2">無料診断で安全購入価格 → 射程内のエリアがわかる</p>
          <p className="text-xs text-slate-400 mb-3">年収・頭金を入れるだけで「無理なく買える価格」を算出。その金額で城南のどの区・物件が現実的かを判断できます。背伸びして城南に住んで家計が破綻しては本末転倒です。</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href="/mansion" className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-4 py-3 rounded-xl transition-colors">
              🏠 安全購入価格を診断する →
            </Link>
            <Link href="/check" className="flex-1 inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-sm px-4 py-3 rounded-xl border border-slate-600 transition-colors">
              🔍 気になる物件を診断する
            </Link>
          </div>
        </div>

        {/* ━━ 背伸びの落とし穴 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ⚠️ 「無理して城南」が一番危ない
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            城南への憧れは分かります。でも、住みたい気持ちが先行して予算を超えた借入をすると、毎月の返済が家計を圧迫し、せっかくの城南ライフが「ローンに追われる生活」になりかねません。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            大事なのは順番です。<strong className="text-white">①自分の安全購入価格を知る → ②その範囲で城南（または代替エリア）の物件を探す</strong>。この順番なら、エリアの満足度と家計の安全性を両立できます。「城南だから」で予算を歪めるのではなく、予算の中で城南的な価値（駅近・資産性・住環境）を最大化する発想に切り替えるのがおすすめです。
          </p>
        </section>

        {/* ━━ FAQ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ❓ よくある質問
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-4">
                <p className="text-sm font-bold text-blue-300 mb-2">Q. {item.q}</p>
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
          ※本記事は情報提供を目的としており、特定のエリア・物件の購入を推奨するものではありません。坪単価は推計であり、将来の価格を保証するものではありません。実際の購入判断は専門家にご相談ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/tokyo-23ku-shisan-kachi-ranking" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🗺️</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">東京23区 マンション資産価値ランキング2026</span>
            </Link>
            <Link href="/articles/mansion-baibai-shisan-kachi" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">資産価値が落ちにくいマンションの条件とは？</span>
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
