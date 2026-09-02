import Link from "next/link";
import Image from "next/image";
import {
  getAllServices,
  getAllSolutions,
  getFeaturedProjects,
  getLatestBlogPosts,
} from "@/lib/content";
import FireCurve from "@/components/site/FireCurve";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel } from "@/components/site/tokens";

// Naslovnica — smjer K1 "Inženjerska preciznost", razrađen prema uputama
// klijentice: papirnata tehnička osnova + antracit za tematsko odvajanje.
export default function Home() {
  const services = getAllServices();
  const solutions = getAllSolutions();
  const projects = getFeaturedProjects().slice(0, 3);
  const latestPost = getLatestBlogPosts(1)[0];

  return (
    <div className="bg-paper text-ink">
      {/* ── Hero: jasan naslov + ISO 834 krivulja ──────── */}
      <section className="border-b border-hairline">
        <div className={`${container} py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}>
          <div>
            <span className={monoLabel}>FSB d.o.o. · Zagreb · 20 godina iskustva</span>
            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[0.98] tracking-tight">
              Pasivna protupožarna zaštita
            </h1>
            <p className="mt-7 text-lg text-neutral-600 max-w-lg leading-relaxed">
              Sigurnost se mjeri u minutama. Izvodimo sustave pasivne
              protupožarne zaštite — certificirane prema europskim normama.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/rjesenja"
                className="px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Naša rješenja
              </Link>
              <Link
                href="/kontakt"
                className="px-7 py-3.5 font-semibold border border-ink hover:bg-neutral-100 transition-colors"
              >
                Zatražite ponudu
              </Link>
            </div>
          </div>
          <FireCurve />
        </div>

        {/* traka normi — antracit umetak */}
        <div className="bg-anthracite">
          <div
            className={`${container} py-3.5 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400`}
          >
            <span>EN 1366-3 — brtvljenja</span>
            <span>EN 13381-8 — premazi</span>
            <span>EN 16034 — vrata</span>
            <span>EN 1364-1 — stakla</span>
            <span>ISO 9001 — kvaliteta</span>
          </div>
        </div>
      </section>

      {/* ── 1.0 Usluge: redovi spec-tablice ────────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="1.0" title="Usluge" note="Od savjetovanja do ugradnje" />
        </Reveal>
        <Reveal>
          <div className="border-t border-hairline">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/usluge/${service.slug}`}
                className="group grid grid-cols-12 gap-4 items-baseline border-b border-hairline py-6 transition-colors hover:bg-white"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[12px] text-red">
                  U.{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 md:col-span-4 text-xl font-bold tracking-tight group-hover:text-red transition-colors">
                  {service.title}
                </h3>
                <p className="col-span-10 col-start-3 md:col-span-6 md:col-start-6 text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
                <span className="hidden md:block md:col-span-1 text-right text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 2.0 Proces — antracit ploha (tematski odvojeno) ── */}
      <section className="bg-anthracite text-paper">
        <div className={`${container} py-20 md:py-28`}>
          <Reveal>
            <SectionHead
              dark
              index="2.0"
              title="Sustav kao cjelina"
              note="Kako vodimo projekt"
            />
          </Reveal>
          <Reveal>
            <p className="max-w-2xl text-lg text-neutral-300 mb-14">
              Najveći problemi u praksi ne nastaju u proizvodu, već u sustavu.
              Zato svaki sustav vodimo kroz sve četiri faze — bez prekida
              odgovornosti.
            </p>
          </Reveal>
          <ol className="grid grid-cols-1 md:grid-cols-4 border-t border-paper/60">
            {[
              ["Savjetovanje", "Pregled projekta i optimizacija troškova bez kompromisa na sigurnosti."],
              ["Odabir sustava", "Certificirani sustavi provjerenih proizvođača, usklađeni sa zahtjevima projekta."],
              ["Ugradnja", "Vlastite certificirane ekipe izvode radove prema uputama proizvođača."],
              ["Dokumentacija", "Zapisnici, izjave o izvedenim radovima i kompletna primopredajna dokumentacija."],
            ].map(([title, text], i) => (
              <li
                key={title}
                className="relative pt-8 pb-4 pr-6 md:border-r md:border-hairline-dark last:border-r-0"
              >
                <Reveal delay={i * 0.08}>
                  <span className="absolute top-0 left-0 -translate-y-1/2 inline-block w-2.5 h-2.5 bg-red" />
                  <span className="font-mono text-[12px] text-neutral-400">
                    faza {i + 1}/4
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 3.0 Rješenja ───────────────────────────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="3.0" title="Rješenja" note="6 sustava pasivne zaštite" />
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
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-red transition-colors">
                      {solution.title}
                    </h3>
                    <span className="shrink-0 px-2 py-1 font-mono text-[10px] text-white bg-ink">
                      {solution.specifications.fireResistance}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {solution.description}
                  </p>
                  <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                    {solution.specifications.standard}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Traka brojki — antracit ─────────────────────── */}
      <section className="bg-anthracite border-y border-hairline-dark">
        <div className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
          {[
            ["20", "godina iskustva"],
            ["300+", "realiziranih projekata"],
            ["25+", "projekata godišnje"],
            ["10+", "stručnjaka u timu"],
          ].map(([value, label], i) => (
            <div
              key={label}
              className={`py-10 px-6 ${i > 0 ? "border-l border-hairline-dark" : ""}`}
            >
              <div className="font-mono text-4xl md:text-5xl font-semibold text-white">
                {value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4.0 Projekti ───────────────────────────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="4.0" title="Projekti" note="Izdvojene reference" />
        </Reveal>
        <div className="space-y-px bg-hairline">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className="bg-paper">
              <Link
                href={`/projekti/${project.slug}`}
                className="group grid grid-cols-1 md:grid-cols-2 gap-0"
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[300px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-7 md:p-10 flex flex-col justify-center border border-hairline md:border-l-0">
                  <span className={monoLabel}>{project.category}</span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-red transition-colors">
                    {project.title}
                  </h3>
                  <dl className="mt-5 grid grid-cols-2 gap-y-1.5 font-mono text-[12px] max-w-xs">
                    <dt className="text-neutral-400 uppercase tracking-[0.1em]">Lokacija</dt>
                    <dd>{project.location}</dd>
                    <dt className="text-neutral-400 uppercase tracking-[0.1em]">Godina</dt>
                    <dd>{project.year}</dd>
                    <dt className="text-neutral-400 uppercase tracking-[0.1em]">Opseg</dt>
                    <dd>{project.scope.length} sustava</dd>
                  </dl>
                  <p className="mt-5 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projekti"
            className="inline-block px-7 py-3.5 font-semibold border border-ink hover:bg-white transition-colors"
          >
            Svi projekti →
          </Link>
        </div>
      </section>

      {/* ── 5.0 Novosti ────────────────────────────────── */}
      {latestPost && (
        <section className="border-t border-hairline bg-white">
          <div className={`${container} py-16`}>
            <Reveal>
              <SectionHead index="5.0" title="Iz našeg bloga" note={latestPost.date} />
              <Link
                href={`/blog/${latestPost.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
              >
                <span className="md:col-span-2 font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                  {latestPost.category}
                </span>
                <h3 className="md:col-span-7 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-red transition-colors">
                  {latestPost.title}
                </h3>
                <span className="md:col-span-3 md:text-right font-mono text-[12px] text-neutral-400">
                  {latestPost.readTime} →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Kontakt CTA — tinta ────────────────────────── */}
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
