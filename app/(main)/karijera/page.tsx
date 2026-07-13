import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Briefcase, Building2, ArrowRight, Mail, Users } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import { getActiveJobs, getCompanies, getCareerContactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Karijera",
  description:
    "Pridružite se FSB timu - pregledajte otvorene pozicije i postanite dio vodećeg tima za protupožarnu zaštitu u Hrvatskoj.",
};

export default function KarijeraPage() {
  const jobs = getActiveJobs();
  const companies = getCompanies();
  const contactEmail = getCareerContactEmail();

  return (
    <>
      <PageHeader
        title="Pridruži se našem timu"
        subtitle="Karijera"
        description="Gradimo budućnost protupožarne zaštite u Hrvatskoj - budi dio našeg tima stručnjaka."
      />

      {/* Companies section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">
              <Building2 className="h-4 w-4" />
              Naše tvrtke
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Tko smo mi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100"
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {company.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Kontinuirana edukacija", icon: "📚" },
              { label: "Konkurentne plaće", icon: "💰" },
              { label: "Timski rad", icon: "🤝" },
              { label: "Mogućnost napredovanja", icon: "📈" },
            ].map((benefit) => (
              <div
                key={benefit.label}
                className="text-center p-6 bg-white rounded-xl border border-neutral-100"
              >
                <span className="text-3xl mb-3 block">{benefit.icon}</span>
                <p className="text-sm font-medium text-neutral-700">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">
              <Briefcase className="h-4 w-4" />
              Otvorene pozicije
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Tražimo nove članove tima
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Pregledajte naše trenutno otvorene pozicije i pronađite priliku koja odgovara vašim vještinama.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/karijera/${job.slug}`}
                className="group block bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-brand-600 font-medium">
                    <span>Saznaj više</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous application */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Otvorena prijava
            </h2>
            <p className="text-neutral-300 max-w-xl mx-auto mb-8">
              Ne pronalazite odgovarajuću poziciju? Pošaljite nam svoju otvorenu prijavu - uvijek smo zainteresirani za talentirane ljude.
            </p>
            <a
              href={`mailto:${contactEmail}?subject=Otvorena prijava - FSB`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-full hover:bg-brand-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Pošalji prijavu</span>
            </a>
            <p className="mt-6 text-sm text-neutral-400">
              Pišite nam na: <span className="text-white">{contactEmail}</span>
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
