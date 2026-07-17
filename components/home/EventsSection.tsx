import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { EVENTS } from "@/lib/data/events";

const event = EVENTS[0];

export function EventsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Upcoming"
          title="Events"
          subtitle="Join us for cooking workshops, community dinners, and culinary celebrations."
        />
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={event.bannerImage}
            alt={event.title}
            width={1400}
            height={600}
            className="h-[480px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/85 via-foreground/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="ml-8 max-w-lg p-6 md:ml-16">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                <Calendar size={12} /> Featured Event
              </span>
              <h3 className="mb-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                {event.title}
              </h3>
              <p className="mb-5 leading-relaxed text-white/80">
                {event.description.slice(0, 160)}…
              </p>
              <div className="mb-6 flex flex-wrap gap-4 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-primary" />
                  {event.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-primary" />
                  {event.time}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary" />
                  {event.venue}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={`/events/${event.id}`}>
                  <Button size="lg">
                    View Details <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button size="lg" variant="outline" className="border-white! text-white! hover:bg-white! hover:text-foreground!">
                    All Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
