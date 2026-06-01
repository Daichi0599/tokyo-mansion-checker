import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンション購入チェックリスト｜契約前に必ず確認すべき15項目【保存版】｜30Lab",
  description:
    "マンション購入・契約前に必ず確認すべき15のチェックリスト。物件・立地・価格・管理組合・住宅ローン・契約書の確認ポイントを一覧化。内覧から契約まで使えます。",
  keywords: [
    "マンション 購入 チェックリスト",
    "マンション 内覧 確認 ポイント",
    "マンション 契約 前 確認",
    "マンション 購入 注意点",
    "マンション 内覧 チェックシート",
  ],
  openGraph: {
    title: "マンション購入チェックリスト｜契約前に必ず確認すべき15項目",
    description:
      "内覧から契約まで使えるチェックリスト15項目。見落としがちなポイントを網羅した保存版。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "マンション購入チェックリスト｜契約前に必ず確認すべき15項目",
    description: "物件・立地・価格・管理組合・ローン・契約書まで。見落とし防止の保存版チェックリスト。",
  },
};

const CHECKLIST = [
  {
    category: "📍 立地・周辺環境",
    color: { border: "border-blue-500/40", bg: "bg-blue-500/10", text: "text-blue-300", badge: "bg-blue-500/20" },
    items: [
      {
        no: 1,
        title: "駅からの実際の徒歩時間を自分で計測する",
        body: "物件広告の「徒歩◯分」は80m/分で計算した最短ルートです。信号待ち・坂道・混雑を考慮した実際の時間は広告より1〜3分長くなることが多い。朝のラッシュ時間帯に実際に歩いてみるのがベスト。",
        point: "夜間・雨天時・スーツケースを持った場合も意識して歩いてみる",
      },
      {
        no: 2,
        title: "生活利便施設（スーパー・病院・学校）を地図で確認する",
        body: "毎日使うスーパーまでの距離は生活満足度に直結します。特に子育て世帯は保育園・小学校の位置と評判を事前に調べておくことが重要。災害時の避難場所や病院の場所も確認しておくと安心です。",
        point: "ハザードマップも必ず確認（国土交通省のサイトで無料公開）",
      },
      {
        no: 3,
        title: "時間帯・曜日を変えて現地を複数回訪問する",
        body: "平日昼間と週末夜間では雰囲気が大きく異なります。夜間の治安・照明・騒音（飲食店・工場・交通量）は昼の内覧では分かりません。少なくとも昼・夜の2回は現地に足を運びましょう。",
        point: "近隣にカラオケ・パチンコ・幹線道路がないかも確認",
      },
    ],
  },
  {
    category: "🏢 物件・建物",
    color: { border: "border-indigo-500/40", bg: "bg-indigo-500/10", text: "text-indigo-300", badge: "bg-indigo-500/20" },
    items: [
      {
        no: 4,
        title: "日当たり・採光を時間帯別に確認する",
        body: "内覧は多くの場合、日中の明るい時間帯に設定されます。冬至の日照シミュレーションは「日当たりくん」などの無料ツールで確認可能。南向きでも前の建物の影になれば暗くなります。",
        point: "隣接する空き地・低層建物への建築予定計画も要確認",
      },
      {
        no: 5,
        title: "建物の外観・共用部の状態を確認する",
        body: "エントランス・廊下・エレベーターの清潔さは管理レベルの指標です。汚れたポスト・荒れた植栽・放置された自転車は管理組合や住人のモラルを反映します。外壁のひび割れ・タイルの浮きも要チェック。",
        point: "ゴミ置き場の整理状況・掲示板の内容も管理状態の目安",
      },
      {
        no: 6,
        title: "部屋の収納量・間取りの使い勝手を実測する",
        body: "内覧時は図面の寸法を信じすぎず、実際に採寸することが重要です。特に冷蔵庫・洗濯機置き場・カーテンレールの幅は要実測。収納の奥行き・高さも、今の家具が入るかどうか確認しましょう。",
        point: "コンセントの数・位置、携帯の電波状況も内覧時に確認",
      },
    ],
  },
  {
    category: "💴 価格・費用",
    color: { border: "border-emerald-500/40", bg: "bg-emerald-500/10", text: "text-emerald-300", badge: "bg-emerald-500/20" },
    items: [
      {
        no: 7,
        title: "坪単価をエリア相場と比較する",
        body: "「価格が高い・安い」の判断は絶対額ではなく坪単価（万円/坪）でするのが基本です。同じ区内でも駅距離・築年数・階数で大きく変わります。30Labの物件診断ツールを使えば坪単価とエリア相場比を即座に確認できます。",
        point: "坪単価 ＝ 物件価格 ÷（面積㎡ ÷ 3.3）",
      },
      {
        no: 8,
        title: "管理費・修繕積立金の月額と値上がり履歴を確認する",
        body: "管理費・修繕積立金はローン返済額に加わる固定費です。都内マンションでは月2〜5万円が相場ですが、築古の物件は修繕積立金の値上げが近い可能性があります。重要事項説明書で過去の推移を必ず確認しましょう。",
        point: "管理費 ＋ 修繕積立金の1㎡あたり月額が300円超は割高の目安",
      },
      {
        no: 9,
        title: "購入諸費用（物件価格の3〜7%）を事前に把握する",
        body: "仲介手数料（物件価格×3.3%）・登記費用・住宅ローン手数料・火災保険料・引越し費用など、物件価格の3〜7%が別途かかります。6,000万円の物件なら180〜420万円が目安。頭金とは別に用意が必要です。",
        point: "固定資産税の精算分（引渡日以降の日割り分）も契約時に支払いが発生",
      },
    ],
  },
  {
    category: "🏗️ 管理組合・修繕",
    color: { border: "border-amber-500/40", bg: "bg-amber-500/10", text: "text-amber-300", badge: "bg-amber-500/20" },
    items: [
      {
        no: 10,
        title: "修繕積立金の積立残高・長期修繕計画を確認する",
        body: "積立金が少ない＝将来的な一時金徴収リスクがあります。重要事項説明書に記載されている「積立金総額」と「長期修繕計画」を確認。計画通りの積立ができていない場合は注意が必要です。",
        point: "国交省ガイドラインでは1㎡あたり月200〜300円が適正とされる",
      },
      {
        no: 11,
        title: "大規模修繕の実施履歴と次回予定を確認する",
        body: "マンションは一般的に12〜15年周期で大規模修繕が行われます。直前に大規模修繕が終わった物件は建物の状態が良く、当面の追加費用リスクが低い。次の大規模修繕時期が3〜5年後に迫っている場合は積立状況を精査しましょう。",
        point: "外壁補修・防水工事・給排水管の更新状況も確認",
      },
      {
        no: 12,
        title: "管理組合の議事録（直近3期分）を入手して読む",
        body: "管理組合の議事録には、建物の問題・近隣トラブル・修繕積立金の見直し議論など重要な情報が記載されています。仲介業者に依頼すれば閲覧・入手が可能です。問題案件が多い・会合が機能していないマンションは要注意。",
        point: "住民間トラブルの記録・ペット可否の変更履歴なども議事録で確認可能",
      },
    ],
  },
  {
    category: "🏦 住宅ローン・資金",
    color: { border: "border-purple-500/40", bg: "bg-purple-500/10", text: "text-purple-300", badge: "bg-purple-500/20" },
    items: [
      {
        no: 13,
        title: "複数の金融機関で住宅ローンの事前審査を取得する",
        body: "住宅ローンの事前審査（仮審査）は1〜2行だけで決めると損をする可能性があります。銀行によって金利・審査基準・優遇条件が異なります。モゲチェックのような一括比較サービスを使えば、最短3分で複数行を比較できます。",
        point: "事前審査は複数行に申し込んでもブラックリストには載らない",
      },
      {
        no: 14,
        title: "月々の実質住居費（ローン＋管理費等）が年収の25%以内か確認する",
        body: "「借りられる額」ではなく「無理なく返せる額」が重要です。ローン返済額＋管理費・修繕積立金の合計が月収の25%以内であれば安全圏です。30%を超えると家計が苦しくなるリスクが高まります。",
        point: "30Labのマンション診断ツールで安全購入価格をすぐ計算できます",
      },
    ],
  },
  {
    category: "📄 契約・重要事項",
    color: { border: "border-rose-500/40", bg: "bg-rose-500/10", text: "text-rose-300", badge: "bg-rose-500/20" },
    items: [
      {
        no: 15,
        title: "重要事項説明書の告知事項・権利関係を必ず確認する",
        body: "「事故物件」「境界線の問題」「再建築不可」「土壌汚染」「暴力団事務所の近隣」など、重要事項説明書には開示義務のある情報が記載されています。署名捺印の前に不明点はすべて質問しましょう。ローン特約（ローンが通らなかった場合の契約解除条項）の有無も必ず確認。",
        point: "重要事項説明は宅建士が行う義務あり。分からなければその場で質問してOK",
      },
    ],
  },
];

