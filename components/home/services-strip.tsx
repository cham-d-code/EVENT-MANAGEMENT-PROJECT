import Link from "next/link";
import { services } from "@/data/services";
import { iconMap } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";

function ServiceRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center gap-3 pr-3">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon];
        return (
          <Link
            key={`${service.slug}-${ariaHidden ? "b" : "a"}-${i}`}
            href="/services"
            tabIndex={ariaHidden ? -1 : undefined}
            className="group flex items-center gap-2 rounded-full border border-paper/10 px-5 py-2.5 text-sm text-fog transition-all duration-300 hover:border-ember hover:bg-ember/5 hover:text-paper"
          >
            <Icon size={16} className="text-fog-dim transition-colors duration-300 group-hover:text-ember-2" />
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
        <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee [animation-play-state:running] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <ServiceRow />
            <ServiceRow ariaHidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
