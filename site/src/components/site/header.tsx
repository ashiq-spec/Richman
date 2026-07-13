"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, MapPin, Phone, X } from "lucide-react";

import { AnnouncementBar } from "@/components/site/announcement-bar";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { SITE, WA_DEFAULT } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/wedding-suits/", label: "Wedding Suits" },
  { href: "/suit-rentals/", label: "Suit Rentals" },
  { href: "/tuxedos/", label: "Tuxedos" },
  { href: "/custom-tailoring/", label: "Custom Tailoring" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
] as const;

function Wordmark() {
  return (
    <Link href="/" className="group flex flex-col leading-none">
      <span className="font-serif text-[19px] tracking-wide text-silk transition-colors group-hover:text-champagne">
        Richman Suits
      </span>
      <span className="text-metallic mt-1 text-[9px] font-bold tracking-[0.5em]">
        GOLD · CHENNAI
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar hidden={scrolled} />

      <header
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-gold/15 bg-ink/85 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-gradient-to-b from-ink/80 via-ink/40 to-transparent",
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Wordmark />

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "text-[13px] font-medium tracking-wide transition-colors hover:text-champagne",
                  pathname === item.href ? "text-champagne" : "text-mist",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={SITE.phone.href}
              className="hidden items-center gap-2 text-sm font-medium text-mist transition-colors hover:text-champagne xl:flex"
            >
              <Phone className="size-3.5 text-gold" aria-hidden />
              {SITE.phone.display}
            </a>
            <Button asChild size="md" className="hidden md:inline-flex">
              <a href={SITE.phone.href}>
                <Phone className="size-4" aria-hidden />
                Call Now
              </a>
            </Button>

            {/* Mobile drawer */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="rounded-full border border-gold/25 p-2.5 text-silk transition-colors hover:border-gold hover:text-champagne lg:hidden"
                >
                  <Menu className="size-5" aria-hidden />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm" />
                <Dialog.Content
                  className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col overflow-y-auto border-l border-gold/15 bg-coal p-7 shadow-2xl outline-none transition-transform"
                  aria-describedby={undefined}
                >
                  <Dialog.Title className="sr-only">Menu</Dialog.Title>
                  <div className="flex items-center justify-between">
                    <Wordmark />
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="rounded-full border border-gold/25 p-2 text-silk transition-colors hover:border-gold hover:text-champagne"
                      >
                        <X className="size-5" aria-hidden />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav aria-label="Mobile" className="mt-10 flex flex-col">
                    {NAV.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "border-b border-gold/10 py-4 font-serif text-xl transition-colors hover:text-champagne",
                          pathname === item.href
                            ? "text-champagne"
                            : "text-silk",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8 flex flex-col gap-3">
                    <Button asChild size="lg">
                      <a href={SITE.phone.href}>
                        <Phone className="size-4" aria-hidden />
                        Call {SITE.phone.display}
                      </a>
                    </Button>
                    <Button asChild variant="whatsapp" size="lg">
                      <a href={WA_DEFAULT} target="_blank" rel="noopener">
                        <WhatsAppIcon className="text-whatsapp" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>

                  <div className="mt-auto pt-10 text-sm text-mist">
                    <p className="flex items-start gap-2">
                      <MapPin
                        className="mt-0.5 size-4 shrink-0 text-gold"
                        aria-hidden
                      />
                      {SITE.address.display}
                    </p>
                    <p className="mt-3">
                      {SITE.hours[0].label}: {SITE.hours[0].opens} –{" "}
                      {SITE.hours[0].closes}
                    </p>
                    <p>
                      {SITE.hours[1].label}: {SITE.hours[1].opens} –{" "}
                      {SITE.hours[1].closes}
                    </p>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
    </div>
  );
}
