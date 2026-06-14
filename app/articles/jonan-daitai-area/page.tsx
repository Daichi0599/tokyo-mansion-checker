import type { Metadata } from "next";
import Link from "next/link";
import { TOKYO_AREAS } from "@/lib/areaData";

export const metadata: Metadata = {
  title: "城南エリアの代わりになる街は？代替候補5エリアを比較【2026年】｜30Lab",
  description:
    "品川・目黒・大田・世田谷の城南エリアが高くて買えない人向けに、代わりの候補となる5エリア（大田区・武蔵小杉・川崎・日吉綱島・品川区西部）を城南っぽさ・価格・都心アクセス・資産性で比較。予算内で城南的な暮らしを実現する現実解を解説します。",
  keywords: [
    "城南 代わり エリア",
    "武蔵小杉 城南 代替",
    "城南 買えない 代替エリア",
    "城南っぽい 街 安い",
    "品川 アクセス 安い エリア マンション",
  ],
  openGraph: {
    title: "城南エリアの代わりになる街は？代替候補5エリアを比較【2026年】",
    description: "城南が高くて買えない人へ。代替候補5エリアを城南っぽさ・価格・アクセス・資産性で比較。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "城南エリアの代わりになる街は？代替候補5エリアを比較",
    description: "代替候補5エリアを城南っぽさ・価格・アクセス・資産性で比較。予算内で城南的な暮らしを。",
  },
};

type Rating = "◎" | "○" | "△";
const RATING_COLOR: Record<Rating, string> = {
  "◎": "text-emerald-400",
  "○": "text-blue-400",
  "△": "text-slate-400",
};

interface Candidate {
  name: string;
  area: string;
  jonan: Rating;     // 城南っぽさ
  price: Rating;     // 価格の手頃さ
  access: Rating;    // 都心アクセス
  asset: Rating;     // 資産性
  priceNote: string; // 価格の目安（データ有無を明示）
  pro: string;
  con: string;
}

const ota = TOKYO_AREAS.find((a) => a.name === "大田区")!;
const shinagawa = TOKYO_AREAS.find((a) => a.name === "品川区")!;

const CANDIDATES: Candidate[] = [
  {
    name: "大田区（蒲田・大森）",
    area: "東京都・城南内",
    jonan: "◎", price: "○", access: "○", asset: "○",
    priceNote: `区平均 約${Math.round(ota.avgPricePerSqm * 3.3).toLocaleString()}万円/坪（城南で最も手頃／実データ）`,
    pro: "城南そのもの。ブランドを保ちつつ城南内で最も価格が抑えめ。品川へのアクセスも良い。",
    con: "田園調布など高額エリアと混在。蒲田・大森など現実的な駅に絞る必要がある。",
  },
  {
    name: "品川区西部（西大井・大井町）",
    area: "東京都・城南内",
    jonan: "◎", price: "△", access: "◎", asset: "◎",
    priceNote: `区平均 約${Math.round(shinagawa.avgPricePerSqm * 3.3).toLocaleString()}万円/坪（西部は大崎・武蔵小山より割安寄り／実データは区平均）`,
    pro: "城南内かつ上昇トレンド。品川・東京方面へのアクセスが極めて良く資産性も高い。",
    con: "城南内のため価格は高め。大井町は再開発で人気が上がり割安感は薄れつつある。",
  },
  {
    name: "武蔵小杉（川崎市中原区）",
    area: "神奈川県",
    jonan: "○", price: "△", access: "◎", asset: "◎",
    priceNote: "新築タワマンは城南A区に迫る／中古は手が届きやすい（目安・要確認）",
    pro: "横須賀線で品川直結、東横線で渋谷直通。再開発で街が整備され資産性も強い。",
    con: "新築タワマンは高騰。人気ゆえ価格はもはや割安とは言いにくい。武蔵小杉駅周辺は混雑も。",
  },
  {
    name: "川崎（川崎市川崎区）",
    area: "神奈川県",
    jonan: "△", price: "◎", access: "◎", asset: "○",
    priceNote: "城南主要区より明確に安いことが多い（目安・要確認）",
    pro: "品川まで10分台で価格は大きく抑えめ。再開発が進み利便性は年々向上。",
    con: "「城南の落ち着き」とは雰囲気が異なる。エリアによって街の印象差が大きい。",
  },
  {
    name: "日吉・綱島（横浜市港北区）",
    area: "神奈川県",
    jonan: "○", price: "○", access: "○", asset: "○",
    priceNote: "武蔵小杉より手頃なことが多い（目安・要確認）",
    pro: "東横線で渋谷直通、落ち着いた住環境。城南的な「住みやすさ」を予算内で得やすい。",
    con: "品川方面へは乗り換えが必要。都心まではやや距離があり通勤先による。",
  },
];

