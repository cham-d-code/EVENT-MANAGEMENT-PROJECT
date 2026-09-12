import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { iconMap } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { GlowBlob } from "@/components/ui/glow";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="relative bg-ink pb-24 pt-32 lg:pb-32">
      <GlowBlob className="right-0 top-0 h-[420px] w-[420px] -translate-y-1/3 translate-x-1/3 opacity-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything an event needs, <span className="text-gradient-ember">under one roof</span>
              </>
            }
            description="From the first planning call to the final export of the aftermovie — our services cover the full lifecycle of your event."
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.08}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealItem key={service.slug}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-line-soft bg-ink-soft p-8 transition-colors duration-300 hover:border-ember/50">
                  <span className="absolute right-6 top-6 font-display text-5xl font-black text-paper/5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-paper/10 bg-ink text-ember-2">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-paper">{service.name}</h3>
                  <p className="mt-3 text-sm text-fog">{service.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-fog">
                        <Check size={16} className="mt-0.5 shrink-0 text-ember" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
