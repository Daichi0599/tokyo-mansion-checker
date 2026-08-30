"use client";

import type { LifeProfile, HousingIntent } from "@/types/lifePlan";
import { PlanNumberField, PlanChoiceField, range } from "./PlanField";

interface Props {
  housing: LifeProfile["housing"];
  onChange: (housing: LifeProfile["housing"]) => void;
  errors: Record<string, string>;
}

const INTENT_OPTIONS: { value: HousingIntent; label: string }[] = [
  { value: "none", label: "今回は考えない" },
  { value: "considering", label: "検討している" },
  { value: "planned", label: "購入予定がある" },
];

export default function HousingStep({ housing, onChange, errors }: Props) {
  const set = <K extends keyof LifeProfile["housing"]>(key: K, value: LifeProfile["housing"][K]) => {
    onChange({ ...housing, [key]: value });
  };

  const disabled = housing.intent === "none";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-black text-white">住まい</h2>
        <p className="text-sm text-slate-400 mt-1">
          住宅購入をどれくらい考えているか、条件が決まっていればその内容を入力してください。
        </p>
      </div>

      <PlanChoiceField
        label="住宅購入の意向"
        value={housing.intent}
        options={INTENT_OPTIONS}
        onChange={(v) => set("intent", v)}
      />

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 transition-opacity ${disabled ? "opacity-50" : ""}`}>
        <PlanNumberField
          label="希望する購入価格"
          unit="万円"
          value={housing.targetPrice}
          options={[2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 15000]}
          onChange={(v) => set("targetPrice", v)}
          error={errors.targetPrice}
          isDefault={disabled}
        />
        <PlanNumberField
          label="頭金"
          unit="万円"
          value={housing.downPayment}
          options={[0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000]}
          onChange={(v) => set("downPayment", v)}
          error={errors.downPayment}
          isDefault={disabled}
        />
        <PlanNumberField
          label="金利（年率）"
          unit="%"
          desc="変動なら1.0%前後、フラット35なら3.2%前後が目安"
          value={housing.interestRate}
          options={[0.5, 0.7, 0.9, 1.0, 1.1, 1.3, 1.5, 1.8, 2.0, 2.5, 3.0, 3.3, 3.5]}
          onChange={(v) => set("interestRate", v)}
          error={errors.interestRate}
          isDefault={disabled}
        />
        <PlanNumberField
          label="返済年数"
          unit="年"
          value={housing.repaymentYears}
          options={range(5, 50, 5)}
          onChange={(v) => set("repaymentYears", v)}
          error={errors.repaymentYears}
          isDefault={disabled}
        />
        <PlanNumberField
          label="管理費・修繕積立金"
          unit="万円/月"
          value={housing.managementFee}
          options={[0, 1, 2, 3, 4, 5, 6, 8, 10]}
          onChange={(v) => set("managementFee", v)}
          error={errors.managementFee}
          isDefault={disabled}
        />
      </div>
    </div>
  );
}
