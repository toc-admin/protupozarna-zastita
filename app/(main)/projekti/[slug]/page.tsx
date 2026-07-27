import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel } from "@/components/site/tokens";
import { getProjectBySlug, getProjectSlugs, getAllProjects } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projekt nije pronađen" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

// Dosje projekta — antracitno zaglavlje s mono tablicom činjenica,
// dokumentarna galerija u punoj boji, opseg radova kao numerirani redovi.
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const relatedProjects = allProjects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="bg-paper text-ink">
      {/* ── Zaglavlje dosjea — antracit ploha ──────────── */}
      <section className="bg-anthracite text-paper">
        <div className={`${container} py-16 md:py-20`}>
          <Link
            href="/projekti"
            className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400 hover:text-paper transition-colors"
          >
            ← Svi projekti
          </Link>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-end">
            <div className="lg:col-span-7">
              <span className={monoLabel}>Dosje projekta · {project.category}</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]">
                {project.title}
              </h1>
            </div>

            {/* Tablica činjenica */}
            <dl className="lg:col-span-5 border-t border-hairline-dark font-mono text-[12px]">
              {[
                ["Lokacija", project.location],
                ["Godina", project.year],
                ["Kategorija", project.category],
                ["Opseg", `${project.scope.length} sustava`],
              ].map(([dt, dd]) => (
                <div
                  key={dt}
                  className="grid grid-cols-2 gap-4 py-2.5 border-b border-hairline-dark"
                >
                  <dt className="uppercase tracking-[0.12em] text-neutral-400">
                    {dt}
                  </dt>
                  <dd className="text-paper">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Naslovna fotografija — puna boja (dokumentarni dokaz) ── */}
      <section className="border-b border-hairline">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className={`${container} py-16 md:py-24`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Glavni sadržaj dosjea */}
          <div className="lg:col-span-2">
            {/* 1.0 O projektu */}
            <Reveal>
              <SectionHead index="1.0" title="O projektu" note={project.year} />
              <p className="text-lg text-neutral-600 leading-relaxed">
                {project.description}
              </p>
            </Reveal>

            {/* 2.0 Opseg radova — numerirani redovi */}
            <div className="mt-16">
              <Reveal>
                <SectionHead
                  index="2.0"
                  title="Opseg radova"
                  note={`${project.scope.length} stavki`}
                />
              </Reveal>
              <ol className="border-t border-hairline">
                {project.scope.map((item, index) => (
                  <Reveal key={index} delay={index * 0.06}>
                    <li className="flex items-baseline gap-5 border-b border-hairline py-4">
                      <span className="shrink-0 font-mono text-[12px] text-red">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-neutral-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* 3.0 Galerija — puna boja, mono potpisi */}
            {project.gallery.length > 0 && (
              <div className="mt-16">
                <Reveal>
                  <SectionHead
                    index="3.0"
                    title="Galerija"
                    note={`${project.gallery.length} fotografija`}
                  />
                </Reveal>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-hairline border border-hairline">
                  {project.gallery.map((image, index) => (
                    <Reveal
                      key={index}
                      delay={(index % 3) * 0.08}
                      className="bg-paper"
                    >
                      <figure>
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={image}
                            alt={`${project.title} - slika ${index + 1}`}
                            fill
                            sizes="(min-width: 768px) 22vw, 50vw"
                            className="object-cover hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>
                        <figcaption className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                          Sl. {String(index + 1).padStart(2, "0")}/
                          {String(project.gallery.length).padStart(2, "0")}
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bočni stupac */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Poziv na ponudu — antracit kartica */}
              <Reveal>
                <div className="bg-anthracite text-paper p-6">
                  <span className={monoLabel}>Ponuda</span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">
                    Imate sličan projekt?
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Kontaktirajte nas za konzultacije i ponudu.
                  </p>
                  <Link
                    href="/kontakt"
                    className="mt-5 block px-6 py-3 bg-red text-white text-center font-semibold hover:opacity-90 transition-opacity"
                  >
                    Zatražite ponudu
                  </Link>
                </div>
              </Reveal>

              {/* Slični projekti */}
              {relatedProjects.length > 0 && (
                <Reveal>
                  <div>
                    <span className={monoLabel}>Slični projekti</span>
                    <ul className="mt-4 border-t border-hairline">
                      {relatedProjects.map((p, i) => (
                        <li key={p.slug}>
                          <Link
                            href={`/projekti/${p.slug}`}
                            className="group flex items-center gap-4 py-4 border-b border-hairline"
                          >
                            <div className="relative w-16 h-16 shrink-0 overflow-hidden border border-hairline">
                              <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                sizes="64px"
                                className="object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-500"
                              />
                            </div>
                            <div className="min-w-0">
                              <span className="font-mono text-[10px] text-neutral-400">
                                PR.{String(i + 1).padStart(2, "0")}
                              </span>
                              <p className="font-semibold text-sm group-hover:text-red transition-colors">
                                {p.title}
                              </p>
                              <p className="font-mono text-[11px] text-neutral-500">
                                {p.location} · {p.year}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* ── Zaključni poziv — tinta ────────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-28`}>
          <Reveal>
            <span className={monoLabel}>Zatražite ponudu</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.05]">
              Vaš projekt zaslužuje sustav koji izdrži test.
            </h2>
            <div className="mt-9 flex flex-wrap gap-3">
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
