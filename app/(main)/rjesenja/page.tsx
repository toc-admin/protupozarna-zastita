import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAllSolutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rješenja",
  description:
    "Pregledajte našu ponudu protupožarnih rješenja - sustavi za brtvljenje, protupožarne ploče, zaklopke i sustavi za odvod dima.",
};

export default function RjesenjaPage() {
  const solutions = getAllSolutions();

  return (
    <>
      <PageHeader
        title="Protupožarna rješenja"
        subtitle="Naša rješenja"
        description="Certificirana protupožarna rješenja za sve vrste objekata i primjena."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/rjesenja/${solution.slug}`}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all"
              >
                <div className="relative aspect-video bg-neutral-100">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                    {solution.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                    {solution.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-brand-500 font-medium bg-brand-50 px-2 py-1 rounded">
                      {solution.specifications.fireResistance}
                    </span>
                    <span className="flex items-center gap-1 text-brand-500 text-sm font-medium">
                      Detalji
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
