import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "資産価値が落ちにくいマンションの条件とは？立地・築年数で解説｜30Lab",
  description:
    "リセールバリューが高いマンションの条件（駅徒歩5分以内・大規模・都心エリア）と築年数による価格推移を解説。売ることも視野に入れたマンション選びのポイントをまとめました。",
  keywords: [
    "マンション 資産価値 落ちにくい",
    "マンション リセールバリュー",
    "マンション 築年数 価格 推移",
    "資産価値 高い マンション 条件",
    "マンション 売却 資産価値",
  ],
  openGraph: {
    title: "資産価値が落ちにくいマンションの条件とは？立地・築年数で解説",
    description: "リセールバリューが高いマンションの条件と築年数別価格推移を解説。",
  },
};

export default function MansionBaibaiShisanKachiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">資産価値・売却</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">資産価値・売却</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          <span className="text-blue-600">資産価値が落ちにくい</span>マンションの条件とは？<br />
          立地・築年数で解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          マンションは「住む場所」であると同時に「資産」でもあります。将来売却したとき、または賃貸に出したとき、リセールバリューが高いかどうかは購入判断の重要なポイントです。この記事では資産価値が保たれるマンションの条件と、築年数ごとの価格推移の目安を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏆 資産価値が落ちにくいマンションの条件
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                rank: "1",
                title: "駅徒歩5分以内",
                detail: "最も重要な条件。駅距離1分の差が価格に数百万円影響することも。徒歩10分を超えると資産価値の下落が顕著になりやすい。",
                color: "text-red-600",
              },
              {
                rank: "2",
                title: "都心・主要駅へのアクセス",
                detail: "東京23区内・特に山手線沿線・主要ターミナル駅近くは需要が持続しやすい。新宿・渋谷・品川・東京などへのアクセスが10〜20分圏内かが目安。",
                color: "text-orange-600",
              },
              {
                rank: "3",
                title: "100戸以上の大規模マンション",
                detail: "大規模マンションは管理組合が機能しやすく、修繕積立金も安定しやすい。知名度・ブランド力が高く、成約しやすい傾向がある。",
                color: "text-yellow-600",
              },
              {
                rank: "4",
                title: "有名デベロッパーのブランドマンション",
                detail: "三井・住友・野村・東急など大手デベロッパーのブランドは流通量が多く、買い手がつきやすい。同エリアでも5〜10%程度の価格差が生まれることも。",
                color: "text-green-600",
              },
              {
                rank: "5",
                title: "管理状態が良好",
                detail: "修繕積立金の積立額が適正・大規模修繕が実施済み・管理組合が機能している物件は、資産価値が保たれやすい。購入前に管理費の滞納率・長期修繕計画を確認すること。",
                color: "text-blue-600",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-start gap-3">
                  <span className={`text-lg font-black ${item.color} min-w-6`}>#{item.rank}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📉 築年数ごとの価格推移（都内マンションの目安）
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            都内マンションの価格推移は、エリアや立地によって大きく異なりますが、一般的な傾向として以下の通りです。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">築年数</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">新築比（一般エリア）</th>
                  <th className="text-right px-4 py-3 font-bold text-blue-700 border-b border-gray-200">新築比（駅近・都心）</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { years: "新築", general: "100%", prime: "100%", note: "分譲価格が最も高い" },
                  { years: "築3〜5年", general: "80〜90%", prime: "90〜100%", note: "「新築プレミアム」が剥がれる" },
                  { years: "築10年", general: "65〜80%", prime: "80〜95%", note: "立地の優劣が価格差に反映" },
                  { years: "築15〜20年", general: "55〜70%", prime: "70〜90%", note: "大規模修繕の有無が影響" },
                  { years: "築25年以上", general: "40〜60%", prime: "60〜80%", note: "耐震基準・管理状態が重要" },
                  { years: "築30〜35年", general: "30〜50%", prime: "50〜75%", note: "建て替え検討期間に入る場合も" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.years}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.general}</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-semibold">{row.prime}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※概算の傾向。2020〜2025年の価格上昇期は従来比より価格が維持されているケースが多い。エリア・物件により大きく異なります。</p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ⚠️ 資産価値が下がりやすいマンションの特徴
          </h2>
          <div className="space-y-3">
            {[
              { point: "駅徒歩15分超・バス便エリア", detail: "車社会以外の地域では駅距離が直接的に資産価値に影響。駅遠物件は買い手が限られ、価格下落リスクが高い。" },
              { point: "管理組合が機能していない・修繕積立金が不足", detail: "大規模修繕ができないと建物が劣化し、資産価値が急落することも。購入前に長期修繕計画と積立状況を確認必須。" },
              { point: "小規模マンション（10〜30戸）", detail: "管理費・修繕積立金が高くなりがち。1戸あたりのコスト負担が大きく、将来的に修繕困難になるリスクも。" },
              { point: "再開発・建て替えが難しいエリア", detail: "容積率が既に使い切られているエリアや、旧耐震基準（1981年以前）の物件は建て替えが困難で将来の価値に不確実性。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-red-700 mb-1">❌ {item.point}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💡 リセールバリューを意識した選び方のポイント
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <ul className="text-sm text-gray-700 space-y-3">
              {[
                "「売る・貸す」可能性を念頭に置き、需要のある立地を優先する",
                "SUUMOやレインズで周辺の売却事例・成約事例を確認する",
                "新築プレミアム分（約10〜20%）は資産として期待しないほうが現実的",
                "管理組合の議事録・長期修繕計画書を購入前に必ず確認する",
                "将来の金利環境・人口動向を踏まえ、価格が高騰しすぎていないかチェック",
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
          <p className="text-base font-black mb-1">購入価格が適正かどうかを診断しよう</p>
          <p className="text-xs mb-4 opacity-90">年収・物件価格・頭金を入力して、無理のない購入価格かをすぐに確認できます。</p>
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
            <Link href="/articles/tokyo-mansion-chuko-vs-shintiku" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🆚</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">都内マンション、中古と新築どっちがいい？価格差・選び方を解説</span>
            </Link>
            <Link href="/articles/mansion-kaidoki-2025" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📅</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションの買い時はいつ？2025年の相場と判断基準を解説</span>
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
