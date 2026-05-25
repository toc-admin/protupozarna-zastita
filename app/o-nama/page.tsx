import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Stats from "@/components/sections/Stats";
import Certifications from "@/components/sections/Certifications";
import Director from "@/components/sections/Director";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "FSB Protupožarna Zaštita - više od 30 godina iskustva u protupožarnoj zaštiti. Upoznajte naš tim i saznajte više o našim certifikatima i kvalifikacijama.",
};

export default function ONamaPage() {
  return (
    <>
      <PageHeader
        title="O nama"
        subtitle="FSB Protupožarna Zaštita"
        description="Više od tri desetljeća gradimo povjerenje kroz izvrsnost u protupožarnoj zaštiti."
      />

      {/* Story section with image */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Naša priča</h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  FSB Protupožarna Zaštita osnovana je s ciljem pružanja vrhunskih usluga
                  protupožarne zaštite na hrvatskom tržištu. Od samog početka, naš fokus bio
                  je na kvaliteti, stručnosti i pouzdanosti.
                </p>
                <p>
                  Tijekom više od 30 godina rada, realizirali smo preko 300 projekata za
                  najzahtjevnije klijente - od zdravstvenih ustanova i poslovnih zgrada do
                  javne infrastrukture i industrijskih objekata.
                </p>
                <p>
                  Naš tim čine iskusni stručnjaci s dugogodišnjim iskustvom u području
                  protupožarne zaštite. Kontinuirano se educiramo i pratimo najnovije
                  trendove i tehnologije u industriji.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/services/izvodjenje-radova.jpg"
                alt="FSB tim na poslu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Mission & Values */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Naša misija</h2>
            <p className="text-lg text-neutral-600">
              Osigurati najvišu razinu protupožarne zaštite za sve vrste objekata,
              kombinirajući stručno znanje, kvalitetne materijale i profesionalnu izvedbu.
            </p>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 mb-6">Naše vrijednosti</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 bg-white rounded-2xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Stručnost</h4>
              <p className="text-sm text-neutral-600">
                Kontinuirano usavršavanje i praćenje najnovijih standarda u industriji.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Kvaliteta</h4>
              <p className="text-sm text-neutral-600">
                Korištenje samo provjerenih materijala i tehnologija vrhunske kvalitete.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Pouzdanost</h4>
              <p className="text-sm text-neutral-600">
                Ispunjavanje obećanja i poštivanje dogovorenih rokova i uvjeta.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Partnerstvo</h4>
              <p className="text-sm text-neutral-600">
                Izgradnja dugoročnih odnosa s klijentima temeljenih na povjerenju.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Certifications />
      <Director />
      <ContactCTA />
    </>
  );
}
