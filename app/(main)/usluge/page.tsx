import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel, monoMeta } from "@/components/site/tokens";
import { getAllServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "FSB d.o.o. nudi kompletan spektar usluga - izvođenje radova, savjetovanje i optimizacija troškova, razvoj i proizvodnja te FSB Academy.",
};

// Popis usluga kao redovi spec-tablice (U.01–U.04) — smjer K1.
export default function UslugePage() {
  const services = getAllServices();

  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title="Naše usluge"
        subtitle="Usluge · FSB d.o.o."
        description="Kompletan spektar usluga pasivne protupožarne zaštite - od razvoja i proizvodnje do savjetovanja i izvođenja."
      />

      {/* ── 1.0 Popis usluga: redovi spec-tablice ──────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="1.0" title="Popis usluga" note={`${services.length} usluge`} />
        </Reveal>
        <div className="border-t border-hairline">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <Link
                href={`/usluge/${service.slug}`}
                className="group grid grid-cols-12 gap-x-4 gap-y-3 items-start border-b border-hairline py-8 transition-colors hover:bg-white"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[12px] text-red pt-1">
                  U.{String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative hidden md:block md:col-span-2 aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 16vw, 0vw"
                    className="object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                  />
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-red transition-colors">
                    {service.title}
                  </h2>
                  <span className={`mt-3 block ${monoMeta}`}>
                    {service.features.join(" · ")}
                  </span>
                </div>
                <p className="col-span-10 col-start-3 md:col-span-4 md:col-start-8 text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
                <span className="hidden md:block md:col-span-1 text-right text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Kontakt CTA — tinta ────────────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-24`}>
          <Reveal>
            <span className={monoLabel}>Zatražite ponudu</span>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-[1.05]">
              Trebate izvođača koji odgovara za cijeli sustav?
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
