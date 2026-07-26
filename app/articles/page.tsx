import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンション購入コラム｜30Lab",
  description:
    "マンション購入・住宅ローンに関する解説記事。年収別の購入可能額、返済比率の目安、頭金の相場など、数字で理解できるコンテンツを掲載。",
  openGraph: {
    title: "マンション購入コラム｜30Lab",
    description: "マンション購入・住宅ローンに関する解説記事。",
  },
};

const articles = [
  {
    href: "/articles/tokyo-23ku-shisan-kachi-ranking",
    emoji: "🗺️",
    title: "東京23区 マンション資産価値ランキング2026｜値下がりしにくい区を一覧解説",
    description:
      "23区を坪単価・資産性グレード（S〜D）・価格トレンドで一覧ランキング。値下がりしにくい区の4条件と予算別のエリアの狙い方を解説。",
    tag: "エリア・資産価値",
    date: "2026年最新",
  },
  {
    href: "/articles/jonan-mansion-takakute-kaenai",
    emoji: "🏙️",
    title: "城南エリアのマンションが高くて買えない人へ｜現実的な代替と狙い方",
    description:
      "品川・目黒・大田・世田谷の城南エリアが高すぎる…そんな人向けに、同じ城南で狙える割安区・隣接エリア・妥協ポイントを坪単価データで解説。",
    tag: "エリア・資産価値",
    date: "2026年最新",
  },
  {
    href: "/articles/jonan-daitai-area",
    emoji: "🗺️",
    title: "城南エリアの代わりになる街は？代替候補5エリアを比較",
    description:
      "大田区・武蔵小杉・川崎・日吉綱島・品川区西部を城南っぽさ・価格・都心アクセス・資産性で比較。予算内で城南的な暮らしを実現する現実解。",
    tag: "エリア・資産価値",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-baibai-shisan-kachi",
    emoji: "📈",
    title: "資産価値が落ちにくいマンションの条件とは？立地・築年数で解説",
    description:
      "売却時に値下がりしにくいマンションの共通点を、立地・築年数・管理状態の観点から解説。将来の資産性を意識した物件選びの基準。",
    tag: "エリア・資産価値",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-kaidoki-2025",
    emoji: "📅",
    title: "マンションの買い時はいつ？2026年の相場と判断基準を解説",
    description:
      "価格は高止まり・金利は上昇トレンド。2026年の市況を整理し「今買うべき人・待つべき人」の判断基準を解説します。",
    tag: "市況・購入タイミング",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-developer-brand",
    emoji: "🏗️",
    title: "マンションデベロッパー大手のブランド比較｜三井・野村・東急・モリモト",
    description:
      "主要デベロッパー（売主）のブランド特徴を比較。大手〜デザイナーズ系の強みと資産価値の見方を解説。気になる物件メモも随時更新。",
    tag: "デベロッパー・ブランド",
    date: "2026年最新",
  },
  {
    href: "/articles/nenshu-mansion-price",
    emoji: "💰",
    title: "年収別マンション購入可能額の目安【早見表・返済比率・年収倍率・頭金】",
    description:
      "年収500万〜1000万の購入可能額を早見表で提示。あわせて返済比率の安全ライン、年収倍率の考え方、頭金の適正額まで一本で解説します。",
    tag: "年収・購入可能額",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-shohiyo",
    emoji: "💴",
    title: "マンションの諸費用・維持費の完全ガイド｜購入時＋購入後にかかるお金の全額",
    description:
      "購入時の諸費用（物件価格の5〜10%）と、購入後の維持費（管理費・修繕積立金・固定資産税）を一本に集約。10年間の総額シミュレーションつき。",
    tag: "諸費用・維持費",
    date: "2026年最新",
  },
  {
    href: "/articles/jutaku-loan-shinsa-ochita",
    emoji: "🔎",
    title: "住宅ローン審査の完全ガイド｜年収基準・落ちる原因・収入合算・保証料",
    description:
      "審査に落ちる原因TOP5と対策、年収別の借入可能額の基準、共働きの収入合算とペアローンの違い、保証料の仕組みまでまとめて解説。",
    tag: "住宅ローン審査",
    date: "2026年最新",
  },
  {
    href: "/articles/jutaku-loan-hendokinri-koteikinri",
    emoji: "📊",
    title: "住宅ローン金利の完全ガイド｜変動vs固定・金融機関比較・団信・繰上返済",
    description:
      "変動と固定の比較・金利上昇シミュレーション、金融機関タイプ別の金利と手数料、団信の選び方、繰り上げ返済とボーナス払いの考え方まで。",
    tag: "金利・住宅ローン",
    date: "2026年最新",
  },
  {
    href: "/articles/chintai-vs-kounyu",
    emoji: "🏠",
    title: "賃貸 vs 購入、結局どっちが得？30代向けに徹底比較",
    description:
      "30年間の総費用シミュレーション・メリットデメリット・ライフステージ別の判断基準を解説。都内在住30代が賃貸か購入かを判断するための比較記事。",
    tag: "賃貸・購入比較",
    date: "2026年最新",
  },
  {
    href: "/articles/kosodate-hiyou-sougaku",
    emoji: "👶",
    title: "子育て費用は総額いくら？0歳〜大学卒業までの目安【公立vs私立の早見表】",
    description:
      "子ども1人の総額は教育費＋養育費で2,000万〜4,000万円超。公立・私立別の早見表、家計負担の山が来る時期、住宅ローンとの両立の順番まで解説。",
    tag: "子育て・教育費",
    date: "2026年最新",
  },
  {
    href: "/articles/tomobataraki-jutaku-loan",
    emoji: "👫",
    title: "共働き夫婦の住宅ローン｜世帯年収別の購入可能額と注意すべきリスク",
    description:
      "夫婦2人の年収を合算するとどこまで借りられる？収入合算・ペアローンの違いと、育休・転職を踏まえた現実的な試算。",
    tag: "共働き・ペアローン",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-kounyu-checklist",
    emoji: "✅",
    title: "マンション購入チェックリスト｜契約前に必ず確認すべき15項目【保存版】",
    description:
      "内覧から契約まで使えるチェックリスト15項目。立地・建物・価格・管理組合・住宅ローン・重要事項説明まで、見落としがちなポイントを網羅。",
    tag: "購入前チェック",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-kounyu-nagare",
    emoji: "📋",
    title: "マンション購入の流れと手順【初めてでも迷わない完全ガイド】",
    description:
      "情報収集から内覧・申込・住宅ローン審査・契約・引き渡しまで、マンション購入の全ステップと各段階の注意点を時系列で解説。",
    tag: "購入の流れ",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-kattewa-ikenai-joken",
    emoji: "🚨",
    title: "買ってはいけないマンションの特徴10選【立地・建物・管理で後悔しない】",
    description:
      "資産価値が落ちやすい・住んでから後悔しやすいマンションの特徴を10個に整理。内覧時に見抜くためのチェックポイントも解説。",
    tag: "購入前チェック",
    date: "2026年最新",
  },
  {
    href: "/articles/tokyo-mansion-chuko-vs-shintiku",
    emoji: "🏢",
    title: "都内マンション、中古と新築どっちがいい？価格差・メリット・選び方",
    description:
      "都内の新築と中古の価格差、それぞれのメリット・デメリット、資産性の違いを比較。予算内で満足度を上げる選び方を解説。",
    tag: "新築・中古比較",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-kasai-hoken",
    emoji: "🔥",
    title: "マンション火災保険の相場はいくら？広さ・プラン別の早見表付き",
    description:
      "広さ×プラン別の相場早見表で自分の保険料の目安がすぐわかる。保険料を決める5要素、地震保険セットの目安、節約方法まで解説。",
    tag: "火災保険・保険",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-floor-plan",
    emoji: "📐",
    title: "マンションの間取り選び方｜1LDK・2LDK・3LDKの違いと資産価値",
    description:
      "ライフステージ別の間取り選び。1LDK・2LDK・3LDKの価格差と使い勝手を比較し、資産価値が高い間取りの条件を解説。",
    tag: "間取り・住まい選び",
    date: "2026年最新",
  },
  {
    href: "/articles/mansion-dokushin-kounyu",
    emoji: "👤",
    title: "独身でマンションを買うのはアリ？メリット・デメリットを解説",
    description:
      "独身のマンション購入は資産形成になるのか。結婚・転勤など将来の変化を踏まえたリスクと、売却・賃貸しやすい物件の条件を解説。",
    tag: "独身・単身購入",
    date: "2026年最新",
  },
];

