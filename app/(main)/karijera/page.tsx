import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel } from "@/components/site/tokens";
import { getActiveJobs, getCompanies, getCareerContactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Karijera",
  description:
    "Pridružite se FSB timu - pregledajte otvorene pozicije i postanite dio vodećeg tima za protupožarnu zaštitu u Hrvatskoj.",
};

// Prednosti rada — numerirane ćelije umjesto emoji kartica.
const benefits = [
  "Kontinuirana edukacija",
  "Konkurentne plaće",
  "Timski rad",
  "Mogućnost napredovanja",
];

export default function KarijeraPage() {
  const jobs = getActiveJobs();
  const companies = getCompanies();
  const contactEmail = getCareerContactEmail();

  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title="Pridruži se našem timu"
        subtitle="Karijera"
        description="Gradimo budućnost protupožarne zaštite u Hrvatskoj - budi dio našeg tima stručnjaka."
      />

      {/* ── 1.0 Tko smo mi ─────────────────────────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="1.0" title="Tko smo mi" note="Naše tvrtke" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {companies.map((company, i) => (
            <Reveal key={company.name} delay={i * 0.08} className="bg-white">
              <div className="p-8 h-full">
                <span className="font-mono text-[12px] text-red">
                  T.{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  {company.name}
                </h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {company.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Prednosti rada */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
          {benefits.map((label, i) => (
            <Reveal key={label} delay={i * 0.06} className="bg-white">
              <div className="p-6 h-full">
                <span className="font-mono text-[12px] text-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-semibold tracking-tight">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 2.0 Otvorene pozicije — dosje redovi ───────── */}
      <section className={`${container} pb-20 md:pb-28`}>
        <Reveal>
          <SectionHead
            index="2.0"
            title="Otvorene pozicije"
            note={`${jobs.length} aktivnih natječaja`}
          />
        </Reveal>
        <Reveal>
          <p className="max-w-2xl text-lg text-neutral-600 mb-12">
            Pregledajte naše trenutno otvorene pozicije i pronađite priliku koja
            odgovara vašim vještinama.
          </p>
        </Reveal>

        <div className="border-t border-hairline">
          {jobs.map((job, i) => (
            <Reveal key={job.slug} delay={i * 0.06}>
              <Link
                href={`/karijera/${job.slug}`}
                className="group grid grid-cols-12 gap-x-4 gap-y-2 items-baseline border-b border-hairline py-7 transition-colors hover:bg-white"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[12px] text-red">
                  P.{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 md:col-span-5 text-xl font-bold tracking-tight group-hover:text-red transition-colors">
                  {job.title}
                </h3>
                <p className="col-span-10 col-start-3 md:col-span-5 md:col-start-7 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                  {job.location} · {job.department} ·{" "}
                  <span className="text-red">{job.type}</span>
                </p>
                <span className="hidden md:block md:col-span-1 text-right text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Otvorena prijava — tinta ───────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-28`}>
          <Reveal>
            <span className={monoLabel}>Otvorena prijava</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.05]">
              Ne pronalazite odgovarajuću poziciju?
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Pošaljite nam svoju otvorenu prijavu — uvijek smo zainteresirani za
              talentirane ljude.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${contactEmail}?subject=Otvorena prijava - FSB`}
                className="px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Pošalji prijavu
              </a>
              <p className="font-mono text-[12px] text-neutral-400">
                Pišite nam na: <span className="text-white">{contactEmail}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
