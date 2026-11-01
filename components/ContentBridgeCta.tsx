"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { trackPlanEvent } from "@/lib/analytics";

type Source = "parking_article" | "income_article" | "maintenance_article";
type Destination = "car" | "mansion" | "loan";

type Props = {
  href: string;
  source: Source;
  destination: Destination;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

/**
 * 検索記事から診断ツールへ渡すための共通CTA。
 * 表示とクリックを別々に計測し、「見られていない」のか
 * 「見たが押されていない」のかを入力値なしで判別する。
 */
export default function ContentBridgeCta({
  href,
  source,
  destination,
  eyebrow,
  title,
  body,
  cta,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewedRef = useRef(false);

  useEffect(() => {
    const element = rootRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || viewedRef.current) return;
        viewedRef.current = true;
        trackPlanEvent("content_bridge_view", { source, destination });
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [destination, source]);

  return (
    <div ref={rootRef} className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5">
      <p className="text-xs font-bold text-blue-300">{eyebrow}</p>
      <p className="mt-1 text-base font-black text-white">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
      <Link
        href={href}
        onClick={() => trackPlanEvent("content_bridge_click", { source, destination })}
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
      >
        {cta}
      </Link>
    </div>
  );
}
