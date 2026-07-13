import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import ConceptSwitcher from "@/components/ConceptSwitcher";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-k1-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-k1-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koncept 1 — Inženjerska preciznost",
  robots: { index: false, follow: false },
};

export default function Koncept1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${archivo.variable} ${plexMono.variable} flex-1`}
      style={{ fontFamily: "var(--font-k1-sans)" }}
    >
      {children}
      <ConceptSwitcher />
    </div>
  );
}
