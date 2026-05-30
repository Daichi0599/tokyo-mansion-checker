import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンション購入時の火災保険はいくら？必要性と相場を解説｜30Lab",
  description:
    "都内マンション購入時の火災保険の必要性と年間保険料の相場（3,000〜15,000円）を解説。専有部分と建物全体の違い、地震保険とのセット、一括見積もりで安くする方法も。",
  keywords: [
    "マンション 火災保険",
    "火災保険 必要 マンション",
    "火災保険 相場",
    "マンション 地震保険",
    "火災保険 一括見積もり",
  ],
  openGraph: {
    title: "マンション購入時の火災保険はいくら？必要性と相場を解説",
    description: "都内マンションの火災保険年間相場と必要な補償範囲を解説。地震保険との組み合わせ方、一括見積もりで節約する方法も。",
  },
};

export default function MansionKasaiHokenPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">マンション火災保険</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">火災保険・保険</span>
          <span className="text-xs text-slate-500">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          マンション購入時の<span className="text-blue-400">火災保険はいくら？</span><br />
          必要性と相場を解説
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          マンション購入時に必ず求められる火災保険。「マンションは鉄筋コンクリートだから燃えないのでは？」と思う方も多いですが、実際には水漏れ・盗難・地震など多様なリスクをカバーするために必須です。この記事では都内マンションの火災保険の必要性と相場、賢い選び方を解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏢 マンションでも火災保険が必要な理由
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            マンションの火災保険は「建物が燃える」だけでなく、様々なリスクをカバーします。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                icon: "💧",
                title: "水漏れ・水濡れ",
                body: "上の階からの水漏れ、自室の洗濯機・水道管のトラブルによる床・壁・家財の損害。マンションで最も多い保険請求原因の一つ。",
                bg: "bg-blue-500/10 border-blue-200",
              },
              {
                icon: "🔓",
                title: "盗難・破損",
                body: "空き巣による窃盗、破損・汚損（家具や家電の偶然の事故）など。基本プランに含まれないこともあるため要確認。",
                bg: "bg-slate-800 border-slate-700",
              },
              {
                icon: "🔥",
                title: "火災・爆発",
                body: "自室の火災はもちろん、他室からの延焼も補償対象。ただし「失火責任法」により、もらい火での賠償請求は難しいため自室の保険が重要。",
                bg: "bg-red-500/10 border-red-200",
              },
              {
                icon: "🌪️",
                title: "風災・雹（ひょう）・雪災",
                body: "台風による窓ガラスの破損、強風による外壁損傷なども対象。マンションは戸建てより影響が少ないが備えは必要。",
                bg: "bg-green-500/10 border-green-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-white mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-orange-500/10 border border-orange-200 rounded-xl p-4">
            <p className="text-sm font-bold text-orange-800 mb-1">⚠️ 住宅ローン利用時は実質必須</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              金融機関は融資条件として火災保険への加入を求めます。加入しない場合、ローン契約ができないケースがほとんどです。
            </p>
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏠 専有部分のみ vs 建物全体の違い
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            マンションの火災保険では「何を補償するか」の対象が重要です。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">補償対象</th>
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">内容</th>
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">誰が加入？</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { target: "建物（専有部分）", content: "室内の床・壁・天井・設備機器など", who: "区分所有者（自分で加入）" },
                  { target: "家財", content: "家具・家電・衣類・貴重品など", who: "区分所有者（自分で加入）" },
                  { target: "共用部分", content: "廊下・エレベーター・外壁など", who: "管理組合が管理費から加入" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 font-semibold text-white text-xs">{row.target}</td>
                    <td className="px-4 py-3 text-xs text-slate-300">{row.content}</td>
                    <td className="px-4 py-3 text-xs text-blue-300 font-semibold">{row.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            自分で加入するのは<strong>専有部分（建物）＋家財</strong>の組み合わせが基本です。共用部分は管理組合が一括加入しているため、個人での加入は不要です。
          </p>
        </section>

        {/* ━━ アフィリエイト インライン CTA ━━ */}
        <div className="bg-orange-500/10 border border-orange-200 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-400 mb-1">🔥 火災保険、比較してますか？</p>
          <p className="text-sm font-black text-white mb-2">複数社を一括見積もりで比較できる「火災保険一括見積もり」</p>
          <p className="text-xs text-slate-300 mb-3">回答者全員にセブンプレミアムカフェラテをプレゼント。無料で最安値を確認できます。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white font-black text-sm px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors"
          >
            無料で火災保険を比較する →
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={1} height={1} src="https://www18.a8.net/0.gif?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2" alt="" style={{ display: "block" }} />
        </div>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💰 都内マンションの年間保険料相場
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            マンションは木造戸建てに比べて火災リスクが低く、保険料も安くなります。都内マンションの年間保険料の目安は以下の通りです。
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 font-bold text-slate-200 border-b border-slate-700">補償内容・プラン</th>
                  <th className="text-right px-4 py-3 font-bold text-slate-200 border-b border-slate-700">年間保険料目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { plan: "建物のみ・最低限プラン", rate: "3,000〜5,000円/年" },
                  { plan: "建物＋家財・標準プラン", rate: "8,000〜12,000円/年" },
                  { plan: "地震保険セット・手厚いプラン", rate: "12,000〜20,000円/年" },
                  { plan: "10年一括払い（割引あり）", rate: "約7〜8万円（一括）" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-4 py-3 text-xs text-slate-200">{row.plan}</td>
                    <td className="px-4 py-3 text-right font-bold text-blue-300 text-xs">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">※物件の築年数・構造・所在地・補償内容により大きく異なります。実際には見積もりで確認してください。</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-sm font-bold text-blue-200 mb-1">💡 長期契約でコストを抑える</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              火災保険は最長5年（2022年以降）まで一括払い可能で、年払いより総額が安くなります。住宅ローン期間に合わせて長期一括払いを検討しましょう。
            </p>
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🌋 地震保険とのセットは必要か？
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            地震保険は火災保険とセットでのみ加入できます。地震大国・日本において、東京での購入なら強くおすすめします。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "地震保険でカバーされるもの",
                body: "地震・噴火・津波を原因とする火災・損壊・埋没・流失による損害。火災保険単体では地震による火災は補償されない。",
                bg: "bg-red-500/10 border-red-200",
              },
              {
                title: "保険金額の上限",
                body: "地震保険の保険金額は火災保険の30〜50%が上限。建物2,000万円の火災保険なら、地震保険は最大1,000万円まで。",
                bg: "bg-orange-500/10 border-orange-200",
              },
              {
                title: "地震保険の保険料（目安）",
                body: "東京都内（地震リスク高）マンション・保険金額1,000万円で年間約1万〜1.5万円。地域・建物構造により変わる。",
                bg: "bg-blue-500/10 border-blue-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-bold text-white mb-1">📌 {item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
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

        {/* ━━ 火災保険CTA ━━ */}
        <div className="border-2 border-green-400 bg-green-500/10 rounded-2xl p-5 mb-6">
          <p className="text-sm font-black text-emerald-300 mb-1">🏡 マンション購入時の火災保険、一括見積もりで最大50%節約できることも</p>
          <p className="text-xs text-emerald-400 mb-3">複数の保険会社に同時見積もりを依頼できるサービスが無料で使えます。マンション購入前に必ず比較を。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center bg-green-600 hover:bg-green-700 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
          >
            🎁 無料で火災保険を一括見積もりする →
          </a>
          <p className="text-xs text-emerald-400 text-center mt-2">無料・匿名・しつこい営業電話なし</p>
          <img width={1} height={1} src="https://www18.a8.net/0.gif?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2" alt="" style={{ display: "none" }} />
        </div>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">マンション購入の総コストを診断しよう</p>
          <p className="text-xs mb-4 opacity-90">保険・管理費・修繕積立金を含めた実質住居費は無料で試算できます。</p>
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
            <Link href="/articles/jutaku-loan-danshin" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🛡️</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">住宅ローンの団信とは？種類・比較・選び方を解説</span>
            </Link>
            <Link href="/articles/mansion-shohiyo" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💴</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション購入の諸費用はいくら？内訳と相場を解説</span>
            </Link>
            <Link href="/articles/mansion-kanrihi-shuzenhi" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏢</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンションの管理費・修繕積立金の相場はいくら？</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
