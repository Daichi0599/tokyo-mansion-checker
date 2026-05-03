import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンの返済比率は何%が安全？年収別の目安と限界ラインを解説｜30Lab",
  description:
    "住宅ローンの返済比率（負担率）は年収の何%が適切か？25%・30%・35%それぞれのリスクを年収別に解説。管理費込みの実質負担率と、無理のない返済プランの考え方。",
  keywords: [
    "住宅ローン 返済比率 目安",
    "返済負担率 何% 適切",
    "住宅ローン 年収 何割",
    "住居費負担率 目安",
    "住宅ローン 無理なく返せる",
  ],
  openGraph: {
    title: "住宅ローンの返済比率は何%が安全？年収別の目安と限界ラインを解説",
    description: "25%・30%・35%それぞれのリスクと、年収別の安全ラインを詳しく解説。",
  },
};

const levelData = [
  { label: "安全圏", range: "〜20%未満", color: "green", desc: "生活に余裕あり。教育費・老後貯蓄もしっかり確保できる水準。繰上返済も可能。" },
  { label: "標準圏", range: "20〜25%", color: "blue", desc: "一般的な目安。家計管理ができていれば問題ない水準。急な出費には注意が必要。" },
  { label: "注意圏", range: "25〜30%", color: "yellow", desc: "返済は続けられるが家計が引き締まる。外食・趣味などの支出を抑えないと厳しくなる。" },
  { label: "警戒圏", range: "30〜35%", color: "orange", desc: "金利上昇・収入減少があると危険。緊急予備費が底をつくリスクが高い。" },
  { label: "危険圏", range: "35%以上", color: "red", desc: "フラット35の審査基準（35%以下）を超える水準。家計破綻リスクが顕著に上がる。" },
];

export default function JuutakuLoanBurdenRatePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">返済比率の目安</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">返済比率・住宅ローン</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローンの返済比率は<span className="text-blue-600">何%が安全</span>？<br />
          年収別の目安と限界ラインを解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          住宅ローンを組む際に必ず出てくる「返済比率（負担率）」。「25%以内が安全」「30%まではOK」——さまざまな基準があって何を信じればいいのか迷う方も多いはずです。この記事では、返済比率の正しい計算方法と、年収別の安全ライン・危険ラインを具体的に解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💡 返済比率（負担率）とは？
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            返済比率とは、<strong>年収に対する年間返済額の割合</strong>のことです。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 mb-4 text-center">
            <p className="text-sm font-black text-blue-800">返済比率 = 年間返済額 ÷ 年収 × 100</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            たとえば年収600万円で月々の返済が12.5万円（年間150万円）の場合：
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 mb-4">
            <p>返済比率 = 150万 ÷ 600万 × 100 = <strong>25%</strong></p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            金融機関の審査では一般的に<strong>35%以下</strong>が基準とされますが、「審査が通る＝安全に返せる」ではありません。実際の生活では25%以内を目安にすることをおすすめします。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🚦 返済比率別のリスクレベル
          </h2>
          <div className="space-y-3">
            {levelData.map((item, i) => {
              const colors: Record<string, string> = {
                green: "bg-green-50 border-green-200",
                blue: "bg-blue-50 border-blue-200",
                yellow: "bg-yellow-50 border-yellow-200",
                orange: "bg-orange-50 border-orange-200",
                red: "bg-red-50 border-red-200",
              };
              const labelColors: Record<string, string> = {
                green: "text-green-700 bg-green-100",
                blue: "text-blue-700 bg-blue-100",
                yellow: "text-yellow-700 bg-yellow-100",
                orange: "text-orange-700 bg-orange-100",
                red: "text-red-700 bg-red-100",
              };
              return (
                <div key={i} className={`rounded-xl p-4 border ${colors[item.color]}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${labelColors[item.color]}`}>{item.label}</span>
                    <span className="text-sm font-bold text-gray-800">{item.range}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📋 年収別「安全返済額」早見表
          </h2>
          <p className="text-sm text-gray-600 mb-4">返済比率25%（安全圏）での月々の返済上限額です。</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">年間返済上限<br /><span className="text-xs font-normal">(25%)</span></th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">月々の返済上限</th>
                </tr>
              </thead>
              <tbody>
                {[500, 600, 700, 800, 900, 1000].map((n, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{n}万円</td>
                    <td className="px-4 py-3 text-right text-gray-700">{(n * 0.25).toFixed(0)}万円</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-semibold">{((n * 0.25) / 12).toFixed(1)}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏢 マンションでは「管理費込み」で考える
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            マンション購入では、ローン返済額に加えて毎月<strong>管理費・修繕積立金</strong>がかかります。都内のマンションでは合わせて月2〜4万円程度が一般的です。
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-800 mb-2">⚠️ 実質的な住居費で考えよう</p>
            <div className="text-sm text-orange-700 space-y-1">
              <p>ローン返済 12万円 ＋ 管理費・修繕積立金 2.5万円 = <strong>月14.5万円</strong></p>
              <p>年収600万なら実質負担率 = 14.5万 × 12 ÷ 600万 = <strong>29%</strong></p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            ローン返済だけで25%以内に収めていても、管理費等を含めると30%超になるケースがあります。返済比率はローン単体ではなく<strong>住居費合計</strong>で計算することが重要です。
          </p>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📈 金利上昇への備え
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            変動金利を選ぶ場合、金利が将来上昇すると返済比率も上がります。たとえば金利が1.0%から2.0%に上昇した場合、同じ借入額でも月返済額は約8〜10%増加します。
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 space-y-2 mb-4">
            <p className="font-bold text-gray-800">【シミュレーション例】借入3,000万・35年</p>
            <p>金利1.0%：月返済 <strong>約8.5万円</strong></p>
            <p>金利2.0%：月返済 <strong>約9.9万円</strong>（＋約1.5万円/月）</p>
            <p>金利3.0%：月返済 <strong>約11.4万円</strong>（＋約2.9万円/月）</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            返済比率25%で組んでいても、金利上昇で30〜35%になり得ます。余裕のある返済計画を立てることが重要です。
          </p>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">あなたの返済比率を今すぐ確認</p>
          <p className="text-xs mb-4 opacity-90">年収・購入価格・頭金を入力するだけで、返済比率と安全ラインをチェックできます。</p>
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
            <Link href="/articles/tomobataraki-jutaku-loan" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">👫</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">共働き夫婦の住宅ローン｜世帯年収別の購入可能額</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
