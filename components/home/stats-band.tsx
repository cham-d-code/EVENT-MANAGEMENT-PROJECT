import { siteConfig } from "@/config/site";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export default function StatsBand() {
  return (
    <section className="relative border-y border-line-soft bg-ink-elevated py-16">
      <RevealGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
        {siteConfig.stats.map((stat) => (
          <RevealItem key={stat.label} className="text-center lg:text-left">
            <AnimatedCounter
            value={stat.value}
            className="block font-display text-2xl font-black text-gradient-ember sm:text-4xl lg:text-5xl"
          />
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-fog-dim sm:text-sm">
              {stat.label}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
