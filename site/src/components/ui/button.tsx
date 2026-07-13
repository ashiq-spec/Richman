import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide whitespace-nowrap transition-all duration-300 select-none outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "bg-metallic bg-[position:0%_center] text-ink shadow-[0_12px_32px_-14px_rgba(198,161,91,0.6)] hover:bg-[position:100%_center] hover:shadow-glow",
        outline:
          "border border-gold/40 text-champagne hover:border-gold hover:bg-gold/10",
        whatsapp:
          "border border-silk/15 bg-silk/5 text-silk hover:border-whatsapp/60 hover:bg-whatsapp/10",
        ghost: "text-silk hover:text-champagne",
        light: "bg-espresso text-cream hover:bg-espresso/85",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-sm",
        xl: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "lg",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
