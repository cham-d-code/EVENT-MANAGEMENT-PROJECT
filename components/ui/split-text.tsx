"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const word: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SplitWords({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      initial="hidden"
      animate="show"
      variants={container}
      className={`inline-flex flex-wrap justify-center ${className ?? ""}`}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} className="mr-[0.28em] overflow-hidden pb-[0.1em] last:mr-0">
          <motion.span className="inline-block" variants={word}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
