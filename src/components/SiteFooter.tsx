import Link from "next/link";
import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { contact, nav, doctor } from "@/lib/content";
import { Caduceus } from "./Caduceus";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Caduceus className="h-12 w-auto text-accent" />
            <p className="mt-6 font-display text-[22px] font-extrabold tracking-tight text-ink">
              {doctor.fullName}
            </p>
            <p className="mt-1 text-[15px] text-muted">
              {doctor.role}, {doctor.credentials}
            </p>
          </div>

          <div>
            <p className="font-display text-[13px] font-bold tracking-[0.14em] text-muted uppercase">
              Ιατρείο
            </p>
            <ul className="mt-3 flex flex-col text-[15px]">
              <li>
                <a
                  href={contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center gap-3 py-1 text-ink transition-colors hover:text-accent lg:min-h-0"
                >
                  <MapPin size={18} className="shrink-0 text-accent" />
                  {contact.address.full}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex min-h-[44px] items-center gap-3 py-1 text-ink transition-colors hover:text-accent lg:min-h-0"
                >
                  <Phone size={18} className="shrink-0 text-accent" />
                  {contact.phonePretty}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex min-h-[44px] items-center gap-3 py-1 break-all text-ink transition-colors hover:text-accent lg:min-h-0"
                >
                  <EnvelopeSimple size={18} className="shrink-0 text-accent" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.emailAlt}`}
                  className="flex min-h-[44px] items-center gap-3 py-1 break-all text-ink transition-colors hover:text-accent lg:min-h-0"
                >
                  <EnvelopeSimple size={18} className="shrink-0 text-accent" />
                  {contact.emailAlt}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-[13px] font-bold tracking-[0.14em] text-muted uppercase">
              Πλοήγηση
            </p>
            <ul className="mt-3 flex flex-col text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-muted transition-colors hover:text-ink lg:min-h-0 lg:py-1.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-5 text-[14px]">
              {contact.social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center text-muted transition-colors hover:text-accent lg:min-h-0"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {doctor.fullName}. Με επιφύλαξη
            παντός δικαιώματος.
          </p>
          <p>
            Οι πληροφορίες του site είναι ενημερωτικές και δεν υποκαθιστούν την
            ιατρική εξέταση.
          </p>
        </div>
      </div>
    </footer>
  );
}
