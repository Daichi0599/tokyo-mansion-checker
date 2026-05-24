import { ImageResponse } from "next/og";
import { loadNotoSansJP } from "@/lib/ogFont";

export const runtime = "edge";
export const alt = "30Lab | 気になったら、まずここから。";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CHARS = "気になったらまずここから30代の大きな決断を数字で整理するLab完全無料匿名データ保存なし営業電話マンション購入診断ローン返済シミュレーター物件車コスト子育て費用";

export default async function OgImage() {
  const fontData = await loadNotoSansJP(CHARS);
  const fonts = fontData
    ? [{ name: "NotoJP", data: fontData, weight: 700 as const }]
    : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          fontFamily: fontData ? "NotoJP, sans-serif" : "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景グロー */}
        <div style={{
          position: "absolute",
          top: -100,
          left: "50%",
          marginLeft: -450,
          width: 900,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.22) 0%, transparent 70%)",
        }} />

        {/* ツールカード */}
        <div style={{ display: "flex", gap: 14, marginBottom: 36 }}>
          {[
            { icon: "🏠", label: "マンション\n購入診断" },
            { icon: "🏦", label: "ローン返済\nシミュレーター" },
            { icon: "🔍", label: "物件診断" },
            { icon: "🚗", label: "車コスト\n診断" },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                backgroundColor: "rgba(30,41,59,0.9)",
                border: "1px solid rgba(71,85,105,0.7)",
                borderRadius: 14,
                padding: "12px 22px",
                minWidth: 148,
              }}
            >
              <span style={{ fontSize: 26 }}>{t.icon}</span>
              <span style={{ color: "#cbd5e1", fontSize: 14, textAlign: "center", lineHeight: 1.4, whiteSpace: "pre" }}>
                {t.label}
              </span>
            </div>
          ))}
        </div>

        {/* メインテキスト */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{
            backgroundColor: "rgba(99,102,241,0.14)",
            border: "1px solid rgba(99,102,241,0.35)",
            borderRadius: 999,
            padding: "5px 20px",
            color: "#a5b4fc",
            fontSize: 17,
            fontWeight: 700,
          }}>
            30代の大きな決断を、数字で整理する
          </div>
          <div style={{ fontSize: 76, fontWeight: 900, color: "white", letterSpacing: "-1px" }}>
            30Lab
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8" }}>
            気になったら、まずここから。
          </div>
        </div>

        {/* 安心バッジ */}
        <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
          {["完全無料", "匿名OK", "データ保存なし", "営業電話なし"].map((b) => (
            <div key={b} style={{
              backgroundColor: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.22)",
              borderRadius: 999,
              padding: "4px 14px",
              color: "#6ee7b7",
              fontSize: 14,
              fontWeight: 700,
            }}>
              ✓ {b}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: 26, right: 40, color: "#334155", fontSize: 15 }}>
          30lab.vercel.app
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
