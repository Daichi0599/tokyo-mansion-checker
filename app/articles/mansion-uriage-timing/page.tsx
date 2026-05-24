import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンションの売り時はいつ？築年数・市況から見る最適タイミング｜30Lab",
  description:
    "マンションの価格下落カーブと2025年の売却市況から、売り時の判断基準を解説。「売り先行」vs「買い先行」の注意点も。",
  keywords: [
    "マンション 売却 タイミング",
    "マンション 売り時",
    "マンション 築年数 売却",
    "マンション 売却 2025",
    "マンション 売り先行 買い先行",
  ],
  openGraph: {
    title: "マンションの売り時はいつ？築年数・市況から見る最適タイミング",
    description: "価格下落カーブと2025年市況から売り時の判断基準を解説。",
  },
};

export default function MansionUriageTimingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">マンションの売り時</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">売却・資産運用</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          マンションの<span className="text-blue-600">売り時はいつ？</span><br />
          築年数・市況から見る最適タイミング
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          「いつ売れば一番高く売れるか」——マンションを保有していると必ず直面する問題です。築年数が増えるほど価格は下がりますが、一方で2025年の都内マンション市況は高止まりが続いています。この記事では価格下落カーブと市況を組み合わせた売り時の判断基準を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📉 築年数別の価格下落カーブ
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            国土交通省の不動産取引データをもとに、マンションの築年数と価格の関係を整理しました。新築価格を100とした場合の価格推移の目安です。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">築年数</th>
                  <th className="text-center px-4 py-3 font-bold text-blue-700 border-b border-gray-200">価格水準（目安）</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { nensu: "新築〜築3年", price: "95〜100%", feature: "新築プレミアムが一部残る。早期売却は損になりやすい" },
                  { nensu: "築5年", price: "85〜90%", feature: "新築プレミアムは消えるが、まだ高値で売れる時期" },
                  { nensu: "築10年", price: "75〜85%", feature: "下落が緩やかになる。管理状態が価格に影響し始める" },
                  { nensu: "築15年", price: "65〜75%", feature: "大規模修繕が近づく。修繕積立金の状況が重要に" },
                  { nensu: "築20年", price: "55〜65%", feature: "旧耐震基準との境界線（1981年）に近い物件は要注意" },
                  { nensu: "築25年以上", price: "45〜55%", feature: "価格下落は緩やかになるが、需要者層が絞られる" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-700">{row.nensu}</td>
                    <td className="px-4 py-3 text-center text-xs font-bold text-blue-700">{row.price}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※東京都内のマンション取引データをもとにした概算値。エリア・グレードにより大きく異なります。</p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🏙️ 売却に適した築年数と判断基準
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            下落幅と売却需要のバランスから、以下のタイミングが売却に適しているといえます。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                icon: "⭐",
                title: "最も売りやすいタイミング：築5〜10年",
                body: "新築プレミアムが消えた後、まだ価格が高い時期です。外観・設備の劣化も少なく、買い手が見つかりやすい。「10年以内に売る可能性がある」場合は購入時から出口を意識することが重要です。",
                bg: "bg-green-50 border-green-200",
              },
              {
                icon: "⚠️",
                title: "判断が必要なタイミング：築15〜20年",
                body: "大規模修繕（12〜15年目が多い）後は設備が新しくなり、一時的に価格が維持されやすい。修繕前に売るか、修繕後に売るかは修繕積立金の状況によります。",
                bg: "bg-yellow-50 border-yellow-200",
              },
              {
                icon: "📌",
                title: "旧耐震の壁：1981年6月以前の物件",
                body: "旧耐震基準（1981年以前）の物件は住宅ローンが通りにくいため、買い手が限られます。該当する物件は早めの売却が賢明です。",
                bg: "bg-red-50 border-red-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ モゲチェックCTA ━━ */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-green-700 mb-1">💡 売却後の住み替えローンも一括比較</p>
          <p className="text-sm font-black text-gray-900 mb-2">「モゲチェック」で次の購入に最適なローンを無料診断</p>
          <p className="text-xs text-gray-600 mb-3">マンションを売却して住み替えを検討中の方は、次の物件のローンも事前に確認しておくと安心です。年収・希望借入額を入力するだけで複数行を比較できます。</p>
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
            📊 2025年の売却市況：高値圏の今が売り時か
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            2025年の東京マンション売却市況は、依然として売り手有利の状況が続いています。
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "📈",
                title: "価格は高止まり〜緩やかな上昇",
                body: "2023〜2024年にかけて都内中古マンション価格は過去最高水準に到達。2025年もインバウンド需要・高所得層の購入意欲が価格を下支えしており、急落の兆候は見られない。",
              },
              {
                icon: "🔍",
                title: "売り出し物件数が増加傾向",
                body: "価格上昇を受けて、売却を検討するオーナーが増えています。需給バランスが変わりつつあり、2025年後半以降は売り時判断が難しくなる可能性も。",
              },
              {
                icon: "💡",
                title: "税制・控除のタイミングも考慮",
                body: "3,000万円特別控除（居住用財産の売却益控除）は、売却時に実際に居住している物件に適用されます。転居後3年以内が対象となるため、タイミングを逸しないよう注意。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-gray-800 mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🔄 「売り先行」vs「買い先行」の注意点
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            住み替えの際に迷うのが「今の物件を先に売るか、次の物件を先に買うか」という順番です。それぞれにメリット・リスクがあります。
          </p>
          <div className="space-y-3">
            {[
              {
                label: "売り先行のメリット・デメリット",
                icon: "→ 売る → 仮住まい → 買う",
                bg: "bg-blue-50 border-blue-200",
                pros: ["売却価格が確定してから購入予算が決められる", "二重ローンを抱えるリスクがない", "売却交渉に焦りが生まれにくい"],
                cons: ["仮住まいが必要（賃貸費用が発生）", "次の物件探しが急かされる", "希望の物件が売れてしまうリスク"],
              },
              {
                label: "買い先行のメリット・デメリット",
                icon: "→ 買う → 売る",
                bg: "bg-orange-50 border-orange-200",
                pros: ["仮住まい不要でスムーズに引越しできる", "希望の物件をじっくり選べる"],
                cons: ["一時的に二重ローンを抱える", "売り急ぎになり価格交渉が不利", "売却時の資金繰りが厳しくなることも"],
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-1">{item.label}</p>
                <p className="text-xs text-blue-700 font-bold mb-2">{item.icon}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs font-bold text-green-700 mb-1">メリット</p>
                    {item.pros.map((p, j) => (
                      <p key={j} className="text-xs text-gray-600 flex items-start gap-1"><span className="text-green-500">✓</span>{p}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 mb-1">デメリット</p>
                    {item.cons.map((c, j) => (
                      <p key={j} className="text-xs text-gray-600 flex items-start gap-1"><span className="text-red-400">✗</span>{c}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">住み替え後の購入予算を今すぐ確認</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・希望金利を入力するだけで、安全な購入予算がわかります。</p>
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
            <Link href="/articles/mansion-baibai-shisan-kachi" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📉</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">資産価値が落ちにくいマンションの条件とは？立地・築年数で解説</span>
            </Link>
            <Link href="/articles/mansion-kaidoki-2025" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📅</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションの買い時はいつ？2025年の相場と判断基準を解説</span>
            </Link>
            <Link href="/articles/mansion-floor-plan" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📐</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションの間取り選び方｜1LDK・2LDK・3LDKの違いと資産価値</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