export default function ArticlesIndexPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* ブレッドクラム */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-slate-300 transition-colors">ホーム</a>
          <span>›</span>
          <span>コラム一覧</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* ヘッダー */}
        <div className="mb-8">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">COLUMN</p>
          <h1 className="text-2xl font-black text-white mb-2">マンション購入コラム</h1>
          <p className="text-sm text-slate-400">
            数字で理解するマンション購入。年収・ローン・頭金の基礎知識から、都内の相場まで。
          </p>
        </div>

        {/* 記事一覧 */}
        <div className="space-y-3">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="block bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{article.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-xs bg-blue-500/15 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">
                      {article.tag}
                    </span>
                    <span className="text-xs text-slate-600">{article.date}</span>
                  </div>
                  <h2 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors mb-1 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </div>
                <span className="text-slate-600 text-sm shrink-0 mt-1 group-hover:text-slate-400 transition-colors">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* ツールCTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-center">
          <p className="text-sm font-bold text-white mb-1">📱 自分の数字で試してみたい方へ</p>
          <p className="text-xs mb-4 text-blue-200">年収・頭金・金利を入力するだけ。無料で診断できます。</p>
          <a
            href="/mansion"
            className="inline-block bg-white text-blue-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            無料マンション診断ツールを使う →
          </a>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-slate-700 mt-10 pb-4 space-y-1">
          <p>本コンテンツは参考情報の提供を目的としています。投資・金融アドバイスではありません。</p>
          <p>© 2026 30Lab</p>
        </footer>
      </div>
    </main>
  );
}
