import Link from "next/link";
import Image from "next/image";

const FOOTER_NAV = {
  usluge: [
    { name: "Izvođenje radova", href: "/usluge/izvodjenje-radova-protupozarne-zastite" },
    { name: "Savjetovanje i optimizacija", href: "/usluge/optimizacija-troskova-protupozarne-zastite" },
    { name: "FSB Academy", href: "/usluge/fsb-academy" },
    { name: "Razvoj i proizvodnja", href: "/usluge/razvoj-i-proizvodnja" },
  ],
  proizvodi: [
    { name: "Protupožarna boja", href: "/proizvodi/protupozarna-boja" },
    { name: "Protupožarna bravarija", href: "/proizvodi/protupozarna-bravarija" },
    { name: "Protupožarna brtvljenja", href: "/proizvodi/protupozarna-brtvljenja" },
    { name: "Protupožarne obloge", href: "/proizvodi/protupozarne-obloge" },
  ],
  tvrtka: [
    { name: "O nama", href: "/o-nama" },
    { name: "Projekti", href: "/projekti" },
    { name: "Rješenja", href: "/rjesenja" },
    { name: "Blog", href: "/blog" },
    { name: "Karijera", href: "/karijera" },
    { name: "Kontakt", href: "/kontakt" },
  ],
};

const NORMS = [
  "EN 1366-3 — brtvljenja",
  "EN 13381-8 — premazi",
  "EN 16034 — vrata",
  "EN 1364-1 — stakla",
  "ISO 9001 — kvaliteta",
];

// Podnožje na antracit plohi — tehnički kolofon stranice.
export default function Footer() {
  return (
    <footer className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Tvrtka i kontakt */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-ink">
                <Image
                  src="/images/logo-fsb.png"
                  alt="FSB d.o.o."
                  width={26}
                  height={26}
                  className="w-[26px] h-[26px] object-contain"
                />
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.18em]">
                FSB d.o.o.
              </span>
            </Link>
            <p className="mt-5 text-sm text-neutral-400 leading-relaxed">
              Proizvođač i izvođač pasivne protupožarne zaštite s 20 godina
              iskustva. Proizvođač je partner, ne samo dobavljač.
            </p>
            <address className="mt-6 flex flex-col gap-2.5 font-mono text-[12px] not-italic tracking-[0.08em] text-neutral-300">
              <a href="tel:+38513496811" className="hover:text-white transition-colors">
                +385 1 3496 811
              </a>
              <a href="mailto:info@fsb-zagreb.hr" className="hover:text-white transition-colors">
                info@fsb-zagreb.hr
              </a>
              <span>
                Samoborska cesta 91
                <br />
                10000 Zagreb, Hrvatska
              </span>
              <span>Pon–pet 08–16 h</span>
            </address>
          </div>

          {/* Indeksi */}
          {(
            [
              ["1", "Usluge", FOOTER_NAV.usluge],
              ["2", "Proizvodi", FOOTER_NAV.proizvodi],
              ["3", "Tvrtka", FOOTER_NAV.tvrtka],
            ] as const
          ).map(([num, title, items]) => (
            <nav key={title} aria-label={title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                {num}.0 / {title}
              </p>
              <ul className="mt-4 border-t border-hairline-dark">
                {items.map((item) => (
                  <li key={item.name} className="border-b border-hairline-dark">
                    <Link
                      href={item.href}
                      className="block py-2.5 text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {title === "Tvrtka" && (
                <>
                  <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    Partneri
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a
                        href="https://www.fsb-doors.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-300 hover:text-white transition-colors"
                      >
                        FSB DOORS ↗
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.firestopping.eu/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-300 hover:text-white transition-colors"
                      >
                        FSB International (EN/DE) ↗
                      </a>
                    </li>
                  </ul>
                </>
              )}
            </nav>
          ))}
        </div>

        {/* Traka normi — tehnički potpis */}
        <div className="mt-14 pt-6 border-t border-hairline-dark flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
          {NORMS.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        {/* Donja traka */}
        <div className="mt-8 pt-6 border-t border-hairline-dark flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] tracking-[0.1em] text-neutral-400">
            © {new Date().getFullYear()} FSB d.o.o. — Sva prava pridržana.
          </p>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.1em]">
            <Link
              href="/politika-privatnosti"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Politika privatnosti
            </Link>
            <Link
              href="/uvjeti-koristenja"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Uvjeti korištenja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
