import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "賃貸 vs 購入、結局どっちが得？30代向けに費用・自由度・資産性を徹底比較｜30Lab",
  description:
    "賃貸と購入どちらが得か？30年間の総費用シミュレーション・メリット・デメリット・ライフステージ別の判断基準を解説。都内在住30代向けの現実的な比較記事。",
  keywords: [
    "賃貸 購入 どっちが得",
    "賃貸 vs 購入 比較",
    "マンション 買うべきか 賃貸",
    "持ち家 賃貸 どちらが得",
    "30代 マンション 購入 賃貸",
  ],
  openGraph: {
    title: "賃貸 vs 購入、結局どっちが得？費用・自由度・資産性を徹底比較",
    description:
      "30年間の総費用シミュレーションと、ライフステージ別の判断基準。賃貸派・購入派それぞれの現実を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "賃貸 vs 購入、結局どっちが得？費用・自由度・資産性を徹底比較",
    description: "30年総費用シミュレーション＆ライフ別判断基準。賃貸 vs 購入の現実を解説。",
  },
};

export default function ChintaiVsKounyuPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* パンくず */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">賃貸 vs 購入</span>
        </nav>

        {/* タグ・日付 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">賃貸・購入比較</span>
          <span className="text-xs text-slate-500">2026年最新</span>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          賃貸 vs 購入、結局どっちが得？<br />
          <span className="text-blue-400">30代向けに費用・自由度・資産性を徹底比較</span>
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「賃貸と購入、どっちが得？」は永遠の問いに見えますが、実は<strong className="text-white">比較すべき軸が明確</strong>です。この記事では①30年間の総費用 ②自由度・リスク ③資産価値の3軸で比較し、あなたの状況に合った答えを導きます。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💴 30年間の総費用シミュレーション
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            まず数字で比較します。都内・70㎡・2LDKを想定したケースです。
          </p>

          {/* 賃貸ケース */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-4">
            <p className="text-xs font-bold text-blue-300 mb-2">🏠 賃貸ケース（月20万円・30年間）</p>
            <div className="space-y-1 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>月額家賃</span><span className="font-semibold text-white">20万円/月</span>
              </div>
              <div className="flex justify-between">
                <span>30年間の総支払い</span><span className="font-semibold text-red-400">7,200万円</span>
              </div>
              <div className="flex justify-between">
                <span>更新料（2年ごと・家賃1ヶ月）</span><span className="font-semibold text-slate-200">約300万円</span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-1 mt-1">
                <span className="font-bold">総コスト概算</span><span className="font-black text-red-400">約7,500万円</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">※ 退去時の原状回復費用・引越し費用別途</p>
            </div>
          </div>

          {/* 購入ケース */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-4">
            <p className="text-xs font-bold text-emerald-300 mb-2">🏢 購入ケース（6,000万円・頭金1,000万円・金利0.7%・35年返済）</p>
            <div className="space-y-1 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>頭金</span><span className="font-semibold text-white">1,000万円</span>
              </div>
              <div className="flex justify-between">
                <span>月々のローン（35年・0.7%）</span><span className="font-semibold text-white">約14.8万円/月</span>
              </div>
              <div className="flex justify-between">
                <span>管理費・修繕積立金</span><span className="font-semibold text-white">約3万円/月</span>
              </div>
              <div className="flex justify-between">
                <span>固定資産税（年間）</span><span className="font-semibold text-white">約12万円/年</span>
              </div>
              <div className="flex justify-between">
                <span>購入諸費用（仲介・登記等）</span><span className="font-semibold text-white">約250万円</span>
              </div>
              <div className="flex justify-between">
                <span>30年間の総支払い（利息含む）</span><span className="font-semibold text-slate-200">約7,100万円</span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-1 mt-1">
                <span className="font-bold">総コスト概算</span><span className="font-black text-emerald-400">約7,350万円</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">※ 30年後に資産（不動産）が残る</p>
            </div>
          </div>

          <div className="bg-blue-500/10 rounded-xl border border-blue-500/20 p-4 text-sm text-slate-300">
            <p className="font-bold text-blue-300 mb-2">💡 ポイント：純粋なコストはほぼ同じ</p>
            <p className="leading-relaxed">
              この条件では30年間の総コストは賃貸・購入ともに<strong className="text-white">約7,300〜7,500万円</strong>とほぼ同等です。ただし購入の場合、30年後に<strong className="text-white">不動産という資産が残ります</strong>（売却価格によって大きく異なる）。
            </p>
          </div>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ⚖️ 賃貸 vs 購入：メリット・デメリット比較
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 賃貸 */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-bold text-blue-300 mb-3">🏠 賃貸</p>
              <div className="space-y-2">
                <p className="text-xs font-bold text-emerald-400 mb-1">メリット</p>
                {[
                  "転勤・転職・結婚などに柔軟に対応できる",
                  "建物の修繕・老朽化リスクを負わない",
                  "固定資産税・管理費の義務がない",
                  "ライフスタイルの変化に合わせて住み替えできる",
                ].map((item, i) => (
                  <p key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-400 shrink-0">✓</span>{item}
                  </p>
                ))}
                <p className="text-xs font-bold text-red-400 mt-3 mb-1">デメリット</p>
                {[
                  "支払いが資産にならない（家賃は「消費」）",
                  "老後の住居費が続く（収入が減る時期にも）",
                  "リフォームや改築の自由がない",
                  "家賃値上げリスクがある",
                ].map((item, i) => (
                  <p key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-red-400 shrink-0">✗</span>{item}
                  </p>
                ))}
              </div>
            </div>
            {/* 購入 */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-bold text-emerald-300 mb-3">🏢 購入</p>
              <div className="space-y-2">
                <p className="text-xs font-bold text-emerald-400 mb-1">メリット</p>
                {[
                  "ローン完済後は住居費が大幅に下がる",
                  "資産として売却・賃貸に出すことができる",
                  "リフォームの自由度が高い",
                  "住宅ローン控除（減税）が使える",
                ].map((item, i) => (
                  <p key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-400 shrink-0">✓</span>{item}
                  </p>
                ))}
                <p className="text-xs font-bold text-red-400 mt-3 mb-1">デメリット</p>
                {[
                  "転居の柔軟性が下がる（売却に時間・コストがかかる）",
                  "建物の老朽化・修繕費用を負担する",
                  "価格下落リスクがある（特に築古・郊外）",
                  "頭金・諸費用など初期コストが大きい",
                ].map((item, i) => (
                  <p key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-red-400 shrink-0">✗</span>{item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━ アフィリエイト CTA ━━ */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 購入を検討するなら、まず予算を数字で確認</p>
          <p className="text-sm font-black text-white mb-2">「無理なく買える額」を3分で無料診断</p>
          <p className="text-xs text-slate-400 mb-3">年収・頭金・金利・管理費を入れるだけで安全購入価格を自動計算。購入派も賃貸派も、一度数字を出してみることをおすすめします。</p>
          <Link
            href="/mansion"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            無料でマンション購入診断する →
          </Link>
        </div>

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            👤 ライフステージ別：あなたはどっち？
          </h2>
          <div className="space-y-3">
            {[
              {
                situation: "独身・20代後半〜30代前半",
                rec: "賃貸 or 慎重に購入",
                color: "border-blue-500/40 bg-blue-500/10",
                textColor: "text-blue-300",
                reason: "転勤・転職・結婚など変化が多い時期。購入するなら「すぐ売れる・貸せる」立地・間取りを選ぶことが最優先。独身向け物件（1LDK等）は将来の売却・賃貸が難しいケースもある。",
              },
              {
                situation: "共働き夫婦・子供なし or 計画中",
                rec: "購入が有利になりやすい",
                color: "border-emerald-500/40 bg-emerald-500/10",
                textColor: "text-emerald-300",
                reason: "世帯年収が高く、ローン審査に通りやすい時期。子供の学区を意識した物件選びにもなる。ただしペアローンは育休・転職時のリスクを慎重に計算すること。",
              },
              {
                situation: "子供あり・小中学生",
                rec: "購入を優先",
                color: "border-amber-500/40 bg-amber-500/10",
                textColor: "text-amber-300",
                reason: "転校させたくない・学区が重要になる時期。賃貸では気に入った学区の物件を確保し続けるのが難しく、家賃も上がりやすい。この時期の「安定」に価値がある。",
              },
              {
                situation: "転勤族・仕事が不安定",
                rec: "賃貸継続が無難",
                color: "border-rose-500/40 bg-rose-500/10",
                textColor: "text-rose-300",
                reason: "転勤で動けなくなると「売れない・貸せない・住めない」トリプルリスクが発生する。会社の住宅手当が充実している場合は特に、賃貸のコストパフォーマンスが高い。",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border-2 p-4 ${item.color}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-white">{item.situation}</p>
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full bg-slate-900/50 ${item.textColor}`}>{item.rec}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション4 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏙️ 都内特有の事情：購入が難しい理由と突破口
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            東京23区の新築マンション平均価格は2024年に<strong className="text-white">1億円超</strong>。年収1,000万円でも「安全購入価格」を大幅に超えます。これが都内で「賃貸のほうが合理的」と感じる人が多い理由です。
          </p>
          <div className="space-y-3 mb-4">
            {[
              { title: "突破口① 中古マンションに目を向ける", body: "築10〜20年の中古は新築の6〜7割程度の価格帯。資産性が高いエリアなら価格下落リスクも低い。" },
              { title: "突破口② 23区外・神奈川・埼玉を検討する", body: "通勤30〜40分の圏内なら3,000〜5,000万円台で2LDK〜3LDKが購入圏内。家賃に換算すると明らかに割安なケースが多い。" },
              { title: "突破口③ 会社の住宅補助を最大活用してから購入", body: "住宅手当が充実している企業なら、補助が出る間は賃貸でストックを貯め、子供が小学校入学前に購入するという計画が賢い。" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ セクション5 まとめ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📌 結論：「どっちが得か」より「今の自分に合うか」
          </h2>
          <div className="bg-blue-500/10 rounded-xl border border-blue-500/30 p-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              純粋な費用比較では<strong className="text-white">30年間の総コストはほぼ同等</strong>です。「どっちが得か」の答えは、
              金利・物件の価格動向・家賃の推移・あなたのライフプランによって変わります。
            </p>
            <p>
              より重要な問いは<strong className="text-white">「今の自分のライフプランに合っているか」</strong>です。
              5〜10年以内に大きな転居が見込まれるなら賃貸。
              腰を据えて住む場所が決まっているなら購入が有利になりやすい。
            </p>
            <p>
              購入を検討するなら、まず<strong className="text-white">「無理なく買える価格の上限」</strong>を計算することが出発点です。
              銀行の審査額ではなく、家計を崩さない安全な借入額を先に把握しましょう。
            </p>
          </div>
        </section>

        {/* モゲチェック アフィリエイト */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 購入するなら、金利比較で数百万円変わる</p>
          <p className="text-sm font-black text-white mb-2">住宅ローンは「モゲチェック」で一括比較</p>
          <p className="text-xs text-slate-400 mb-3">同じ借入額・返済年数でも、金利が0.3%違うだけで総返済額が数百万円変わります。複数行を無料で一括比較できます。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            モゲチェックで無料診断する →
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+F9J44Y+3SUE+15RCDE" alt="" style={{ display: "block" }} />
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
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">
          ※本記事は情報提供を目的としており、特定の不動産物件・金融商品の購入を推奨するものではありません。シミュレーション数値はあくまで参考値です。実際の購入判断は専門家にご相談ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
            <Link href="/articles/mansion-kounyu-checklist" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">✅</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション購入チェックリスト｜契約前に必ず確認すべき15項目</span>
            </Link>
            <Link href="/articles/mansion-kattewa-ikenai-joken" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🚨</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション「買ってはいけない」物件の条件とは？</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
