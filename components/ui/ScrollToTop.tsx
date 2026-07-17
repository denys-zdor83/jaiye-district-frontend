"use client";

import { ChevronUp } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils/cn";

export function ScrollToTop() {
  const visible = useScrolled(300);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <ChevronUp size={20} />
    </button>
  );
}
