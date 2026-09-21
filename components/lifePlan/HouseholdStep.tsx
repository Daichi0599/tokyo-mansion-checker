"use client";

import type { LifeProfile } from "@/types/lifePlan";
import { PlanNumberField, range } from "./PlanField";

interface Props {
  household: LifeProfile["household"];
  onChange: (household: LifeProfile["household"]) => void;
  errors: Record<string, string>;
}

export default function HouseholdStep({ household, onChange, errors }: Props) {
  const set = <K extends keyof LifeProfile["household"]>(key: K, value: LifeProfile["household"][K]) => {
    onChange({ ...household, [key]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-black text-white">わが家の現在</h2>
        <p className="text-sm text-slate-400 mt-1">
          正確でなくても大丈夫です。まずは年収と家賃を近い数字で選んでください。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
        <PlanNumberField
          label="ご本人の年収"
          unit="万円"
          desc="額面ベースの年間収入"
          value={household.userIncome}
          options={[0, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000]}
          onChange={(v) => set("userIncome", v)}
          error={errors.userIncome}
        />
        <PlanNumberField
          label="パートナーの年収"
          unit="万円"
          desc="単身の場合は0のまま"
          value={household.partnerIncome}
          options={[0, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200]}
          onChange={(v) => set("partnerIncome", v)}
          error={errors.partnerIncome}
        />
        <PlanNumberField
          label="いまの家賃"
          unit="万円/月"
          desc="住宅を購入しない場合の「現在」の比較基準になります"
          value={household.currentRent}
          options={[0, 5, 8, 10, 12, 14, 16, 18, 20, 25, 30]}
          onChange={(v) => set("currentRent", v)}
          error={errors.currentRent}
        />
      </div>

      <details className="group rounded-xl border border-slate-700 bg-slate-900/40 p-4">
        <summary className="cursor-pointer list-none text-sm font-bold text-slate-300 flex items-center justify-between">
          <span>もう少し正確にする（年齢・賞与・貯蓄・生活費）</span>
          <span className="text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
        </summary>
        <p className="mt-2 text-xs text-slate-500">開かなくても、表示中の目安で計算できます。</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
          <PlanNumberField
            label="ご本人の年齢"
            unit="歳"
            value={household.userAge}
            options={range(18, 60)}
            onChange={(v) => set("userAge", v)}
            error={errors.userAge}
            isDefault
          />
          <PlanNumberField
            label="ご本人の年間賞与"
            unit="万円"
            desc="年収に含まれる賞与部分（月給とは別に、賞与は年間の別枠として計算します）"
            value={household.userBonusAnnual}
            options={[0, 30, 50, 80, 100, 150, 200, 300, 400]}
            onChange={(v) => set("userBonusAnnual", v)}
            error={errors.userBonusAnnual}
            isDefault
          />
          <PlanNumberField
            label="パートナーの年間賞与"
            unit="万円"
            desc="単身、または賞与が無い場合は0のまま"
            value={household.partnerBonusAnnual}
            options={[0, 30, 50, 80, 100, 150, 200, 300]}
            onChange={(v) => set("partnerBonusAnnual", v)}
            error={errors.partnerBonusAnnual}
            isDefault
          />
          <PlanNumberField
            label="貯蓄"
            unit="万円"
            desc="頭金や一時的な出費に充てられる金融資産の合計"
            value={household.savings}
            options={[0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000]}
            onChange={(v) => set("savings", v)}
            error={errors.savings}
            isDefault
          />
          <PlanNumberField
            label="月の生活費"
            unit="万円"
            desc="住居費を除く、毎月のおおよその支出"
            value={household.monthlyLivingCost}
            options={[10, 15, 20, 25, 30, 35, 40, 50, 60]}
            onChange={(v) => set("monthlyLivingCost", v)}
            error={errors.monthlyLivingCost}
            isDefault
          />
        </div>
      </details>
    </div>
  );
}
