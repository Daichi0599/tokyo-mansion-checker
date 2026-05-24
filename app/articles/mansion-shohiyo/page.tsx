import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンション購入の諸費用はいくら？内訳と相場を解説｜30Lab",
  description:
    "マンション購入時にかかる諸費用の内訳と相場を徹底解説。仲介手数料・登記費用・ローン手数料・火災保険など物件価格の5〜10%分の費用を事前に把握して、資金計画を立てましょう。",
  keywords: [
    "マンション 諸費用 内訳",
    "マンション 購入 諸費用 いくら",
    "マンション 購入 費用 相場",
    "新築 中古 諸費用 違い",
    "マンション 仲介手数料",
  ],
  openGraph: {
    title: "マンション購入の諸費用はいくら？内訳と相場を解説",
    description: "物件価格の5〜10%かかる諸費用の内訳と、新築・中古の違いを解説。",
  },
};

export default function MansionShohiyoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">マンション諸費用</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">諸費用・資金計画</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          マンション購入の<span className="text-blue-600">諸費用</span>はいくら？<br />
          内訳と相場を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          マンション購入では、物件価格だけでなく「諸費用」と呼ばれる追加コストが必ずかかります。目安は<strong>物件価格の5〜10%</strong>。3,000万円のマンションなら150〜300万円です。この記事では諸費用の内訳と相場、新築・中古の違い、資金計画で見落としがちなポイントをわかりやすく解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💴 諸費用の内訳と相場一覧
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            諸費用は大きく「取引コスト」「登記・税金」「ローン関連」「保険・その他」の4カテゴリに分かれます。
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">費用項目</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">相場目安</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700 border-b border-gray-200">新築</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700 border-b border-gray-200">中古</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "仲介手数料", amount: "物件価格×3%+6万円（税込×1.1）", new_: "なし", used: "あり" },
                  { item: "登録免許税（所有権移転）", amount: "固定資産税評価額×0.3〜2%", new_: "あり", used: "あり" },
                  { item: "司法書士報酬", amount: "5〜15万円", new_: "あり", used: "あり" },
                  { item: "住宅ローン事務手数料", amount: "定額型：3〜5万円／定率型：借入額×2.2%", new_: "あり", used: "あり" },
                  { item: "抵当権設定登記費用", amount: "借入額×0.1〜0.4%＋司法書士料", new_: "あり", used: "あり" },
                  { item: "火災保険料（5年分）", amount: "3〜10万円程度", new_: "あり", used: "あり" },
                  { item: "固定資産税清算金", amount: "日割り計算（数万〜十数万円）", new_: "なし", used: "あり" },
                  { item: "管理費・修繕積立金（前払い）", amount: "1〜3ヶ月分", new_: "あり", used: "あり" },
                  { item: "引っ越し費用・家具購入費", amount: "30〜100万円（別途）", new_: "あり", used: "あり" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{row.item}</td>
                    <td className="px-4 py-3 text-right text-gray-600 text-xs">{row.amount}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-semibold ${row.new_ === "あり" ? "text-green-700" : "text-gray-400"}`}>{row.new_}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-semibold ${row.used === "あり" ? "text-green-700" : "text-gray-400"}`}>{row.used}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※相場は概算。物件価格・金融機関・時期により変わります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏗️ 新築と中古で諸費用はどう違う？
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-sm font-black text-blue-800 mb-2">🏢 新築マンション</p>
              <p className="text-xs text-gray-700 mb-2">物件価格の<strong className="text-blue-700">約3〜5%</strong></p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>・仲介手数料なし（直接販売）</li>
                <li>・登録免許税が軽減（0.1〜0.15%）</li>
                <li>・住宅ローン控除13年適用</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="text-sm font-black text-green-800 mb-2">🏠 中古マンション</p>
              <p className="text-xs text-gray-700 mb-2">物件価格の<strong className="text-green-700">約6〜10%</strong></p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>・仲介手数料が発生（最大3%+6万円）</li>
                <li>・固定資産税清算金が必要</li>
                <li>・住宅ローン控除10年（上限低め）</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <p className="text-sm font-bold text-yellow-800 mb-2">📌 仲介手数料の計算例</p>
            <p className="text-xs text-gray-700 leading-relaxed">
              物件価格3,500万円の中古マンションを購入した場合：<br />
              仲介手数料上限 = （3,500万円 × 3% + 6万円）× 1.1 = <strong>約122万円</strong><br />
              これが中古購入時の最大の諸費用項目です。
            </p>
          </div>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏦 住宅ローン手数料の「定額型」と「定率型」
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            住宅ローンを借りる際にかかる手数料（事務手数料）には2種類あります。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                type: "定率型（借入額×2.2%）",
                merit: "金利が低い傾向。3,000万円なら手数料66万円",
                demerit: "諸費用が高い。借入額が大きいほど手数料増",
                color: "border-red-200 bg-red-50",
                labelColor: "text-red-700",
              },
              {
                type: "定額型（3〜5万円程度）",
                merit: "諸費用を抑えられる。借入額が多いほどお得感",
                demerit: "金利がやや高い傾向。長期的には利息が増える場合も",
                color: "border-green-200 bg-green-50",
                labelColor: "text-green-700",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.color}`}>
                <p className={`text-sm font-bold ${item.labelColor} mb-2`}>{item.type}</p>
                <p className="text-xs text-gray-700 mb-1"><span className="font-bold text-green-700">✅ メリット：</span>{item.merit}</p>
                <p className="text-xs text-gray-700"><span className="font-bold text-orange-600">⚠️ デメリット：</span>{item.demerit}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            定率型は「諸費用は高いが毎月の返済が少し安くなる」、定額型は「諸費用は安いが毎月の返済がやや高い」。借入期間・借入額で総コストを比較することが重要です。
          </p>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📊 物件価格別・諸費用の目安
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">物件価格</th>
                  <th className="text-right px-4 py-3 font-bold text-blue-700 border-b border-gray-200">新築（3〜5%）</th>
                  <th className="text-right px-4 py-3 font-bold text-green-700 border-b border-gray-200">中古（6〜10%）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { price: "2,500万円", new_low: "75万円", new_high: "125万円", used_low: "150万円", used_high: "250万円" },
                  { price: "3,000万円", new_low: "90万円", new_high: "150万円", used_low: "180万円", used_high: "300万円" },
                  { price: "4,000万円", new_low: "120万円", new_high: "200万円", used_low: "240万円", used_high: "400万円" },
                  { price: "5,000万円", new_low: "150万円", new_high: "250万円", used_low: "300万円", used_high: "500万円" },
                  { price: "7,000万円", new_low: "210万円", new_high: "350万円", used_low: "420万円", used_high: "700万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.price}</td>
                    <td className="px-4 py-3 text-right text-blue-700 text-xs">{row.new_low}〜{row.new_high}</td>
                    <td className="px-4 py-3 text-right text-green-700 text-xs">{row.used_low}〜{row.used_high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※概算目安。実際の諸費用は金融機関・物件・地域により変わります。</p>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💡 資金計画で見落としがちなポイント
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <ul className="text-sm text-gray-700 space-y-3">
              {[
                "諸費用は原則「現金」が必要（ローンに組み込めないケースが多い）",
                "引っ越し費用・家電・家具購入費は別途50〜100万円を見込む",
                "マンションの管理費・修繕積立金の前払い分も準備が必要",
                "リノベーション・クリーニング費用（中古の場合、数十万〜数百万）",
                "固定資産税の年払いが1〜4月の引き渡しの場合は初年度から発生",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-black mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 著者情報 */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">
              🏠
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-sm">たろう｜都内マンション研究中</p>
              <p className="text-xs text-gray-500 mt-0.5">大企業勤務・アラサー・東京都在住</p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                「年収はある程度あるが、都内マンションを本当に買っていいか判断できない」という自身の経験からこのサイトを制作。
                複数の不動産会社・銀行・FPへのヒアリングをもとにコンテンツを作成しています。
              </p>
              <div className="flex gap-3 mt-2">
                <a href="https://x.com/30lab_jp" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">𝕏 @30lab_jp</a>
                <a href="https://note.com/30lab" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">note</a>
              </div>
            </div>
          </div>
        </div>

        {/* 免責事項 */}
        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          ※本記事は情報提供を目的としており、特定の金融商品・不動産物件の購入を推奨するものではありません。
          記載内容は執筆時点の情報に基づいており、金利・税制・市況は変動します。
          具体的な購入判断は、銀行・FP・不動産会社などの専門家にご相談ください。
        </p>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">諸費用込みの総予算で診断しよう</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・物件価格を入力して、諸費用を含めた資金計画が安全かチェックできます。</p>
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
            <Link href="/articles/tokyo-mansion-atama-kin" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🏙️</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">東京でマンション購入に必要な頭金はいくら？</span>
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
