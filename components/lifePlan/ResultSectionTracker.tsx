"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { trackPlanEvent } from "@/lib/analytics";

type ResultSection = "scenarios" | "comparison" | "wealth" | "recommendations" | "edit" | "detail_tools" | "affiliate";

export default function ResultSectionTracker({
  section,
  children,
}: {
  section: ResultSection;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return;
        fired.current = true;
        trackPlanEvent("result_section_view", { section });
        observer.disconnect();
      },
      { threshold: 0.35 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [section]);

  return <div ref={ref}>{children}</div>;
}
