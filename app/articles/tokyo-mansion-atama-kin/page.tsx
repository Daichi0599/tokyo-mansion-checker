import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "東京でマンション購入に必要な頭金はいくら？2025年最新データで解説｜30Lab",
  description:
    "都内マンション購入時の頭金の目安を解説。「頭金ゼロ」は可能か？頭金10%・20%で何が変わるか、フルローンのリスクと節約できる利息の計算例を紹介。",
  keywords: [
    "東京 マンション 頭金 いくら",
    "都内マンション 頭金 目安",
    "マンション 頭金 なし フルローン",
    "マンション 購入 頭金 どのくらい",
    "住宅ローン 頭金 メリット",
  ],
  openGraph: {
    title: "東京でマンション購入に必要な頭金はいくら？",
    description: "都内マンションの頭金の目安・フルローンのリスク・頭金別の利息差を解説。",
  },
};

export default function TokyoMansionAtamaKinPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">頭金の目安</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">頭金・東京不動産</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          東京でマンション購入に必要な<br />
          <span className="text-blue-600">頭金はいくら</span>？2025年最新データで解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          マンション購入を検討し始めると、必ず「頭金はいくら用意すればいい？」という疑問が出てきます。「最低10%は必要」「フルローンでもOK」——さまざまな意見がありますが、実際のところどうなのでしょうか。この記事では都内マンションを購入する際の頭金の目安と、頭金の多寡によって何が変わるかを解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏙️ 都内マンションの価格相場（2025年）
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            まず現実の価格を把握しておきましょう。
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { area: "東京23区 新築マンション", price: "約9,000万〜1.2億円", note: "港区・渋谷区などは2〜3億も" },
              { area: "東京23区 中古マンション（築10〜15年）", price: "約4,000万〜7,000万円", note: "エリアにより大きく異なる" },
              { area: "東京郊外（多摩地区・神奈川・埼玉）", price: "約3,000万〜5,000万円", note: "駅近・新築なら5,000万超も" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">{item.area}</p>
                <p className="text-lg font-black text-gray-900">{item.price}</p>
                <p className="text-xs text-gray-400 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            23区の新築は高騰していますが、中古や郊外エリアを含めると現実的な選択肢はまだあります。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💰 頭金の目安は「物件価格の10〜20%」
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            一般的に頭金の目安は<strong>物件価格の10〜20%</strong>とされています。たとえば5,000万円のマンションなら：
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">頭金割合</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">頭金額<br /><span className="text-xs font-normal">(5,000万の場合)</span></th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">借入額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ratio: "0%（フルローン）", kin: 0, borrow: 5000 },
                  { ratio: "10%", kin: 500, borrow: 4500 },
                  { ratio: "20%", kin: 1000, borrow: 4000 },
                  { ratio: "30%", kin: 1500, borrow: 3500 },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.ratio}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.kin === 0 ? "—" : `${row.kin.toLocaleString()}万円`}</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-bold">{row.borrow.toLocaleString()}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📊 頭金が多いほど得する「利息の差」
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            借入額が少ないほど、支払う利息の総額も減ります。金利1.5%・35年返済で計算すると：
          </p>
          <div className="space-y-3 mb-4">
            {[
              { borrow: 5000, monthly: 15.3, total: 6416, interest: 1416, bg: "bg-red-50 border-red-200" },
              { borrow: 4500, monthly: 13.8, total: 5774, interest: 1274, bg: "bg-yellow-50 border-yellow-200" },
              { borrow: 4000, monthly: 12.2, total: 5133, interest: 1133, bg: "bg-green-50 border-green-200" },
            ].map((row, i) => (
              <div key={i} className={`rounded-xl p-4 border ${row.bg}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-gray-800">借入{row.borrow.toLocaleString()}万円</p>
                    <p className="text-xs text-gray-600">月返済 約{row.monthly}万円</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">総返済額</p>
                    <p className="text-base font-black text-gray-900">{row.total.toLocaleString()}万円</p>
                    <p className="text-xs text-gray-500">うち利息 {row.interest.toLocaleString()}万円</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            頭金500万円の差が、<strong>利息だけで約140万円</strong>の差につながります。頭金を増やすことは長期的に大きなメリットがあります。
          </p>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ⚠️ フルローンのリスクと現実
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            最近は低金利の影響もあり「頭金なしのフルローン」を選ぶ方も増えています。フルローン自体は可能ですが、以下のリスクを理解した上で判断することが重要です。
          </p>
          <div className="space-y-3">
            {[
              { title: "オーバーローンリスク", body: "不動産価格が下落したとき、売却価格よりローン残高の方が大きくなる「オーバーローン」状態になりやすい。" },
              { title: "諸費用が別途必要", body: "物件購入時には物件価格の3〜7%程度の諸費用（登記費用・仲介手数料・火災保険等）が別途必要。頭金ゼロの場合、これらは現金で用意が必要。" },
              { title: "月返済額が高くなる", body: "全額借り入れるため月々の返済額が大きくなり、返済比率が上がる。家計の余裕が減る。" },
              { title: "金融機関の審査が通りにくい場合も", body: "頭金が少ないと審査基準が厳しくなる金融機関もある。特に自営業・転職直後などは注意。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-gray-800 mb-1">⚠️ {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 結論：頭金はいくら用意すべきか
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
            <p className="text-sm font-bold text-blue-800 mb-3">現実的な推奨ライン</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">◎</span><span><strong>物件価格の10〜20%以上</strong>：理想的。月返済額・利息ともに抑えられ、家計の安定性が高い</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">○</span><span><strong>諸費用分（3〜7%）だけは現金準備</strong>：フルローンを選ぶ場合でも、諸費用分は現金が必要</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-600 font-bold">△</span><span><strong>手元資金をゼロにしない</strong>：頭金に使い切って緊急予備費がなくなるのは危険。生活費3〜6ヶ月分は手元に残す</span></li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            「頭金ゼロ」が絶対NGではありませんが、<strong>諸費用＋緊急予備費は必ず確保</strong>した上で判断しましょう。自分の状況に合わせた試算が重要です。
          </p>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">頭金ありなしで月返済がどう変わるか試算</p>
          <p className="text-xs mb-4 opacity-90">頭金の金額を変えながら、返済比率や安全購入価格を確認できます。</p>
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
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
            <Link href="/articles/mansion-nenshu-nanbai" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">✖️</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションは年収の何倍まで買える？適正な倍率を解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
