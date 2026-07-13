/**
 * Style Journal articles. Written to genuinely answer the questions
 * Chennai grooms search for — each post is substantial, specific and
 * internally linked, never thin SEO filler. Adding a post here
 * automatically creates its page, sitemap entry and schema.
 */

export type PostSection = {
  heading?: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  category: string;
  image: { src: string; alt: string };
  sections: PostSection[];
};

export const POSTS: Post[] = [
  {
    slug: "best-wedding-suits-chennai",
    title: "Best Wedding Suits in Chennai: The Groom's Guide",
    description:
      "What separates a great Chennai wedding suit from an ordinary one — fabric, fit, colour and where to get it done, from a Guindy atelier that dresses 500+ grooms.",
    date: "2026-07-05",
    readMinutes: 6,
    category: "Wedding",
    image: {
      src: "/images/groom-indian.jpg",
      alt: "Indian groom in ivory sherwani at a decorated Chennai wedding venue",
    },
    sections: [
      {
        paragraphs: [
          "Your wedding suit appears in more photographs than any other garment you will ever own. Yet most grooms in Chennai buy it in a single rushed weekend, off a rack, in a size that's merely close. This guide covers what actually makes a wedding suit great — and how to get one without stress.",
        ],
      },
      {
        heading: "Fit beats everything",
        paragraphs: [
          "A ₹20,000 suit that fits perfectly will always photograph better than a ₹80,000 suit that doesn't. Fit means the shoulder seam ends exactly where your shoulder does, the collar hugs your shirt with no gap, the jacket waist follows your torso, and the trousers break cleanly on your shoes. Off-the-rack sizes are built for an average body that isn't yours — which is why made-to-measure, built from 20+ individual measurements, is the single biggest upgrade a groom can make.",
          "At Richman Suits Gold in Guindy, every wedding suit goes through 2–3 fittings before the big day, so nothing is discovered on the wedding morning.",
        ],
      },
      {
        heading: "Colours that work in Chennai weddings",
        paragraphs: [
          "Ivory and champagne lead for muhurtham ceremonies — they photograph beautifully against silk saris and temple backdrops. For receptions, midnight blue reads richer than pure black under stage lighting, while deep maroon and emerald make confident statements at sangeets. If you'll wear the suit again professionally, a midnight blue or charcoal three-piece does double duty.",
        ],
      },
      {
        heading: "Fabric for the climate",
        paragraphs: [
          "Chennai heat is real. Lightweight tropical wools (Super 110s–130s), wool-linen blends and breathable construction keep you composed through a five-hour reception. We cover this in depth in our guide to the best suit fabrics for Chennai weather.",
        ],
      },
      {
        heading: "Timing your order",
        paragraphs: [
          "Order 3–4 weeks before the wedding for a relaxed timeline: one week for fabric and design decisions, then fittings spaced comfortably. Emergency? A serious atelier can deliver express custom work in as little as 3 days — but the earlier you start, the more options you keep.",
          "Ready to start? Visit the Guindy studio or call +91 99449 30106 — bring your dates, and we'll plan every look of the wedding week in one sitting.",
        ],
      },
    ],
  },
  {
    slug: "wedding-suit-cost-chennai",
    title: "How Much Does a Wedding Suit Cost in Chennai?",
    description:
      "Honest numbers: what drives wedding suit pricing in Chennai, typical ranges for ready-made, custom and rental, and where the money actually goes.",
    date: "2026-06-28",
    readMinutes: 5,
    category: "Buying Guide",
    image: {
      src: "/images/gal-fabric.jpg",
      alt: "Premium navy and grey suiting fabrics folded in a Chennai fabric library",
    },
    sections: [
      {
        paragraphs: [
          "The most-asked question at our counter, answered the way we'd answer it in person. Wedding suit pricing in Chennai isn't mysterious — it's driven by three things: fabric, construction and detailing.",
        ],
      },
      {
        heading: "The three price drivers",
        paragraphs: [
          "Fabric is the biggest lever. Indian mill polyester-blends sit at the entry level; fine Indian wools sit mid-range; imported Italian and English wools (the Super 120s–150s you can feel the difference in) occupy the top. Construction is second — a canvassed jacket that drapes and lasts costs more to build than a fused one. Detailing is third: hand embroidery, contrast linings, horn buttons and monograms add craft hours.",
        ],
      },
      {
        heading: "Typical Chennai ranges",
        paragraphs: [
          "As broad market guidance: ready-made wedding suits commonly run a few thousand to the mid-teens; quality made-to-measure work in good Indian fabrics typically starts in the mid-teens and climbs with fabric choice; premium imported-fabric custom suits and heavily embroidered wedding wear go well beyond. Rentals flip the equation — at Richman Suits Gold, blazer rentals start at ₹899 for guests and groomsmen, and at ₹1,099 for the groom's wedding blazer — which is why many grooms buy the wedding look and rent for pre-events.",
          "Any serious tailor should quote you a firm number upfront after you've chosen fabric and details — at Richman Suits Gold the quote you approve is the amount you pay. No fitting-room surprises.",
        ],
      },
      {
        heading: "Where not to save",
        paragraphs: [
          "Skip the ₹2,000 'extra shirt' upsell if you must — but never economise on fit (fittings are where a suit becomes yours) or on breathable fabric (a sweaty groom regrets everything). If the budget is tight, a beautifully fitted mid-range fabric beats a poorly fitted premium one every single time.",
          "Want a number for your exact requirement? Call +91 99449 30106 with your date and budget — you'll get a straight answer in one conversation.",
        ],
      },
    ],
  },
  {
    slug: "suit-rental-vs-buying-chennai",
    title: "Suit Rental vs Buying in Chennai: Which Makes Sense?",
    description:
      "A practical decision guide — when renting a premium suit or tuxedo beats buying, when custom is worth it, and the hybrid strategy most grooms actually use.",
    date: "2026-06-20",
    readMinutes: 5,
    category: "Buying Guide",
    image: {
      src: "/images/gal-groomsmen.jpg",
      alt: "Groom and groomsman in coordinated formal wear outdoors",
    },
    sections: [
      {
        paragraphs: [
          "Rent or buy? The answer isn't ideology — it's arithmetic plus occasion. Here's the decision framework we walk customers through at the Guindy studio.",
        ],
      },
      {
        heading: "Rent when…",
        paragraphs: [
          "The dress code is rare for you (black-tie tuxedo for a single gala), the event is one evening (a friend's reception, an engagement shoot), or you're outfitting groomsmen who'll never wear matching suits again. A premium rental — properly fitted, dry-cleaned, press-ready — looks identical in photographs to a purchased suit, at a fraction of the cost: at Richman Suits Gold, blazer rentals start at ₹899, and the groom's wedding blazer at ₹1,099. Good rental programs fit the garment on you and make quick adjustments before you leave; that's what separates 'rented' from 'obviously rented'.",
        ],
      },
      {
        heading: "Buy custom when…",
        paragraphs: [
          "It's your own wedding (you'll want the suit and its story forever), you attend formal events several times a year, or your build makes off-the-rack a permanent compromise. A custom suit amortised over years of weddings, interviews and celebrations is cheaper per wear than repeated rentals — and it's unmistakably yours.",
        ],
      },
      {
        heading: "The hybrid most grooms choose",
        paragraphs: [
          "Buy the wedding-day look custom; rent for the sangeet, engagement and reception second-look. The groom owns his defining garment, the party looks coordinated, and the budget stays sane. Wedding packages that combine both under one timeline make this effortless.",
          "Weigh your own dates against both routes — call +91 99449 30106 and we'll price the rental and custom paths side by side, honestly.",
        ],
      },
    ],
  },
  {
    slug: "sherwani-vs-suit-groom",
    title: "Sherwani or Suit? Planning the Groom's Looks Event by Event",
    description:
      "Muhurtham, reception, sangeet — which outfit belongs at which event, how to plan multiple groom looks, and how embroidery ties tradition to tailoring.",
    date: "2026-06-12",
    readMinutes: 5,
    category: "Wedding",
    image: {
      src: "/images/gal-sherwani.jpg",
      alt: "Ivory embroidered wedding sherwani with pearl haar on a hanger",
    },
    sections: [
      {
        paragraphs: [
          "The modern Chennai groom rarely chooses between sherwani and suit — he schedules both. The real question is which look belongs at which event, and how to plan them as one wardrobe rather than separate panics.",
        ],
      },
      {
        heading: "Match the garment to the event",
        paragraphs: [
          "Muhurtham and temple ceremonies call for tradition: a sherwani or embroidered Indo-western look in ivory, gold or cream honours the setting and the photographs. Receptions are the suit's stage — a midnight tuxedo or sharply cut three-piece reads modern and international under evening lights. Sangeets and cocktail evenings sit in between: festive blazers, velvet, jewel tones, room to have fun.",
        ],
      },
      {
        heading: "Let embroidery carry the tradition",
        paragraphs: [
          "Aari and zardosi handwork — done well — is what elevates wedding wear from costume to craft. Fine embroidery on a sherwani collar or a subtly worked suit lapel connects the traditional and modern looks so the groom reads as one continuous story across events, not two different people.",
        ],
      },
      {
        heading: "Plan all looks in one sitting",
        paragraphs: [
          "The single best logistics decision: plan every event's look in one consultation. Colours coordinate with the bride's outfits across events, fittings happen together, and everything arrives on one timeline. That's exactly how we run wedding consultations at Richman Suits Gold in Guindy — bring your event list, leave with a complete plan.",
        ],
      },
    ],
  },
  {
    slug: "best-suit-fabric-chennai-weather",
    title: "The Best Suit Fabrics for Chennai Weather",
    description:
      "Tropical wools, high-twist weaves, wool-linen blends — what actually breathes in Chennai heat, and what to avoid for an outdoor wedding.",
    date: "2026-06-05",
    readMinutes: 4,
    category: "Fabric",
    image: {
      src: "/images/craft-atelier.jpg",
      alt: "Bespoke suit under construction with fabric swatches at the atelier",
    },
    sections: [
      {
        paragraphs: [
          "A suit that's brilliant in a showroom's air conditioning can be a punishment at an outdoor mandapam in May. Fabric choice is where Chennai grooms win or lose the day — here's what actually works.",
        ],
      },
      {
        heading: "What breathes",
        paragraphs: [
          "Tropical-weight wool (Super 110s–130s, open weave) is the gold standard — genuinely breathable, drapes beautifully, resists wrinkles better than any alternative. High-twist wools add spring and crease recovery for long days of sitting, standing and hugging relatives. Wool-linen blends bring linen's airflow with wool's discipline — the pure-linen rumple, tamed.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Heavy flannels and dense worsteds built for European winters; polyester-heavy blends that trap heat and shine under camera flash; and unlined isn't automatically cooler — a well-made half-canvas, half-lined jacket often wears cooler than a cheap unstructured one because it hangs off the body instead of clinging to it.",
        ],
      },
      {
        heading: "Feel before you decide",
        paragraphs: [
          "Fabric is a touch decision, not a catalogue decision. Drape the bolt over your arm, hold it to the light, crush a corner and watch the recovery. Our Guindy fabric wall holds 200+ options from Indian and imported mills — ten minutes with it teaches more than any article, this one included. Call +91 99449 30106 and come feel the difference.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-wedding-suit",
    title: "How to Choose a Wedding Suit: Fit, Colour and Timing",
    description:
      "A first-principles checklist for grooms — silhouette, colour strategy, fittings schedule and the details photographers notice.",
    date: "2026-05-28",
    readMinutes: 6,
    category: "Wedding",
    image: {
      src: "/images/gal-custom.jpg",
      alt: "Man buttoning a custom-tailored charcoal suit in moody light",
    },
    sections: [
      {
        paragraphs: [
          "Strip away the noise and choosing a wedding suit is four decisions: silhouette, colour, fabric and timeline. Get those right and everything else is accessories.",
        ],
      },
      {
        heading: "1 — Silhouette",
        paragraphs: [
          "Slim, not tight: you should button the jacket and forget it. Broad shoulders? A peak lapel amplifies presence. Leaner build? A structured shoulder and waistcoat add architecture. Taller grooms carry double-breasted beautifully; shorter grooms gain height with a higher button stance and cropped jacket length. This is exactly what a good stylist decides with you in the first ten minutes of a consultation.",
        ],
      },
      {
        heading: "2 — Colour",
        paragraphs: [
          "Decide with the venue and the bride's palette, not in isolation. Daytime temple wedding: ivory, cream, warm golds. Evening hotel reception: midnight blue, black, deep jewel tones. And always test the colour against your skin tone in person — the same midnight blue reads differently on different men.",
        ],
      },
      {
        heading: "3 — Fabric",
        paragraphs: [
          "In Chennai, breathability is non-negotiable — tropical wools and wool-linen blends first. We've written a full guide to suit fabrics for Chennai weather if you want the deep dive.",
        ],
      },
      {
        heading: "4 — Timeline",
        paragraphs: [
          "Three to four weeks out: consultation and fabric. Two weeks out: first fitting. One week out: final fitting with the actual shirt and shoes. Wedding week: collection, pressed and bagged. Compressed timelines are manageable (express 3-day tailoring exists for a reason) — but comfort lives in that three-week window.",
          "One consultation at our Guindy studio covers all four decisions in an hour. Call +91 99449 30106 — bring your dates.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
