"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE } from "@/lib/site";

const STATS = [
  { value: 7500, suffix: "+", label: "Suits Delivered" },
  { value: 12, suffix: "+", label: "Years of Mastery" },
  { value: 500, suffix: "+", label: "Wedding Grooms Styled" },
  { value: 100, suffix: "%", label: "Fit Satisfaction" },
] as const;

export function Stats() {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        el.querySelectorAll<HTMLElement>("[data-count]").forEach((num) => {
          const target = Number(num.dataset.count);
          gsap.from(num, {
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate() {
              num.textContent = Number(num.textContent).toLocaleString("en-IN");
            },
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
          // Server HTML already contains the final number for crawlers/no-JS.
          void target;
        });
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      aria-label={`${SITE.name} in numbers`}
      className="border-y border-gold/15 bg-coal"
    >
      <div className="shell grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4 md:py-16">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-4xl text-silk md:text-5xl">
              <span data-count={stat.value}>
                {stat.value.toLocaleString("en-IN")}
              </span>
              <span className="text-metallic">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] text-mist uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
