import Link from "next/link";
import { services } from "@/data/services";
import { iconMap } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";

export default function ServicesStrip() {
  return (
    <section className="relative border-y border-line-soft bg-ink-soft py-10">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-10">
          <div className="flex min-w-max items-center gap-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href="/services"
                  className="group flex items-center gap-2 rounded-full border border-paper/10 px-5 py-2.5 text-sm text-fog transition-all duration-300 hover:border-ember hover:bg-ember/5 hover:text-paper"
                >
                  <Icon size={16} className="text-fog-dim transition-colors duration-300 group-hover:text-ember-2" />
                  {service.name}
                </Link>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
