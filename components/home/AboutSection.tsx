import Image from "next/image";
import { BookOpen, Users, Heart } from "lucide-react";

const STATS = [
  { icon: BookOpen, num: "200+", label: "Recipes" },
  { icon: Users, num: "15K+", label: "Community" },
  { icon: Heart, num: "50+", label: "Events Hosted" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1565608087341-404b25492fee?w=700&h=850&fit=crop&auto=format"
                alt="Nigerian chef in professional kitchen"
                width={700}
                height={850}
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden flex-col items-center gap-1 rounded-2xl bg-primary p-6 text-white shadow-xl md:flex">
              <span className="font-serif text-3xl font-bold">10+</span>
              <span className="text-xs uppercase tracking-widest text-white/80">
                Years of Culinary Excellence
              </span>
            </div>
            <div className="absolute -top-4 -left-4 hidden h-24 w-24 rounded-full border-4 border-primary/20 md:block" />
          </div>

          {/* Text column */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </span>
            <h2 className="mt-3 mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Born From a Love of Nigerian Food &amp; Culture
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Jaiyé District was founded by Esther Alabi, an Ibadan-born chef
                and food writer whose journey took her from her grandmother&apos;s
                kitchen in Ibadan to professional culinary schools in London and
                Abuja.
              </p>
              <p>
                After years of watching Nigerian cuisine be misrepresented or
                overlooked, Esther decided to build a home for it online — a
                place where authentic recipes, cultural stories, and a passionate
                community could come together.
              </p>
              <p>
                <strong className="text-foreground">&ldquo;Jaiyé&rdquo;</strong>{" "}
                is Yoruba for &ldquo;enjoy life&rdquo; — and that&apos;s exactly
                what we invite you to do here. Every recipe is a story. Every
                dish is an invitation. Pull up a chair, and let&apos;s eat.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {STATS.map(({ icon: Icon, num, label }) => (
                <div key={label} className="text-center">
                  <Icon size={24} className="mx-auto mb-2 text-primary" />
                  <p className="font-serif text-2xl font-bold text-foreground">
                    {num}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
