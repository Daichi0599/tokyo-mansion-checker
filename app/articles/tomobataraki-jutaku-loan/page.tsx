import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "共働き夫婦の住宅ローン｜世帯年収別の購入可能額と注意すべきリスク｜30Lab",
  description:
    "共働き夫婦が住宅ローンを組む際の購入可能額を世帯年収別に解説。収入合算・ペアローンの違い、育休・転職リスクへの備え方もわかりやすく紹介。",
  keywords: [
    "共働き 住宅ローン 世帯年収",
    "共働き マンション 購入可能額",
    "ペアローン 収入合算 違い",
    "共働き 住宅ローン リスク",
    "夫婦 住宅ローン いくらまで",
  ],
  openGraph: {
    title: "共働き夫婦の住宅ローン｜世帯年収別の購入可能額と注意すべきリスク",
    description: "ペアローン・収入合算の違いと、育休・転職リスクへの備え方を解説。",
  },
};

export default function TomobatarakiJutakuLoanPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">共働き住宅ローン</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">共働き・ペアローン</span>
          <span className="text-xs text-slate-500">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          共働き夫婦の住宅ローン<br />
          <span className="text-blue-400">世帯年収別の購入可能額</span>と注意すべきリスク
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「2人の収入を合わせれば、もっと高いマンションに手が届くかも」——共働き夫婦ならではの強みがある一方、育休・転職・病気などで収入が下がったときのリスクも考える必要があります。この記事では共働きでの住宅ローンの仕組みと、購入可能額の目安、リスクへの備え方を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💑 共働きで住宅ローンを組む3つの方法
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "①単独ローン",
                desc: "どちらか一方の収入のみでローンを組む。審査は1人分だが、借入額が限られる。",
                merit: "シンプルで管理しやすい。一方の収入が変わっても影響が少ない。",
                demerit: "借入可能額が1人分に限られる。",
                bg: "bg-slate-800 border-slate-700",
              },
              {
                title: "②収入合算（連帯保証型）",
                desc: "一方を主債務者、もう一方を連帯保証人として、2人の収入を合算して審査を受ける。",
                merit: "借入可能額を増やせる。手続きが比較的シンプル。",
                demerit: "実際の返済義務は主債務者のみ。住宅ローン控除は主債務者のみが対象。",
                bg: "bg-blue-500/10 border-blue-200",
              },
              {
                title: "③ペアローン",
                desc: "夫婦それぞれが独立してローンを組み、互いに連帯保証人になる方法。",
                merit: "2人それぞれが住宅ローン控除を受けられる。借入総額を最大化しやすい。",
                demerit: "2本分の諸費用がかかる。どちらかの収入が下がると返済が厳しくなるリスクが高い。",
                bg: "bg-green-500/10 border-green-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-300 mb-2">{item.desc}</p>
                <p className="text-xs text-emerald-400 mb-1">✅ メリット：{item.merit}</p>
                <p className="text-xs text-red-400">❌ デメリット：{item.demerit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📊 世帯年収別・購入可能額の目安
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            ペアローン・収入合算で世帯年収全額を合算した場合の借入可能額（返済比率25%・金利1%・35年返済）です。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">世帯年収<br /><span className="text-xs font-normal">(例)</span></th>
                  <th className="text-right px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">安全圏購入価格<br /><span className="text-xs font-normal">(負担率25%)</span></th>
                  <th className="text-right px-4 py-3 font-bold text-yellow-400 border-b border-slate-700">注意圏<br /><span className="text-xs font-normal">(30%)</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "800万（400+400）", world: 800 },
                  { label: "1,000万（500+500）", world: 1000 },
                  { label: "1,200万（700+500）", world: 1200 },
                  { label: "1,500万（800+700）", world: 1500 },
                  { label: "1,800万（1000+800）", world: 1800 },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 text-white font-semibold text-xs">{row.label}</td>
                    <td className="px-4 py-3 text-right text-emerald-400 font-bold">{(row.world * 5.5).toFixed(0)}万円</td>
                    <td className="px-4 py-3 text-right text-yellow-400 font-bold">{(row.world * 6.6).toFixed(0)}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">※金利1%・35年返済・元利均等・頭金ゼロの試算。実際の審査・金利により異なります。</p>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ⚠️ 共働きローンの3大リスク
          </h2>
          <div className="space-y-3">
            {[
              {
                icon: "👶",
                title: "育休・産休による収入減少",
                body: "育休中は給付金が支給されますが、通常収入の67〜50%程度。ペアローンで2人分の返済を前提にしている場合、育休中に返済が苦しくなるケースがあります。育休1〜2年分の生活費の貯蓄を事前に確保しておくことが重要です。",
              },
              {
                icon: "💼",
                title: "転職・退職による収入変化",
                body: "どちらかが転職・退職した場合、世帯収入が大きく下がります。特に妻側の収入を前提にした計画は、専業主婦・主夫になる選択肢を狭めます。「一方の収入だけでも返せるか」を必ず確認しましょう。",
              },
              {
                icon: "🏥",
                title: "病気・介護による収入停止",
                body: "病気や家族の介護で仕事を休まざるを得ない事態も想定が必要です。就業不能保険や団体信用生命保険（団信）の保障内容を事前に確認しておきましょう。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-sm font-bold text-slate-100">{item.title}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ✅ 共働きローンを組む際のポイント
          </h2>
          <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/20 mb-4">
            <ul className="text-sm text-slate-200 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black mt-0.5 text-base">1</span>
                <div>
                  <p className="font-bold">「一方の収入だけで返せるか」を必ず確認</p>
                  <p className="text-xs text-slate-400 mt-0.5">収入の多い方の年収だけで返済比率が35%以内に収まるかを確認。これが最低ラインです。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black mt-0.5 text-base">2</span>
                <div>
                  <p className="font-bold">育休中の返済シミュレーションをする</p>
                  <p className="text-xs text-slate-400 mt-0.5">育休1〜2年間は収入が下がる前提でシミュレーションし、その間の貯蓄を事前に準備する。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black mt-0.5 text-base">3</span>
                <div>
                  <p className="font-bold">頭金を多めに準備してリスクを下げる</p>
                  <p className="text-xs text-slate-400 mt-0.5">頭金を増やすことで月返済額を下げ、収入変動への耐性を高める。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black mt-0.5 text-base">4</span>
                <div>
                  <p className="font-bold">ペアローンは住宅ローン控除の最大活用ができる</p>
                  <p className="text-xs text-slate-400 mt-0.5">2人それぞれが住宅ローン控除（最大年35万円×13年）を受けられるため、税制面で有利。ただし返済リスクと天秤にかけて判断を。</p>
                </div>
              </li>
            </ul>
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
          <p className="text-base font-black mb-1">夫婦の世帯年収で購入可能額を試算</p>
          <p className="text-xs mb-4 opacity-90">世帯年収・頭金・購入予算を入力して、返済比率と安全ラインをチェックできます。</p>
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
            <Link href="/articles/juutaku-loan-burden-rate" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📊</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローンの返済比率は何%が安全？年収別の目安を解説</span>
            </Link>
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
            <Link href="/articles/jutaku-loan-hendokinri-koteikinri" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">変動金利と固定金利どっちがいい？2025年の選び方</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
