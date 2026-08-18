"use client";

import { useState } from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

import AffiliateCta from "@/components/AffiliateCta";
import {
  calcBirth,
  BIRTH_GROSS,
  BIRTH_LUMP_SUM,
  BIRTH_GIFT,
  CHECKUP_SUBSIDY,
  CESAREAN_EXTRA,
  type BirthInput,
  type BirthCost,
} from "@/lib/childCost";

/* ───────── 申請タイムライン ───────── */

const TIMELINE = [
  {
    when: "妊娠がわかったら",
    items: [
      { name: "母子健康手帳・妊婦健診受診票", detail: "区市町村の窓口。14回分の健診費補助（約10万円分）が受け取れます", money: "＋10万円分" },
      { name: "出産・子育て応援ギフト（妊娠届出時）", detail: "面談を受けると5万円相当。区市町村により現金・クーポンなど形式が異なります", money: "＋5万円" },
    ],
  },
  {
    when: "産前（出産予定日の6週前〜）",
    items: [
      { name: "出産手当金の申請準備", detail: "産前42日・産後56日の計98日が対象。勤務先経由で健保に申請します", money: "標準報酬日額の2/3" },
      { name: "出産育児一時金の直接支払制度", detail: "産院で手続きすると50万円が病院に直接支払われ、窓口では差額だけ払えば済みます", money: "＋50万円" },
    ],
  },
  {
    when: "出産後",
    items: [
      { name: "出生届・児童手当・健康保険の加入", detail: "児童手当は申請月の翌月分から。遅れるとその分もらえません", money: "月1〜1.5万円" },
      { name: "出産・子育て応援ギフト（出生届出時）", detail: "5万円相当。妊娠時とは別に申請が必要です", money: "＋5万円" },
      { name: "018サポート（東京都）", detail: "0〜18歳に月5,000円。所得制限なし。年1回の申請が必要です", money: "18年で108万円" },
    ],
  },
  {
    when: "育休に入ったら",
    items: [
      { name: "育児休業給付金", detail: "開始から180日は休業前賃金の67%、以降50%。勤務先経由でハローワークへ", money: "月給の50〜67%" },
      { name: "社会保険料の免除", detail: "産休・育休中は健康保険・厚生年金の保険料が免除されます（申請制）", money: "月数万円の負担減" },
    ],
  },
  {
    when: "翌年の確定申告",
    items: [
      { name: "医療費控除", detail: "出産費用は対象。無痛分娩の費用も含められます。一時金で補填された分は差し引きます", money: "数万〜十数万円の還付" },
    ],
  },
];

