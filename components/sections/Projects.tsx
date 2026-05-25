"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    title: "KBC Sestre milosrdnice",
    category: "Zdravstvene ustanove",
    image: "/images/projects/kbc-sestre.jpg",
    href: "/projekti/kbc-sestre-milosrdnice",
  },
  {
    title: "Poslovna zgrada BHB",
    category: "Poslovne zgrade",
    image: "/images/projects/bhb.jpg",
    href: "/projekti/poslovna-zgrada-bhb",
  },
  {
    title: "Žičara Sljeme",
    category: "Javna infrastruktura",
    image: "/images/projects/zicara-sljeme.jpg",
    href: "/projekti/zicara-sljeme",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-400 font-medium text-sm mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Izdvojeni projekti
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-xl">
              Pogledajte neke od naših uspješno realiziranih projekata protupožarne zaštite.
            </p>
          </div>
          <Link
            href="/projekti"
            className="group flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all"
          >
            <span>Svi projekti</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className={`group relative rounded-3xl overflow-hidden aspect-[3/4] ${
                isVisible ? "animate-slideUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-brand-400 text-sm font-medium mb-2 flex items-center gap-2">
                  <span className="w-8 h-px bg-brand-400" />
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-brand-100 transition-colors">
                  {project.title}
                </h3>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-medium">Pogledaj projekt</span>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
