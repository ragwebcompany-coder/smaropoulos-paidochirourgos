import type { Metadata } from "next";
import { procedures } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ProcedureTabs } from "@/components/ProcedureTabs";

export const metadata: Metadata = {
  title: "Επεμβάσεις",
  description:
    "Παιδοχειρουργικές και παιδοουρολογικές επεμβάσεις όλου του φάσματος βαρύτητας, από τη σκωληκοειδεκτομή και την κρυψορχία έως τη χειρουργική παιδοογκολογία.",
  alternates: { canonical: "/epemvaseis" },
};

export default function EpemvaseisPage() {
  return (
    <>
      <PageHero title={procedures.heading} lead={procedures.intro} />
      <Section>
        <ProcedureTabs />
      </Section>
    </>
  );
}
