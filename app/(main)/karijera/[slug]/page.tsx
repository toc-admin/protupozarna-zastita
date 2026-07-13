import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, Check, Mail } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { getJobBySlug, getJobSlugs, getCareerContactEmail } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getJobSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Pozicija nije pronađena" };
  }

  return {
    title: `${job.title} - Karijera`,
    description: job.description,
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  const contactEmail = getCareerContactEmail();

  if (!job) {
    notFound();
  }

  return (
    <>
      {/* Job Hero */}
      <section className="pt-32 pb-16 bg-neutral-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/karijera"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Sve pozicije</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
              <Briefcase className="h-3.5 w-3.5" />
              {job.department}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-500 text-white rounded-full text-sm font-medium">
              {job.type}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {job.title}
          </h1>

          <p className="text-xl text-neutral-300">
            {job.description}
          </p>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Što ćeš raditi
                </h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-brand-600" />
                      </div>
                      <span className="text-neutral-700 pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Što tražimo
                </h2>
                <ul className="space-y-4">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-neutral-600" />
                      </div>
                      <span className="text-neutral-700 pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="p-8 bg-neutral-50 rounded-2xl">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Što nudimo
                </h2>
                <ul className="space-y-4">
                  {job.benefits.map((item, index) => (
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
                {/* Apply CTA */}
                <div className="bg-neutral-900 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold text-lg mb-2">
                    Zainteresiran/a si?
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6">
                    Pošalji nam svoju prijavu i životopis. Javit ćemo ti se u najkraćem mogućem roku.
                  </p>
                  <a
                    href={`mailto:${contactEmail}?subject=Prijava za poziciju: ${job.title}`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand-500 text-white font-medium rounded-full hover:bg-brand-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Prijavi se</span>
                  </a>
                  <p className="mt-4 text-xs text-neutral-500 text-center">
                    Piši na: {contactEmail}
                  </p>
                </div>

                {/* Quick info */}
                <div className="bg-neutral-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">
                    Brze informacije
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-neutral-500">Lokacija</dt>
                      <dd className="font-medium text-neutral-900">{job.location}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-neutral-500">Odjel</dt>
                      <dd className="font-medium text-neutral-900">{job.department}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-neutral-500">Vrsta zaposlenja</dt>
                      <dd className="font-medium text-neutral-900">{job.type}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
