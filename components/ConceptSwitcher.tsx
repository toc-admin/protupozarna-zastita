"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const concepts = [
  { label: "Trenutna", href: "/" },
  { label: "K1", href: "/koncept-1" },
  { label: "K2", href: "/koncept-2" },
  { label: "K3", href: "/koncept-3" },
];

export default function ConceptSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100]">
      <div className="flex items-center gap-1 px-1.5 py-1.5 bg-neutral-900/90 backdrop-blur rounded-full shadow-2xl border border-white/10">
        {concepts.map((concept) => {
          const isActive =
            concept.href === "/"
              ? pathname === "/"
              : pathname.startsWith(concept.href);
          return (
            <Link
              key={concept.href}
              href={concept.href}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? "bg-white text-neutral-900"
                  : "text-neutral-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {concept.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
