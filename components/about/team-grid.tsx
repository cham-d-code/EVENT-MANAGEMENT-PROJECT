import { InstagramIcon, LinkedinIcon, BehanceIcon } from "@/components/ui/social-icons";
import { team } from "@/data/team";
import { Media } from "@/components/ui/media";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const socialIcons = { instagram: InstagramIcon, linkedin: LinkedinIcon, behance: BehanceIcon } as const;

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
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              {member.social && (
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {Object.entries(member.social).map(([key, href]) => {
                    const Icon = socialIcons[key as keyof typeof socialIcons];
                    if (!Icon || !href) return null;
                    return (
                      <a
                        key={key}
                        href={href}
                        aria-label={key}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-paper/20 bg-ink/60 text-paper backdrop-blur-sm transition-colors hover:border-ember hover:text-ember-2"
                      >
                        <Icon size={14} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-paper">{member.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-ember-2">{member.role}</p>
              <p className="mt-3 text-sm text-fog">{member.bio}</p>
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
