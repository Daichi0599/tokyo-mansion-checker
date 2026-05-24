import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "都内マンション購入診断 | 30Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 60%, #bfdbfe 100%)",
          fontFamily: "sans-serif",
          padding: "0 50px",
        }}
      >
        {/* Left side */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: "50px" }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#2563eb",
              color: "white",
              fontSize: "18px",
              fontWeight: 800,
              borderRadius: "999px",
              padding: "6px 20px",
              marginBottom: "20px",
            }}
          >
            無料診断ツール
          </div>

          {/* Main title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "50px",
              fontWeight: 900,
              color: "#1e3a5f",
              lineHeight: 1.3,
              marginBottom: "20px",
            }}
          >
            <span>都内マンション</span>
            <span style={{ color: "#2563eb" }}>「無理なく買える額」</span>
            <span>を数字で診断</span>
          </div>

          {/* Sub text */}
          <div style={{ display: "flex", fontSize: "22px", color: "#4b5563", marginBottom: "24px" }}>
            年収・頭金・金利から安全購入価格を3分で算出
          </div>

          {/* Feature tags */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["完全無料", "匿名OK", "営業電話なし"].map((f) => (
              <div
                key={f}
                style={{
                  display: "flex",
                  background: "white",
                  border: "2px solid #bfdbfe",
                  borderRadius: "8px",
                  padding: "6px 16px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#1d4ed8",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Right side: card mockup */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "380px",
            background: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(37,99,235,0.20)",
          }}
        >
          {/* Card hero */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
              padding: "24px 24px 18px",
              borderBottom: "1px solid #bfdbfe",
            }}
          >
            {/* Verdict badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#dcfce7",
                border: "2px solid #86efac",
                borderRadius: "999px",
                padding: "5px 18px",
                fontSize: "16px",
                fontWeight: 900,
                color: "#16a34a",
                marginBottom: "10px",
              }}
            >
              安全圏
            </div>
            <div style={{ display: "flex", fontSize: "13px", color: "#6b7280", marginBottom: "4px" }}>
              無理なく買える安全購入価格は
            </div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span style={{ fontSize: "54px", fontWeight: 900, color: "#111827", lineHeight: 1 }}>6,365</span>
              <span style={{ fontSize: "20px", color: "#6b7280", marginLeft: "4px" }}>万円</span>
            </div>
            <div style={{ display: "flex", fontSize: "12px", fontWeight: 700, color: "#2563eb", marginTop: "4px" }}>
              住居費負担率 25.0%（ローン＋管理費ベース）
            </div>
          </div>

          {/* 3 boxes */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "14px 16px",
              background: "#f9fafb",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                background: "#f0fdf4",
                border: "2px solid #86efac",
                borderRadius: "8px",
                padding: "8px 4px",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#16a34a" }}>安全圏</span>
              <span style={{ fontSize: "14px", fontWeight: 900, color: "#15803d" }}>6,365万</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                background: "#fefce8",
                border: "2px solid #fde047",
                borderRadius: "8px",
                padding: "8px 4px",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#ca8a04" }}>背伸び圏</span>
              <span style={{ fontSize: "14px", fontWeight: 900, color: "#a16207" }}>7,762万</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                background: "#fef2f2",
                border: "2px solid #fca5a5",
                borderRadius: "8px",
                padding: "8px 4px",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#dc2626" }}>注意圏</span>
              <span style={{ fontSize: "14px", fontWeight: 900, color: "#b91c1c" }}>9,159万</span>
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "8px",
              fontSize: "11px",
              color: "#9ca3af",
              background: "#f9fafb",
              borderTop: "1px solid #f3f4f6",
            }}
          >
            30lab.vercel.app/mansion — 都内マンション購入診断（無料）
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
