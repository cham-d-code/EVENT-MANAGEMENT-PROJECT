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
    <div className="relative bg-ink pb-24 pt-32 lg:pb-32">
      <GlowBlob className="left-0 top-0 h-[440px] w-[440px] -translate-x-1/3 -translate-y-1/3 opacity-50" />

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="About us" title="The people behind the production" />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-5 text-base leading-relaxed text-fog sm:text-lg">
          <p>{"{{STUDIO_STORY_PARA_1}}"} Placeholder copy: a short story about how the studio started, the gap it saw in event production, and the kind of work it set out to do.</p>
          <p>{"{{STUDIO_STORY_PARA_2}}"} Placeholder copy: what the studio looks like today — the breadth of events it runs, the disciplines under one roof, and what clients can expect when they work with the team.</p>
        </Reveal>
      </div>

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
