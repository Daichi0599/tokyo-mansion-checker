import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンション購入の流れと手順【2025年版・初めてでも迷わない完全ガイド】｜30Lab",
  description:
    "マンション購入の流れを「予算決め→物件探し→申込→審査→契約→引渡し」の全ステップで解説。初めての購入でも迷わないよう、各ステップの注意点・かかる期間・費用も網羅。",
  keywords: [
    "マンション 購入 流れ",
    "マンション 買い方 手順",
    "マンション 購入 初めて",
    "マンション 購入 ステップ",
    "マンション 契約 流れ",
  ],
  openGraph: {
    title: "マンション購入の流れと手順【2025年版完全ガイド】",
    description: "予算決め→物件探し→申込→審査→契約→引渡しの全ステップを解説。初めてでも迷わない。",
  },
};

const steps = [
  {
    num: "01",
    title: "予算・借入可能額を把握する",
    period: "すぐ〜1週間",
    color: "border-blue-300 bg-blue-50",
    numColor: "bg-blue-600",
    points: [
      "世帯年収・貯蓄・毎月の生活費を整理する",
      "頭金に使える金額を確認（諸費用分も確保）",
      "住宅ローンの返済比率が25〜30%以内になる借入上限を計算",
      "管理費・修繕積立金・固定資産税も含めた月額負担を試算",
    ],
    tip: "30LabのマンションCTAツールで年収・頭金を入力すると、安全な購入価格がわかります。",
    tipLink: "/mansion",
  },
  {
    num: "02",
    title: "物件を探す",
    period: "1〜6ヶ月",
    color: "border-green-300 bg-green-50",
    numColor: "bg-green-600",
    points: [
      "SUUMO・アットホーム・ホームズで希望エリアを検索",
      "新築・中古どちらを狙うか決める",
      "駅距離・管理費・修繕積立金・築年数を比較",
      "複数の不動産会社に登録してレインズ未公開物件も探す",
    ],
    tip: "焦りは禁物。平均的な購入者は3〜6ヶ月かけて物件を探します。",
  },
  {
    num: "03",
    title: "内覧・物件チェック",
    period: "1〜3ヶ月",
    color: "border-purple-300 bg-purple-50",
    numColor: "bg-purple-600",
    points: [
      "昼間・晴れた日に内覧して日当たりを確認",
      "管理組合の議事録・修繕積立金の残高を確認",
      "周辺環境（スーパー・学校・騒音）を実際に歩いて確認",
      "ハザードマップで浸水・土砂リスクを確認",
    ],
    tip: "内覧は最低でも2〜3回行きましょう。時間帯・天気を変えて確認するのが鉄則です。",
  },
  {
    num: "04",
    title: "住宅ローンの事前審査（仮審査）",
    period: "1〜2週間",
    color: "border-orange-300 bg-orange-50",
    numColor: "bg-orange-600",
    points: [
      "物件が決まる前でも申込可能（先に審査しておくと動きやすい）",
      "複数の銀行に同時申込は信用情報に影響するため要注意",
      "必要書類：源泉徴収票・本人確認書類・物件資料",
      "事前審査通過＝本審査通過ではないため注意",
    ],
    tip: "モゲチェック等の一括比較サービスを使うと、複数行の審査を効率よく確認できます。",
  },
  {
    num: "05",
    title: "購入申込・価格交渉",
    period: "数日〜1週間",
    color: "border-yellow-300 bg-yellow-50",
    numColor: "bg-yellow-600",
    points: [
      "「買付申込書」を提出して購入意思を伝える",
      "中古物件は価格交渉が可能（相場比較を事前にしておく）",
      "売主が複数の申込を受けた場合は「最高価買付」競争になることも",
      "申込＝契約ではないため、この時点でのキャンセルは可能（手付金なし）",
    ],
    tip: "中古物件は掲載価格から3〜10%程度の値引き交渉が可能なケースがあります。",
  },
  {
    num: "06",
    title: "重要事項説明・売買契約",
    period: "1〜2週間",
    color: "border-red-300 bg-red-50",
    numColor: "bg-red-600",
    points: [
      "宅地建物取引士から「重要事項説明書」の説明を受ける",
      "管理費・修繕積立金・管理組合の状況を詳しく確認",
      "契約時に手付金（物件価格の5〜10%）を支払う",
      "ローン特約：ローン否決の場合に契約解除できる条項を必ず入れる",
    ],
    tip: "重要事項説明は1〜2時間かかります。疑問点は遠慮なく質問を。後から変更はできません。",
  },
  {
    num: "07",
    title: "住宅ローン本審査・金消契約",
    period: "2〜4週間",
    color: "border-indigo-300 bg-indigo-50",
    numColor: "bg-indigo-600",
    points: [
      "売買契約後に本審査を申込（事前審査通過でも本審査は別）",
      "必要書類：住民票・印鑑証明・収入証明・物件関係書類一式",
      "本審査通過後、銀行と「金銭消費貸借契約（金消契約）」を締結",
      "この時点でローンの金利・返済額が確定する",
    ],
    tip: "本審査期間中は転職・大きな借入・クレジットカード作成を控えましょう。審査に影響します。",
  },
  {
    num: "08",
    title: "残代金支払い・引渡し・登記",
    period: "半日〜1日",
    color: "border-teal-300 bg-teal-50",
    numColor: "bg-teal-600",
    points: [
      "残代金（物件価格 - 手付金）をローン実行で支払う",
      "鍵の引渡し・各種書類の受領",
      "司法書士が登記申請を行う（所有権移転・抵当権設定）",
      "火災保険の加入手続きが完了していることを確認",
    ],
    tip: "引渡し日は金融機関・司法書士・売主・買主が揃う日程調整が必要。1ヶ月前から調整開始を。",
  },
];

