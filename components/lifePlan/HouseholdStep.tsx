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
          まずは今の状況から。年収・貯蓄・生活費は、これから先の5つの時点を比較するベースになります。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
        <PlanNumberField
          label="ご本人の年齢"
          unit="歳"
          value={household.userAge}
          options={range(18, 60)}
          onChange={(v) => set("userAge", v)}
          error={errors.userAge}
        />
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
          label="貯蓄"
          unit="万円"
          desc="頭金や一時的な出費に充てられる金融資産の合計"
          value={household.savings}
          options={[0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000]}
          onChange={(v) => set("savings", v)}
          error={errors.savings}
        />
        <PlanNumberField
          label="月の生活費"
          unit="万円"
          desc="食費・光熱費・通信費・保険料など住居費以外の支出"
          value={household.monthlyLivingCost}
          options={[10, 15, 20, 25, 30, 35, 40, 50, 60]}
          onChange={(v) => set("monthlyLivingCost", v)}
          error={errors.monthlyLivingCost}
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
    </div>
  );
}
