import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローン審査の年収基準は？通るための条件と落ちる理由を解説｜30Lab",
  description:
    "住宅ローン審査に通るための年収・勤続年数・返済比率の基準を解説。審査に落ちる原因と対策、年収別の借入可能額の目安もわかりやすくまとめました。",
  keywords: [
    "住宅ローン 審査 年収 基準",
    "住宅ローン 審査 通らない 理由",
    "住宅ローン 審査 条件",
    "住宅ローン 年収 いくら必要",
    "住宅ローン 審査 落ちる",
  ],
  openGraph: {
    title: "住宅ローン審査の年収基準は？通るための条件と落ちる理由を解説",
    description: "審査基準・借入可能額の目安・落ちる原因と対策を解説。",
  },
};

export default function JutakuLoanShinsaNenshuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">住宅ローン審査の基準</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">住宅ローン審査</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローン審査の<span className="text-blue-600">年収基準</span>は？<br />
          通るための条件と落ちる理由を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          「自分の年収で住宅ローンは通るのか？」多くの人が最初に抱く疑問です。審査基準は金融機関によって異なりますが、共通して重視される項目があります。この記事では年収別の借入可能額の目安と、審査に落ちる主な原因・対策を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📋 審査で見られる主な項目
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                item: "返済比率（年収に対する年間返済額の割合）",
                detail: "多くの金融機関で35〜40%以内が基準。フラット35は年収400万未満は30%以内、400万以上は35%以内。",
                weight: "◎ 最重要",
                weightColor: "text-red-600",
              },
              {
                item: "勤続年数",
                detail: "一般的に「同じ勤め先で2年以上」が目安。ただし転職直後でも職種・収入が上がっている場合は通るケースも。",
                weight: "○ 重要",
                weightColor: "text-orange-600",
              },
              {
                item: "雇用形態",
                detail: "正社員が最も有利。契約社員・派遣社員は審査が厳しくなる場合も。自営業は3年分の確定申告が必要。",
                weight: "○ 重要",
                weightColor: "text-orange-600",
              },
              {
                item: "信用情報（過去の返済履歴）",
                detail: "クレジットカードの滞納・カードローンの残債・他のローンの返済状況。過去の延滞は審査に大きく影響する。",
                weight: "◎ 最重要",
                weightColor: "text-red-600",
              },
              {
                item: "健康状態（団信加入要件）",
                detail: "団体信用生命保険（団信）への加入が原則必要。持病があると加入できず審査落ちになるケースも。",
                weight: "△ 注意",
                weightColor: "text-blue-600",
              },
            ].map((row, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-bold text-gray-800">{row.item}</p>
                  <span className={`text-xs font-bold ${row.weightColor} whitespace-nowrap`}>{row.weight}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{row.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📊 年収別「審査を通りやすい借入上限額」の目安
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            返済比率35%（審査基準の上限）と25%（安全ライン）での借入可能額の目安です（金利1%・35年返済）。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-green-700 border-b border-gray-200">安全ライン<br /><span className="text-xs font-normal">（25%）</span></th>
                  <th className="text-right px-4 py-3 font-bold text-red-600 border-b border-gray-200">審査上限目安<br /><span className="text-xs font-normal">（35%）</span></th>
                </tr>
              </thead>
              <tbody>
                {[400, 500, 600, 700, 800, 1000, 1200].map((n, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{n}万円</td>
                    <td className="px-4 py-3 text-right text-green-700 font-semibold">{(n * 5.5).toFixed(0)}万円</td>
                    <td className="px-4 py-3 text-right text-red-600 font-semibold">{(n * 7.7).toFixed(0)}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※あくまで目安。実際の審査は金融機関・金利・信用情報等により大きく異なります。</p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ❌ 審査に落ちる主な原因と対策
          </h2>
          <div className="space-y-3">
            {[
              {
                cause: "返済比率が高すぎる",
                solution: "借入額を減らす・頭金を増やす・長期返済にする・物件価格を下げる",
              },
              {
                cause: "クレジットカードの滞納・延滞履歴がある",
                solution: "審査前に信用情報機関（CIC・JICC）で自分の信用情報を確認。延滞から5年経過すると記録が消えるケースが多い。",
              },
              {
                cause: "カードローン・消費者金融の残債がある",
                solution: "審査前に完済しておく。残債があると「他の返済負担」として年間返済額に加算され、借入可能額が減る。",
              },
              {
                cause: "勤続年数が短い（転職直後）",
                solution: "1〜2年待つか、転職直後でも対応している金融機関を探す。職種・収入アップ転職は評価されやすい。",
              },
              {
                cause: "自営業・フリーランスで収入が不安定",
                solution: "直近3年の確定申告で安定した所得を証明。節税のしすぎで申告所得が低いと審査不利になることも。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-red-700 mb-1">❌ {item.cause}</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  <span className="font-bold text-green-700">✅ 対策：</span>{item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💡 審査前にやっておくべきこと
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <ul className="text-sm text-gray-700 space-y-3">
              {[
                "カードローン・消費者金融は全額返済・解約する",
                "クレジットカードの支払いを滞納なく管理する",
                "自分の信用情報をCIC（https://www.cic.co.jp）で確認する",
                "必要以上のクレジットカードを解約する（審査時のリスク軽減）",
                "給与振込口座を申請金融機関に統一しておく",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-black mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">自分の年収で借りられる上限額を確認</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・物件価格を入力して、返済比率と安全な借入額をすぐに計算。</p>
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
