import Link from "next/link";
import Image from "next/image";
import {
  getAllServices,
  getAllSolutions,
  getFeaturedProjects,
  getLatestBlogPosts,
} from "@/lib/content";

const PAPER = "#FAFAF7";
const INK = "#1C1B1A";
const RED = "#C41E24";
const MUTE = "#8B8885";
const RULE = "#E6E4DF";

const PLATES = ["I", "II", "III", "IV", "V", "VI"];

function Serif({
  children,
  className = "",
  italic = false,
}: {
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
}) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-k3-serif)",
        fontStyle: italic ? "italic" : "normal",
      }}
    >
      {children}
    </span>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] tracking-[0.06em]" style={{ color: MUTE }}>
      {children}
    </p>
  );
}

export default function Koncept3Page() {
  const services = getAllServices();
  const solutions = getAllSolutions();
  const projects = getFeaturedProjects().slice(0, 3);
  const latestPost = getLatestBlogPosts(1)[0];

  return (
    <div style={{ backgroundColor: PAPER, color: INK }}>
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="border-b" style={{ borderColor: RULE, backgroundColor: PAPER }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-[76px] grid grid-cols-3 items-center">
          <nav className="hidden md:flex items-center gap-6 text-[13px] tracking-[0.04em]">
            <Link href="/usluge" className="hover:text-[#C41E24] transition-colors">Usluge</Link>
            <Link href="/rjesenja" className="hover:text-[#C41E24] transition-colors">Rješenja</Link>
            <Link href="/projekti" className="hover:text-[#C41E24] transition-colors">Projekti</Link>
          </nav>
          <Link href="/koncept-3" className="text-center col-start-2">
            <Serif className="text-[26px] font-semibold tracking-tight">FSB</Serif>
            <span className="block text-[10px] uppercase tracking-[0.3em]" style={{ color: MUTE }}>
              protupožarna zaštita
            </span>
          </Link>
          <div className="flex justify-end items-center gap-6">
            <Link href="/blog" className="hidden md:inline text-[13px] tracking-[0.04em] hover:text-[#C41E24] transition-colors">
              Blog
            </Link>
            <Link
              href="/kontakt"
              className="text-[13px] tracking-[0.04em] border-b pb-0.5 hover:text-[#C41E24] hover:border-[#C41E24] transition-colors"
              style={{ borderColor: INK }}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero: teza ──────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-14 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] mb-8" style={{ color: RED }}>
          FSB d.o.o. · Zagreb · od 2013.
        </p>
        <h1 className="mx-auto max-w-4xl">
          <Serif className="block text-5xl md:text-6xl xl:text-[4.75rem] leading-[1.05] font-medium tracking-tight">
            Proizvođač je <Serif italic className="text-[#C41E24]">partner</Serif>,
            <br />
            ne samo dobavljač.
          </Serif>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed" style={{ color: "#57544F" }}>
          Dva desetljeća iskustva u pasivnoj protupožarnoj zaštiti — od razvoja
          i proizvodnje do savjetovanja i ugradnje. Tiho, precizno i bez
          kompromisa u sigurnosti.
        </p>
        <p className="mt-9 text-[12px] uppercase tracking-[0.25em]" style={{ color: MUTE }}>
          20 godina iskustva · 300+ projekata · 10+ stručnjaka
        </p>
      </section>

      {/* ── Hero fotografija s potpisom ─────────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <figure>
          <div className="relative aspect-[21/10] overflow-hidden">
            <Image
              src="/images/fsb/rjesenja/stakla-1.jpg"
              alt="FSB tim nadgleda ugradnju protupožarnih stakala"
              fill
              priority
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4">
            <Caption>Ugradnja protupožarnih stakala u atriju — Zagreb</Caption>
            <Caption>FSB arhiva</Caption>
          </figcaption>
        </figure>
      </section>

      {/* ── Usluge: tihi popis ──────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2>
              <Serif className="text-3xl md:text-4xl font-medium tracking-tight">Čime se bavimo</Serif>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed max-w-xs" style={{ color: "#57544F" }}>
              Četiri discipline, jedna odgovornost — da sustav zaštite radi kao
              cjelina.
            </p>
          </div>
          <div className="md:col-span-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/usluge/${service.slug}`}
                className="group block py-7 border-t last:border-b transition-colors"
                style={{ borderColor: RULE }}
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h3>
                    <Serif className="text-2xl md:text-[28px] font-medium tracking-tight group-hover:text-[#C41E24] transition-colors">
                      {service.title}
                    </Serif>
                  </h3>
                  <span
                    className="text-[12px] uppercase tracking-[0.2em] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: RED }}
                  >
                    Saznajte više
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed max-w-2xl" style={{ color: "#57544F" }}>
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rješenja: table iz monografije ──────────────── */}
      <section className="border-y" style={{ borderColor: RULE, backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: RED }}>
              Rješenja
            </p>
            <h2>
              <Serif className="text-4xl md:text-5xl font-medium tracking-tight">
                Šest sustava pasivne zaštite
              </Serif>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {solutions.map((solution, i) => (
              <Link key={solution.slug} href={`/rjesenja/${solution.slug}`} className="group block">
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <Caption>
                      Tabla {PLATES[i]} · {solution.specifications.fireResistance}
                    </Caption>
                    <h3 className="mt-1.5">
                      <Serif className="text-[22px] font-medium tracking-tight group-hover:text-[#C41E24] transition-colors">
                        {solution.title}
                      </Serif>
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "#57544F" }}>
                      {solution.description}
                    </p>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Riječ direktora: pismo (signature) ──────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-10">
            <p className="text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: RED }}>
              Riječ direktora
            </p>
            <h2>
              <Serif className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                Dvadeset godina u jednom poslu nauči vas jedno: sitnice odlučuju.
              </Serif>
            </h2>
          </div>
          <div
            className="lg:col-span-8 border p-8 md:p-14"
            style={{ borderColor: RULE, backgroundColor: "#FFFFFF" }}
          >
            <div className="max-w-xl mx-auto space-y-6 text-[16px] leading-[1.8]" style={{ color: "#3A3835" }}>
              <p>
                <Serif className="text-[17px]">Poštovani,</Serif>
              </p>
              <p>
                u pasivnoj protupožarnoj zaštiti radim od samih početaka
                stvaranja zakonskog okvira u Hrvatskoj. Vodio sam predstavništvo
                Promata u Hrvatskoj i tehnički razvoj za jugoistočnu Europu — a
                2013. osnovao sam FSB, s jednostavnom idejom: raditi ovaj posao
                inženjerski, od početka do kraja.
              </p>
              <p>
                Danas razvijamo i proizvodimo vlastitu protupožarnu bravariju,
                savjetujemo investitore kako optimizirati troškove bez
                kompromisa u sigurnosti i vlastitim ekipama ugrađujemo sustave
                na najzahtjevnijim projektima — od hotela i banaka do tunela.
              </p>
              <p>
                Vjerujem da proizvođač koji poznaje svoj proizvod od prvog
                crteža do zapisnika o ugradnji nije dobavljač. On je partner
                koji uz vas stoji i dvadeset godina kasnije.
              </p>
              <div className="pt-4">
                <Serif italic className="text-[22px]">Stipe Barišić</Serif>
                <p className="mt-1 text-[12px] uppercase tracking-[0.2em]" style={{ color: MUTE }}>
                  dipl. ing. — direktor i osnivač
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projekti: studije slučaja ───────────────────── */}
      <section className="border-t" style={{ borderColor: RULE }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16">
            <h2>
              <Serif className="text-4xl md:text-5xl font-medium tracking-tight">Izdvojeni projekti</Serif>
            </h2>
            <Link
              href="/projekti"
              className="text-[12px] uppercase tracking-[0.25em] border-b pb-0.5 hover:text-[#C41E24] hover:border-[#C41E24] transition-colors"
              style={{ borderColor: INK }}
            >
              Sve reference
            </Link>
          </div>
          <div className="space-y-20">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projekti/${project.slug}`}
                className={`group grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <figure className="md:col-span-7 [direction:ltr]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <Caption>
                      {project.location}, {project.year}.
                    </Caption>
                  </figcaption>
                </figure>
                <div className="md:col-span-5 [direction:ltr]">
                  <p className="text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: RED }}>
                    {project.category}
                  </p>
                  <h3>
                    <Serif className="text-3xl md:text-[34px] font-medium tracking-tight group-hover:text-[#C41E24] transition-colors">
                      {project.title}
                    </Serif>
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#57544F" }}>
                    {project.description}
                  </p>
                  <p className="mt-5 text-[12px] uppercase tracking-[0.2em]" style={{ color: MUTE }}>
                    {project.scope.slice(0, 2).join(" · ")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Iz bloga ────────────────────────────────────── */}
      {latestPost && (
        <section className="border-t" style={{ borderColor: RULE, backgroundColor: "#FFFFFF" }}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[11px] uppercase tracking-[0.35em] mb-5" style={{ color: RED }}>
                Iz našeg bloga · {latestPost.date}
              </p>
              <Link href={`/blog/${latestPost.slug}`} className="group block">
                <h2>
                  <Serif className="text-3xl md:text-[40px] leading-[1.15] font-medium tracking-tight group-hover:text-[#C41E24] transition-colors">
                    {latestPost.title}
                  </Serif>
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "#57544F" }}>
                  {latestPost.excerpt}
                </p>
                <span
                  className="inline-block mt-7 text-[12px] uppercase tracking-[0.25em] border-b pb-0.5 group-hover:text-[#C41E24] group-hover:border-[#C41E24] transition-colors"
                  style={{ borderColor: INK }}
                >
                  Pročitajte članak · {latestPost.readTime}
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA + footer ────────────────────────────────── */}
      <section className="border-t" style={{ borderColor: RULE }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="mx-auto max-w-2xl">
            <Serif className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              Razgovarajmo o vašem projektu — <Serif italic>prije</Serif> nego što postane hitno.
            </Serif>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
            <Link
              href="/kontakt"
              className="px-8 py-4 text-white text-[14px] tracking-[0.06em] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: INK }}
            >
              Dogovorite sastanak
            </Link>
            <a
              href="mailto:info@fsb-zagreb.hr"
              className="text-[14px] tracking-[0.04em] border-b pb-0.5 hover:text-[#C41E24] hover:border-[#C41E24] transition-colors"
              style={{ borderColor: INK }}
            >
              info@fsb-zagreb.hr
            </a>
          </div>
        </div>
        <footer className="border-t py-8" style={{ borderColor: RULE }}>
          <div
            className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-x-10 gap-y-2 text-[11px] uppercase tracking-[0.2em]"
            style={{ color: MUTE }}
          >
            <span>FSB d.o.o.</span>
            <span>Samoborska cesta 91, Zagreb</span>
            <span>+385 1 3496 811</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
