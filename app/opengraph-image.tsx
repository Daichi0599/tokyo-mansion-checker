import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "30Lab | 気になったら、まずここから。";
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
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1d4ed8 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            background: "rgba(59,130,246,0.3)",
            border: "1px solid rgba(96,165,250,0.5)",
            borderRadius: "999px",
            padding: "8px 24px",
            fontSize: "18px",
            color: "rgba(147,197,253,1)",
            marginBottom: "24px",
          }}
        >
          30代のお金の一歩目に
        </div>

        {/* Logo + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "white",
              borderRadius: "16px",
              padding: "10px 28px",
              fontSize: "48px",
              fontWeight: 900,
              color: "#1d4ed8",
            }}
          >
            30Lab
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            fontSize: "52px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: "32px",
          }}
        >
          気になったら、まずここから。
        </div>

        {/* Tools row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
          }}
        >
          {[
            { icon: "🏠", label: "マンション購入診断" },
            { icon: "🔍", label: "物件診断" },
            { icon: "🚗", label: "車コスト診断" },
            { icon: "👶", label: "子育て費用試算" },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "16px 20px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span style={{ fontSize: "28px" }}>{t.icon}</span>
              <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)", fontWeight: 700 }}>{t.label}</span>
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
          30lab.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
