// Featured / seasonal program configuration.
// This section is intentionally separated from the rest of the site so it can be swapped
// out for the next seasonal program once the Fall Break Camp 2026 dates have passed.
// To reuse this section for a future camp: update the fields below and swap the image.

export interface FeaturedCampDetail {
  label: string;
  value: string;
}

export const featuredCamp = {
  isActive: true,
  eyebrow: "Flash Sale • Nashville & Surrounding Areas",
  name: "Fall Break Camp 2026",
  headline: "A Fall Break Full of Discovery, Creativity & Adventure",
  description:
    "Inspired by LDTA's Fall Break Camp flyer, this one-week program brings together educational adventures, arts and music, and cultural experiences for school-age learners across the Nashville area.",
  dateRange: "October 12–16, 2026",
  location: "Nashville & Surrounding Areas",
  price: "$35",
  priceNote:
    "Promotional rate shown on LDTA's flyer, subject to confirmation of eligibility, duration, and terms.",
  image:
    "https://images.pexels.com/photos/29202955/pexels-photo-29202955.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1200",
  imageAlt:
    "Children enjoying an outdoor autumn activity on a playground surrounded by fall leaves",
  highlights: [
    "Heart of the Arts: exploring the arts in Music City",
    "Educational adventures and guided group activities",
    "Arts, music, and cultural experiences",
    "One week of countless admirations — endless learning",
  ],
  details: [
    { label: "Dates", value: "October 12–16, 2026" },
    { label: "Location", value: "Nashville & Surrounding Areas" },
    { label: "Promotional Price", value: "$35 (per flyer, terms to be confirmed)" },
    { label: "How to Inquire", value: "Contact LDTA directly for enrollment guidance" },
  ] as FeaturedCampDetail[],
  disclaimer:
    "Dates, pricing, and eligibility are shown as published on LDTA's promotional flyer and are subject to confirmation. Please contact LDTA directly to confirm availability before making plans.",
};

export type FeaturedCamp = typeof featuredCamp;
