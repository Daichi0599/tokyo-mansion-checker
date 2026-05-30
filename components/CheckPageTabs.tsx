"use client";

import { useState } from "react";
import PropertyDiagnosis   from "@/components/PropertyDiagnosis";
import TsuboPriceComparison from "@/components/TsuboPriceComparison";

const TABS = [
  { id: "single",  label: "単体診断", icon: "🔍" },
  { id: "compare", label: "物件比較", icon: "🏢" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function CheckPageTabs() {
  const [active, setActive] = useState<TabId>("single");

  return (
    <div className="space-y-4">
      {/* タブバー */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-1.5">
        <div className="grid grid-cols-2 gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`py-2.5 px-1 flex items-center justify-center gap-1.5 rounded-xl transition-all text-sm font-semibold ${
                active === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:bg-slate-700"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* コンテンツ */}
      <div className={active === "single" ? "block" : "hidden"}>
        <PropertyDiagnosis />
      </div>
      <div className={active === "compare" ? "block" : "hidden"}>
        <TsuboPriceComparison />
      </div>
    </div>
  );
}
