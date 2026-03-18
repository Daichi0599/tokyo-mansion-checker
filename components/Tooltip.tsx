"use client";

import { useState } from "react";

interface Props {
  text: string;
}

export default function Tooltip({ text }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-flex items-center ml-1">
      <button
        type="button"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        onClick={() => setVisible((v) => !v)}
        className="w-4 h-4 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-500 text-[10px] font-bold leading-none flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="説明を見る"
      >
        ?
      </button>
      {visible && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-gray-800 text-white text-xs rounded-lg px-3 py-2 leading-relaxed shadow-lg z-50 pointer-events-none"
        >
          {text}
          {/* 吹き出し三角 */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
        </span>
      )}
    </span>
  );
}
