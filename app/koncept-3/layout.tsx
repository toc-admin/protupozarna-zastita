import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import ConceptSwitcher from "@/components/ConceptSwitcher";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-k3-serif",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-k3-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koncept 3 — Premium partner",
  robots: { index: false, follow: false },
};

export default function Koncept3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${fraunces.variable} ${figtree.variable} flex-1`}
      style={{ fontFamily: "var(--font-k3-sans)" }}
    >
      {children}
      <ConceptSwitcher />
    </div>
  );
}
