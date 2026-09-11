"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import { cta, contact } from "@/lib/content";
import { Caduceus } from "./Caduceus";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Παράλλαξη συνδεδεμένη με την κύλιση μέσω τιμών κίνησης, εκτός κύκλου
  // απόδοσης του React.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      <motion.div
        style={reduce ? undefined : { y: videoY }}
        className="absolute inset-0 -z-10 h-[116%]"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Σκίαστρο: κρατά το κείμενο αναγνώσιμο πάνω από το βίντεο. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,13,22,0.92)_0%,rgba(7,13,22,0.72)_40%,rgba(7,13,22,0.22)_74%,rgba(7,13,22,0.48)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-[linear-gradient(to_top,var(--color-ground),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(to_bottom,rgba(7,13,22,0.9),transparent)]"
      />

      {/* Το σήμα του ιατρού, αποκαλύπτεται σαν κουρτίνα από κάτω προς τα πάνω. */}
      <motion.div
        aria-hidden
        initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
        animate={{ clipPath: "inset(0% 0 0 0)", opacity: 0.13 }}
        transition={{
          duration: reduce ? 0 : 1.8,
          delay: reduce ? 0 : 0.35,
          ease,
        }}
        className="pointer-events-none absolute top-1/2 right-[4%] hidden -translate-y-1/2 lg:block"
      >
        <Caduceus className="h-[56vh] max-h-[560px] w-auto text-accent-soft" />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-[1320px] px-5 pt-24 pb-20 sm:px-8 lg:pb-28"
      >
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.9,
            delay: reduce ? 0 : 0.15,
            ease,
          }}
          className="max-w-[15ch] font-display text-4xl leading-[1.02] font-extrabold tracking-tight text-balance text-ink md:text-5xl lg:text-[68px]"
        >
          Παιδοχειρουργική και Παιδοουρολογία
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.9,
            delay: reduce ? 0 : 0.32,
            ease,
          }}
          className="mt-7 max-w-[46ch] text-[17px] leading-relaxed text-muted lg:text-[19px]"
        >
          Δρ. Ελευθέριος Σμαρόπουλος, MD, PhD. Χειρουργός Παίδων στη
          Θεσσαλονίκη, με 25 χρόνια εμπειρίας από τη νεογνική έως την εφηβική
          ηλικία.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.9,
            delay: reduce ? 0 : 0.46,
            ease,
          }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href={cta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-on-accent transition-colors duration-200 hover:bg-accent-soft active:translate-y-px"
          >
            {cta.label}
            <ArrowRight
              size={17}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ground/60 px-7 py-3.5 text-[15px] font-medium whitespace-nowrap text-ink backdrop-blur-sm transition-colors duration-200 hover:border-accent hover:text-accent active:translate-y-px"
          >
            <Phone size={17} weight="regular" />
            {contact.phonePretty}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
