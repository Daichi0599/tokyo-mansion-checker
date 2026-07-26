import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローン審査の完全ガイド｜年収基準・落ちる原因・収入合算・保証料【2026年】｜30Lab",
  description:
    "住宅ローン審査を一本にまとめた完全ガイド。審査に落ちる原因TOP5と対策、年収別の借入可能額の基準、共働きの収入合算・ペアローンの違い、保証料の仕組みと相場まで。無料診断で自分の安全借入額も確認できます。",
  keywords: [
    "住宅ローン 審査 落ちた",
    "住宅ローン 審査 年収 基準",
    "住宅ローン 収入合算 ペアローン",
    "住宅ローン 保証料 相場",
    "住宅ローン 審査 通らない 原因",
  ],
  openGraph: {
    title: "住宅ローン審査の完全ガイド｜年収基準・落ちる原因・収入合算・保証料【2026年】",
    description: "審査落ちの原因と対策、年収基準、収入合算・ペアローン、保証料までまとめて解説。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "住宅ローン審査の完全ガイド【2026年】",
    description: "落ちる原因・年収基準・収入合算・保証料を一本にまとめました。",
  },
};

const FAQ_ITEMS = [
  {
    q: "住宅ローン審査に落ちる一番多い原因は何ですか？",
    a: "信用情報の傷（クレジットカードや携帯分割の延滞履歴）が最も多い原因です。次いで他社借入（カードローン・自動車ローン・リボ払い）の残高、勤続年数の短さ（1年未満）が続きます。特に延滞は本人が忘れていることも多いため、審査前にCIC等で信用情報を開示して確認するのが確実です。",
  },
  {
    q: "年収がいくらあれば住宅ローンは組めますか？",
    a: "多くの金融機関の最低年収要件は200〜400万円です。ただし借入可能額は年収の7〜8倍程度が上限で、返済負担率（年収に占める年間返済額の割合）が年収400万円未満で30%以内、400万円以上で35%以内という基準が一般的。ただしこれは「貸せる上限」であり、安全に返せる水準は返済比率25%以内です。",
  },
  {
    q: "収入合算とペアローンはどちらが良いですか？",
    a: "収入合算（連帯保証型）は契約が1本で諸費用が安く済みますが、住宅ローン控除と団信は主債務者のみ。ペアローンは2本契約で諸費用は2倍かかるものの、夫婦それぞれが住宅ローン控除と団信を使えます。共働きが長く続く前提ならペアローン、片方の離職可能性があるなら借入額を抑えた単独ローンが無難です。",
  },
  {
    q: "保証料はいくらかかりますか？",
    a: "保証料は「一括前払い型」で借入額の約2%（3,000万円なら約60万円）、「金利上乗せ型」で金利+0.2%が一般的な相場です。ネット銀行では保証料無料の代わりに融資事務手数料が借入額の2.2%かかるケースが多く、実質的な負担は大差ありません。総支払額で比較することが重要です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "住宅ローン審査の完全ガイド｜年収基準・落ちる原因・収入合算・保証料",
  description: "住宅ローン審査の落ちる原因と対策、年収基準、収入合算・ペアローン、保証料をまとめた完全ガイド。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-05-01",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://30lab.vercel.app/articles/jutaku-loan-shinsa-ochita",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function JutakuLoanShinsaOchitaPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">住宅ローン審査ガイド</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">住宅ローン審査</span>
          <span className="text-xs text-slate-500">2026年7月更新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          住宅ローン<span className="text-blue-400">審査</span>の完全ガイド<br />
          年収基準・落ちる原因・収入合算・保証料【2026年】
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「事前審査に落ちた」「本審査で否決された」——住宅ローンの審査落ちは珍しくありません。銀行は否決の理由を教えてくれないため、自分では原因がわからないことが多いです。この記事では、審査落ちの主な原因と、再審査を通すための具体的な対策を解説します。
        </p>

        {/* ━━ 概要ボックス ━━ */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-10">
          <p className="text-sm font-black text-amber-300 mb-3">📋 住宅ローン審査落ちの主な原因（5つ）</p>
          <ol className="space-y-1.5">
            {[
              "信用情報に傷がある（延滞・債務整理の記録）",
              "借入中のローン・カードが多い",
              "年収に対して借入希望額が多すぎる",
              "勤続年数が短い（1〜2年未満）",
              "物件条件・担保評価の問題",
            ].map((item, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="font-black text-amber-400 shrink-0">{i + 1}.</span>
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
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
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
          <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
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
                color: "border-blue-500/30 bg-blue-500/10",
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

        {/* ━━ 統合：年収基準 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💴 年収別・審査で見られる基準
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            金融機関が審査で最も重視するのが<strong className="text-white">返済負担率</strong>（年収に占める年間返済額の割合）です。年収帯によって基準が変わります。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">年収</th>
                  <th className="text-center px-3 py-3 font-bold text-slate-200 border-b border-slate-700">審査上の<br />返済負担率</th>
                  <th className="text-right px-3 py-3 font-bold text-blue-300 border-b border-slate-700">借入上限<br />（審査基準）</th>
                  <th className="text-right px-3 py-3 font-bold text-emerald-400 border-b border-slate-700">安全圏<br />（負担率25%）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { y: "400万円", r: "35%", max: "約4,100万円", safe: "約2,900万円" },
                  { y: "500万円", r: "35%", max: "約5,100万円", safe: "約3,600万円" },
                  { y: "700万円", r: "35%", max: "約7,200万円", safe: "約5,100万円" },
                  { y: "1,000万円", r: "35%", max: "約10,300万円", safe: "約7,300万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-3 py-3 font-bold text-white text-xs">{row.y}</td>
                    <td className="px-3 py-3 text-center text-slate-300 text-xs">{row.r}</td>
                    <td className="px-3 py-3 text-right text-blue-300 text-xs">{row.max}</td>
                    <td className="px-3 py-3 text-right text-emerald-400 text-xs font-semibold">{row.safe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <p className="text-sm font-bold text-red-300 mb-1">⚠️ 「借りられる額」で買ってはいけない</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              審査基準（負担率35%）と安全水準（25%）には<strong className="text-white">1,000万円以上の差</strong>があります。審査に通ったからといってその額で買うと、教育費や金利上昇に耐えられなくなります。審査上限はあくまで「銀行が貸せる額」です。
            </p>
          </div>
        </section>

        {/* ━━ 統合：収入合算・ペアローン ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            👫 共働きの選択肢：収入合算 vs ペアローン
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            年収が足りない場合、夫婦の収入を合わせる方法が2つあります。仕組みも税制メリットも違うので、違いを理解して選びましょう。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">項目</th>
                  <th className="text-center px-3 py-3 font-bold text-blue-300 border-b border-slate-700">収入合算<br />（連帯保証）</th>
                  <th className="text-center px-3 py-3 font-bold text-emerald-400 border-b border-slate-700">ペアローン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { k: "契約数", a: "1本", b: "2本（夫婦それぞれ）" },
                  { k: "諸費用", a: "1本分", b: "2本分（約2倍）" },
                  { k: "住宅ローン控除", a: "主債務者のみ", b: "夫婦それぞれ利用可" },
                  { k: "団信", a: "主債務者のみ", b: "夫婦それぞれ加入" },
                  { k: "片方が亡くなった場合", a: "残債は全額残る（連帯保証人）", b: "その人の分だけ完済される" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-3 py-3 font-semibold text-white text-xs">{row.k}</td>
                    <td className="px-3 py-3 text-center text-slate-300 text-xs">{row.a}</td>
                    <td className="px-3 py-3 text-center text-slate-300 text-xs">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <p className="text-sm font-bold text-amber-300 mb-1">⚠️ ペアローン最大のリスク</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              産休・育休・時短勤務・離職で片方の収入が減っても、<strong className="text-white">2本のローン返済義務は続きます</strong>。「収入が半分になっても返せるか」を必ず試算してから決めてください。共働き前提の借入額は、想像以上に脆いことがあります。
            </p>
          </div>
        </section>

        {/* ━━ 統合：保証料 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💳 保証料の仕組みと相場
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            保証料は、返済不能になったときに保証会社が銀行へ代位弁済するための費用です（あなたの債務が消えるわけではありません）。支払い方法は2種類あります。
          </p>
          <div className="space-y-3 mb-4">
            {[
              { title: "一括前払い型（外枠方式）", body: "借入額の約2%を契約時に現金で支払う。3,000万円なら約60万円。繰上返済で完済すると一部が戻ってくる。", color: "border-blue-500/40 bg-blue-500/10", text: "text-blue-300" },
              { title: "金利上乗せ型（内枠方式）", body: "金利に+0.2%上乗せして分割払い。初期費用を抑えられるが、総支払額は前払い型より高くなることが多い。返金もなし。", color: "border-amber-500/40 bg-amber-500/10", text: "text-amber-300" },
              { title: "保証料無料（ネット銀行に多い）", body: "保証料ゼロの代わりに融資事務手数料が借入額の2.2%かかるのが一般的。実質的な負担は前払い型と大差ないため、必ず総額で比較すること。", color: "border-emerald-500/40 bg-emerald-500/10", text: "text-emerald-300" },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border-2 p-4 ${item.color}`}>
                <p className={`text-sm font-bold mb-1 ${item.text}`}>{item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ ツールCTA ━━ */}
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-300 mb-1">🏠 審査に通る額ではなく「返せる額」を知る</p>
          <p className="text-sm font-black text-white mb-2">無料診断で安全な借入額を3分で算出</p>
          <p className="text-xs text-slate-400 mb-3">年収・頭金・金利を入れるだけ。審査上限ではなく、家計を崩さない安全購入価格を提示します。</p>
          <Link href="/mansion" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-colors">
            🏠 安全購入価格を診断する →
          </Link>
        </div>

        {/* ━━ FAQ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ❓ よくある質問
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-4">
                <p className="text-sm font-bold text-blue-300 mb-2">Q. {item.q}</p>
                <p className="text-xs text-slate-300 leading-relaxed">A. {item.a}</p>
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
            <Link href="/articles/tokyo-23ku-shisan-kachi-ranking" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🗺️</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">東京23区 マンション資産価値ランキング2026</span>
            </Link>
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📊</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表・返済比率・頭金】</span>
            </Link>
            <Link href="/articles/jutaku-loan-hendokinri-koteikinri" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏦</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローン金利の完全ガイド｜変動vs固定・団信・繰上返済</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
