"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAVIGATION = [
  { name: "Usluge", href: "/usluge" },
  { name: "Rješenja", href: "/rjesenja" },
  { name: "Proizvodi", href: "/proizvodi" },
  { name: "Projekti", href: "/projekti" },
  { name: "O nama", href: "/o-nama" },
  { name: "Blog", href: "/blog" },
];

// Zaglavlje u jeziku tehničkog lista: papirnata ploha, tanka linija, mono potpis.
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="FSB d.o.o. — početna">
          <span className="inline-flex items-center justify-center w-9 h-9 bg-ink">
            <Image
              src="/images/logo-fsb.png"
              alt=""
              width={26}
              height={26}
              className="w-[26px] h-[26px] object-contain"
              priority
            />
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink hidden sm:block">
            FSB d.o.o. — protupožarna zaštita
          </span>
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden lg:flex items-center gap-7">
          {NAVIGATION.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-red ${
                  active ? "text-red" : "text-ink"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="px-4 py-2 bg-ink text-white text-sm font-semibold hover:bg-anthracite transition-colors"
          >
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobilni-izbornik"
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
          className="flex lg:hidden h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobilni-izbornik"
          aria-label="Mobilna navigacija"
          className="lg:hidden border-t border-hairline bg-paper"
        >
          <ul className="px-4 py-4 sm:px-6">
            {NAVIGATION.map((item, i) => (
              <li key={item.href} className={i > 0 ? "border-t border-hairline" : ""}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-3.5 text-sm font-medium text-ink"
                >
                  <span className="font-mono text-[10px] text-neutral-400">0{i + 1}</span>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="border-t border-hairline">
              <Link
                href="/karijera"
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-3.5 text-sm font-medium text-ink"
              >
                <span className="font-mono text-[10px] text-neutral-400">
                  0{NAVIGATION.length + 1}
                </span>
                Karijera
              </Link>
            </li>
            <li className="border-t border-hairline pt-4">
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="block bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
