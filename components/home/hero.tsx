"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Media } from "@/components/ui/media";
import { Button } from "@/components/ui/button";
import { DashedGrid, GlowBlob } from "@/components/ui/glow";
import { SplitWords } from "@/components/ui/split-text";
import { siteConfig } from "@/config/site";

// Swap the hero background between a looping video and a static image
// by changing this one flag.
const HERO_MEDIA_TYPE: "image" | "video" = "image";

const tags = [
  { label: "Planning", className: "left-[6%] top-[22%] hidden lg:block" },
  { label: "Production", className: "right-[6%] top-[30%] hidden lg:block" },
  { label: "Est. 2016", className: "left-[10%] bottom-[18%] hidden lg:block" },
  { label: "Full-Service", className: "right-[9%] bottom-[24%] hidden lg:block" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const glowOneY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const glowTwoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24">
      <DashedGrid cell={110} className="opacity-40" />
      <GlowBlob
        className="left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
        style={{ y: glowOneY }}
      />
      <GlowBlob
        className="right-0 bottom-0 h-[380px] w-[380px] translate-x-1/3 translate-y-1/3 opacity-70"
        style={{ y: glowTwoY }}
      />

      {HERO_MEDIA_TYPE === "video" ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/poster.jpg"
        >
          <source src="/images/hero/loop.mp4" type="video/mp4" />
        </video>
      ) : (
        <Media
          src="/images/hero/hero.jpg"
          alt="{{ALT_TEXT}}"
          fill
          priority
          className="absolute inset-0 object-cover opacity-20"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />

      {tags.map((tag) => (
        <span
          key={tag.label}
          className={`absolute z-10 rounded border border-dashed border-paper/20 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-fog ${tag.className}`}
        >
          [{tag.label}]
        </span>
      ))}

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-fog"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          Events, engineered end-to-end
        </motion.span>

        <h1 className="mt-8 flex flex-wrap items-end justify-center break-words font-display text-[clamp(2.5rem,11vw,7.5rem)] font-black leading-[0.95] tracking-tight text-paper">
          <SplitWords text={siteConfig.shortName} />
          <span className="overflow-hidden pb-[0.1em]">
            <motion.span
              className="inline-block text-gradient-ember"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              .
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-balance text-base text-fog sm:text-lg"
        >
          {siteConfig.tagline}. We plan, produce, and run events end-to-end — from the first
          concept deck to the last strike of the stage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/work">See our work</Button>
          <Button href="/contact" variant="outline">
            Get in touch
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-fog-dim"
      >
        Scroll
      </motion.div>
    </section>
  );
}
