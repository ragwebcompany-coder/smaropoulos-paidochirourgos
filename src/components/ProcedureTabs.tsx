"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { procedures } from "@/lib/content";

// Οι λίστες είναι μεγάλες, οπότε χωρίζονται σε καρτέλες και εμφανίζονται ως
// ετικέτες, όχι ως κουκκίδες με γραμμή κάτω από κάθε σειρά.
export function ProcedureTabs() {
  type TierId = (typeof procedures.tiers)[number]["id"];
  const [active, setActive] = useState<TierId>(procedures.tiers[0].id);
  const reduce = useReducedMotion();
  const tier = procedures.tiers.find((t) => t.id === active)!;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Κατηγορίες επεμβάσεων"
        className="flex flex-wrap gap-2"
      >
        {procedures.tiers.map((t) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              id={t.id}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`relative scroll-mt-28 rounded-full px-5 py-3 text-[14px] font-medium transition-colors lg:text-[15px] ${
                selected
                  ? "text-on-accent"
                  : "border border-line text-muted hover:border-accent hover:text-ink"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="tier-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 320, damping: 32 }
                  }
                />
              )}
              <span className="relative">{t.name}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tier.id}
          id={`panel-${tier.id}`}
          role="tabpanel"
          aria-labelledby={tier.id}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <p className="max-w-[62ch] text-[16px] leading-relaxed text-muted lg:text-[17px]">
            {tier.summary}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {tier.items.map((item, i) => (
              <motion.li
                key={item}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: reduce ? 0 : i * 0.035,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-full border border-line bg-surface px-5 py-3 text-[14px] text-ink transition-colors hover:border-accent lg:text-[15px]"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
