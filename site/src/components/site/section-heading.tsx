import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  /** "dark" for black sections, "light" for cream sections. */
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <p data-reveal className="eyebrow mb-4">
        {eyebrow}
      </p>
      <h2
        data-reveal
        className={cn(
          "font-serif text-3xl leading-[1.12] tracking-tight text-balance sm:text-4xl md:text-5xl",
          tone === "dark" ? "text-silk" : "text-espresso",
        )}
      >
        {title}
      </h2>
      {sub ? (
        <p
          data-reveal
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            tone === "dark" ? "text-mist" : "text-cocoa",
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
