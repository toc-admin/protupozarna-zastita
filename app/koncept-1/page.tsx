import Link from "next/link";
import Image from "next/image";
import {
  getAllServices,
  getAllSolutions,
  getFeaturedProjects,
  getLatestBlogPosts,
} from "@/lib/content";

const INK = "#141414";
const PAPER = "#FBFBF9";
const RED = "#C41E24";
const HAIRLINE = "#E2E0DA";

/* ISO 834: T = 20 + 345·log10(8t+1), plotted t = 0–120 min, T = 0–1100 °C */
const CURVE_POINTS =
  "50,275.5 58.2,179.1 70.4,149.1 90.8,125.9 111.2,112.0 131.7,102.5 172.5,88.6 233.7,75.0 295,65.2 417.5,51.4 540,41.6";
const EI_MARKS = [
  { t: "EI 30", x: 172.5 },
  { t: "EI 60", x: 295 },
  { t: "EI 90", x: 417.5 },
  { t: "EI 120", x: 540 },
];

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] uppercase tracking-[0.18em]"
      style={{ fontFamily: "var(--font-k1-mono)", color: RED }}
    >
      {children}
    </span>
  );
}

function SectionHead({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div
      className="flex flex-wrap items-baseline justify-between gap-4 border-t pt-5 mb-10"
      style={{ borderColor: INK }}
    >
      <div className="flex items-baseline gap-6">
        <span
          className="text-[12px]"
          style={{ fontFamily: "var(--font-k1-mono)", color: RED }}
        >
          {index}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: INK }}>
          {title}
        </h2>
      </div>
      {note && (
        <span
          className="text-[11px] uppercase tracking-[0.15em] text-neutral-400"
          style={{ fontFamily: "var(--font-k1-mono)" }}
        >
          {note}
        </span>
      )}
    </div>
  );
}

