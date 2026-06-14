import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンションデベロッパー大手のブランド比較｜三井・野村・東急・モリモト【2026年】｜30Lab",
  description:
    "マンション選びで意外と差が出るデベロッパー（売主）のブランド特徴を比較。三井不動産レジデンシャル・野村不動産・東急不動産・モリモトなど大手〜デザイナーズ系の強みと、資産価値の観点での見方を解説。気になる物件メモも随時更新。",
  keywords: [
    "マンション デベロッパー 比較",
    "マンション ブランド 一覧",
    "三井 野村 東急 マンション 違い",
    "モリモト ディアナコート",
    "マンション 売主 資産価値",
  ],
  openGraph: {
    title: "マンションデベロッパー大手のブランド比較｜三井・野村・東急・モリモト",
    description: "デベロッパー別のブランド特徴と資産価値の見方を比較。気になる物件メモも随時更新。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "マンションデベロッパー大手のブランド比較",
    description: "三井・野村・東急・モリモトなど主要デベロッパーのブランド特徴を比較。",
  },
};

interface Developer {
  name: string;
  brands: string;
  tier: string;
  tierColor: string;
  feature: string;
  asset: string;
}

// 公開されているブランド名・一般的な評価をもとにした編集メモ（特徴は一般論）
const DEVELOPERS: Developer[] = [
  {
    name: "三井不動産レジデンシャル",
    brands: "パークホームズ／パークコート（高級）／パークタワー／パークシティ（大規模）",
    tier: "最大手",
    tierColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    feature: "業界最大手。ブランド認知が高く、立地・規模・管理体制のバランスが良い。「パークコート」は都心一等地の高級ライン。",
    asset: "ブランド力ゆえ再販時の評価が安定しやすい。大規模物件は管理も整いやすく資産性で手堅い。",
  },
  {
    name: "野村不動産",
    brands: "プラウド（PROUD）／プラウドタワー",
    tier: "大手",
    tierColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    feature: "「プラウド」ブランドで設計品質・共用部・植栽などの作り込みに定評。住む人の満足度が高いと評価されることが多い。",
    asset: "ブランド指名買いも多く中古市場でも人気。立地を厳選する傾向で資産性は堅め。",
  },
  {
    name: "東急不動産",
    brands: "ブランズ（BRANZ）",
    tier: "大手",
    tierColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    feature: "「ブランズ」でデザイン性・上質感を打ち出す。東急沿線（城南・東横線方面）の開発に強み。",
    asset: "沿線ブランドと組み合わさるエリアでは資産性が出やすい。デザイン重視層に支持される。",
  },
  {
    name: "モリモト",
    brands: "ディアナコート／ピアース（PIACE）",
    tier: "デザイナーズ系",
    tierColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    feature: "「ディアナコート」に代表されるデザイナーズマンション。希少立地・意匠性の高さで根強いファンを持つ中堅。",
    asset: "供給数が少なく希少性が高い。デザイン・立地が刺されば中古でも価値が落ちにくいが、好みは分かれる。",
  },
  {
    name: "三菱地所レジデンス",
    brands: "ザ・パークハウス",
    tier: "最大手",
    tierColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    feature: "「ザ・パークハウス」で重厚感・品質を重視。財閥系の安心感とブランド力が強み。",
    asset: "三井と並ぶブランド力で再販評価が安定。都心・優良立地に強い。",
  },
  {
    name: "住友不動産",
    brands: "シティハウス／シティタワー",
    tier: "大手",
    tierColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    feature: "「シティタワー」で都心のタワーマンションに強い。ディスポーザーや充実した共用設備など仕様が手厚い傾向。",
    asset: "タワー・都心立地中心で資産性は立地依存。販売を急がず強気の価格設定で知られる。",
  },
];

// ───────────────────────────────────────────────
// 気になる物件メモ（運営者が随時更新）
// ※他社の物件情報の転載はせず、自分のコメント＋公式リンクで紹介する
// 追加するときは下の配列に { developer, name, area, comment, url } を足すだけ
// ───────────────────────────────────────────────
interface WatchItem {
  developer: string;
  name: string;
  area: string;
  comment: string;
  url?: string;
}

const WATCHLIST: WatchItem[] = [
  {
    developer: "（記入例）",
    name: "ここに気になる物件名",
    area: "エリア・最寄駅",
    comment: "実際に見て・調べて感じたことを自分の言葉でメモ。価格や設備の数字は公式情報で確認したものだけ書く。",
    url: undefined,
  },
];

