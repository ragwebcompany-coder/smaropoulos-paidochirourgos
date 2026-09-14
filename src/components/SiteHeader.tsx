"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { List, X, Phone } from "@phosphor-icons/react";
import { nav, cta, contact } from "@/lib/content";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const reduce = useReducedMotion();

  // IntersectionObserver σε φρουρό στην κορυφή, αντί για ακροατή κύλισης.
  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;";
    document.body.appendChild(sentinel);
    const io = new IntersectionObserver(
      ([entry]) => setLifted(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(sentinel);
    return () => {
      io.disconnect();
      sentinel.remove();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        lifted || open
          ? "border-b border-line bg-ground/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8">
        <Wordmark compact />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Κύρια πλοήγηση">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[14px] transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.href === pathname && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 320, damping: 32 }
                    }
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-[14px] text-ink transition-colors hover:border-accent hover:text-accent sm:flex xl:hidden 2xl:flex"
          >
            <Phone size={16} weight="regular" />
            {contact.phonePretty}
          </a>
          <Link
            href={cta.href}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[14px] font-semibold whitespace-nowrap text-on-accent transition-transform duration-200 hover:bg-accent-soft active:translate-y-px xl:block"
          >
            {cta.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink xl:hidden"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-ground/95 backdrop-blur-xl xl:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5 sm:px-8">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-4 py-3 text-[16px] ${
                    pathname === item.href
                      ? "bg-surface-2 text-ink"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={cta.href}
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-accent px-5 py-3 text-center text-[15px] font-semibold text-on-accent"
              >
                {cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
