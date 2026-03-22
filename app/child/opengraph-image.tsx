import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "子育て総費用シミュレーター | 30Lab";
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
          background: "linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "white",
              borderRadius: "16px",
              padding: "12px 24px",
              fontSize: "28px",
              fontWeight: 900,
              color: "#059669",
            }}
          >
            30Lab
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            アラサーの人生選択を支援するツール集
          </div>
        </div>

        {/* Icon + Main title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", fontSize: "80px" }}>👶</div>
          <div
            style={{
              display: "flex",
              fontSize: "52px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            子育て総費用
            <br />
            シミュレーター
          </div>
        </div>

        {/* Sub */}
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          0歳〜大学卒業まで無料試算｜補助金差し引きの実質負担額も表示
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
          }}
        >
          {["フェーズ別内訳", "補助金・児童手当を計算", "完全無料・匿名OK"].map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "20px",
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
            color: "rgba(255,255,255,0.5)",
          }}
        >
          30lab.vercel.app/child
        </div>
      </div>
    ),
    { ...size }
  );
}
