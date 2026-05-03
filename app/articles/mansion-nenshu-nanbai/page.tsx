import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンションは年収の何倍まで買える？「5〜7倍」の根拠と東京の現実を解説｜30Lab",
  description:
    "「マンションは年収の5〜7倍が目安」の根拠と、東京での現実を解説。年収倍率だけで判断してはいけない理由と、正しい購入価格の判断方法を紹介。",
  keywords: [
    "マンション 年収 何倍",
    "住宅ローン 年収 何倍 適正",
    "マンション 価格 年収 倍率",
    "都内マンション 年収 何倍",
    "住宅ローン 適正 年収",
  ],
  openGraph: {
    title: "マンションは年収の何倍まで買える？「5〜7倍」の根拠と東京の現実",
    description: "年収倍率の目安とその限界、正しい判断軸を解説。",
  },
};

export default function MansionNenshuNanbaiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">年収の何倍まで買える</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">年収倍率・適正価格</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          マンションは年収の<span className="text-blue-600">何倍まで買える</span>？<br />
          「5〜7倍」の根拠と東京の現実を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          マンション購入を検討すると「年収の5〜7倍が目安」という話をよく聞きます。しかし、この数字の根拠は何なのか、東京ではこの基準は現実的なのか——本記事で詳しく解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📐 「年収の5〜7倍」の根拠
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            この倍率は、住宅ローンの返済比率（年収に占める年間返済額の割合）を25〜35%に設定したときの逆算から来ています。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 mb-4 text-sm text-gray-700 space-y-2">
            <p className="font-bold text-blue-800">計算の仕組み（金利1%・35年返済の場合）</p>
            <p>返済比率25%（安全）：借入可能額 = 年収 × <strong>約5.5倍</strong></p>
            <p>返済比率30%（標準）：借入可能額 = 年収 × <strong>約6.6倍</strong></p>
            <p>返済比率35%（上限）：借入可能額 = 年収 × <strong>約7.7倍</strong></p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            つまり「5〜7倍」は、<strong>返済比率25〜35%の範囲に対応した借入額</strong>の目安です。頭金がある場合は購入価格をその分上乗せできます。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🗺️ 年収別「適正購入価格」早見表
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-green-700 border-b border-gray-200">安全圏<br /><span className="text-xs font-normal">×5.5倍</span></th>
                  <th className="text-right px-4 py-3 font-bold text-yellow-700 border-b border-gray-200">標準<br /><span className="text-xs font-normal">×6.6倍</span></th>
                  <th className="text-right px-4 py-3 font-bold text-red-600 border-b border-gray-200">上限<br /><span className="text-xs font-normal">×7.7倍</span></th>
                </tr>
              </thead>
              <tbody>
                {[500, 600, 700, 800, 1000, 1200].map((n, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{n}万円</td>
                    <td className="px-4 py-3 text-right text-green-700 font-semibold">{(n * 5.5).toFixed(0)}万円</td>
                    <td className="px-4 py-3 text-right text-yellow-700 font-semibold">{(n * 6.6).toFixed(0)}万円</td>
                    <td className="px-4 py-3 text-right text-red-600 font-semibold">{(n * 7.7).toFixed(0)}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※金利1%・35年返済・頭金ゼロでの試算。実際の金利・頭金によって変わります。</p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏙️ 東京の現実：倍率だけでは買えない
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            上の早見表と東京の相場を比べると、深刻な乖離があります。
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-800 mb-2">🏠 2025年の東京相場</p>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>・23区新築マンション 平均：<strong>約9,500万円〜1.2億円</strong></li>
              <li>・23区中古マンション 平均：<strong>約5,000万〜7,000万円</strong></li>
              <li>・郊外・神奈川・埼玉：<strong>約3,500万〜5,000万円</strong></li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            年収700万円の「安全圏（×5.5）」は3,850万円。しかし23区の中古マンションですら5,000万〜7,000万円が相場です。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            現実的には<strong>「倍率を上げる」「頭金を増やす」「エリアを広げる」「中古を検討する」</strong>のいずれか、または組み合わせで対応することになります。
          </p>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ❌ 年収倍率だけで判断してはいけない理由
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "金利が違えば倍率の意味が変わる",
                body: "「年収の7倍」でも金利0.4%（変動低金利）と金利2.0%では月返済額が大きく違います。倍率は金利前提によって意味が変わります。",
              },
              {
                title: "管理費・修繕積立金が含まれていない",
                body: "年収倍率はローン返済のみ。マンションでは管理費・修繕積立金（月2〜4万）が別途かかるため、実質負担はさらに高くなります。",
              },
              {
                title: "家族構成・教育費・老後資金が考慮されていない",
                body: "子どもの有無、教育費の計画、老後のための貯蓄——これらを加味すると、同じ年収でも安全な借入額は大きく変わります。",
              },
              {
                title: "収入の安定性が反映されない",
                body: "正社員・自営業・共働きなど、収入の安定性が異なれば適切な倍率も変わります。「年収が下がるリスク」を見込んだ設定が必要です。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-gray-800 mb-1">❌ {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 正しい判断軸は「返済比率」
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            年収倍率はあくまで「ざっくりした目安」です。より正確な判断には<strong>返済比率（年収に占める年間返済額の割合）</strong>を使いましょう。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-4">
            <p className="text-sm font-bold text-blue-800 mb-2">返済比率による判断基準</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✅ <strong>〜25%</strong>：安全。生活・貯蓄に余裕あり</li>
              <li>⚠️ <strong>25〜30%</strong>：標準。家計管理が必要</li>
              <li>🔴 <strong>30〜35%</strong>：警戒。金利上昇・収入減に脆弱</li>
              <li>❌ <strong>35%超</strong>：危険。長期的に厳しくなる可能性大</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            購入を検討するときは、「年収の何倍か？」ではなく「返済比率は何%になるか？」で考えることをおすすめします。
          </p>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">年収倍率より正確な「返済比率」を計算</p>
          <p className="text-xs mb-4 opacity-90">年収・物件価格・頭金を入力するだけで、返済比率と安全購入価格を自動診断。</p>
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
