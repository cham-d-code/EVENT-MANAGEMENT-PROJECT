import { Button } from "@/components/ui/button";
import { GlowBlob } from "@/components/ui/glow";
import { Reveal } from "@/components/ui/reveal";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 lg:py-32">
      <GlowBlob className="left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display text-4xl font-black leading-tight text-paper sm:text-5xl lg:text-6xl">
            Planning something? <span className="text-gradient-ember">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-fog sm:text-lg">
            Tell us about your event and we&apos;ll get back to you with next steps within one
            business day.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact">Start a conversation</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
