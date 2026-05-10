import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローン金利の比較方法【2025年最新】ネット銀行vs都市銀行を解説｜30Lab",
  description:
    "変動金利の主要銀行比較表（住信SBIネット銀行・楽天・auじぶん銀行・みずほ等）と、金利以外のコスト（団信・手数料）を含めたトータルコスト比較。2025年のネット銀行vs都市銀行の選び方を解説。",
  keywords: [
    "住宅ローン 金利 比較",
    "住宅ローン おすすめ ネット銀行",
    "住宅ローン ランキング 2025",
    "住信SBI ネット銀行 住宅ローン",
    "楽天銀行 住宅ローン 金利",
  ],
  openGraph: {
    title: "住宅ローン金利の比較方法【2025年最新】ネット銀行vs都市銀行を解説",
    description: "変動金利の主要銀行比較表と、金利以外のコスト（団信・手数料）を含めたトータルコスト比較。2025年の選び方を解説。",
  },
};

export default function JutakuLoanKinriHikakuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">住宅ローン金利比較</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">金利・住宅ローン比較</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローン<span className="text-blue-600">金利の比較方法</span><br />
          【2025年最新】ネット銀行vs都市銀行を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          「どの銀行が一番金利が低い？」——住宅ローンを検討する際に最初に気になるのが金利です。しかし金利だけを比べると見逃しやすいコストがあります。この記事では2025年の主要銀行の金利比較と、正しい選び方を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏦 2025年・主要銀行の変動金利比較表
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            2025年5月時点の主要銀行の変動金利（最優遇）の参考値です。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">銀行名</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">変動金利（最優遇）</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">融資手数料</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bank: "住信SBIネット銀行", rate: "年0.298%〜", fee: "借入額×2.20%", feature: "ネット申込可・がん団信無料付帯" },
                  { bank: "楽天銀行", rate: "年0.397%〜", fee: "借入額×2.20%", feature: "楽天ポイント優遇・団信充実" },
                  { bank: "auじぶん銀行", rate: "年0.319%〜", fee: "借入額×2.20%", feature: "がん50%無料・au回線で優遇" },
                  { bank: "PayPay銀行", rate: "年0.315%〜", fee: "借入額×2.20%", feature: "ネット完結・低金利水準" },
                  { bank: "みずほ銀行", rate: "年0.375%〜", fee: "借入額×2.20%", feature: "対面相談可・大手安心感" },
                  { bank: "三菱UFJ銀行", rate: "年0.345%〜", fee: "借入額×2.20%", feature: "対面・相談体制が充実" },
                  { bank: "フラット35（固定）", rate: "年1.820%〜", fee: "借入額×1.0%〜", feature: "最長35年固定・団信任意" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-xs">{row.bank}</td>
                    <td className="px-4 py-3 text-right font-bold text-blue-700 text-xs">{row.rate}</td>
                    <td className="px-4 py-3 text-right text-xs text-gray-600">{row.fee}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※2025年5月時点の参考値。実際の適用金利は審査内容・物件条件により異なります。最新情報は各金融機関でご確認ください。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🆚 ネット銀行 vs 都市銀行：メリット・デメリット
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                label: "ネット銀行のメリット",
                icon: "🌐",
                bg: "bg-blue-50 border-blue-200",
                items: [
                  "金利が低い傾向（0.3%台前後）",
                  "融資手数料が一定・手続きがオンライン完結",
                  "がん・疾病団信の無料付帯が多い",
                  "24時間いつでも申込・確認できる",
                ],
              },
              {
                label: "ネット銀行のデメリット",
                icon: "⚠️",
                bg: "bg-orange-50 border-orange-200",
                items: [
                  "対面相談ができない（電話・チャットのみ）",
                  "審査が厳しい場合がある（信用情報重視）",
                  "フラット35・共済系ローンは取り扱いなし",
                  "自営業・契約社員は審査が難しいことも",
                ],
              },
              {
                label: "都市銀行のメリット",
                icon: "🏛️",
                bg: "bg-green-50 border-green-200",
                items: [
                  "対面での相談・サポートが充実",
                  "属性に応じた柔軟な審査対応",
                  "給与口座との連携でサービスが充実",
                  "長い付き合いができ、将来の借り換えも相談しやすい",
                ],
              },
              {
                label: "都市銀行のデメリット",
                icon: "📌",
                bg: "bg-gray-50 border-gray-200",
                items: [
                  "変動金利がネット銀行より高い傾向",
                  "手続きに来店・書類郵送が必要なケースも",
                  "無料団信の充実度がネット銀行より劣る場合",
                  "比較検討が面倒（担当者によって案内が異なる）",
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

        {/* ━━ アフィリエイト インライン CTA ━━ */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-green-700 mb-1">💡 住宅ローン、どこが一番お得？</p>
          <p className="text-sm font-black text-gray-900 mb-2">無料で複数行を一括比較できる「モゲチェック」</p>
          <p className="text-xs text-gray-600 mb-3">年収・物件価格を入力するだけで最適なローンを提案。審査通過率も確認できます。</p>
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
            ⚠️ 金利だけで選ぶリスク：TCO（総コスト）で比較する
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            表面上の金利が低くても、<strong>融資手数料・団信の充実度・サービス品質</strong>を含めたトータルコストで比較しないと、実質的に損をする場合があります。
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-800 mb-2">📌 TCO比較の例（借入3,000万・35年）</p>
            <div className="space-y-2">
              {[
                { bank: "A銀行（金利0.3%・手数料2.2%）", monthly: "約8.0万円", fee: "66万円", total: "約402万円＋66万=468万円" },
                { bank: "B銀行（金利0.5%・手数料定額3万）", monthly: "約8.4万円", fee: "3万円", total: "約352万円＋3万=355万円" },
              ].map((row, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-orange-100">
                  <p className="text-xs font-bold text-gray-800 mb-1">{row.bank}</p>
                  <p className="text-xs text-gray-600">月返済：{row.monthly} / 手数料：{row.fee}</p>
                  <p className="text-xs font-bold text-orange-700">35年総コスト：{row.total}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">※金利による利息総額は概算。実際には繰り上げ返済等で変動します。</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            この例では金利が低い銀行のほうが手数料込みの総コストは高くなることも。<strong>金利×借入期間の利息総額＋諸費用</strong>で比較することが重要です。
          </p>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 2025年の住宅ローン選びの結論
          </h2>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
            <ul className="text-sm text-gray-700 space-y-3">
              {[
                {
                  point: "金利だけでなく手数料・団信をセットで比較する",
                  detail: "表面金利＋融資手数料＋団信特約コストを「トータル金利相当」で見る。",
                },
                {
                  point: "まずは2〜3行に絞って事前審査を同時申込む",
                  detail: "事前審査は信用情報に影響しない（※本審査は影響する可能性あり）。複数行に出して条件を比較するのが鉄則。",
                },
                {
                  point: "ネット銀行が不安なら都市銀行も並行で検討",
                  detail: "対面サポートが必要なら都市銀行も検討。ネット銀行の低金利と都市銀行の安心感を天秤にかける。",
                },
                {
                  point: "モゲチェック等の比較ツールを活用する",
                  detail: "一括で複数行を比較できるサービスは時間節約と条件整理に有効。審査通過率のスコアも確認できる。",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-black mt-0.5 shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-gray-800">{item.point}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">金利別の月返済シミュレーションを無料で</p>
          <p className="text-xs mb-4 opacity-90">金利・借入額・返済年数を変えて月返済額と返済比率を比較できます。</p>
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
            <Link href="/articles/jutaku-loan-danshin" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🛡️</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの団信とは？種類・比較・選び方を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-hoshoryou" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💼</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの保証料と融資手数料、どちらが得？</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
