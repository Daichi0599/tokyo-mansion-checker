"use client";

import type { LifeProfile, CarPlan } from "@/types/lifePlan";
import { PlanNumberField, PlanChoiceField } from "./PlanField";

interface Props {
  car: LifeProfile["car"];
  onChange: (car: LifeProfile["car"]) => void;
}

const CAR_OPTIONS: { value: CarPlan; label: string }[] = [
  { value: "none", label: "持たない" },
  { value: "carshare", label: "カーシェア" },
  { value: "used", label: "中古車" },
  { value: "new", label: "新車" },
];

export default function CarStep({ car, onChange }: Props) {
  const set = <K extends keyof LifeProfile["car"]>(key: K, value: LifeProfile["car"][K]) => {
    onChange({ ...car, [key]: value });
  };

  const disabled = car.plan === "none";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-black text-white">車・確認</h2>
        <p className="text-sm text-slate-400 mt-1">
          車は任意項目です。持たない場合は「持たない」のままで大丈夫です。
        </p>
      </div>

      <PlanChoiceField label="車の持ち方" value={car.plan} options={CAR_OPTIONS} onChange={(v) => set("plan", v)} />

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 transition-opacity ${disabled ? "opacity-50" : ""}`}>
        <PlanNumberField
          label="駐車場代"
          unit="万円/月"
          value={car.parkingFee}
          options={[0, 1, 2, 3, 4, 5]}
          onChange={(v) => set("parkingFee", v)}
          isDefault={disabled}
        />
        <PlanNumberField
          label="月の利用日数"
          unit="日"
          value={car.monthlyUseDays}
          options={[2, 4, 8, 12, 16, 20]}
          onChange={(v) => set("monthlyUseDays", v)}
          isDefault={disabled}
        />
      </div>
    </div>
  );
}
