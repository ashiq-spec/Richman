import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { SITE, WA_DEFAULT } from "@/lib/site";

/**
 * Thumb-reach action bar, mobile only. Call is the hero action;
 * WhatsApp and Directions are one tap away.
 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/15 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener"
          className="flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-semibold tracking-wide text-silk transition-colors hover:text-champagne"
        >
          <WhatsAppIcon size={17} className="text-whatsapp" />
          WhatsApp
        </a>
        <a
          href={SITE.phone.href}
          className="bg-metallic flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-bold tracking-wide text-ink"
        >
          <Phone className="size-[17px]" aria-hidden />
          Call Now
        </a>
        <a
          href={SITE.links.maps}
          target="_blank"
          rel="noopener"
          className="flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-semibold tracking-wide text-silk transition-colors hover:text-champagne"
        >
          <MapPin className="size-[17px] text-gold" aria-hidden />
          Directions
        </a>
      </div>
    </div>
  );
}
