"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO_SLIDES } from "@/lib/data/hero-slides";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % HERO_SLIDES.length),
    []
  );
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, current, next]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative min-h-[600px] w-full overflow-hidden"
      style={{ height: "90vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero image slider"
    >
      {/* Slides */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={s.image}
            alt={s.headline}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl animate-fade-in">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Jaiyé District
            </span>
            <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {slide?.headline}
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-white/80">
              {slide?.subtext}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/posts">
                <Button size="lg">
                  View All Posts <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="!border-white !text-white hover:!bg-white hover:!text-foreground"
                >
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "h-2.5 w-8 bg-primary"
                : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-10 font-mono text-sm text-white/60">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(HERO_SLIDES.length).padStart(2, "0")}
      </div>
    </section>
  );
}
