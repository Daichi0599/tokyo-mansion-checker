"use client";

import { useState } from "react";
import { DiagnosisInput } from "@/types";

interface Props {
  onSubmit: (input: DiagnosisInput) => void;
}

const defaultValues: DiagnosisInput = {
  annualIncome: 1200,
  age: 30,
  downPayment: 500,
  interestRate: 0.5,
  repaymentYears: 35,
  monthlyLiving: 25,
};

interface FieldConfig {
  key: keyof DiagnosisInput;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  placeholder: string;
}

const fields: FieldConfig[] = [
  { key: "annualIncome", label: "世帯年収", unit: "万円", min: 300, max: 5000, step: 50, placeholder: "例：1200" },
  { key: "age", label: "年齢（主債務者）", unit: "歳", min: 20, max: 65, step: 1, placeholder: "例：30" },
  { key: "downPayment", label: "頭金", unit: "万円", min: 0, max: 5000, step: 50, placeholder: "例：500" },
  { key: "interestRate", label: "金利（年率）", unit: "%", min: 0.1, max: 5, step: 0.05, placeholder: "例：0.5" },
  { key: "repaymentYears", label: "返済年数", unit: "年", min: 10, max: 35, step: 1, placeholder: "例：35" },
  { key: "monthlyLiving", label: "月の生活費", unit: "万円", min: 10, max: 100, step: 1, placeholder: "例：25" },
];

export default function DiagnosisForm({ onSubmit }: Props) {
  const [values, setValues] = useState<DiagnosisInput>(defaultValues);
  const [errors, setErrors] = useState<Partial<Record<keyof DiagnosisInput, string>>>({});

  const handleChange = (key: keyof DiagnosisInput, raw: string) => {
    const num = parseFloat(raw);
    setValues((prev) => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof DiagnosisInput, string>> = {};
    if (values.annualIncome <= 0) newErrors.annualIncome = "年収を入力してください";
    if (values.age < 20 || values.age > 65) newErrors.age = "20〜65歳で入力してください";
    if (values.downPayment < 0) newErrors.downPayment = "0以上で入力してください";
    if (values.interestRate < 0 || values.interestRate > 10) newErrors.interestRate = "0〜10%で入力してください";
    if (values.repaymentYears < 1 || values.repaymentYears > 50) newErrors.repaymentYears = "1〜50年で入力してください";
    if (values.monthlyLiving <= 0) newErrors.monthlyLiving = "生活費を入力してください";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-5">
      <h2 className="text-lg font-bold text-gray-800 border-b pb-3">あなたの情報を入力</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(({ key, label, unit, min, max, step, placeholder }) => (
          <div key={key} className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              {label}
              <span className="ml-1 text-xs text-gray-400">（{unit}）</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={min}
                max={max}
                step={step}
                placeholder={placeholder}
                value={values[key] || ""}
                onChange={(e) => handleChange(key, e.target.value)}
                className={`w-full rounded-lg border px-3 py-2 pr-12 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors[key] ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
                }`}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 pointer-events-none">
                {unit}
              </span>
            </div>
            {errors[key] && (
              <p className="text-xs text-red-500">{errors[key]}</p>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 rounded-xl transition text-base shadow"
      >
        診断する
      </button>
    </form>
  );
}
