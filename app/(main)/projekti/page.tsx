import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { container, monoLabel } from "@/components/site/tokens";
import { getAllProjects, getProjectCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projekti",
  description:
    "Pregledajte naše uspješno realizirane projekte protupožarne zaštite - stambene zgrade, tuneli, bolnice, poslovne zgrade i javna infrastruktura.",
};

// Registar projekata — smjer K1: dosje-redovi s mono činjenicama,
// filtriranje po kategorijama ostaje u ProjectsGrid klijentskoj komponenti.
export default function ProjektiPage() {
  const projects = getAllProjects();
  const categories = getProjectCategories();

  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title="Naši projekti"
        subtitle="Portfolio"
        description="Više od 300 uspješno realiziranih projekata u različitim sektorima."
      />

      <section className={`${container} py-16 md:py-24`}>
        <ProjectsGrid projects={projects} categories={categories} />
      </section>

      {/* Zaključni poziv — tinta */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-28`}>
          <span className={monoLabel}>Zatražite ponudu</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.05]">
            Imate sličan projekt? Razgovarajmo o sustavu.
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Kontaktirajte nas
            </Link>
            <a
              href="tel:+38513496811"
              className="px-7 py-3.5 font-semibold border border-white/30 hover:bg-white/10 transition-colors"
            >
              +385 1 3496 811
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
