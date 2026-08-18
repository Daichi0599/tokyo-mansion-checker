import type { Metadata } from "next";
import Link from "next/link";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = {
  title: "マンションの買い時はいつ？2026年の相場予測と判断基準を解説｜30Lab",
  description:
    "2026年8月時点の金利（政策金利1.0%・変動1.08%・フラット35は3.29%）をもとに、マンションの買い時を整理。変動と固定で買える価格が1,300万円変わる現状と、「今買うべき人・待つべき人」の判断基準を解説します。",
  keywords: [
    "マンション 買い時 2026",
    "マンション 購入 タイミング",
    "マンション 価格 今後",
    "マンション 買うべき 待つべき",
    "不動産 買い時 2026",
  ],
  openGraph: {
    title: "マンションの買い時はいつ？2026年の相場予測と判断基準を解説",
    description: "2026年の不動産市況と「今買うべき人・待つべき人」の判断基準。無料診断ツールで予算確認も。",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "マンションの買い時はいつ？2026年の相場予測と判断基準",
    description: "価格高止まり×金利上昇の2026年、「今買うべき人・待つべき人」の判断基準を解説。",
  },
};

const FAQ_ITEMS = [
  {
    q: "2026年はマンションの買い時ですか？",
    a: "価格は高止まり、金利はすでに上がりました（2026年6月に政策金利1.0%、変動1.08%前後、フラット35は3.29%）。待てば金利が下がるという前提は、現時点では成り立っていません。買い時は市況ではなく個人の条件で決まります。返済比率が25%以内に収まり、10年以上住む予定があり、ライフイベントで住まいが必要なら、いま動く条件は揃っています。",
  },
  {
    q: "マンション価格は今後下がりますか？",
    a: "誰にも断言できませんが、都心部は資材費・人件費の上昇と供給減で急落のシグナルは見られません。仮に価格が5%下がっても金利が0.5%上がれば月返済はほぼ変わらないため、「価格と金利のトータル」で判断することが重要です。",
  },
  {
    q: "金利が上がりそうなので急いで買うべきですか？",
    a: "金利だけを理由に焦るのは危険ですが、「上がりそう」ではなく「すでに上がった」段階にある点は押さえておく必要があります。政策金利は1.0%で、日銀は引き上げ方針を維持しています。変動を選ぶなら、いまの返済額ではなく「金利が1%上がったときの返済額」で耐えられるかを先に確認してください。5年ルール・125%ルールは負担を先送りする仕組みで、免除されるわけではありません。",
  },
  {
    q: "買い時を判断する一番のポイントは何ですか？",
    a: "「市況の読み」ではなく「自分の適正購入価格が先に決まっているか」です。年収・頭金から安全な購入価格帯を算出し、その範囲で条件に合う物件に出会えたときが、あなたにとっての買い時です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "マンションの買い時はいつ？2026年の相場予測と判断基準を解説",
  description: "2026年の市況（価格高止まり・金利上昇）を整理し、「今買うべき人・待つべき人」の判断基準を解説。",
  author: { "@type": "Person", name: "たろう｜都内マンション研究中", url: "https://x.com/30lab_jp" },
  publisher: { "@type": "Organization", name: "30Lab", url: "https://30lab.vercel.app" },
  datePublished: "2026-04-05",
  dateModified: "2026-07-09",
  mainEntityOfPage: "https://30lab.vercel.app/articles/mansion-kaidoki-2025",
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

export default function MansionKaidoki2025Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-2xl mx-auto px-4 py-10">

        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-400">コラム</Link>
          <span>/</span>
          <span className="text-slate-300">マンションの買い時</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-300 font-semibold px-2 py-0.5 rounded-full">市況・購入タイミング</span>
          <span className="text-xs text-slate-400">2026年7月更新</span>
        </div>

        <h1 className="text-2xl font-black text-white leading-tight mb-4">
          マンションの<span className="text-blue-400">買い時はいつ？</span><br />
          2026年の相場と判断基準を解説
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          「今は高すぎる」「もっと下がるのを待つべき」——マンション購入を検討していると、必ずタイミングの話になります。ただ2026年に入って状況が変わりました。<strong className="text-white">金利が「上がるかも」ではなく「すでに上がった」段階</strong>に移っています。この記事では2026年8月時点の実際の金利を並べたうえで、個人の状況に応じた判断基準を整理します。
        </p>

        {/* ━━ セクション1 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            🏙️ 2026年のマンション市況：今どうなっているか
          </h2>
          <div className="space-y-3 mb-4">
            {[
              {
                icon: "📈",
                title: "価格は高止まりが続いている",
                body: "東京23区の新築マンション平均価格は2023〜2024年にかけて9,000万円超に到達。資材費・人件費の上昇、インバウンド需要、高額所得層の購入が価格を押し上げており、急落のシグナルは現時点では見られない。",
                bg: "bg-red-500/10 border-red-500/30",
              },
              {
                icon: "📊",
                title: "金利は「上がるかも」ではなく、すでに上がった",
                body: "2026年6月に日銀が政策金利を1.0%へ引き上げ。31年ぶりの水準で、7月末の会合では据え置いたものの引き上げ方針は維持されている。変動金利は1.08%前後、フラット35は3.29%（2026年8月）。長期金利は1年で1.24ポイント上昇した。",
                bg: "bg-orange-500/10 border-orange-500/30",
              },
              {
                icon: "🏘️",
                title: "郊外・中古は比較的割安",
                body: "23区内新築は高騰しているが、郊外（多摩・神奈川・埼玉）や中古市場では相対的に手が届きやすい価格帯が残っている。エリアを広げると選択肢は増える。",
                bg: "bg-green-500/10 border-green-500/30",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-white mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ 金利の現在地 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💹 金利はいまどこにいるか（2026年8月）
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">指標</th>
                  <th className="text-right px-3 py-3 font-bold text-slate-200 border-b border-slate-700">現在</th>
                  <th className="text-right px-3 py-3 font-bold text-slate-200 border-b border-slate-700">動き</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { k: "政策金利", v: "1.0%", d: "2026年6月に利上げ・31年ぶり水準" },
                  { k: "変動金利", v: "1.08%前後", d: "9月に基準金利の見直しを控える銀行も" },
                  { k: "長期金利（10年国債）", v: "2.80%", d: "1年で +1.24ポイント" },
                  { k: "フラット35", v: "3.29%", d: "前月比 +0.15%" },
                ].map((r, i) => (
                  <tr key={r.k} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-3 py-3 font-bold text-white text-xs">{r.k}</td>
                    <td className="px-3 py-3 text-right text-blue-400 font-bold text-xs">{r.v}</td>
                    <td className="px-3 py-3 text-right text-slate-300 text-xs">{r.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-orange-300 mb-1">⚠️ 変動と固定の差が2.2ポイントまで開いている</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              変動1.08%に対して固定3.29%。この差は「市場がこれからの利上げを織り込んでいる」ということです。
              変動が安く見えるのは、その分のリスクを自分で引き受けているからだと考えたほうが実態に近くなります。
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            金利タイプの選択だけで、買える価格はここまで変わります（年収800万円・頭金1,000万円・管理費3万円・35年・返済比率25%以内）。
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-3 py-3 font-bold text-slate-200 border-b border-slate-700">金利</th>
                  <th className="text-right px-3 py-3 font-bold text-slate-200 border-b border-slate-700">買える価格</th>
                  <th className="text-right px-3 py-3 font-bold text-slate-200 border-b border-slate-700">5,000万借りた場合の月返済</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { k: "0.7%（1年前の感覚）", v: "6,090万円", m: "13.4万円" },
                  { k: "1.08%（いまの変動）", v: "5,776万円", m: "14.3万円" },
                  { k: "2.0%（変動が上がった場合）", v: "5,126万円", m: "16.6万円" },
                  { k: "3.29%（いまの固定）", v: "4,406万円", m: "20.1万円" },
                ].map((r, i) => (
                  <tr key={r.k} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-700/30"}>
                    <td className="px-3 py-3 font-bold text-white text-xs">{r.k}</td>
                    <td className="px-3 py-3 text-right text-blue-400 font-bold text-xs">{r.v}</td>
                    <td className="px-3 py-3 text-right text-slate-300 text-xs">{r.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            同じ5,000万円でも、0.7%と3.29%では35年の総返済が約2,800万円変わります。
            「いくらの物件を買うか」より先に「どの金利で借りるか」が効いてくる局面です。
          </p>
        </section>

        {/* ━━ セクション2 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            📉 「価格が下がるまで待つ」戦略のリスク
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            「もう少し待てば安くなるかも」と考える人は多いですが、待つことにもコストがあります。
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "家賃を払い続けるコスト",
                body: "月15万円の家賃なら、1年待つだけで180万円の出費。3年待てば540万円。その間に物件価格が下がらなければ、待ち続けたほうが損になる。",
              },
              {
                title: "金利が上昇すると購入可能額が下がる",
                body: "価格が5%下がっても、金利が0.5%上がれば月返済額はほぼ変わらない。政策金利は1.0%からさらに引き上げる方針が維持されているため、待っている間に金利側が動く可能性は小さくない。",
              },
              {
                title: "下落タイミングは誰にもわからない",
                body: "リーマンショック・コロナなど外部ショックによる急落は予測困難。予測に頼った戦略はギャンブルに近い。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-sm font-bold text-slate-100 mb-1">⚠️ {item.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCta
          program="mogecheck"
          page="mansion-kaidoki-2025"
          heading="金利上昇局面こそ、比較の価値が大きい"
          title="今の最安金利を無料で確認する"
          note="変動金利は上昇トレンドです。今の水準で各行がいくら提示するかを掴んでおくと、買い時の判断がぶれません。"
        />

        {/* ━━ セクション3 ━━ */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            ✅ 今買うべき人・待つべき人
          </h2>
          <div className="space-y-3">
            {[
              {
                label: "今買って良い人",
                icon: "✅",
                bg: "bg-green-500/10 border-green-500/30",
                items: [
                  "返済比率が25%以内に収まる（管理費込みでも）",
                  "頭金が物件価格の10%以上ある",
                  "居住予定期間が10年以上",
                  "賃貸家賃と比較して住居費が下がる",
                  "ライフイベント（結婚・子育て）で住まいが必要",
                ],
              },
              {
                label: "もう少し待つべき人",
                icon: "⏳",
                bg: "bg-yellow-500/10 border-yellow-500/30",
                items: [
                  "返済比率が30%を超えてしまう",
                  "頭金がほぼゼロ（諸費用も手元資金が不足）",
                  "転職・収入変化の可能性が高い時期",
                  "居住予定エリアが未確定",
                  "1〜2年以内に転勤の可能性がある",
                ],
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border ${item.bg}`}>
                <p className="text-sm font-black text-white mb-2">{item.icon} {item.label}</p>
                <ul className="space-y-1">
                  {item.items.map((point, j) => (
                    <li key={j} className="text-xs text-slate-200 flex items-start gap-1">
                      <span className="text-slate-500 mt-0.5">・</span>
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
          <h2 className="text-lg font-black text-white mb-4 pb-2 border-b-2 border-blue-500/20">
            💡 「買い時」より「自分に合う価格帯」を先に決める
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            市況の読みより大切なのは、<strong>自分の年収・頭金・ライフプランから「適正購入価格」を先に決めること</strong>です。
          </p>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
            <p className="text-sm font-bold text-blue-200 mb-2">判断の順番</p>
            <ol className="text-sm text-slate-200 space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-black text-blue-400">1.</span>
                <span>返済比率25%以内の「安全な借入上限額」を計算する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-blue-400">2.</span>
                <span>頭金を加えた「購入可能価格帯」を確定する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-blue-400">3.</span>
                <span>その価格帯で条件に合う物件を探す（エリア・築年数を柔軟に）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-blue-400">4.</span>
                <span>条件が合う物件に出会えたら買う</span>
              </li>
            </ol>
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
        <p className="text-xs text-slate-400 mt-4 leading-relaxed">
          ※本記事は情報提供を目的としており、特定の金融商品・不動産物件の購入を推奨するものではありません。
          記載内容は執筆時点の情報に基づいており、金利・税制・市況は変動します。
          具体的な購入判断は、銀行・FP・不動産会社などの専門家にご相談ください。
        </p>

        {/* ━━ CTA ━━ */}
        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white mb-8">
          <p className="text-base font-black mb-1">自分の「適正購入価格」を今すぐ確認</p>
          <p className="text-xs mb-4 opacity-90">年収・頭金・希望金利を入力するだけで、安全な購入予算がわかります。</p>
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
            <Link href="/articles/tokyo-23ku-shisan-kachi-ranking" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🗺️</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">東京23区 マンション資産価値ランキング2026</span>
            </Link>
            <Link href="/articles/nenshu-mansion-price" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">💰</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">年収別マンション購入可能額の目安【早見表付き】</span>
            </Link>
            <Link href="/articles/chintai-vs-kounyu" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">🏠</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">賃貸 vs 購入、結局どっちが得？30代向けに徹底比較</span>
            </Link>
            <Link href="/articles/mansion-kounyu-checklist" className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500/40 transition-colors group">
              <span className="text-xl">✅</span>
              <span className="text-sm text-slate-200 group-hover:text-blue-400">マンション購入チェックリスト｜契約前に確認すべき15項目</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