export default function MansionChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* パンくず */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">マンション購入チェックリスト</span>
        </nav>

        {/* タグ・日付 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">
            購入前チェック
          </span>
          <span className="text-xs text-slate-500">2026年最新</span>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          マンション購入チェックリスト<br />
          <span className="text-blue-400">契約前に必ず確認すべき15項目</span>【保存版】
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          マンション購入で後悔する人の多くが「内覧のときに気づかなかった」「契約前に確認しておけばよかった」と話します。
          この記事では、内覧から契約まで使えるチェックリストを<strong className="text-white">15項目</strong>にまとめました。
          物件探しの段階でブックマークしておき、都度確認することをおすすめします。
        </p>

        {/* 一覧サマリー */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5 mb-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">15項目の早見表</p>
          <ol className="space-y-1.5 text-sm text-slate-300">
            {CHECKLIST.flatMap((c) => c.items).map((item) => (
              <li key={item.no} className="flex items-start gap-2">
                <span className="shrink-0 w-5 h-5 rounded-full bg-slate-700 text-slate-400 text-xs font-bold flex items-center justify-center mt-0.5">{item.no}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 各カテゴリ */}
        {CHECKLIST.map((cat) => (
          <section key={cat.category} className="mb-10">
            <h2 className="text-lg font-black text-white mb-5 pb-2 border-b-2 border-blue-500/20">
              {cat.category}
            </h2>
            <div className="space-y-5">
              {cat.items.map((item) => (
                <div
                  key={item.no}
                  className={`rounded-2xl border-2 ${cat.color.border} ${cat.color.bg} p-5`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`shrink-0 w-7 h-7 rounded-full ${cat.color.badge} ${cat.color.text} text-xs font-extrabold flex items-center justify-center`}>
                      {item.no}
                    </span>
                    <h3 className="text-sm font-extrabold text-white leading-snug pt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3 pl-10">
                    {item.body}
                  </p>
                  <div className="ml-10 bg-slate-900/50 rounded-xl px-3 py-2 flex items-start gap-1.5">
                    <span className={`shrink-0 text-xs font-bold ${cat.color.text} mt-0.5`}>✓</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.point}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* 診断ツールCTA */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 予算チェックを自動化</p>
          <p className="text-sm font-black text-white mb-2">チェックNo.7・No.14はツールで即確認できます</p>
          <p className="text-xs text-slate-400 mb-3">
            坪単価のエリア相場比較（物件診断）・安全購入価格の算出（マンション診断）を無料で。
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              href="/mansion"
              className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-4 py-3 rounded-xl transition-colors"
            >
              🏠 安全購入価格を診断する →
            </Link>
            <Link
              href="/check"
              className="flex-1 inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-sm px-4 py-3 rounded-xl border border-slate-600 transition-colors"
            >
              🔍 物件の坪単価を診断する
            </Link>
          </div>
        </div>

        {/* よくある落とし穴 */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ⚠️ チェックリストを使う際の3つの注意点
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "内覧は「感情的になる前」に確認する",
                body: "気に入った物件を内覧すると、興奮して細かいチェックが甘くなりがちです。内覧前にこのリストを印刷または保存しておき、机上で確認する癖をつけましょう。",
              },
              {
                title: "「後で確認すればいい」は危険",
                body: "マンション購入は時間的プレッシャーがかかります。「人気物件なので早めに決断を」と急かされても、チェックリストをクリアするまでは署名しないことが原則です。",
              },
              {
                title: "仲介業者は売り手の味方であることを忘れない",
                body: "仲介業者は成約すると手数料が発生します。「問題ない」という回答を鵜呑みにせず、自分で確認できることは自分で確認しましょう。第三者の建物診断（ホームインスペクション）の活用も検討してください。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-slate-100 mb-1">⚠️ {item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* モゲチェック アフィリエイト */}
        <div className="bg-slate-900 border border-blue-500/25 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-blue-400 mb-1">💡 住宅ローン、どこが一番お得？</p>
          <p className="text-sm font-black text-white mb-2">無料で複数行を一括比較できる「モゲチェック」</p>
          <p className="text-xs text-slate-400 mb-3">
            チェックNo.13「複数行での事前審査」を最短3分で完了。銀行に個別に連絡する手間なし。
          </p>
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
          ※本記事は情報提供を目的としており、特定の物件・金融商品の購入を推奨するものではありません。
          チェックリストはあくまでも参考情報です。実際の購入判断は、宅建士・FP・金融機関などの専門家にご相談ください。
        </p>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-200 mb-3">関連記事</h2>
          <div className="space-y-2">
            <Link href="/articles/mansion-kattewa-ikenai-joken" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🚨</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション「買ってはいけない」物件の条件とは？</span>
            </Link>
            <Link href="/articles/mansion-kanrihi-shuzenhi" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏢</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンションの管理費・修繕積立金の相場はいくら？</span>
            </Link>
            <Link href="/articles/mansion-kounyu-nagare" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">📋</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション購入の流れを全ステップで解説</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