const FAQ_ITEMS = [
  {
    q: "マンションはデベロッパー（売主）で選んでもいいですか？",
    a: "デベロッパーは品質・管理・ブランド力の目安になりますが、最終的には「立地・駅距離・管理状態」の方が資産価値への影響は大きいです。大手ブランドでも駅遠・管理不全なら価値は落ちますし、中堅でも希少立地なら評価されます。ブランドは判断材料の一つとして使うのが正解です。",
  },
  {
    q: "資産価値が落ちにくいのはどのデベロッパーですか？",
    a: "三井（パークコート等）・三菱（ザ・パークハウス）・野村（プラウド）など、ブランド認知が高く立地を厳選する大手は再販評価が安定しやすい傾向です。ただしブランドより「その物件が駅近・好立地か」が先。ブランドは同条件で比べるときの上乗せ要素と考えましょう。",
  },
  {
    q: "モリモトのようなデザイナーズ系はどうですか？",
    a: "ディアナコートに代表されるデザイナーズ系は、希少立地・意匠性で根強い人気があり、刺さる層には高く評価されます。一方でデザインの好みは分かれるため、万人受けする大規模物件よりは売却時の買い手が限定される可能性も。自分が住んで満足できるかを軸に選ぶのがおすすめです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "マンションデベロッパー大手のブランド比較｜三井・野村・東急・モリモト【2026年】",
  description: "主要デベロッパーのブランド特徴と資産価値の観点での見方を比較。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  mainEntityOfPage: "https://30lab.vercel.app/articles/mansion-developer-brand",
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

export default function MansionDeveloperBrandPage() {
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
          <span className="text-slate-300">デベロッパー ブランド比較</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">デベロッパー・ブランド</span>
          <span className="text-xs text-slate-500">2026年6月</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          マンション<span className="text-blue-400">デベロッパー大手</span>のブランド比較<br />
          三井・野村・東急・モリモト【2026年】
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          マンション選びでは立地や価格に目が行きがちですが、<strong className="text-white">どのデベロッパー（売主）が手がけた物件か</strong>も、品質・管理・将来の資産価値に意外と効いてきます。この記事では主要デベロッパーのブランド特徴を整理しつつ、私が個人的に「気になっている物件」もメモとして随時更新していきます。
        </p>

        {/* ━━ デベロッパー比較 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏗️ 主要デベロッパーのブランド特徴
          </h2>
          <div className="space-y-4">
            {DEVELOPERS.map((d) => (
              <div key={d.name} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-sm font-bold text-white">{d.name}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border shrink-0 ${d.tierColor}`}>{d.tier}</span>
                </div>
                <p className="text-xs text-blue-300 mb-2">🏷️ {d.brands}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-1">{d.feature}</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-emerald-400 font-bold">資産性：</span>{d.asset}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">※ブランド名は各社の公表情報。特徴・資産性は一般的な評価をもとにした編集メモであり、個別物件の価値を保証するものではありません。</p>
        </section>

        {/* ━━ ブランドより大事なこと ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ⚖️ ブランドより「立地・管理」が先
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            デベロッパーのブランドは安心材料になりますが、資産価値への影響度で言えば<strong className="text-white">「駅距離・再開発・管理状態」の方が大きい</strong>のが実際です。大手ブランドでも駅遠・管理不全なら値下がりしますし、中堅でも希少立地なら評価されます。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            おすすめの使い方は、<strong className="text-white">立地・予算で候補を絞ったあと、同条件ならブランドで比較する</strong>順番。ブランドを起点に予算を歪めるのではなく、価値を見極める一つの軸として活用しましょう。
          </p>
        </section>

        {/* ━━ 気になる物件メモ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📝 気になる物件メモ（随時更新）
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            個人的に気になっている・話題になっている物件を、自分の視点でメモしています。物件情報の転載はせず、感想と公式情報へのリンクのみ。順次追加していきます。
          </p>
          <div className="space-y-3">
            {WATCHLIST.map((w, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded border border-purple-500/25 shrink-0">{w.developer}</span>
                  <span className="text-sm font-bold text-white">{w.name}</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">📍 {w.area}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{w.comment}</p>
                {w.url && (
                  <a href={w.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs font-bold text-blue-400 hover:text-blue-300">公式情報を見る →</a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ━━ 診断ツールCTA ━━ */}
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-300 mb-1">🏠 気になる物件、まず「自分に買えるか」を確認</p>
          <p className="text-sm font-black text-white mb-2">無料診断で安全購入価格 → 物件の坪単価もチェック</p>
          <p className="text-xs text-slate-400 mb-3">ブランドや見た目で惹かれた物件こそ、冷静に「無理なく買える価格か」「坪単価は相場か」を数字で確認しましょう。</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href="/mansion" className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-4 py-3 rounded-xl transition-colors">
              🏠 安全購入価格を診断する →
            </Link>
            <Link href="/check" className="flex-1 inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-sm px-4 py-3 rounded-xl border border-slate-600 transition-colors">
              🔍 物件の坪単価を診断する
            </Link>
          </div>
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
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-xl flex-shrink-0">🏠</div>
            <div className="flex-1">
              <p className="font-bold text-white text-sm">たろう｜都内マンション研究中</p>
              <p className="text-xs text-slate-400 mt-0.5">大企業勤務・アラサー・東京都在住</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                「年収はある程度あるが、都内マンションを本当に買っていいか判断できない」という自身の経験からこのサイトを制作。複数の不動産会社・銀行・FPへのヒアリングをもとにコンテンツを作成しています。
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
          ※本記事は情報提供を目的としており、特定のデベロッパー・物件の購入を推奨するものではありません。ブランドの特徴・評価は一般的な見解を含む編集メモであり、個別物件の品質・資産価値を保証するものではありません。実際の購入判断は専門家にご相談ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/tokyo-23ku-shisan-kachi-ranking" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🗺️</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">東京23区 マンション資産価値ランキング2026</span>
            </Link>
            <Link href="/articles/mansion-baibai-shisan-kachi" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">資産価値が落ちにくいマンションの条件とは？</span>
            </Link>
            <Link href="/articles/mansion-kounyu-checklist" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">✅</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション購入チェックリスト｜契約前に必ず確認すべき15項目</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
