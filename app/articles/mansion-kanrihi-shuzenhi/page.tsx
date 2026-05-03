import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンションの管理費・修繕積立金の相場はいくら？毎月の負担を解説｜30Lab",
  description:
    "マンション購入後に毎月かかる管理費・修繕積立金の全国・都内平均相場を解説。住宅ローン返済額に加算すると実質負担がどう変わるか、購入前に知っておくべき注意点をまとめました。",
  keywords: [
    "マンション 管理費 相場",
    "マンション 修繕積立金 相場",
    "マンション 管理費 修繕積立金 平均",
    "マンション 毎月 費用",
    "マンション 維持費 いくら",
  ],
  openGraph: {
    title: "マンションの管理費・修繕積立金の相場はいくら？",
    description: "毎月の実質負担額と、住宅ローン計算に含めるべき理由を解説。",
  },
};

export default function MansionKanrihiShuzenhiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">管理費・修繕積立金の相場</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">維持費・管理費</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          マンションの管理費・修繕積立金<br />
          <span className="text-blue-600">相場はいくら？</span>毎月の負担を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          マンションを購入すると、住宅ローンの返済に加えて「管理費」と「修繕積立金」が毎月かかります。この2つは見落とされがちですが、月2〜4万円以上になることもあり、実質的な住居費に大きく影響します。購入前に必ず把握しておきましょう。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏢 管理費・修繕積立金とは何か
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "管理費",
                body: "マンションの共用部分（エントランス・廊下・エレベーター・駐車場など）の清掃・維持・管理会社への委託費用。毎月支払う。",
                color: "bg-blue-50 border-blue-200",
              },
              {
                title: "修繕積立金",
                body: "外壁塗装・屋上防水・給排水管の交換など、将来の大規模修繕に備えて毎月積み立てるお金。新築時は安く、築年数とともに上がるケースが多い。",
                color: "bg-orange-50 border-orange-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.color}`}>
                <p className="text-sm font-black text-gray-900 mb-1">{item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            どちらも<strong>住宅ローンとは別に、毎月必ず支払う固定費</strong>です。購入前の資金計画に必ず含めてください。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📊 全国・都内の平均相場
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">費目</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">全国平均</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">東京都内目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "管理費", national: "約1.2万円/月", tokyo: "約1.5〜2.5万円/月" },
                  { label: "修繕積立金", national: "約1.1万円/月", tokyo: "約1.0〜2.0万円/月" },
                  { label: "合計", national: "約2.3万円/月", tokyo: "約2.5〜4.5万円/月" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.label}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.national}</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-bold">{row.tokyo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※国土交通省「マンション総合調査」およびスーモ・アットホーム等の物件データをもとにした参考値。物件・築年数・エリアにより大きく異なります。</p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💡 住宅ローンに加算すると実質負担はこうなる
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            5,000万円のマンションを金利1%・35年で購入した場合、ローン返済だけで月約14万円。管理費・修繕積立金を加えると：
          </p>
          <div className="space-y-3 mb-4">
            {[
              { label: "住宅ローン返済", amount: "約14.0万円/月", color: "text-gray-900" },
              { label: "管理費（都内平均）", amount: "約1.8万円/月", color: "text-blue-700" },
              { label: "修繕積立金（都内平均）", amount: "約1.5万円/月", color: "text-orange-700" },
              { label: "合計（実質住居費）", amount: "約17.3万円/月", color: "text-red-700 font-black text-base" },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between items-center px-4 py-3 rounded-xl ${i === 3 ? "bg-red-50 border border-red-200" : "bg-white border border-gray-100"}`}>
                <span className="text-sm text-gray-700">{row.label}</span>
                <span className={`text-sm font-bold ${row.color}`}>{row.amount}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            ローン返済だけで計算すると「返済比率28%（年収600万の場合）」でも、管理費・積立金込みだと<strong>実質34%超</strong>になることがあります。
          </p>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ⚠️ 修繕積立金が「安すぎる」物件に注意
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            新築マンションでは購入者を集めるため、修繕積立金を意図的に低く設定しているケースがあります。
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-800 mb-2">⚠️ よくあるパターン</p>
            <ul className="text-sm text-orange-700 space-y-2">
              <li>・新築時：修繕積立金 <strong>月3,000〜5,000円</strong></li>
              <li>・5年後：値上げで <strong>月10,000〜15,000円</strong></li>
              <li>・10年後：さらに値上げで <strong>月20,000〜30,000円</strong></li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            修繕積立金が月3,000円以下の場合は「段階増額方式」が採用されていることが多く、将来的に大幅な値上がりが見込まれます。<strong>購入前に長期修繕計画を確認</strong>することが重要です。
          </p>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 購入前のチェックポイント
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <ul className="text-sm text-gray-700 space-y-3">
              {[
                { num: "1", title: "管理費・修繕積立金の合計を月ローン返済額に足して計算する", sub: "「ローン返済比率」ではなく「総住居費負担率」で判断する。" },
                { num: "2", title: "修繕積立金の段階増額方式かどうか確認", sub: "新築で安くても、5〜10年後に倍以上になるケースあり。" },
                { num: "3", title: "長期修繕計画を営業担当に見せてもらう", sub: "計画がない・見せてもらえないマンションは要注意。" },
                { num: "4", title: "管理組合の財政状況を確認（中古の場合）", sub: "修繕積立金が不足していると、購入後に一時金徴収が発生することも。" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-black mt-0.5 text-base">{item.num}</span>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">管理費込みの実質負担率を計算</p>
          <p className="text-xs mb-4 opacity-90">ローン返済＋管理費・修繕積立金を含めた本当の住居費負担率を確認できます。</p>
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
