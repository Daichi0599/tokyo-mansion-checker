import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "買ってはいけないマンションの特徴10選【立地・建物・管理で後悔しない】｜30Lab",
  description:
    "買ってはいけないマンションの特徴を立地・建物・管理・契約の観点で解説。「駅遠・南向きNG・修繕積立金が異常に安い」など、購入前に必ず確認すべき10のチェックポイント。",
  keywords: [
    "マンション 買ってはいけない",
    "マンション 買ってはいけない 場所",
    "マンション 失敗 特徴",
    "マンション 後悔 立地",
    "マンション 選び方 注意点",
  ],
  openGraph: {
    title: "買ってはいけないマンションの特徴10選【後悔しない選び方】",
    description: "立地・建物・管理・契約で後悔しないためのチェックポイント10選。購入前に必ず確認を。",
  },
};

export default function MansionKattewaIkenaiPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">買ってはいけないマンション</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">物件選び・失敗回避</span>
          <span className="text-xs text-slate-500">2025年最新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          <span className="text-red-400">買ってはいけないマンション</span>の特徴10選<br />
          立地・建物・管理で後悔しない選び方
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「あのとき別の物件にしておけば…」——マンション購入後に後悔する人の多くが、事前に確認できたはずのサインを見逃しています。この記事では、購入前に必ずチェックすべき「買ってはいけないマンションの特徴」を10個に絞って解説します。
        </p>

        {/* ━━ 概要ボックス ━━ */}
        <div className="bg-red-500/10 border border-red-200 rounded-2xl p-5 mb-10">
          <p className="text-sm font-black text-red-400 mb-3">⚠️ この記事でわかること</p>
          <ul className="space-y-1.5">
            {[
              "立地で後悔する「買ってはいけない場所」の特徴",
              "建物・設備で後悔しやすい物件の見分け方",
              "管理組合・修繕積立金の危険なサイン",
              "契約前に必ず確認すべき書類・数字",
            ].map((item, i) => (
              <li key={i} className="text-xs text-red-300 flex items-start gap-2">
                <span className="mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ━━ セクション1：立地 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-red-100">
            🚩 立地で買ってはいけないマンションの特徴
          </h2>
          <div className="space-y-4">

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❶ 駅徒歩15分超（特に坂あり）</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                徒歩15分超の物件は、資産価値の下落スピードが速く、将来の売却・賃貸が難しくなります。特に坂がある場合、雨の日・真夏・高齢化後の生活が想像以上に辛くなります。
              </p>
              <div className="bg-slate-800 rounded-lg px-3 py-2">
                <p className="text-xs text-slate-400">📌 目安：<strong className="text-slate-200">徒歩10分以内が理想。15分超は資産価値維持が困難</strong></p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❷ 将来の開発・環境変化リスクがある立地</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                目の前の空き地に高層ビルが建つ、隣に嫌悪施設（工場・焼却場・風俗店密集地）が計画されているなど、現在良くても将来変わるリスクがあります。購入前に市区町村の都市計画情報を確認しましょう。
              </p>
              <div className="bg-yellow-500/10 rounded-lg px-3 py-2">
                <p className="text-xs text-yellow-300">📌 確認方法：市区町村の<strong>用途地域マップ</strong>・<strong>都市計画情報</strong>をWebで確認</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❸ ハザードマップの浸水・土砂エリア</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                近年の豪雨・台風で浸水被害が増加。ハザードマップで浸水想定エリアに入る物件は、将来の保険料上昇・売却困難につながります。特に低層階（1〜2階）は要注意。
              </p>
              <div className="bg-blue-500/10 rounded-lg px-3 py-2">
                <p className="text-xs text-blue-200">📌 確認方法：<strong>国土交通省ハザードマップポータル</strong>で無料確認可能</p>
              </div>
            </div>

          </div>
        </section>

        {/* ━━ セクション2：建物 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-red-100">
            🏚️ 建物・設備で買ってはいけないマンションの特徴
          </h2>
          <div className="space-y-4">

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❹ 旧耐震基準（1981年6月以前の建物）</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                1981年6月以前に建築確認を受けた建物は旧耐震基準。住宅ローン控除が受けられないケースがあり、銀行融資も受けにくい物件があります。耐震診断を確認しましょう。
              </p>
              <div className="bg-red-500/10 rounded-lg px-3 py-2">
                <p className="text-xs text-red-300">⚠️ 住宅ローン控除を受けるには<strong>新耐震基準適合証明書</strong>または<strong>耐震基準適合証明書</strong>が必要</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❺ 総戸数が少なすぎる（20戸未満）</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                総戸数が少ないと管理費・修繕積立金を少人数で分担するため一戸あたり費用が高くなります。また管理組合が機能しにくく、大規模修繕の合意形成が難しいケースも。
              </p>
              <div className="bg-slate-800 rounded-lg px-3 py-2">
                <p className="text-xs text-slate-400">📌 目安：<strong className="text-slate-200">50戸以上が管理コスト・修繕費のバランスが取りやすい</strong></p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❻ 北向き・採光・通風が極端に悪い住戸</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                北向き住戸は日当たりが悪く、冬の光熱費が高くなる・結露・カビのリスクがあります。また、隣のビルとの距離が近すぎる物件は、昼間でも薄暗く体感的な快適性が低下します。
              </p>
              <div className="bg-slate-800 rounded-lg px-3 py-2">
                <p className="text-xs text-slate-400">📌 確認方法：晴れた日の午前・午後に内覧し、実際の日当たりを体感で確認</p>
              </div>
            </div>

          </div>
        </section>

        {/* ━━ アフィリエイト CTA ━━ */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 物件を決める前に、住宅ローンも比較を</p>
          <p className="text-sm font-black text-white mb-2">「モゲチェック」で金利・審査通過率を無料確認</p>
          <p className="text-xs text-slate-400 mb-3">良い物件を見つけたら、次は金利比較。銀行によって0.3〜0.5%違うことも。50行以上から最安を自動提案。</p>
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

        {/* ━━ セクション3：管理・修繕 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-red-100">
            🔧 管理・修繕積立金で買ってはいけないマンションの特徴
          </h2>
          <div className="space-y-4">

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❼ 修繕積立金が異常に安い（月3,000円以下）</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                修繕積立金が月3,000円以下の物件は要注意。適正額は1㎡あたり月200〜400円（50㎡なら月1〜2万円）程度です。安すぎる場合、将来的に大幅な値上げか修繕不足に陥るリスクがあります。
              </p>
              <div className="overflow-x-auto rounded-lg border border-slate-700">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-800">
                      <th className="text-left px-3 py-2 font-bold text-slate-300">専有面積</th>
                      <th className="text-right px-3 py-2 font-bold text-emerald-400">適正な積立目安</th>
                      <th className="text-right px-3 py-2 font-bold text-red-400">危険なライン</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { area: "40㎡（1LDK）", ok: "月8,000〜16,000円", ng: "月3,000円以下" },
                      { area: "60㎡（2LDK）", ok: "月12,000〜24,000円", ng: "月5,000円以下" },
                      { area: "80㎡（3LDK）", ok: "月16,000〜32,000円", ng: "月6,000円以下" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                        <td className="px-3 py-2 font-medium text-slate-200">{row.area}</td>
                        <td className="px-3 py-2 text-right text-emerald-400 font-semibold">{row.ok}</td>
                        <td className="px-3 py-2 text-right text-red-400 font-semibold">{row.ng}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❽ 管理組合が機能していない（議事録が空白・総会未開催）</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                管理組合の議事録（過去3〜5年分）に空白期間がある、総会が未開催の物件は管理が機能していない危険サイン。修繕計画の合意形成も難しく、建物の老朽化が進みやすくなります。
              </p>
              <div className="bg-yellow-500/10 rounded-lg px-3 py-2">
                <p className="text-xs text-yellow-300">📌 確認方法：重要事項説明書に含まれる<strong>管理組合の財務状況・議事録</strong>を必ず確認</p>
              </div>
            </div>

          </div>
        </section>

        {/* ━━ セクション4：契約・価格 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-red-100">
            📋 価格・契約で気をつけるべき特徴
          </h2>
          <div className="space-y-4">

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❾ 周辺相場より明らかに高い（坪単価が10%超高い）</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                同エリア・同グレードの物件と比べて坪単価が10%以上高い物件は、購入後の資産価値低下が大きくなりやすいです。SUUMOやathomeで同エリアの類似物件と必ず比較しましょう。
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
              <p className="text-sm font-black text-red-400 mb-2">❿ 売り急ぎのサインがある物件（価格が急落・長期在庫）</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                SUUMO掲載から6ヶ月以上経過・価格を2回以上下げている物件は、何らかの問題（近隣トラブル・欠陥・管理問題）を抱えている可能性があります。「なぜ売れていないか」を必ず確認しましょう。
              </p>
              <div className="bg-slate-800 rounded-lg px-3 py-2">
                <p className="text-xs text-slate-400">📌 確認方法：掲載日・価格変更履歴をSUUMOの物件詳細ページで確認できます</p>
              </div>
            </div>

          </div>
        </section>

        {/* ━━ チェックリスト ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ✅ 購入前チェックリスト（10項目）
          </h2>
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5">
            <div className="space-y-2">
              {[
                "駅徒歩10分以内（坂なし）か確認",
                "ハザードマップで浸水・土砂リスクを確認",
                "周辺の用途地域・都市計画を確認",
                "1981年6月以降の新耐震基準物件か確認",
                "総戸数20戸以上か確認",
                "実際に昼間・晴れの日に内覧して日当たりを確認",
                "修繕積立金が1㎡あたり月200円以上あるか確認",
                "管理組合の議事録（直近3年分）を確認",
                "周辺の坪単価と比較して価格が適正か確認",
                "掲載から6ヶ月以内・価格変更が少ないか確認",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
                  <span className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></span>
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
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
          ※本記事は情報提供を目的としており、特定の物件の購入可否を判断するものではありません。
          記載内容は執筆時点の情報に基づいており、市況・法制度は変動します。
          具体的な購入判断は、不動産会社・FP・弁護士などの専門家にご相談ください。
        </p>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mt-8 mb-8">
          <p className="text-base font-black mb-1">あなたの予算でどこまで買えるか診断</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・金利を入力するだけ。3分で安全購入価格がわかります。</p>
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
            <Link href="/articles/mansion-baibai-shisan-kachi" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📉</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">資産価値が落ちにくいマンションの条件とは？立地・築年数で解説</span>
            </Link>
            <Link href="/articles/tokyo-mansion-chuko-vs-shintiku" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🆚</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">都内マンション、中古と新築どっちがいい？価格差・選び方を解説</span>
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
