import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, MapPin, User } from "lucide-react";
import { events, getEventBySlug } from "@/data/events";
import { services } from "@/data/services";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import Gallery from "@/components/work/gallery";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return { title: event.name, description: event.description.slice(0, 140) };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const index = events.findIndex((e) => e.slug === slug);
  const prevEvent = events[(index - 1 + events.length) % events.length];
  const nextEvent = events[(index + 1) % events.length];
  const usedServices = services.filter((s) => event.services.includes(s.slug));

  return (
    <article className="bg-ink pb-24 pt-24">
      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/7]">
        <Media src={event.coverImage} alt="{{ALT_TEXT}}" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>

      <div className="mx-auto -mt-20 max-w-5xl px-6 lg:px-10">
        <Reveal>
          <div className="relative rounded-3xl border border-line-soft bg-ink-soft p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-ember-2">
              {event.category} · {event.year}
            </span>
            <h1 className="mt-3 font-display text-3xl font-black text-paper sm:text-4xl lg:text-5xl">
              {event.name}
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-fog">
              {event.client && (
                <span className="flex items-center gap-2">
                  <User size={16} className="text-fog-dim" /> {event.client}
                </span>
              )}
              {event.location && (
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-fog-dim" /> {event.location}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-fog-dim" /> {event.year}
              </span>
            </div>

            {usedServices.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {usedServices.map((service) => (
                  <span
                    key={service.slug}
                    className="rounded-full border border-paper/15 px-3 py-1 text-xs font-medium text-fog"
                  >
                    {service.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal className="mt-14 space-y-5 text-base leading-relaxed text-fog sm:text-lg">
          {event.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-paper">Gallery</h2>
          </Reveal>
          <div className="mt-6">
            <Gallery images={event.gallery} eventName={event.name} />
          </div>
        </div>

        {/* Optional embedded video — drop a YouTube/Vimeo URL into the iframe below when available. */}
        {/* <div className="mt-16 aspect-video w-full overflow-hidden rounded-2xl border border-line-soft">
          <iframe className="h-full w-full" src="{{VIDEO_EMBED_URL}}" title={event.name} allowFullScreen />
        </div> */}

        <div className="mt-20 grid grid-cols-1 gap-4 border-t border-line-soft pt-10 sm:grid-cols-2">
          <Link
            href={`/work/${prevEvent.slug}`}
            className="group flex items-center gap-3 rounded-2xl border border-line-soft p-5 transition-colors duration-300 hover:border-ember"
          >
            <ArrowLeft size={18} className="text-fog-dim transition-colors group-hover:text-ember-2" />
            <div>
              <p className="text-xs uppercase tracking-widest text-fog-dim">Previous</p>
              <p className="font-display font-semibold text-paper">{prevEvent.name}</p>
            </div>
          </Link>
          <Link
            href={`/work/${nextEvent.slug}`}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-line-soft p-5 text-right transition-colors duration-300 hover:border-ember sm:justify-end"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-fog-dim">Next</p>
              <p className="font-display font-semibold text-paper">{nextEvent.name}</p>
            </div>
            <ArrowRight size={18} className="text-fog-dim transition-colors group-hover:text-ember-2" />
          </Link>
        </div>
      </div>
    </article>
  );
}
