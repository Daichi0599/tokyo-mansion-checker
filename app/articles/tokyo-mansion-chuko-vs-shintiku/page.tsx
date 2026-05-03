import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "都内マンション、中古と新築どっちがいい？価格差・メリット・選び方を解説｜30Lab",
  description:
    "東京で中古マンションと新築マンションを比較。価格差・住宅ローン控除の違い・リノベーションコスト・資産価値の観点から、どちらを選ぶべきか判断基準を解説します。",
  keywords: [
    "マンション 中古 新築 どっち",
    "都内マンション 中古 メリット",
    "新築マンション 中古マンション 比較",
    "中古マンション リノベーション",
    "東京 マンション 購入 中古 新築",
  ],
  openGraph: {
    title: "都内マンション、中古と新築どっちがいい？価格差・選び方を解説",
    description: "価格差・税制・資産価値の観点から中古vs新築を徹底比較。",
  },
};

export default function TokyoMansionChukoVsShintikuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">中古vs新築</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">中古・新築比較</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          都内マンション、<span className="text-blue-600">中古と新築どっちがいい？</span><br />
          価格差・メリット・選び方を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          東京23区では新築マンションの平均価格が1億円に迫る水準になっており、「中古でいいのでは？」と考える人が増えています。一方で「新築のほうが安心」という声も根強い。この記事では価格・税制・維持費・資産価値の観点から中古と新築を比較し、どちらを選ぶべきかの判断基準を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💴 価格差：中古は新築の何割安いか
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">エリア・タイプ</th>
                  <th className="text-right px-4 py-3 font-bold text-blue-700 border-b border-gray-200">新築相場</th>
                  <th className="text-right px-4 py-3 font-bold text-green-700 border-b border-gray-200">中古相場<br /><span className="text-xs font-normal">（築10〜15年）</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { area: "東京23区（都心部）", shintiku: "1.5〜3億円以上", chuko: "6,000万〜1.2億円" },
                  { area: "東京23区（周辺部）", shintiku: "8,000万〜1.2億円", chuko: "4,000万〜7,000万円" },
                  { area: "東京郊外（多摩・23区外）", shintiku: "5,000万〜7,000万円", chuko: "2,500万〜4,500万円" },
                  { area: "神奈川・埼玉（主要駅周辺）", shintiku: "4,000万〜6,000万円", chuko: "2,000万〜4,000万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-700">{row.area}</td>
                    <td className="px-4 py-3 text-right text-xs text-blue-700">{row.shintiku}</td>
                    <td className="px-4 py-3 text-right text-xs text-green-700 font-bold">{row.chuko}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            同エリアで比較すると、中古は新築の<strong>40〜60%程度の価格</strong>で購入できるケースが多い。予算が限られる場合、中古＋リノベーションは有力な選択肢です。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ⚖️ 中古と新築のメリット・デメリット比較
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "🏗️ 新築マンション",
                merits: [
                  "設備・内装が最新で修繕リスクが低い",
                  "住宅ローン控除の控除期間が最大13年（中古は10年）",
                  "瑕疵担保責任が10年間ある",
                  "間取りやオプションを選べる場合がある",
                ],
                demerits: [
                  "価格が高い（同エリア中古の1.5〜2倍以上）",
                  "入居まで時間がかかる（竣工前購入の場合）",
                  "「新築プレミアム」で引渡し後すぐに価値が下がる",
                  "管理組合・修繕計画の実績がない",
                ],
                bg: "bg-blue-50 border-blue-200",
              },
              {
                label: "🏠 中古マンション",
                merits: [
                  "同エリアで新築より大幅に安い",
                  "管理状態・修繕履歴を確認できる",
                  "立地の良い物件が多い（古い街の中心部に建っている）",
                  "リノベーションで内装を好みに変えられる",
                ],
                demerits: [
                  "設備が古く、リフォーム・交換費用がかかる場合も",
                  "住宅ローン控除の控除期間が10年（新築は13年）",
                  "耐震基準の確認が必要（1981年以前の旧耐震基準に注意）",
                  "仲介手数料が発生する（物件価格の最大3%+6万円）",
                ],
                bg: "bg-green-50 border-green-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-3">{item.label}</p>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-xs font-bold text-green-700 mb-1">✅ メリット</p>
                    <ul className="space-y-1">
                      {item.merits.map((m, j) => (
                        <li key={j} className="text-xs text-gray-700 flex items-start gap-1">
                          <span className="text-gray-400 mt-0.5">・</span><span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-600 mb-1">❌ デメリット</p>
                    <ul className="space-y-1">
                      {item.demerits.map((d, j) => (
                        <li key={j} className="text-xs text-gray-700 flex items-start gap-1">
                          <span className="text-gray-400 mt-0.5">・</span><span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🔑 中古を選ぶなら「1981年以降・築15年以内」が目安
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            中古マンションを選ぶ際に特に注意すべきポイントです。
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-800 mb-2">⚠️ 築年数の目安</p>
            <ul className="text-sm text-orange-700 space-y-2">
              <li>・<strong>1981年以前</strong>：旧耐震基準。住宅ローン控除が使えない場合も。</li>
              <li>・<strong>1981〜2000年頃</strong>：新耐震基準だが、設備が古く大規模修繕済みかの確認が必要。</li>
              <li>・<strong>築15年以内</strong>：設備も比較的新しく、修繕積立金の実績も確認しやすい。おすすめ。</li>
            </ul>
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ どちらを選ぶべきか？タイプ別診断
          </h2>
          <div className="space-y-3">
            {[
              {
                label: "新築が向いている人",
                icon: "🏗️",
                bg: "bg-blue-50 border-blue-200",
                items: [
                  "予算に余裕があり、最新設備・保証を重視する",
                  "入居後の修繕コストをできるだけ抑えたい",
                  "住宅ローン控除を最大限活用したい（13年分）",
                  "間取りや仕様をこだわって選びたい",
                ],
              },
              {
                label: "中古が向いている人",
                icon: "🏠",
                bg: "bg-green-50 border-green-200",
                items: [
                  "同エリア・同面積でできるだけ安く買いたい",
                  "リノベーションで自分好みにカスタマイズしたい",
                  "立地を最優先で、価格を抑えたい",
                  "管理状態・修繕履歴を確認してから買いたい",
                ],
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-2">{item.icon} {item.label}</p>
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

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">中古・新築どちらでも使える購入診断</p>
          <p className="text-xs mb-4 opacity-90">年収・物件価格・頭金を入力して、返済比率と安全購入ラインをすぐに確認。</p>
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
            <Link href="/articles/mansion-kaidoki-2025" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📅</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションの買い時はいつ？2025年の相場と判断基準を解説</span>
            </Link>
            <Link href="/articles/tokyo-mansion-atama-kin" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🏙️</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">東京でマンション購入に必要な頭金はいくら？</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
