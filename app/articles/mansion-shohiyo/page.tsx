import type { Metadata } from "next";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "マンションの諸費用・維持費の完全ガイド｜購入時＋購入後にかかるお金の全額【2026年】｜30Lab",
  description:
    "マンション購入時の諸費用（物件価格の5〜10%）と、購入後に毎年かかる維持費（管理費・修繕積立金・固定資産税）を一本にまとめた完全ガイド。生涯コストの試算例・節約ポイント・FAQまで。無料ツールで実質住居費も試算できます。",
  keywords: [
    "マンション 諸費用 内訳",
    "マンション 維持費 いくら",
    "マンション 管理費 修繕積立金 相場",
    "マンション 固定資産税",
    "マンション 購入 費用 総額",
  ],
  openGraph: {
    title: "マンションの諸費用・維持費の完全ガイド｜購入時＋購入後の全額【2026年】",
    description: "購入時の諸費用と購入後の維持費（管理費・修繕積立金・固定資産税）を一本に集約。生涯コストの試算例つき。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "マンションの諸費用・維持費の完全ガイド【2026年】",
    description: "購入時＋購入後にかかるお金を一本にまとめました。生涯コスト試算つき。",
  },
};

const FAQ_ITEMS = [
  {
    q: "マンション購入の諸費用は総額いくらですか？",
    a: "物件価格の5〜10%が目安です。3,000万円なら150〜300万円、6,000万円なら300〜600万円。新築より中古の方が仲介手数料がかかる分、割合としては高くなる傾向があります。原則として現金で用意が必要です。",
  },
  {
    q: "マンションの維持費は毎月いくらかかりますか？",
    a: "管理費と修繕積立金の合計で月2〜5万円（70㎡クラス）が目安です。これに固定資産税・都市計画税（年10〜30万円＝月1〜2.5万円相当）と火災保険が加わるため、実質的な維持費は月3〜7万円程度を見込むのが安全です。",
  },
  {
    q: "管理費・修繕積立金は値上がりしますか？",
    a: "修繕積立金は値上がりが前提と考えてください。多くのマンションが「段階増額積立方式」を採用しており、築年数の経過とともに上昇します。購入前に長期修繕計画と積立金の推移予定を必ず確認しましょう。",
  },
  {
    q: "住宅ローン返済額だけで予算を考えてはいけないのはなぜですか？",
    a: "ローン返済に加えて、管理費・修繕積立金・固定資産税・火災保険が毎月かかるためです。返済額だけで判断すると、実質的な住居費は月3〜7万円上振れします。予算は必ず「ローン＋維持費」の合計で考えましょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "マンションの諸費用・維持費の完全ガイド｜購入時＋購入後にかかるお金の全額",
  description: "購入時の諸費用と購入後の維持費（管理費・修繕積立金・固定資産税）をまとめた完全ガイド。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-04-15",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://30lab.vercel.app/articles/mansion-shohiyo",
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

export default function MansionShohiyoPage() {
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
          <span className="text-slate-300">諸費用・維持費ガイド</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">諸費用・維持費</span>
          <span className="text-xs text-slate-500">2026年7月更新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          マンションの<span className="text-blue-400">諸費用・維持費</span>の完全ガイド<br />
          購入時＋購入後にかかるお金の全額【2026年】
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          マンションのお金は「物件価格」だけではありません。買うときにかかる<strong className="text-white">諸費用（物件価格の5〜10%）</strong>と、買ったあと毎年かかり続ける<strong className="text-white">維持費（管理費・修繕積立金・固定資産税）</strong>——この2つを合わせて見ないと、資金計画は必ずズレます。この記事では購入時と購入後のコストを一本にまとめ、生涯コストの試算例まで示します。
        </p>

        {/* ━━ 目次 ━━ */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-10">
          <p className="text-xs font-bold text-slate-400 mb-2">この記事でわかること</p>
          <ul className="text-sm text-slate-300 space-y-1">
            {[
              "買うときの諸費用の内訳と相場（新築・中古の違い）",
              "買ったあとの維持費：管理費・修繕積立金の相場と値上がり",
              "毎年かかる固定資産税・都市計画税の計算と目安",
              "購入時＋10年間の生涯コスト試算例",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">{i + 1}.</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💴 諸費用の内訳と相場一覧
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            諸費用は大きく「取引コスト」「登記・税金」「ローン関連」「保険・その他」の4カテゴリに分かれます。
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">費用項目</th>
                  <th className="text-right px-4 py-3 font-bold text-slate-200 border-b border-slate-700">相場目安</th>
                  <th className="text-center px-4 py-3 font-bold text-slate-200 border-b border-slate-700">新築</th>
                  <th className="text-center px-4 py-3 font-bold text-slate-200 border-b border-slate-700">中古</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "仲介手数料", amount: "物件価格×3%+6万円（税込×1.1）", new_: "なし", used: "あり" },
                  { item: "登録免許税（所有権移転）", amount: "固定資産税評価額×0.3〜2%", new_: "あり", used: "あり" },
                  { item: "司法書士報酬", amount: "5〜15万円", new_: "あり", used: "あり" },
                  { item: "住宅ローン事務手数料", amount: "定額型：3〜5万円／定率型：借入額×2.2%", new_: "あり", used: "あり" },
                  { item: "抵当権設定登記費用", amount: "借入額×0.1〜0.4%＋司法書士料", new_: "あり", used: "あり" },
                  { item: "火災保険料（5年分）", amount: "3〜10万円程度", new_: "あり", used: "あり" },
                  { item: "固定資産税清算金", amount: "日割り計算（数万〜十数万円）", new_: "なし", used: "あり" },
                  { item: "管理費・修繕積立金（前払い）", amount: "1〜3ヶ月分", new_: "あり", used: "あり" },
                  { item: "引っ越し費用・家具購入費", amount: "30〜100万円（別途）", new_: "あり", used: "あり" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 text-slate-100 font-medium">{row.item}</td>
                    <td className="px-4 py-3 text-right text-slate-300 text-xs">{row.amount}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-semibold ${row.new_ === "あり" ? "text-emerald-400" : "text-slate-500"}`}>{row.new_}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-semibold ${row.used === "あり" ? "text-emerald-400" : "text-slate-500"}`}>{row.used}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">※相場は概算。物件価格・金融機関・時期により変わります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏗️ 新築と中古で諸費用はどう違う？
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-200">
              <p className="text-sm font-black text-blue-200 mb-2">🏢 新築マンション</p>
              <p className="text-xs text-slate-200 mb-2">物件価格の<strong className="text-blue-300">約3〜5%</strong></p>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>・仲介手数料なし（直接販売）</li>
                <li>・登録免許税が軽減（0.1〜0.15%）</li>
                <li>・住宅ローン控除13年適用</li>
              </ul>
            </div>
            <div className="bg-green-500/10 rounded-xl p-4 border border-green-200">
              <p className="text-sm font-black text-emerald-300 mb-2">🏠 中古マンション</p>
              <p className="text-xs text-slate-200 mb-2">物件価格の<strong className="text-emerald-400">約6〜10%</strong></p>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>・仲介手数料が発生（最大3%+6万円）</li>
                <li>・固定資産税清算金が必要</li>
                <li>・住宅ローン控除10年（上限低め）</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-200">
            <p className="text-sm font-bold text-yellow-300 mb-2">📌 仲介手数料の計算例</p>
            <p className="text-xs text-slate-200 leading-relaxed">
              物件価格3,500万円の中古マンションを購入した場合：<br />
              仲介手数料上限 = （3,500万円 × 3% + 6万円）× 1.1 = <strong>約122万円</strong><br />
              これが中古購入時の最大の諸費用項目です。
            </p>
          </div>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏦 住宅ローン手数料の「定額型」と「定率型」
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            住宅ローンを借りる際にかかる手数料（事務手数料）には2種類あります。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                type: "定率型（借入額×2.2%）",
                merit: "金利が低い傾向。3,000万円なら手数料66万円",
                demerit: "諸費用が高い。借入額が大きいほど手数料増",
                color: "border-red-200 bg-red-500/10",
                labelColor: "text-red-400",
              },
              {
                type: "定額型（3〜5万円程度）",
                merit: "諸費用を抑えられる。借入額が多いほどお得感",
                demerit: "金利がやや高い傾向。長期的には利息が増える場合も",
                color: "border-green-200 bg-green-500/10",
                labelColor: "text-emerald-400",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.color}`}>
                <p className={`text-sm font-bold ${item.labelColor} mb-2`}>{item.type}</p>
                <p className="text-xs text-slate-200 mb-1"><span className="font-bold text-emerald-400">✅ メリット：</span>{item.merit}</p>
                <p className="text-xs text-slate-200"><span className="font-bold text-orange-400">⚠️ デメリット：</span>{item.demerit}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            定率型は「諸費用は高いが毎月の返済が少し安くなる」、定額型は「諸費用は安いが毎月の返済がやや高い」。借入期間・借入額で総コストを比較することが重要です。
          </p>
        </section>

        <AffiliateCta
          program="kasaihoken"
          page="mansion-shohiyo"
          heading="諸費用のうち、火災保険料だけは自分で下げられる"
          title="一括見積もりで年間数千円〜1万円の差が出る"
          note="登記費用や仲介手数料は値切れませんが、火災保険は比較するだけで下がります。不動産会社に勧められたまま入ると割高になりがちです。"
        />

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📊 物件価格別・諸費用の目安
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">物件価格</th>
                  <th className="text-right px-4 py-3 font-bold text-blue-300 border-b border-slate-700">新築（3〜5%）</th>
                  <th className="text-right px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">中古（6〜10%）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { price: "2,500万円", new_low: "75万円", new_high: "125万円", used_low: "150万円", used_high: "250万円" },
                  { price: "3,000万円", new_low: "90万円", new_high: "150万円", used_low: "180万円", used_high: "300万円" },
                  { price: "4,000万円", new_low: "120万円", new_high: "200万円", used_low: "240万円", used_high: "400万円" },
                  { price: "5,000万円", new_low: "150万円", new_high: "250万円", used_low: "300万円", used_high: "500万円" },
                  { price: "7,000万円", new_low: "210万円", new_high: "350万円", used_low: "420万円", used_high: "700万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 font-bold text-white">{row.price}</td>
                    <td className="px-4 py-3 text-right text-blue-300 text-xs">{row.new_low}〜{row.new_high}</td>
                    <td className="px-4 py-3 text-right text-emerald-400 text-xs">{row.used_low}〜{row.used_high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">※概算目安。実際の諸費用は金融機関・物件・地域により変わります。</p>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💡 資金計画で見落としがちなポイント
          </h2>
          <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/20">
            <ul className="text-sm text-slate-200 space-y-3">
              {[
                "諸費用は原則「現金」が必要（ローンに組み込めないケースが多い）",
                "引っ越し費用・家電・家具購入費は別途50〜100万円を見込む",
                "マンションの管理費・修繕積立金の前払い分も準備が必要",
                "リノベーション・クリーニング費用（中古の場合、数十万〜数百万）",
                "固定資産税の年払いが1〜4月の引き渡しの場合は初年度から発生",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 font-black mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ━━ 統合：購入後の維持費 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏢 買ったあと毎月かかる維持費（管理費・修繕積立金）
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            諸費用が「一度きり」なのに対して、維持費は<strong className="text-white">住んでいる限り毎月かかり続けます</strong>。ここを軽視すると、ローンは払えても家計が回らなくなります。
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">専有面積</th>
                  <th className="text-right px-3 py-3 font-bold text-blue-300 border-b border-slate-700">管理費</th>
                  <th className="text-right px-3 py-3 font-bold text-amber-300 border-b border-slate-700">修繕積立金</th>
                  <th className="text-right px-3 py-3 font-bold text-white border-b border-slate-700">合計/月</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "〜50㎡", kanri: "1.0〜1.5万円", shuzen: "0.6〜1.2万円", total: "約1.6〜2.7万円" },
                  { size: "50〜70㎡", kanri: "1.2〜2.0万円", shuzen: "0.8〜1.5万円", total: "約2.0〜3.5万円" },
                  { size: "70〜90㎡", kanri: "1.5〜2.5万円", shuzen: "1.0〜2.0万円", total: "約2.5〜4.5万円" },
                  { size: "タワマン等", kanri: "2.0〜4.0万円", shuzen: "1.5〜3.0万円", total: "約3.5〜7.0万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-3 py-3 font-bold text-white text-xs">{row.size}</td>
                    <td className="px-3 py-3 text-right text-blue-300 text-xs">{row.kanri}</td>
                    <td className="px-3 py-3 text-right text-amber-300 text-xs">{row.shuzen}</td>
                    <td className="px-3 py-3 text-right font-bold text-white text-xs">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">※都内マンションの一般的な目安。共用設備（コンシェルジュ・ジム・プール等）が多いほど管理費は上がります。</p>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <p className="text-sm font-bold text-amber-300 mb-1">⚠️ 修繕積立金は「上がる前提」で考える</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              多くのマンションが段階増額積立方式を採用しており、築年数とともに修繕積立金は上昇します。購入時に月1万円でも、20年後には月2〜3万円になっているケースは珍しくありません。国交省ガイドラインの目安は<strong className="text-white">1㎡あたり月200〜300円</strong>。これを大きく下回る物件は、将来の値上げ幅が大きくなる可能性があります。
            </p>
          </div>
        </section>

        {/* ━━ 統合：固定資産税 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏛️ 毎年かかる固定資産税・都市計画税
          </h2>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20 mb-4">
            <p className="text-sm font-bold text-blue-200 mb-2">計算式</p>
            <div className="space-y-1 text-sm text-slate-100">
              <p>固定資産税 ＝ <strong className="text-blue-300">課税標準額 × 1.4%</strong></p>
              <p>都市計画税 ＝ <strong className="text-orange-400">課税標準額 × 0.3%</strong>（市街化区域）</p>
              <p className="text-xs text-slate-400 mt-2">※課税標準額のベースとなる固定資産税評価額は市場価格の約70%。住宅用地には軽減特例あり。</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">物件価格</th>
                  <th className="text-right px-3 py-3 font-bold text-blue-300 border-b border-slate-700">固定資産税</th>
                  <th className="text-right px-3 py-3 font-bold text-orange-400 border-b border-slate-700">都市計画税</th>
                  <th className="text-right px-3 py-3 font-bold text-white border-b border-slate-700">合計/年</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { price: "3,500万円", tax: "約10〜17万円", city: "約2〜3.5万円", total: "約13〜21万円" },
                  { price: "5,000万円", tax: "約14〜24万円", city: "約3〜5万円", total: "約17〜29万円" },
                  { price: "7,000万円", tax: "約20〜34万円", city: "約4〜7万円", total: "約24〜41万円" },
                  { price: "1億円", tax: "約29〜48万円", city: "約6〜10万円", total: "約35〜58万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-3 py-3 font-bold text-white text-xs">{row.price}</td>
                    <td className="px-3 py-3 text-right text-blue-300 text-xs">{row.tax}</td>
                    <td className="px-3 py-3 text-right text-orange-400 text-xs">{row.city}</td>
                    <td className="px-3 py-3 text-right font-bold text-white text-xs">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
            <p className="text-sm font-bold text-emerald-300 mb-1">🎁 新築は5年間、建物分が1/2に軽減</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              新築マンションは建物分の固定資産税が最初の5年間1/2に軽減されます（認定長期優良住宅は7年間）。裏を返すと<strong className="text-white">6年目から税額が上がる</strong>ということ。「6年目に急に高くなった」と驚かないよう、軽減終了後の金額も確認しておきましょう。
            </p>
          </div>
        </section>

        <AffiliateCta
          program="mogecheck"
          page="mansion-shohiyo"
          heading="維持費まで含めた「本当に払える額」で考える"
          title="住宅ローンは借入先で総返済額が数百万円変わる"
          note="管理費・修繕積立金・固定資産税を加えた住居費全体で見るなら、ローン金利は1円でも低いほうが効きます。"
        />

        {/* ━━ 統合：生涯コスト試算 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📐 総額シミュレーション：6,000万円・70㎡を10年保有した場合
          </h2>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-4">
            <div className="space-y-1.5 text-sm text-slate-300">
              <p className="text-xs font-bold text-slate-400 mb-2">■ 買うとき（一度きり）</p>
              <div className="flex justify-between"><span>諸費用（物件価格の約6%）</span><span className="font-semibold text-white">約360万円</span></div>
              <p className="text-xs font-bold text-slate-400 mt-3 mb-2">■ 住んでいる間（10年間）</p>
              <div className="flex justify-between"><span>管理費・修繕積立金（月3万円×120ヶ月）</span><span className="font-semibold text-white">約360万円</span></div>
              <div className="flex justify-between"><span>固定資産税・都市計画税（年25万円×10年）</span><span className="font-semibold text-white">約250万円</span></div>
              <div className="flex justify-between"><span>火災保険（5年一括×2回）</span><span className="font-semibold text-white">約20万円</span></div>
              <div className="flex justify-between border-t border-slate-700 pt-2 mt-2">
                <span className="font-bold">ローン返済とは別に必要な総額</span><span className="font-black text-amber-400">約990万円</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">月あたり換算（10年平均）</span><span className="font-black text-amber-400">約8.3万円/月</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            ローン返済に加えて<strong className="text-white">月8万円以上</strong>——これが「物件価格しか見ていなかった人」が最も驚くポイントです。予算は必ず「ローン＋維持費」の合計で考えてください。
          </p>
        </section>

        {/* ━━ ツールCTA ━━ */}
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-300 mb-1">🏠 維持費込みの「実質住居費」を試算</p>
          <p className="text-sm font-black text-white mb-2">無料診断で、無理なく買える価格がわかる</p>
          <p className="text-xs text-slate-400 mb-3">年収・頭金・管理費を入れるだけで、維持費を含めた実質的な住居費負担率と安全購入価格を自動計算します。</p>
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
          ※本記事は情報提供を目的としており、特定の金融商品・不動産物件の購入を推奨するものではありません。
          記載内容は執筆時点の情報に基づいており、金利・税制・市況は変動します。
          具体的な購入判断は、銀行・FP・不動産会社などの専門家にご相談ください。
        </p>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">諸費用込みの総予算で診断しよう</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・物件価格を入力して、諸費用を含めた資金計画が安全かチェックできます。</p>
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
            <Link href="/articles/tokyo-23ku-shisan-kachi-ranking" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🗺️</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">東京23区 マンション資産価値ランキング2026</span>
            </Link>
            <Link href="/articles/mansion-kounyu-nagare" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📋</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション購入の流れと手順【2026年版・初めてでも迷わない完全ガイド】</span>
            </Link>
            <Link href="/articles/tokyo-mansion-chuko-vs-shintiku" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🆚</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">都内マンション、中古と新築どっちがいい？価格差・選び方を解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
