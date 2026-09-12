import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GlowBlob } from "@/components/ui/glow";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = { title: "Contact" };

const details = [
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: MapPin, label: "Location", value: siteConfig.location },
];

export default function ContactPage() {
  return (
    <div className="relative bg-ink pb-24 pt-32 lg:pb-32">
      <GlowBlob className="right-0 top-1/4 h-[420px] w-[420px] translate-x-1/3 opacity-50" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s plan your <span className="text-gradient-ember">next event</span>
                </>
              }
              description="Share a few details about what you're planning and we'll follow up with next steps."
            />
          </Reveal>

          <Reveal delay={0.15} className="mt-10 space-y-5">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/15 text-ember-2">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-fog-dim">{label}</p>
                  <p className="text-sm text-paper">{value}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line-soft bg-ink-soft p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
