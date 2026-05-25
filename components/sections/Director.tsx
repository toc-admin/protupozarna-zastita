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
                alt="Dipl. ing. Miro Bačlija - Direktor"
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
              Dipl. ing. Miro Bačlija
            </h2>
            <p className="mt-2 text-lg text-neutral-600">
              Direktor i osnivač
            </p>
            <div className="mt-6 space-y-4 text-neutral-600">
              <p>
                S više od 30 godina iskustva u području protupožarne zaštite, Miro Bačlija
                je jedan od vodećih stručnjaka u Hrvatskoj. Diplomirao je na Fakultetu
                strojarstva i brodogradnje u Zagrebu.
              </p>
              <p>
                Pod njegovim vodstvom, FSB Protupožarna Zaštita izrasla je u jednu od
                vodećih tvrtki u području protupožarne zaštite u regiji, s više od 300
                uspješno realiziranih projekata.
              </p>
              <p>
                Aktivno sudjeluje u izradi normi i propisa te redovito educira stručnu
                javnost kroz seminare i publikacije.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
