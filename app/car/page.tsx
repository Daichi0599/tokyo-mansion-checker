"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

/* ───────────────────────────────────────────
   型定義
─────────────────────────────────────────── */

interface CarInputs {
  usageDaysPerMonth: number;
  hoursPerUse: number;
  parkingFeeMan: number; // 万円
}

interface CostResult {
  label: string;
  monthlyMan: number;
  totalMan: number;
  isRecommended: boolean;
  colorClass: string;
  badgeBg: string;
  icon: string;
}

/* ───────────────────────────────────────────
   計算ロジック
─────────────────────────────────────────── */

function calculate(inputs: CarInputs): CostResult[] {
  const { usageDaysPerMonth, hoursPerUse, parkingFeeMan } = inputs;
  const parkingFeeYen = parkingFeeMan * 10000;

  // カーシェア
  const carshareMonthly =
    usageDaysPerMonth * hoursPerUse * 1500 + usageDaysPerMonth * 500;
  const carshareTotal = carshareMonthly * 120;

  // 中古車
  const usedInitial = 1500000;
  const usedMonthly =
    parkingFeeYen + 8000 + 3000 + 8000 + 16000;
  const usedTotal = usedInitial + usedMonthly * 120;

  // 新車
  const newInitial = 3500000;
  const newMonthly =
    parkingFeeYen + 10000 + 3500 + 8000 + 13000;
  const newTotal = newInitial + newMonthly * 120;

  const totals = [carshareTotal, usedTotal, newTotal];
  const minTotal = Math.min(...totals);

  const results: CostResult[] = [
    {
      label: "カーシェア",
      monthlyMan: Math.round(carshareMonthly / 1000) / 10,
      totalMan: Math.round(carshareTotal / 10000),
      isRecommended: carshareTotal === minTotal,
      colorClass: "border-blue-200 bg-blue-50",
      badgeBg: "bg-blue-600",
      icon: "🔑",
    },
    {
      label: "中古車購入",
      monthlyMan: Math.round(usedMonthly / 1000) / 10,
      totalMan: Math.round(usedTotal / 10000),
      isRecommended: usedTotal === minTotal,
      colorClass: "border-emerald-200 bg-emerald-50",
      badgeBg: "bg-emerald-600",
      icon: "🚗",
    },
    {
      label: "新車購入",
      monthlyMan: Math.round(newMonthly / 1000) / 10,
      totalMan: Math.round(newTotal / 10000),
      isRecommended: newTotal === minTotal,
      colorClass: "border-amber-200 bg-amber-50",
      badgeBg: "bg-amber-500",
      icon: "✨",
    },
  ];

  return results;
}

/* ───────────────────────────────────────────
   診断コメント
─────────────────────────────────────────── */

function getDiagnosisComment(
  results: CostResult[],
  inputs: CarInputs
): { title: string; body: string } {
  const recommended = results.find((r) => r.isRecommended);

  if (recommended?.label === "カーシェア") {
    if (inputs.usageDaysPerMonth <= 4) {
      return {
        title: "都内在住なら車なしが賢い選択",
        body: "月の利用頻度が少ない場合、カーシェアが圧倒的にコスト最適です。駐車場代・保険・車検の固定費ゼロで、使った分だけ払うカーシェアが都市生活に最もフィットします。",
      };
    }
    return {
      title: "都内在住なら車なしが賢い選択",
      body: "利用頻度が高めでもカーシェアが最安です。電車・バスと組み合わせた都市型モビリティが、コストと利便性のバランスで優れています。駐車場代がかからない点が大きなアドバンテージです。",
    };
  }

  if (recommended?.label === "中古車購入") {
    return {
      title: "郊外利用が多いなら中古車が最適",
      body: `駐車場代が月${inputs.parkingFeeMan}万円でも、利用頻度を考えると中古車購入が10年トータルで有利です。週末の郊外へのドライブや子育てで車をよく使うライフスタイルなら、中古車が費用対効果の高い選択肢です。`,
    };
  }

  // 新車
  return {
    title: "高頻度ユーザーには新車も選択肢に",
    body: "利用頻度が非常に高く、車が生活の中心という場合は新車も検討に値します。ただし都内では維持費全体が高くなりやすいため、本当に必要かどうかを家族で話し合うことをおすすめします。",
  };
}

/* ───────────────────────────────────────────
   サブコンポーネント
─────────────────────────────────────────── */

function BenefitCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function LogicPoint({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold flex items-center justify-center mt-0.5">
        {step}
      </span>
      <div>
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-3 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-800 leading-relaxed">{q}</span>
        <span className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && <p className="text-sm text-gray-600 leading-relaxed pb-4 pr-6">{a}</p>}
    </div>
  );
}

function SelectField({
  label,
  sublabel,
  value,
  onChange,
  options,
}: {
  label: string;
  sublabel?: string;
  value: number;
  onChange: (v: number) => void;
  options: { value: number; label: string }[];
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-bold text-gray-800">
        {label}
        {sublabel && (
          <span className="ml-1.5 text-xs font-normal text-gray-500">{sublabel}</span>
        )}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function CostCard({ result }: { result: CostResult }) {
  return (
    <div
      className={`relative rounded-2xl border-2 p-5 space-y-3 transition-all ${result.colorClass} ${
        result.isRecommended ? "ring-2 ring-offset-2 ring-blue-400 shadow-lg" : "shadow-sm"
      }`}
    >
      {result.isRecommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
            おすすめ
          </span>
        </div>
      )}

      <div className="flex items-center gap-2">
        <span className="text-2xl">{result.icon}</span>
        <span className="text-base font-extrabold text-gray-800">{result.label}</span>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-0.5">10年間総コスト</p>
        <p className="text-3xl font-extrabold text-gray-900">
          {result.totalMan.toLocaleString()}
          <span className="text-base font-bold text-gray-500 ml-1">万円</span>
        </p>
      </div>

      <div className="bg-white/70 rounded-xl px-3 py-2 inline-block">
        <p className="text-xs text-gray-500">月あたり換算</p>
        <p className="text-lg font-bold text-gray-800">
          約 {result.monthlyMan.toLocaleString()}
          <span className="text-sm font-semibold text-gray-500 ml-1">万円/月</span>
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   メインページ
─────────────────────────────────────────── */

export default function CarPage() {
  const [inputs, setInputs] = useState<CarInputs>({
    usageDaysPerMonth: 4,
    hoursPerUse: 3,
    parkingFeeMan: 2,
  });
  const [results, setResults] = useState<CostResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const hasStarted = useRef(false);

  const handleInputChange = <K extends keyof CarInputs>(key: K, value: CarInputs[K]) => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      sendGAEvent("event", "tool_start", { tool: "car_diagnosis" });
    }
    setInputs((prev) => ({ ...prev, [key]: value }));
  };
  const [mansionIncome, setMansionIncome] = useState<number | null>(null);

  // ④ マンション診断の年収を引き継ぎ
  useEffect(() => {
    try {
      const saved = localStorage.getItem("30lab_diagnosis_input");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.annualIncome === "number") {
          setMansionIncome(parsed.annualIncome);
        }
      }
    } catch (_) {}
  }, []);

  const handleDiagnose = () => {
    setIsLoading(true);
    setResults(null);
    setTimeout(() => {
      const r = calculate(inputs);
      setResults(r);
      sendGAEvent("event", "diagnosis_run", {
        page: "car",
        usage_days: inputs.usageDaysPerMonth,
        hours_per_use: inputs.hoursPerUse,
        parking_fee_man: inputs.parkingFeeMan,
        recommended: r.find((x) => x.isRecommended)?.label ?? "unknown",
      });
      setIsLoading(false);
      setTimeout(() => {
        document.getElementById("car-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 500);
  };



  const comment = results ? getDiagnosisComment(results, inputs) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">

        {/* ─── ヘッダー ─── */}
        <header className="space-y-5 text-center">
          {/* タグ */}
          <div className="flex flex-wrap gap-2 justify-center">
            {["アラサー共働き向け", "都内在住", "10年コスト比較"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* タイトル */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              都内で車は持つべき？<br />
              <span className="text-blue-600">10年コスト診断</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              カーシェア・中古車・新車の10年間総コストを比較して、<br className="hidden sm:block" />
              あなたのライフスタイルに最適な選択肢がわかります。
            </p>
          </div>

          {/* バッジ */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { icon: "✓", label: "完全無料" },
              { icon: "✓", label: "約3分" },
              { icon: "✓", label: "データ保存なし" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"
              >
                <span>{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </header>

        {/* ─── この診断でわかること ─── */}
        <section aria-labelledby="benefits-heading">
          <div className="text-center mb-5">
            <h2 id="benefits-heading" className="text-lg font-extrabold text-gray-800">この診断でわかること</h2>
            <p className="text-xs text-gray-500 mt-1">都内の車にまつわる「本当のコスト」を可視化します</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <BenefitCard icon="💰" title="10年間の総コスト比較" desc="カーシェア・中古車・新車の10年間コストを同条件で比較。月々の差だけでなく総額でどれだけ違うかがわかります。" />
            <BenefitCard icon="🅿️" title="駐車場代の影響を試算" desc="都内の月額駐車場代（0〜5万円）がコストにどれほど影響するかを可視化。地域差を踏まえた判断ができます。" />
            <BenefitCard icon="📊" title="利用頻度別の最適解" desc="月に何日・何時間使うかで、カーシェアが得か所有が得かが変わります。あなたの使い方に合った答えが出ます。" />
            <BenefitCard icon="🏠" title="住宅費との合算確認" desc="マンション診断と連携し、住宅ローン＋車コストの合計負担を文脈表示。家計全体の視点で判断できます。" />
          </div>
        </section>

        {/* ─── 計算の考え方 ─── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">計算の考え方</p>
            <h2 className="text-base font-extrabold text-gray-800">「所有コスト」と「利用コスト」を正しく比較します</h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              車の費用は購入価格だけではありません。保険・税金・ガソリン・車検・駐車場など毎月かかる維持費を含めた「10年間の総支出」で比較するのが正しい見方です。
            </p>
          </div>
          <div className="space-y-4">
            <LogicPoint step="①" title="カーシェアは固定費ゼロが強み" desc="時間料金（1,500円/時）＋距離料金目安（500円/回）のみ。保険・税金・駐車場・車検が一切不要なため、利用頻度が低いほど有利です。" />
            <LogicPoint step="②" title="所有コストは維持費が本体" desc="中古車は初期費用150万円＋月約3.5万円の維持費、新車は350万円＋月約3.4万円。この月次固定費×120ヶ月が10年コストの大半を占めます。" />
            <LogicPoint step="③" title="駐車場代が分岐点を左右する" desc="都内の駐車場代は月1〜5万円とエリアで大きく差があります。駐車場代が高いほど所有コストが膨らみ、カーシェアが有利になります。" />
          </div>
          <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
            <p className="text-xs text-blue-700 leading-relaxed">
              <strong>簡易診断について：</strong>費用は一般的な相場をもとにした参考値です。実際のカーシェア料金・保険内容・ガソリン価格などにより異なります。
            </p>
          </div>
        </section>

        {/* ─── 入力フォーム ─── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">STEP 1</p>
            <h2 className="text-base font-extrabold text-gray-800">利用状況を入力してください</h2>
            <p className="text-xs text-gray-500 mt-0.5">現在または想定する車の使い方を選んでください</p>
          </div>

          <div className="space-y-4">
            <SelectField
              label="月の利用日数"
              sublabel="外出・お出かけに車を使う日数"
              value={inputs.usageDaysPerMonth}
              onChange={(v) => handleInputChange("usageDaysPerMonth", v)}
              options={[
                { value: 2, label: "2日（週1未満）" },
                { value: 4, label: "4日（週1程度）" },
                { value: 8, label: "8日（週2程度）" },
                { value: 12, label: "12日（週3程度）" },
                { value: 16, label: "16日（週4程度）" },
                { value: 20, label: "20日（ほぼ毎日）" },
              ]}
            />

            <SelectField
              label="1回あたり平均利用時間"
              sublabel="1回の外出で車を使う平均時間"
              value={inputs.hoursPerUse}
              onChange={(v) => handleInputChange("hoursPerUse", v)}
              options={[
                { value: 2, label: "2時間（近場の買い物など）" },
                { value: 3, label: "3時間（ショッピングモールなど）" },
                { value: 4, label: "4時間（半日外出）" },
                { value: 6, label: "6時間（終日ドライブ）" },
              ]}
            />

            <SelectField
              label="月の駐車場代"
              sublabel="自宅・マンション駐車場の費用"
              value={inputs.parkingFeeMan}
              onChange={(v) => handleInputChange("parkingFeeMan", v)}
              options={[
                { value: 0, label: "0万円（なし・無料）" },
                { value: 1, label: "1万円" },
                { value: 2, label: "2万円" },
                { value: 3, label: "3万円" },
                { value: 4, label: "4万円" },
                { value: 5, label: "5万円" },
              ]}
            />
          </div>

          <button
            onClick={handleDiagnose}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-extrabold py-4 rounded-xl transition-colors text-base shadow-md flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                計算中...
              </>
            ) : (
              "10年コストを診断する →"
            )}
          </button>
        </section>

        {/* ─── 診断結果 ─── */}
        {results && comment && (
          <div id="car-result" className="scroll-mt-6 space-y-6">

            {/* コストカード3枚 */}
            <section className="space-y-4">
              <div className="text-center">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">RESULT</p>
                <h2 className="text-lg font-extrabold text-gray-800">10年間コスト比較</h2>
                <p className="text-xs text-gray-500 mt-1">
                  利用{inputs.usageDaysPerMonth}日/月・{inputs.hoursPerUse}時間/回・駐車場{inputs.parkingFeeMan}万円/月
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {results.map((r) => (
                  <CostCard key={r.label} result={r} />
                ))}
              </div>
            </section>

            {/* ④ マンション診断との連携コンテキスト */}
            {mansionIncome && (() => {
              const recommended = results.find((r) => r.isRecommended);
              if (!recommended) return null;
              const carAnnualMan = recommended.monthlyMan * 12;
              const carIncomeRatio = (carAnnualMan / mansionIncome) * 100;
              return (
                <div className="rounded-xl bg-indigo-50 border border-indigo-200 px-4 py-3 space-y-1">
                  <p className="text-xs font-bold text-indigo-600">📊 マンション診断との連携</p>
                  <p className="text-xs text-indigo-800 leading-relaxed">
                    マンション診断の年収 <strong>{mansionIncome.toLocaleString()}万円</strong> をベースにすると、最安の {recommended.label}（月 <strong>{recommended.monthlyMan}万円</strong>）は年収比 <strong className={carIncomeRatio > 10 ? "text-orange-600" : "text-indigo-700"}>{carIncomeRatio.toFixed(1)}%</strong>{carIncomeRatio > 10 ? "（住居費と合わせると家計が圧迫されやすい水準です）" : "（家計への負担は比較的小さい水準です）"}
                  </p>
                </div>
              );
            })()}

            {/* 内訳の注釈 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 px-4 py-3 text-xs text-gray-500 space-y-1 leading-relaxed">
              <p className="font-bold text-gray-600 mb-1.5">計算の内訳（目安）</p>
              <p>
                <span className="font-semibold">カーシェア：</span>
                時間料金 1,500円/時 + 距離料金目安 500円/回
              </p>
              <p>
                <span className="font-semibold">中古車：</span>
                初期費用150万 + 保険8,000 + 税金3,000 + ガソリン8,000 + 車検・整備16,000円/月
              </p>
              <p>
                <span className="font-semibold">新車：</span>
                初期費用350万 + 保険10,000 + 税金3,500 + ガソリン8,000 + 車検・整備13,000円/月
              </p>
              <p className="pt-1 text-gray-400">※中古車・新車の月維持費には駐車場代が加算されます。カーシェアは駐車場代不要として計算。</p>
            </div>

            {/* 診断コメント */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0" />
                <h3 className="text-base font-extrabold text-gray-800">{comment.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-3.5">{comment.body}</p>
            </section>

            {/* ランキングまとめ */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-5 space-y-3">
              <h3 className="text-sm font-extrabold text-gray-800">コスト順ランキング</h3>
              <ol className="space-y-2">
                {[...results]
                  .sort((a, b) => a.totalMan - b.totalMan)
                  .map((r, i) => (
                    <li key={r.label} className="flex items-center gap-3">
                      <span
                        className={`shrink-0 w-6 h-6 rounded-full text-xs font-extrabold flex items-center justify-center text-white ${
                          i === 0 ? "bg-blue-600" : i === 1 ? "bg-gray-400" : "bg-gray-300"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-gray-800 flex-1">
                        {r.icon} {r.label}
                      </span>
                      <span className="text-sm font-bold text-gray-700">
                        {r.totalMan.toLocaleString()}万円
                      </span>
                    </li>
                  ))}
              </ol>
            </section>

            {/* おかねと暮らし相談 アフィリエイトCTA */}
            <div className="rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 space-y-1">
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wide">PR</p>
                <p className="text-sm font-bold text-gray-900">
                  「車は持つべき？」の答えを、家計のプロに相談する
                </p>
                <p className="text-xs text-gray-500">
                  車コスト・住宅費・教育費…お金の不安をFPに無料相談。オンラインで気軽に話せます。
                </p>
              </div>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZGC3+FAPZCI+5UJQ+5YJRM"
                rel="nofollow noopener"
                target="_blank"
                onClick={() => sendGAEvent("event", "affiliate_click", { link_name: "おかねと暮らし相談", page: "car" })}
                className="shrink-0 inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl text-center transition-colors"
              >
                無料で相談してみる →
              </a>
              <img width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=4AZGC3+FAPZCI+5UJQ+5YJRM" alt="" style={{ display: "block" }} />
            </div>

            {/* 別の条件で試すボタン */}
            <button
              onClick={() => {
                setResults(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-bold py-3 rounded-xl transition-colors text-sm"
            >
              条件を変えて再診断する
            </button>
          </div>
        )}

        {/* ─── 注意書き ─── */}
        <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
          <p className="text-xs text-blue-700 leading-relaxed">
            <strong>簡易診断について：</strong>
            本ツールはあくまで参考情報です。カーシェアの実際の料金・中古車の状態・保険内容・ガソリン代などにより総コストは変動します。実際の購入・契約前に必ず各社の最新情報をご確認ください。
          </p>
        </div>

        {/* ─── FAQ ─── */}
        <section aria-labelledby="faq-car-heading" className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6">
          <h2 id="faq-car-heading" className="text-base font-extrabold text-gray-800 mb-1 text-center">よくある質問</h2>
          <p className="text-xs text-gray-500 mb-5 text-center">車コスト診断についてよく寄せられる疑問にお答えします</p>
          <div className="divide-y divide-gray-100">
            <FaqItem
              q="都内で車を持つメリットはありますか？"
              a="利便性・快適性・子育て時の移動という点ではメリットがあります。ただし都内は公共交通が充実しており、10年コストで比較するとカーシェアが安くなるケースが大多数です。「必要な時だけ使う」という発想がコスト最適です。"
            />
            <FaqItem
              q="カーシェアとレンタカーはどう違いますか？"
              a="カーシェアは近所の駐車場から15分単位で借りられ、ガソリン代・保険込みです。レンタカーは営業所への往復が必要で最短数時間単位。日常的な短時間利用にはカーシェアが、長距離・長時間利用にはレンタカーが向いています。"
            />
            <FaqItem
              q="子育て中でも車なしで生活できますか？"
              a="乳幼児期は移動が大変なため車が役立つ場面もありますが、都内であればカーシェアで対応できるケースがほとんどです。月4〜8日程度の利用なら、カーシェアの方が10年で100〜200万円安くなることも珍しくありません。"
            />
            <FaqItem
              q="電気自動車（EV）の場合はどう計算すればよいですか？"
              a="EVは初期費用がやや高め（400〜600万円）ですが、ガソリン代がかからずランニングコストが下がります。本ツールはガソリン車ベースの試算のため、EVをご検討の場合は各メーカーのシミュレーターも合わせてご確認ください。"
            />
            <FaqItem
              q="計算に含まれていない費用はありますか？"
              a="本ツールでは高速料金・有料駐車場・洗車代・カー用品費・事故修理費などは含まれていません。また中古車の状態によっては整備費用が増加する場合があります。実際の総コストはこれらを加味した上でご判断ください。"
            />
          </div>
        </section>

        {/* ─── 関連リンク ─── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h3 className="text-sm font-extrabold text-gray-800">30Labの他の診断ツール</h3>
          <Link
            href="/"
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors group"
          >
            <span className="text-2xl">🏠</span>
            <div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                都内マンション購入診断
              </p>
              <p className="text-xs text-gray-500">無理なく買える価格を3分でチェック</p>
            </div>
            <span className="ml-auto text-gray-400 group-hover:text-blue-500 transition-colors">→</span>
          </Link>
          <Link
            href="/child"
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors group"
          >
            <span className="text-2xl">👶</span>
            <div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                子育て総費用シミュレーター
              </p>
              <p className="text-xs text-gray-500">0歳〜大学卒業まで費用を一括試算</p>
            </div>
            <span className="ml-auto text-gray-400 group-hover:text-blue-500 transition-colors">→</span>
          </Link>
        </section>

        {/* ─── フッター ─── */}
        <footer className="text-center text-xs text-gray-400 pb-4 space-y-1">
          <p>本ツールは参考情報の提供を目的としています。</p>
          <p>© 2025 30Lab</p>
        </footer>

      </div>
    </div>
  );
}
