import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンの繰り上げ返済はすべき？メリット・デメリットを解説｜30Lab",
  description:
    "住宅ローンの繰り上げ返済（期間短縮型・返済額軽減型）のメリット・デメリットと利息削減効果をシミュレーション。住宅ローン控除との兼ね合いや投資と比較した場合の判断基準も解説。",
  keywords: [
    "住宅ローン 繰り上げ返済 メリット",
    "繰り上げ返済 期間短縮 返済額軽減 違い",
    "住宅ローン 繰り上げ返済 いつ",
    "繰り上げ返済 住宅ローン控除",
    "繰り上げ返済 シミュレーション",
  ],
  openGraph: {
    title: "住宅ローンの繰り上げ返済はすべき？メリット・デメリットを解説",
    description: "期間短縮型・返済額軽減型の違いと利息削減シミュレーション、住宅ローン控除との兼ね合いを解説。",
  },
};

export default function JutakuLoanKuriageHensaiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">繰り上げ返済</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">繰り上げ返済</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローンの<span className="text-blue-600">繰り上げ返済</span>はすべき？<br />
          メリット・デメリットを解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          ある程度貯蓄ができてきたとき「住宅ローンを繰り上げ返済すべきか、投資に回すべきか」で悩む方は多いです。この記事では繰り上げ返済の2つのタイプ（期間短縮型・返済額軽減型）の違い、実際の利息削減効果のシミュレーション、そして住宅ローン控除・投資との比較を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📋 繰り上げ返済の2つのタイプ
          </h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            {[
              {
                type: "期間短縮型",
                emoji: "⏩",
                desc: "毎月の返済額は変えずに、返済期間を短くする方法。",
                merit: "利息削減効果が大きい。完済が早くなり精神的な安心感も。",
                demerit: "毎月の返済負担は変わらない。急な収入減時の家計的な余裕が増えにくい。",
                color: "border-blue-200 bg-blue-50",
              },
              {
                type: "返済額軽減型",
                emoji: "📉",
                desc: "返済期間はそのままに、毎月の返済額を減らす方法。",
                merit: "毎月のキャッシュフローが改善される。収入変動リスクへの備えになる。",
                demerit: "期間短縮型に比べて利息削減効果が小さい。",
                color: "border-green-200 bg-green-50",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.color}`}>
                <p className="text-sm font-black text-gray-900 mb-2">{item.emoji} {item.type}</p>
                <p className="text-xs text-gray-700 mb-2">{item.desc}</p>
                <p className="text-xs mb-1"><span className="font-bold text-green-700">✅ メリット：</span><span className="text-gray-700">{item.merit}</span></p>
                <p className="text-xs"><span className="font-bold text-orange-600">⚠️ デメリット：</span><span className="text-gray-700">{item.demerit}</span></p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>利息削減効果が高いのは期間短縮型</strong>。ただし毎月の余裕を増やしたい場合は返済額軽減型が有効です。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🧮 100万円繰り上げ返済したときの利息削減シミュレーション
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            借入残高3,000万円・金利1.0%・残25年の時点で100万円を繰り上げ返済した場合のシミュレーションです。
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">繰り上げ方法</th>
                  <th className="text-right px-4 py-3 font-bold text-blue-700 border-b border-gray-200">利息削減額</th>
                  <th className="text-right px-4 py-3 font-bold text-green-700 border-b border-gray-200">期間短縮</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "期間短縮型（100万円）", save: "約22万円", period: "約14ヶ月短縮" },
                  { method: "返済額軽減型（100万円）", save: "約13万円", period: "短縮なし（月返済約3,300円減）" },
                  { method: "期間短縮型（300万円）", save: "約67万円", period: "約42ヶ月短縮" },
                  { method: "期間短縮型（500万円）", save: "約113万円", period: "約72ヶ月（6年）短縮" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-gray-800">{row.method}</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-bold">{row.save}</td>
                    <td className="px-4 py-3 text-right text-green-700 text-xs">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※金利1.0%・残25年・残高3,000万円で試算。実際の効果は借入条件により異なります。</p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏠 住宅ローン控除との兼ね合い
          </h2>
          <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200 mb-4">
            <p className="text-sm font-bold text-yellow-800 mb-3">⚠️ 繰り上げ返済で「控除メリット」が減る場合がある</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              住宅ローン控除は<strong>年末残高の0.7%</strong>が10〜13年間、所得税・住民税から還付されます。繰り上げ返済で残高を減らすと、控除額も減少します。
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "控除期間中（取得後13年以内）は慎重に",
                body: "住宅ローン控除が適用されている期間中は、利息削減効果よりも控除額減少のほうが大きくなるケースがあります。特に金利が低い場合（1%以下）は控除期間終了後に繰り上げるほうが有利なことも。",
              },
              {
                title: "控除期間終了後（14年目以降）は繰り上げが有効",
                body: "控除が終わった後は「利息を払うだけ損」の状態になります。このタイミングで積極的に繰り上げ返済するのが最もコスパが高い戦略です。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-gray-800 mb-1">📌 {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📈 繰り上げ返済 vs 投資、どちらが有利？
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            繰り上げ返済は「確定した利息削減」であり、投資は「不確定なリターン」です。判断基準は<strong>住宅ローンの金利水準</strong>です。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">住宅ローン金利</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">推奨する行動</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">理由</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rate: "0.5%未満", action: "投資を優先", reason: "インデックス投資の期待リターン（年3〜5%）が金利コストを大幅に上回る" },
                  { rate: "0.5〜1.5%", action: "バランスよく両立", reason: "投資リターンとの差が小さい。緊急予備費確保後に余裕分で繰り上げ" },
                  { rate: "1.5〜2.5%", action: "繰り上げ返済を優先", reason: "確実な利息削減のほうがリスク調整後のリターンとして優位" },
                  { rate: "2.5%以上", action: "積極的に繰り上げ", reason: "高金利の借金は早期返済が合理的。リスクなしで高リターンと同等" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.rate}</td>
                    <td className="px-4 py-3 text-blue-700 font-semibold text-xs">{row.action}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※あくまで考え方の目安。個人の状況・リスク許容度・控除期間の有無により最適解は変わります。</p>
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
          <p className="text-base font-black mb-1">現在の返済状況を診断してみよう</p>
          <p className="text-xs mb-4 opacity-90">年収・物件価格・頭金・金利を入力して、返済比率と安全ラインを確認できます。</p>
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
            <Link href="/articles/jutaku-loan-koujyo" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💹</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローン控除でいくら戻る？計算方法と上限を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-hendokinri-koteikinri" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">変動金利と固定金利どっちがいい？2025年の選び方</span>
            </Link>
            <Link href="/articles/juutaku-loan-burden-rate" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📊</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの返済比率は何%が安全？年収別の目安を解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
