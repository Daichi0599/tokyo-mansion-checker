import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "共働き夫婦の生活費、負担割合はどうする？折半・収入比を具体例で比較｜30Lab",
  description:
    "共働き夫婦の生活費は半分ずつか、収入に応じて分けるか。手取り40万円・25万円、共通生活費30万円の具体例で負担額を比較し、転職や育休にも対応できる決め方を整理します。",
  keywords: [
    "共働き 家計 分担 割合",
    "夫婦 生活費 分担",
    "共働き 家計管理 方法",
    "夫婦 共同口座 メリット",
    "生活費 折半 割合",
  ],
  openGraph: {
    title: "共働き夫婦の生活費、半分ずつでいい？",
    description: "折半と収入比を具体的な金額で比べ、夫婦で決める順番を整理します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "共働き夫婦の生活費、半分ずつでいい？",
    description: "折半と収入比を具体的な金額で比較。転職・育休を見据えた決め方。",
  },
};

export default function TomobatarakiKakeiBuntanPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* パンくず */}
        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">共働き家計の分担</span>
        </nav>

        {/* タグ・日付 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">共働き・家計管理</span>
          <span className="text-xs text-slate-400">2026年最新</span>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          共働き夫婦の生活費、<br />
          <span className="text-blue-400">半分ずつでいい？</span>
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          家賃も食費も半分なら計算は楽です。でも、手取りに差があると、同じ15万円を出しても残るお金は同じではありません。逆に収入比で細かく割ると、昇給や転職のたびに計算し直すのもしんどい。どちらが正しいかではなく、<strong className="text-white">いまの2人が納得できて、状況が変わったら直せる分け方</strong>を具体的な金額で整理します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            まず結論：収入差が小さければ折半、大きければ収入比
          </h2>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <p><strong className="text-white">折半</strong>は、収入差が小さく、家事負担も含めて2人が納得しているなら一番簡単です。</p>
            <p><strong className="text-white">収入比</strong>は、収入差が大きい、片方が育休に入る、転職直後など収入が動く時期に向いています。</p>
            <p>迷ったら、毎月の共通生活費だけを収入比で共同口座に入れ、残りは各自で持つ形から始めると話しやすいです。</p>
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            手取り40万円・25万円なら、毎月いくら出す？
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            2人の手取りが合計65万円、家賃・食費・光熱費など共通の生活費が30万円だとします。
          </p>
          <div className="overflow-x-auto mb-5 rounded-xl border border-slate-700">
            <table className="w-full min-w-[520px] text-sm">
              <thead className="bg-slate-800 text-slate-200">
                <tr><th className="p-3 text-left">分け方</th><th className="p-3 text-right">手取り40万円側</th><th className="p-3 text-right">手取り25万円側</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-700 bg-slate-800/50 text-slate-300">
                <tr><td className="p-3 font-bold text-white">半分ずつ</td><td className="p-3 text-right">15万円</td><td className="p-3 text-right">15万円</td></tr>
                <tr><td className="p-3 font-bold text-white">手取りの比率</td><td className="p-3 text-right">約18.5万円</td><td className="p-3 text-right">約11.5万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            収入比は「40÷65」と「25÷65」で計算しています。折半では支払い後に25万円・10万円が残り、収入比では約21.5万円・13.5万円が残ります。自由に使える額を同じにする方法ではなく、負担率をそろえる方法です。
          </p>
          <h3 className="text-base font-black text-white mb-3">管理方法はこの3つで十分</h3>
          <div className="space-y-3">
            {[
              {
                title: "① 共同口座へ定額を入れる",
                desc: "毎月決めた金額を2人が入れ、家賃や食費をそこから払う。折半にも収入比にも使えます。",
                merit: "共通生活費だけが見え、個人のお金と混ざらない。",
                demerit: "旅行や家具など臨時支出の扱いを決めておく必要がある。",
              },
              {
                title: "② 費目ごとに担当する",
                desc: "家賃は夫、食費と光熱費は妻など、支払う項目を分ける。",
                merit: "口座やカードを作り直さず、すぐ始められる。",
                demerit: "値上がりで負担差が広がっても気づきにくい。",
              },
              {
                title: "③ 共通費だけ精算する",
                desc: "支払いは各自で行い、月末に共通費だけ集計して差額を精算する。",
                merit: "今の口座やクレジットカードを変えずに試せる。",
                demerit: "毎月の集計が面倒だと続きにくい。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-black text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-300 mb-2">{item.desc}</p>
                <p className="text-xs text-emerald-400 mb-1">✅ メリット：{item.merit}</p>
                <p className="text-xs text-red-400">❌ デメリット：{item.demerit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🤝 揉めないための3つのルール
          </h2>
          <div className="space-y-3 mb-4">
            {[
              { title: "① 共通生活費に含めるものを決める", body: "家賃と食費は共通でも、昼食代、服、美容、奨学金、実家への仕送りまで混ぜるかは家庭ごとに違います。割合を計算する前に、対象を1枚のメモに書き出します。" },
              { title: "② 金額ではなく、支払い後に残る額も見る", body: "同じ金額を払う公平さと、同じ負担率にする公平さは別です。折半と収入比を一度両方計算して、支払い後の残額を見て決めます。" },
              { title: "③ 見直す条件を先に決める", body: "半年ごとの定例見直しに加え、転職、昇給、育休、時短勤務の開始時は再計算する、と決めておきます。収入が変わった側から言い出す負担を減らせます。" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 まとめ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            まとめ：最初から完璧に決めなくていい
          </h2>
          <div className="bg-blue-500/10 rounded-xl border border-blue-500/30 p-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              収入差が小さく、2人とも納得できるなら折半が簡単です。収入差が大きい、転職や育休が近いなら収入比のほうが無理を減らせます。
            </p>
            <p>
              大事なのは、世間の平均に合わせることではなく、<strong className="text-white">共通費の範囲と見直す条件を2人で言葉にすること</strong>です。
            </p>
            <p>
              まず3か月だけ試して、面倒だった点や不満が出たところを直すくらいで十分です。
            </p>
          </div>
        </section>

        {/* 内部ツール誘導 */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">家・出産・車を一度に置いてみる</p>
          <p className="text-xs mb-4 opacity-90">家計分担だけでなく、これから重なる大きな支出を入れて、どの時期が苦しくなるか確認できます。</p>
          <Link
            href="/plan?intent=all&source=shared_household_article"
            className="inline-block bg-slate-800 text-blue-300 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
          >
            わが家のプランを作る →
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
          ※本記事は家計分担を話し合うための一般的な整理方法を紹介するものです。税金や社会保険料を含む実際の手取り額、必要な生活費は各家庭で異なります。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/tomobataraki-jutaku-loan" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💑</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">共働き夫婦の住宅ローン｜世帯年収別の購入可能額</span>
            </Link>
            <Link href="/articles/kekkon-chochiku-30dai" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💒</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">結婚費用と貯金、30代夫婦のリアルな平均額</span>
            </Link>
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
