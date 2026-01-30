import type { Metadata } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import siteConfig from "@/../site-config.json";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "600", "700"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.meta.lang}
      dir={siteConfig.meta.dir}
      suppressHydrationWarning
    >
      <body
        className={`${cairo.variable} ${ibmPlexSansArabic.variable} font-body bg-background_primary text-text_primary antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
