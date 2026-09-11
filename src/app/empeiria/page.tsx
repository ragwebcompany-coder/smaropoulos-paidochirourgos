import type { Metadata } from "next";
import { experience, otherRoles } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Εργασιακή εμπειρία",
  description:
    "Δεκαπέντε χρόνια στην Παιδοχειρουργική Κλινική του «Ιπποκρατείου» Θεσσαλονίκης με τον βαθμό του Διευθυντή ΕΣΥ, και από το 2018 στην κλινική «Άγιος Λουκάς».",
  alternates: { canonical: "/empeiria" },
};

export default function EmpeiriaPage() {
  return (
    <>
      <PageHero
        title="Είκοσι πέντε χρόνια στο χειρουργείο."
        lead="Από το ιδιωτικό ιατρείο στο «Ιπποκράτειο» και από εκεί στην κλινική «Άγιος Λουκάς», με σταθερό αντικείμενο την παιδοχειρουργική και την παιδοουρολογία."
      />

      <Section>
        <Timeline entries={experience} />
      </Section>

      <Section className="border-t border-line bg-surface">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink lg:text-3xl">
            Παράλληλες θέσεις
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-x-16 gap-y-10 sm:grid-cols-2">
          {otherRoles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.07}>
              <h3 className="font-display text-lg font-bold text-accent">
                {role.title}
              </h3>
              <p className="mt-2.5 max-w-[52ch] text-[16px] leading-relaxed text-muted">
                {role.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
