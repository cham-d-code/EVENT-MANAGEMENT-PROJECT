import { team } from "@/data/team";
import { Media } from "@/components/ui/media";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export default function TeamGrid() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
      {team.map((member) => (
        <RevealItem key={member.name}>
          <div className="group overflow-hidden rounded-3xl border border-line-soft bg-ink-soft">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Media
                src={member.image}
                alt="{{ALT_TEXT}}"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-paper">{member.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-ember-2">{member.role}</p>
              <p className="mt-3 text-sm text-fog">{member.phone}</p>
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
