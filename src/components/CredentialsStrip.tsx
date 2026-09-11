import { credentials } from "@/lib/content";
import { Reveal } from "./Reveal";

// Λεπτές γραμμές αντί για κάρτες: τα στοιχεία μιλούν μόνα τους.
export function CredentialsStrip() {
  return (
    <section className="border-b border-line bg-ground">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {credentials.map((item, i) => (
            <Reveal
              as="li"
              key={item.value}
              delay={i * 0.07}
              className="flex flex-col gap-3 py-9 lg:border-l lg:border-line lg:py-12 lg:pr-8 lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="font-display text-3xl font-extrabold tracking-tight text-accent lg:text-4xl">
                {item.value}
              </span>
              <span className="text-[15px] leading-relaxed text-muted">
                {item.label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
