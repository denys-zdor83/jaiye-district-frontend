import { HeroSlider } from "@/components/home/HeroSlider";
import { DistrictMapSection } from "@/components/home/DistrictMapSection";
import { AboutSection } from "@/components/home/AboutSection";
import { LatestPostsSection } from "@/components/home/LatestPostsSection";
import { EventsSection } from "@/components/home/EventsSection";
import { ContactSection } from "@/components/home/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jaiyé District — Nigerian Culinary Blog",
  description:
    "Where African Flavours Come Alive. Authentic Nigerian recipes, culinary stories, and a community built around the joy of cooking.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <DistrictMapSection />
      <AboutSection />
      <LatestPostsSection />
      <EventsSection />
      <ContactSection />
    </>
  );
}
