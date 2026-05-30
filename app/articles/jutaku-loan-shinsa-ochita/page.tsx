import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローン審査に落ちた原因と対策【年収別・通らない理由を解説】｜30Lab",
  description:
    "住宅ローン審査に落ちた原因TOP5と再審査を通すための対策を解説。年収・勤続年数・信用情報・借入状況・物件条件別に「落ちた理由」と「改善策」を具体的にまとめました。",
  keywords: [
    "住宅ローン 審査 落ちた",
    "住宅ローン 審査 通らない 原因",
    "住宅ローン 否決 理由",
    "住宅ローン 審査 対策",
    "住宅ローン 通る方法",
  ],
  openGraph: {
    title: "住宅ローン審査に落ちた原因と対策【再審査を通す方法】",
    description: "審査落ちの原因TOP5と再審査対策を解説。年収・信用情報・勤続年数別の改善ポイントまとめ。",
  },
};

export default function JutakuLoanShinsaOchitaPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">住宅ローン審査落ちた</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">住宅ローン審査</span>
          <span className="text-xs text-slate-500">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          住宅ローン審査に<span className="text-red-400">落ちた</span>原因と対策<br />
          年収別・通らない理由を解説
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「事前審査に落ちた」「本審査で否決された」——住宅ローンの審査落ちは珍しくありません。銀行は否決の理由を教えてくれないため、自分では原因がわからないことが多いです。この記事では、審査落ちの主な原因と、再審査を通すための具体的な対策を解説します。
        </p>

        {/* ━━ 概要ボックス ━━ */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
          <p className="text-sm font-black text-amber-800 mb-3">📋 住宅ローン審査落ちの主な原因（5つ）</p>
          <ol className="space-y-1.5">
            {[
              "信用情報に傷がある（延滞・債務整理の記録）",
              "借入中のローン・カードが多い",
              "年収に対して借入希望額が多すぎる",
              "勤続年数が短い（1〜2年未満）",
              "物件条件・担保評価の問題",
            ].map((item, i) => (
              <li key={i} className="text-xs text-amber-900 flex items-start gap-2">
                <span className="font-black text-amber-700 shrink-0">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* ━━ セクション1：信用情報 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ❶ 信用情報に傷がある（最多の原因）
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            住宅ローン審査落ちの最大の原因が「信用情報の問題」です。CIC・JICC・JBAの信用情報機関に記録された延滞・債務整理・破産歴があると、ほぼ全ての銀行で否決されます。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">記録の種類</th>
                  <th className="text-right px-4 py-3 font-bold text-slate-200 border-b border-slate-700">保存期間</th>
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">影響度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "クレカ・ローンの61日以上延滞", period: "5年", impact: "高" },
                  { type: "債務整理（任意整理・個人再生）", period: "5〜10年", impact: "非常に高" },
                  { type: "自己破産", period: "10年", impact: "最高（ほぼ全行否決）" },
                  { type: "スマホ本体の分割払い延滞", period: "5年", impact: "中〜高" },
                  { type: "ローン申込の多重申込", period: "6ヶ月", impact: "中" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 text-xs text-slate-200">{row.type}</td>
                    <td className="px-4 py-3 text-right text-xs font-semibold text-slate-200">{row.period}</td>
                    <td className="px-4 py-3 text-xs font-bold text-red-400">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-500/10 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-bold text-blue-200 mb-2">💡 対策：自分の信用情報を事前に開示請求する</p>
            <p className="text-xs text-blue-300 leading-relaxed">
              CIC（https://www.cic.co.jp/）に開示請求すると、自分の信用情報を確認できます。費用は500〜1,000円程度。審査前に確認し、問題があれば対策を取りましょう。記録の保存期間が過ぎれば審査に影響しなくなります。
            </p>
          </div>
        </section>

        {/* ━━ セクション2：借入 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ❷ 既存の借入が多い
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            住宅ローンの審査では、既存の借入残高も返済負担率に合算して計算されます。カーローン・カードローン・奨学金の返済が残っていると、借りられる住宅ローンの上限が大きく下がります。
          </p>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-4">
            <p className="text-sm font-bold text-slate-100 mb-3">年収500万円の場合の借入限度額の変化（金利1.0%・35年）</p>
            <div className="space-y-2">
              {[
                { condition: "他の借入なし", limit: "約3,500万円", rate: "100%" },
                { condition: "カーローン残高100万（月2万返済）", limit: "約2,500万円", rate: "71%" },
                { condition: "カードローン残高50万（月1万返済）", limit: "約2,800万円", rate: "80%" },
                { condition: "奨学金返済中（月2万）＋カーローン（月2万）", limit: "約1,700万円", rate: "49%" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-xs text-slate-300">{row.condition}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-blue-300">{row.limit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-green-500/10 border border-green-200 rounded-xl p-4">
            <p className="text-xs font-bold text-emerald-300 mb-1">💡 対策：申込前にカードローン・カーローンを完済する</p>
            <p className="text-xs text-emerald-400 leading-relaxed">
              残高が少ないローンは完済してから申込みましょう。完済後にカード自体を解約する必要はありませんが、完済の事実が信用情報に反映されるまで1〜2ヶ月かかります。
            </p>
          </div>
        </section>

        {/* ━━ アフィリエイト CTA ━━ */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 審査通過率も確認できる「モゲチェック」</p>
          <p className="text-sm font-black text-white mb-2">50行以上の銀行から、審査が通りやすいローンを提案</p>
          <p className="text-xs text-slate-400 mb-3">他行で落ちても通過できる銀行がある場合も。年収・勤続年数・物件条件を入力するだけで最適な銀行候補を提案してくれます。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            モゲチェックで審査通過率を確認する →
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "block" }} />
        </div>

        {/* ━━ セクション3：年収・返済比率 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ❸ 年収に対して借入額が多すぎる（返済比率オーバー）
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            銀行の審査基準では、年収に対する年間返済額の比率（返済比率）が一定を超えると否決されます。多くの銀行で「35〜40%以内」が基準ですが、実際には「30%以下推奨」の厳しい銀行もあります。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">審査で通りやすい<br />借入上限目安</th>
                  <th className="text-right px-4 py-3 font-bold text-red-400 border-b border-slate-700">審査で落ちやすい<br />借入額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { nenshu: 400, ok: "〜約2,750万円", ng: "3,500万円超" },
                  { nenshu: 500, ok: "〜約3,500万円", ng: "4,500万円超" },
                  { nenshu: 600, ok: "〜約4,200万円", ng: "5,500万円超" },
                  { nenshu: 800, ok: "〜約5,500万円", ng: "7,000万円超" },
                  { nenshu: 1000, ok: "〜約7,000万円", ng: "9,000万円超" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 font-bold text-white text-xs">{row.nenshu}万円</td>
                    <td className="px-4 py-3 text-right text-emerald-400 font-semibold text-xs">{row.ok}</td>
                    <td className="px-4 py-3 text-right text-red-400 font-semibold text-xs">{row.ng}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">※金利1.0%・35年・返済比率30%を基準とした目安。実際の審査基準は金融機関により異なります。</p>
        </section>

        {/* ━━ セクション4：勤続年数 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ❹ 勤続年数が短い（転職直後）
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            多くの銀行では「勤続年数2〜3年以上」を審査の目安としています。転職直後（6ヶ月〜1年未満）の場合、否決または条件付き承認となるケースが多いです。
          </p>
          <div className="space-y-3">
            {[
              { period: "勤続6ヶ月未満", result: "ほぼ否決", bg: "bg-red-500/10 border-red-200" },
              { period: "勤続6ヶ月〜1年未満", result: "多くの銀行で否決or減額", bg: "bg-orange-500/10 border-orange-200" },
              { period: "勤続1〜2年", result: "銀行によって審査可・同業種転職なら通りやすい", bg: "bg-yellow-500/10 border-yellow-200" },
              { period: "勤続2〜3年以上", result: "多くの銀行で問題なし", bg: "bg-green-500/10 border-green-200" },
            ].map((row, i) => (
              <div key={i} className={`rounded-xl p-3 border ${row.bg} flex items-center justify-between gap-3`}>
                <span className="text-xs font-bold text-slate-200">{row.period}</span>
                <span className="text-xs text-slate-300 text-right">{row.result}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-500/10 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-bold text-blue-200 mb-1">💡 対策：転職後2年待つか、勤続年数不問の銀行を探す</p>
            <p className="text-xs text-blue-300 leading-relaxed">
              ネット銀行や信用金庫の中には勤続年数の要件が緩い金融機関もあります。モゲチェックなどの一括比較サービスで、自分の条件に合う銀行を探しましょう。
            </p>
          </div>
        </section>

        {/* ━━ セクション5：再審査対策まとめ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🔄 審査落ち後にやるべき対策まとめ
          </h2>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "信用情報を開示して確認する",
                body: "CIC・JICCに開示請求し、延滞・異動情報がないか確認。問題があれば保存期間（5〜10年）が過ぎるまで待つか、解決策を検討。",
                color: "border-blue-200 bg-blue-500/10",
              },
              {
                step: "2",
                title: "小さな借入から完済する",
                body: "カードローン・消費者金融・携帯分割払いの残高を完済。住宅ローンの借入可能額が上がり、審査も通りやすくなる。",
                color: "border-green-200 bg-green-500/10",
              },
              {
                step: "3",
                title: "借入希望額を下げる・頭金を増やす",
                body: "返済比率が高い場合、頭金を増やして借入額を下げる。物件価格の10〜20%を頭金にすると審査が通りやすくなる。",
                color: "border-purple-200 bg-purple-500/10",
              },
              {
                step: "4",
                title: "複数の銀行に同時申込しない",
                body: "短期間に複数の銀行へ審査申込すると「多重申込」として信用情報に残る（6ヶ月）。モゲチェック経由で一括照会が有効。",
                color: "border-yellow-200 bg-yellow-500/10",
              },
              {
                step: "5",
                title: "審査基準が緩めの銀行・フラット35を検討",
                body: "都市銀行で落ちても、地方銀行・信用金庫・フラット35（勤続年数・雇用形態不問）で通過するケースがある。",
                color: "border-orange-200 bg-orange-500/10",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.color}`}>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 border border-current text-xs font-black flex items-center justify-center shrink-0 mt-0.5 text-slate-200">{item.step}</span>
                  <div>
                    <p className="text-sm font-black text-white mb-1">{item.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
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
          ※本記事は情報提供を目的としており、特定の金融商品・審査結果を保証するものではありません。
          記載内容は執筆時点の情報に基づいており、各金融機関の審査基準は変動します。
          具体的な判断は、銀行・FP・住宅ローンアドバイザーにご相談ください。
        </p>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mt-8 mb-8">
          <p className="text-base font-black mb-1">まず「いくらまで借りられるか」を確認しよう</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・生活費を入力するだけ。安全な借入上限と月返済額がわかります。</p>
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
            <Link href="/articles/jutaku-loan-shinsa-nenshu" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🔎</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローン審査の年収基準は？通るための条件と落ちる理由</span>
            </Link>
            <Link href="/articles/juutaku-loan-burden-rate" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📊</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローンの返済比率は何%が安全？年収別の目安を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-kinri-hikaku" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏦</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローン金利の比較方法【2025年最新】ネット銀行vs都市銀行</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
