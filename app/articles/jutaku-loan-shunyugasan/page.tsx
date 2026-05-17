import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンの収入合算・連帯保証・連帯債務・ペアローンの違いを解説｜30Lab",
  description:
    "4つの借り方を比較表で徹底解説。借入可能額・住宅ローン控除・離婚リスクの違いから、共働き夫婦に最適な方式を解説。",
  keywords: [
    "住宅ローン 収入合算",
    "連帯保証 連帯債務 違い",
    "ペアローン 収入合算 どっち",
    "住宅ローン 夫婦 共働き",
    "ペアローン リスク",
  ],
  openGraph: {
    title: "住宅ローンの収入合算・連帯保証・連帯債務・ペアローンの違いを解説",
    description: "4つの方式を比較表で解説。共働き夫婦に最適な借り方がわかります。",
  },
};

export default function JutakuLoanShunyugasanPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">収入合算・ペアローン</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">収入合算・ペアローン</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローンの<span className="text-blue-600">収入合算・連帯保証・連帯債務・ペアローン</span>の違いを解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          共働き夫婦が住宅ローンを組む際、「ペアローンにするか収入合算にするか」で悩む方が多くいます。これらは似ているようで、借入可能額・住宅ローン控除・離婚リスクに大きな違いがあります。この記事では4つの方式を比較表で徹底解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📋 4つの方式の基本的な違い：比較表
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-3 py-3 font-bold text-gray-700 border-b border-gray-200">項目</th>
                  <th className="text-center px-3 py-3 font-bold text-gray-600 border-b border-gray-200">単独</th>
                  <th className="text-center px-3 py-3 font-bold text-blue-700 border-b border-gray-200">収入合算<br/>（連帯保証）</th>
                  <th className="text-center px-3 py-3 font-bold text-green-700 border-b border-gray-200">収入合算<br/>（連帯債務）</th>
                  <th className="text-center px-3 py-3 font-bold text-orange-700 border-b border-gray-200">ペアローン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    item: "契約本数",
                    tan: "1本",
                    hoshyo: "1本",
                    saimu: "1本",
                    pair: "2本",
                  },
                  {
                    item: "借入可能額",
                    tan: "主債務者の年収のみ",
                    hoshyo: "合算収入で計算",
                    saimu: "合算収入で計算",
                    pair: "合算収入で計算",
                  },
                  {
                    item: "住宅ローン控除",
                    tan: "主債務者のみ",
                    hoshyo: "主債務者のみ",
                    saimu: "両者（持分に応じて）",
                    pair: "両者（各ローンに対して）",
                  },
                  {
                    item: "団体信用生命保険",
                    tan: "主債務者のみ",
                    hoshyo: "主債務者のみ",
                    saimu: "主債務者のみ（※）",
                    pair: "両者それぞれ加入",
                  },
                  {
                    item: "配偶者の責任",
                    tan: "なし",
                    hoshyo: "主債務者が返せない場合に負担",
                    saimu: "両者が連帯して全額負担",
                    pair: "それぞれのローンに対して独立",
                  },
                  {
                    item: "離婚時のリスク",
                    tan: "低",
                    hoshyo: "中（連帯保証解除が困難）",
                    saimu: "高（名義変更が複雑）",
                    pair: "高（2本のローン処理が必要）",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-3 py-2 font-semibold text-gray-700">{row.item}</td>
                    <td className="px-3 py-2 text-center text-gray-600">{row.tan}</td>
                    <td className="px-3 py-2 text-center text-blue-700">{row.hoshyo}</td>
                    <td className="px-3 py-2 text-center text-green-700">{row.saimu}</td>
                    <td className="px-3 py-2 text-center text-orange-700">{row.pair}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※連帯債務の団信は金融機関によって夫婦ともに加入できる「デュエット」等の商品もあります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            👥 各方式の詳細解説
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "収入合算（連帯保証）",
                bg: "bg-blue-50 border-blue-200",
                desc: "主たる債務者（夫/妻どちらか）が1本のローンを組み、もう1人が連帯保証人になる方式。合算収入で借入可能額が上がりますが、住宅ローン控除は主債務者のみ。連帯保証人は実質的な返済者ではないが、主債務者が返せなくなった場合に全額返済義務が発生します。",
                note: "最も単純な方式。妻の収入がパートなど不安定な場合によく使われる。",
              },
              {
                title: "収入合算（連帯債務）",
                bg: "bg-green-50 border-green-200",
                desc: "1本のローンに夫婦が共同で債務者として名前を連ねる方式。フラット35で多く採用されています。両者が住宅ローン控除を使えますが、両者が連帯して全額の返済義務を負います。一方の収入が減っても、もう一方が全額返済しなければなりません。",
                note: "フラット35で採用例が多い。住宅ローン控除を最大化したい場合に有効。",
              },
              {
                title: "ペアローン",
                bg: "bg-orange-50 border-orange-200",
                desc: "夫婦それぞれが別々にローンを組み、互いに連帯保証人になる方式。2本のローンになるため、それぞれで住宅ローン控除が使えます。団信も両者が加入できるため、どちらかが亡くなった場合は自分のローンが消えます（残りのローンは残る）。",
                note: "住宅ローン控除・団信の両取りができる反面、手数料が2本分かかり、離婚時の処理が複雑になる。",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-2">{item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs font-bold text-gray-500">💡 {item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ モゲチェックCTA ━━ */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-green-700 mb-1">💡 夫婦の収入で借りられる上限額を確認</p>
          <p className="text-sm font-black text-gray-900 mb-2">「モゲチェック」で世帯年収に合ったローンを無料診断</p>
          <p className="text-xs text-gray-600 mb-3">ペアローン・収入合算のどちらが有利か、金融機関ごとの審査条件も合わせて確認できます。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-black text-sm px-5 py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            モゲチェックで無料診断する →
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "block" }} />
        </div>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💑 共働き夫婦へのおすすめと注意点
          </h2>
          <div className="space-y-3">
            {[
              {
                icon: "✅",
                title: "住宅ローン控除を最大化したい → ペアローンまたは連帯債務",
                body: "2024年以降の住宅ローン控除は年末残高×0.7%。高額物件の場合、夫婦両者で控除を使うメリットが大きい。両者の収入が安定している共働き夫婦に向いています。",
                bg: "bg-green-50 border-green-200",
              },
              {
                icon: "🛡️",
                title: "死亡・疾病リスクへの備えを重視 → ペアローン",
                body: "ペアローンは夫婦それぞれが団信に加入するため、どちらかが亡くなっても自分のローンが消えます。育休明けや妊娠中でもそれぞれの契約が独立しています。",
                bg: "bg-blue-50 border-blue-200",
              },
              {
                icon: "⚠️",
                title: "離婚リスクを考慮するなら → 単独またはシンプルな収入合算",
                body: "ペアローン・連帯債務は離婚時に名義変更・ローン分割が複雑になります。「離婚したら家を売る」と割り切れる場合は問題ありませんが、そうでない場合はリスクを理解した上で選択を。",
                bg: "bg-yellow-50 border-yellow-200",
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
            📌 育休・転職リスクへの備え方
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            共働きで収入合算やペアローンを組む際に最も注意すべきなのが、育休・転職による収入変動です。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-800 mb-3">チェックリスト：無理のないプランの目安</p>
            <ul className="space-y-2">
              {[
                "主債務者（収入が高い方）の年収だけで返済比率25%以内に収まるか確認する",
                "育休中（育児休業給付金：直近賃金の67%）でも返済できる月額かシミュレーションする",
                "転職した場合の収入低下時でも3〜6ヶ月は手元資金で乗り切れる貯蓄を確保する",
                "ペアローンは2本分の審査が必要。転職直後は通りにくい場合がある",
              ].map((point, i) => (
                <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">世帯年収での購入可能額を診断しよう</p>
          <p className="text-xs mb-4 opacity-90">夫婦の合算年収・頭金を入力するだけで、安全な購入予算がわかります。</p>
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
            <Link href="/articles/tomobataraki-jutaku-loan" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">👫</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">共働き夫婦の住宅ローン｜世帯年収別の購入可能額</span>
            </Link>
            <Link href="/articles/jutaku-loan-koujyo" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💹</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローン控除でいくら戻る？計算方法と上限を解説</span>
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
