import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンのボーナス払いはやめておくべき？リスクと対策を解説｜30Lab",
  description:
    "住宅ローンのボーナス払いの仕組みとカット時の返済リスクをシミュレーション。ボーナス払いが向く人・向かない人と、繰り上げ返済との比較。",
  keywords: [
    "住宅ローン ボーナス払い",
    "ボーナス払い リスク",
    "住宅ローン ボーナス 設定",
    "ボーナス払い やめる",
    "住宅ローン 繰り上げ返済 比較",
  ],
  openGraph: {
    title: "住宅ローンのボーナス払いはやめておくべき？リスクと対策を解説",
    description: "ボーナス払いのリスクとカット時の対策、繰り上げ返済との比較を解説。",
  },
};

export default function JutakuLoanBonusShiharaiPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">住宅ローンのボーナス払い</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">ボーナス払い・住宅ローン</span>
          <span className="text-xs text-slate-500">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          住宅ローンの<span className="text-blue-400">ボーナス払いはやめておくべき？</span><br />
          リスクと対策を解説
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          住宅ローンを組む際に「ボーナス払い」を設定すると、毎月の返済額を抑えられます。しかしボーナスは保証されていません。業績悪化・転職・育休などでボーナスが減額・カットされると、返済が一気に苦しくなるリスクがあります。この記事ではボーナス払いの仕組みとリスク、そして代替策を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💴 ボーナス払いの仕組みと計算例
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            ボーナス払いとは、住宅ローンの返済額の一部を毎月の返済とは別に、年2回（夏・冬のボーナス時期）にまとめて支払う方式です。
          </p>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20 mb-4">
            <p className="text-sm font-bold text-blue-200 mb-3">計算例：4,000万円・35年・金利0.5%</p>
            <div className="space-y-2">
              {[
                { label: "毎月返済のみ（ボーナスなし）", monthly: "約10.5万円/月", bonus: "なし", total: "約4,400万円" },
                { label: "毎月8万円＋ボーナス10万円×2回/年", monthly: "約8万円/月", bonus: "10万円×年2回", total: "約4,420万円" },
              ].map((row, i) => (
                <div key={i} className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-slate-100 mb-1">{row.label}</p>
                  <div className="flex gap-4 text-xs text-slate-300">
                    <span>毎月: <strong className="text-blue-300">{row.monthly}</strong></span>
                    <span>ボーナス: <strong className="text-orange-400">{row.bonus}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            ボーナス払いを設定すると毎月の負担は減りますが、年間の総返済額が増えることはなく、同程度です。ただし<strong>ボーナス月に大きな支出が集中する</strong>点がリスクとなります。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ⚠️ ボーナスカット時のリスク：返済できない場合
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            ボーナスが減額・ゼロになっても、住宅ローンの支払い義務は消えません。返済できない場合は以下の事態に発展します。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                icon: "1",
                title: "延滞・返済遅延",
                body: "ローンの支払いが遅れると信用情報に傷がつきます。最初の1〜2ヶ月は金融機関から連絡が来るレベルですが、3ヶ月以上続くと「期限の利益喪失」が発動します。",
                bg: "bg-yellow-500/10 border-yellow-200",
              },
              {
                icon: "2",
                title: "一括返済要求",
                body: "期限の利益を喪失すると、残債全額を一括で返済するよう求められます。当然一括返済できない場合は次のステップへ進みます。",
                bg: "bg-orange-500/10 border-orange-200",
              },
              {
                icon: "3",
                title: "競売・任意売却",
                body: "最終的には担保となっている物件が競売にかけられます。競売価格は市場価格より20〜30%低いため、残債が残るリスクもあります。任意売却で先手を打つことが重要です。",
                bg: "bg-red-500/10 border-red-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-white mb-1">STEP {item.icon}: {item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ モゲチェックCTA ━━ */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 ボーナスに頼らない返済プランを相談したい方へ</p>
          <p className="text-sm font-black text-white mb-2">「モゲチェック」で最適な住宅ローンを無料診断</p>
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
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            👥 ボーナス払いが向く人・向かない人
          </h2>
          <div className="space-y-3">
            {[
              {
                label: "ボーナス払いが向く人",
                icon: "✅",
                bg: "bg-green-500/10 border-green-200",
                items: [
                  "公務員・大手企業など、ボーナスが制度的に保証されている",
                  "ボーナス払い分を別口座で積み立てる習慣がある",
                  "月収に比べてボーナスが突出して多い収入構造",
                  "毎月の手取りが少なく、月々の負担を軽くしたい",
                ],
              },
              {
                label: "ボーナス払いをやめた方がよい人",
                icon: "⚠️",
                bg: "bg-red-500/10 border-red-200",
                items: [
                  "業績連動型のボーナスで変動が大きい（民間中小企業など）",
                  "育休・産休・転職の可能性がある",
                  "月収だけでも十分に返済比率25%以内に収まる",
                  "貯蓄バッファが少なく、ボーナス月に別の大出費もある",
                ],
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-white mb-2">{item.icon} {item.label}</p>
                <ul className="space-y-1">
                  {item.items.map((point, j) => (
                    <li key={j} className="text-xs text-slate-200 flex items-start gap-1">
                      <span className="text-slate-500 mt-0.5">・</span>
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
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🔄 代替策：繰り上げ返済との比較
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            ボーナス払いを設定する代わりに「毎月均等払い＋ボーナス月に任意で繰り上げ返済」する方法が、柔軟性が高くおすすめです。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">比較項目</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-400 border-b border-slate-700">ボーナス払い設定</th>
                  <th className="text-center px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">均等払い＋繰り上げ返済</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "ボーナスカット時の柔軟性", bonus: "✗ 返済義務が残る", kuriage: "✓ その年は繰り上げしなければよい" },
                  { item: "利息削減効果", bonus: "△ 変わらない", kuriage: "◎ 繰り上げるほど利息が減る" },
                  { item: "毎月の負担", bonus: "✓ 抑えられる", kuriage: "△ やや高め" },
                  { item: "心理的安心感", bonus: "✗ 毎年ボーナス月が不安", kuriage: "✓ 毎月の返済額が確定している" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 text-xs font-semibold text-slate-200">{row.item}</td>
                    <td className="px-4 py-3 text-center text-xs text-orange-400">{row.bonus}</td>
                    <td className="px-4 py-3 text-center text-xs text-emerald-400">{row.kuriage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
            <p className="text-xs font-bold text-blue-200 mb-1">結論：ボーナスが不確定なら「均等払い＋任意繰り上げ」がベター</p>
            <p className="text-xs text-slate-300">月々の返済額を固定し、ボーナスが出た年だけ繰り上げ返済する方が、資金繰りの柔軟性と利息削減を両立できます。</p>
          </div>
        </section>

        {/* 著者情報 */}
        <div className="mt-12 border-t border-slate-700 pt-8">
          <div className="flex items-start gap-4 bg-slate-800 rounded-2xl p-5">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-xl flex-shrink-0">
              🏠
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-sm">たろう｜都内マンション研究中</p>
              <p className="text-xs text-slate-400 mt-0.5">大企業勤務・アラサー・東京都在住</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                「年収はある程度あるが、都内マンションを本当に買っていいか判断できない」という自身の経験からこのサイトを制作。
                複数の不動産会社・銀行・FPへのヒアリングをもとにコンテンツを作成しています。
              </p>
              <div className="flex gap-3 mt-2">
                <a href="https://x.com/30lab_jp" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">𝕏 @30lab_jp</a>
                <a href="https://note.com/30lab" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">note</a>
              </div>
            </div>
          </div>
        </div>

        {/* 免責事項 */}
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">
          ※本記事は情報提供を目的としており、特定の金融商品・不動産物件の購入を推奨するものではありません。
          記載内容は執筆時点の情報に基づいており、金利・税制・市況は変動します。
          具体的な購入判断は、銀行・FP・不動産会社などの専門家にご相談ください。
        </p>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">ボーナスなしで無理なく返せる金額を確認しよう</p>
          <p className="text-xs mb-4 opacity-90">毎月均等払いで返済比率25%以内に収まる借入上限額を診断できます。</p>
          <Link
            href="/mansion"
            className="inline-block bg-slate-800 text-blue-300 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
          >
            無料マンション診断ツールを使う →
          </Link>
        </div>

        <section>
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/jutaku-loan-kuriage-hensai" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">⏩</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローンの繰り上げ返済はすべき？メリット・デメリットを解説</span>
            </Link>
            <Link href="/articles/juutaku-loan-burden-rate" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📊</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローンの返済比率は何%が安全？年収別の目安を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-karikaee" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🔄</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローンの借り換えで得する人・損する人【損益分岐点を計算】</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