const FAQ = [
  {
    q: "東京で出産するといくらかかりますか？",
    a: "正常分娩で総額60〜70万円、無痛分娩や人気の産院だと130〜150万円が目安です。出産育児一時金50万円が直接支払われるため、窓口での自己負担は正常分娩なら10〜20万円、無痛分娩なら80〜100万円程度になります。",
  },
  {
    q: "無痛分娩は追加でいくらかかりますか？",
    a: "無痛分娩の加算だけで10〜20万円が一般的です。ただし無痛分娩を扱う産院は総額の設定自体が高めのことが多く、結果として正常分娩より50〜80万円高くなるケースがよくあります。",
  },
  {
    q: "帝王切開だと費用は高くなりますか？",
    a: "手術自体は健康保険の適用対象になり、高額療養費制度も使えるため、自己負担が跳ね上がることはありません。入院日数が伸びるぶん室料差額などが増えますが、正常分娩と大きく変わらないか、むしろ安く済むこともあります。",
  },
  {
    q: "育児休業給付金はいくらもらえますか？",
    a: "休業開始前の賃金をもとに、最初の180日は67%、それ以降は50%が支給されます。月額には上限があり、2025年時点でおおむね月31万円（67%期間）が上限です。また産休・育休中は社会保険料が免除されるため、手取りベースでは休業前の8割前後になることが多いです。",
  },
  {
    q: "申請を忘れて損することはありますか？",
    a: "あります。児童手当は申請した月の翌月分からの支給で、遡ってはもらえません。018サポートも年1回の申請制です。出産・子育て応援ギフトも面談や申請が前提のため、自動では受け取れません。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "出産費用シミュレーター（東京版）",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
  description: "東京で出産する場合の費用と、もらえる給付金の収支を試算できる無料ツール。",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ───────── UI ───────── */

function Field({ label, hint, value, onChange, options }: {
  label: string; hint?: string; value: string;
  onChange: (v: string) => void; options: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-base font-bold text-white">{label}</label>
      {hint && <p className="text-sm text-slate-300 leading-relaxed">{hint}</p>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-slate-600 rounded-xl px-4 py-3.5 text-base text-white bg-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23cbd5e1' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

function Row({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-1.5">
      <span className="text-sm text-slate-300">{label}</span>
      <span className={`text-base font-bold shrink-0 ${positive ? "text-emerald-400" : "text-pink-400"}`}>{value}</span>
    </div>
  );
}

export default function BirthCostPage() {
  const [input, setInput] = useState<BirthInput>({
    birthCost: "standard",
    numChildren: 1,
    parentIncome: 0,
    leaveMonths: 10,
    cesarean: false,
  });
  const [result, setResult] = useState<ReturnType<typeof calcBirth> | null>(null);

  const update = <K extends keyof BirthInput>(k: K, v: BirthInput[K]) =>
    setInput((p) => ({ ...p, [k]: v }));

  const run = () => {
    setResult(calcBirth(input));
    sendGAEvent("event", "diagnosis_run", { tool: "birth" });
    setTimeout(() => document.getElementById("birth-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  const grossPerChild = BIRTH_GROSS[input.birthCost] + (input.cesarean ? CESAREAN_EXTRA : 0);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        <nav className="text-xs text-slate-400 flex items-center gap-1">
          <Link href="/" className="hover:text-pink-300">ホーム</Link>
          <span>/</span>
          <span className="text-slate-200">出産費用シミュレーター</span>
        </nav>

        {/* ヒーロー：入力欄をすぐ触れるよう最小限に留める */}
        <header className="space-y-3">
          <span className="inline-block text-xs font-bold bg-pink-500/15 text-pink-200 border border-pink-500/30 px-2.5 py-1 rounded-full">
            東京版・無料
          </span>
          <h1 className="text-3xl font-black leading-tight">
            出産って、<span className="text-pink-400">結局いくら</span>かかる？
          </h1>
          <p className="text-base text-slate-200 leading-relaxed">
            費用だけでなく、<strong className="text-white">もらえる給付金</strong>まで差し引きした収支を出します。無痛分娩・帝王切開・育休の長さにも対応。
          </p>
        </header>

        {/* 入力 */}
        <section className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-5">
          <Field
            label="分娩方法・産院"
            hint={`出産育児一時金${BIRTH_LUMP_SUM}万円はあとで自動的に差し引きます`}
            value={input.birthCost}
            onChange={(v) => update("birthCost", v as BirthCost)}
            options={[
              { value: "standard", label: `正常分娩 — 総額 約${BIRTH_GROSS.standard}万円` },
              { value: "premium", label: `無痛分娩・人気の産院 — 総額 約${BIRTH_GROSS.premium}万円` },
            ]}
          />
          <Field
            label="帝王切開になる可能性"
            hint="手術は健康保険が使え、高額療養費も効くため自己負担は大きく増えません"
            value={input.cesarean ? "yes" : "no"}
            onChange={(v) => update("cesarean", v === "yes")}
            options={[
              { value: "no", label: "考えない（経腟分娩の想定）" },
              { value: "yes", label: `帝王切開を想定する（＋約${CESAREAN_EXTRA}万円）` },
            ]}
          />
          <Field
            label="産休・育休を取る方の年収"
            hint="出産手当金と育児休業給付金の概算に使います"
            value={String(input.parentIncome)}
            onChange={(v) => update("parentIncome", Number(v))}
            options={[
              { value: "0", label: "計算しない（費用だけ見る）" },
              ...[300, 400, 500, 600, 700, 800].map((v) => ({ value: String(v), label: `${v}万円` })),
            ]}
          />
          <Field
            label="育休を取る期間"
            hint="最初の180日は67%、それ以降は50%が支給されます"
            value={String(input.leaveMonths)}
            onChange={(v) => update("leaveMonths", Number(v))}
            options={[
              { value: "0", label: "取らない" },
              { value: "6", label: "6ヶ月" },
              { value: "10", label: "1歳まで（産後休業を除き約10ヶ月）" },
              { value: "16", label: "1歳半まで" },
            ]}
          />

          <button
            onClick={run}
            className="w-full bg-pink-600 hover:bg-pink-500 text-white font-black text-lg px-6 py-4 rounded-xl transition-colors"
          >
            出産の収支を試算する →
          </button>
          <p className="text-sm text-slate-300 text-center">完全無料・入力データは保存されません</p>
        </section>

        {/* 結果 */}
        {result && (
          <section id="birth-result" className="scroll-mt-4 space-y-5">
            <div className="bg-slate-800 rounded-2xl border border-pink-500/30 p-5 space-y-4">
              <p className="text-sm font-bold text-pink-300">試算結果</p>

              <div className="rounded-xl bg-slate-700/50 border border-slate-600 p-4">
                <p className="text-sm text-slate-300 mb-1">窓口で実際に払う額（総額 − 一時金）</p>
                <p className="text-4xl font-black text-white">
                  {result.netCost.toLocaleString()}
                  <span className="text-lg font-bold text-slate-300 ml-1">万円</span>
                </p>
                <p className="text-sm text-slate-300 mt-1">
                  総額 {result.grossCost.toLocaleString()}万円 のうち {result.lumpSum}万円は一時金でまかなわれます
                </p>
              </div>

              <div className="divide-y divide-slate-700">
                <Row label="出産費用の総額" value={`−${result.grossCost.toLocaleString()}万円`} />
                <Row label={`出産育児一時金`} value={`＋${result.lumpSum}万円`} positive />
                <Row label="応援ギフト・妊婦健診補助" value={`＋${result.gifts}万円`} positive />
                {result.maternityAllowance > 0 && (
                  <Row label="出産手当金（産休98日）" value={`＋${result.maternityAllowance.toLocaleString()}万円`} positive />
                )}
                {result.parentalLeaveBenefit > 0 && (
                  <Row label={`育児休業給付金（${input.leaveMonths}ヶ月）`} value={`＋${result.parentalLeaveBenefit.toLocaleString()}万円`} positive />
                )}
              </div>

              <div className="rounded-xl bg-pink-500/10 border border-pink-500/30 px-4 py-3 flex items-baseline justify-between">
                <span className="text-sm font-bold text-white">差引（もらえる額 − かかる額）</span>
                <span className={`text-2xl font-black ${result.netBalance >= 0 ? "text-emerald-400" : "text-pink-400"}`}>
                  {result.netBalance >= 0 ? "＋" : "−"}{Math.abs(result.netBalance).toLocaleString()}
                  <span className="text-base font-bold ml-0.5">万円</span>
                </span>
              </div>

              {result.parentalLeaveBenefit > 0 ? (
                <p className="text-sm text-slate-300 leading-relaxed">
                  ※ 出産手当金・育児休業給付金は<strong className="text-white">働いていれば得られたはずの給与の代わり</strong>に支給されるものです。この差引がそのまま貯金になるわけではありません。
                </p>
              ) : (
                <p className="text-sm text-slate-300 leading-relaxed">
                  ※ 年収を入力すると、出産手当金・育児休業給付金まで含めた収支が出ます。
                </p>
              )}
            </div>

            <AffiliateCta
              program="fpsoudan"
              page="birth"
              heading="出産前後は、家計の組み替えどきです"
              title="産休・育休で収入が変わる前に、家計をプロに見てもらう"
              note="育休中の生活費、保険の見直し、教育費の積立開始時期。産まれてからでは動きにくいので、身重のうちに整理しておくと後が楽です。"
            />

            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-3">
              <p className="text-base font-bold text-white">この先の20年も見ておきますか？</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                出産はスタート地点です。0歳から大学卒業までにかかる総額と、児童手当・018サポートを含めた実質負担は子育てシミュレーターで試算できます。
              </p>
              <Link
                href="/child"
                className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold text-base px-5 py-3 rounded-xl transition-colors"
              >
                👶 子育て総費用シミュレーターへ →
              </Link>
            </div>
          </section>
        )}

        {/* 申請タイムライン */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-white">もらい漏れを防ぐ申請タイムライン</h2>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              出産まわりの制度は<strong className="text-white">申請しないともらえないもの</strong>がほとんどです。いつ何をするかを時系列で並べました。
            </p>
          </div>

          {TIMELINE.map((group) => (
            <div key={group.when} className="rounded-2xl border border-slate-700 bg-slate-800 p-5 space-y-3">
              <p className="text-sm font-bold text-pink-300">{group.when}</p>
              {group.items.map((item) => (
                <div key={item.name} className="border-l-2 border-slate-600 pl-3 space-y-0.5">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <p className="text-base font-bold text-white">{item.name}</p>
                    <span className="text-sm font-bold text-emerald-400 shrink-0">{item.money}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          ))}

          <p className="text-sm text-slate-300 leading-relaxed">
            ※ 金額・制度は2025年度時点の一般的な内容です。区市町村によって上乗せや独自制度があるため、お住まいの自治体の窓口でご確認ください。
          </p>
        </section>

        {/* 夫向けの導線。ツールは費用の話で完結するが、実際には
            「いつ何を決めるか」のほうが金額を左右する */}
        <section className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-3">
          <p className="text-base font-bold text-white">お金は「いつ動くか」で変わります</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            医療保険の加入、夫の育休、児童手当の申請期限——出産まわりには、あとから気づいても遡れないものがあります。
            とくに<strong className="text-white">夫が育休を取るかどうか</strong>で、給付は数十万円変わります。
            妊娠判明から1歳までにやることを、時系列で整理しました。
          </p>
          <Link
            href="/articles/shussan-junbi-otto"
            className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold text-base px-5 py-3 rounded-xl transition-colors"
          >
            📝 夫がやる出産準備ジャーニーを読む →
          </Link>
        </section>

        {/* FAQ */}
        <section className="space-y-3">
          <h2 className="text-xl font-black text-white">よくある質問</h2>
          <div className="bg-slate-800 rounded-2xl border border-slate-700 px-5 divide-y divide-slate-700">
            {FAQ.map((f) => (
              <details key={f.q} className="py-4 group">
                <summary className="text-base font-bold text-white cursor-pointer list-none flex items-start justify-between gap-3">
                  <span>{f.q}</span>
                  <span className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-slate-300 leading-relaxed mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-sm text-slate-400 leading-relaxed pb-4">
          本ツールは一般的な相場をもとにした参考情報です。実際の費用は産院・分娩方法・入院日数により大きく異なります。給付金の額は加入している健康保険や雇用保険の加入状況によって変わります。
        </p>
      </div>
    </main>
  );
}
