import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンの返済比率は何%が安全？年収別の目安と限界ラインを解説｜30Lab",
  description:
    "住宅ローンの返済比率（負担率）は年収の何%が適切か？25%・30%・35%それぞれのリスクを年収別に解説。管理費込みの実質負担率と、無理のない返済プランの考え方。",
  keywords: [
    "住宅ローン 返済比率 目安",
    "返済負担率 何% 適切",
    "住宅ローン 年収 何割",
    "住居費負担率 目安",
    "住宅ローン 無理なく返せる",
  ],
  openGraph: {
    title: "住宅ローンの返済比率は何%が安全？年収別の目安と限界ラインを解説",
    description: "25%・30%・35%それぞれのリスクと、年収別の安全ラインを詳しく解説。",
  },
};

const levelData = [
  { label: "安全圏", range: "〜20%未満", color: "green", desc: "生活に余裕あり。教育費・老後貯蓄もしっかり確保できる水準。繰上返済も可能。" },
  { label: "標準圏", range: "20〜25%", color: "blue", desc: "一般的な目安。家計管理ができていれば問題ない水準。急な出費には注意が必要。" },
  { label: "注意圏", range: "25〜30%", color: "yellow", desc: "返済は続けられるが家計が引き締まる。外食・趣味などの支出を抑えないと厳しくなる。" },
  { label: "警戒圏", range: "30〜35%", color: "orange", desc: "金利上昇・収入減少があると危険。緊急予備費が底をつくリスクが高い。" },
  { label: "危険圏", range: "35%以上", color: "red", desc: "フラット35の審査基準（35%以下）を超える水準。家計破綻リスクが顕著に上がる。" },
];

export default function JuutakuLoanBurdenRatePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">返済比率の目安</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">返済比率・住宅ローン</span>
          <span className="text-xs text-slate-500">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          住宅ローンの返済比率は<span className="text-blue-400">何%が安全</span>？<br />
          年収別の目安と限界ラインを解説
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          住宅ローンを組む際に必ず出てくる「返済比率（負担率）」。「25%以内が安全」「30%まではOK」——さまざまな基準があって何を信じればいいのか迷う方も多いはずです。この記事では、返済比率の正しい計算方法と、年収別の安全ライン・危険ラインを具体的に解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💡 返済比率（負担率）とは？
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            返済比率とは、<strong>年収に対する年間返済額の割合</strong>のことです。
          </p>
          <div className="bg-blue-500/10 rounded-xl p-4 mb-4 text-center">
            <p className="text-sm font-black text-blue-200">返済比率 = 年間返済額 ÷ 年収 × 100</p>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            たとえば年収600万円で月々の返済が12.5万円（年間150万円）の場合：
          </p>
          <div className="bg-slate-800 rounded-xl p-4 text-sm text-slate-200 mb-4">
            <p>返済比率 = 150万 ÷ 600万 × 100 = <strong>25%</strong></p>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            金融機関の審査では一般的に<strong>35%以下</strong>が基準とされますが、「審査が通る＝安全に返せる」ではありません。実際の生活では25%以内を目安にすることをおすすめします。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🚦 返済比率別のリスクレベル
          </h2>
          <div className="space-y-3">
            {levelData.map((item, i) => {
              const colors: Record<string, string> = {
                green: "bg-green-500/10 border-green-200",
                blue: "bg-blue-500/10 border-blue-200",
                yellow: "bg-yellow-500/10 border-yellow-200",
                orange: "bg-orange-500/10 border-orange-200",
                red: "bg-red-500/10 border-red-200",
              };
              const labelColors: Record<string, string> = {
                green: "text-emerald-400 bg-green-500/20",
                blue: "text-blue-300 bg-blue-500/20",
                yellow: "text-yellow-400 bg-yellow-100",
                orange: "text-orange-400 bg-orange-500/20",
                red: "text-red-400 bg-red-500/20",
              };
              return (
                <div key={i} className={`rounded-xl p-4 border ${colors[item.color]}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${labelColors[item.color]}`}>{item.label}</span>
                    <span className="text-sm font-bold text-slate-100">{item.range}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ━━ アフィリエイト インライン CTA ━━ */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 住宅ローン、どこが一番お得？</p>
          <p className="text-sm font-black text-white mb-2">無料で複数行を一括比較できる「モゲチェック」</p>
          <p className="text-xs text-slate-400 mb-3">年収・物件価格を入力するだけで最適なローンを提案。審査通過率も確認できます。</p>
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
            📋 年収別「安全返済額」早見表
          </h2>
          <p className="text-sm text-slate-300 mb-4">返済比率25%（安全圏）での月々の返済上限額です。</p>
          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-slate-200 border-b border-slate-700">年間返済上限<br /><span className="text-xs font-normal">(25%)</span></th>
                  <th className="text-right px-4 py-3 font-bold text-slate-200 border-b border-slate-700">月々の返済上限</th>
                </tr>
              </thead>
              <tbody>
                {[500, 600, 700, 800, 900, 1000].map((n, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 font-bold text-white">{n}万円</td>
                    <td className="px-4 py-3 text-right text-slate-200">{(n * 0.25).toFixed(0)}万円</td>
                    <td className="px-4 py-3 text-right text-blue-300 font-semibold">{((n * 0.25) / 12).toFixed(1)}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏢 マンションでは「管理費込み」で考える
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            マンション購入では、ローン返済額に加えて毎月<strong>管理費・修繕積立金</strong>がかかります。都内のマンションでは合わせて月2〜4万円程度が一般的です。
          </p>
          <div className="bg-orange-500/10 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-800 mb-2">⚠️ 実質的な住居費で考えよう</p>
            <div className="text-sm text-orange-400 space-y-1">
              <p>ローン返済 12万円 ＋ 管理費・修繕積立金 2.5万円 = <strong>月14.5万円</strong></p>
              <p>年収600万なら実質負担率 = 14.5万 × 12 ÷ 600万 = <strong>29%</strong></p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            ローン返済だけで25%以内に収めていても、管理費等を含めると30%超になるケースがあります。返済比率はローン単体ではなく<strong>住居費合計</strong>で計算することが重要です。
          </p>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📈 金利上昇への備え
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            変動金利を選ぶ場合、金利が将来上昇すると返済比率も上がります。たとえば金利が1.0%から2.0%に上昇した場合、同じ借入額でも月返済額は約8〜10%増加します。
          </p>
          <div className="bg-slate-800 rounded-xl p-4 text-sm text-slate-200 space-y-2 mb-4">
            <p className="font-bold text-slate-100">【シミュレーション例】借入3,000万・35年</p>
            <p>金利1.0%：月返済 <strong>約8.5万円</strong></p>
            <p>金利2.0%：月返済 <strong>約9.9万円</strong>（＋約1.5万円/月）</p>
            <p>金利3.0%：月返済 <strong>約11.4万円</strong>（＋約2.9万円/月）</p>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            返済比率25%で組んでいても、金利上昇で30〜35%になり得ます。余裕のある返済計画を立てることが重要です。
          </p>
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
          <p className="text-base font-black mb-1">あなたの返済比率を今すぐ確認</p>
          <p className="text-xs mb-4 opacity-90">年収・購入価格・頭金を入力するだけで、返済比率と安全ラインをチェックできます。</p>
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
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
            <Link href="/articles/tomobataraki-jutaku-loan" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">👫</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">共働き夫婦の住宅ローン｜世帯年収別の購入可能額</span>
            </Link>
            <Link href="/articles/jutaku-loan-shinsa-nenshu" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🔎</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローン審査の年収基準は？通るための条件と落ちる理由を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-shinsa-ochita" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">❌</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローン審査に落ちた原因と対策【年収別・通らない理由を解説】</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
