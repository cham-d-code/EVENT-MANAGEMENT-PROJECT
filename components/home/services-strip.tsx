import Link from "next/link";
import { services } from "@/data/services";
import { iconMap } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";

function ServiceRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon];
        return (
          <Link
            key={`${service.slug}-${ariaHidden ? "b" : "a"}-${i}`}
            href="/services"
            tabIndex={ariaHidden ? -1 : undefined}
            className="group flex items-center gap-3 px-1 py-2 font-display text-lg font-semibold tracking-[-0.025em] text-fog/80 [text-shadow:0_-2px_1px_rgba(0,0,0,0.95),0_1px_0_rgba(168,158,142,0.26),0_2px_3px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember sm:text-xl"
          >
            <Icon
              size={22}
              strokeWidth={2.25}
              className="text-fog-dim [filter:drop-shadow(0_-1px_0_rgba(0,0,0,0.95))_drop-shadow(0_1px_0_rgba(168,158,142,0.28))] transition-colors duration-300 group-hover:text-paper/90"
            />
            {service.name}
          </Link>
        );
      })}
    </div>
  );
}

export default function ServicesStrip() {
  return (
    <section className="relative border-y border-line-soft bg-ink-soft py-10">
      <Reveal>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="services-marquee-track flex w-max">
            <ServiceRow />
            <ServiceRow ariaHidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
