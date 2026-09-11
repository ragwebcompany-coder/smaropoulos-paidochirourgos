import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { procedures } from "@/lib/content";

// Ευρετήριο πλήρους πλάτους αντί για τρεις ίδιες κάρτες. Η γραμμή γεμίζει με
// κυανό όταν ο δείκτης την ακουμπά, δηλώνοντας ότι είναι σύνδεσμος. Καθαρό
// CSS: δεν χρειάζεται JavaScript για μια κατάσταση hover.
export function ProcedureIndex() {
  return (
    <ul className="border-t border-line">
      {procedures.tiers.map((tier) => (
        <li key={tier.id} className="border-b border-line">
          <Link
            href={`/epemvaseis#${tier.id}`}
            className="group relative flex flex-col gap-4 overflow-hidden px-1 py-8 lg:flex-row lg:items-center lg:gap-10 lg:px-6 lg:py-11"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(38,173,228,0.16),transparent_70%)] opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
            />
            <span className="relative flex flex-1 flex-col gap-2 pr-16 lg:pr-0">
              <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-2xl font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent lg:text-[32px]">
                  {tier.name}
                </span>
                <span className="text-[13px] text-muted">
                  {tier.items.length} επεμβάσεις
                </span>
              </span>
              <span className="max-w-[62ch] text-[15px] leading-relaxed text-muted lg:text-[16px]">
                {tier.summary}
              </span>
            </span>
            <span className="absolute top-7 right-0 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent lg:relative lg:top-auto lg:right-auto">
              <ArrowUpRight
                size={18}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
