"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "li" | "span";
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Pixels the content rises while fading in. */
  y?: number;
  /** Stagger between children marked with [data-reveal]. */
  stagger?: number;
};

/**
 * Scroll-triggered fade-up. Content is fully visible in the server-rendered
 * HTML (crawlers and no-JS users see everything); GSAP only intercepts it
 * on capable browsers, and prefers-reduced-motion users get no movement.
 *
 * Wrap a section and mark individual children with `data-reveal` to stagger
 * them; with no marked children the wrapper itself animates.
 */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 28,
  stagger = 0.09,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const marked = el.querySelectorAll("[data-reveal]");
        const targets = marked.length > 0 ? Array.from(marked) : [el];

        gsap.from(targets, {
          y,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          delay,
          stagger,
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: ref },
  );

  const Tag = as;
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
