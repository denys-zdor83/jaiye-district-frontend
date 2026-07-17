import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { EVENTS } from "@/lib/data/events";
import { EventRegistrationForm } from "@/components/events/EventRegistrationForm";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ id: String(e.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = EVENTS.find((e) => e.id === Number(id));
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.title,
    description: event.description.slice(0, 155),
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = EVENTS.find((e) => e.id === Number(id));

  if (!event) notFound();

  const EVENT_INFO = [
    { icon: Calendar, label: "Date", value: event.date },
    { icon: Clock, label: "Time", value: event.time },
    { icon: MapPin, label: "Venue", value: event.venue },
    { icon: Users, label: "Capacity", value: event.capacity },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 pt-24">
      {/* Page hero */}
      <div className="relative h-48 overflow-hidden bg-foreground md:h-72">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${event.bannerImage})` }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Upcoming Event
          </span>
          <h1 className="px-4 text-center font-serif text-3xl font-bold text-white md:text-5xl">
            {event.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> Back to Events
        </Link>

        {/* Event banner */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={event.bannerImage}
            alt={event.title}
            width={1200}
            height={500}
            className="h-72 w-full object-cover md:h-96"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <Calendar size={12} /> Upcoming Event
            </span>
            <h2 className="mb-2 font-serif text-3xl font-bold text-white md:text-4xl">
              {event.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
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
          </div>
        </div>

        {/* Event details + agenda */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left: description + agenda */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                About the Event
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">
                Event Agenda
              </h3>
              <div className="space-y-3">
                {event.agenda.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="w-20 shrink-0 pt-0.5 font-mono text-xs font-bold text-primary">
                      {item.time}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {item.item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: info cards */}
          <div className="space-y-4">
            {EVENT_INFO.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration form */}
        <EventRegistrationForm />
      </div>
    </div>
  );
}
