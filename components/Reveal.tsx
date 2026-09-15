"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Adds `.reveal-in` when the element enters the
 * viewport. Delay via the `delay` prop (ms), shown as --reveal-delay.
 * Respects prefers-reduced-motion via the CSS rules in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  scale = false,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  scale?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("reveal-in");
      return;
    }
    /* If already in viewport, reveal immediately */
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("reveal-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("reveal-in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`${scale ? "reveal-scale" : "reveal"} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}