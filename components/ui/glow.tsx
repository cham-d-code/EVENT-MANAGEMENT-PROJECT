"use client";

import { motion, type MotionStyle } from "framer-motion";

export function GlowBlob({ className = "", style }: { className?: string; style?: MotionStyle }) {
  return (
    <motion.div
      aria-hidden
      style={style}
      className={`glow-ember pointer-events-none absolute rounded-full ${className}`}
    />
  );
}

export function DashedGrid({ className = "", cell = 120 }: { className?: string; cell?: number }) {
  return (
    <div
      aria-hidden
      className={`dashed-grid pointer-events-none absolute inset-0 opacity-60 ${className}`}
      style={{ ["--grid-cell" as string]: `${cell}px` }}
    />
  );
}
