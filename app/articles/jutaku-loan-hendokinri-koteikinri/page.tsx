import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンは変動金利と固定金利どっちがいい？2025年の選び方｜30Lab",
  description:
    "住宅ローンの変動金利と固定金利の違いを徹底比較。2025年の金利動向をふまえ、どちらが得か・どんな人に向いているかをシミュレーション付きで解説します。",
  keywords: [
    "住宅ローン 変動金利 固定金利 どっち",
    "住宅ローン 変動 固定 比較",
    "住宅ローン 金利 選び方 2025",
    "変動金利 リスク",
    "固定金利 フラット35",
  ],
  openGraph: {
    title: "住宅ローンは変動金利と固定金利どっちがいい？2025年の選び方",
    description: "金利動向・シミュレーション・タイプ別おすすめを解説。",
  },
};

export default function JutakuLoanHendoKoteiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">変動金利vs固定金利</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">金利・住宅ローン</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローンは<span className="text-blue-600">変動金利と固定金利</span><br />
          どっちがいい？2025年の選び方
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          住宅ローンを検討するとき、多くの人が悩む「変動か固定か」問題。2024年に日本銀行が利上げに踏み切り、変動金利への不安が高まっています。この記事では2025年時点での金利動向をふまえ、それぞれの特徴と選び方を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📋 変動金利と固定金利の基本的な違い
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">項目</th>
                  <th className="text-center px-4 py-3 font-bold text-blue-700 border-b border-gray-200">変動金利</th>
                  <th className="text-center px-4 py-3 font-bold text-green-700 border-b border-gray-200">固定金利</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "2025年の金利水準", hendo: "0.4〜0.6%前後", kotei: "1.5〜2.0%前後（フラット35等）" },
                  { label: "返済額の変動", hendo: "金利上昇で増える", kotei: "借入時から変わらない" },
                  { label: "月返済額（4,000万・35年）", hendo: "約10.5万円", kotei: "約12.8万円" },
                  { label: "総返済額（金利据え置き想定）", hendo: "約4,400万円", kotei: "約5,370万円" },
                  { label: "金利上昇リスク", hendo: "あり", kotei: "なし" },
                  { label: "向いている人", hendo: "繰り上げ返済できる・収入安定", kotei: "安心感重視・長期計画派" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-700">{row.label}</td>
                    <td className="px-4 py-3 text-center text-xs text-blue-700">{row.hendo}</td>
                    <td className="px-4 py-3 text-center text-xs text-green-700">{row.kotei}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※2025年5月時点の参考値。金融機関・審査状況により異なります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📈 2025年の金利動向：変動は本当に上がるのか
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            2024年、日本銀行は約17年ぶりに政策金利を引き上げました。住宅ローンの変動金利は短期プライムレートに連動するため、今後も段階的な上昇が見込まれています。
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-800 mb-2">📌 金利上昇シミュレーション（借入4,000万・35年）</p>
            <div className="space-y-2">
              {[
                { rate: "現状 0.5%", monthly: "約10.4万円", total: "約4,370万円" },
                { rate: "1.0%に上昇", monthly: "約11.3万円", total: "約4,740万円" },
                { rate: "2.0%に上昇", monthly: "約13.2万円", total: "約5,540万円" },
                { rate: "3.0%に上昇", monthly: "約15.2万円", total: "約6,390万円" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between text-xs text-orange-700">
                  <span className="font-semibold">{row.rate}</span>
                  <span>月{row.monthly} / 総額{row.total}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            金利が2%まで上昇すると、月返済額が約2.8万円増加します。「それでも返済できるか」を事前にシミュレーションしておくことが重要です。
          </p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🤔 どちらを選ぶべきか？タイプ別診断
          </h2>
          <div className="space-y-3">
            {[
              {
                type: "変動金利が向いている人",
                icon: "🔵",
                bg: "bg-blue-50 border-blue-200",
                items: [
                  "繰り上げ返済を積極的に行える貯蓄力がある",
                  "収入が安定していて将来的にも下がりにくい",
                  "金利上昇時も家計に余裕がある（月3〜4万増でも対応可能）",
                  "借入期間が比較的短い（10〜20年）",
                ],
              },
              {
                type: "固定金利が向いている人",
                icon: "🟢",
                bg: "bg-green-50 border-green-200",
                items: [
                  "毎月の返済額を確定させて生活設計したい",
                  "共働きで一方の収入がなくなるリスクが高い",
                  "子育て・教育費などで家計の余裕が少ない",
                  "自営業・フリーランスなど収入が不安定",
                ],
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-2">{item.icon} {item.type}</p>
                <ul className="space-y-1">
                  {item.items.map((point, j) => (
                    <li key={j} className="text-xs text-gray-700 flex items-start gap-1">
                      <span className="text-gray-400 mt-0.5">・</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 結論：2025年の現実的な判断基準
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
            <ul className="text-sm text-gray-700 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black mt-0.5">1</span>
                <div>
                  <p className="font-bold">「固定金利2%でも返せるか」を必ず確認する</p>
                  <p className="text-xs text-gray-500 mt-0.5">変動で借りても、2%まで上昇した場合の月返済額で返済比率を計算しておく。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black mt-0.5">2</span>
                <div>
                  <p className="font-bold">繰り上げ返済できないなら固定を検討</p>
                  <p className="text-xs text-gray-500 mt-0.5">変動金利のメリットを活かすには、低金利の間に元本を減らすことが前提。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black mt-0.5">3</span>
                <div>
                  <p className="font-bold">複数の金融機関を比較する</p>
                  <p className="text-xs text-gray-500 mt-0.5">同じ変動・固定でも金融機関によって0.5〜1%以上の差があることも。</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">金利別の返済シミュレーションを試す</p>
          <p className="text-xs mb-4 opacity-90">変動・固定それぞれの金利を入力して、月返済額と返済比率をすぐに確認。</p>
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
