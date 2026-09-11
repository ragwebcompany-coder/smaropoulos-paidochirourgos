"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// Μία αποκάλυψη, μία φορά, όταν το στοιχείο μπαίνει στο πεδίο. Δηλώνει
// ιεραρχία ανάγνωσης, δεν είναι διακοσμητικός βρόχος.
//
// Η αρχική κατάσταση δηλώνεται ΠΑΝΤΑ, ώστε ο server και ο client να
// συμφωνούν. Η μειωμένη κίνηση δεν αλλάζει την αρχική κατάσταση, μηδενίζει
// τη διάρκεια: το περιεχόμενο εμφανίζεται ακαριαία, χωρίς μετατόπιση, και
// ποτέ δεν μένει κολλημένο στο opacity 0.
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  onMount = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
  onMount?: boolean;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const shown = { opacity: 1, y: 0 };

  return (
    <Tag
      initial={{ opacity: 0, y: 22 }}
      // Πάνω από το πτυσσόμενο όριο δεν περιμένουμε observer: ξεκινά αμέσως.
      {...(onMount
        ? { animate: shown }
        : { whileInView: shown, viewport: { once: true, amount: 0.2 } })}
      transition={{
        duration: reduce ? 0 : 0.7,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
