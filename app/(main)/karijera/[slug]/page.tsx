import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { container, monoLabel } from "@/components/site/tokens";
import { getJobBySlug, getJobSlugs, getCareerContactEmail } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getJobSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Pozicija nije pronađena" };
  }

  return {
    title: `${job.title} - Karijera`,
    description: job.description,
  };
}

// Popis stavki dosjea: mono indeks + tekst, hairline razdjelnici.
function DossierList({
  index,
  title,
  prefix,
  items,
}: {
  index: string;
  title: string;
  prefix: string;
  items: string[];
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-6 border-t border-ink pt-5 mb-4">
        <span className="font-mono text-[12px] text-red">{index}</span>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-12 gap-4 border-b border-hairline py-4"
          >
            <span className="col-span-2 sm:col-span-1 font-mono text-[12px] text-red">
              {prefix}.{String(i + 1).padStart(2, "0")}
            </span>
            <span className="col-span-10 sm:col-span-11 text-neutral-700 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  const contactEmail = getCareerContactEmail();

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-paper text-ink">
      {/* ── Zaglavlje pozicije — antracit ──────────────── */}
      <section className="bg-anthracite text-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-14 md:pt-40 md:pb-16">
          <Link
            href="/karijera"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400 hover:text-paper transition-colors"
          >
            ← Sve pozicije
          </Link>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400">
            {job.location} · {job.department} ·{" "}
            <span className="text-red">{job.type}</span>
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
            {job.title}
          </h1>

          <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed">
            {job.description}
          </p>
        </div>
      </section>

      {/* ── Sadržaj dosjea ─────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Glavni sadržaj */}
            <div className="lg:col-span-2 space-y-14">
              <DossierList
                index="1.0"
                title="Što ćeš raditi"
                prefix="R"
                items={job.responsibilities}
              />
              <DossierList
                index="2.0"
                title="Što tražimo"
                prefix="Z"
                items={job.requirements}
              />
              <DossierList
                index="3.0"
                title="Što nudimo"
                prefix="N"
                items={job.benefits}
              />
            </div>

            {/* Bočni stupac */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Prijava */}
                <Reveal>
                  <div className="bg-ink text-white p-6">
                    <span className={monoLabel}>Prijava</span>
                    <h3 className="mt-3 text-lg font-bold">Zainteresiran/a si?</h3>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                      Pošalji nam svoju prijavu i životopis. Javit ćemo ti se u
                      najkraćem mogućem roku.
                    </p>
                    <a
                      href={`mailto:${contactEmail}?subject=Prijava za poziciju: ${job.title}`}
                      className="mt-6 flex items-center justify-center w-full px-6 py-3 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                      Prijavi se
                    </a>
                    <p className="mt-4 font-mono text-[11px] text-neutral-400 text-center break-all">
                      Piši na: {contactEmail}
                    </p>
                  </div>
                </Reveal>

                {/* Brze informacije */}
                <Reveal delay={0.08}>
                  <div className="border border-hairline bg-white p-6">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      Brze informacije
                    </h3>
                    <dl className="mt-5 space-y-4">
                      <div className="border-b border-hairline pb-3">
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                          Lokacija
                        </dt>
                        <dd className="mt-1 font-semibold">{job.location}</dd>
                      </div>
                      <div className="border-b border-hairline pb-3">
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                          Odjel
                        </dt>
                        <dd className="mt-1 font-semibold">{job.department}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                          Vrsta zaposlenja
                        </dt>
                        <dd className="mt-1 font-semibold">{job.type}</dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

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
