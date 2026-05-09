import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンションの固定資産税はいくら？計算方法と相場を解説｜30Lab",
  description:
    "都内マンションの固定資産税の相場と計算方法を解説。年10〜30万円が目安。新築軽減措置（5年間1/2）・都市計画税との合計額や、購入前に知っておくべき維持費の知識をまとめました。",
  keywords: [
    "マンション 固定資産税 いくら",
    "マンション 固定資産税 計算",
    "固定資産税 新築 軽減",
    "固定資産税 都市計画税",
    "マンション 維持費 固定資産税",
  ],
  openGraph: {
    title: "マンションの固定資産税はいくら？計算方法と相場を解説",
    description: "都内マンションの固定資産税の目安・計算式・新築軽減措置を解説。",
  },
};

export default function MansionKoteiShisanzeiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">固定資産税</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">固定資産税・維持費</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          マンションの<span className="text-blue-600">固定資産税</span>はいくら？<br />
          計算方法と相場を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          マンションを購入すると毎年かかる「固定資産税」。住宅ローンの返済額ばかり注目されがちですが、固定資産税も年間10〜30万円規模になる重要な維持費です。この記事では計算方法・都内マンションの相場・新築軽減措置・都市計画税との合計額を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏛️ 固定資産税の計算方法
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
            <p className="text-sm font-bold text-blue-800 mb-3">基本計算式</p>
            <div className="space-y-2 text-sm text-gray-800">
              <p>固定資産税 = <strong className="text-blue-700">課税標準額 × 1.4%</strong></p>
              <p>都市計画税 = <strong className="text-orange-600">課税標準額 × 0.3%</strong>（市街化区域のみ）</p>
              <p className="mt-3 text-xs text-gray-500">※課税標準額は市区町村が決定する「固定資産税評価額」がベース。市場価格の70%程度が目安。</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-gray-800 mb-2">計算例：物件価格4,000万円の都内マンション</p>
            <div className="text-sm text-gray-700 space-y-1">
              <p>固定資産税評価額の目安 = 4,000万円 × 70% = <strong>2,800万円</strong></p>
              <p>課税標準額（マンション用地は1/6特例あり） = 約<strong>1,400〜2,000万円</strong></p>
              <p>固定資産税 = 2,000万円 × 1.4% = <strong>年間28万円</strong></p>
              <p>都市計画税 = 2,000万円 × 0.3% = <strong>年間6万円</strong></p>
              <p className="font-bold text-blue-700 mt-2">合計：年間約34万円 → 月換算 約2.8万円</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">※土地と建物の評価額・課税標準額は物件・エリアにより異なります。上記は概算です。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📊 都内マンションの固定資産税・相場早見表
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">物件価格</th>
                  <th className="text-right px-4 py-3 font-bold text-blue-700 border-b border-gray-200">固定資産税（年）</th>
                  <th className="text-right px-4 py-3 font-bold text-orange-600 border-b border-gray-200">都市計画税（年）</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">合計（年）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { price: "2,500万円", tax: "約7〜12万円", city: "約1.5〜2.5万円", total: "約10〜15万円" },
                  { price: "3,500万円", tax: "約10〜17万円", city: "約2〜3.5万円", total: "約13〜21万円" },
                  { price: "5,000万円", tax: "約14〜24万円", city: "約3〜5万円", total: "約17〜29万円" },
                  { price: "7,000万円", tax: "約20〜34万円", city: "約4〜7万円", total: "約24〜41万円" },
                  { price: "1億円", tax: "約29〜48万円", city: "約6〜10万円", total: "約35〜58万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.price}</td>
                    <td className="px-4 py-3 text-right text-blue-700">{row.tax}</td>
                    <td className="px-4 py-3 text-right text-orange-600">{row.city}</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-800">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※目安。実際は土地・建物の評価額・エリアの用途地域・床面積等により大きく変わります。</p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🎁 新築マンションの軽減措置（最初の5年間）
          </h2>
          <div className="bg-green-50 rounded-xl p-5 border border-green-200 mb-4">
            <p className="text-sm font-bold text-green-800 mb-3">新築住宅の固定資産税軽減措置</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-black mt-0.5">✓</span>
                <span><strong>一般的な新築マンション：</strong>建物分の固定資産税が<strong className="text-green-700">最初の5年間 1/2に軽減</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-black mt-0.5">✓</span>
                <span><strong>認定長期優良住宅：</strong>同様に建物分が<strong className="text-green-700">最初の7年間 1/2に軽減</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-black mt-0.5">✓</span>
                <span>軽減対象：120㎡以下の部分（120㎡超は120㎡分のみ）</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <p className="text-sm font-bold text-yellow-800 mb-2">⚠️ 注意：6年目から税額が約2倍になる</p>
            <p className="text-xs text-gray-700 leading-relaxed">
              新築軽減が終了する6年目から、建物分の税額が本来の金額に戻ります。「6年目から固定資産税が2倍になった」と感じる方が多いため、軽減終了後の税額も事前に確認しておきましょう。
            </p>
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📅 固定資産税の支払い方法と時期
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "納税通知書が届く時期",
                body: "毎年4〜6月頃に市区町村から送付されます。第1期〜第4期の4回に分けて支払う（または一括払い可）。",
              },
              {
                title: "支払い方法",
                body: "金融機関・コンビニ・口座振替・クレジットカード払い（自治体による）。最近はPayPayなどのQR決済も対応している自治体が増えています。",
              },
              {
                title: "引き渡し年の清算",
                body: "中古購入の場合、売主が年間分を先払いしているため、引き渡し日以降の日割り分を精算する「固定資産税清算金」が発生します（諸費用の一部）。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-gray-800 mb-1">📌 {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">固定資産税込みの実質負担額を試算</p>
          <p className="text-xs mb-4 opacity-90">ローン返済＋管理費＋固定資産税を含めた本当の住居費を確認しましょう。</p>
          <Link
            href="/mansion"
            className="inline-block bg-white text-blue-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            無料マンション診断ツールを使う →
          </Link>
        </div>

        <section>
          <h2 className="text-sm font-bold text-gray-700 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/mansion-kanrihi-shuzenhi" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🏢</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションの管理費・修繕積立金の相場はいくら？</span>
            </Link>
            <Link href="/articles/mansion-shohiyo" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💴</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンション購入の諸費用はいくら？内訳と相場を解説</span>
            </Link>
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
