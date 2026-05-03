import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンションの買い時はいつ？2025年の相場と判断基準を解説｜30Lab",
  description:
    "2025年のマンション購入タイミングを解説。価格は高止まりか下落か、金利上昇の影響、「今買うべき人・待つべき人」の判断基準を具体的に紹介します。",
  keywords: [
    "マンション 買い時 2025",
    "マンション 購入 タイミング",
    "マンション 価格 今後",
    "マンション 買うべき 待つべき",
    "不動産 買い時 2025",
  ],
  openGraph: {
    title: "マンションの買い時はいつ？2025年の相場と判断基準を解説",
    description: "2025年の不動産市況と「今買うべき人・待つべき人」の判断基準。",
  },
};

export default function MansionKaidoki2025Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">マンションの買い時</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">市況・購入タイミング</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          マンションの<span className="text-blue-600">買い時はいつ？</span><br />
          2025年の相場と判断基準を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          「今は高すぎる」「もっと下がるのを待つべき」——マンション購入を検討していると、必ずタイミングの話になります。しかし「完璧な買い時」は誰にもわかりません。この記事では2025年の市況を整理した上で、個人の状況に応じた判断基準を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏙️ 2025年のマンション市況：今どうなっているか
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                icon: "📈",
                title: "価格は高止まりが続いている",
                body: "東京23区の新築マンション平均価格は2023〜2024年にかけて9,000万円超に到達。資材費・人件費の上昇、インバウンド需要、高額所得層の購入が価格を押し上げており、急落のシグナルは現時点では見られない。",
                bg: "bg-red-50 border-red-200",
              },
              {
                icon: "📊",
                title: "金利は上昇トレンドに転換",
                body: "2024年の日銀利上げ以降、変動金利の基準となる短期金利は上昇傾向。今後2〜3年で0.5〜1%程度の追加上昇シナリオも想定される。金利上昇は購入可能額を実質的に圧縮する。",
                bg: "bg-orange-50 border-orange-200",
              },
              {
                icon: "🏘️",
                title: "郊外・中古は比較的割安",
                body: "23区内新築は高騰しているが、郊外（多摩・神奈川・埼玉）や中古市場では相対的に手が届きやすい価格帯が残っている。エリアを広げると選択肢は増える。",
                bg: "bg-green-50 border-green-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📉 「価格が下がるまで待つ」戦略のリスク
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            「もう少し待てば安くなるかも」と考える人は多いですが、待つことにもコストがあります。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "家賃を払い続けるコスト",
                body: "月15万円の家賃なら、1年待つだけで180万円の出費。3年待てば540万円。その間に物件価格が下がらなければ、待ち続けたほうが損になる。",
              },
              {
                title: "金利が上昇すると購入可能額が下がる",
                body: "価格が5%下がっても、金利が0.5%上がれば月返済額はほぼ変わらない。「価格と金利のトータル」で判断する必要がある。",
              },
              {
                title: "下落タイミングは誰にもわからない",
                body: "リーマンショック・コロナなど外部ショックによる急落は予測困難。予測に頼った戦略はギャンブルに近い。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-gray-800 mb-1">⚠️ {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 今買うべき人・待つべき人
          </h2>
          <div className="space-y-3">
            {[
              {
                label: "今買って良い人",
                icon: "✅",
                bg: "bg-green-50 border-green-200",
                items: [
                  "返済比率が25%以内に収まる（管理費込みでも）",
                  "頭金が物件価格の10%以上ある",
                  "居住予定期間が10年以上",
                  "賃貸家賃と比較して住居費が下がる",
                  "ライフイベント（結婚・子育て）で住まいが必要",
                ],
              },
              {
                label: "もう少し待つべき人",
                icon: "⏳",
                bg: "bg-yellow-50 border-yellow-200",
                items: [
                  "返済比率が30%を超えてしまう",
                  "頭金がほぼゼロ（諸費用も手元資金が不足）",
                  "転職・収入変化の可能性が高い時期",
                  "居住予定エリアが未確定",
                  "1〜2年以内に転勤の可能性がある",
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

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💡 「買い時」より「自分に合う価格帯」を先に決める
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            市況の読みより大切なのは、<strong>自分の年収・頭金・ライフプランから「適正購入価格」を先に決めること</strong>です。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-800 mb-2">判断の順番</p>
            <ol className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-black text-blue-600">1.</span>
                <span>返済比率25%以内の「安全な借入上限額」を計算する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-blue-600">2.</span>
                <span>頭金を加えた「購入可能価格帯」を確定する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-blue-600">3.</span>
                <span>その価格帯で条件に合う物件を探す（エリア・築年数を柔軟に）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-blue-600">4.</span>
                <span>条件が合う物件に出会えたら買う</span>
              </li>
            </ol>
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">自分の「適正購入価格」を今すぐ確認</p>
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
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">年収別マンション購入可能額の目安【早見表付き】</span>
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
