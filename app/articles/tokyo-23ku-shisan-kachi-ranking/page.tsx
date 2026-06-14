import type { Metadata } from "next";
import Link from "next/link";
import { TOKYO_AREAS } from "@/lib/areaData";

export const metadata: Metadata = {
  title: "東京23区 マンション資産価値ランキング2026｜坪単価・値下がりしにくい区を一覧解説｜30Lab",
  description:
    "東京23区のマンション資産価値を坪単価・資産性グレード（S〜D）・価格トレンドで一覧ランキング。値下がりしにくい区の条件と、エリア選びで失敗しないための判断軸を解説。診断ツールであなたの予算で買えるエリアも確認できます。",
  keywords: [
    "東京 マンション 資産価値 ランキング",
    "23区 資産価値 高い",
    "値下がりしにくい マンション エリア",
    "東京 マンション 坪単価 区",
    "資産価値 落ちにくい 区",
  ],
  openGraph: {
    title: "東京23区 マンション資産価値ランキング2026｜値下がりしにくい区を一覧解説",
    description: "坪単価・資産性グレード・価格トレンドで23区を一覧ランキング。エリア選びの判断軸を解説。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "東京23区 マンション資産価値ランキング2026",
    description: "坪単価・資産性グレード・トレンドで23区を一覧。値下がりしにくい区の条件も解説。",
  },
};

