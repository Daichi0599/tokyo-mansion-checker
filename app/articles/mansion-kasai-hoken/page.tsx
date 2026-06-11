import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マンション火災保険の相場はいくら？【2026年】広さ・プラン別の早見表付き｜30Lab",
  description:
    "マンションの火災保険の相場を広さ（50㎡/70㎡/90㎡）×プラン別の早見表で解説。年間3,000円〜2万円の差がつく理由、保険料を決める5つの要素、地震保険セットの目安、一括見積もりで安くする方法まで。",
  keywords: [
    "火災保険 マンション",
    "火災保険 相場 マンション",
    "マンション 火災保険 相場",
    "火災保険 マンション 比較",
    "マンション 地震保険 相場",
  ],
  openGraph: {
    title: "マンション火災保険の相場はいくら？【2026年】広さ・プラン別の早見表付き",
    description: "広さ×プラン別の相場早見表で自分の保険料の目安がすぐわかる。保険料を決める5要素と節約方法も解説。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "マンション火災保険の相場はいくら？広さ・プラン別早見表",
    description: "50㎡/70㎡/90㎡×プラン別の相場早見表。保険料を決める5要素と節約方法も。",
  },
};

const FAQ_ITEMS = [
  {
    q: "マンションの火災保険の相場は年間いくらですか？",
    a: "専有部分の建物のみの最低限プランで年間3,000〜5,000円、建物＋家財の標準プランで年間8,000〜12,000円、地震保険をセットにすると年間12,000〜25,000円が目安です。専有面積・築年数・保険金額・補償範囲によって変わります。",
  },
  {
    q: "マンションは鉄筋コンクリートなのに火災保険は必要ですか？",
    a: "必要です。マンションの保険請求で最も多いのは火災ではなく水漏れ（給排水管事故・上階からの漏水）です。また住宅ローンを利用する場合、金融機関が火災保険への加入を融資条件としているため実質必須です。",
  },
  {
    q: "火災保険は5年契約と1年契約どちらが得ですか？",
    a: "5年一括払いの方が総額で約10〜15%安くなります。2022年10月以降、最長契約期間は10年から5年に短縮されました。資金に余裕があれば5年一括払いがおすすめです。",
  },
  {
    q: "地震保険はマンションでも入るべきですか？",
    a: "東京など地震リスクの高い地域では加入をおすすめします。火災保険だけでは地震を原因とする火災・損壊は補償されません。地震保険は火災保険金額の30〜50%が上限で、都内マンションなら年間1万〜1.5万円程度が目安です。",
  },
  {
    q: "不動産会社に勧められた火災保険にそのまま入っていいですか？",
    a: "比較せずに加入すると割高になるケースが多いです。不動産会社経由の保険は代理店手数料が上乗せされている場合があり、同じ補償内容でも一括見積もりで比較すると年間数千円〜1万円以上安くなることがあります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "マンション火災保険の相場はいくら？【2026年】広さ・プラン別の早見表付き",
  description:
    "マンションの火災保険の相場を広さ×プラン別の早見表で解説。保険料を決める5つの要素、地震保険セットの目安、節約方法まで。",
  author: {
    "@type": "Person",
    name: "たろう｜都内マンション研究中",
    url: "https://x.com/30lab_jp",
  },
  publisher: {
    "@type": "Organization",
    name: "30Lab",
    url: "https://30lab.vercel.app",
  },
  datePublished: "2026-04-15",
  dateModified: "2026-06-11",
  mainEntityOfPage: "https://30lab.vercel.app/articles/mansion-kasai-hoken",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function MansionKasaiHokenPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">マンション火災保険の相場</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">火災保険・保険</span>
          <span className="text-xs text-slate-500">2026年6月更新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          マンション火災保険の<span className="text-blue-400">相場はいくら？</span><br />
          広さ・プラン別の早見表付き【2026年】
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          マンション購入時に必ず必要になる火災保険。結論から言うと、都内マンションの相場は<strong className="text-white">建物のみなら年間3,000〜5,000円、建物＋家財の標準プランで年間8,000〜12,000円</strong>です。この記事では広さ・プラン別の早見表で「自分の場合いくらか」がすぐわかるように整理し、保険料を決める5つの要素と節約方法まで解説します。
        </p>

        {/* ━━ セクション1：相場早見表（最重要・最上部） ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💰 マンション火災保険の相場早見表【広さ×プラン別】
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            東京都内・築15年以内・鉄筋コンクリート造（M構造）のマンションを想定した、年間保険料の目安です。
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">専有面積</th>
                  <th className="text-right px-3 py-3 font-bold text-emerald-400 border-b border-slate-700">建物のみ<br /><span className="text-xs font-normal text-slate-400">最低限</span></th>
                  <th className="text-right px-3 py-3 font-bold text-blue-400 border-b border-slate-700">建物＋家財<br /><span className="text-xs font-normal text-slate-400">標準</span></th>
                  <th className="text-right px-3 py-3 font-bold text-amber-400 border-b border-slate-700">地震保険セット<br /><span className="text-xs font-normal text-slate-400">手厚い</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "〜50㎡（1LDK）", min: "3,000〜4,000円", std: "7,000〜10,000円", full: "12,000〜18,000円" },
                  { size: "50〜70㎡（2LDK）", min: "3,500〜5,000円", std: "8,000〜12,000円", full: "15,000〜22,000円" },
                  { size: "70〜90㎡（3LDK）", min: "4,000〜6,000円", std: "10,000〜14,000円", full: "18,000〜25,000円" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-3 py-3 font-bold text-white text-xs">{row.size}</td>
                    <td className="px-3 py-3 text-right text-emerald-400 font-semibold text-xs">{row.min}</td>
                    <td className="px-3 py-3 text-right text-blue-400 font-semibold text-xs">{row.std}</td>
                    <td className="px-3 py-3 text-right text-amber-400 font-semibold text-xs">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">※年払い換算の目安。築年数・所在地・保険金額・免責金額により変動します。木造（H構造）の戸建てはこの2〜4倍が相場です。</p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-sm font-bold text-blue-300 mb-1">💡 マンションが戸建てより安い理由</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              鉄筋コンクリート造のマンションは「M構造」という最も保険料率が低い区分に分類されます。木造戸建て（H構造）と比べて火災リスクが低いため、同じ補償内容でも保険料は半分以下になることが一般的です。
            </p>
          </div>
        </section>

        {/* ━━ セクション2：保険料を決める5要素 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🧮 保険料を決める5つの要素
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            同じマンションでも見積もり条件によって保険料は大きく変わります。影響が大きい順に並べると次の通りです。
          </p>
          <div className="space-y-3 mb-4">
            {[
              { no: 1, title: "補償範囲（建物のみ or ＋家財）", body: "家財保険を付けると保険料は約2〜3倍になります。家財の保険金額は2人世帯で500〜1,000万円が目安ですが、過剰に設定しがちなので持ち物を見積もってから決めましょう。" },
              { no: 2, title: "地震保険の有無", body: "地震保険を付けると年間1万〜1.5万円程度の追加。東京都は地震保険料率が全国で最も高い地域の一つですが、その分リスクも高いため加入推奨です。" },
              { no: 3, title: "保険金額（再調達価額）", body: "専有部分の評価額。70㎡で1,000〜1,500万円程度が一般的です。物件価格ではなく「内装・設備を作り直す費用」で設定する点に注意。" },
              { no: 4, title: "契約期間（1年 or 5年一括）", body: "5年一括払いは年払いより総額10〜15%安くなります。2022年10月以降、最長期間は5年です。" },
              { no: 5, title: "免責金額（自己負担額）", body: "免責を0円→5万円に設定すると保険料は5〜10%下がります。小さな損害は自己負担にして保険料を抑える考え方です。" },
            ].map((item) => (
              <div key={item.no} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-white mb-1">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-extrabold mr-2">{item.no}</span>
                  {item.title}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ アフィリエイト インライン CTA ━━ */}
        <div className="bg-slate-900 border border-orange-500/30 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-400 mb-1">🔥 相場がわかったら、次は実際の見積もり比較</p>
          <p className="text-sm font-black text-white mb-2">複数社を無料で一括見積もりして最安値を確認</p>
          <p className="text-xs text-slate-400 mb-3">同じ補償内容でも保険会社によって年間数千円〜1万円以上の差が出ます。回答者全員にセブンプレミアムカフェラテをプレゼント中。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-orange-500 text-white font-black text-sm px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors"
          >
            無料で火災保険を一括見積もりする →
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={1} height={1} src="https://www18.a8.net/0.gif?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2" alt="" style={{ display: "block" }} />
        </div>

        {/* ━━ セクション3：計算例 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📐 具体例：70㎡・6,000万円のマンションの場合
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            都内・築10年・70㎡（2LDK）・6,000万円のマンションを購入したケースの試算例です。
          </p>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-4">
            <div className="space-y-1.5 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>建物の保険金額（再調達価額）</span><span className="font-semibold text-white">1,200万円</span>
              </div>
              <div className="flex justify-between">
                <span>家財の保険金額（2人世帯）</span><span className="font-semibold text-white">700万円</span>
              </div>
              <div className="flex justify-between">
                <span>火災保険（建物＋家財・5年一括）</span><span className="font-semibold text-blue-400">約48,000円</span>
              </div>
              <div className="flex justify-between">
                <span>地震保険（建物＋家財・5年）</span><span className="font-semibold text-amber-400">約65,000円</span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-1.5 mt-1.5">
                <span className="font-bold">5年間の合計</span><span className="font-black text-white">約113,000円</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">年あたり換算</span><span className="font-black text-emerald-400">約22,600円/年</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            月あたり約1,900円。住宅ローン・管理費に比べると小さい固定費ですが、<strong className="text-white">比較せずに加入すると同じ補償で年間5,000円以上高くなる</strong>こともあります。購入諸費用の一部として事前に予算化しておきましょう。
          </p>
        </section>

        {/* ━━ セクション4：補償対象の整理 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏠 何に保険をかける？専有部分・家財・共用部分の違い
          </h2>
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
                  { target: "建物（専有部分）", content: "室内の床・壁・天井・キッチン・浴室など", who: "自分で加入" },
                  { target: "家財", content: "家具・家電・衣類・貴重品など", who: "自分で加入" },
                  { target: "共用部分", content: "廊下・エレベーター・外壁・屋上など", who: "管理組合（加入不要）" },
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
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            自分で加入が必要なのは<strong className="text-white">専有部分＋家財</strong>のみ。共用部分は管理組合が一括加入しているため個人での加入は不要です。
          </p>
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <p className="text-sm font-bold text-orange-300 mb-1">⚠️ マンションで一番多い事故は「水漏れ」</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              マンションの保険請求で最も多いのは火災ではなく水濡れ事故（上階からの漏水・給排水管トラブル）です。「水濡れ補償」と、自分が加害者になった場合に備える「個人賠償責任特約」（年間1,000〜2,000円程度）はセットで付けることを強くおすすめします。
            </p>
          </div>
        </section>

        {/* ━━ セクション5：地震保険 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🌋 地震保険はセットすべき？東京の保険料目安
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            地震保険は火災保険とセットでのみ加入できます。<strong className="text-white">火災保険単体では、地震を原因とする火災・損壊は一切補償されません。</strong>
          </p>
          <div className="space-y-3 mb-4">
            {[
              { title: "補償内容", body: "地震・噴火・津波を原因とする火災・損壊・埋没・流失。東日本大震災クラスの災害では地震保険の有無が生活再建を大きく左右しました。" },
              { title: "保険金額の上限", body: "火災保険の30〜50%が上限。建物1,200万円の火災保険なら地震保険は最大600万円。全損でも満額は出ない設計のため「生活再建費用」と捉えるのが正解です。" },
              { title: "東京の保険料目安", body: "東京都は地震保険料率が最も高い区分。マンション（イ構造）・保険金額600万円で年間約1.0〜1.2万円が目安。耐震等級割引（10〜50%）が使える物件もあります。" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-white mb-1">📌 {item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ FAQ ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ❓ よくある質問
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-4">
                <p className="text-sm font-bold text-blue-300 mb-2">Q. {item.q}</p>
                <p className="text-xs text-slate-300 leading-relaxed">A. {item.a}</p>
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
          ※本記事は情報提供を目的としており、特定の保険商品への加入を推奨するものではありません。
          保険料は物件の構造・所在地・補償内容・各社の料率改定により変動します。
          実際の加入判断は、保険会社・代理店・FPなどの専門家にご相談ください。
        </p>

        {/* ━━ 火災保険CTA ━━ */}
        <div className="border-2 border-emerald-500/40 bg-emerald-500/10 rounded-2xl p-5 mb-6 mt-8">
          <p className="text-sm font-black text-emerald-300 mb-1">🏡 マンションの火災保険、一括見積もりで年間数千円〜1万円安くなることも</p>
          <p className="text-xs text-slate-300 mb-3">複数の保険会社に同時見積もりを依頼できるサービスが無料で使えます。不動産会社に勧められた保険に入る前に必ず比較を。</p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2"
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="block text-center bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
          >
            🎁 無料で火災保険を一括見積もりする →
          </a>
          <p className="text-xs text-emerald-400 text-center mt-2">無料・匿名・しつこい営業電話なし</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={1} height={1} src="https://www18.a8.net/0.gif?a8mat=4AZGC3+FBBEYA+2PS+2NBPO2" alt="" style={{ display: "none" }} />
        </div>

        {/* ━━ ツールCTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">マンション購入の総コストを診断しよう</p>
          <p className="text-xs mb-4 opacity-90">保険・管理費・修繕積立金を含めた実質住居費は無料で試算できます。</p>
          <Link
            href="/mansion"
            className="inline-block bg-slate-900 text-blue-300 font-black text-sm px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors"
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
            <Link href="/articles/mansion-kounyu-checklist" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">✅</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション購入チェックリスト｜契約前に必ず確認すべき15項目</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
