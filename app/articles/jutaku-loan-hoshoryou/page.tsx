import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンの保証料と融資手数料、どちらが得？違いを解説｜30Lab",
  description:
    "住宅ローンの保証料（外枠・内枠方式）と融資手数料の違いをコスト比較表で解説。3,000万円借入時のトータルコスト比較と、繰り上げ返済時の保証料返戻についても詳しく解説。",
  keywords: [
    "住宅ローン 保証料",
    "融資手数料 保証料 違い",
    "住宅ローン 諸費用",
    "保証料 外枠 内枠",
    "住宅ローン 手数料 比較",
  ],
  openGraph: {
    title: "住宅ローンの保証料と融資手数料、どちらが得？違いを解説",
    description: "保証料（外枠・内枠）と融資手数料の違いをコスト比較表で解説。3,000万円借入時のトータルコストで判断する方法。",
  },
};

export default function JutakuLoanHoshoryouPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">保証料・融資手数料</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">諸費用・住宅ローン</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローンの<span className="text-blue-600">保証料と融資手数料</span>、<br />
          どちらが得？違いを解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          住宅ローンを契約する際の諸費用として、「保証料」と「融資手数料」という2つのコストが発生することがあります。一見似ているようで仕組みが全く異なり、どちらを選ぶかで総支払額が大きく変わることも。この記事でわかりやすく解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            💼 保証料と融資手数料の基本的な違い
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "保証料",
                body: "借入者が返済できなくなった場合に、保証会社が代わりに返済する（保証委託契約）。借入者が亡くなっても保証会社への返済義務は残る。",
                bg: "bg-blue-50 border-blue-200",
              },
              {
                title: "融資手数料（事務手数料）",
                body: "金融機関がローン申し込みの手続き・審査・実行に対して請求する手数料。保証会社との契約ではなく、金融機関への支払い。",
                bg: "bg-green-50 border-green-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-gray-900 mb-1">📌 {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>重要：</strong>保証料はあくまで「保証会社へのコスト」であり、万一の時に借入者の返済義務がなくなるわけではありません。保証会社が金融機関に代位弁済した後、求償権（請求権）が借入者・相続人に残ります。
            </p>
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📊 保証料の「外枠方式」vs「内枠方式」の違い
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            保証料には支払い方法が2種類あります。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">方式</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">支払い方法</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">3,000万・35年の目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "外枠方式（一括前払い）", detail: "融資実行時に一括で保証料を現金払い", cost: "約60〜70万円（一括）" },
                  { method: "内枠方式（金利上乗せ）", detail: "保証料を金利に上乗せ（0.2%前後）して毎月支払い", cost: "約70〜100万円（総計）" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-900">{row.method}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{row.detail}</td>
                    <td className="px-4 py-3 text-right text-xs font-bold text-blue-700">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            トータルコストは外枠方式のほうが安くなる場合が多いですが、<strong>諸費用として初期に現金が多く必要</strong>になります。手元資金と相談しながら選びましょう。
          </p>
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
            💰 3,000万円借入時のコスト比較表
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            借入3,000万円・35年返済で主要パターンを比較します。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">パターン</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">初期費用</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">金利コスト増分</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">概算総コスト</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pattern: "保証料・外枠（一括）", init: "約62万円", rate: "0円", total: "約62万円" },
                  { pattern: "保証料・内枠（+0.2%）", init: "0円", rate: "約70〜80万円", total: "約70〜80万円" },
                  { pattern: "融資手数料型（2.2%）", init: "約66万円", rate: "0円", total: "約66万円" },
                  { pattern: "融資手数料型（定額3万円）", init: "約3万円", rate: "0円", total: "約3万円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-900">{row.pattern}</td>
                    <td className="px-4 py-3 text-right text-xs text-gray-700">{row.init}</td>
                    <td className="px-4 py-3 text-right text-xs text-gray-700">{row.rate}</td>
                    <td className="px-4 py-3 text-right text-xs font-bold text-blue-700">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※融資手数料は金融機関により「借入額の2.2%」と「定額（数万円）」に分かれます。ネット銀行は定額・低額型が多い傾向。</p>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ♻️ 繰り上げ返済時の保証料返戻と選び方フロー
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            外枠方式（一括払い）で保証料を支払った場合、繰り上げ返済や完済すると<strong>未経過分の保証料が返戻（戻り）される</strong>場合があります。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
            <p className="text-sm font-bold text-blue-800 mb-2">保証料の返戻（例）</p>
            <p className="text-xs text-gray-700 leading-relaxed">
              35年ローンで10年後に完済した場合、払った保証料の一部（残期間分）が返戻される。ただし返戻額は保険の計算上、払った分の半分以下になることが多い。繰り上げ返済を予定しているなら外枠方式の方が有利になるケースがある。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="text-sm font-bold text-gray-800 mb-3">どちらを選ぶべき？判断フロー</p>
            <div className="space-y-3">
              {[
                { q: "繰り上げ返済を積極的に行う予定がある？", a: "→ 外枠方式（一括払い）が有利", color: "text-blue-700" },
                { q: "諸費用の現金をなるべく抑えたい？", a: "→ 内枠方式（金利上乗せ）を検討", color: "text-green-700" },
                { q: "ネット銀行を検討している？", a: "→ 多くが定額手数料型のため保証料不要のケースも", color: "text-purple-700" },
                { q: "10年以内の完済を予定している？", a: "→ 外枠・一括払いで返戻を受けた方がお得な場合が多い", color: "text-blue-700" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-gray-400 text-xs mt-0.5 font-bold">Q{i + 1}.</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{item.q}</p>
                    <p className={`text-xs font-bold mt-0.5 ${item.color}`}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
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
          <p className="text-base font-black mb-1">諸費用を含めた購入総コストを診断しよう</p>
          <p className="text-xs mb-4 opacity-90">保証料・手数料も含めた資金計画。年収から安全購入価格を無料で算出。</p>
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
            <Link href="/articles/mansion-shohiyo" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💴</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">マンション購入の諸費用はいくら？内訳と相場を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-danshin" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🛡️</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの団信とは？種類・比較・選び方を解説</span>
            </Link>
            <Link href="/articles/jutaku-loan-hendokinri-koteikinri" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンは変動金利と固定金利どっちがいい？2025年の選び方</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
