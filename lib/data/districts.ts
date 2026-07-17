import type { District } from "@/types";

export const DISTRICTS: District[] = [
  {
    id: "knowledge",
    slug: "knowledge-district",
    name: "Knowledge District",
    emoji: "📚",
    fillColor: "#D4C498",
    glowColor: "#F5E6A8",
    description:
      "Stories, history, nutrition and everything worth knowing about African food and culture.",
    points:
      "250,170 330,100 350,70 500,20 680,120 788,146 744,200 702,220 636,255 550,246 470,260 440,316 385,364 360,420 230,376 187,312 200,230 231,216",
    items: [
      {
        name: "African Food Wiki",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&h=500&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "farm",
    slug: "farm-district",
    name: "Farm District",
    emoji: "🌾",
    fillColor: "#B5C99A",
    glowColor: "#D4EAB0",
    description:
      "Where it all begins. Meet our farmers and discover indigenous crops.",
    points:
      "895,260 937,304 1000,328 1020,350 968,390 900,470 815,528 721,487 810,400 720,270 851,180",
    items: [
      {
        name: "Farmers",
        image:
          "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=500&fit=crop&auto=format",
      },
      {
        name: "Indigenous Crops",
        image:
          "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&h=500&fit=crop&auto=format",
      },
      {
        name: "Ancient Grains",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=500&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "explore",
    slug: "explore-district",
    name: "Explore District",
    emoji: "🌍",
    fillColor: "#90B8B0",
    glowColor: "#B0E0D6",
    description:
      "Travel guides, food experiences, restaurants, markets & festivals.",
    points:
      "866,162 1033,100 1140,160 1176,220 1100,260 1060,300 1020,325 968,305 900,233",
    items: [
      {
        name: "Restaurants",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=500&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "food",
    slug: "food-district",
    name: "Food District",
    emoji: "🥣",
    fillColor: "#D4A896",
    glowColor: "#F5C8B0",
    description:
      "Recipes, ingredients, drinks and traditional dishes from across Africa.",
    points:
      "416,359 485,310 488,270 560,258 634,270 691,331 710,390 674,415 608,432 519,460 443,439 376,424",
    items: [
      {
        name: "Recipes",
        image:
          "https://images.unsplash.com/photo-1638436684761-7e59f8a9072f?w=500&h=500&fit=crop&auto=format",
      },
      {
        name: "Drinks",
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=500&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "market",
    slug: "market-district",
    name: "Market District",
    emoji: "🛍️",
    fillColor: "#A8B8D0",
    glowColor: "#C8D8F0",
    description:
      "Shop ingredients, tools, artisan goods and more from amazing makers.",
    points:
      "929,471 1043,352 1176,249 1275,383 1296,477 1214,517 1100,548 978,570 865,529",
    items: [
      {
        name: "Farmer's Market",
        image:
          "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&h=500&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "arena",
    slug: "arena-district",
    name: "Arena District",
    emoji: "🎭",
    fillColor: "#C4A8B8",
    glowColor: "#E4C8D8",
    description: "Where food meets competition. Watch. Vote. Play.",
    points:
      "547,909 716,704 856,608 921,622 963,720 980,800 1008,920 959,984 815,1005 720,1009 625,969",
    items: [
      {
        name: "Watch Episodes",
        image:
          "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=500&fit=crop&auto=format",
      },
      {
        name: "Challenges",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=500&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "community",
    slug: "community-district",
    name: "Community District",
    emoji: "🤝",
    fillColor: "#B0B880",
    glowColor: "#D0D8A0",
    description:
      "Share recipes, join challenges, meet members and be part of the conversation.",
    points:
      "1013,577 1104,570 1216,600 1364,652 1331,737 1250,790 1146,802 1040,762 984,648",
    items: [
      {
        name: "Family Recipes",
        image:
          "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&h=500&fit=crop&auto=format",
      },
    ],
  },
  {
    id: "impact",
    slug: "impact-district",
    name: "Impact District",
    emoji: "🌱",
    fillColor: "#9EC89E",
    glowColor: "#BEE8BE",
    description:
      "Sustainability, reports, partnerships and creating real change together.",
    points:
      "280,830 400,850 500,820 590,720 770,630 740,558 580,508 480,508 360,500 250,409 150,530 140,650 160,750",
    items: [
      {
        name: "Sustainability",
        image:
          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=500&fit=crop&auto=format",
      },
    ],
  },
];
