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
      name: "Package 1",
      price: 150,
      features: [
        "1 Adult + 1 Child entry",
        "30-minute bubble session",
        "Basic photo opportunity",
        "Complimentary refreshments",
      ],
      highlighted: false,
    },
    {
      id: 2,
      name: "Package 2",
      price: 200,
      features: [
        "1 Adult + 1 Child entry",
        "45-minute bubble session",
        "Professional photo session",
        "Premium refreshments",
        "Bubble wand gift",
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: "Package 3",
      price: 300,
      features: [
        "1 Adult + 2 Children entry",
        "60-minute bubble session",
        "Professional photo + video",
        "Gourmet refreshments",
        "Bubble wand gift set",
        "Priority booking",
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
