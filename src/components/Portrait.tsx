"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// Ήπια παράλλαξη: δίνει βάθος στη φωτογραφία χωρίς να την κουνά αισθητά.
export function Portrait({ priority = false }: { priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className="relative aspect-[6/7] w-full overflow-hidden rounded-[16px] border border-line bg-surface"
    >
      <motion.div style={reduce ? undefined : { y }} className="absolute inset-0 h-[112%] -top-[6%]">
        <Image
          src="/photos/portrait.jpg"
          alt="Ο Δρ. Ελευθέριος Σμαρόπουλος στο ιατρείο του στη Θεσσαλονίκη"
          fill
          sizes="(max-width: 1024px) 100vw, 44vw"
          priority={priority}
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,13,22,0.72),rgba(7,13,22,0.06)_52%,transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-soft-light bg-[linear-gradient(140deg,rgba(38,173,228,0.35),transparent_60%)]"
      />
    </div>
  );
}
