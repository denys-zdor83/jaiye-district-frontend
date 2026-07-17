import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { EVENTS } from "@/lib/data/events";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse upcoming culinary events at Jaiyé District — cook-offs, masterclasses, and food festivals.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background pb-20 pt-24">
      {/* Page hero */}
      <div className="relative h-48 overflow-hidden bg-foreground md:h-64">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${EVENTS[0].bannerImage})` }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What&apos;s On
          </span>
          <h1 className="px-4 text-center font-serif text-3xl font-bold text-white md:text-5xl">
            Upcoming Events
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          label="Calendar"
          title="All Events"
          subtitle="From intimate masterclasses to large-scale festivals — find your next culinary experience."
        />

        <div className="mt-12 space-y-8">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg transition-shadow hover:shadow-2xl"
            >
              <Image
                src={event.bannerImage}
                alt={event.title}
                width={1200}
                height={480}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-80"
              />
              <div className="absolute inset-0 bg-linear-to-r from-foreground/85 via-foreground/50 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6 md:items-center md:p-10">
                <div className="max-w-lg">
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    <Calendar size={12} /> Upcoming
                  </span>
                  <h2 className="mb-3 font-serif text-2xl font-bold leading-tight text-white md:text-3xl">
                    {event.title}
                  </h2>
                  <div className="mb-5 flex flex-wrap gap-3 text-sm text-white/80">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-primary" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-primary" />
                      {event.venue}
                    </span>
                  </div>
                  <Link href={`/events/${event.id}`}>
                    <Button size="md">
                      View Details <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
