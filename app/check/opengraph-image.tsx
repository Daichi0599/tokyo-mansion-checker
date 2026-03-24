import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "物件診断 | 30Lab";
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <div
            style={{
              display: "flex",
              background: "white",
              borderRadius: "12px",
              padding: "8px 20px",
              fontSize: "22px",
              fontWeight: 900,
              color: "#4338ca",
            }}
          >
            30Lab
          </div>
          <div style={{ display: "flex", fontSize: "18px", color: "rgba(255,255,255,0.6)" }}>
            Step 2
          </div>
        </div>

        {/* Icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ fontSize: "64px" }}>🔍</span>
          <div
            style={{
              display: "flex",
              fontSize: "52px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            物件診断
          </div>
        </div>

        {/* Sub */}
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            marginBottom: "44px",
            lineHeight: 1.5,
          }}
        >
          気になる物件を入力→坪単価・管理費・10年後まで即判定
        </div>

        {/* Features */}
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {["坪単価のエリア相場比較", "管理費の適正チェック", "結果をシェアして相談"].map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "12px 22px",
                fontSize: "19px",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {f}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "20px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          30lab.vercel.app/check
        </div>
      </div>
    ),
    { ...size }
  );
}
