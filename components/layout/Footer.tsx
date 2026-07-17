"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { SocialIconMap } from "@/components/ui/SocialIcons";

const QUICK_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Posts", href: "/posts" },
  { label: "Events", href: "/events" },
  { label: "Contacts", href: "/#contacts" },
];

const SOCIAL_LINKS: Array<{
  icon: keyof typeof SocialIconMap;
  label: string;
  href: string;
  color: string;
}> = [
  { icon: "YouTube", label: "YouTube", href: "#", color: "hover:bg-red-600" },
  { icon: "Facebook", label: "Facebook", href: "#", color: "hover:bg-blue-600" },
  { icon: "Instagram", label: "Instagram", href: "#", color: "hover:bg-pink-600" },
  { icon: "LinkedIn", label: "LinkedIn", href: "#", color: "hover:bg-blue-700" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          {/* Column 1 — Brand + Contact */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo.png"
                  alt="Jaiyé District logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-serif text-xl font-bold text-background">
                Jaiyé District
              </p>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-background/60">
              Celebrating the richness of Nigerian and African cuisine — one recipe,
              one story, one community at a time.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                12 Culinary Lane, Lekki, Lagos, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                +234 800 JAIYE DISTRICT
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                hello@jaiyedistrict.com
              </p>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="mb-5 font-serif text-lg font-bold text-background">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social */}
          <div>
            <h4 className="mb-5 font-serif text-lg font-bold text-background">
              Follow Us
            </h4>
            <div className="mb-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ icon, label, href, color }) => {
                const Icon = SocialIconMap[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background/70 transition-all duration-200 hover:text-white ${color}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <p className="text-xs leading-relaxed text-background/50">
              Stay connected for recipes, events, and culinary inspiration
              delivered to your feed.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/40">
            © 2026 Jaiyé District. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
