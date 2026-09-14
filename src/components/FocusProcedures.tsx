import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { focusProcedures } from "@/lib/content";
import { Reveal } from "./Reveal";

// Οι επεμβάσεις για τις οποίες ο ιατρός ζήτησε να τον βρίσκουν. Πλέγμα
// ορισμών με λεπτή γραμμή πάνω από κάθε εγγραφή: δική του σύνθεση, ώστε να
// μην επαναλαμβάνει ούτε τις ετικέτες των καρτελών ούτε το ευρετήριο της
// αρχικής. Κάθε τίτλος είναι h3 με σταθερή αγκύρωση, ώστε να είναι
// σελιδοδείκτης και να διαβάζεται από τις μηχανές αναζήτησης.
export function FocusProcedures() {
  return (
    <ul className="grid gap-x-16 gap-y-0 sm:grid-cols-2">
      {focusProcedures.map((item, i) => (
        <Reveal
          as="li"
          key={item.id}
          delay={(i % 2) * 0.06}
          className="border-t border-line py-8 lg:py-10"
        >
          <h3
            id={item.id}
            className="scroll-mt-28 font-display text-xl font-extrabold tracking-tight text-ink lg:text-[22px]"
          >
            {item.name}
          </h3>
          <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-muted lg:text-[16px]">
            {item.body}
          </p>
          {"caseHref" in item && (
            <Link
              href={item.caseHref}
              className="group mt-4 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-accent-soft lg:min-h-0"
            >
              Δείτε περιστατικό
              <ArrowRight
                size={15}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          )}
        </Reveal>
      ))}
    </ul>
  );
}
