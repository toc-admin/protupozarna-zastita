"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import type { Project } from "@/lib/content";

interface ProjectsGridProps {
  projects: Project[];
  categories: string[];
}

export default function ProjectsGrid({ projects, categories }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory
    ? projects.filter((project) => project.category === activeCategory)
    : projects;

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          Svi projekti
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projekti/${project.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-brand-400 text-sm font-medium mb-2">
                  {project.category}
                </p>
                <h2 className="text-xl font-semibold text-white group-hover:text-brand-100 transition-colors">
                  {project.title}
                </h2>
                <div className="mt-3 flex items-center gap-4 text-sm text-neutral-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-neutral-500">
          <p>Trenutno nema objavljenih projekata u ovoj kategoriji.</p>
        </div>
      )}
    </>
  );
}
