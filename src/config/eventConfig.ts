export const eventConfig = {
  // Event Details
  title: "Mother's Day Celebration",
  headline: "Bubble House Experience for Unforgettable Moments!",
  date: "May 23, 2026",
  location: "27 McIntosh Ave, Newcastle",
  time: "11:00 - 18:00",

  // WhatsApp Configuration
  whatsappNumber: "27615059914", // Replace with actual number

  // Pricing Packages
  packages: [
    {
      id: 1,
      name: "Bubble Bliss Pass",
      price: 150,
      features: [
        "Event entry + 1 child",
        "Access to jumping castles",
        "Access to games",
      ],
      highlighted: false,
    },
    {
     id: 2,
      name: "Standard Bliss Pass",
      price: 200,
      features: [
        "Event entry + 1 child",
        "Access to jumping castles",
        "Meal for both",
        "One welcome drink",
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: "Mommy & Me Premium",
      price: 300,
      features: [
        "Event entry + 1 child",
        "Access to jumping castles",
        "Meal for both",
        "One welcome drink",
        "Dessert for both",
        "Small Mother's Day gift",
        "Reserved cosy seating area",
      ],
      highlighted: false,
    },
  ],

  // Additional Child Price
  additionalChildPrice: 100,

  // Dress Code Colors (matching theme)
  dressCodeColors: ["#8EDCF2", "#D1B9E0", "#F5CBDD"],

  // Rules & Logistics
  rules: [
    "Please arrive 15 minutes before your scheduled time",
    "Comfortable clothing recommended",
    "Children must be supervised at all times",
    "No outside food or drinks allowed",
  ],
} as const;

export type Package = (typeof eventConfig.packages)[number];
