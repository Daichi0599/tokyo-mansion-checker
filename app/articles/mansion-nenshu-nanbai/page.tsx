import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンションは年収の何倍まで買える？「5〜7倍」の根拠と東京の現実を解説｜30Lab",
  description:
    "「マンションは年収の5〜7倍が目安」の根拠と、東京での現実を解説。年収倍率だけで判断してはいけない理由と、正しい購入価格の判断方法を紹介。",
  keywords: [
    "マンション 年収 何倍",
    "住宅ローン 年収 何倍 適正",
    "マンション 価格 年収 倍率",
    "都内マンション 年収 何倍",
    "住宅ローン 適正 年収",
  ],
  openGraph: {
    title: "マンションは年収の何倍まで買える？「5〜7倍」の根拠と東京の現実",
    description: "年収倍率の目安とその限界、正しい判断軸を解説。",
  },
};

export default function MansionNenshuNanbaiPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">年収の何倍まで買える</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">年収倍率・適正価格</span>
          <span className="text-xs text-slate-500">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          マンションは年収の<span className="text-blue-400">何倍まで買える</span>？<br />
          「5〜7倍」の根拠と東京の現実を解説
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          マンション購入を検討すると「年収の5〜7倍が目安」という話をよく聞きます。しかし、この数字の根拠は何なのか、東京ではこの基準は現実的なのか——本記事で詳しく解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📐 「年収の5〜7倍」の根拠
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            この倍率は、住宅ローンの返済比率（年収に占める年間返済額の割合）を25〜35%に設定したときの逆算から来ています。
          </p>
          <div className="bg-blue-500/10 rounded-xl p-4 mb-4 text-sm text-slate-200 space-y-2">
            <p className="font-bold text-blue-200">計算の仕組み（金利1%・35年返済の場合）</p>
            <p>返済比率25%（安全）：借入可能額 = 年収 × <strong>約5.5倍</strong></p>
            <p>返済比率30%（標準）：借入可能額 = 年収 × <strong>約6.6倍</strong></p>
            <p>返済比率35%（上限）：借入可能額 = 年収 × <strong>約7.7倍</strong></p>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            つまり「5〜7倍」は、<strong>返済比率25〜35%の範囲に対応した借入額</strong>の目安です。頭金がある場合は購入価格をその分上乗せできます。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🗺️ 年収別「適正購入価格」早見表
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-emerald-400 border-b border-slate-700">安全圏<br /><span className="text-xs font-normal">×5.5倍</span></th>
                  <th className="text-right px-4 py-3 font-bold text-yellow-400 border-b border-slate-700">標準<br /><span className="text-xs font-normal">×6.6倍</span></th>
                  <th className="text-right px-4 py-3 font-bold text-red-400 border-b border-slate-700">上限<br /><span className="text-xs font-normal">×7.7倍</span></th>
                </tr>
              </thead>
              <tbody>
                {[500, 600, 700, 800, 1000, 1200].map((n, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 font-bold text-white">{n}万円</td>
                    <td className="px-4 py-3 text-right text-emerald-400 font-semibold">{(n * 5.5).toFixed(0)}万円</td>
                    <td className="px-4 py-3 text-right text-yellow-400 font-semibold">{(n * 6.6).toFixed(0)}万円</td>
                    <td className="px-4 py-3 text-right text-red-400 font-semibold">{(n * 7.7).toFixed(0)}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">※金利1%・35年返済・頭金ゼロでの試算。実際の金利・頭金によって変わります。</p>
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
            🏙️ 東京の現実：倍率だけでは買えない
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            上の早見表と東京の相場を比べると、深刻な乖離があります。
          </p>
          <div className="bg-orange-500/10 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-800 mb-2">🏠 2025年の東京相場</p>
            <ul className="text-sm text-orange-400 space-y-1">
              <li>・23区新築マンション 平均：<strong>約9,500万円〜1.2億円</strong></li>
              <li>・23区中古マンション 平均：<strong>約5,000万〜7,000万円</strong></li>
              <li>・郊外・神奈川・埼玉：<strong>約3,500万〜5,000万円</strong></li>
            </ul>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            年収700万円の「安全圏（×5.5）」は3,850万円。しかし23区の中古マンションですら5,000万〜7,000万円が相場です。
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            現実的には<strong>「倍率を上げる」「頭金を増やす」「エリアを広げる」「中古を検討する」</strong>のいずれか、または組み合わせで対応することになります。
          </p>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ❌ 年収倍率だけで判断してはいけない理由
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "金利が違えば倍率の意味が変わる",
                body: "「年収の7倍」でも金利0.4%（変動低金利）と金利2.0%では月返済額が大きく違います。倍率は金利前提によって意味が変わります。",
              },
              {
                title: "管理費・修繕積立金が含まれていない",
                body: "年収倍率はローン返済のみ。マンションでは管理費・修繕積立金（月2〜4万）が別途かかるため、実質負担はさらに高くなります。",
              },
              {
                title: "家族構成・教育費・老後資金が考慮されていない",
                body: "子どもの有無、教育費の計画、老後のための貯蓄——これらを加味すると、同じ年収でも安全な借入額は大きく変わります。",
              },
              {
                title: "収入の安定性が反映されない",
                body: "正社員・自営業・共働きなど、収入の安定性が異なれば適切な倍率も変わります。「年収が下がるリスク」を見込んだ設定が必要です。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-slate-100 mb-1">❌ {item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション5 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ✅ 正しい判断軸は「返済比率」
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            年収倍率はあくまで「ざっくりした目安」です。より正確な判断には<strong>返済比率（年収に占める年間返済額の割合）</strong>を使いましょう。
          </p>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20 mb-4">
            <p className="text-sm font-bold text-blue-200 mb-2">返済比率による判断基準</p>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>✅ <strong>〜25%</strong>：安全。生活・貯蓄に余裕あり</li>
              <li>⚠️ <strong>25〜30%</strong>：標準。家計管理が必要</li>
              <li>🔴 <strong>30〜35%</strong>：警戒。金利上昇・収入減に脆弱</li>
              <li>❌ <strong>35%超</strong>：危険。長期的に厳しくなる可能性大</li>
            </ul>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            購入を検討するときは、「年収の何倍か？」ではなく「返済比率は何%になるか？」で考えることをおすすめします。
          </p>
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
          <p className="text-base font-black mb-1">年収倍率より正確な「返済比率」を計算</p>
          <p className="text-xs mb-4 opacity-90">年収・物件価格・頭金を入力するだけで、返済比率と安全購入価格を自動診断。</p>
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
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表付き】</span>
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
