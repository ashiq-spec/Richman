import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Richman Suits Gold, Chennai handles your information — plainly explained.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-20 md:pt-44">
      <div className="shell max-w-2xl">
        <h1 className="font-serif text-4xl tracking-tight text-silk">
          Privacy <span className="text-metallic italic">Policy</span>
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-mist [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-silk">
          <p>
            This website is a simple, informational site. Here is exactly what
            happens with your information — no legal fog.
          </p>
          <h2>What we collect</h2>
          <p>
            The website itself stores nothing about you on any server. When you
            use the consultation form, the details you type (name, phone,
            service, notes) are composed into a WhatsApp message on your own
            device and sent to us only when you press send in WhatsApp. Calls
            and WhatsApp chats are handled like any normal business
            conversation.
          </p>
          <h2>What we use it for</h2>
          <p>
            Only to respond to your enquiry, schedule fittings and deliver your
            order. We do not sell or share your details with anyone.
          </p>
          <h2>Cookies & analytics</h2>
          <p>
            This site does not set advertising cookies. Embedded services (such
            as the Google Maps view on our contact page) may set their own
            cookies under Google&apos;s policies.
          </p>
          <h2>Your choices</h2>
          <p>
            Want a conversation or its details deleted from our records? Call
            us at {SITE.phone.display} or message us on WhatsApp and we&apos;ll
            take care of it.
          </p>
          <p className="text-xs text-mist/60">Last updated: July 2026</p>
        </div>
      </div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy/" },
        ])}
      />
    </section>
  );
}
