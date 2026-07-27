import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoMeta } from "@/components/site/tokens";
import { getAllProductCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proizvodi",
  description:
    "Pregledajte našu ponudu protupožarnih proizvoda - brtvljenje, premazi, ploče, moduli, stakla i vuna vodećih svjetskih proizvođača.",
};

// Katalog proizvoda — smjer K1 "Inženjerska preciznost": kategorije kao
// kataloški grid s mono indeksima, antracit ploha za argumente + ponudu.
export default function ProizvodiPage() {
  const categories = getAllProductCategories();

  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title="Protupožarni proizvodi"
        subtitle="Naši proizvodi"
        description="Distribuiramo vrhunske proizvode vodećih proizvođača Promat i Rudolf Hensel."
      />

      {/* ── 1.0 Katalog kategorija ─────────────────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead
            index="1.0"
            title="Katalog"
            note={`${categories.length} kategorija proizvoda`}
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 3) * 0.08} className="bg-paper h-full">
              <Link
                href={`/proizvodi/${category.slug}`}
                className="group flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="font-mono text-[12px] text-red">
                    P.{String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 text-lg font-bold tracking-tight group-hover:text-red transition-colors">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                  <span className={`mt-auto pt-4 ${monoMeta}`}>
                    Pogledaj proizvode →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 2.0 Zašto naši proizvodi — antracit ploha ──── */}
      <section className="bg-anthracite text-paper">
        <div className={`${container} py-20 md:py-28`}>
          <Reveal>
            <SectionHead
              dark
              index="2.0"
              title="Zašto naši proizvodi"
              note="Promat · Rudolf Hensel"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-hairline-dark">
            {[
              [
                "Certificirani proizvodi",
                "Svi proizvodi imaju potrebne certifikate i ispitani su prema europskim normama.",
              ],
              [
                "Brza isporuka",
                "Većina proizvoda dostupna je na skladištu za brzu isporuku diljem Hrvatske.",
              ],
              [
                "Tehnička podrška",
                "Naši stručnjaci pružaju podršku pri odabiru i primjeni proizvoda.",
              ],
            ].map(([title, text], i) => (
              <div
                key={title}
                className="pt-8 pb-6 md:pr-8 md:border-r md:border-hairline-dark last:border-r-0"
              >
                <Reveal delay={i * 0.08}>
                  <span className="font-mono text-[12px] text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    {text}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>

          {/* zaključni poziv — unutar iste plohe, bez dodatne trake */}
          <Reveal>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-hairline-dark pt-8">
              <p className="text-lg font-bold tracking-tight">
                Trebate pomoć pri odabiru proizvoda?
              </p>
              <div className="flex flex-wrap gap-3">
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
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
