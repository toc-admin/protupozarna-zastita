import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel } from "@/components/site/tokens";
import { getAllSolutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rješenja",
  description:
    "Pregledajte našu ponudu protupožarnih rješenja - sustavi za brtvljenje, protupožarne ploče, zaklopke i sustavi za odvod dima.",
};

// Mreža rješenja u jeziku tehničkog lista (R.01–R.06) — smjer K1.
export default function RjesenjaPage() {
  const solutions = getAllSolutions();

  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title="Protupožarna rješenja"
        subtitle="Rješenja · FSB d.o.o."
        description="Certificirana protupožarna rješenja za sve vrste objekata i primjena."
      />

      {/* ── 1.0 Sustavi: mreža s hairline rešetkom ─────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead
            index="1.0"
            title="Sustavi"
            note={`${solutions.length} certificiranih sustava`}
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
          {solutions.map((solution, i) => (
            <Reveal key={solution.slug} delay={(i % 3) * 0.08} className="bg-paper">
              <Link href={`/rjesenja/${solution.slug}`} className="group flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                  />
                  <span className="absolute top-0 left-0 px-2 py-1 font-mono text-[11px] text-white bg-anthracite/90">
                    R.{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-bold tracking-tight group-hover:text-red transition-colors">
                      {solution.title}
                    </h2>
                    <span className="shrink-0 px-2 py-1 font-mono text-[10px] text-white bg-ink">
                      {solution.specifications.fireResistance}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                      {solution.specifications.standard}
                    </span>
                    <span className="font-mono text-[11px] text-red group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Sustav kao cjelina — antracit umetak ───────── */}
      <section className="bg-anthracite text-paper border-y border-hairline-dark">
        <div className={`${container} py-14 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline`}>
          <Reveal className="md:col-span-8">
            <span className={monoLabel}>Napomena proizvođača</span>
            <p className="mt-4 text-lg md:text-xl font-semibold leading-relaxed max-w-2xl">
              Svako rješenje ispitano je kao sustav — brtvljenje, obloga ili
              vrata vrijede onoliko koliko vrijedi njihova ugradnja.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-4 md:text-right">
            <Link
              href="/usluge"
              className="inline-block px-6 py-3 font-semibold border border-paper/40 hover:bg-white/10 transition-colors"
            >
              Naše usluge →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Kontakt CTA — tinta ────────────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-24`}>
          <Reveal>
            <span className={monoLabel}>Zatražite ponudu</span>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-[1.05]">
              Niste sigurni koji sustav odgovara vašem objektu?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Kontaktirajte nas
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
