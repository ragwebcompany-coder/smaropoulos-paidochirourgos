import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { contact, cta } from "@/lib/content";
import { Reveal } from "./Reveal";

// Ζώνη πλήρους πλάτους με εικόνα φόντου, διαφορετική σύνθεση από τις
// υπόλοιπες ενότητες της αρχικής.
export function ContactBand() {
  return (
    <section className="relative overflow-hidden border-y border-line">
      <Image
        src="/photos/consultation-room.jpg"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,13,22,0.97)_0%,rgba(7,13,22,0.88)_45%,rgba(7,13,22,0.55)_100%)]"
      />
      <div className="relative mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-balance text-ink md:text-4xl lg:text-5xl">
            Το ιατρείο, στο κέντρο της Θεσσαλονίκης.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:max-w-[70%] lg:grid-cols-3">
            <div>
              <dt className="text-[13px] tracking-[0.12em] text-muted uppercase">
                Διεύθυνση
              </dt>
              <dd className="mt-3 text-[17px] leading-relaxed text-ink">
                {contact.address.street}
                <br />
                {contact.address.postal}, {contact.address.city}
              </dd>
            </div>
            <div>
              <dt className="text-[13px] tracking-[0.12em] text-muted uppercase">
                Ώρες ιατρείου
              </dt>
              <dd className="mt-3 text-[17px] leading-relaxed text-ink">
                {contact.hours.days}
                <br />
                {contact.hours.time}
              </dd>
            </div>
            <div>
              <dt className="text-[13px] tracking-[0.12em] text-muted uppercase">
                {contact.clinic.name}
              </dt>
              <dd className="mt-3 text-[17px] leading-relaxed text-ink">
                {contact.clinic.area}
                <br />
                {contact.clinic.note}
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={0.16}>
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
      </div>
    </section>
  );
}
