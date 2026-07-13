import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FSB d.o.o. | Stručnjaci za protupožarnu zaštitu",
    template: "%s | FSB d.o.o.",
  },
  description:
    "FSB d.o.o. - proizvođač i izvođač pasivne protupožarne zaštite s 20 godina iskustva. Izvođenje radova, savjetovanje i optimizacija troškova, razvoj i proizvodnja.",
  keywords: [
    "protupožarna zaštita",
    "protupožarno brtvljenje",
    "protupožarna boja",
    "protupožarna bravarija",
    "protupožarna vrata",
    "FSB",
    "Hrvatska",
    "Zagreb",
  ],
  authors: [{ name: "FSB d.o.o." }],
  creator: "FSB d.o.o.",
  metadataBase: new URL("https://www.protupozarna-zastita.com"),
  openGraph: {
    type: "website",
    locale: "hr_HR",
    siteName: "FSB d.o.o.",
    title: "FSB d.o.o. | Stručnjaci za protupožarnu zaštitu",
    description:
      "Proizvođač i izvođač pasivne protupožarne zaštite s 20 godina iskustva. Izvođenje radova, savjetovanje i optimizacija troškova, razvoj i proizvodnja.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FSB d.o.o.",
    description: "Stručnjaci za protupožarnu zaštitu s 20 godina iskustva",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${inter.variable} h-full`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
