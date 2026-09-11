import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { paidoourologia, seo, doctor, cta } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Παιδοουρολογία",
  description:
    "Παιδοουρολογία στη Θεσσαλονίκη. Κρυψορχία, υποσπαδίας, φίμωση, υδροκήλη, κυστεοουρητηρική παλινδρόμηση και αποφρακτικές παθήσεις του νεφρού, από τον Δρ. Ελευθέριο Σμαρόπουλο, MD, PhD, με μετεκπαίδευση στο Royal Children's Hospital της Μελβούρνης.",
  keywords: [
    "παιδοουρολογία",
    "παιδοουρολόγος Θεσσαλονίκη",
    ...paidoourologia.conditions.map((c) => c.name),
  ],
  alternates: { canonical: "/paidoourologia" },
};

const specialtySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Παιδοουρολογία",
  description: paidoourologia.lead,
  url: `${seo.url}/paidoourologia`,
  about: {
    "@type": "MedicalSpecialty",
    name: "Pediatric Urology",
  },
  author: {
    "@type": "Physician",
    name: `${doctor.fullName}, ${doctor.credentials}`,
    url: seo.url,
  },
};

export default function PaidoourologiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtySchema) }}
      />
      <PageHero title={paidoourologia.title} lead={paidoourologia.lead} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl leading-[1.1] font-extrabold tracking-tight text-ink lg:text-3xl">
              Η εκπαίδευση
            </h2>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-muted">
              {paidoourologia.training}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl leading-[1.1] font-extrabold tracking-tight text-ink lg:text-3xl">
              Η προσέγγιση
            </h2>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-muted">
              {paidoourologia.approach}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <Reveal>
          <h2 className="max-w-[24ch] font-display text-2xl leading-[1.1] font-extrabold tracking-tight text-balance text-ink md:text-3xl lg:text-4xl">
            Παθήσεις που αντιμετωπίζονται
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-16 sm:grid-cols-2">
          {paidoourologia.conditions.map((c, i) => (
            <Reveal
              as="li"
              key={c.name}
              delay={(i % 2) * 0.05}
              className="border-t border-line"
            >
              {c.anchor ? (
                <Link
                  href={`/epemvaseis#${c.anchor}`}
                  className="group flex items-center justify-between gap-6 py-6"
                >
                  <span className="font-display text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-accent lg:text-xl">
                    {c.name}
                  </span>
                  <ArrowRight
                    size={17}
                    weight="bold"
                    className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </Link>
              ) : (
                <span className="block py-6 font-display text-lg font-bold tracking-tight text-ink lg:text-xl">
                  {c.name}
                </span>
              )}
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.2}>
          <Link
            href={cta.href}
            className="group mt-14 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-on-accent transition-colors duration-200 hover:bg-accent-soft active:translate-y-px"
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
