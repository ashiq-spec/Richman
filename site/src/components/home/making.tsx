"use client";

import { useRef } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE } from "@/lib/site";

/**
 * "The Making" — a pinned, scroll-scrubbed sequence. As the visitor
 * scrolls, a gold line-art suit draws itself, its pattern pieces fly
 * together, running stitches travel the seams, and the drawing
 * dissolves into a real photograph.
 *
 * Pure SVG + GSAP transforms: no video, no 3D payload, 60fps on phones.
 * Reduced-motion users get a static, fully-assembled composition.
 */

const CAPTIONS = [
  {
    kicker: "01 · Measure",
    line: "It begins with 20+ measurements.",
    sub: "Your posture, your stance, your proportions — recorded once, kept forever.",
  },
  {
    kicker: "02 · Cut",
    line: "Cut as pattern pieces. Never as sizes.",
    sub: "Each panel is drawn for your body before a blade ever touches cloth.",
  },
  {
    kicker: "03 · Stitch",
    line: "Stitched by hands with a decade of practice.",
    sub: "Seam by seam, canvas and cloth are sewn into one garment.",
  },
  {
    kicker: "04 · Wear",
    line: "Worn like it was always yours.",
    sub: "Because it was — from the very first measurement.",
  },
];

/* Gold line-art jacket, authored as separable pieces. pathLength=1 lets
   every stroke draw with the same dashoffset math. */
function JacketArt() {
  const stroke = {
    fill: "none",
    stroke: "#c6a15b",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    pathLength: 1,
  };
  const seam = {
    ...stroke,
    stroke: "#ead9ae",
    strokeWidth: 1.4,
  };

  return (
    <svg
      viewBox="0 0 400 520"
      aria-hidden="true"
      className="making-svg h-full w-auto max-w-full drop-shadow-[0_0_24px_rgba(198,161,91,0.18)]"
    >
      {/* Collar */}
      <g data-piece="collar">
        <path {...stroke} className="draw" d="M184 76 Q200 66 216 76 L212 92 Q200 84 188 92 Z" />
      </g>

      {/* Left front panel (wearer's right) with lapel + pockets */}
      <g data-piece="left">
        <path
          {...stroke}
          className="draw"
          d="M188 92 L122 108 Q112 180 122 262 Q114 356 138 470 L196 470 Q192 350 196 232 L196 130 Z"
        />
        {/* Lapel */}
        <path {...stroke} className="draw" d="M188 92 L196 130 L196 232 Q170 196 162 158 L172 150 L164 142 Z" />
        {/* Chest pocket */}
        <path {...stroke} className="draw" d="M148 214 L176 209 L177 217 L149 222 Z" />
        {/* Hip pocket */}
        <path {...stroke} className="draw" d="M136 336 L174 342 L172 352 L134 346 Z" />
      </g>

      {/* Right front panel */}
      <g data-piece="right">
        <path
          {...stroke}
          className="draw"
          d="M212 92 L278 108 Q288 180 278 262 Q286 356 262 470 L204 470 Q208 350 204 232 L204 130 Z"
        />
        <path {...stroke} className="draw" d="M212 92 L204 130 L204 232 Q230 196 238 158 L228 150 L236 142 Z" />
        <path {...stroke} className="draw" d="M264 336 L226 342 L228 352 L266 346 Z" />
        {/* Buttons */}
        <circle {...stroke} className="draw" cx="210" cy="296" r="4.5" />
        <circle {...stroke} className="draw" cx="210" cy="342" r="4.5" />
      </g>

      {/* Left sleeve */}
      <g data-piece="sleeve-l">
        <path
          {...stroke}
          className="draw"
          d="M122 108 Q94 130 88 200 Q82 270 90 330 L128 334 Q134 260 130 196 Q128 140 122 108 Z"
        />
        <path {...stroke} className="draw" d="M90 318 L127 322" />
      </g>

      {/* Right sleeve */}
      <g data-piece="sleeve-r">
        <path
          {...stroke}
          className="draw"
          d="M278 108 Q306 130 312 200 Q318 270 310 330 L272 334 Q266 260 270 196 Q272 140 278 108 Z"
        />
        <path {...stroke} className="draw" d="M310 318 L273 322" />
      </g>

      {/* Running-stitch seams — drawn and "sewn" in stage three */}
      <g data-piece="stitches">
        <path {...seam} className="stitch" strokeDasharray="0.03 0.025" d="M122 108 L188 92" />
        <path {...seam} className="stitch" strokeDasharray="0.03 0.025" d="M212 92 L278 108" />
        <path {...seam} className="stitch" strokeDasharray="0.03 0.025" d="M122 108 Q130 200 128 334" />
        <path {...seam} className="stitch" strokeDasharray="0.03 0.025" d="M278 108 Q270 200 272 334" />
        <path {...seam} className="stitch" strokeDasharray="0.03 0.025" d="M138 470 L262 470" />
        <path {...seam} className="stitch" strokeDasharray="0.03 0.025" d="M162 158 Q176 200 196 232" />
        <path {...seam} className="stitch" strokeDasharray="0.03 0.025" d="M238 158 Q224 200 204 232" />
      </g>
    </svg>
  );
}

