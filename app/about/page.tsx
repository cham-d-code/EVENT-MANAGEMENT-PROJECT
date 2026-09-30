import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { GlowBlob } from "@/components/ui/glow";
import TeamGrid from "@/components/about/team-grid";

export const metadata: Metadata = { title: "About" };

const pillars = [
  {
    number: "01",
    title: "Strategy before spectacle",
    description: "Every event starts with clear goals, a real budget, and a plan we can actually run on show day.",
  },
  {
    number: "02",
    title: "Transparent communication",
    description: "You always know what's happening, what's next, and who owns it — no surprises at load-in.",
  },
  {
    number: "03",
    title: "Craft in every detail",
    description: "From lighting cues to the final export, we sweat the details that make an event feel premium.",
  },
  {
    number: "04",
    title: "Calm under pressure",
    description: "Live events change fast. Our crews are trained to adapt without the audience ever noticing.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative bg-ink pb-24 lg:pb-32">
      <GlowBlob className="left-0 top-0 h-[440px] w-[440px] -translate-x-1/3 -translate-y-1/3 opacity-50" />

      <section className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 pb-16 pt-28 lg:px-10">
        <div>
          <Reveal>
            <SectionHeading eyebrow="About us" title="The people behind the production" />
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-5 text-base leading-relaxed text-fog sm:text-lg">
            <p>We are university colleagues at the University of Kelaniya who have always worked as one team. Together we plan, produce, and deliver events, and we have been doing it side by side for as long as we have known each other.</p>
            <p>The events on this site are only part of the story. We have delivered many more, in partnership with the Ministry of Science and Technology and the Industrial Management Science Students&apos; Association (IMSSA), and our audiences have included honourable guests such as the Minister of Science and Technology. Whatever the occasion, we bring the same teamwork and care to every production.</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 border-y border-line-soft py-7">
            <div className="grid gap-7 sm:grid-cols-3 sm:gap-8">
              <div>
                <h3 className="font-display text-sm font-bold text-paper">Longstanding chemistry</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  A university-built team that already knows how to move as one.
                </p>
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-paper">End-to-end ownership</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Planning, production, and delivery stay connected from brief to show day.
                </p>
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-paper">Proven in the room</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Experience across institutional, public-facing, and live events.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">How we work</h2>
        </Reveal>
        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {pillars.map((pillar) => (
            <RevealItem key={pillar.number}>
              <div className="h-full rounded-3xl border border-line-soft bg-ink-soft p-6">
                <span className="font-display text-3xl font-black text-gradient-ember">{pillar.number}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-paper">{pillar.title}</h3>
                <p className="mt-2 text-sm text-fog">{pillar.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">Meet the team</h2>
        </Reveal>
        <div className="mt-10">
          <TeamGrid />
        </div>
      </div>
    </div>
  );
}
