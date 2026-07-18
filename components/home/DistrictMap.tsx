"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DISTRICTS } from "@/lib/data/districts";

const TITLE_WIDTH = 280;
const TITLE_HEIGHT = 55;

export function DistrictMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <Image
        src="/images/jaiye-district-world.png"
        alt="The Jaiyé District Map — eight island territories of the culinary continent"
        width={1451}
        height={1084}
        className="block h-auto w-full select-none"
        priority
      />

      <svg
        viewBox="0 0 1451 1084"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-label="Interactive district map"
      >
        {/* Clickable polygons (invisible unless hovered) */}
        {DISTRICTS.map((d) => {
          const isHovered = hovered === d.slug;
          return (
            <Link key={d.slug} href={`/${d.slug}`}>
              <g
                onMouseEnter={() => setHovered(d.slug)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(d.slug)}
                onBlur={() => setHovered(null)}
                className="cursor-pointer"
                tabIndex={0}
                role="link"
                aria-label={`${d.name} — visit page`}
              >
                <title>{d.name}</title>
                <polygon
                  points={d.points}
                  fill={d.glowColor}
                  fillOpacity={isHovered ? 0.55 : 0}
                  stroke="none"
                  style={{
                    transition: "fill-opacity 220ms ease, filter 220ms ease",
                    filter: isHovered
                      ? `blur(14px) drop-shadow(0 0 30px ${d.glowColor})`
                      : "none",
                  }}
                />
              </g>
            </Link>
          );
        })}

        {/* Always-visible title banners at the top of each polygon */}
        {DISTRICTS.map((d, i) => {
          const coords = d.points
            .split(" ")
            .map((p) => p.split(",").map(Number));
          const avgX = coords.reduce((s, c) => s + c[0], 0) / coords.length;
          const minY = Math.min(...coords.map((c) => c[1]));
          const x = avgX - TITLE_WIDTH / 2;
          const y = Math.max(0, minY - TITLE_HEIGHT / 2);
          return (
            <image
              key={`title-${d.slug}`}
              href={`/images/island-titles/${d.name}.png`}
              x={x}
              y={y}
              width={TITLE_WIDTH}
              height={TITLE_HEIGHT}
              preserveAspectRatio="xMidYMid meet"
              pointerEvents="none"
              className="animate-float"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