const GRADE_STYLE: Record<string, { badge: string; label: string }> = {
  S: { badge: "bg-purple-500/20 text-purple-300 border border-purple-500/30", label: "最上位" },
  A: { badge: "bg-blue-500/20 text-blue-300 border border-blue-500/30", label: "上位" },
  B: { badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30", label: "中位" },
  C: { badge: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30", label: "標準" },
  D: { badge: "bg-slate-600/40 text-slate-300 border border-slate-600", label: "割安" },
};

const TREND = {
  up: { icon: "↑", color: "text-emerald-400", label: "上昇" },
  flat: { icon: "→", color: "text-slate-400", label: "横ばい" },
  down: { icon: "↓", color: "text-red-400", label: "下落" },
} as const;

const FAQ_ITEMS = [
  {
    q: "東京23区で資産価値が落ちにくいのはどの区ですか？",
    a: "港区・渋谷区・千代田区（資産性グレードS）が最上位で、価格トレンドも上昇傾向です。次いで目黒区・中央区・品川区などのAグレードが続きます。これらは駅近・再開発・住所のブランド力・希少性という「値下がりしにくい4条件」を高い水準で満たしています。",
  },
  {
    q: "坪単価が高い区を選べば資産価値は安全ですか？",
    a: "坪単価の高さと資産価値の落ちにくさは概ね相関しますが、同じ区でも駅距離・築年数・管理状態で大きく変わります。高い坪単価のエリアで無理な予算を組むより、自分の安全購入価格の範囲で資産性条件を満たす物件を選ぶ方が、家計と資産性のバランスは良くなります。",
  },
  {
    q: "予算が限られている場合、どのエリアを狙えばいいですか？",
    a: "Bグレード（世田谷・台東・豊島・中野など）には、上昇トレンドかつ坪単価が中位のエリアが含まれます。再開発が進む区や、利便性の割に価格が抑えめな区は、予算と資産性のバランスが取りやすい狙い目です。診断ツールで自分の安全購入価格を出し、その範囲で買えるエリアを絞り込むのがおすすめです。",
  },
  {
    q: "このランキングの坪単価はどのように算出していますか？",
    a: "2024年時点の区別の平均㎡単価をもとにした推計値です。実際の価格は同じ区内でも駅距離・築年数・規模・グレードにより大きく異なります。本記事は大まかな相場感とエリア比較の判断材料としてご利用ください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "東京23区 マンション資産価値ランキング2026｜坪単価・値下がりしにくい区を一覧解説",
  description:
    "東京23区のマンション資産価値を坪単価・資産性グレード・価格トレンドで一覧ランキング。値下がりしにくい区の条件を解説。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  mainEntityOfPage: "https://30lab.vercel.app/articles/tokyo-23ku-shisan-kachi-ranking",
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

export default function Tokyo23kuShisanKachiRankingPage() {
  const ranked = [...TOKYO_AREAS].sort((a, b) => b.avgPricePerSqm - a.avgPricePerSqm);

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
          <span className="text-slate-300">23区 資産価値ランキング</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">エリア・資産価値</span>
          <span className="text-xs text-slate-500">2026年6月</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          東京23区<span className="text-blue-400">マンション資産価値ランキング</span>2026<br />
          坪単価・値下がりしにくい区を一覧解説
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          マンション購入で「無理なく買えるか」と並んで重要なのが「<strong className="text-white">買った後に価値が落ちないか</strong>」。この記事では東京23区を坪単価・資産性グレード（S〜D）・価格トレンドで一覧ランキングし、値下がりしにくい区の共通条件を整理します。表のデータは当サイトの診断ツールと同じものを使っているので、記事で目星をつけたら、そのまま<strong className="text-white">自分の予算で買えるエリア</strong>を診断で確認できます。
        </p>

        {/* ━━ ランキング表 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🗺️ 東京23区 資産価値ランキング一覧
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-2 py-3 font-bold text-slate-200 border-b border-slate-700">#</th>
                  <th className="text-left px-2 py-3 font-bold text-slate-200 border-b border-slate-700">区</th>
                  <th className="text-center px-2 py-3 font-bold text-slate-200 border-b border-slate-700">グレード</th>
                  <th className="text-right px-2 py-3 font-bold text-blue-300 border-b border-slate-700">坪単価</th>
                  <th className="text-center px-2 py-3 font-bold text-slate-200 border-b border-slate-700">傾向</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((area, i) => {
                  const tsubo = Math.round(area.avgPricePerSqm * 3.3);
                  const t = TREND[area.trend];
                  return (
                    <tr key={area.name} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                      <td className="px-2 py-3 text-slate-500 text-xs">{i + 1}</td>
                      <td className="px-2 py-3">
                        <span className="font-bold text-white text-xs">{area.name}</span>
                        <span className="hidden sm:inline text-slate-500 text-xs ml-1">{area.desc}</span>
                      </td>
                      <td className="px-2 py-3 text-center">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${GRADE_STYLE[area.assetGrade].badge}`}>{area.assetGrade}</span>
                      </td>
                      <td className="px-2 py-3 text-right text-blue-300 font-semibold text-xs whitespace-nowrap">{tsubo.toLocaleString()}万/坪</td>
                      <td className={`px-2 py-3 text-center font-bold ${t.color}`}>{t.icon}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 mb-2">
            <span><span className="text-purple-300 font-bold">S</span> 最上位</span>
            <span><span className="text-blue-300 font-bold">A</span> 上位</span>
            <span><span className="text-emerald-300 font-bold">B</span> 中位</span>
            <span><span className="text-yellow-300 font-bold">C</span> 標準</span>
            <span><span className="text-slate-300 font-bold">D</span> 割安</span>
            <span className="text-emerald-400">↑上昇</span>
            <span className="text-slate-400">→横ばい</span>
          </div>
          <p className="text-xs text-slate-500">※坪単価は2024年時点の区別平均㎡単価×3.3の推計値。同一区内でも駅距離・築年数・規模で大きく異なります。</p>
        </section>

        {/* ━━ 値下がりしにくい条件 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🔑 値下がりしにくいマンションの4条件
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            上位グレードの区に共通するのは、次の4つを高い水準で満たしていることです。区を選ぶだけでなく、この条件で<strong className="text-white">物件単位</strong>でも見ていくと精度が上がります。
          </p>
          <div className="space-y-3">
            {[
              { no: 1, title: "駅徒歩（近いほど強い）", body: "徒歩7分以内が一つの目安。10分を超えると同じ区内でも資産性の下落幅が大きくなりやすい。将来の売却・賃貸のしやすさに直結します。" },
              { no: 2, title: "再開発・将来性", body: "再開発計画・新駅・大型商業施設の予定があるエリアは、現在の価格が割安でも将来上昇する余地がある。台東区・中野区・足立区（北千住）などの上昇トレンドはこの典型です。" },
              { no: 3, title: "住所のブランド力・希少性", body: "港区・渋谷区・千代田区のように供給が限られ需要が安定する地域は、景気後退局面でも価格が崩れにくい。坪単価が高いのはこの希少性の裏返しです。" },
              { no: 4, title: "管理状態・規模", body: "区や立地が良くても、管理組合が機能していない・修繕積立金が不足しているマンションは資産価値を落とします。総戸数が多い大規模物件ほど管理が安定しやすい傾向。" },
            ].map((item) => (
              <div key={item.no} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-white mb-1">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-extrabold mr-2">{item.no}</span>
                  {item.title}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ 診断ツールCTA（本体導線） ━━ */}
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-300 mb-1">🏠 まず「自分がどのグレードの区を狙えるか」を知る</p>
          <p className="text-sm font-black text-white mb-2">無料診断で安全購入価格 → 買えるエリアがわかる</p>
          <p className="text-xs text-slate-400 mb-3">年収・頭金を入れるだけで「無理なく買える価格」を算出。その金額で23区のどこが射程内かをエリア比較で確認できます。</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href="/mansion" className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-4 py-3 rounded-xl transition-colors">
              🏠 安全購入価格を診断する →
            </Link>
            <Link href="/check" className="flex-1 inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-sm px-4 py-3 rounded-xl border border-slate-600 transition-colors">
              🔍 物件の坪単価を診断する
            </Link>
          </div>
        </div>

        {/* ━━ グレード別の狙い方 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🎯 予算別・エリアの狙い方
          </h2>
          <div className="space-y-3">
            {[
              { grade: "S・Aグレード", color: "border-purple-500/40 bg-purple-500/10", text: "text-purple-300", body: "資産性は最強だが坪単価も高い。世帯年収が高い・頭金を厚く積める層向け。無理な予算で背伸びすると家計が圧迫されるため、安全購入価格の範囲に収まるかを必ず確認。" },
              { grade: "Bグレード", color: "border-emerald-500/40 bg-emerald-500/10", text: "text-emerald-300", body: "資産性と価格のバランスが最も取りやすいゾーン。上昇トレンドの区（台東・豊島・中野など）は、利便性の割に価格が抑えめで狙い目。多くの共働き世帯の現実的な選択肢。" },
              { grade: "C・Dグレード", color: "border-yellow-500/40 bg-yellow-500/10", text: "text-yellow-300", body: "坪単価が割安で予算を抑えやすい。ただし駅近・再開発エリアに絞らないと資産性が落ちやすい。足立区（北千住）のように上昇トレンドの個別エリアを見極めるのが鍵。" },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border-2 p-4 ${item.color}`}>
                <p className={`text-sm font-bold mb-1 ${item.text}`}>{item.grade}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
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
          ※本記事は情報提供を目的としており、特定の物件・エリアの購入を推奨するものではありません。坪単価・資産性グレード・トレンドは推計であり、将来の価格を保証するものではありません。実際の購入判断は専門家にご相談ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/mansion-baibai-shisan-kachi" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">資産価値が落ちにくいマンションの条件とは？立地・築年数で解説</span>
            </Link>
            <Link href="/articles/mansion-kaidoki-2025" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📅</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンションの買い時はいつ？2026年の相場予測と判断基準</span>
            </Link>
            <Link href="/articles/tokyo-mansion-chuko-vs-shintiku" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏢</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">都内マンションは新築と中古どっち？価格と資産性で比較</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
