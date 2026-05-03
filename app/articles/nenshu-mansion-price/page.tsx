import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "年収別マンション購入可能額の目安【早見表付き】年収500万〜1000万まで解説｜30Lab",
  description:
    "年収500万・600万・700万・800万・1000万でマンションはいくらまで買えるか？返済比率25%・30%・35%別の購入可能額早見表と計算方法を解説。都内マンション購入前に確認。",
  keywords: [
    "年収600万 マンション 購入可能額",
    "年収700万 マンション",
    "年収別 マンション 購入可能額",
    "マンション 購入可能額 計算",
    "住宅ローン 年収 いくらまで",
  ],
  openGraph: {
    title: "年収別マンション購入可能額の目安【早見表付き】",
    description:
      "年収500万〜1000万の購入可能額を返済比率別に一覧表示。計算方法と注意点も解説。",
  },
};

const tableData = [
  { nenshu: 500, safe: 2750, caution: 3300, warning: 3850 },
  { nenshu: 600, safe: 3300, caution: 3960, warning: 4620 },
  { nenshu: 700, safe: 3850, caution: 4620, warning: 5390 },
  { nenshu: 800, safe: 4400, caution: 5280, warning: 6160 },
  { nenshu: 900, safe: 4950, caution: 5940, warning: 6930 },
  { nenshu: 1000, safe: 5500, caution: 6600, warning: 7700 },
];

export default function NenshuMansionPricePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* パンくず */}
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">年収別購入可能額</span>
        </nav>

        {/* タグ・日付 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">年収・購入可能額</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          年収別マンション購入可能額の目安<br />
          <span className="text-blue-600">【早見表付き】</span>年収500万〜1000万まで解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          「自分の年収でマンションを買うとしたら、いくらまでなら大丈夫？」——この記事では、年収500万〜1000万の方が住宅ローンを組む場合の購入可能額を、返済比率（負担率）別に早見表でまとめました。計算方法と注意点もあわせて解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📊 年収別・購入可能額の早見表
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            下表は、金利1.0%・35年返済（元利均等）で計算した場合の<strong>マンション購入可能額の目安</strong>です。頭金ゼロのフルローン想定です。
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-green-700 border-b border-gray-200">安全圏<br /><span className="text-xs font-normal text-gray-500">負担率25%</span></th>
                  <th className="text-right px-4 py-3 font-bold text-yellow-700 border-b border-gray-200">注意圏<br /><span className="text-xs font-normal text-gray-500">負担率30%</span></th>
                  <th className="text-right px-4 py-3 font-bold text-red-600 border-b border-gray-200">警戒圏<br /><span className="text-xs font-normal text-gray-500">負担率35%</span></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.nenshu}万円</td>
                    <td className="px-4 py-3 text-right text-green-700 font-semibold">{row.safe.toLocaleString()}万円</td>
                    <td className="px-4 py-3 text-right text-yellow-700 font-semibold">{row.caution.toLocaleString()}万円</td>
                    <td className="px-4 py-3 text-right text-red-600 font-semibold">{row.warning.toLocaleString()}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※金利1.0%・35年返済・元利均等返済で試算。頭金ゼロの借入可能額を購入可能額とする。実際の審査や金利により異なります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🧮 購入可能額の計算方法
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            購入可能額は「返済比率（負担率）」から逆算して求めます。
          </p>

          <div className="bg-blue-50 rounded-xl p-4 mb-4 text-sm">
            <p className="font-bold text-blue-800 mb-2">計算式</p>
            <ol className="space-y-2 text-gray-700">
              <li><span className="font-bold text-blue-700">①</span> 月々の返済上限 = 年収 × 返済比率 ÷ 12</li>
              <li><span className="font-bold text-blue-700">②</span> 上限月返済額から借入可能額を逆算</li>
              <li><span className="font-bold text-blue-700">③</span> 借入可能額 ＋ 頭金 ＝ 購入可能額</li>
            </ol>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            <strong>例：年収600万・返済比率25%・金利1.0%・35年返済の場合</strong>
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 space-y-1 mb-4">
            <p>月々の返済上限 = 600万 × 25% ÷ 12 = <strong>12.5万円/月</strong></p>
            <p>借入可能額（元利均等・金利1%・35年）= 約<strong>3,300万円</strong></p>
            <p>頭金ゼロなら購入可能額 = <strong>3,300万円</strong></p>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            返済比率は<strong>25%が安全圏の目安</strong>とされています。管理費・修繕積立金・固定資産税なども含めた「住居費全体」を考えると、30%を超えると家計が圧迫される傾向があります。
          </p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏙️ 都内マンションの現実との乖離
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            上の早見表と比べると、東京都内の新築マンション平均価格（2024年）は約<strong>9,000万円超</strong>（首都圏全体でも約7,000万円超）。年収1,000万円でも「安全圏」の5,500万円を大幅に超えます。
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-red-50 rounded-xl p-4 text-center">
              <p className="text-xs text-red-600 font-bold mb-1">東京23区 新築平均</p>
              <p className="text-xl font-black text-red-700">約1.2億円</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <p className="text-xs text-orange-600 font-bold mb-1">首都圏 中古平均</p>
              <p className="text-xl font-black text-orange-700">約4,500万円</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            だからといって、買えないわけではありません。重要なのは以下の視点です：
          </p>
          <ul className="text-sm text-gray-600 space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span><span><strong>頭金を増やす</strong>：貯蓄で頭金を1,000〜2,000万用意できれば、借入額を大幅に減らせる</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span><span><strong>エリアを柔軟に</strong>：23区外・神奈川・埼玉なら3,000〜5,000万台で探しやすい</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span><span><strong>中古も視野に</strong>：築10〜15年の中古なら新築の6〜7割程度の価格帯が存在する</span></li>
          </ul>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ⚠️ 早見表を使う際の注意点
          </h2>
          <div className="space-y-3">
            {[
              { title: "金利が上がると借入可能額は下がる", body: "上記は金利1.0%での試算です。金利が2.0%になると同じ月返済額での借入可能額は約15%減少します。変動金利を選ぶ場合は金利上昇リスクを考慮してください。" },
              { title: "管理費・修繕積立金は別途かかる", body: "マンションでは月2〜3万円の管理費・修繕積立金がかかります。実際の住居費は「ローン返済額＋管理費等」で考えてください。" },
              { title: "ボーナス払い・共働き加算は慎重に", body: "ボーナス払いや共働き収入を前提にした計算は、収入が変化したときのリスクが高くなります。特に育休・転職・病気などの備えが必要です。" },
              { title: "審査通過額 ≠ 適切な借入額", body: "金融機関の審査では年収の7〜8倍まで借りられることがありますが、それが「安全に返せる金額」ではありません。返済比率25%以内を目安に判断することをおすすめします。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-gray-800 mb-1">⚠️ {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">自分の年収で実際にシミュレーション</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・金利・返済年数を入力するだけ。安全購入価格を自動計算します。</p>
          <Link
            href="/mansion"
            className="inline-block bg-white text-blue-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            無料マンション診断ツールを使う →
          </Link>
        </div>

        {/* 関連記事 */}
        <section>
          <h2 className="text-sm font-bold text-gray-700 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/juutaku-loan-burden-rate" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📊</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの返済比率は何%が安全？年収別の目安を解説</span>
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
