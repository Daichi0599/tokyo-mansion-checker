import type { Metadata } from "next";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "結婚費用と貯金、30代夫婦のリアルな平均額｜挙式・新生活・将来の住宅資金の目安｜30Lab",
  description:
    "結婚にかかる費用の平均相場と、30代の貯蓄額の実態を解説。挙式・新生活準備・新婚旅行の内訳から、結婚後にマンション購入資金をどう貯めていくかの考え方まで紹介。",
  keywords: [
    "結婚費用 平均",
    "30代 貯金 平均",
    "30代 貯蓄額 中央値",
    "結婚 貯金 いくら",
    "新生活 費用 目安",
  ],
  openGraph: {
    title: "結婚費用と貯金、30代夫婦のリアルな平均額",
    description:
      "挙式・新生活・新婚旅行の費用相場と、30代の貯蓄額の実態を解説。将来の住宅資金づくりの考え方も紹介。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "結婚費用と貯金、30代夫婦のリアルな平均額",
    description: "挙式・新生活の費用相場と30代の貯蓄額の実態を解説。",
  },
};

export default function KekkonChochiku30daiPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* パンくず */}
        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">結婚費用と貯金</span>
        </nav>

        {/* タグ・日付 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">結婚・お金</span>
          <span className="text-xs text-slate-400">2026年最新</span>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          結婚費用と貯金、<br />
          <span className="text-blue-400">30代夫婦のリアルな平均額</span>
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「結婚するのにいくら必要？」「うちの貯金額って普通なの？」——30代になると、結婚や将来の住まいを意識して急にお金の不安が具体的になります。この記事では結婚費用の相場と30代の貯蓄額の実態を数字で整理し、そのあと何にどう備えればいいかを解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💒 結婚にかかる費用の内訳
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            結婚関連の費用は「挙式・披露宴」「新生活準備」「新婚旅行」の3つに大きく分かれます。
          </p>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-4">
            <div className="space-y-1 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>挙式・披露宴（総額）</span><span className="font-semibold text-white">約299万円</span>
              </div>
              <div className="flex justify-between">
                <span>うち自己負担額（ご祝儀等を除く）</span><span className="font-semibold text-white">約159万円</span>
              </div>
              <div className="flex justify-between">
                <span>新生活の家具・家電購入</span><span className="font-semibold text-white">約59万円</span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-1 mt-1">
                <span>新婚旅行（お土産代を除く）</span><span className="font-semibold text-white">約62万円</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">※ ゼクシィ結婚トレンド調査2025をもとにした全国平均の目安。地域差が大きく、首都圏は挙式費用が高くなる傾向があります。</p>
          </div>

          <div className="bg-blue-500/10 rounded-xl border border-blue-500/20 p-4 text-sm text-slate-300">
            <p className="font-bold text-blue-300 mb-2">💡 ポイント：総額と自己負担額は別物</p>
            <p className="leading-relaxed">
              挙式総額は約300万円でも、ご祝儀や両家からの援助を差し引いた<strong className="text-white">自己負担は150〜160万円程度</strong>に収まるケースが多くなっています。「総額」だけを見て貯金計画を立てると、必要以上に身構えてしまうので注意が必要です。
            </p>
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💰 30代の貯蓄額、実際どのくらい？
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            J-FLEC（金融広報中央委員会）の家計の金融行動に関する世論調査（2025年）をもとにした、30代の金融資産額の目安です。
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">世帯タイプ</th>
                  <th className="text-right px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">中央値</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-800">
                  <td className="px-4 py-3 text-white font-semibold text-xs">単身世帯（30代）</td>
                  <td className="px-4 py-3 text-right text-emerald-400 font-bold">約100万円</td>
                </tr>
                <tr className="bg-slate-700/30">
                  <td className="px-4 py-3 text-white font-semibold text-xs">2人以上世帯（30代）</td>
                  <td className="px-4 py-3 text-right text-emerald-400 font-bold">約311万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">※ 中央値は「金融資産を保有していない世帯」を含んだ全体の真ん中の値。平均値は一部の高額資産保有世帯に引っ張られやすいため、実態に近い中央値を基準にしています。</p>

          <p className="text-sm text-slate-300 leading-relaxed">
            重要なのは、この中央値はあくまで「今の貯蓄額」であり、<strong className="text-white">将来のマンション購入や子育て費用に必要な金額とは別物</strong>だということです。同世代と比較して落ち込む必要はなく、「これからどう積み上げるか」の方が重要です。
          </p>
        </section>

        {/* ━━ アフィリエイト CTA ━━ */}
        <AffiliateCta
          program="fpsoudan"
          page="kekkon-chochiku-30dai"
          heading="結婚後の家計、何から手をつければいい？"
          title="結婚・住宅・教育費をまとめてお金のプロに相談"
          note="結婚を機に家計を見直すタイミングは、将来の貯蓄ペースを大きく左右します。何にいくら備えるべきか、無料でオンライン相談できます。"
        />

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📈 結婚後、住宅資金はどう貯める？
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            結婚費用を払い終えたあと、次に意識したいのが将来の住宅資金です。毎月の貯蓄額別に、5年後・10年後の到達額を試算しました（住宅購入の頭金づくりを想定）。
          </p>
          <div className="space-y-3">
            {[
              { monthly: "月3万円", y5: "180万円", y10: "360万円" },
              { monthly: "月5万円", y5: "300万円", y10: "600万円" },
              { monthly: "月8万円", y5: "480万円", y10: "960万円" },
            ].map((row, i) => (
              <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-4 flex items-center justify-between">
                <span className="text-sm font-bold text-white">{row.monthly}</span>
                <div className="flex gap-4 text-xs text-slate-300">
                  <span>5年後：<strong className="text-emerald-400">{row.y5}</strong></span>
                  <span>10年後：<strong className="text-emerald-400">{row.y10}</strong></span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">※ 運用なしの単純積立の場合。新NISA等で運用しながら積み立てると、さらに増える可能性があります（元本割れリスクもあります）。</p>
        </section>

        {/* ━━ セクション4 まとめ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📌 まとめ：比べるより、次の一歩を数字にする
          </h2>
          <div className="bg-blue-500/10 rounded-xl border border-blue-500/30 p-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              結婚費用の自己負担は<strong className="text-white">平均150〜160万円程度</strong>、30代の貯蓄中央値は<strong className="text-white">単身100万円・2人以上世帯311万円程度</strong>というのが現在の実態です。
            </p>
            <p>
              大事なのは他人との比較ではなく、<strong className="text-white">結婚後にいくらのペースで貯められそうか</strong>を具体的にすることです。毎月の貯蓄額が決まれば、5年後・10年後にどこまで到達できるかが見えてきます。
            </p>
            <p>
              将来マンション購入を考えているなら、まず「無理なく買える価格」を先に把握しておくと、逆算で毎月の貯蓄目標も立てやすくなります。
            </p>
          </div>
        </section>

        {/* 内部ツール誘導 */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">将来の「無理なく買える額」を先に知っておく</p>
          <p className="text-xs mb-4 opacity-90">年収・貯蓄ペースをもとに、安全に購入できる価格帯を3分で診断できます。</p>
          <Link
            href="/mansion"
            className="inline-block bg-slate-800 text-blue-300 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
          >
            無料でマンション購入診断する →
          </Link>
        </div>

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
        <p className="text-xs text-slate-400 mt-4 leading-relaxed">
          ※本記事は情報提供を目的としており、特定の金融商品・サービスの利用を推奨するものではありません。統計値はゼクシィ結婚トレンド調査2025、J-FLEC「家計の金融行動に関する世論調査2025年」を参照した目安であり、個々の状況により異なります。具体的な資金計画は専門家にご相談ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
            <Link href="/articles/tomobataraki-jutaku-loan" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💑</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">共働き夫婦の住宅ローン｜世帯年収別の購入可能額</span>
            </Link>
            <Link href="/articles/chintai-vs-kounyu" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏠</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">賃貸 vs 購入、結局どっちが得？</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
