import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import Stats from "@/components/sections/Stats";
import Certifications from "@/components/sections/Certifications";
import Director from "@/components/sections/Director";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel } from "@/components/site/tokens";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "FSB d.o.o. - izvođač pasivne protupožarne zaštite. Upoznajte naš tim i saznajte više o našim certifikatima i kvalifikacijama.",
};

// Vrijednosti kao numerirane ćelije spec-tablice.
const values = [
  {
    title: "Stručnost",
    text: "Kontinuirano usavršavanje i praćenje najnovijih standarda u industriji.",
  },
  {
    title: "Kvaliteta",
    text: "Korištenje samo provjerenih materijala i tehnologija vrhunske kvalitete.",
  },
  {
    title: "Pouzdanost",
    text: "Ispunjavanje obećanja i poštivanje dogovorenih rokova i uvjeta.",
  },
  {
    title: "Partnerstvo",
    text: "Izgradnja dugoročnih odnosa s klijentima temeljenih na povjerenju.",
  },
];

export default function ONamaPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title="O nama"
        subtitle="FSB d.o.o."
        description="Gradimo povjerenje kroz izvrsnost u pasivnoj protupožarnoj zaštiti."
      />

      {/* ── 1.0 Naša priča ─────────────────────────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="1.0" title="Naša priča" note="FSB d.o.o." />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                FSB d.o.o. osnovan je s ciljem pružanja vrhunskih usluga pasivne
                protupožarne zaštite na hrvatskom tržištu. Od samog početka, naš fokus bio
                je na kvaliteti, stručnosti i pouzdanosti.
              </p>
              <p>
                Projekte realiziramo za najzahtjevnije klijente - od stambenih
                zgrada i zdravstvenih ustanova do tunela i industrijskih objekata.
              </p>
              <p>
                Svi sustavi moraju raditi kao cjelina — zato uz izvedbu nudimo i
                savjetovanje kroz sve faze projekta. Uz to, kroz vlastiti brend
                FSB Doors nudimo i vlastiti proizvod: protupožarnu bravariju.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden border border-hairline">
              <Image
                src="/images/fsb/rjesenja/parapet-1.jpg"
                alt="FSB tim na poslu"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover grayscale-[35%]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Traka brojki — antracit (tematsko odvajanje) ── */}
      <Stats />

      {/* ── 2.0 Misija i vrijednosti ───────────────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="2.0" title="Misija i vrijednosti" note="Kako radimo" />
        </Reveal>
        <Reveal>
          <p className="max-w-2xl text-lg text-neutral-600 mb-12">
            Osigurati najvišu razinu protupožarne zaštite za sve vrste objekata,
            kombinirajući stručno znanje, kvalitetne materijale i profesionalnu izvedbu.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08} className="bg-white">
              <div className="p-6 h-full">
                <span className="font-mono text-[12px] text-red">
                  V.{String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 font-bold tracking-tight">{value.title}</h4>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 3.0 Certifikati ────────────────────────────── */}
      <Certifications />

      {/* ── 4.0 Vodstvo ────────────────────────────────── */}
      <Director />

      {/* ── Kontakt CTA — tinta ────────────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-28`}>
          <Reveal>
            <span className={monoLabel}>Kontaktirajte nas</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.05]">
              Trebate stručnu pomoć za protupožarnu zaštitu?
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Kontaktirajte nas za besplatne konzultacije. Naš tim stručnjaka stoji vam
              na raspolaganju za sve vaše upite i projekte.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Zatražite ponudu
              </Link>
              <a
                href="tel:+38513496811"
                className="px-7 py-3.5 font-semibold border border-white/30 hover:bg-white/10 transition-colors"
              >
                +385 1 3496 811
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
