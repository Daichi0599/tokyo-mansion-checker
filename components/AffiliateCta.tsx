"use client";

import { sendGAEvent } from "@next/third-parties/google";

/**
 * アフィリエイト導線の共通コンポーネント。
 *
 * 記事ごとに手書きしていたCTAをここに集約している。個別に書くと以下が抜けやすいため:
 *  - ステマ規制（2023年10月施行）で必須の「PR」表記
 *  - Google が求める rel="sponsored"（広告リンクの明示）
 *  - GA4 の affiliate_click 計測
 *  - A8 のインプレッション計測ピクセル
 */

type ProgramKey = "mogecheck" | "kasaihoken" | "fpsoudan" | "gakushi";

type Program = {
  /** A8 の a8mat パラメータ */
  mat: string;
  /** インプレッション計測ピクセルのホスト（プログラムごとに異なる） */
  pixelHost: string;
  /** GA4 の link_name に入る値 */
  gaName: string;
  heading: string;
  title: string;
  note: string;
  cta: string;
  /** Tailwind は動的クラス名を解決できないため静的に持つ */
  style: { border: string; accent: string; button: string };
};

const PROGRAMS: Record<ProgramKey, Program> = {
  mogecheck: {
    mat: "4AZGC3+F9J44Y+3SUE+15RCDE",
    pixelHost: "www12",
    gaName: "モゲチェック",
    heading: "住宅ローン、どこが一番お得？",
    title: "無料で複数行を一括比較できる「モゲチェック」",
    note: "年収・物件価格を入力するだけで最適なローンを提案。審査通過率も確認できます。",
    cta: "モゲチェックで無料診断する →",
    style: {
      border: "border-blue-500/30",
      accent: "text-blue-400",
      button: "bg-blue-600 hover:bg-blue-500",
    },
  },
  kasaihoken: {
    mat: "4AZGC3+FBBEYA+2PS+2NBPO2",
    pixelHost: "www18",
    gaName: "火災保険一括見積もり",
    heading: "火災保険は比較しないと年1万円損することも",
    title: "複数社を無料で一括見積もりして最安値を確認",
    note: "同じ補償内容でも保険会社によって年間数千円〜1万円以上の差が出ます。不動産会社に勧められたまま入ると割高になりがちです。",
    cta: "無料で火災保険を一括見積もりする →",
    style: {
      border: "border-orange-500/30",
      accent: "text-orange-400",
      button: "bg-orange-500 hover:bg-orange-600",
    },
  },
  fpsoudan: {
    mat: "4AZGC3+FAPZCI+5UJQ+5YJRM",
    pixelHost: "www10",
    gaName: "おかねと暮らし相談",
    heading: "住宅費と教育費、両立できるか不安なら",
    title: "お金のプロに無料で家計を診断してもらう",
    note: "住宅ローン・教育費・老後資金をまとめて相談できます。オンライン相談も可能。",
    cta: "FPに無料で相談する →",
    style: {
      border: "border-teal-500/30",
      accent: "text-teal-400",
      button: "bg-teal-600 hover:bg-teal-500",
    },
  },
  gakushi: {
    mat: "4AZLSJ+7AK6K2+4GN2+5ZEMP",
    pixelHost: "www18",
    gaName: "ガーデン学資保険",
    heading: "教育費は「早く始めるほど」有利",
    title: "学資保険で教育費を確実に準備する",
    note: "元本保証＋返戻率110〜120%。子どもが小さいうちに始めるほど毎月の負担が軽くなります。",
    cta: "学資保険を無料で相談する →",
    style: {
      border: "border-amber-500/30",
      accent: "text-amber-400",
      button: "bg-amber-500 hover:bg-amber-400",
    },
  },
};

type Props = {
  program: ProgramKey;
  /** GA4 で流入元ページを識別する。記事なら slug */
  page: string;
  heading?: string;
  title?: string;
  note?: string;
  cta?: string;
};

export default function AffiliateCta({ program, page, heading, title, note, cta }: Props) {
  const p = PROGRAMS[program];

  return (
    <div className={`bg-slate-800 border ${p.style.border} rounded-2xl p-5 mb-10`}>
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[10px] font-bold text-slate-400 border border-slate-600 rounded px-1.5 py-0.5 tracking-wide">
          PR
        </span>
        <p className={`text-xs font-bold ${p.style.accent}`}>{heading ?? p.heading}</p>
      </div>
      <p className="text-sm font-black text-white mb-2">{title ?? p.title}</p>
      <p className="text-xs text-slate-400 leading-relaxed mb-3">{note ?? p.note}</p>
      <a
        href={`https://px.a8.net/svt/ejp?a8mat=${p.mat}`}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        onClick={() => sendGAEvent("event", "affiliate_click", { link_name: p.gaName, page })}
        className={`inline-block ${p.style.button} text-white font-extrabold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm`}
      >
        {cta ?? p.cta}
      </a>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        width={1}
        height={1}
        src={`https://${p.pixelHost}.a8.net/0.gif?a8mat=${p.mat}`}
        alt=""
        style={{ display: "block" }}
      />
    </div>
  );
}
