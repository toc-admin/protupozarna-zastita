import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const footerNavigation = {
  usluge: [
    { name: "Izvođenje radova", href: "/usluge/izvodjenje-radova-protupozarne-zastite" },
    { name: "Optimizacija troškova", href: "/usluge/optimizacija-troskova-protupozarne-zastite" },
    { name: "Edukacija", href: "/usluge/edukacija" },
    { name: "Laboratorijsko ispitivanje", href: "/usluge/laboratorijsko-ispitivanje" },
  ],
  proizvodi: [
    { name: "Protupožarno brtvljenje", href: "/proizvodi/protupozarno-brtvljenje" },
    { name: "Protupožarna boja i premaz", href: "/proizvodi/protupozarna-boja-i-premaz" },
    { name: "Protupožarne ploče", href: "/proizvodi/protupozarne-ploce" },
    { name: "Protupožarni moduli", href: "/proizvodi/protupozarni-moduli" },
  ],
  tvrtka: [
    { name: "O nama", href: "/o-nama" },
    { name: "Projekti", href: "/projekti" },
    { name: "Rješenja", href: "/rjesenja" },
    { name: "Blog", href: "/blog" },
    { name: "Karijera", href: "/karijera" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  partner: [
    { name: "FSB DOORS", href: "https://www.fsb-doors.com/", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-fsb.png"
                alt="FSB Protupožarna Zaštita"
                width={150}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Više od 30 godina iskustva u projektiranju, izvođenju i nadzoru
              protupožarne zaštite.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+38514878515"
                className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                +385 1 4878 515
              </a>
              <a
                href="mailto:info@fsb-protupozarna-zastita.hr"
                className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-500" />
                info@fsb-protupozarna-zastita.hr
              </a>
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <MapPin className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span>
                  Samoborska Cesta 91B<br />
                  Samoborski Odvojak 1<br />
                  10000 Zagreb, Hrvatska
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Clock className="h-4 w-4 text-brand-500" />
                Pon - Pet: 08:00 - 16:00
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Usluge
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.usluge.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Proizvodi
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.proizvodi.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Tvrtka
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.tvrtka.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Partner subsection */}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mt-8">
              Partner
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.partner.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} FSB Protupožarna Zaštita. Sva prava pridržana.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/politika-privatnosti"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Politika privatnosti
              </Link>
              <Link
                href="/uvjeti-koristenja"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Uvjeti korištenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
