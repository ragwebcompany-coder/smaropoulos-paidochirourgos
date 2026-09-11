import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-[1320px]">{children}</div>
    </section>
  );
}
