import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cases, cta } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CaseImage } from "@/components/CaseImage";

export const metadata: Metadata = {
  title: "Περιστατικά",
  description:
    "Περιστατικά παιδοχειρουργικής και παιδοουρολογίας από τον Δρ. Ελευθέριο Σμαρόπουλο: συστροφή όρχεως, λαπαροσκοπική νεφρεκτομή, λιποβλάστωμα του προσθίου θωρακικού τοιχώματος και αφαίρεση κυστικού όγκου ωοθήκης σε παιδί.",
  keywords: cases.map((c) => c.title),
  alternates: { canonical: "/peristatika" },
};

export default function PeristatikaPage() {
  return (
    <>
      <PageHero
        title="Περιστατικά"
        lead="Επιλεγμένα περιστατικά από το χειρουργείο. Οι φωτογραφίες είναι χειρουργικές και εμφανίζονται μόνο αν το επιλέξετε."
      />

      {cases.map((c, i) => (
        <Section
          key={c.id}
          id={c.id}
          className={i % 2 === 1 ? "border-t border-line bg-surface" : ""}
        >
          <Reveal>
            <h2 className="max-w-[30ch] font-display text-2xl leading-[1.15] font-extrabold tracking-tight text-balance text-ink md:text-3xl lg:text-4xl">
              {c.title}
            </h2>
          </Reveal>

          {c.paragraphs.length > 0 ? (
            <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
              <Reveal>
                {c.textLabel && (
                  <p className="font-display text-lg font-bold text-ink">
                    {c.textLabel}
                  </p>
                )}
                {c.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-muted"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
              <Reveal delay={0.08}>
                {c.images.map((img) => (
                  <CaseImage key={img.src} {...img} />
                ))}
              </Reveal>
            </div>
          ) : (
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {c.images.map((img, j) => (
                <Reveal key={img.src} delay={j * 0.08}>
                  <CaseImage {...img} />
                </Reveal>
              ))}
            </div>
          )}
        </Section>
      ))}

      <Section className="border-t border-line">
        <Reveal>
          <Link
            href={cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-on-accent transition-colors duration-200 hover:bg-accent-soft active:translate-y-px"
          >
            {cta.label}
            <ArrowRight
              size={17}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
