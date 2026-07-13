import Link from "next/link";
import Image from "next/image";
import {
  getAllServices,
  getAllSolutions,
  getFeaturedProjects,
  getLatestBlogPosts,
} from "@/lib/content";

const COAL = "#0C0C0C";
const SOOT = "#161616";
const BONE = "#F5F3EF";
const ORANGE = "#FF6A00";
const RED = "#C41E24";

/* Stvarne reference sa stare stranice */
const REFERENCES = [
  "Zagrebačka banka — Trg bana Jelačića",
  "Hotel Esplanade Zagreb",
  "TE-TO Zagreb",
  "Zračna luka Zagreb",
  "Tunel Plasina",
  "Hotel Le Meridien Lav Split",
  "HOTO Business Tower",
  "Euro Tower Zagreb",
  "Belupo Koprivnica",
  "Dvorac Eltz Vukovar",
  "Tvornica duhana Rovinj",
  "Bazeni Špansko",
];

const CHAIN = [
  {
    n: "01",
    title: "Razvoj",
    text: "Vlastiti R&D tim razvija protupožarnu bravariju, parapete i sustave — iz proizvodnog pogona, ne iz kataloga.",
    image: "/images/fsb/rjesenja/bravarija-2.jpg",
  },
  {
    n: "02",
    title: "Ispitivanje",
    text: "Prototipovi idu na ispitivanja vatrootpornosti u vanjske akreditirane laboratorije. Bez položenog testa nema proizvoda.",
    image: "/images/fsb/rjesenja/bravarija-1.jpg",
  },
  {
    n: "03",
    title: "Certifikacija",
    text: "Sustavi se certificiraju prema europskim normama — EN 16034, EN 1366, EN 13381. Papiri koji znače živote.",
    image: "/images/fsb/rjesenja/brtvljenja-1.jpg",
  },
  {
    n: "04",
    title: "Ugradnja",
    text: "Vlastite certificirane ekipe ugrađuju sustav na gradilištu i predaju kompletnu dokumentaciju. Krug je zatvoren.",
    image: "/images/fsb/rjesenja/boja-1.jpg",
  },
];

function DisplayText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`uppercase ${className}`}
      style={{ fontFamily: "var(--font-k2-display)" }}
    >
      {children}
    </span>
  );
}

