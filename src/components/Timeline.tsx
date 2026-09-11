"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

type Entry = {
  period: string;
  title: string;
  role?: string;
  body: string;
};

// Η κάθετη γραμμή σχεδιάζεται όσο κυλά η σελίδα. Είναι χρονολογική αφήγηση,
// οπότε η κίνηση δείχνει την πρόοδο μέσα στον χρόνο.
export function Timeline({ entries }: { entries: readonly Entry[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ol ref={ref} className="relative pl-8 sm:pl-12">
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[5px] w-px bg-line sm:left-[9px]"
      />
      <motion.div
        aria-hidden
        style={reduce ? { scaleY: 1 } : { scaleY }}
        className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-accent sm:left-[9px]"
      />

      {entries.map((entry) => (
        <motion.li
          key={entry.period + entry.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduce ? 0 : 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative pb-12 last:pb-0"
        >
          <span
            aria-hidden
            className="absolute top-[9px] -left-8 h-[11px] w-[11px] rounded-full border-2 border-accent bg-ground sm:-left-12 sm:h-[19px] sm:w-[19px] sm:border-[3px]"
          />
          <p className="font-display text-[13px] font-bold tracking-[0.14em] text-accent uppercase">
            {entry.period}
          </p>
          <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink lg:text-2xl">
            {entry.title}
          </h3>
          {entry.role && (
            <p className="mt-1.5 text-[15px] text-accent-soft">{entry.role}</p>
          )}
          <p className="mt-3 max-w-[68ch] text-[16px] leading-relaxed text-muted">
            {entry.body}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
