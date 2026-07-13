import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, FileText, Settings } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import Button from "@/components/ui/Button";
import { getSolutionBySlug, getSolutionSlugs, getAllSolutions } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getSolutionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Rješenje nije pronađeno" };
  }

  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const allSolutions = getAllSolutions();
  const relatedSolutions = allSolutions
    .filter((s) => s.slug !== slug && s.category === solution.category)
    .slice(0, 3);

  return (
    <>
      {/* Solution Hero with background image */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-900/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pb-12 md:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/rjesenja"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Sva rješenja</span>
            </Link>

            <span className="inline-block px-3 py-1 bg-brand-500 text-white text-sm font-medium rounded-full mb-4">
              {solution.specifications.fireResistance}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {solution.title}
            </h1>

            <p className="text-lg text-neutral-300 max-w-2xl">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Solution content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {solution.fullDescription.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                    return (
                      <ul key={index} className="space-y-3 my-6 list-none p-0">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-brand-500 rounded-full mt-2.5 flex-shrink-0" />
                            <span className="text-neutral-700">{item.substring(2)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-neutral-600 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Specifications */}
                <div className="bg-neutral-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-brand-500" />
                    Specifikacije
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-neutral-500">Otpornost na požar</dt>
                      <dd className="font-semibold text-neutral-900">
                        {solution.specifications.fireResistance}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-neutral-500">Standard</dt>
                      <dd className="font-semibold text-neutral-900">
                        {solution.specifications.standard}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-neutral-500">Primjena</dt>
                      <dd className="font-semibold text-neutral-900">
                        {solution.specifications.application}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* CTA */}
                <div className="bg-neutral-900 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-brand-400" />
                    Dokumentacija
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6">
                    Zatražite tehničku dokumentaciju i certifikate.
                  </p>
                  <Button href="/kontakt" className="w-full">
                    Kontaktirajte nas
                  </Button>
                </div>

                {/* Related solutions */}
                {relatedSolutions.length > 0 && (
                  <div className="bg-neutral-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-brand-500" />
                      Slična rješenja
                    </h3>
                    <ul className="space-y-3">
                      {relatedSolutions.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/rjesenja/${s.slug}`}
                            className="text-neutral-600 hover:text-brand-500 transition-colors"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