export default function Koncept2Page() {
  const services = getAllServices();
  const solutions = getAllSolutions();
  const projects = getFeaturedProjects().slice(0, 3);
  const latestPost = getLatestBlogPosts(1)[0];

  return (
    <div style={{ backgroundColor: COAL, color: BONE }}>
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/koncept-2" className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center px-2.5 py-1 text-white text-lg leading-none"
              style={{ backgroundColor: RED, fontFamily: "var(--font-k2-display)" }}
            >
              FSB
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">
              Protupožarna zaštita
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            {[
              ["Usluge", "/usluge"],
              ["Rješenja", "/rjesenja"],
              ["Projekti", "/projekti"],
              ["Proizvodi", "/proizvodi"],
              ["Blog", "/blog"],
            ].map(([name, href]) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="px-5 py-2.5 font-bold uppercase tracking-wide text-black hover:brightness-110 transition-all"
              style={{ backgroundColor: ORANGE }}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Hero: full-bleed dron fotografija ───────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/images/fsb/factory/factory-aerial-1.jpg"
          alt="FSB proizvodni pogon iz zraka"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0C0C0C 4%, rgba(12,12,12,0.72) 38%, rgba(12,12,12,0.25) 70%, rgba(12,12,12,0.45) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-14 pt-40">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 mb-5">
            FSB d.o.o. — proizvođač i izvođač pasivne protupožarne zaštite
          </p>
          <h1 className="leading-[0.92]">
            <DisplayText className="block text-[16vw] md:text-[9.5rem] xl:text-[11rem] text-white">
              Proizvodimo
            </DisplayText>
            <DisplayText
              className="block text-[16vw] md:text-[9.5rem] xl:text-[11rem]"
              // outlined word — the one loud thing
            >
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: `2px ${ORANGE}`,
                }}
              >
                sigurnost.
              </span>
            </DisplayText>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-md text-white/80 leading-relaxed">
              20 godina iskustva. Vlastiti R&D, vlastita proizvodnja, vlastite
              ekipe na gradilištu. Proizvođač je partner, ne samo dobavljač.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/rjesenja"
                className="px-7 py-4 font-bold uppercase tracking-wide text-black hover:brightness-110 transition-all"
                style={{ backgroundColor: ORANGE }}
              >
                Rješenja
              </Link>
              <Link
                href="/projekti"
                className="px-7 py-4 font-bold uppercase tracking-wide border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Projekti
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee stvarnih referenci ───────────────────── */}
      <section
        className="py-5 border-y overflow-hidden"
        style={{ borderColor: "rgba(255,255,255,0.12)" }}
        aria-label="Reference"
      >
        <div className="flex whitespace-nowrap k2-marquee w-max">
          {[...REFERENCES, ...REFERENCES].map((ref, i) => (
            <span key={i} className="flex items-center text-sm uppercase tracking-[0.2em] text-white/50">
              <span className="px-6">{ref}</span>
              <span style={{ color: ORANGE }}>◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Lanac: od razvoja do ugradnje ────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-24 md:py-32">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: ORANGE }}>
            Zašto proizvođač vidi širu sliku
          </p>
          <h2 className="leading-[0.95]">
            <DisplayText className="text-5xl md:text-7xl text-white">
              Od razvoja do ugradnje.
            </DisplayText>
          </h2>
        </div>
        <ol className="space-y-px">
          {CHAIN.map((step) => (
            <li key={step.n} style={{ backgroundColor: SOOT }}>
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                <div className="md:col-span-2 flex md:items-center px-6 pt-6 md:pt-0">
                  <DisplayText className="text-6xl md:text-7xl" >
                    <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.35)" }}>
                      {step.n}
                    </span>
                  </DisplayText>
                </div>
                <div className="md:col-span-6 px-6 py-6 md:py-10 flex flex-col justify-center">
                  <h3>
                    <DisplayText className="text-3xl md:text-4xl text-white">{step.title}</DisplayText>
                  </h3>
                  <p className="mt-3 text-white/65 leading-relaxed max-w-lg">{step.text}</p>
                </div>
                <div className="md:col-span-4 relative aspect-[16/9] md:aspect-auto md:min-h-[180px]">
                  <Image src={step.image} alt={step.title} fill className="object-cover" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Quote band s hazard trakom ───────────────────── */}
      <section className="relative py-20 md:py-28" style={{ backgroundColor: SOOT }}>
        <div className="k2-hazard absolute top-0 left-0 right-0 h-2 opacity-80" />
        <div className="k2-hazard absolute bottom-0 left-0 right-0 h-2 opacity-80" />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 text-center">
          <blockquote>
            <DisplayText className="block text-4xl md:text-6xl xl:text-7xl leading-[1.02] text-white">
              Najveći problemi nisu
              <br />
              u proizvodu — <span style={{ color: ORANGE }}>već u sustavu.</span>
            </DisplayText>
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/50">
            Croatian Fire Safety Forum 2026 · FSB
          </p>
        </div>
      </section>

      {/* ── Rješenja ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2>
            <DisplayText className="text-5xl md:text-7xl text-white">Rješenja</DisplayText>
          </h2>
          <Link
            href="/rjesenja"
            className="text-sm uppercase tracking-[0.2em] hover:text-white transition-colors"
            style={{ color: ORANGE }}
          >
            Sva rješenja →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/rjesenja/${solution.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
              style={{ backgroundColor: SOOT }}
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(12,12,12,0.95) 0%, rgba(12,12,12,0.1) 55%)" }}
              />
              <div
                className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: ORANGE }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: ORANGE }}>
                  {solution.specifications.fireResistance}
                </span>
                <h3 className="mt-1">
                  <DisplayText className="text-2xl text-white">{solution.title}</DisplayText>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Projekti: horizontalna traka ─────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: SOOT }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2>
            <DisplayText className="text-5xl md:text-7xl text-white">Projekti</DisplayText>
          </h2>
          <span className="text-sm uppercase tracking-[0.2em] text-white/40">
            300+ realiziranih · 25+ godišnje
          </span>
        </div>
        <div className="overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]">
          <div className="flex gap-5 px-4 sm:px-6 lg:px-10 w-max">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projekti/${project.slug}`}
                className="group relative w-[85vw] sm:w-[520px] aspect-[16/10] shrink-0 snap-start overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(12,12,12,0.9) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: ORANGE }}>
                      {project.category} · {project.year}
                    </span>
                    <h3 className="mt-1">
                      <DisplayText className="text-3xl text-white">{project.title}</DisplayText>
                    </h3>
                  </div>
                  <span className="text-2xl text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                </div>
              </Link>
            ))}
            <Link
              href="/projekti"
              className="flex items-center justify-center w-[60vw] sm:w-[320px] aspect-[16/10] shrink-0 snap-start border border-white/20 hover:border-white/60 transition-colors"
            >
              <DisplayText className="text-2xl text-white">Svi projekti →</DisplayText>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Usluge (kompaktno) ───────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2>
              <DisplayText className="text-5xl md:text-6xl text-white">Usluge</DisplayText>
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed max-w-sm">
              Sve iz jedne ruke — proizvodnja, savjetovanje, izvedba i edukacija
              koja dolazi.
            </p>
          </div>
          <div className="lg:col-span-8 border-t border-white/15">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/usluge/${service.slug}`}
                className="group flex items-baseline justify-between gap-6 py-6 border-b border-white/15 hover:border-white/50 transition-colors"
              >
                <div>
                  <h3>
                    <DisplayText className="text-2xl md:text-3xl text-white group-hover:text-[#FF6A00] transition-colors">
                      {service.title}
                    </DisplayText>
                  </h3>
                  <p className="mt-2 text-sm text-white/55 max-w-xl">{service.description}</p>
                </div>
                <span className="text-2xl text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog + CTA ───────────────────────────────────── */}
      {latestPost && (
        <section className="border-t" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
          <Link
            href={`/blog/${latestPost.slug}`}
            className="group block mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-14"
          >
            <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: ORANGE }}>
              Novo na blogu · {latestPost.date}
            </span>
            <div className="mt-3 flex items-baseline justify-between gap-6">
              <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-white/80 transition-colors max-w-4xl">
                {latestPost.title}
              </h3>
              <span className="text-2xl text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">→</span>
            </div>
          </Link>
        </section>
      )}

      <section className="relative overflow-hidden">
        <Image
          src="/images/fsb/projekti/tunel-plasina-1.jpg"
          alt="Protupožarna vrata u tunelu Plasina"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-28 md:py-36 text-center">
          <h2 className="leading-[0.95]">
            <DisplayText className="block text-5xl md:text-8xl text-white">Imate projekt?</DisplayText>
            <DisplayText className="block text-5xl md:text-8xl">
              <span style={{ color: "transparent", WebkitTextStroke: `2px ${BONE}` }}>Imamo sustav.</span>
            </DisplayText>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/kontakt"
              className="px-8 py-4 font-bold uppercase tracking-wide text-black hover:brightness-110 transition-all"
              style={{ backgroundColor: ORANGE }}
            >
              Kontaktirajte nas
            </Link>
            <a
              href="tel:+38513496811"
              className="px-8 py-4 font-bold uppercase tracking-wide border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              +385 1 3496 811
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t py-8" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 flex flex-wrap gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>FSB d.o.o.</span>
          <span>Samoborska cesta 91, 10000 Zagreb</span>
          <span>info@fsb-zagreb.hr</span>
          <span>+385 1 3496 811</span>
        </div>
      </footer>
    </div>
  );
}
