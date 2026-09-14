"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

// Χειρουργικές φωτογραφίες: θολές μέχρι να τις ζητήσει ο επισκέπτης, ώστε ένας
// γονιός που διαβάζει για μια πάθηση να μην πέφτει ξαφνικά πάνω τους.
export function CaseImage({
  src,
  alt,
  label,
  width,
  height,
}: {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}) {
  const [shown, setShown] = useState(false);

  return (
    <figure>
      <div className="relative overflow-hidden rounded-[16px] border border-line bg-surface">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`h-auto w-full transition-[filter,transform] duration-500 ease-out motion-reduce:transition-none ${
            shown ? "" : "scale-110 blur-2xl brightness-50"
          }`}
        />
        {!shown && (
          <button
            type="button"
            onClick={() => setShown(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/30 bg-ground/60 text-ink backdrop-blur-sm">
              <Eye size={20} />
            </span>
            <span className="text-[15px] font-semibold text-ink">
              Χειρουργική εικόνα
            </span>
            <span className="text-[13px] text-ink/75">Πατήστε για εμφάνιση</span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-[14px] text-muted">
        <span className="font-display font-bold text-ink">{label}</span>
        {shown && (
          <button
            type="button"
            onClick={() => setShown(false)}
            className="inline-flex min-h-[44px] items-center gap-1.5 transition-colors hover:text-accent lg:min-h-0"
          >
            <EyeSlash size={15} />
            Απόκρυψη
          </button>
        )}
      </figcaption>
    </figure>
  );
}
