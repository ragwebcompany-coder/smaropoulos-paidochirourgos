import type { Metadata } from "next";
import { studies } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Σπουδές και ειδίκευση",
  description:
    "Πτυχίο Ιατρικής ΑΠΘ, τίτλος ειδικότητας Χειρουργικής Παίδων, διδακτορικό, μεταπτυχιακό στη Διοίκηση της Υγείας και μετεκπαιδεύσεις στη Μελβούρνη και τη Γερμανία.",
  alternates: { canonical: "/spoudes" },
};

export default function SpoudesPage() {
  return (
    <>
      <PageHero
        title="Πτυχία, ειδικότητα, μετεκπαιδεύσεις."
        lead="Η ακαδημαϊκή και κλινική εκπαίδευση του Δρ. Σμαρόπουλου, από το πτυχίο της Ιατρικής Σχολής του ΑΠΘ έως τις μετεκπαιδεύσεις στο εξωτερικό."
      />
      <Section>
        <Timeline entries={studies} />
      </Section>
    </>
  );
}
