import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローン控除でいくら戻る？計算方法と上限を解説｜30Lab",
  description:
    "住宅ローン控除（減税）の計算方法と上限額を解説。年末残高×0.7%の控除額、新築（上限4,500万・13年）vs中古（上限2,000万・10年）の違い、年収別の実際の還付額早見表と確定申告の手続きもわかりやすくまとめました。",
  keywords: [
    "住宅ローン控除 いくら戻る",
    "住宅ローン減税 計算",
    "住宅ローン控除 上限",
    "住宅ローン控除 確定申告",
    "住宅ローン控除 新築 中古 違い",
  ],
  openGraph: {
    title: "住宅ローン控除でいくら戻る？計算方法と上限を解説",
    description: "年末残高×0.7%の控除額計算と新築・中古別の上限額、年収別還付額早見表を解説。",
  },
};

export default function JutakuLoanKoujyoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">住宅ローン控除</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">住宅ローン控除・節税</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローン控除で<span className="text-blue-600">いくら戻る</span>？<br />
          計算方法と上限を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          マンション購入後に受けられる「住宅ローン控除（住宅借入金等特別控除）」は、最大で年間数十万円の節税効果があります。この記事では計算方法・新築と中古の控除額の違い・年収別の実際の還付額早見表・確定申告の手続きまでわかりやすく解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🧮 住宅ローン控除の計算方法
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
            <p className="text-sm font-bold text-blue-800 mb-3">基本計算式</p>
            <p className="text-lg font-black text-blue-700 mb-2">年間控除額 = 年末残高 × 0.7%</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>・適用期間：新築13年間 / 中古10年間</li>
              <li>・控除方法：所得税から控除（足りない場合は住民税から一部控除）</li>
              <li>・所得要件：合計所得金額が2,000万円以下</li>
              <li>・床面積要件：50㎡以上（所得1,000万円以下なら40㎡以上）</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-gray-800 mb-2">計算例</p>
            <div className="text-sm text-gray-700 space-y-1">
              <p>借入残高4,000万円（年末）の場合：</p>
              <p>年間控除額 = 4,000万円 × 0.7% = <strong className="text-blue-700">28万円</strong></p>
              <p className="text-xs text-gray-500 mt-2">ただし所得税＋住民税の上限額を超えた分は控除不可。</p>
            </div>
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏗️ 新築と中古の控除の違い
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">項目</th>
                  <th className="text-center px-4 py-3 font-bold text-blue-700 border-b border-gray-200">新築マンション</th>
                  <th className="text-center px-4 py-3 font-bold text-green-700 border-b border-gray-200">中古マンション</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "控除期間", new_: "13年間", used: "10年間" },
                  { item: "借入限度額（一般住宅）", new_: "3,000万円", used: "2,000万円" },
                  { item: "借入限度額（ZEH水準等）", new_: "3,500〜4,500万円", used: "（適用なし）" },
                  { item: "年間最大控除額（一般住宅）", new_: "21万円", used: "14万円" },
                  { item: "13年間の最大総控除額", new_: "約273万円", used: "約140万円（10年）" },
                  { item: "耐震基準・築年数要件", new_: "なし", used: "昭和57年以降 or 耐震基準適合証明" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row.item}</td>
                    <td className="px-4 py-3 text-center text-blue-700 font-semibold text-xs">{row.new_}</td>
                    <td className="px-4 py-3 text-center text-green-700 font-semibold text-xs">{row.used}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※2024年入居分の税制。取得状況・年収・物件の性能区分によって控除限度額が変わります。最新情報は国税庁サイトをご確認ください。</p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💹 年収別・実際の還付額早見表
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            住宅ローン控除は「所得税＋住民税（一定額）」の合計を上限とするため、年収が低いほど控除の恩恵が限られます。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">所得税＋控除可能住民税</th>
                  <th className="text-right px-4 py-3 font-bold text-blue-700 border-b border-gray-200">実際の年間控除上限</th>
                  <th className="text-right px-4 py-3 font-bold text-green-700 border-b border-gray-200">10年間の総還付目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { income: "400万円", tax: "約15万円", limit: "約15万円", total: "約150万円" },
                  { income: "500万円", tax: "約20万円", limit: "約20万円", total: "約190万円" },
                  { income: "600万円", tax: "約28万円", limit: "約21万円（上限）", total: "約200万円" },
                  { income: "700万円", tax: "約38万円", limit: "約21万円（上限）", total: "約210万円" },
                  { income: "800万円", tax: "約50万円", limit: "約21万円（上限）", total: "約210万円" },
                  { income: "1,000万円", tax: "約75万円", limit: "約21万円（上限）", total: "約213万円（13年）" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.income}</td>
                    <td className="px-4 py-3 text-right text-gray-700 text-xs">{row.tax}</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-semibold">{row.limit}</td>
                    <td className="px-4 py-3 text-right text-green-700 font-semibold">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※一般住宅・借入限度3,000万円・年末残高が減少する場合は控除額も逓減。概算目安です。</p>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📝 確定申告の手続き（初年度と2年目以降）
          </h2>
          <div className="space-y-3">
            {[
              {
                year: "初年度：確定申告が必要",
                detail: "購入翌年の2〜3月に税務署へ確定申告書を提出します。必要書類：住民票・登記事項証明書・売買契約書・住宅ローン残高証明書・源泉徴収票など。",
                color: "border-orange-200 bg-orange-50",
                labelColor: "text-orange-700",
              },
              {
                year: "2年目以降：年末調整でOK（会社員の場合）",
                detail: "会社員は2年目以降、年末調整で住宅ローン控除が適用されます。金融機関から送られてくる「残高証明書」と「控除証明書」を会社に提出するだけ。",
                color: "border-green-200 bg-green-50",
                labelColor: "text-green-700",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.color}`}>
                <p className={`text-sm font-bold ${item.labelColor} mb-2`}>{item.year}</p>
                <p className="text-xs text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ⚠️ 住宅ローン控除の注意点
          </h2>
          <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
            <ul className="text-sm text-gray-700 space-y-3">
              {[
                "繰り上げ返済で年末残高が減ると控除額も減少する（控除期間中は注意）",
                "転勤・転貸などで居住実態がなくなると適用が外れる場合がある",
                "夫婦共有名義の場合、それぞれの持分・借入比率で控除額が変わる",
                "ペアローンなら2人それぞれが控除を受けられ、控除効果が最大化できる",
                "中古購入時は「耐震基準適合証明書」「既存住宅売買瑕疵保険」などが必要な場合も",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-yellow-600 font-black mt-0.5">⚠️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">住宅ローン控除込みの実質コストを計算</p>
          <p className="text-xs mb-4 opacity-90">年収・借入額・金利を入力して、返済比率と安全購入価格をすぐに確認できます。</p>
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
            <Link href="/articles/jutaku-loan-kuriage-hensai" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">⏩</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの繰り上げ返済はすべき？メリット・デメリットを解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-hendokinri-koteikinri" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">変動金利と固定金利どっちがいい？2025年の選び方</span>
            </Link>
            <Link href="/articles/tokyo-mansion-chuko-vs-shintiku" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🆚</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">都内マンション、中古と新築どっちがいい？価格差・選び方を解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