export default function MansionKounyuNagarePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">マンション購入の流れ</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">購入の流れ・手順</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          マンション購入の<span className="text-blue-600">流れと手順</span><br />
          2025年版・初めてでも迷わない完全ガイド
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          「マンションってどこから始めればいいの？」——初めての購入は、何から手をつければいいかわからないことだらけです。この記事では、予算決めから鍵の引渡しまで8つのステップを時系列で解説します。
        </p>

        {/* ━━ 全体スケジュール ━━ */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-10">
          <p className="text-sm font-black text-blue-800 mb-3">📅 マンション購入にかかる全体期間</p>
          <div className="space-y-2">
            {[
              { phase: "予算決め〜物件探し", period: "1〜6ヶ月" },
              { phase: "内覧〜申込", period: "1〜3ヶ月" },
              { phase: "契約〜本審査", period: "1〜2ヶ月" },
              { phase: "引渡し準備", period: "1〜2ヶ月" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="text-blue-900 font-semibold">{item.phase}</span>
                <span className="text-blue-700 font-bold">{item.period}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-blue-200">
            <p className="text-xs text-blue-800 font-bold">合計：早くて4ヶ月、平均6〜12ヶ月が目安</p>
          </div>
        </div>

        {/* ━━ ステップ一覧 ━━ */}
        <div className="space-y-6 mb-10">
          {steps.map((step, i) => (
            <section key={i} className={`rounded-2xl border-2 p-5 ${step.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`${step.numColor} text-white text-xs font-black px-2.5 py-1 rounded-full`}>
                  STEP {step.num}
                </span>
                <span className="text-xs text-gray-500">{step.period}</span>
              </div>
              <h2 className="text-base font-black text-gray-900 mb-3">{step.title}</h2>
              <ul className="space-y-1.5 mb-3">
                {step.points.map((point, j) => (
                  <li key={j} className="text-xs text-gray-700 flex items-start gap-2">
                    <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {step.tip && (
                <div className="bg-white/70 rounded-xl px-3 py-2">
                  <p className="text-xs text-gray-600">
                    💡 <strong>ポイント：</strong>{step.tip}
                    {step.tipLink && (
                      <Link href={step.tipLink} className="text-blue-600 hover:underline ml-1">→ 診断ツールで確認</Link>
                    )}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* ━━ 諸費用一覧 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💴 購入時にかかる諸費用の目安
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            物件価格以外に「諸費用」がかかります。新築で物件価格の3〜5%、中古で5〜8%が目安です。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">費用項目</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">目安（3,000万物件）</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "仲介手数料", cost: "約99万円", note: "中古のみ（上限は物件価格×3%+6万円）" },
                  { item: "登記費用（司法書士）", cost: "約20〜40万円", note: "所有権移転・抵当権設定" },
                  { item: "住宅ローン手数料", cost: "約33万円or保証料", note: "金融機関による" },
                  { item: "火災保険料（10年）", cost: "約5〜15万円", note: "物件・補償内容による" },
                  { item: "固定資産税精算金", cost: "数万円", note: "引渡し日以降の日割り精算" },
                  { item: "引越し費用", cost: "約5〜20万円", note: "距離・荷物量による" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-800">{row.item}</td>
                    <td className="px-4 py-3 text-right text-xs font-bold text-blue-700">{row.cost}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{row.note}</td>
                  </tr>
                ))}
                <tr className="bg-gray-100">
                  <td className="px-4 py-3 text-xs font-black text-gray-900">合計目安</td>
                  <td className="px-4 py-3 text-right text-sm font-black text-red-700">約150〜230万円</td>
                  <td className="px-4 py-3 text-xs text-gray-500">中古・仲介あり物件の場合</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ━━ アフィリエイト CTA ━━ */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 STEP04の住宅ローン比較はここから</p>
          <p className="text-sm font-black text-white mb-2">「モゲチェック」で金利・審査通過率を無料確認</p>
          <p className="text-xs text-slate-400 mb-3">50行以上を一括比較。年収・物件価格を入力するだけで最安金利候補と審査通過率が確認できます。</p>
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
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mt-8 mb-8">
          <p className="text-base font-black mb-1">まず「予算」を数字で確認しよう（STEP01）</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・生活費を入力するだけ。安全な購入価格と月返済額が3分でわかります。</p>
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
            <Link href="/articles/mansion-shohiyo" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💴</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンション購入の諸費用はいくら？内訳と相場を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-shinsa-nenshu" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🔎</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローン審査の年収基準は？通るための条件と落ちる理由</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
