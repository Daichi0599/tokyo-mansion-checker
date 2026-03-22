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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #2563eb 100%)",
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
              color: "#1d4ed8",
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

        {/* Main title */}
        <div
          style={{
            display: "flex",
            fontSize: "56px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          都内マンション購入診断
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
          無理なく買える価格を約3分・完全無料で算出
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
          }}
        >
          {["世帯年収から算出", "住居費負担率を表示", "金利・エリア比較付き"].map((f) => (
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
          30lab.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
