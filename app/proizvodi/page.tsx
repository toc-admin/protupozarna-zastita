import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Zap, Headphones } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAllProductCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proizvodi",
  description:
    "Pregledajte našu ponudu protupožarnih proizvoda - brtvljenje, premazi, ploče, moduli, stakla i vuna vodećih svjetskih proizvođača.",
};

export default function ProizvodiPage() {
  const categories = getAllProductCategories();

  return (
    <>
      <PageHeader
        title="Protupožarni proizvodi"
        subtitle="Naši proizvodi"
        description="Distribuiramo vrhunske proizvode vodećih proizvođača Promat i Rudolf Hensel."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/proizvodi/${category.slug}`}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all"
              >
                <div className="relative aspect-[4/3] bg-neutral-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-lg font-semibold text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-neutral-600 line-clamp-2">{category.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-brand-500 text-sm font-medium">
                    <span>Pogledaj proizvode</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="text-brand-500 font-medium text-sm mb-2 block">Zašto mi</span>
            <h2 className="text-3xl font-bold text-neutral-900">
              Zašto odabrati naše proizvode?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-neutral-200">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Certificirani proizvodi
              </h3>
              <p className="text-neutral-600 text-sm">
                Svi proizvodi imaju potrebne certifikate i ispitani su prema europskim normama.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-neutral-200">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Brza isporuka
              </h3>
              <p className="text-neutral-600 text-sm">
                Većina proizvoda dostupna je na skladištu za brzu isporuku diljem Hrvatske.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-neutral-200">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Tehnička podrška
              </h3>
              <p className="text-neutral-600 text-sm">
                Naši stručnjaci pružaju podršku pri odabiru i primjeni proizvoda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
