import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CopyField } from "@/components/CopyField";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: `Ιατρείο: ${contact.address.full}. Τηλέφωνο ${contact.phonePretty}. ${contact.hours.days}, ${contact.hours.time}. Καθημερινά στην κλινική «Άγιος Λουκάς», Πανόραμα Θεσσαλονίκης.`,
  alternates: { canonical: "/epikoinonia" },
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  "Δημητρίου Γούναρη 31, 54622 Θεσσαλονίκη"
)}&hl=el&z=16&output=embed`;

export default function EpikoinoniaPage() {
  return (
    <>
      <PageHero
        title="Κλείστε ραντεβού."
        lead="Το ιατρείο λειτουργεί Δευτέρα, Τετάρτη και Παρασκευή τα απογεύματα. Για τα υπόλοιπα ραντεβού και τα χειρουργεία, στην κλινική «Άγιος Λουκάς»."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div className="flex flex-col gap-10">
            <Reveal>
              <div>
                <p className="flex items-center gap-2.5 text-[13px] tracking-[0.12em] text-muted uppercase">
                  <Phone size={15} className="text-accent" />
                  Τηλέφωνο
                </p>
                <a
                  href={contact.phoneHref}
                  className="mt-3 block py-1 font-display text-3xl font-extrabold tracking-tight text-ink transition-colors hover:text-accent lg:text-4xl"
                >
                  {contact.phonePretty}
                </a>
                <div className="mt-4">
                  <CopyField value={contact.phone} label="τηλέφωνο" />
                </div>
                <p className="mt-6 text-[14px] text-muted">
                  Τηλέφωνα κλινικής
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-2.5">
                  {contact.clinicPhones.map((p) => (
                    <li key={p.href}>
                      <a
                        href={p.href}
                        className="inline-flex min-h-[44px] items-center rounded-full border border-line px-5 text-[14px] text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        {p.pretty}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.07}>
              <div>
                <p className="flex items-center gap-2.5 text-[13px] tracking-[0.12em] text-muted uppercase">
                  <EnvelopeSimple size={15} className="text-accent" />
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-3 block break-all font-display text-xl font-bold tracking-tight text-ink transition-colors hover:text-accent lg:text-2xl"
                >
                  {contact.email}
                </a>
                <div className="mt-4">
                  <CopyField value={contact.email} label="email" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div>
                <p className="flex items-center gap-2.5 text-[13px] tracking-[0.12em] text-muted uppercase">
                  <Clock size={15} className="text-accent" />
                  Ωράριο
                </p>
                <p className="mt-3 text-[18px] leading-relaxed text-ink">
                  {contact.hours.days}
                  <br />
                  {contact.hours.time}
                </p>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-muted">
                  {contact.hours.note}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.21}>
              <div>
                <p className="flex items-center gap-2.5 text-[13px] tracking-[0.12em] text-muted uppercase">
                  <MapPin size={15} className="text-accent" />
                  Διευθύνσεις
                </p>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[17px] leading-relaxed text-ink">
                      {contact.address.street}
                      <br />
                      {contact.address.postal}, {contact.address.city}
                    </p>
                    <a
                      href={contact.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-1 inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-medium text-accent hover:text-accent-soft lg:mt-2.5 lg:min-h-0"
                    >
                      Οδηγίες
                      <ArrowUpRight
                        size={14}
                        weight="bold"
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                  <div>
                    <p className="text-[17px] leading-relaxed text-ink">
                      {contact.clinic.name}
                      <br />
                      {contact.clinic.area}
                    </p>
                    <a
                      href={contact.clinic.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-1 inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-medium text-accent hover:text-accent-soft lg:mt-2.5 lg:min-h-0"
                    >
                      Οδηγίες
                      <ArrowUpRight
                        size={14}
                        weight="bold"
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div>
                <p className="text-[13px] tracking-[0.12em] text-muted uppercase">
                  Social media
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {contact.social.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[14px] text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        {s.label}
                        <ArrowUpRight size={13} weight="bold" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[16px] border border-line bg-surface">
              <iframe
                src={mapSrc}
                title={`Χάρτης: ${contact.address.full}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // Ο χάρτης της Google έρχεται μόνο σε ανοιχτό θέμα. Το
                // φίλτρο τον φέρνει στο σκοτεινό θέμα της σελίδας, αντί να
                // ανοίγει μια λευκή τρύπα στη μέση.
                style={{
                  filter:
                    "invert(0.92) hue-rotate(188deg) saturate(0.7) brightness(0.95) contrast(0.92)",
                }}
                className="h-[420px] w-full border-0 lg:h-[560px]"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
