import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FSB Protupožarna Zaštita | Stručnjaci za protupožarnu zaštitu",
    template: "%s | FSB Protupožarna Zaštita",
  },
  description:
    "FSB Protupožarna Zaštita - više od 30 godina iskustva u protupožarnoj zaštiti. Izvođenje radova, optimizacija troškova, edukacija i laboratorijsko ispitivanje.",
  keywords: [
    "protupožarna zaštita",
    "protupožarno brtvljenje",
    "protupožarna boja",
    "protupožarne ploče",
    "FSB",
    "Hrvatska",
    "Zagreb",
  ],
  authors: [{ name: "FSB Protupožarna Zaštita" }],
  creator: "FSB Protupožarna Zaštita",
  metadataBase: new URL("https://fsb-protupozarna-zastita.hr"),
  openGraph: {
    type: "website",
    locale: "hr_HR",
    siteName: "FSB Protupožarna Zaštita",
    title: "FSB Protupožarna Zaštita | Stručnjaci za protupožarnu zaštitu",
    description:
      "Više od 30 godina iskustva u protupožarnoj zaštiti. Izvođenje radova, optimizacija troškova, edukacija i laboratorijsko ispitivanje.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FSB Protupožarna Zaštita",
    description: "Stručnjaci za protupožarnu zaštitu s više od 30 godina iskustva",
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
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
