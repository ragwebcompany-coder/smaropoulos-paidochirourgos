"use client";

import { useState } from "react";
import { Copy, Check } from "@phosphor-icons/react";

// Ανατροφοδότηση σε μία ενέργεια: αντιγραφή, επιβεβαίωση, επαναφορά.
export function CopyField({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("error");
    }
    window.setTimeout(() => setState("idle"), 2200);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Αντιγραφή: ${label}`}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] text-muted transition-colors hover:border-accent hover:text-accent active:translate-y-px lg:min-h-0"
    >
      {state === "copied" ? (
        <>
          <Check size={14} weight="bold" className="text-accent" />
          Αντιγράφηκε
        </>
      ) : state === "error" ? (
        <>Αντιγράψτε το χειροκίνητα</>
      ) : (
        <>
          <Copy size={14} />
          Αντιγραφή
        </>
      )}
    </button>
  );
}
