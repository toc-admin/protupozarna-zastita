import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAllServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "FSB d.o.o. nudi kompletan spektar usluga - izvođenje radova, savjetovanje i optimizacija troškova, razvoj i proizvodnja te FSB Academy.",
};

export default function UslugePage() {
  const services = getAllServices();

  return (
    <>
      <PageHeader
        title="Naše usluge"
        subtitle="Što nudimo"
        description="Kompletan spektar usluga pasivne protupožarne zaštite - od razvoja i proizvodnje do savjetovanja i izvođenja."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/usluge/${service.slug}`}
                className="group relative rounded-2xl overflow-hidden h-[320px]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-neutral-300 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <span>Saznaj više</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
