import Link from "next/link";
import { Caduceus } from "./Caduceus";
import { doctor } from "@/lib/content";

// Ανακατασκευή του lockup του λογοτύπου: το κηρύκειο σε κυανό, ο λεκτικός
// τύπος σε ζωντανό κείμενο, ώστε να παραμένει ευκρινές και αναγνώσιμο.
export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex min-h-[44px] items-center gap-3"
      aria-label={`${doctor.fullName}, αρχική σελίδα`}
    >
      <Caduceus
        className={`${
          compact ? "h-8" : "h-10"
        } w-auto text-accent transition-transform duration-500 ease-out group-hover:-translate-y-0.5`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight text-ink ${
            compact ? "text-[15px]" : "text-[17px]"
          }`}
        >
          ΣΜΑΡΟΠΟΥΛΟΣ
        </span>
        <span
          className={`font-display font-extrabold tracking-tight text-ink ${
            compact ? "text-[15px]" : "text-[17px]"
          }`}
        >
          ΕΛΕΥΘΕΡΙΟΣ
        </span>
      </span>
    </Link>
  );
}
