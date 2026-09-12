"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Media } from "@/components/ui/media";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export default function Gallery({ images, eventName }: { images: string[]; eventName: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((src, i) => (
          <RevealItem key={src}>
            <button
              onClick={() => setActiveIndex(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-line-soft"
            >
              <Media
                src={src}
                alt="{{ALT_TEXT}}"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-md"
            onClick={close}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper"
            >
              <X size={20} />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper sm:left-8"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper sm:right-8"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative mx-auto aspect-[4/3] w-[90vw] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Media src={images[activeIndex]} alt={`${eventName} — {{ALT_TEXT}}`} fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