export default function Koncept1Page() {
  const services = getAllServices();
  const solutions = getAllSolutions();
  const projects = getFeaturedProjects().slice(0, 3);
  const latestPost = getLatestBlogPosts(1)[0];

  return (
    <div style={{ backgroundColor: PAPER, color: INK }}>
      {/* ── Nav ─────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: PAPER, borderColor: HAIRLINE }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/koncept-1" className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-8 h-8 text-white text-[13px] font-bold"
              style={{ backgroundColor: RED, fontFamily: "var(--font-k1-mono)" }}
            >
              FSB
            </span>
            <span
              className="text-[12px] uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-k1-mono)" }}
            >
              FSB d.o.o. — protupožarna zaštita
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {[
              ["Usluge", "/usluge"],
              ["Rješenja", "/rjesenja"],
              ["Projekti", "/projekti"],
              ["Proizvodi", "/proizvodi"],
              ["Blog", "/blog"],
            ].map(([name, href]) => (
              <Link key={href} href={href} className="hover:text-[#C41E24] transition-colors">
                {name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="px-4 py-2 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: INK }}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Hero: headline + ISO 834 curve ──────────────── */}
      <section className="border-b" style={{ borderColor: HAIRLINE }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <MonoLabel>FSB d.o.o. · Zagreb · 20 godina iskustva</MonoLabel>
            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[0.98] tracking-tight">
              Sigurnost se mjeri u&nbsp;minutama.
            </h1>
            <p className="mt-7 text-lg text-neutral-600 max-w-lg leading-relaxed">
              Proizvodimo i izvodimo pasivnu protupožarnu zaštitu — ispitanu u
              akreditiranim laboratorijima i certificiranu prema europskim
              normama. Jer svi sustavi moraju raditi kao cjelina.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/rjesenja"
                className="px-7 py-3.5 text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: RED }}
              >
                Naša rješenja
              </Link>
              <Link
                href="/kontakt"
                className="px-7 py-3.5 font-semibold border hover:bg-neutral-100 transition-colors"
                style={{ borderColor: INK }}
              >
                Zatražite ponudu
              </Link>
            </div>
          </div>

          {/* Signature: standardna krivulja požara ISO 834 */}
          <figure className="border p-5 md:p-7" style={{ borderColor: HAIRLINE, backgroundColor: "#fff" }}>
            <svg viewBox="0 0 560 320" className="w-full h-auto" role="img" aria-label="Standardna krivulja požara ISO 834 s oznakama otpornosti EI 30 do EI 120">
              {/* grid */}
              {[275.5, 166.4, 52.7].map((y) => (
                <line key={y} x1="50" y1={y} x2="540" y2={y} stroke={HAIRLINE} strokeWidth="1" />
              ))}
              {/* EI minute marks */}
              {EI_MARKS.map((m) => (
                <g key={m.t}>
                  <line x1={m.x} y1="30" x2={m.x} y2="280" stroke={INK} strokeWidth="1" strokeDasharray="3 5" opacity="0.35" />
                  <text
                    x={m.x}
                    y="20"
                    textAnchor={m.x > 500 ? "end" : "middle"}
                    fontSize="12"
                    fill={INK}
                    style={{ fontFamily: "var(--font-k1-mono)" }}
                  >
                    {m.t}
                  </text>
                </g>
              ))}
              {/* axes */}
              <line x1="50" y1="30" x2="50" y2="280" stroke={INK} strokeWidth="1.5" />
              <line x1="50" y1="280" x2="540" y2="280" stroke={INK} strokeWidth="1.5" />
              {/* axis labels */}
              <text x="42" y="284" textAnchor="end" fontSize="11" fill="#8a8a86" style={{ fontFamily: "var(--font-k1-mono)" }}>0</text>
              <text x="42" y="170" textAnchor="end" fontSize="11" fill="#8a8a86" style={{ fontFamily: "var(--font-k1-mono)" }}>500</text>
              <text x="42" y="57" textAnchor="end" fontSize="11" fill="#8a8a86" style={{ fontFamily: "var(--font-k1-mono)" }}>1000</text>
              <text x="46" y="304" textAnchor="start" fontSize="11" fill="#8a8a86" style={{ fontFamily: "var(--font-k1-mono)" }}>t / min</text>
              <text x="540" y="304" textAnchor="end" fontSize="11" fill="#8a8a86" style={{ fontFamily: "var(--font-k1-mono)" }}>T / °C</text>
              {/* the curve */}
              <polyline
                className="k1-curve"
                points={CURVE_POINTS}
                fill="none"
                stroke={RED}
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <figcaption
              className="mt-4 text-[11px] uppercase tracking-[0.14em] text-neutral-400"
              style={{ fontFamily: "var(--font-k1-mono)" }}
            >
              ISO 834 · standardna krivulja požara · T = 20 + 345·log₁₀(8t+1)
            </figcaption>
          </figure>
        </div>

        {/* norms strip */}
        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-neutral-500"
            style={{ fontFamily: "var(--font-k1-mono)" }}
          >
            <span>EN 1366-3 — brtvljenja</span>
            <span>EN 13381-8 — premazi</span>
            <span>EN 16034 — vrata</span>
            <span>EN 1364-1 — stakla</span>
            <span>ISO 9001 — kvaliteta</span>
          </div>
        </div>
      </section>

      {/* ── 1.0 Usluge: spec-table rows ─────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionHead index="1.0" title="Usluge" note="Od razvoja do ugradnje" />
        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/usluge/${service.slug}`}
              className="group grid grid-cols-12 gap-4 items-baseline border-b py-6 transition-colors hover:bg-white"
              style={{ borderColor: HAIRLINE }}
            >
              <span
                className="col-span-2 md:col-span-1 text-[12px]"
                style={{ fontFamily: "var(--font-k1-mono)", color: RED }}
              >
                U.{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-10 md:col-span-4 text-xl font-bold tracking-tight group-hover:text-[#C41E24] transition-colors">
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
      </section>

      {/* ── 2.0 Proces: true sequence ───────────────────── */}
      <section className="border-y" style={{ borderColor: HAIRLINE, backgroundColor: "#fff" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHead index="2.0" title="Sustav kao cjelina" note="Perspektiva proizvođača" />
          <p className="max-w-2xl text-lg text-neutral-600 mb-14">
            Najveći problemi u praksi ne nastaju u proizvodu, već u sustavu.
            Zato svaki sustav vodimo kroz sve četiri faze — bez prekida
            odgovornosti.
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-4 border-t" style={{ borderColor: INK }}>
            {[
              ["Razvoj", "Vlastiti R&D tim razvija proizvod — od prvog crteža do prototipa."],
              ["Ispitivanje", "Vatrootpornost se ispituje u vanjskim akreditiranim laboratorijima."],
              ["Certifikacija", "Sustavi se certificiraju prema europskim normama."],
              ["Ugradnja", "Vlastite ekipe ugrađuju sustav i predaju kompletnu dokumentaciju."],
            ].map(([title, text], i) => (
              <li
                key={title}
                className="relative pt-8 pb-4 pr-6 md:border-r last:border-r-0"
                style={{ borderColor: HAIRLINE }}
              >
                <span
                  className="absolute top-0 left-0 -translate-y-1/2 inline-block w-2.5 h-2.5"
                  style={{ backgroundColor: RED }}
                />
                <span
                  className="text-[12px] text-neutral-400"
                  style={{ fontFamily: "var(--font-k1-mono)" }}
                >
                  faza {i + 1}/4
                </span>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 3.0 Rješenja ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionHead index="3.0" title="Rješenja" note="6 sustava pasivne zaštite" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: HAIRLINE }}>
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/rjesenja/${solution.slug}`}
              className="group flex flex-col"
              style={{ backgroundColor: PAPER }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-[#C41E24] transition-colors">
                    {solution.title}
                  </h3>
                  <span
                    className="shrink-0 px-2 py-1 text-[10px] text-white"
                    style={{ backgroundColor: INK, fontFamily: "var(--font-k1-mono)" }}
                  >
                    {solution.specifications.fireResistance}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{solution.description}</p>
                <span
                  className="mt-4 text-[11px] uppercase tracking-[0.14em] text-neutral-400"
                  style={{ fontFamily: "var(--font-k1-mono)" }}
                >
                  {solution.specifications.standard}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Stats band ──────────────────────────────────── */}
      <section className="border-y" style={{ borderColor: INK, backgroundColor: INK }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4">
          {[
            ["20", "godina iskustva"],
            ["300+", "realiziranih projekata"],
            ["25+", "projekata godišnje"],
            ["10+", "stručnjaka u timu"],
          ].map(([value, label], i) => (
            <div
              key={label}
              className={`py-10 px-6 ${i > 0 ? "border-l" : ""}`}
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <div
                className="text-4xl md:text-5xl font-semibold text-white"
                style={{ fontFamily: "var(--font-k1-mono)" }}
              >
                {value}
              </div>
              <div
                className="mt-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400"
                style={{ fontFamily: "var(--font-k1-mono)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4.0 Projekti ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionHead index="4.0" title="Projekti" note="Izdvojene reference" />
        <div className="space-y-px" style={{ backgroundColor: HAIRLINE }}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projekti/${project.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0"
              style={{ backgroundColor: PAPER }}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[300px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center border md:border-l-0" style={{ borderColor: HAIRLINE }}>
                <MonoLabel>{project.category}</MonoLabel>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[#C41E24] transition-colors">
                  {project.title}
                </h3>
                <dl
                  className="mt-5 grid grid-cols-2 gap-y-1.5 text-[12px] max-w-xs"
                  style={{ fontFamily: "var(--font-k1-mono)" }}
                >
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
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projekti"
            className="inline-block px-7 py-3.5 font-semibold border hover:bg-white transition-colors"
            style={{ borderColor: INK }}
          >
            Svi projekti →
          </Link>
        </div>
      </section>

      {/* ── 5.0 Novosti ─────────────────────────────────── */}
      {latestPost && (
        <section className="border-t" style={{ borderColor: HAIRLINE, backgroundColor: "#fff" }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <SectionHead index="5.0" title="Iz našeg bloga" note={latestPost.date} />
            <Link href={`/blog/${latestPost.slug}`} className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <span
                className="md:col-span-2 text-[11px] uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-k1-mono)", color: RED }}
              >
                {latestPost.category}
              </span>
              <h3 className="md:col-span-7 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[#C41E24] transition-colors">
                {latestPost.title}
              </h3>
              <span
                className="md:col-span-3 md:text-right text-[12px] text-neutral-400"
                style={{ fontFamily: "var(--font-k1-mono)" }}
              >
                {latestPost.readTime} →
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* ── Kontakt CTA + footer ────────────────────────── */}
      <section style={{ backgroundColor: INK }} className="text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <MonoLabel>Zatražite ponudu</MonoLabel>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.05]">
            Vaš projekt zaslužuje sustav koji izdrži test.
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="px-7 py-3.5 text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: RED }}
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
          <div
            className="mt-16 pt-8 border-t border-white/15 flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-neutral-400"
            style={{ fontFamily: "var(--font-k1-mono)" }}
          >
            <span>FSB d.o.o.</span>
            <span>Samoborska cesta 91, 10000 Zagreb</span>
            <span>info@fsb-zagreb.hr</span>
            <span>Pon–pet 08–16h</span>
          </div>
        </div>
      </section>
    </div>
  );
}
