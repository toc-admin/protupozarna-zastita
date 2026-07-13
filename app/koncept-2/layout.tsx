import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import ConceptSwitcher from "@/components/ConceptSwitcher";

const anton = Anton({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-k2-display",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-k2-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koncept 2 — Industrijski karakter",
  robots: { index: false, follow: false },
};

export default function Koncept2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${anton.variable} ${archivo.variable} flex-1`}
      style={{ fontFamily: "var(--font-k2-sans)" }}
    >
      {children}
      <ConceptSwitcher />
    </div>
  );
}