export function Making() {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const draws = el.querySelectorAll<SVGPathElement>(".draw");
        const stitches = el.querySelectorAll<SVGPathElement>(".stitch");
        const captions = el.querySelectorAll("[data-caption]");
        const pieces = {
          left: el.querySelector("[data-piece='left']"),
          right: el.querySelector("[data-piece='right']"),
          sleeveL: el.querySelector("[data-piece='sleeve-l']"),
          sleeveR: el.querySelector("[data-piece='sleeve-r']"),
          collar: el.querySelector("[data-piece='collar']"),
        };

        // Scatter the pattern pieces and blank every stroke.
        gsap.set(draws, { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.set(stitches, { opacity: 0, strokeDashoffset: 1 });
        gsap.set(pieces.left, { x: -64, y: -20, rotate: -7, transformOrigin: "50% 50%" });
        gsap.set(pieces.right, { x: 64, y: -20, rotate: 7, transformOrigin: "50% 50%" });
        gsap.set(pieces.sleeveL, { x: -96, y: 48, rotate: -16, transformOrigin: "50% 50%" });
        gsap.set(pieces.sleeveR, { x: 96, y: 48, rotate: 16, transformOrigin: "50% 50%" });
        gsap.set(pieces.collar, { y: -64, transformOrigin: "50% 50%" });
        gsap.set(captions, { autoAlpha: 0, y: 24 });
        gsap.set(".making-photo", { clipPath: "inset(100% 0% 0% 0%)" });
        gsap.set(".making-cta", { autoAlpha: 0, y: 20 });

        const showCaption = (tl: gsap.core.Timeline, index: number, at: string | number) => {
          tl.to(captions[index], { autoAlpha: 1, y: 0, duration: 0.5 }, at);
          if (index > 0) {
            tl.to(captions[index - 1], { autoAlpha: 0, y: -24, duration: 0.4 }, `<-0.1`);
          }
        };

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=320%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // 01 — the pieces sketch themselves, scattered
        showCaption(tl, 0, 0);
        tl.to(draws, { strokeDashoffset: 0, duration: 2.6, stagger: 0.06 }, 0.1);

        // 02 — pattern pieces fly together
        showCaption(tl, 1, 2.9);
        tl.to(
          [pieces.left, pieces.right, pieces.sleeveL, pieces.sleeveR, pieces.collar],
          { x: 0, y: 0, rotate: 0, duration: 2.2, stagger: 0.08 },
          3.0,
        );

        // 03 — seams sew themselves with travelling stitches
        showCaption(tl, 2, 5.5);
        tl.to(stitches, { opacity: 1, duration: 0.3, stagger: 0.05 }, 5.6);
        tl.to(stitches, { strokeDashoffset: 0, duration: 1.6, stagger: 0.08 }, 5.7);
        tl.to(".making-svg", { scale: 1.03, duration: 0.5, yoyo: true, repeat: 1 }, 7.2);

        // 04 — the drawing becomes the real thing
        showCaption(tl, 3, 8.2);
        tl.to(".making-svg", { autoAlpha: 0.12, scale: 0.94, duration: 1.4 }, 8.3);
        tl.to(".making-photo", { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8 }, 8.3);
        tl.to(".making-cta", { autoAlpha: 1, y: 0, duration: 0.6 }, 9.4);
        tl.to(".making-progress", { scaleX: 1, duration: 10.2, ease: "none" }, 0);
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      aria-label="How a Richman suit is made"
      className="relative overflow-hidden border-y border-gold/15 bg-ink"
    >
      <div className="flex h-svh flex-col">
        {/* Heading */}
        <div className="shell pt-20 pb-4 text-center md:pt-24">
          <p className="eyebrow mb-3">The Making</p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-silk sm:text-4xl md:text-5xl">
            Watch a Suit
            <span className="text-metallic italic"> Come Together</span>
          </h2>
        </div>

        {/* Stage */}
        <div className="relative mx-auto flex w-full max-w-5xl grow items-center justify-center px-5">
          <div className="relative flex h-[46svh] items-center justify-center sm:h-[52svh]">
            <JacketArt />
            {/* Real photograph revealed at the end */}
            <div className="making-photo absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gold/25">
                <Image
                  src="/images/gal-custom.jpg"
                  alt="The finished garment — a custom-tailored Richman suit being buttoned"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* CTA over the final photo */}
          <div className="making-cta absolute inset-x-0 bottom-6 flex justify-center">
            <Button asChild size="lg">
              <a href={SITE.phone.href}>
                <Phone className="size-4" aria-hidden />
                Begin With a Measurement
              </a>
            </Button>
          </div>
        </div>

        {/* Captions */}
        <div className="shell relative h-32 md:h-36">
          {CAPTIONS.map((caption, i) => (
            <div
              key={caption.kicker}
              data-caption
              className={`absolute inset-x-5 top-2 mx-auto max-w-xl text-center sm:inset-x-8 ${
                i > 0 ? "opacity-0" : ""
              }`}
            >
              <p className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase">
                {caption.kicker}
              </p>
              <p className="mt-2 font-serif text-xl text-silk md:text-2xl">
                {caption.line}
              </p>
              <p className="mt-1.5 text-sm text-mist">{caption.sub}</p>
            </div>
          ))}
        </div>

        {/* Scroll progress hairline */}
        <div className="h-px w-full bg-gold/15">
          <div className="making-progress h-px origin-left scale-x-0 bg-gold" />
        </div>
      </div>
    </section>
  );
}
