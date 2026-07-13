"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { wa } from "@/lib/site";
import { cn } from "@/lib/utils";

const DISMISS_KEY = "rsg-offer-dismissed-v1";

export function AnnouncementBar({ hidden }: { hidden: boolean }) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(DISMISS_KEY) === "1") {
      setDismissed(true);
    }
  }, []);

  const dismiss = () => {
    setDismissed(true);
    window.localStorage.setItem(DISMISS_KEY, "1");
  };

  return (
    <div
      className={cn(
        "overflow-hidden bg-metallic transition-[max-height,opacity] duration-500",
        dismissed || hidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
      )}
    >
      <div className="shell flex items-center justify-center gap-3 py-2 text-center">
        <p className="truncate text-xs font-semibold tracking-wide text-ink sm:text-[13px]">
          Free premium lining upgrade on all custom orders this month
          <a
            href={wa(
              "Hi Richman Suits! I'd like to claim the free lining upgrade offer.",
            )}
            target="_blank"
            rel="noopener"
            className="ml-2 underline underline-offset-2 hover:opacity-80"
          >
            Claim now →
          </a>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss offer"
          className="shrink-0 rounded-full p-1 text-ink/70 transition-colors hover:bg-ink/10 hover:text-ink"
        >
          <X className="size-3.5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
