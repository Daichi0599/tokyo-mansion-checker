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

interface SelectFieldConfig {
  key: keyof DiagnosisInput;
  label: string;
  unit: string;
  options: number[];
}

const range = (start: number, end: number, step = 1): number[] => {
  const arr: number[] = [];
  for (let v = start; v <= end; v = Math.round((v + step) * 1000) / 1000) arr.push(v);
  return arr;
};

const fields: SelectFieldConfig[] = [
  {
    key: "annualIncome",
    label: "世帯年収",
    unit: "万円",
    options: [300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1800, 2000, 2500, 3000, 4000, 5000],
  },
  {
    key: "age",
    label: "年齢（主債務者）",
    unit: "歳",
    options: range(20, 65),
  },
  {
    key: "downPayment",
    label: "頭金",
    unit: "万円",
    options: [0, 100, 200, 300, 400, 500, 700, 1000, 1500, 2000, 3000, 5000],
  },
  {
    key: "interestRate",
    label: "金利（年率）",
    unit: "%",
    options: [0.1, 0.3, 0.5, 0.7, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0],
  },
  {
    key: "repaymentYears",
    label: "返済年数",
    unit: "年",
    options: [10, 15, 20, 25, 30, 35],
  },
  {
    key: "monthlyLiving",
    label: "月の生活費",
    unit: "万円",
    options: [10, 15, 20, 25, 30, 35, 40, 50, 60, 80, 100],
  },
];

export default function DiagnosisForm({ onSubmit }: Props) {
  const [values, setValues] = useState<DiagnosisInput>(defaultValues);

  const handleChange = (key: keyof DiagnosisInput, raw: string) => {
    const num = parseFloat(raw);
    setValues((prev) => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-5">
      <h2 className="text-lg font-bold text-gray-800 border-b pb-3">あなたの情報を入力</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(({ key, label, unit, options }) => (
          <div key={key} className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              {label}
              <span className="ml-1 text-xs text-gray-400">（{unit}）</span>
            </label>
            <select
              value={values[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} {unit}
                </option>
              ))}
            </select>
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
