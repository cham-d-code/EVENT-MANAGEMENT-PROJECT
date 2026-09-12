"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { events, eventCategories, categoryToFilter } from "@/data/events";
import { Media } from "@/components/ui/media";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

type FilterValue = (typeof eventCategories)[number];

export default function WorkPage() {
  const [filter, setFilter] = useState<FilterValue>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return events;
    return events.filter((event) => categoryToFilter(event.category) === filter);
  }, [filter]);

  return (
    <div className="bg-ink pb-24 pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Our work"
            title={
              <>
                Every event, <span className="text-gradient-ember">on the record</span>
              </>
            }
            description="Browse hackathons, expositions, interview series, and everything in between."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {eventCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                filter === category
                  ? "border-ember bg-ember/10 text-ember-2"
                  : "border-paper/15 text-fog hover:border-paper/40 hover:text-paper"
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((event) => (
            <motion.div key={event.slug} layout variants={fadeUp} initial="hidden" animate="show">
              <Link
                href={`/work/${event.slug}`}
                className="group block overflow-hidden rounded-2xl border border-line-soft bg-ink-soft"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Media
                    src={event.coverImage}
                    alt="{{ALT_TEXT}}"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full border border-paper/20 bg-ink/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-paper backdrop-blur-sm">
                    {event.year}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-ember-2">
                      {event.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-paper">{event.name}</h3>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-fog-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember-2"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-14 text-center text-fog">No events in this category yet.</p>
        )}
      </div>
    </div>
  );
}
