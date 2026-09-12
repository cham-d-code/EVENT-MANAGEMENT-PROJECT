import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedEvents } from "@/data/events";
import { Media } from "@/components/ui/media";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function FeaturedWork() {
  const events = getFeaturedEvents();

  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Events we&apos;ve <span className="text-gradient-ember">brought to life</span>
                </>
              }
              description="A look at the productions we've planned, coordinated, and delivered from the ground up."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/work" variant="outline">
              View all work
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((event, i) => (
            <RevealItem key={event.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <Link
                href={`/work/${event.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-line-soft bg-ink-soft"
              >
                <div className={`relative w-full overflow-hidden ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <Media
                    src={event.coverImage}
                    alt="{{ALT_TEXT}}"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-ember-2">
                      {event.category} · {event.year}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-paper">{event.name}</h3>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
