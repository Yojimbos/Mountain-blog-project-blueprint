import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createMetadata } from "@/lib/metadata";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "cyrillic"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = createMetadata({
  title: "Гірський Блок",
  description:
    "Сучасна українська платформа про гірські маршрути, спорядження, безпеку, сезонність та практичну підготовку.",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body className={`${manrope.variable} ${notoSerif.variable} font-sans text-foreground antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

