/**
 * The service catalogue. Home-page cards, footer links, service pages and
 * schema all read from this list so names and URLs stay consistent.
 */

export type Service = {
  slug: string;
  href: string;
  title: string;
  short: string;
  features: string[];
  waText: string;
};

export const SERVICES: Service[] = [
  {
    slug: "wedding-suits",
    href: "/wedding-suits/",
    title: "Wedding Suits",
    short:
      "The suit he'll be remembered in — custom wedding suits designed around your ceremony, venue and story.",
    features: [
      "Made-to-measure for the groom",
      "Ivory, royal blue, black & signature shades",
      "Aari & zardosi embroidery available",
      "2–3 fittings before the big day",
    ],
    waText: "Hi Richman Suits! I'd like to plan my wedding suit.",
  },
  {
    slug: "reception-suits",
    href: "/wedding-suits/#reception",
    title: "Reception Suits",
    short:
      "A second look that owns the evening — sharp, modern silhouettes for receptions and sangeets.",
    features: [
      "Slim & classic silhouettes",
      "Shimmer, velvet & jacquard fabrics",
      "Coordinated with the bride's outfit",
      "Same-week delivery available",
    ],
    waText: "Hi Richman Suits! I'm looking for a reception suit.",
  },
  {
    slug: "tuxedos",
    href: "/tuxedos/",
    title: "Tuxedos",
    short:
      "Black-tie done properly — satin lapels, precise shoulders, and a fit that photographs beautifully.",
    features: [
      "Peak, shawl & notch lapels",
      "Classic black, midnight blue & ivory",
      "Buy custom or rent premium",
      "Complete accessories styling",
    ],
    waText: "Hi Richman Suits! I'd like to enquire about tuxedos.",
  },
  {
    slug: "three-piece-suits",
    href: "/custom-tailoring/#three-piece",
    title: "Three-Piece Suits",
    short:
      "The full statement — jacket, waistcoat and trousers cut as one composed, royal look.",
    features: [
      "Waistcoats cut to your torso",
      "Mix-and-match fabric options",
      "Wedding & formal variations",
      "Heirloom-grade construction",
    ],
    waText: "Hi Richman Suits! I'd like a three-piece suit.",
  },
  {
    slug: "custom-tailoring",
    href: "/custom-tailoring/",
    title: "Custom Tailoring",
    short:
      "20+ measurements, 200+ fabrics, zero compromises — a suit built on your body, not a size chart.",
    features: [
      "20+ precise body measurements",
      "200+ premium Indian & imported fabrics",
      "Lapel, lining & button personalisation",
      "Perfect-fit alteration guarantee",
    ],
    waText: "Hi Richman Suits! I'd like to enquire about custom tailoring.",
  },
  {
    slug: "suit-rentals",
    href: "/suit-rentals/",
    title: "Suit & Tuxedo Rentals",
    short:
      "Look a million without spending it — premium rentals, dry-cleaned and press-ready in every size.",
    features: [
      "Premium tuxedos, suits & blazers",
      "All sizes, fitted before you leave",
      "Flexible 1–7 day rental periods",
      "Ideal for receptions & events",
    ],
    waText: "Hi Richman Suits! I'd like to enquire about suit rentals.",
  },
  {
    slug: "wedding-packages",
    href: "/wedding-packages/",
    title: "Wedding Packages",
    short:
      "Groom plus groomsmen, one timeline — coordinated fabrics, group fittings, a single flawless delivery.",
    features: [
      "Groom + groomsmen coordination",
      "Multi-event looks (muhurtham to reception)",
      "Group fittings at the studio",
      "One point of contact till delivery",
    ],
    waText: "Hi Richman Suits! I'd like a wedding package for my group.",
  },
  {
    slug: "corporate-suits",
    href: "/corporate-suits/",
    title: "Corporate Suits",
    short:
      "Boardroom authority, tailored — business suits and bulk corporate orders with disciplined timelines.",
    features: [
      "Business & interview suits",
      "Corporate bulk & team orders",
      "All-day comfortable fabrics",
      "7–10 day standard delivery",
    ],
    waText: "Hi Richman Suits! I'd like to enquire about corporate suits.",
  },
  {
    slug: "premium-blazers",
    href: "/suit-rentals/#blazers",
    title: "Premium Blazers",
    short:
      "For engagements, parties and shoots — designer blazers that turn an outfit into an entrance.",
    features: [
      "Designer & festive blazers",
      "Buy tailored or rent premium",
      "Velvet, jacquard & classic wool",
      "Styled with the right trousers",
    ],
    waText: "Hi Richman Suits! I'd like to see your blazers.",
  },
];
