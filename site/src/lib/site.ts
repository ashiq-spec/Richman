/**
 * Single source of truth for business facts.
 * Every page, schema block, and CTA reads from here —
 * change a phone number or opening hour once, it updates everywhere.
 */

export const SITE = {
  name: "Richman Suits Gold",
  shortName: "Richman Suits",
  url: "https://www.richmansuits.com",
  tagline: "Luxury Wedding Suits in Chennai",
  description:
    "Richman Suits Gold is Chennai's luxury wedding suit atelier in Guindy — custom-tailored wedding suits, tuxedos, sherwanis, three-piece suits and premium suit rentals for the modern groom. 7,500+ suits delivered. Call 99449 30106.",

  phone: {
    plain: "9944930106",
    display: "+91 99449 30106",
    href: "tel:+919944930106",
    e164: "+919944930106",
  },
  phoneAlt: {
    plain: "9962016106",
    display: "+91 99620 16106",
    href: "tel:+919962016106",
    e164: "+919962016106",
  },
  whatsappNumber: "919944930106",

  address: {
    street: "Guindy",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600032",
    country: "IN",
    display: "Guindy, Chennai, Tamil Nadu 600032",
  },

  geo: { lat: 12.9983315, lng: 80.2084026 },

  hours: [
    { label: "Monday – Saturday", opens: "10:00 AM", closes: "9:00 PM" },
    { label: "Sunday", opens: "11:00 AM", closes: "8:00 PM" },
  ],
  hoursSchema: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
    { dayOfWeek: ["Sunday"], opens: "11:00", closes: "20:00" },
  ],

  links: {
    instagram: "https://www.instagram.com/richmansuits/",
    maps: "https://maps.app.goo.gl/EyVXjUYxK4pEEZCg7",
    mapsEmbed:
      "https://www.google.com/maps?q=Richman%20Suits%20Gold%2C%20Guindy%2C%20Chennai&output=embed",
  },

  stats: {
    suitsDelivered: "7,500+",
    yearsOfMastery: "12+",
    groomsStyled: "500+",
    fitSatisfaction: "100%",
  },

  serviceAreas: [
    "Guindy",
    "Alandur",
    "Saidapet",
    "St. Thomas Mount",
    "Velachery",
    "Adyar",
    "T. Nagar",
    "Ashok Nagar",
    "Vadapalani",
    "Nungambakkam",
    "Mount Road",
    "Anna Nagar",
    "Porur",
    "Chromepet",
    "Pallavaram",
    "Tambaram",
    "OMR",
    "ECR",
  ],
} as const;

/** Build a WhatsApp deep link with a pre-filled message. */
export function wa(text: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = wa(
  "Hi Richman Suits! I'd like to book an appointment.",
);
