import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { about, procedures, focusProcedures } from "@/lib/content";
import { HomeHero } from "@/components/HomeHero";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { Portrait } from "@/components/Portrait";
import { ProcedureIndex } from "@/components/ProcedureIndex";
import { ContactBand } from "@/components/ContactBand";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CredentialsStrip />

      {/* Ασύμμετρη διχοτόμηση: η μοναδική ενότητα εικόνας και κειμένου. */}
      <Section id="profil">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <Portrait />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="max-w-[15ch] font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-balance text-ink md:text-4xl lg:text-5xl">
                {about.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-[60ch] text-[17px] leading-relaxed text-muted lg:text-[18px]">
                {about.paragraphs[2]}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link
                href="/profil"
                className="group mt-9 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-accent-soft lg:min-h-0"
              >
                Το προφίλ του ιατρού
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Ευρετήριο πλήρους πλάτους. */}
      <Section id="epemvaseis" className="border-t border-line bg-surface">
        <Reveal>
          <h2 className="max-w-[14ch] font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-balance text-ink md:text-4xl lg:text-5xl">
            {procedures.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-muted">
            {procedures.intro}
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-14">
            <ProcedureIndex />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-12 text-[13px] tracking-[0.12em] text-muted uppercase">
            Συχνές αναζητήσεις
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {focusProcedures.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/epemvaseis#${item.id}`}
                  className="inline-block rounded-full border border-line bg-ground px-5 py-2.5 text-[14px] text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <ContactBand />
    </>
  );
}
