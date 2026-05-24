import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンの借り換えで得する人・損する人【損益分岐点を計算】｜30Lab",
  description:
    "住宅ローンの借り換えで本当に得をする条件と損益分岐点の計算方法を解説。2025年の金利環境で借り換えを検討すべき人・やめておくべき人の判断基準。",
  keywords: [
    "住宅ローン 借り換え",
    "住宅ローン 借り換え メリット",
    "借り換え 損益分岐点",
    "住宅ローン 借り換え タイミング",
    "借り換え 諸費用",
  ],
  openGraph: {
    title: "住宅ローンの借り換えで得する人・損する人【損益分岐点を計算】",
    description: "借り換えの損益分岐点の計算方法と、2025年に借り換えを検討すべき人の判断基準。",
  },
};

export default function JutakuLoanKarikaePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">住宅ローン借り換え</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">借り換え・住宅ローン</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローンの<span className="text-blue-600">借り換えで得する人・損する人</span><br />
          【損益分岐点を計算】
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          「今より低い金利に借り換えたい」という相談は年々増えています。しかし借り換えは必ずしも得になるわけではありません。諸費用がかかる分、十分な利息削減効果がなければ損をすることも。この記事では借り換えのメリット・デメリットと、損益分岐点の具体的な計算方法を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💰 借り換えのメリット：金利差×残高で計算する
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            借り換えによる利息削減額は、<strong>「金利差 × ローン残高」</strong>で概算できます。残高が多いほど、金利差が大きいほど効果が高くなります。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">ローン残高</th>
                  <th className="text-center px-4 py-3 font-bold text-blue-700 border-b border-gray-200">金利差0.3%</th>
                  <th className="text-center px-4 py-3 font-bold text-green-700 border-b border-gray-200">金利差0.5%</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-700 border-b border-gray-200">金利差1.0%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { zanko: "1,000万円", p3: "約3万円/年", p5: "約5万円/年", p10: "約10万円/年" },
                  { zanko: "2,000万円", p3: "約6万円/年", p5: "約10万円/年", p10: "約20万円/年" },
                  { zanko: "3,000万円", p3: "約9万円/年", p5: "約15万円/年", p10: "約30万円/年" },
                  { zanko: "4,000万円", p3: "約12万円/年", p5: "約20万円/年", p10: "約40万円/年" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-700">{row.zanko}</td>
                    <td className="px-4 py-3 text-center text-xs text-blue-700">{row.p3}</td>
                    <td className="px-4 py-3 text-center text-xs text-green-700">{row.p5}</td>
                    <td className="px-4 py-3 text-center text-xs text-orange-700">{row.p10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※概算値。実際の削減額は残存期間・元利均等の計算によって異なります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📐 損益分岐点の計算方法：諸費用 ÷ 月削減額
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            借り換えには諸費用がかかります。損益分岐点とは「諸費用を月々の削減額で回収できる月数」のことです。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-4">
            <p className="text-sm font-bold text-blue-800 mb-3">損益分岐点の計算式</p>
            <div className="bg-white rounded-lg p-3 text-center mb-3">
              <p className="text-base font-black text-blue-700">回収月数 = 諸費用合計 ÷ 月々の削減額</p>
            </div>
            <p className="text-xs text-gray-600">例：諸費用60万円、月削減額1万円 → 60ヶ月（5年）で回収</p>
          </div>
          <div className="space-y-3 mb-4">
            <p className="text-sm font-bold text-gray-800">主な借り換え諸費用の目安</p>
            {[
              { item: "融資手数料・事務手数料", cost: "借入額の2.2%（約44〜88万円）" },
              { item: "登記費用（抵当権変更）", cost: "5〜10万円" },
              { item: "印紙税", cost: "2万円前後" },
              { item: "一括繰り上げ返済手数料", cost: "0〜数万円" },
            ].map((row, i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-700">{row.item}</span>
                <span className="text-xs font-bold text-gray-900">{row.cost}</span>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-xs font-bold text-yellow-800 mb-1">⚠️ 目安：残存期間が10年未満なら効果は薄い</p>
            <p className="text-xs text-gray-600">諸費用を回収するには最低でも3〜5年の期間が必要です。残存期間が短い場合は損益分岐点を超える前に完済してしまうケースがあります。</p>
          </div>
        </section>

        {/* ━━ モゲチェックCTA ━━ */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-green-700 mb-1">💡 借り換え先の金利、複数行を一括比較</p>
          <p className="text-sm font-black text-gray-900 mb-2">「モゲチェック」で最適な借り換え先を無料診断</p>
          <p className="text-xs text-gray-600 mb-3">現在のローン残高・金利を入力するだけで、借り換え効果と最適な金融機関を提案。審査通過率も確認できます。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-black text-sm px-5 py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            モゲチェックで借り換えを無料診断する →
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "block" }} />
        </div>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 借り換えに向いている人・向いていない人
          </h2>
          <div className="space-y-3">
            {[
              {
                label: "借り換えに向いている人",
                icon: "✅",
                bg: "bg-green-50 border-green-200",
                items: [
                  "現在の金利と新金利の差が0.5%以上ある",
                  "ローン残高が1,000万円以上残っている",
                  "残存返済期間が10年以上ある",
                  "諸費用を一括で支払える現金が手元にある",
                  "職業・収入が安定しており審査に通る見込みがある",
                ],
              },
              {
                label: "借り換えをやめた方がよい人",
                icon: "⚠️",
                bg: "bg-red-50 border-red-200",
                items: [
                  "金利差が0.3%未満（諸費用を回収できない）",
                  "残存期間が5年以内",
                  "ローン残高が500万円未満",
                  "転職直後・収入が不安定で審査が通りにくい",
                  "固定期間特約の残存中（違約金が発生する場合）",
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
            📅 2025年の借り換えタイミング
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            2024年以降、日銀の利上げにより変動金利は上昇傾向にあります。「今より金利が下がるタイミングを待つ」という戦略はリスクをはらんでいます。
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "📈",
                title: "変動→固定への借り換えを検討する時期",
                body: "現在変動金利で返済中かつ、残存期間が長い（15年以上）場合は、固定金利への借り換えで将来の返済額を確定させるメリットが生まれています。フラット35は依然として1.8〜2.0%程度で利用可能。",
                bg: "bg-blue-50 border-blue-200",
              },
              {
                icon: "🔄",
                title: "変動→変動の借り換えもまだ有効",
                body: "金融機関によって適用金利に差があります。同じ変動金利でも0.2〜0.3%の差がある場合は借り換え効果が見込めます。ネット銀行が低金利を維持しているため比較検討する価値があります。",
                bg: "bg-green-50 border-green-200",
              },
              {
                icon: "⚡",
                title: "金利上昇局面での判断基準",
                body: "「今後さらに金利が上がる前に動く」という考え方は合理的です。ただし、審査通過が前提になります。収入証明・物件評価が問題ない時期に動くのが鉄則です。",
                bg: "bg-orange-50 border-orange-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
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
          <p className="text-base font-black mb-1">まず「自分の適正ローン額」を確認しよう</p>
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
            <Link href="/articles/jutaku-loan-hendokinri-koteikinri" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンは変動金利と固定金利どっちがいい？2025年の選び方</span>
            </Link>
            <Link href="/articles/jutaku-loan-kuriage-hensai" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">⏩</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの繰り上げ返済はすべき？メリット・デメリットを解説</span>
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
