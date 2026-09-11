import { Caduceus } from "./Caduceus";
import { Reveal } from "./Reveal";

// Κεφαλίδα εσωτερικής σελίδας. Το κηρύκειο του λογοτύπου λειτουργεί ως
// υδατογράφημα, ώστε κάθε σελίδα να κουβαλά το σήμα του ιατρείου.
export function PageHero({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-[128px] pb-16 lg:pt-[168px] lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-16 h-[420px] w-auto opacity-[0.055] sm:-right-6"
      >
        <Caduceus className="h-full w-auto text-accent" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_10%_0%,rgba(38,173,228,0.14),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal onMount>
          <h1 className="max-w-[16ch] font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance text-ink md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal onMount delay={0.1}>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-muted lg:text-[18px]">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
