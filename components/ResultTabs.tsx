"use client";

import { useState } from "react";
import RateTypeSimulator from "@/components/RateTypeSimulator";
import AreaComparison    from "@/components/AreaComparison";
import PropertyDiagnosis from "@/components/PropertyDiagnosis";
import PriceComparison   from "@/components/PriceComparison";
import { DiagnosisInput, DiagnosisResult } from "@/types";

interface Props {
  result: DiagnosisResult;
  input:  DiagnosisInput;
}

const TABS = [
  { id: "rate",     label: "金利比較", icon: "📊" },
  { id: "area",     label: "エリア",   icon: "🗺️" },
  { id: "property", label: "物件診断", icon: "🔍" },
  { id: "price",    label: "価格表",   icon: "💰" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ResultTabs({ result, input }: Props) {
  const [active, setActive] = useState<TabId>("rate");
  const loanAmount = Math.max(0, result.safePrice - input.downPayment);

  return (
    <div className="space-y-3">
      {/* ── タブバー ── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-1.5">
        <div className="grid grid-cols-4 gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`py-2.5 px-1 flex flex-col items-center gap-0.5 rounded-xl transition-all text-xs font-semibold ${
                active === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <span className="text-sm leading-none">{tab.icon}</span>
              <span className="leading-tight">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── タブコンテンツ（state保持のため hidden/block で切替） ── */}
      <div className={active === "rate" ? "block" : "hidden"}>
        <RateTypeSimulator
          loanAmount={loanAmount}
          repaymentYears={input.repaymentYears}
          defaultRate={input.interestRate}
        />
      </div>

      <div className={active === "area" ? "block" : "hidden"}>
        <AreaComparison safePrice={result.safePrice} />
      </div>

      <div className={active === "property" ? "block" : "hidden"}>
        <PropertyDiagnosis input={input} safePrice={result.safePrice} />
      </div>

      <div className={active === "price" ? "block" : "hidden"}>
        <PriceComparison
          input={input}
          defaultPrices={[result.safePrice, result.aggressivePrice, result.dangerPrice]}
        />
      </div>
    </div>
  );
}
