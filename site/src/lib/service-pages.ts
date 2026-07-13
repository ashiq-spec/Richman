import type { Faq } from "@/lib/faqs";

/**
 * Full content for each service page. Every page gets unique copy,
 * its own FAQs and process — substantial pages, never thin doorways.
 */

export type ServicePageContent = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string;
  image: { src: string; alt: string };
  included: { title: string; text: string }[];
  /** Optional anchored sub-section (e.g. #reception, #blazers). */
  anchor?: { id: string; heading: string; accent: string; body: string[] };
  steps: { title: string; text: string }[];
  faqs: Faq[];
  related: { href: string; label: string }[];
  waText: string;
};

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: "wedding-suits",
    path: "/wedding-suits/",
    metaTitle: "Wedding Suits in Chennai — Custom Groom Suits in Guindy",
    metaDescription:
      "Custom wedding suits in Chennai for the modern groom. Made-to-measure suits, sherwanis & reception looks at Richman Suits Gold, Guindy. Call 99449 30106.",
    eyebrow: "Wedding Suits · Chennai",
    h1: "The Wedding Suit",
    h1Accent: "He'll Be Remembered In",
    intro:
      "Your wedding photographs outlive the day itself. We tailor wedding suits around your ceremony, venue and story — cut on your body through 2–3 fittings in our Guindy atelier, so on the morning it matters, nothing needs adjusting but your boutonnière.",
    image: {
      src: "/images/groom-indian.jpg",
      alt: "Indian groom in an ivory sherwani at a flower-decorated wedding venue",
    },
    included: [
      {
        title: "Made-to-measure for the groom",
        text: "20+ measurements, personal silhouette consultation, and fittings scheduled around your wedding calendar.",
      },
      {
        title: "Signature wedding shades",
        text: "Ivory, champagne, royal blue, deep maroon and classic black — draped against you in the studio before you choose.",
      },
      {
        title: "Aari & zardosi embroidery",
        text: "Handcrafted Indian embroidery detailing for muhurtham and reception looks that honour tradition without costume.",
      },
      {
        title: "Groomsmen coordination",
        text: "Extend your look across the wedding party with coordinated fabrics — see our wedding packages.",
      },
    ],
    anchor: {
      id: "reception",
      heading: "Reception Suits",
      accent: "that own the evening",
      body: [
        "The reception is a different stage — dimmer light, closer cameras, longer hours. Reception suits lean modern: slimmer lapels, midnight and jewel tones, velvet and subtle-sheen jacquards that photograph richly under stage lighting.",
        "Many grooms pair a traditional muhurtham outfit with a tailored reception suit or tuxedo. Tell us your event line-up and we'll plan both looks in one sitting, on one timeline.",
      ],
    },
    steps: [
      {
        title: "Consultation",
        text: "Bring your dates, venue and inspiration. We map every event that needs a look.",
      },
      {
        title: "Fabric & design",
        text: "Drape 200+ premium fabrics in person. Choose lapels, lining, buttons and embroidery.",
      },
      {
        title: "Fittings",
        text: "2–3 fittings sculpt the suit to you. Standard delivery 7–10 days; express in 3.",
      },
      {
        title: "The reveal",
        text: "Final try-on with accessories styled. You walk out wedding-ready.",
      },
    ],
    faqs: [
      {
        question: "How early should I order my wedding suit in Chennai?",
        answer:
          "3–4 weeks before the wedding is ideal — it leaves room for fabric selection and 2–3 fittings. For urgent dates, Richman Suits Gold offers express 3-day tailoring.",
      },
      {
        question: "What colour suit should a groom wear?",
        answer:
          "Ivory and champagne lead for muhurtham ceremonies; midnight blue, black and deep maroon rule receptions. Our stylists match the shade to your skin tone, venue lighting and the bride's outfit.",
      },
      {
        question: "Can you tailor both my sherwani and reception suit?",
        answer:
          "Yes — most grooms plan both looks with us in a single consultation, with coordinated fittings and one delivery timeline.",
      },
    ],
    related: [
      { href: "/wedding-packages/", label: "Wedding Packages" },
      { href: "/tuxedos/", label: "Tuxedos" },
      { href: "/custom-tailoring/", label: "Custom Tailoring" },
    ],
    waText: "Hi Richman Suits! I'd like to plan my wedding suit.",
  },
  {
    slug: "suit-rentals",
    path: "/suit-rentals/",
    metaTitle: "Suit & Tuxedo Rental in Chennai — Premium Rentals in Guindy",
    metaDescription:
      "Premium suit, tuxedo & blazer rentals in Chennai. Dry-cleaned, press-ready, fitted before you leave — flexible 1–7 day rentals at Richman Suits Gold, Guindy.",
    eyebrow: "Suit Rentals · Chennai",
    h1: "Look a Million.",
    h1Accent: "Without Spending It.",
    intro:
      "For a reception, an engagement, a shoot or a single unforgettable evening — our rental collection carries the same standard as our tailoring floor. Every piece is dry-cleaned, press-ready and fitted on you before it leaves the store.",
    image: {
      src: "/images/gal-groomsmen.jpg",
      alt: "Groom and groomsman in coordinated premium formal wear",
    },
    included: [
      {
        title: "Premium tuxedos & suits",
        text: "Designer-grade rental stock across classic black, midnight blue, ivory and festive shades.",
      },
      {
        title: "Fitted before you leave",
        text: "Same-day minor adjustments so a rental never looks like one.",
      },
      {
        title: "Flexible 1–7 day periods",
        text: "Pick up before the event, return after — timelines built around your function, not ours.",
      },
      {
        title: "All sizes, always ready",
        text: "From slim 36 to generous 50, maintained and replaced season on season.",
      },
    ],
    anchor: {
      id: "blazers",
      heading: "Premium Blazers",
      accent: "for every entrance",
      body: [
        "Engagements, sangeets, birthdays, product launches — sometimes the occasion needs a blazer, not a full suit. Our blazer wall runs from quiet luxury wool to velvet and jacquard statements.",
        "Rent for the evening or have one tailored to keep — either way you're styled with the right trousers, shirt and pocket square before you go.",
      ],
    },
    steps: [
      {
        title: "Walk in or WhatsApp",
        text: "Tell us the date and occasion — we shortlist options in your size before you arrive.",
      },
      {
        title: "Try & fit",
        text: "Try the shortlist, and our tailors pin quick adjustments on the spot.",
      },
      {
        title: "Wear & return",
        text: "Collect press-ready, own the evening, return it — cleaning is on us.",
      },
    ],
    faqs: [
      {
        question: "How much does it cost to rent a suit in Chennai?",
        answer:
          "Rental pricing at Richman Suits Gold depends on the piece and duration, quoted upfront with no hidden charges. Call +91 99449 30106 with your date for an instant quote.",
      },
      {
        question: "Is renting better than buying a wedding suit?",
        answer:
          "Rent when it's a single evening or a rarely-repeated dress code; buy custom when it's your own wedding or a suit you'll wear again. Most grooms buy the wedding look and rent for pre-events — we'll help you split it sensibly.",
      },
      {
        question: "Do I need to dry-clean the rental before returning?",
        answer:
          "No — return it as worn. Professional cleaning after every rental is included.",
      },
    ],
    related: [
      { href: "/tuxedos/", label: "Tuxedos" },
      { href: "/wedding-suits/", label: "Wedding Suits" },
      { href: "/wedding-packages/", label: "Wedding Packages" },
    ],
    waText: "Hi Richman Suits! I'd like to enquire about suit rentals.",
  },
  {
    slug: "tuxedos",
    path: "/tuxedos/",
    metaTitle: "Tuxedos in Chennai — Custom & Rental Wedding Tuxedos, Guindy",
    metaDescription:
      "Wedding tuxedos in Chennai — custom-tailored or premium rental. Satin lapels, midnight blue, ivory & classic black at Richman Suits Gold, Guindy. Call 99449 30106.",
    eyebrow: "Tuxedos · Chennai",
    h1: "Black Tie,",
    h1Accent: "Done Properly",
    intro:
      "A tuxedo forgives nothing — the lapel line, the shoulder, the break of the trouser all show. Ours are cut with satin-faced lapels and a fit that photographs beautifully at receptions, galas and destination weddings.",
    image: {
      src: "/images/gal-tuxedo.jpg",
      alt: "Black peak-lapel tuxedo look styled for an evening reception",
    },
    included: [
      {
        title: "Peak, shawl & notch lapels",
        text: "Guided by your face shape, build and the formality of the event.",
      },
      {
        title: "The right blacks",
        text: "True black, midnight blue that reads richer than black under lights, and ivory dinner jackets.",
      },
      {
        title: "Custom or rental",
        text: "Commission your own, or rent from the premium wall for a single evening.",
      },
      {
        title: "Accessories styled in",
        text: "Bow tie, studs, cummerbund or waistcoat, pocket square — completed before you leave.",
      },
    ],
    steps: [
      {
        title: "Choose the route",
        text: "Custom commission or premium rental — we'll be honest about which suits your occasion.",
      },
      {
        title: "Cut & compose",
        text: "Lapel, fabric and fit decisions with a stylist, then measured or fitted.",
      },
      {
        title: "Step out",
        text: "Delivered pressed with accessories coordinated. Own the room.",
      },
    ],
    faqs: [
      {
        question: "What's the best tuxedo for a wedding reception?",
        answer:
          "A midnight blue or classic black peak-lapel tuxedo is the safest striking choice for Chennai receptions; ivory dinner jackets stand out for cocktail evenings. Visit the Guindy studio to see all three against your skin tone.",
      },
      {
        question: "Can I rent a tuxedo in Chennai instead of buying?",
        answer:
          "Yes — Richman Suits Gold keeps premium tuxedos for rent in all sizes, dry-cleaned and fitted before you leave, for flexible 1–7 day periods.",
      },
      {
        question: "Tuxedo or suit for the groom?",
        answer:
          "Tuxedo for evening receptions and black-tie events; suit for daytime ceremonies and versatile reuse. Many grooms do one of each — we plan both in one sitting.",
      },
    ],
    related: [
      { href: "/wedding-suits/", label: "Wedding Suits" },
      { href: "/suit-rentals/", label: "Suit Rentals" },
      { href: "/custom-tailoring/", label: "Custom Tailoring" },
    ],
    waText: "Hi Richman Suits! I'd like to enquire about tuxedos.",
  },
  {
    slug: "custom-tailoring",
    path: "/custom-tailoring/",
    metaTitle: "Custom Tailoring in Chennai — Bespoke Suits in Guindy",
    metaDescription:
      "Bespoke suit tailoring in Chennai — 20+ measurements, 200+ premium fabrics, perfect-fit guarantee. Custom suits at Richman Suits Gold, Guindy. Call 99449 30106.",
    eyebrow: "Custom Tailoring · Chennai",
    h1: "Built on Your Body,",
    h1Accent: "Not a Size Chart",
    intro:
      "Off-the-rack fits nobody in particular. Custom tailoring begins with 20+ measurements and ends with a suit that moves with you — shoulders that sit, sleeves that break exactly where they should, and a silhouette that's unmistakably yours.",
    image: {
      src: "/images/craft-atelier.jpg",
      alt: "Bespoke suit under construction beside a vintage sewing machine",
    },
    included: [
      {
        title: "20+ precise measurements",
        text: "Posture, stance and proportion — recorded once, kept on file for every future order.",
      },
      {
        title: "200+ premium fabrics",
        text: "Italian and English imports alongside India's finest mills — touch and drape before committing.",
      },
      {
        title: "Every detail, yours",
        text: "Lapels, linings, buttons, monograms, pockets — composed with a stylist, not a catalogue.",
      },
      {
        title: "Perfect-fit guarantee",
        text: "If it isn't right after delivery, we alter it free until it is.",
      },
    ],
    anchor: {
      id: "three-piece",
      heading: "Three-Piece Suits",
      accent: "the full statement",
      body: [
        "A waistcoat changes the geometry of a suit — it lengthens the frame, holds the tie in place through long ceremonies, and lets you shed the jacket without losing formality.",
        "We cut waistcoats to your torso as part of the same commission, with mix-and-match fabric options for wedding and business three-piece looks.",
      ],
    },
    steps: [
      {
        title: "Measure",
        text: "A full session with a master tailor — 20+ measurements plus posture notes.",
      },
      {
        title: "Compose",
        text: "Fabric, construction and detailing chosen in the studio with expert guidance.",
      },
      {
        title: "Fit",
        text: "2–3 fittings refine the cut. Standard 7–10 days, express 3-day available.",
      },
      {
        title: "Deliver",
        text: "Final inspection on your body — backed by the perfect-fit guarantee.",
      },
    ],
    faqs: [
      {
        question: "How much does a custom suit cost in Chennai?",
        answer:
          "Pricing depends on fabric and construction, with options across a wide range — always quoted upfront before work begins. Call +91 99449 30106 with your budget and occasion for a straight answer.",
      },
      {
        question: "How long does custom tailoring take?",
        answer:
          "Standard delivery is 7–10 days including fittings. Express 3-day completion is available for urgent dates.",
      },
      {
        question: "What's the best suit fabric for Chennai weather?",
        answer:
          "Lightweight tropical wools (Super 110s–130s), wool-linen blends and breathable half-canvas construction keep a suit sharp in Chennai's heat. We'll put the right options in your hands at the fabric wall.",
      },
    ],
    related: [
      { href: "/wedding-suits/", label: "Wedding Suits" },
      { href: "/corporate-suits/", label: "Corporate Suits" },
      { href: "/tuxedos/", label: "Tuxedos" },
    ],
    waText: "Hi Richman Suits! I'd like to enquire about custom tailoring.",
  },
  {
    slug: "wedding-packages",
    path: "/wedding-packages/",
    metaTitle: "Groom & Groomsmen Wedding Packages in Chennai",
    metaDescription:
      "Wedding suit packages in Chennai — groom plus groomsmen, coordinated fabrics, group fittings, one delivery timeline. Richman Suits Gold, Guindy. Call 99449 30106.",
    eyebrow: "Wedding Packages · Chennai",
    h1: "One Wedding,",
    h1Accent: "One Flawless Wardrobe",
    intro:
      "The groom sets the standard; the groomsmen carry it. Our wedding packages dress the whole party — coordinated fabrics and colours, group fittings at the studio, and a single delivery timeline managed by one point of contact until the last suit is collected.",
    image: {
      src: "/images/wedding-look.jpg",
      alt: "Cream embroidered sherwani with pearl haar hung before a golden door",
    },
    included: [
      {
        title: "Groom + groomsmen coordination",
        text: "The groom leads, the party complements — never competes.",
      },
      {
        title: "Multi-event planning",
        text: "Muhurtham, reception, sangeet — every event mapped to a look in one consultation.",
      },
      {
        title: "Group fittings",
        text: "One studio session for the whole party, with individual measurement records.",
      },
      {
        title: "Single timeline",
        text: "Six suits or sixteen — one point of contact, one on-time delivery.",
      },
    ],
    steps: [
      {
        title: "Plan the party",
        text: "Head-count, events and colour story agreed with the groom (families welcome).",
      },
      {
        title: "Group fitting day",
        text: "Everyone measured in one visit — outstation groomsmen can send measurements.",
      },
      {
        title: "One delivery",
        text: "All garments finished together, tried together, delivered together.",
      },
    ],
    faqs: [
      {
        question: "Can groomsmen in other cities join the package?",
        answer:
          "Yes — outstation groomsmen send measurements through our WhatsApp guide, and their suits are fitted on arrival with express adjustments.",
      },
      {
        question: "Do packages include rentals for the groomsmen?",
        answer:
          "They can — a popular split is a custom suit for the groom and premium rentals for the party. We'll price both routes upfront.",
      },
      {
        question: "How early should a wedding party book?",
        answer:
          "4–6 weeks ahead is comfortable for a full party; tighter timelines are routinely handled with express tailoring.",
      },
    ],
    related: [
      { href: "/wedding-suits/", label: "Wedding Suits" },
      { href: "/suit-rentals/", label: "Suit Rentals" },
      { href: "/gallery/", label: "Gallery" },
    ],
    waText: "Hi Richman Suits! I'd like a wedding package for my group.",
  },
  {
    slug: "corporate-suits",
    path: "/corporate-suits/",
    metaTitle: "Corporate Suits in Chennai — Business Tailoring & Bulk Orders",
    metaDescription:
      "Business suits & corporate bulk tailoring in Chennai. Interview, boardroom & team orders with disciplined timelines. Richman Suits Gold, Guindy. Call 99449 30106.",
    eyebrow: "Corporate Suits · Chennai",
    h1: "Boardroom Authority,",
    h1Accent: "Tailored",
    intro:
      "A well-cut suit is quiet leverage — in interviews, client rooms and on stage. We tailor business suits in all-day comfortable fabrics, and handle corporate bulk orders with the discipline your procurement team will appreciate.",
    image: {
      src: "/images/corporate.jpg",
      alt: "Businessman in a dark suit with arms crossed — corporate tailoring",
    },
    included: [
      {
        title: "Business & interview suits",
        text: "Navy, charcoal and grey staples cut for long days and air-conditioned rooms.",
      },
      {
        title: "Corporate bulk orders",
        text: "Team uniforms and executive wardrobes with per-person fittings at scale.",
      },
      {
        title: "All-day fabrics",
        text: "Breathable tropical wools and high-twist weaves that resist wrinkling from desk to dinner.",
      },
      {
        title: "Disciplined timelines",
        text: "7–10 day standard delivery, milestone updates on bulk orders.",
      },
    ],
    steps: [
      {
        title: "Scope",
        text: "Individual wardrobe or team order — requirements and budget agreed upfront.",
      },
      {
        title: "Measure & choose",
        text: "Fittings at the studio; on-site measurement drives for larger teams.",
      },
      {
        title: "Deliver",
        text: "Pressed, labelled per person, on the committed date.",
      },
    ],
    faqs: [
      {
        question: "Do you handle corporate bulk suit orders in Chennai?",
        answer:
          "Yes — team and uniform orders are routine, with per-person measurements, milestone updates and a single delivery. Call +91 99449 30106 for a corporate quote.",
      },
      {
        question: "What should I wear for an interview suit?",
        answer:
          "A navy or charcoal two-piece in a matte weave, simple shirt, minimal accessories. It signals competence without noise — we'll have you fitted well within a standard timeline.",
      },
      {
        question: "Can my company visit after office hours?",
        answer:
          "The Guindy showroom is open till 9 PM Monday–Saturday and 8 PM on Sundays — evening fittings are normal here.",
      },
    ],
    related: [
      { href: "/custom-tailoring/", label: "Custom Tailoring" },
      { href: "/suit-rentals/", label: "Suit Rentals" },
      { href: "/contact/", label: "Contact" },
    ],
    waText: "Hi Richman Suits! I'd like to enquire about corporate suits.",
  },
];

export function getServicePage(slug: string): ServicePageContent {
  const page = SERVICE_PAGES.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown service page: ${slug}`);
  return page;
}
