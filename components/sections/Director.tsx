import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel } from "@/components/site/tokens";

// Vodstvo — dokumentarna fotografija (puna boja) + tekst u obrubljenom panelu.
export default function Director() {
  return (
    <section className={`${container} pb-20 md:pb-28`}>
      <Reveal>
        <SectionHead index="4.0" title="Vodstvo" note="Direktor i osnivač" />
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-hairline border border-hairline">
          {/* Fotografija */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[480px] bg-white">
            <Image
              src="/images/team/direktor.jpg"
              alt="Dipl. ing. Stipe Barišić — direktor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Sadržaj */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <span className={monoLabel}>Vodstvo</span>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Dipl. ing. Stipe Barišić
            </h3>
            <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.15em] text-neutral-400">
              Direktor i osnivač
            </p>
            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                S 20 godina iskustva u pasivnoj protupožarnoj zaštiti, Stipe Barišić
                jedan je od vodećih stručnjaka u Hrvatskoj i regiji. Karijeru je gradio
                kao direktor predstavništva Promat G.m.b.H. u Hrvatskoj te tehnički
                direktor Promat SEE.
              </p>
              <p>
                FSB je osnovao 2013. godine, nastavljajući na dokazanom modelu
                poslovanja — savjetovanju za optimalan odabir mjera pasivne protupožarne
                zaštite i izvođenju zahtjevnih projekata, s više od 300 uspješno
                realiziranih projekata.
              </p>
              <p>
                Redovito educira stručnu javnost kroz seminare i predavanja, uključujući
                Croatian Fire Safety Forum.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