const FAQ_ITEMS = [
  {
    q: "城南エリアの代わりに最もおすすめなのはどこですか？",
    a: "「城南内でブランドを保ちたい」なら大田区（蒲田・大森）、「予算最優先で都心アクセスを取る」なら川崎、「資産性と利便性のバランス」なら武蔵小杉が候補です。何を優先するかで最適解が変わるため、まず自分の安全購入価格を出してから絞り込むのがおすすめです。",
  },
  {
    q: "武蔵小杉は城南の代わりになりますか？",
    a: "アクセスと資産性の面では十分に代替候補になります。横須賀線で品川に直結し、再開発で街も整備されています。ただし新築タワーマンションは価格が高騰しており「安く城南の代わり」とは言いにくい状況。中古や築浅で探すと予算内に収まりやすくなります。",
  },
  {
    q: "神奈川エリアの価格はなぜ目安表記なのですか？",
    a: "本記事の坪単価の実データは東京23区のものに限られるため、川崎・横浜方面については断定的な数値を避け、城南主要区との相対的な目安として記載しています。実際の価格は物件・駅・築年で大きく異なるため、必ず最新の物件情報でご確認ください。",
  },
  {
    q: "代替エリアでも資産価値は落ちませんか？",
    a: "代替エリアでも「駅近・再開発・管理状態」という値下がりしにくい条件は共通です。武蔵小杉や川崎のように再開発で人気が高まるエリアは資産性が期待できます。エリア名だけでなく、物件単位で資産性条件を満たすかを確認することが重要です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "城南エリアの代わりになる街は？代替候補5エリアを比較【2026年】",
  description:
    "城南が高くて買えない人向けに、代替候補5エリアを城南っぽさ・価格・都心アクセス・資産性で比較。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  mainEntityOfPage: "https://30lab.vercel.app/articles/jonan-daitai-area",
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

function RatingCell({ r }: { r: Rating }) {
  return <span className={`font-bold ${RATING_COLOR[r]}`}>{r}</span>;
}

export default function JonanDaitaiAreaPage() {
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
          <span className="text-slate-300">城南の代替エリア比較</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">エリア・資産価値</span>
          <span className="text-xs text-slate-500">2026年6月</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          <span className="text-blue-400">城南エリアの代わり</span>になる街は？<br />
          代替候補5エリアを比較【2026年】
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          品川・目黒・大田・世田谷の城南エリアに憧れるけれど、価格が高すぎて手が届かない——。そんなとき大事なのは「城南を諦める」ことではなく、<strong className="text-white">城南の魅力を分解して、それを予算内で満たせる街を探す</strong>ことです。城南の価値を「①都心アクセス ②落ち着いた住環境 ③資産性」の3つに分け、代替候補となる5エリアを比較しました。
        </p>

        {/* ━━ 比較表 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🗺️ 城南の代替候補5エリア 比較表
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-2 py-3 font-bold text-slate-200 border-b border-slate-700 text-xs">エリア</th>
                  <th className="text-center px-1 py-3 font-bold text-slate-200 border-b border-slate-700 text-xs">城南<br />っぽさ</th>
                  <th className="text-center px-1 py-3 font-bold text-slate-200 border-b border-slate-700 text-xs">価格<br />手頃さ</th>
                  <th className="text-center px-1 py-3 font-bold text-slate-200 border-b border-slate-700 text-xs">都心<br />アクセス</th>
                  <th className="text-center px-1 py-3 font-bold text-slate-200 border-b border-slate-700 text-xs">資産性</th>
                </tr>
              </thead>
              <tbody>
                {CANDIDATES.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-2 py-3">
                      <span className="font-bold text-white text-xs">{c.name}</span>
                      <span className="block text-slate-500 text-xs">{c.area}</span>
                    </td>
                    <td className="px-1 py-3 text-center"><RatingCell r={c.jonan} /></td>
                    <td className="px-1 py-3 text-center"><RatingCell r={c.price} /></td>
                    <td className="px-1 py-3 text-center"><RatingCell r={c.access} /></td>
                    <td className="px-1 py-3 text-center"><RatingCell r={c.asset} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            ◎ 高い ／ ○ 標準 ／ △ やや弱い。編集部による相対評価（目安）です。坪単価の実データは東京23区のみで、神奈川エリアは城南主要区との相対的な目安として評価しています。
          </p>
        </section>

        {/* ━━ 各エリア解説 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📍 各エリアの特徴と向き・不向き
          </h2>
          <div className="space-y-4">
            {CANDIDATES.map((c) => (
              <div key={c.name} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-sm font-bold text-white">{c.name}</p>
                  <span className="text-xs text-slate-500 shrink-0">{c.area}</span>
                </div>
                <p className="text-xs text-blue-300 mb-2">💴 {c.priceNote}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-1">
                  <span className="text-emerald-400 font-bold">◎ 強み：</span>{c.pro}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-amber-400 font-bold">△ 注意：</span>{c.con}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ 診断ツールCTA ━━ */}
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-300 mb-1">🏠 候補が見えたら、次は「自分に買える価格」を確認</p>
          <p className="text-sm font-black text-white mb-2">無料診断で安全購入価格 → どのエリアが射程内かわかる</p>
          <p className="text-xs text-slate-400 mb-3">年収・頭金を入れるだけで「無理なく買える価格」を算出。代替エリアのどこが現実的かを数字で判断できます。</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href="/mansion" className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-4 py-3 rounded-xl transition-colors">
              🏠 安全購入価格を診断する →
            </Link>
            <Link href="/check" className="flex-1 inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-sm px-4 py-3 rounded-xl border border-slate-600 transition-colors">
              🔍 気になる物件を診断する
            </Link>
          </div>
        </div>

        {/* ━━ 選び方の結論 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ✅ 何を優先するかで「正解」は変わる
          </h2>
          <div className="space-y-3">
            {[
              { type: "城南のブランドを保ちたい", ans: "大田区（蒲田・大森）", reason: "城南内にとどまりつつ価格を抑えられる唯一に近い選択肢。" },
              { type: "予算を最優先したい", ans: "川崎", reason: "品川アクセスを維持しながら価格を大きく下げられる。" },
              { type: "資産性と利便性のバランス", ans: "武蔵小杉・品川区西部", reason: "再開発・直通アクセスで将来も安定。ただし価格はやや高め。" },
              { type: "落ち着いた住環境重視", ans: "日吉・綱島", reason: "東横線で渋谷直通、住みやすさを予算内で得やすい。" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-white mb-0.5">「{item.type}」なら</p>
                <p className="text-sm font-bold text-blue-300 mb-1">→ {item.ans}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mt-4">
            どの街を選ぶにしても、順番は同じです。<strong className="text-white">まず自分の安全購入価格を知り、その範囲で「城南の魅力をどれだけ満たせるか」で比較する</strong>。エリア名のブランドに引きずられず、価値で選べば後悔が減ります。
          </p>
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
          ※本記事は情報提供を目的としており、特定のエリア・物件の購入を推奨するものではありません。評価は編集部の主観を含む目安であり、坪単価・資産性は将来の価格を保証するものではありません。神奈川エリアの価格は概況であり、実際の購入判断は最新の物件情報と専門家への相談をもとに行ってください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/jonan-mansion-takakute-kaenai" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏙️</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">城南エリアのマンションが高くて買えない人へ</span>
            </Link>
            <Link href="/articles/tokyo-23ku-shisan-kachi-ranking" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🗺️</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">東京23区 マンション資産価値ランキング2026</span>
            </Link>
            <Link href="/articles/mansion-baibai-shisan-kachi" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">資産価値が落ちにくいマンションの条件とは？</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
