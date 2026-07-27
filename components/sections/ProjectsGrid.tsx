"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { monoLabel } from "@/components/site/tokens";
import type { Project } from "@/lib/content";

interface ProjectsGridProps {
  projects: Project[];
  categories: string[];
}

// Registar projekata s filtriranjem — dosje-redovi u jeziku tehničkog lista.
export default function ProjectsGrid({ projects, categories }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory
    ? projects.filter((project) => project.category === activeCategory)
    : projects;

  const chipBase =
    "px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors";

  return (
    <>
      {/* Filtar po kategorijama — kvadratni mono čipovi */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`${chipBase} ${
            activeCategory === null
              ? "bg-ink text-white"
              : "border border-hairline text-neutral-600 hover:border-ink hover:text-ink"
          }`}
        >
          Svi projekti
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`${chipBase} ${
              activeCategory === category
                ? "bg-red text-white"
                : "border border-hairline text-neutral-600 hover:border-ink hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Brojač zapisa */}
      <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "zapis" : "zapisa"} u registru
      </p>

      {/* Dosje-redovi projekata */}
      {filteredProjects.length > 0 ? (
        <div className="space-y-px bg-hairline">
          {filteredProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projekti/${project.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-paper"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                />
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center border border-hairline md:border-l-0">
                <div className="flex items-baseline justify-between gap-4">
                  <span className={monoLabel}>{project.category}</span>
                  <span className="font-mono text-[12px] text-neutral-400">
                    PR.{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-red transition-colors">
                  {project.title}
                </h2>
                <dl className="mt-5 grid grid-cols-2 gap-y-1.5 font-mono text-[12px] max-w-xs">
                  <dt className="text-neutral-400 uppercase tracking-[0.1em]">
                    Lokacija
                  </dt>
                  <dd>{project.location}</dd>
                  <dt className="text-neutral-400 uppercase tracking-[0.1em]">
                    Godina
                  </dt>
                  <dd>{project.year}</dd>
                  <dt className="text-neutral-400 uppercase tracking-[0.1em]">
                    Opseg
                  </dt>
                  <dd>{project.scope.length} sustava</dd>
                </dl>
                <p className="mt-5 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="py-16 font-mono text-[13px] text-neutral-500">
          — Trenutno nema objavljenih projekata u ovoj kategoriji.
        </p>
      )}
    </>
  );
}
