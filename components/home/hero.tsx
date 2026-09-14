"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Media } from "@/components/ui/media";
import { Button } from "@/components/ui/button";
import { DashedGrid, GlowBlob } from "@/components/ui/glow";
import { SplitWords } from "@/components/ui/split-text";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

// Swap the hero background between a cross-dissolving image slideshow, a
// looping video, and a single static image by changing this one flag.
// "slideshow" reads every image dropped into public/images/hero/slides —
// see components/home/hero-slideshow.tsx and lib/hero-slides.ts.
const HERO_MEDIA_TYPE: "slideshow" | "image" | "video" = "slideshow";

const SLIDE_DURATION_MS = 6000;
const CROSSFADE_SECONDS = 1.4;

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function HeroSlideshow({ slides }: { slides: string[] }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);

  useEffect(() => {
    if (slides.length < 2 || reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [slides.length, reduceMotion]);

  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: CROSSFADE_SECONDS, ease: "easeInOut" }}
        >
          <Media src={src} alt="{{ALT_TEXT}}" fill priority={i === 0} className="object-cover opacity-20" />
        </motion.div>
      ))}
    </div>
  );
}

// A small, fixed subset of services — enough to hint at the range of work
// without crowding the hero. Pulled from the services data so the labels
// stay correct if a service is ever renamed.
const HERO_TAG_SLUGS = ["videography", "photography", "audio", "lighting"] as const;

function serviceName(slug: string) {
  return services.find((s) => s.slug === slug)?.name ?? slug;
}

const tags = [
  { label: serviceName(HERO_TAG_SLUGS[0]), className: "left-[6%] top-[22%] hidden lg:block", delay: "0s" },
  { label: serviceName(HERO_TAG_SLUGS[1]), className: "right-[6%] top-[30%] hidden lg:block", delay: "1.8s" },
  { label: serviceName(HERO_TAG_SLUGS[2]), className: "left-[10%] bottom-[18%] hidden lg:block", delay: "3.5s" },
  { label: serviceName(HERO_TAG_SLUGS[3]), className: "right-[9%] bottom-[24%] hidden lg:block", delay: "5.2s" },
];

export default function Hero({ slides = [] }: { slides?: string[] }) {
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
      ) : HERO_MEDIA_TYPE === "slideshow" ? (
        slides.length > 0 && <HeroSlideshow slides={slides} />
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
          style={{ animationDelay: tag.delay }}
          className={`absolute z-10 animate-float rounded border border-dashed border-paper/20 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-fog motion-reduce:animate-none ${tag.className}`}
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
