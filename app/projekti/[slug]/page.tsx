import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Check } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import Button from "@/components/ui/Button";
import { getProjectBySlug, getProjectSlugs, getAllProjects } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projekt nije pronađen" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const relatedProjects = allProjects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      {/* Project Hero with background image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
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
              href="/projekti"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Svi projekti</span>
            </Link>

            <span className="inline-block px-3 py-1 bg-brand-500 text-white text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">O projektu</h2>
                <p className="text-lg text-neutral-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Gallery */}
              {project.gallery.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">Galerija</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - slika ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scope */}
              <div className="p-8 bg-neutral-50 rounded-2xl">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  Opseg radova
                </h3>
                <ul className="space-y-4">
                  {project.scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-700 pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA */}
                <div className="bg-neutral-900 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-2">
                    Imate sličan projekt?
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6">
                    Kontaktirajte nas za konzultacije i ponudu.
                  </p>
                  <Button href="/kontakt" className="w-full">
                    Zatražite ponudu
                  </Button>
                </div>

                {/* Related projects */}
                {relatedProjects.length > 0 && (
                  <div className="bg-neutral-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-neutral-900 mb-4">
                      Slični projekti
                    </h3>
                    <ul className="space-y-4">
                      {relatedProjects.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/projekti/${p.slug}`}
                            className="group flex items-center gap-4"
                          >
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-neutral-200 flex-shrink-0">
                              <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-neutral-900 group-hover:text-brand-500 transition-colors">
                                {p.title}
                              </p>
                              <p className="text-sm text-neutral-500">{p.location}</p>
                            </div>
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
