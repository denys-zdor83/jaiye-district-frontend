import type { EventDetail } from "@/types";

export const EVENTS: EventDetail[] = [
  {
    id: 1,
    title: "The Great Jollof Cook-Off 2026",
    description:
      "The Great Jollof Cook-Off 2026 is the flagship annual event of Jaiyé District — a celebration of West Africa's most beloved dish and the communities that have made it iconic worldwide. Eight teams representing Nigeria, Ghana, Senegal, Sierra Leone, Liberia, Guinea, Togo, and the Diaspora will compete for the coveted Golden Spoon trophy.",
    date: "Saturday, 18 July 2026",
    time: "12:00 PM – 8:00 PM WAT",
    venue: "Eko Hotel & Suites, Victoria Island, Lagos",
    capacity: "Limited to 500 guests",
    bannerImage:
      "https://images.unsplash.com/photo-1723083467111-e089b75c2adb?w=1400&h=600&fit=crop&auto=format",
    agenda: [
      { time: "12:00 PM", item: "Doors open, welcome reception & networking" },
      {
        time: "01:00 PM",
        item: "Opening ceremony — Founder address & cultural performances",
      },
      {
        time: "02:00 PM",
        item: "Cook-off begins: 8 teams, 90 minutes, one Jollof pot each",
      },
      { time: "03:30 PM", item: "Community tasting session — cast your vote!" },
      {
        time: "04:30 PM",
        item: "Live cooking demonstration by Chef Esther Alabi",
      },
      { time: "05:30 PM", item: "Award ceremony & winners announcement" },
      {
        time: "06:00 PM",
        item: "Community dinner & live Afrobeats performances",
      },
      { time: "08:00 PM", item: "Closing remarks & raffle prize draw" },
    ],
  },
  {
    id: 2,
    title: "Egusi Soup Masterclass & Cultural Evening",
    description:
      "Dive deep into the art of crafting the perfect Egusi Soup with Chef Esther Alabi in this hands-on masterclass. Learn how to toast and grind egusi seeds, build a rich palm-oil base, and balance the flavours of leafy greens, smoked fish, and stockfish — all the secrets behind Nigeria's most comforting bowl. The evening concludes with a communal dinner and a guided tasting of regional Egusi variations from Edo, Igbo, and Yoruba culinary traditions.",
    date: "Saturday, 22 August 2026",
    time: "02:00 PM – 7:00 PM WAT",
    venue: "Jaiyé District Culinary Studio, Ikeja, Lagos",
    capacity: "Limited to 60 participants",
    bannerImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=600&fit=crop&auto=format",
    agenda: [
      { time: "02:00 PM", item: "Welcome & ingredient showcase — sourcing the best egusi" },
      {
        time: "02:30 PM",
        item: "Masterclass Part 1 — toasting, grinding & palm-oil base technique",
      },
      {
        time: "03:30 PM",
        item: "Masterclass Part 2 — stockfish prep, leafy greens & seasoning balance",
      },
      { time: "04:30 PM", item: "Participants cook their own pot with chef guidance" },
      { time: "05:15 PM", item: "Regional tasting — Edo, Igbo & Yoruba Egusi side by side" },
      {
        time: "05:45 PM",
        item: "Panel discussion: preserving authentic recipes across generations",
      },
      { time: "06:30 PM", item: "Communal dinner & networking" },
      { time: "07:00 PM", item: "Closing & recipe booklet giveaway" },
    ],
  },
  {
    id: 3,
    title: "West African Street Food Festival",
    description:
      "Experience the vibrant energy of a West African street market right in the heart of Lagos. Over 30 vendors will bring the iconic street flavours of Nigeria, Ghana, Côte d'Ivoire, and Senegal under one roof — from sizzling Suya skewers and crispy Puff Puff to Kelewele spiced plantains and Thiéboudienne bowls. Live drumming, fashion pop-ups, and cooking battles make this the must-attend cultural feast of the season.",
    date: "Saturday, 26 September 2026",
    time: "10:00 AM – 9:00 PM WAT",
    venue: "Balmoral Hall, Federal Palace Hotel, Victoria Island, Lagos",
    capacity: "Open to all — 1,200 guest capacity",
    bannerImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&h=600&fit=crop&auto=format",
    agenda: [
      { time: "10:00 AM", item: "Festival opens — vendors, artisans & fashion pop-ups" },
      { time: "11:00 AM", item: "Suya grilling live demonstration & tasting" },
      {
        time: "12:00 PM",
        item: "Street food battle Round 1 — Puff Puff vs Kelewele",
      },
      { time: "01:30 PM", item: "Live drumming & cultural dance showcase" },
      {
        time: "03:00 PM",
        item: "Street food battle Round 2 — Boli vs Roasted Corn",
      },
      { time: "04:30 PM", item: "Kids cooking corner — beginner Jollof challenge" },
      {
        time: "06:00 PM",
        item: "Grand finale cook-off — crowd picks the Street Food Champion",
      },
      { time: "07:30 PM", item: "Awards, raffle & live Afrobeats DJ set" },
      { time: "09:00 PM", item: "Festival closes" },
    ],
  },
];

export const FEATURED_EVENT = EVENTS[0];
