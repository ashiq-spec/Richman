/**
 * FAQ content — written to directly answer the questions people ask
 * Google and AI assistants (ChatGPT, Gemini, Perplexity) about wedding
 * suits in Chennai. Rendered on the page AND emitted as FAQPage schema,
 * so the visible answers and the structured data never drift apart.
 */
import { SITE } from "@/lib/site";

export type Faq = { question: string; answer: string };

export const HOME_FAQS: Faq[] = [
  {
    question: "Where can I buy a luxury wedding suit in Chennai?",
    answer:
      "Richman Suits Gold in Guindy, Chennai is a dedicated wedding suit atelier offering custom-tailored wedding suits, tuxedos, sherwanis and three-piece suits. Visit the Guindy showroom or call +91 99449 30106 to book a private consultation.",
  },
  {
    question: "How much does a custom wedding suit cost in Chennai?",
    answer:
      "Custom wedding suits at Richman Suits Gold are priced by fabric and detailing, with options across a wide range of budgets. Every quote is given upfront before work begins — no hidden charges. Call +91 99449 30106 for a quick estimate for your date and budget.",
  },
  {
    question: "Do you offer wedding suit and tuxedo rentals in Chennai?",
    answer: `Yes. We maintain a premium rental collection of tuxedos, blazers and suits in all sizes, dry-cleaned and press-ready, with flexible 1–7 day rental periods. Rentals start at ${SITE.pricing.guestBlazerRentalFrom} for groomsmen, wedding guests and corporate events, and at ${SITE.pricing.groomBlazerRentalFrom} for the groom's wedding blazer.`,
  },
  {
    question: "How early should I order my wedding suit?",
    answer:
      "Ideally 3–4 weeks before the wedding, which allows for fabric selection and 2–3 fittings. Standard delivery is 7–10 days, and we offer express 3-day tailoring for urgent dates.",
  },
  {
    question: "Do I need an appointment to visit the showroom?",
    answer:
      "Walk-ins are welcome, but a booked consultation guarantees a dedicated stylist and fitting room. The showroom is open Monday–Saturday 10 AM–9 PM and Sunday 11 AM–8 PM.",
  },
  {
    question: "Which areas of Chennai do you serve?",
    answer:
      "Grooms visit us from across Chennai — Guindy, Velachery, Adyar, T. Nagar, Anna Nagar, Nungambakkam, Porur, Tambaram, OMR and ECR. The showroom is in Guindy, minutes from Guindy Metro and Chennai Airport.",
  },
  {
    question: "Should the groom wear a sherwani or a suit?",
    answer:
      "Many grooms now do both — a sherwani or embroidered outfit for the muhurtham and a tailored suit or tuxedo for the reception. Our stylists help you plan looks for each event, including Aari and zardosi embroidery work.",
  },
  {
    question: "Do you handle groomsmen or group orders?",
    answer:
      "Yes. Wedding packages cover the groom plus groomsmen with coordinated fabrics and colours, group fittings and a single delivery timeline — 6-suit and larger wedding parties are routine for us.",
  },
];

export const EXTRA_FAQS: Faq[] = [
  {
    question: "How do I book an appointment at Richman Suits Gold?",
    answer:
      "Call +91 99449 30106, message us on WhatsApp, or simply walk in. The showroom is in Guindy, Chennai — open Monday–Saturday 10 AM–9 PM and Sunday 11 AM–8 PM.",
  },
  {
    question: "How many fittings does a custom suit take?",
    answer:
      "Typically 2–3 fittings. Your measurements stay on file, so repeat orders usually need just one confirmation fitting.",
  },
  {
    question: "What if the suit doesn't fit perfectly after delivery?",
    answer:
      "We alter it free of charge until it does — that's the Richman perfect-fit guarantee, no questions asked.",
  },
  {
    question: "Do you make sherwanis and embroidered wedding wear?",
    answer:
      "Yes — sherwanis, Indo-western looks and handcrafted Aari and zardosi embroidery are a Richman speciality alongside suits and tuxedos.",
  },
  {
    question: "Can you handle urgent orders before a wedding?",
    answer:
      "Yes. Standard delivery is 7–10 days, and express 3-day tailoring is available for urgent dates — call first so we can confirm the timeline for your requirement.",
  },
  {
    question: "Where exactly is the showroom?",
    answer:
      "Richman Suits Gold is in Guindy, Chennai 600032 — minutes from Guindy Metro and easily reached from Velachery, Adyar, T. Nagar and the airport side of the city. Use the Google Maps link on our contact page for directions.",
  },
];

export const ALL_FAQS: Faq[] = [...HOME_FAQS, ...EXTRA_FAQS];
