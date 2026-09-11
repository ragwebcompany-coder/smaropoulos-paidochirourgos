import type { Metadata } from "next";
import { procedures, focusProcedures, seo, doctor } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ProcedureTabs } from "@/components/ProcedureTabs";
import { FocusProcedures } from "@/components/FocusProcedures";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Επεμβάσεις",
  description:
    "Λαπαροσκοπικές επεμβάσεις, κρυψορχία, βουβωνοκήλη, σκωληκοειδεκτομή, νεφρεκτομή, αποφρακτικές παθήσεις του νεφρού, φίμωση και υδροκήλη. Παιδοχειρουργικές και παιδοουρολογικές επεμβάσεις όλου του φάσματος βαρύτητας στη Θεσσαλονίκη.",
  keywords: focusProcedures.map((p) => p.name),
  alternates: { canonical: "/epemvaseis" },
};

// Οι οκτώ επεμβάσεις δηλώνονται και δομημένα, ώστε να τις διαβάσουν οι
// μηχανές αναζήτησης ως υπηρεσίες του συγκεκριμένου ιατρού.
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Παιδοχειρουργικές και παιδοουρολογικές επεμβάσεις",
  itemListElement: focusProcedures.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MedicalProcedure",
      name: p.name,
      description: p.body,
      url: `${seo.url}/epemvaseis#${p.id}`,
      provider: {
        "@type": "Physician",
        name: `${doctor.fullName}, ${doctor.credentials}`,
        url: seo.url,
      },
    },
  })),
};

export default function EpemvaseisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <PageHero title={procedures.heading} lead={procedures.intro} />

      <Section>
        <Reveal>
          <h2 className="max-w-[26ch] font-display text-2xl leading-[1.1] font-extrabold tracking-tight text-balance text-ink md:text-3xl lg:text-4xl">
            Οι επεμβάσεις που ρωτούν συχνότερα οι γονείς
          </h2>
        </Reveal>
        <div className="mt-12">
          <FocusProcedures />
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <Reveal>
          <h2 className="max-w-[26ch] font-display text-2xl leading-[1.1] font-extrabold tracking-tight text-balance text-ink md:text-3xl lg:text-4xl">
            Όλες οι επεμβάσεις, κατά βαρύτητα
          </h2>
        </Reveal>
        <div className="mt-12">
          <ProcedureTabs />
        </div>
      </Section>
    </>
  );
}
