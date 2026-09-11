import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { about, doctor, contact, credentials } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Portrait } from "@/components/Portrait";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Προφίλ",
  description: about.lead,
  alternates: { canonical: "/profil" },
};

export default function ProfilPage() {
  return (
    <>
      <PageHero title={about.heading} lead={about.lead} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Portrait priority />
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-8 flex flex-col gap-5 text-[15px]">
                <div>
                  <dt className="text-[13px] tracking-[0.12em] text-muted uppercase">
                    Ονοματεπώνυμο
                  </dt>
                  <dd className="mt-1.5 text-ink">
                    {doctor.name}, {doctor.credentials}
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] tracking-[0.12em] text-muted uppercase">
                    Ειδικότητα
                  </dt>
                  <dd className="mt-1.5 text-ink">{doctor.role}</dd>
                </div>
                <div>
                  <dt className="text-[13px] tracking-[0.12em] text-muted uppercase">
                    Ημερομηνία γέννησης
                  </dt>
                  <dd className="mt-1.5 text-ink">{doctor.born}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="mb-7 max-w-[66ch] text-[17px] leading-relaxed text-muted lg:text-[18px]">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <a
                href={contact.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {about.videoLinkLabel}
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item, i) => (
            <Reveal as="li" key={item.value} delay={i * 0.07}>
              <p className="font-display text-3xl font-extrabold tracking-tight text-accent">
                {item.value}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {item.label}
              </p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/spoudes"
              className="rounded-full border border-line px-6 py-3 text-[15px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Σπουδές και ειδίκευση
            </Link>
            <Link
              href="/empeiria"
              className="rounded-full border border-line px-6 py-3 text-[15px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Εργασιακή εμπειρία
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
