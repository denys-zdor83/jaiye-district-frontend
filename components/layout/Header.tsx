"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Posts", href: "/posts" },
  { label: "Events", href: "/events" },
  { label: "Contacts", href: "/#contacts" },
];

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isTransparent
          ? "bg-[#0505058a]"
          : "bg-card/95 shadow-md backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-14">
            <Image
              src="/images/logo.png"
              alt="Jaiyé District logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p
              className={cn(
                "font-serif text-xl font-bold leading-tight transition-colors",
                isTransparent ? "text-white" : "text-foreground"
              )}
            >
              Jaiyé District
            </p>
            <p
              className={cn(
                "text-xs uppercase tracking-widest transition-colors",
                isTransparent ? "text-white/70" : "text-muted-foreground"
              )}
            >
              Nigerian Culinary Blog
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-2 text-base font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : isTransparent
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/events" className="ml-2">
            <Button size="sm">Join Event</Button>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "rounded-lg p-2 transition-colors md:hidden",
            isTransparent ? "text-white" : "text-foreground"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-card shadow-lg md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/events" onClick={() => setMenuOpen(false)}>
                <Button size="sm" className="w-full">
                  Join Event
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
