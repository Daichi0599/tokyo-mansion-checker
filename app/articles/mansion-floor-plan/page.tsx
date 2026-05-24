import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンションの間取り選び方｜1LDK・2LDK・3LDKの違いと資産価値を解説｜30Lab",
  description:
    "マンションの間取りはライフステージに合わせた選択が重要です。1LDK・2LDK・3LDKの価格差と使い勝手を比較し、資産価値が高い間取りの条件（南向き・角部屋・田の字型）も解説。一人暮らし・夫婦・ファミリーそれぞれの目安も紹介。",
  keywords: [
    "マンション 間取り 選び方",
    "1LDK 2LDK どっち",
    "マンション 間取り 資産価値",
    "マンション 間取り ライフスタイル",
    "マンション 角部屋 田の字",
  ],
  openGraph: {
    title: "マンションの間取り選び方｜1LDK・2LDK・3LDKの違いと資産価値を解説",
    description: "ライフステージ別おすすめ間取り・価格差比較・資産価値が高い条件（南向き・角部屋・田の字）を解説。",
  },
};

export default function MansionFloorPlanPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">マンションの間取り選び方</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">間取り・物件選び</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          マンションの<span className="text-blue-600">間取り選び方</span>｜<br />
          1LDK・2LDK・3LDKの違いと資産価値を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          マンション購入を検討するとき、間取り選びは住み心地だけでなく資産価値にも直結します。「今の生活に合った広さ」を選ぶことも重要ですが、将来の売却・賃貸を考えると需要の高い間取りを選ぶことも大切です。この記事ではライフステージ別のおすすめ間取りと、資産価値が高い間取りの条件を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            👤 ライフステージ別おすすめ間取り
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-3 py-3 font-bold text-gray-700 border-b border-gray-200">ライフステージ</th>
                  <th className="text-center px-3 py-3 font-bold text-blue-700 border-b border-gray-200">おすすめ間取り</th>
                  <th className="text-left px-3 py-3 font-bold text-gray-700 border-b border-gray-200">理由・ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: "独身・単身", madori: "1LDK〜1SLDK", reason: "40〜55m²が目安。テレワーク需要で書斎スペースある物件が人気" },
                  { stage: "DINKS（共働き・子なし）", madori: "1LDK〜2LDK", reason: "50〜65m²。将来子供ができたときに備えて2LDKが選ばれやすい" },
                  { stage: "子ども1人家族", madori: "2LDK〜3LDK", reason: "60〜75m²。子ども部屋が独立できる3LDKが理想だが価格と相談" },
                  { stage: "子ども2人以上", madori: "3LDK〜4LDK", reason: "75m²以上。子ども部屋2つ確保できる3LDKが基本" },
                  { stage: "老後・夫婦2人", madori: "2LDK", reason: "55〜65m²。バリアフリー・管理コストを抑えたコンパクトな間取りが人気" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-3 py-2 font-semibold text-gray-700">{row.stage}</td>
                    <td className="px-3 py-2 text-center font-bold text-blue-700">{row.madori}</td>
                    <td className="px-3 py-2 text-gray-600">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📐 1LDK〜4LDKの広さ目安・賃料相場（東京23区）
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">間取り</th>
                  <th className="text-center px-4 py-3 font-bold text-blue-700 border-b border-gray-200">広さ目安</th>
                  <th className="text-center px-4 py-3 font-bold text-green-700 border-b border-gray-200">賃料相場/月</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-700 border-b border-gray-200">主な需要層</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { madori: "1K・1DK", hirosa: "20〜30m²", chinryo: "8〜12万円", juyo: "単身・学生" },
                  { madori: "1LDK", hirosa: "35〜50m²", chinryo: "12〜20万円", juyo: "単身〜DINKS" },
                  { madori: "2LDK", hirosa: "50〜70m²", chinryo: "18〜30万円", juyo: "DINKS〜小家族" },
                  { madori: "3LDK", hirosa: "65〜90m²", chinryo: "25〜45万円", juyo: "ファミリー" },
                  { madori: "4LDK以上", hirosa: "85m²以上", chinryo: "40万円〜", juyo: "大家族・富裕層" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-700">{row.madori}</td>
                    <td className="px-4 py-3 text-center text-xs text-blue-700">{row.hirosa}</td>
                    <td className="px-4 py-3 text-center text-xs font-bold text-green-700">{row.chinryo}</td>
                    <td className="px-4 py-3 text-center text-xs text-orange-700">{row.juyo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※2025年時点の東京23区の参考相場。エリア・グレード・築年数により大きく異なります。</p>
        </section>

        {/* ━━ モゲチェックCTA ━━ */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 希望の間取りに必要な資金計画を確認</p>
          <p className="text-sm font-black text-white mb-2">「モゲチェック」で最適なローンを無料診断</p>
          <p className="text-xs text-slate-400 mb-3">年収・希望借入額を入力するだけで、月々の返済負担が安全な範囲に収まるローンプランを提案。複数行の金利を一括比較できます。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            モゲチェックで無料診断する →
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "block" }} />
        </div>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💎 資産価値が高い間取りの条件
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            同じ広さ・同じ価格なら、以下の条件を満たす間取りが資産価値を維持しやすい傾向があります。
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "☀️",
                title: "南向き・南東向きの主要居室",
                body: "日当たりは資産価値に直結します。リビング・ダイニングが南向きの物件は、同じ条件の北向き物件と比べて5〜10%高く取引されることも。光熱費節約にもなり、長期的な支出が減ります。",
                bg: "bg-yellow-50 border-yellow-200",
              },
              {
                icon: "🏙️",
                title: "角部屋（コーナー住戸）",
                body: "2面以上が外気に接する角部屋は採光・通風に優れています。隣接する部屋数が少なく騒音リスクも低め。需要が高く、同フロアの中間住戸より価格が高い傾向があり、売却時も人気です。",
                bg: "bg-green-50 border-green-200",
              },
              {
                icon: "⬛",
                title: "田の字型プラン（整形間取り）",
                body: "田の字型（各部屋が独立・正方形に近い形状）は使いやすく、家具の配置もしやすい。L字型や変形の間取りは使い勝手が悪く、買い手に敬遠されやすい傾向があります。",
                bg: "bg-blue-50 border-blue-200",
              },
              {
                icon: "🚉",
                title: "駅近×利便性の高い路線",
                body: "間取りと同等以上に「駅距離」が資産価値を決めます。徒歩5分以内と15分では売却時に大きな差が生まれます。特に東京23区内の複数路線が使える駅近物件は需要が安定しています。",
                bg: "bg-purple-50 border-purple-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🔄 リセール時の需要を考えた間取り選び
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            「10年後に売るかもしれない」と考えると、間取り選びの視点が変わります。自分に必要な広さより少し汎用性が高い間取りを選ぶのが資産形成の観点では有利です。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-4">
            <p className="text-sm font-bold text-blue-800 mb-3">リセールに強い間取りの優先順位</p>
            <ol className="space-y-2">
              {[
                "需要が広い間取り（1LDK・2LDK）を優先する。4LDKは需要層が限られる",
                "収納が多い間取りは加点要素。ウォークインクローゼット・パントリーなど",
                "LDKが広い（18〜20畳以上）と写真映えし、内覧時の印象が良い",
                "ルーフバルコニー・専用庭付きは希少性が高く、差別化になる",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-black text-blue-600 text-sm">{i + 1}.</span>
                  <span className="text-xs text-gray-700">{point}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <p className="text-xs font-bold text-yellow-800 mb-1">⚠️ 「自分に合った間取り」と「売りやすい間取り」のバランス</p>
            <p className="text-xs text-gray-600">すべての条件を満たす物件は予算オーバーになりがちです。まずは自分のライフスタイルに合った広さ・部屋数を最優先にし、その中で南向き・駅近・整形などの付加条件を検討しましょう。</p>
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
          <p className="text-base font-black mb-1">希望の間取りを実現できる予算を確認しよう</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・希望金利を入力するだけで、安全な購入予算がわかります。</p>
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
            <Link href="/articles/mansion-baibai-shisan-kachi" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📉</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">資産価値が落ちにくいマンションの条件とは？立地・築年数で解説</span>
            </Link>
            <Link href="/articles/mansion-uriage-timing" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🏷️</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションの売り時はいつ？築年数・市況から見る最適タイミング</span>
            </Link>
            <Link href="/articles/mansion-kaidoki-2025" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📅</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションの買い時はいつ？2025年の相場と判断基準を解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
