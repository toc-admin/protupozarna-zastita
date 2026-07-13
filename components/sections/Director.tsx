import Image from "next/image";

export default function Director() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-brand-500 rounded-2xl transform rotate-3" />
            <div className="relative h-full bg-neutral-200 rounded-2xl overflow-hidden">
              <Image
                src="/images/team/direktor.jpg"
                alt="Dipl. ing. Stipe Barišić - Direktor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Vodstvo
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Dipl. ing. Stipe Barišić
            </h2>
            <p className="mt-2 text-lg text-neutral-600">
              Direktor i osnivač
            </p>
            <div className="mt-6 space-y-4 text-neutral-600">
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
      </div>
    </section>
  );
}
