import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/site/Reveal";
import { container, monoLabel, monoMeta } from "@/components/site/tokens";
import { getSolutionBySlug, getSolutionSlugs, getAllSolutions } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getSolutionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Rješenje nije pronađeno" };
  }

  return {
    title: solution.title,
    description: solution.description,
  };
}

// Tehnički list rješenja: antracit zaglavlje, specifikacije kao obrubljena
// dl tablica s mono natpisima i hairline razdjelnicima.
export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const allSolutions = getAllSolutions();
  const solutionIndex = allSolutions.findIndex((s) => s.slug === slug);
  const indexLabel = `R.${String(solutionIndex + 1).padStart(2, "0")}`;
  const relatedSolutions = allSolutions
    .filter((s) => s.slug !== slug && s.category === solution.category)
    .slice(0, 3);

  const specifications: [string, string][] = [
    ["Otpornost na požar", solution.specifications.fireResistance],
    ["Standard", solution.specifications.standard],
    ["Primjena", solution.specifications.application],
  ];

  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title={solution.title}
        subtitle={`Rješenja · ${indexLabel}`}
        description={solution.description}
      />

      <section className={`${container} py-16 md:py-24`}>
        {/* povratna veza + meta traka */}
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-4 mb-10">
            <Link
              href="/rjesenja"
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-neutral-600 hover:text-red transition-colors"
            >
              ← Sva rješenja
            </Link>
            <div className="flex items-baseline gap-4">
              <span className="px-2 py-1 font-mono text-[10px] text-white bg-ink">
                {solution.specifications.fireResistance}
              </span>
              <span className={monoMeta}>
                Tehnički list {indexLabel} / {String(allSolutions.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* ── Glavni sadržaj ─────────────────────────── */}
          <div className="lg:col-span-2">
            <Reveal>
              <figure className="relative aspect-[16/9] overflow-hidden border border-hairline mb-10">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover grayscale-[35%]"
                  priority
                />
              </figure>
            </Reveal>

            <Reveal>
              <div className="max-w-none">
                {solution.fullDescription.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph
                      .split("\n")
                      .filter((line) => line.startsWith("- "));
                    return (
                      <ol key={index} className="my-8 border-t border-hairline">
                        {items.map((item, i) => (
                          <li
                            key={i}
                            className="grid grid-cols-12 gap-4 items-baseline border-b border-hairline py-3.5"
                          >
                            <span className="col-span-2 sm:col-span-1 font-mono text-[12px] text-red">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="col-span-10 sm:col-span-11 text-neutral-700 leading-relaxed">
                              {item.substring(2)}
                            </span>
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <p key={index} className="mt-5 first:mt-0 text-neutral-600 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* ── Bočna ploha: specifikacije ─────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-px bg-hairline border border-hairline">
              {/* Tablica specifikacija */}
              <div className="bg-paper">
                <div className="flex items-baseline justify-between gap-3 px-5 py-4 border-b border-hairline bg-white">
                  <span className={monoLabel}>Specifikacije</span>
                  <span className="font-mono text-[11px] text-neutral-400">{indexLabel}</span>
                </div>
                <dl>
                  {specifications.map(([label, value]) => (
                    <div
                      key={label}
                      className="px-5 py-4 border-b border-hairline last:border-b-0"
                    >
                      <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-400">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold leading-relaxed">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Dokumentacija — antracit umetak */}
              <div className="bg-anthracite text-paper p-6">
                <span className={monoLabel}>Dokumentacija</span>
                <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                  Zatražite tehničku dokumentaciju i certifikate.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-6 inline-block w-full text-center px-6 py-3 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Kontaktirajte nas
                </Link>
              </div>

              {/* Slična rješenja */}
              {relatedSolutions.length > 0 && (
                <div className="bg-paper p-6">
                  <span className={monoLabel}>Slična rješenja</span>
                  <ul className="mt-5">
                    {relatedSolutions.map((s) => {
                      const i = allSolutions.findIndex((a) => a.slug === s.slug);
                      return (
                        <li key={s.slug} className="border-b border-hairline last:border-b-0">
                          <Link
                            href={`/rjesenja/${s.slug}`}
                            className="group flex items-baseline gap-4 py-3"
                          >
                            <span className="font-mono text-[11px] text-red">
                              R.{String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-medium group-hover:text-red transition-colors">
                              {s.title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt CTA — tinta ────────────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-24`}>
          <Reveal>
            <span className={monoLabel}>Sljedeći korak</span>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-[1.05]">
              Provjerimo odgovara li ovaj sustav vašem projektu.
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
