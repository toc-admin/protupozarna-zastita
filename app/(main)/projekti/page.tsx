import { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { getAllProjects, getProjectCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projekti",
  description:
    "Pregledajte naše uspješno realizirane projekte protupožarne zaštite - stambene zgrade, tuneli, bolnice, poslovne zgrade i javna infrastruktura.",
};

export default function ProjektiPage() {
  const projects = getAllProjects();
  const categories = getProjectCategories();

  return (
    <>
      <PageHeader
        title="Naši projekti"
        subtitle="Portfolio"
        description="Više od 300 uspješno realiziranih projekata u različitim sektorima."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProjectsGrid projects={projects} categories={categories} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
