import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "住宅ローンの団信とは？種類・比較・選び方を解説｜30Lab",
  description:
    "住宅ローンの団体信用生命保険（団信）の基本から3大疾病・がん100%特約・ワイド団信まで徹底比較。保険料の上乗せ金利と、ライフステージ別の選び方を解説します。",
  keywords: [
    "住宅ローン 団信",
    "団体信用生命保険 比較",
    "団信 がん特約",
    "団信 3大疾病",
    "ワイド団信",
  ],
  openGraph: {
    title: "住宅ローンの団信とは？種類・比較・選び方を解説",
    description: "団信の基本から3大疾病・がん100%特約まで徹底比較。保険料の上乗せ金利と選び方のポイントを解説。",
  },
};

export default function JutakuLoanDanshinPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600">コラム</Link>
          <span>/</span>
          <span className="text-gray-600">住宅ローン団信</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">団信・生命保険</span>
          <span className="text-xs text-gray-400">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          住宅ローンの<span className="text-blue-600">団信とは？</span><br />
          種類・比較・選び方を解説
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          住宅ローンを契約する際、ほぼ必ずセットになる「団体信用生命保険（団信）」。「死んだら保険で返済される」という基本は知っていても、がん特約や3大疾病特約との違いや保険料への影響を正確に理解している人は少ないはずです。この記事では団信の基本から種類・選び方まで詳しく解説します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            🛡️ 団信（団体信用生命保険）とは？
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            団信とは、住宅ローンの借入者が<strong>死亡または高度障害状態になった場合</strong>、保険金でローン残高が完済される保険です。遺族や本人がその後もローン返済を継続しなくて済む仕組みです。
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-4">
            <p className="text-sm font-bold text-blue-800 mb-2">団信の基本補償</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black mt-0.5">✓</span>
                <span><strong>死亡</strong>：借入者が亡くなった場合、ローン残高が全額完済される</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black mt-0.5">✓</span>
                <span><strong>高度障害</strong>：両眼失明・両上下肢の切断・完全寝たきり等の状態になった場合</span>
              </li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-sm font-bold text-orange-800 mb-1">⚠️ 注意点</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              基本団信は<strong>死亡・高度障害のみ</strong>が補償対象です。がん・脳卒中・心筋梗塞などの重病で働けなくなっても、死亡・高度障害に至らない限り保険金は支払われません。追加の特約が必要かどうかを検討しましょう。
            </p>
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            📋 団信の種類と上乗せ金利比較
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            基本団信に追加特約をつけると保険金の支払い対象が広がりますが、金利が上乗せされます。主な種類と目安金利を比較します。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">種類</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">補償内容</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 border-b border-gray-200">上乗せ金利目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "基本団信", cover: "死亡・高度障害", rate: "0%（無料）" },
                  { type: "3大疾病特約", cover: "がん・急性心筋梗塞・脳卒中（所定の状態）", rate: "+0.2〜0.3%" },
                  { type: "がん50%保障", cover: "がんと診断でローン残高50%完済", rate: "+0.1〜0.2%" },
                  { type: "がん100%保障", cover: "がんと診断でローン残高全額完済", rate: "+0.2〜0.4%" },
                  { type: "8疾病・11疾病特約", cover: "3大疾病＋糖尿病・高血圧等も含む", rate: "+0.3〜0.5%" },
                  { type: "ワイド団信", cover: "持病・既往症でも加入できる（一部）", rate: "+0.3〜0.5%" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-xs">{row.type}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{row.cover}</td>
                    <td className="px-4 py-3 text-right font-bold text-blue-700 text-xs">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※上乗せ金利は金融機関・商品により異なります。2025年5月時点の参考値です。</p>
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
            ⚠️ 団信なしのリスクと加入できない場合の対処
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            民間金融機関の住宅ローンは団信加入が<strong>原則必須</strong>です。持病があるなど健康状態によっては通常の団信に加入できない場合があります。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "通常団信に加入できない場合",
                body: "ワイド団信（加入条件を緩和した団信）を選択するか、団信不要のフラット35を検討する。フラット35は団信任意加入のため審査は通りやすい。",
                bg: "bg-yellow-50 border-yellow-200",
              },
              {
                title: "団信なしのフラット35のリスク",
                body: "死亡・重病時にローン残高が残り続け、遺族や同居家族に返済負担が残る。別途、民間の生命保険でカバーする設計が必要。",
                bg: "bg-red-50 border-red-200",
              },
              {
                title: "審査落ちを防ぐには告知が重要",
                body: "過去5年以内の手術・入院・投薬歴など、告知内容に虚偽があると保険金支払い拒否（告知義務違反）になるため、正確に申告すること。",
                bg: "bg-orange-50 border-orange-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-bold text-gray-900 mb-1">⚠️ {item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
            ✅ 団信の選び方：どこまでつけるべきか？
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            追加特約は安心感がある一方で、上乗せ金利により総返済額が増えます。3,000万円・35年借入で0.2%上乗せすると、総支払いは約130万円増加します。
          </p>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
            <p className="text-sm font-bold text-blue-800 mb-3">ライフステージ別おすすめ</p>
            <div className="space-y-3">
              {[
                {
                  stage: "独身・既婚（子なし）",
                  recommend: "基本団信 or がん50%保障",
                  reason: "扶養家族が少なく、就労不能でも生活費への影響が比較的小さい。基本団信＋就業不能保険の組み合わせも有効。",
                },
                {
                  stage: "子育て世代（30〜40代）",
                  recommend: "がん100%保障 or 3大疾病特約",
                  reason: "教育費のピーク時期と重なり、万一の就労不能時の影響が大きい。手厚い保障でリスクをカバーしたい世代。",
                },
                {
                  stage: "50代以上・借入期間短め",
                  recommend: "基本団信（状況による）",
                  reason: "残ローン期間が短いほど特約のメリットが薄れる。既存の生命保険との重複も確認すること。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
                  <p className="text-sm font-bold text-gray-900 mb-1">👤 {item.stage}</p>
                  <p className="text-xs font-semibold text-blue-700 mb-1">おすすめ：{item.recommend}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            結論として、<strong>まずは金利差と保障内容のコスパを比較すること</strong>が重要です。同じがん100%でも金融機関によって上乗せ金利が0.1〜0.4%と差があるため、複数の銀行を比較することをおすすめします。
          </p>
        </section>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">住宅ローン全体のコストを診断しよう</p>
          <p className="text-xs mb-4 opacity-90">団信コストも含めた総返済額シミュレーションは無料でできます。</p>
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
            <Link href="/articles/jutaku-loan-hendokinri-koteikinri" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">📈</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンは変動金利と固定金利どっちがいい？2025年の選び方</span>
            </Link>
            <Link href="/articles/jutaku-loan-hoshoryou" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">💼</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローンの保証料と融資手数料、どちらが得？</span>
            </Link>
            <Link href="/articles/jutaku-loan-shinsa-nenshu" className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-colors group">
              <span className="text-xl">🔎</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600">住宅ローン審査の年収基準は？通るための条件と落ちる理由を解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
