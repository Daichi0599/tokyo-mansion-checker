import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "独身でマンションを買うのはアリ？メリット・デメリットを解説｜30Lab",
  description:
    "独身でのマンション購入のメリット（資産形成・家賃不要）とデメリット（転勤・結婚リスク）を整理。単身向けエリア・間取りの選び方と、年収300〜500万でも買えるシミュレーションも解説。",
  keywords: [
    "マンション 独身 購入",
    "独身 マンション 買うべき",
    "一人暮らし マンション 購入",
    "独身 マンション リスク",
    "単身 マンション 購入 年収",
  ],
  openGraph: {
    title: "独身でマンションを買うのはアリ？メリット・デメリットを解説",
    description: "独身マンション購入のリスクと資産形成メリットを整理。転勤・結婚リスクへの備え方と、単身向けエリア・間取りの選び方。",
  },
};

export default function MansionDokushinKounyuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">独身マンション購入</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">独身・ライフプラン</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          独身でマンションを買うのは<span className="text-blue-600">アリ？</span><br />
          メリット・デメリットを解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          「独身のうちにマンションを買ってもいいのか？」——30代・40代の独身会社員から増えているこの疑問。賃貸に払い続けるよりも資産になるという意見もある一方、ライフスタイルの変化リスクを懸念する声も。この記事では独身購入の現実を整理します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 独身マンション購入のメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                icon: "💰",
                title: "家賃を資産に変えられる",
                body: "毎月支払う家賃は「捨て金」になりますが、ローン返済は将来の資産形成につながります。35年後には持ち家という資産が残ります。",
                bg: "bg-green-50 border-green-200",
              },
              {
                icon: "🏠",
                title: "自由にカスタマイズできる",
                body: "賃貸では制限されるリノベーション・インテリア変更が自由にできます。自分だけのこだわり空間を作れることは所有する大きな魅力です。",
                bg: "bg-blue-50 border-blue-200",
              },
              {
                icon: "📊",
                title: "住宅ローン控除が受けられる",
                body: "年末残高×0.7%が最長13年間の税額控除。独身でも世帯年収に関係なく控除を受けられます。年収500万円台でも数十万円の節税に。",
                bg: "bg-purple-50 border-purple-200",
              },
              {
                icon: "📈",
                title: "資産価値を将来に活かせる",
                body: "立地次第では購入時より値上がりすることも。将来的に売却益や賃貸収入として活用できる資産になります。",
                bg: "bg-yellow-50 border-yellow-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ⚠️ 独身マンション購入のデメリット・リスク
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "転勤・転職による引越しが困難",
                body: "賃貸と違い、売却か賃貸に出す必要があります。急な転勤命令があると対応が難しい場合も。転勤の多い職種の方は要注意。",
              },
              {
                title: "結婚後に間取りが合わなくなるリスク",
                body: "1LDK・2LDKで購入後、結婚・子育てで手狭になるケース。売却や買い替えには費用と手間がかかります。",
              },
              {
                title: "一人分の収入でのローン審査",
                body: "共働きと違い、単独の年収でローンを組むため借入可能額に上限があります。突然の収入減少時のリスクも一人で抱えることになります。",
              },
              {
                title: "万一の際の相続問題",
                body: "独身で亡くなった場合、ローンと不動産が相続財産になります。団信があれば残債は消えますが、物件の管理・売却を親族に任せることに。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-bold text-red-700 mb-1">⚠️ {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ アフィリエイト インライン CTA ━━ */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-green-700 mb-1">💡 住宅ローン、どこが一番お得？</p>
          <p className="text-sm font-black text-gray-900 mb-2">無料で複数行を一括比較できる「モゲチェック」</p>
          <p className="text-xs text-gray-600 mb-3">年収・物件価格を入力するだけで最適なローンを提案。審査通過率も確認できます。</p>
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
            🏙️ 独身向けに向いているエリア・間取り
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            独身でのマンション購入で失敗しないためには<strong>将来の売却・賃貸のしやすさ</strong>を考えた選び方が重要です。
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                label: "エリア選びのポイント",
                icon: "📍",
                items: [
                  "駅徒歩10分以内（売却・賃貸のしやすさ）",
                  "山手線・主要私鉄沿線（需要が高く換金しやすい）",
                  "生活利便施設（スーパー・病院・飲食店）が徒歩圏内",
                  "再開発・都市計画が進むエリア（資産価値維持）",
                ],
                bg: "bg-blue-50 border-blue-200",
              },
              {
                label: "間取り選びのポイント",
                icon: "🏠",
                items: [
                  "1LDK〜2LDKが独身購入に向いている（30〜50㎡前後）",
                  "2LDKは結婚後も使いやすく汎用性が高い",
                  "広すぎると維持費・ローン返済が重くなる",
                  "賃貸に出した際の需要も考慮（1LDKは単身需要大）",
                ],
                bg: "bg-green-50 border-green-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-2">{item.icon} {item.label}</p>
                <ul className="space-y-1">
                  {item.items.map((point, j) => (
                    <li key={j} className="text-xs text-gray-700 flex items-start gap-1">
                      <span className="text-gray-400 mt-0.5">・</span>
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
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💹 年収300〜500万でも買えるシミュレーション
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            独身でも工夫次第で購入は可能です。金利1.0%・35年返済での試算です。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">年収</th>
                  <th className="text-right px-4 py-3 font-bold text-green-700 border-b border-gray-200">安全な借入上限<br /><span className="text-xs font-normal">（25%）</span></th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">頭金200万追加<br /><span className="text-xs font-normal">購入可能額</span></th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">エリア目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { nenshu: 300, loan: "約1,650万円", price: "約1,850万円", area: "埼玉・千葉郊外" },
                  { nenshu: 350, loan: "約1,925万円", price: "約2,125万円", area: "神奈川・多摩" },
                  { nenshu: 400, loan: "約2,200万円", price: "約2,400万円", area: "東京23区外縁部" },
                  { nenshu: 450, loan: "約2,475万円", price: "約2,675万円", area: "城東・城北エリア" },
                  { nenshu: 500, loan: "約2,750万円", price: "約2,950万円", area: "23区中古1LDK圏" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-900 text-xs">{row.nenshu}万円</td>
                    <td className="px-4 py-3 text-right text-green-700 font-semibold text-xs">{row.loan}</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-semibold text-xs">{row.price}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{row.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※金利1.0%・35年返済・元利均等返済での試算。実際の審査は異なります。</p>
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
          <p className="text-base font-black mb-1">あなたの年収でどこまで買えるか診断</p>
          <p className="text-xs mb-4 opacity-90">独身でも使えます。年収・頭金・金利を入力するだけで安全購入価格がわかります。</p>
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
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
            <Link href="/articles/mansion-baibai-shisan-kachi" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📉</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">資産価値が落ちにくいマンションの条件とは？立地・築年数で解説</span>
            </Link>
            <Link href="/articles/mansion-kaidoki-2025" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📅</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンションの買い時はいつ？2025年の相場と判断基準を解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
