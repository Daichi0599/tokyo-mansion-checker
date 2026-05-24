import { ImageResponse } from "next/og";
import { loadNotoSansJP } from "@/lib/ogFont";

export const runtime = "edge";
export const alt = "住宅ローン返済シミュレーター | 30Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CHARS =
  "住宅ローン返済シミュレーター無料借入額金利期間から月を即計算総利息上昇リスク比較完全匿名Lab.vercel.app万円安全安心";

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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          fontFamily: fontData ? "NotoJP, sans-serif" : "sans-serif",
          padding: "0 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景グロー */}
        <div style={{
          position: "absolute",
          top: -80,
          left: "50%",
          marginLeft: -400,
          width: 800,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)",
        }} />

        {/* 左側テキスト */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 50, gap: 16 }}>
          {/* バッジ */}
          <div style={{
            display: "flex",
            alignSelf: "flex-start",
            backgroundColor: "rgba(37,99,235,0.2)",
            border: "1px solid rgba(59,130,246,0.4)",
            borderRadius: 999,
            padding: "5px 18px",
            color: "#93c5fd",
            fontSize: 16,
            fontWeight: 700,
          }}>
            🏦 無料シミュレーター
          </div>

          {/* タイトル */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <span style={{ fontSize: 46, fontWeight: 900, color: "white", lineHeight: 1.2 }}>
              住宅ローン返済
            </span>
            <span style={{ fontSize: 46, fontWeight: 900, color: "#60a5fa", lineHeight: 1.2 }}>
              シミュレーター
            </span>
          </div>

          {/* サブテキスト */}
          <div style={{ fontSize: 20, color: "#94a3b8", lineHeight: 1.5 }}>
            借入額・金利・返済期間を入力するだけで{"\n"}
            月返済額・総返済額・利息を即計算
          </div>

          {/* 特徴タグ */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
            {["金利上昇リスク比較", "返済比率チェック", "完全無料"].map((f) => (
              <div key={f} style={{
                backgroundColor: "rgba(30,41,59,0.8)",
                border: "1px solid rgba(71,85,105,0.7)",
                borderRadius: 8,
                padding: "5px 14px",
                color: "#cbd5e1",
                fontSize: 15,
                fontWeight: 700,
              }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* 右側: 計算結果モックアップ */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: 360,
          backgroundColor: "#1e293b",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(51,65,85,0.8)",
        }}>
          {/* ヘッダー */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 24px 16px",
            borderBottom: "1px solid rgba(51,65,85,0.8)",
            gap: 4,
          }}>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>月返済額（元利均等）</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span style={{ fontSize: 52, fontWeight: 900, color: "#60a5fa", lineHeight: 1 }}>12.5</span>
              <span style={{ fontSize: 18, color: "#94a3b8" }}>万円/月</span>
            </div>
            <div style={{ fontSize: 13, color: "#34d399", fontWeight: 700 }}>
              返済比率 25.0%（安全）
            </div>
          </div>

          {/* 詳細 */}
          <div style={{ display: "flex", gap: 10, padding: "14px 18px" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              backgroundColor: "rgba(15,23,42,0.6)",
              borderRadius: 10,
              padding: "10px 8px",
            }}>
              <span style={{ fontSize: 11, color: "#64748b" }}>総返済額</span>
              <span style={{ fontSize: 16, fontWeight: 900, color: "#e2e8f0" }}>5,250万</span>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              backgroundColor: "rgba(15,23,42,0.6)",
              borderRadius: 10,
              padding: "10px 8px",
            }}>
              <span style={{ fontSize: 11, color: "#64748b" }}>うち利息</span>
              <span style={{ fontSize: 16, fontWeight: 900, color: "#f87171" }}>750万</span>
            </div>
          </div>

          {/* 金利比較テーブル */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 18px 16px",
            gap: 6,
          }}>
            <div style={{ fontSize: 11, color: "#64748b", marginBottom: 2 }}>金利上昇シナリオ</div>
            {[
              { r: "0.50%", m: "12.5万/月", highlight: true },
              { r: "1.00%", m: "13.2万/月", highlight: false },
              { r: "1.50%", m: "14.0万/月", highlight: false },
            ].map((row) => (
              <div key={row.r} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: row.highlight ? "rgba(37,99,235,0.15)" : "rgba(15,23,42,0.4)",
                borderRadius: 8,
                padding: "5px 12px",
                border: row.highlight ? "1px solid rgba(59,130,246,0.3)" : "none",
              }}>
                <span style={{ fontSize: 13, color: row.highlight ? "#93c5fd" : "#94a3b8", fontWeight: row.highlight ? 700 : 400 }}>
                  {row.r}{row.highlight ? " ← 現在" : ""}
                </span>
                <span style={{ fontSize: 13, color: row.highlight ? "#93c5fd" : "#94a3b8", fontWeight: 700 }}>
                  {row.m}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: 24, right: 40, color: "#334155", fontSize: 14 }}>
          30lab.vercel.app/loan
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
