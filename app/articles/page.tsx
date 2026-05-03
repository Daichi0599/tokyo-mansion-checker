import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンション購入コラム｜30Lab",
  description:
    "マンション購入・住宅ローンに関する解説記事。年収別の購入可能額、返済比率の目安、頭金の相場など、数字で理解できるコンテンツを掲載。",
  openGraph: {
    title: "マンション購入コラム｜30Lab",
    description: "マンション購入・住宅ローンに関する解説記事。",
  },
};

const articles = [
  {
    href: "/articles/nenshu-mansion-price",
    emoji: "💰",
    title: "年収別マンション購入可能額の目安【早見表付き】",
    description:
      "年収500万〜1000万の方が都内でマンションを買う場合の購入可能額を返済比率ごとに解説。自分の年収でどこまで買えるか、ひと目でわかる。",
    tag: "年収・購入可能額",
    date: "2025年最新",
  },
  {
    href: "/articles/juutaku-loan-burden-rate",
    emoji: "📊",
    title: "住宅ローンの返済比率は何%が安全？年収別の目安を解説",
    description:
      "「年収の25%まで」「30%まで」どちらが正しい？安全・注意・危険ラインを年収別に整理。返済比率の計算方法と、無理のない住宅ローンの考え方を解説。",
    tag: "返済比率・住宅ローン",
    date: "2025年最新",
  },
  {
    href: "/articles/tokyo-mansion-atama-kin",
    emoji: "🏙️",
    title: "東京でマンション購入に必要な頭金はいくら？",
    description:
      "都内マンションの平均価格から逆算した頭金の目安。「頭金ゼロ」でもOKなのか、頭金が多いほど有利なのか。フルローンのリスクも含めて解説。",
    tag: "頭金・東京不動産",
    date: "2025年最新",
  },
  {
    href: "/articles/mansion-nenshu-nanbai",
    emoji: "✖️",
    title: "マンションは年収の何倍まで買える？適正な倍率を解説",
    description:
      "「年収の5〜7倍が目安」と言われる根拠と、東京での現実。年収倍率だけで判断すると危ない理由と、正しい判断軸の考え方。",
    tag: "年収倍率・適正価格",
    date: "2025年最新",
  },
  {
    href: "/articles/tomobataraki-jutaku-loan",
    emoji: "👫",
    title: "共働き夫婦の住宅ローン｜世帯年収別の購入可能額",
    description:
      "夫婦2人の年収を合算するとどこまで借りられる？収入合算・ペアローンの違いと、共働きならではのリスク（育休・転職）を踏まえた現実的な試算。",
    tag: "共働き・ペアローン",
    date: "2025年最新",
  },
];

export default function ArticlesIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* ヘッダー */}
        <div className="mb-8">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">COLUMN</p>
          <h1 className="text-2xl font-black text-gray-900 mb-2">マンション購入コラム</h1>
          <p className="text-sm text-gray-500">
            数字で理解するマンション購入。年収・ローン・頭金の基礎知識から、都内の相場まで。
          </p>
        </div>

        {/* 記事一覧 */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="block bg-white rounded-2xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{article.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
                      {article.tag}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h2 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ツールCTA */}
        <div className="mt-10 bg-blue-600 rounded-2xl p-6 text-center text-white">
          <p className="text-sm font-bold mb-1">📱 自分の数字で試してみたい方へ</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・金利を入力するだけ。無料で診断できます。</p>
          <Link
            href="/mansion"
            className="inline-block bg-white text-blue-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            無料マンション診断ツールを使う →
          </Link>
        </div>
      </div>
    </main>
  );
}
