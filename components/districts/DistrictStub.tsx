import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { District } from "@/types";

export function DistrictStub({ district }: { district: District }) {
  return (
    <div
      className="min-h-screen pb-20 pt-32"
      style={{ backgroundColor: `${district.glowColor}30` }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> Back to the Map
        </Link>
        <div
          className="rounded-3xl border-2 bg-card p-12 text-center shadow-lg md:p-20"
          style={{ borderColor: district.glowColor }}
        >
          <div className="mb-6 text-7xl">{district.emoji}</div>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-6xl">
            {district.name}
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            {district.description}
          </p>
          <p className="mt-10 text-sm uppercase tracking-widest text-muted-foreground/60">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}
