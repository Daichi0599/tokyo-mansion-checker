import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンは変動金利と固定金利どっちがいい？2026年版の選び方｜30Lab",
  description:
    "住宅ローンの変動金利と固定金利の違いを徹底比較。2026年の金利動向をふまえ、どちらが得か・どんな人に向いているかをシミュレーション付きで解説。金利タイプ別の総返済額シミュレーションも確認できます。",
  keywords: [
    "住宅ローン 変動金利 固定金利 どっち",
    "住宅ローン 変動 固定 比較",
    "住宅ローン 金利 選び方 2026",
    "変動金利 リスク",
    "固定金利 フラット35",
  ],
  openGraph: {
    title: "住宅ローンは変動金利と固定金利どっちがいい？2026年版の選び方",
    description: "2026年の金利動向・シミュレーション・タイプ別おすすめを解説。変動vs固定の総返済額比較付き。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "住宅ローンは変動金利と固定金利どっちがいい？2026年版の選び方",
    description: "2026年の金利動向・総返済額シミュレーション・タイプ別おすすめを解説。",
  },
};

const FAQ_ITEMS = [
  {
    q: "フラット35（固定）と変動金利はどっちがいいですか？",
    a: "金利上昇リスクを取りたくない・繰り上げ返済をあまりしない人にはフラット35などの固定が向きます。一方、低金利を活かして早期に元本を減らせる人や、金利が2%まで上がっても返済比率が安全圏に収まる人は変動が有利になりやすいです。まずは「固定2%でも返せるか」を基準に判断しましょう。",
  },
  {
    q: "2026年は変動金利と固定金利どちらを選ぶべきですか？",
    a: "2024年以降の日銀利上げで変動金利も緩やかに上昇傾向ですが、依然として変動（0.4〜0.6%前後）と固定（1.5〜2.0%前後）には1%以上の差があります。総返済額では変動が有利な状況が続いていますが、金利上昇に耐えられる返済計画かどうかが選択の分かれ目です。",
  },
  {
    q: "変動金利はどのくらい上がる可能性がありますか？",
    a: "将来の金利は誰にも予測できませんが、リスク管理としては「2%まで上昇した場合」で返済比率を試算しておくのが定石です。変動金利には返済額の急増を抑える125%ルール・5年ルールがありますが、未払い利息が積み上がるリスクもあるため過信は禁物です。",
  },
  {
    q: "金利タイプは途中で変更できますか？",
    a: "多くの金融機関で変動→固定への変更は可能ですが、固定→変動は不可だったり手数料がかかる場合があります。借り換え（他行への乗り換え）であれば自由に選べますが、諸費用がかかるため金利差とのバランスで判断します。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "住宅ローンは変動金利と固定金利どっちがいい？2026年版の選び方",
  description:
    "変動金利と固定金利の違いを比較。2026年の金利動向をふまえ、どちらが得か・どんな人に向いているかを解説。",
  author: {
    "@type": "Person",
    name: "たろう｜都内マンション研究中",
    url: "https://x.com/30lab_jp",
  },
  publisher: {
    "@type": "Organization",
    name: "30Lab",
    url: "https://30lab.vercel.app",
  },
  datePublished: "2026-04-10",
  dateModified: "2026-06-12",
  mainEntityOfPage: "https://30lab.vercel.app/articles/jutaku-loan-hendokinri-koteikinri",
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

export default function JutakuLoanHendoKoteiPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">変動金利vs固定金利</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">金利・住宅ローン</span>
          <span className="text-xs text-slate-500">2026年6月更新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          住宅ローンは<span className="text-blue-400">変動金利と固定金利</span><br />
          どっちがいい？2026年の選び方
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          住宅ローンを検討するとき、多くの人が悩む「変動か固定か」問題。2024年に日本銀行が利上げに踏み切り、変動金利への不安が高まっています。この記事では2026年時点での金利動向をふまえ、それぞれの特徴と選び方を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📋 変動金利と固定金利の基本的な違い
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">項目</th>
                  <th className="text-center px-4 py-3 font-bold text-blue-300 border-b border-slate-700">変動金利</th>
                  <th className="text-center px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">固定金利</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "2026年の金利水準", hendo: "0.4〜0.6%前後", kotei: "1.5〜2.0%前後（フラット35等）" },
                  { label: "返済額の変動", hendo: "金利上昇で増える", kotei: "借入時から変わらない" },
                  { label: "月返済額（4,000万・35年）", hendo: "約10.5万円", kotei: "約12.8万円" },
                  { label: "総返済額（金利据え置き想定）", hendo: "約4,400万円", kotei: "約5,370万円" },
                  { label: "金利上昇リスク", hendo: "あり", kotei: "なし" },
                  { label: "向いている人", hendo: "繰り上げ返済できる・収入安定", kotei: "安心感重視・長期計画派" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 text-xs font-semibold text-slate-200">{row.label}</td>
                    <td className="px-4 py-3 text-center text-xs text-blue-300">{row.hendo}</td>
                    <td className="px-4 py-3 text-center text-xs text-emerald-400">{row.kotei}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">※2026年6月時点の参考値。金融機関・審査状況により異なります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📈 2026年の金利動向：変動は本当に上がるのか
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            2024年、日本銀行は約17年ぶりに政策金利を引き上げました。住宅ローンの変動金利は短期プライムレートに連動するため、今後も段階的な上昇が見込まれています。
          </p>
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-300 mb-2">📌 金利上昇シミュレーション（借入4,000万・35年）</p>
            <div className="space-y-2">
              {[
                { rate: "現状 0.5%", monthly: "約10.4万円", total: "約4,370万円" },
                { rate: "1.0%に上昇", monthly: "約11.3万円", total: "約4,740万円" },
                { rate: "2.0%に上昇", monthly: "約13.2万円", total: "約5,540万円" },
                { rate: "3.0%に上昇", monthly: "約15.2万円", total: "約6,390万円" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between text-xs text-orange-400">
                  <span className="font-semibold">{row.rate}</span>
                  <span>月{row.monthly} / 総額{row.total}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            金利が2%まで上昇すると、月返済額が約2.8万円増加します。「それでも返済できるか」を事前にシミュレーションしておくことが重要です。
          </p>
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
            🤔 どちらを選ぶべきか？タイプ別診断
          </h2>
          <div className="space-y-3">
            {[
              {
                type: "変動金利が向いている人",
                icon: "🔵",
                bg: "bg-blue-500/10 border-blue-500/30",
                items: [
                  "繰り上げ返済を積極的に行える貯蓄力がある",
                  "収入が安定していて将来的にも下がりにくい",
                  "金利上昇時も家計に余裕がある（月3〜4万増でも対応可能）",
                  "借入期間が比較的短い（10〜20年）",
                ],
              },
              {
                type: "固定金利が向いている人",
                icon: "🟢",
                bg: "bg-green-500/10 border-green-500/30",
                items: [
                  "毎月の返済額を確定させて生活設計したい",
                  "共働きで一方の収入がなくなるリスクが高い",
                  "子育て・教育費などで家計の余裕が少ない",
                  "自営業・フリーランスなど収入が不安定",
                ],
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-white mb-2">{item.icon} {item.type}</p>
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
            ✅ 結論：2026年の現実的な判断基準
          </h2>
          <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/20 mb-4">
            <ul className="text-sm text-slate-200 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black mt-0.5">1</span>
                <div>
                  <p className="font-bold">「固定金利2%でも返せるか」を必ず確認する</p>
                  <p className="text-xs text-slate-400 mt-0.5">変動で借りても、2%まで上昇した場合の月返済額で返済比率を計算しておく。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black mt-0.5">2</span>
                <div>
                  <p className="font-bold">繰り上げ返済できないなら固定を検討</p>
                  <p className="text-xs text-slate-400 mt-0.5">変動金利のメリットを活かすには、低金利の間に元本を減らすことが前提。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black mt-0.5">3</span>
                <div>
                  <p className="font-bold">複数の金融機関を比較する</p>
                  <p className="text-xs text-slate-400 mt-0.5">同じ変動・固定でも金融機関によって0.5〜1%以上の差があることも。</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

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

        {/* ━━ モゲチェックCTA ━━ */}
        <div className="border-2 border-amber-400 bg-amber-50 rounded-2xl p-5 mb-6">
          <p className="text-sm font-black text-amber-800 mb-1">💡 変動 or 固定を選ぶ前に、まず「最安金利はいくらか」を確認しましょう</p>
          <p className="text-xs text-amber-700 mb-3">金利タイプだけでなく、銀行によって金利は大きく異なります。複数行を比較してから決めるのがベスト。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
          >
            ✨ 複数銀行の金利を無料で一括比較する →
          </a>
          <p className="text-xs text-amber-600 text-center mt-2">累計100万件超の診断実績 | 提携金融機関50行以上</p>
          <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "none" }} />
        </div>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">金利別の返済シミュレーションを試す</p>
          <p className="text-xs mb-4 opacity-90">変動・固定それぞれの金利を入力して、月返済額と返済比率をすぐに確認。</p>
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
            <Link href="/articles/mansion-nenshu-nanbai" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📐</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンションは年収の何倍まで買える？適正な倍率を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-shinsa-nenshu" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🔎</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローン審査の年収基準は？通るための条件と落ちる理由を解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
