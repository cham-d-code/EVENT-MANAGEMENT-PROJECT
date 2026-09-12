import { team } from "@/data/team";
import { Media } from "@/components/ui/media";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export default function TeamTeaser() {
  const preview = team.slice(0, 5);

  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-line-soft bg-ink-soft p-8 sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-ember-2">The team</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-paper sm:text-3xl">
                A crew of planners, producers, and creatives who show up for the whole run of show.
              </h3>
              <Button href="/about" variant="outline" className="mt-6">
                Meet the team
              </Button>
            </div>
            <div className="flex -space-x-4">
              {preview.map((member, i) => (
                <div
                  key={member.name}
                  className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-ink-soft sm:h-20 sm:w-20"
                  style={{ zIndex: preview.length - i }}
                >
                  <Media src={member.image} alt="{{ALT_TEXT}}" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
