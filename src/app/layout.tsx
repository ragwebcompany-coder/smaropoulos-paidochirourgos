import type { Metadata } from "next";
import { Manrope, Commissioner } from "next/font/google";
import { seo, doctor, contact, focusProcedures } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

// Και οι δύο οικογένειες έχουν πραγματικό ελληνικό subset.
const manrope = Manrope({
  subsets: ["greek", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

const commissioner = Commissioner({
  subsets: ["greek", "latin"],
  variable: "--font-commissioner",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.description,
  keywords: [
    "παιδοχειρουργός Θεσσαλονίκη",
    "παιδοουρολόγος Θεσσαλονίκη",
    "χειρουργός παίδων",
    ...focusProcedures.map((p) => p.name),
  ],
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    url: seo.url,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: `${doctor.fullName}, ${doctor.credentials}`,
  medicalSpecialty: ["PediatricSurgery", "Urologic"],
  description: seo.description,
  url: seo.url,
  telephone: `+30${contact.phone}`,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    postalCode: contact.address.postal,
    addressLocality: contact.address.city,
    addressCountry: "GR",
  },
  sameAs: contact.social.map((s) => s.href),
  openingHours: "Mo,We,Fr 18:00-21:00",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" className={`${manrope.variable} ${commissioner.variable}`}>
      <head>
        <noscript>
          {/* Χωρίς JavaScript οι αποκαλύψεις κύλισης δεν τρέχουν ποτέ, οπότε
              το περιεχόμενο πρέπει να επιστρέψει σε πλήρη ορατότητα. */}
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="grain min-h-[100dvh] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-accent"
        >
          Στο περιεχόμενο
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
