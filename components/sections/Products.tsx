"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Paintbrush, LayoutGrid, Box, Square, Layers } from "lucide-react";

const productCategories = [
  {
    title: "Protupožarno brtvljenje",
    href: "/proizvodi/protupozarno-brtvljenje",
    icon: Shield,
  },
  {
    title: "Protupožarna boja",
    href: "/proizvodi/protupozarna-boja-i-premaz",
    icon: Paintbrush,
  },
  {
    title: "Protupožarne ploče",
    href: "/proizvodi/protupozarne-ploce",
    icon: LayoutGrid,
  },
  {
    title: "Protupožarni moduli",
    href: "/proizvodi/protupozarni-moduli",
    icon: Box,
  },
  {
    title: "Protupožarna stakla",
    href: "/proizvodi/protupozarna-stakla",
    icon: Square,
  },
  {
    title: "Protupožarna vuna",
    href: "/proizvodi/protupozarna-vuna",
    icon: Layers,
  },
];

export default function Products() {
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
    <section ref={ref} className="py-24 md:py-32 bg-white grain relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">
              Proizvodi
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Vrhunski{" "}
              <span className="text-gradient">protupožarni</span>{" "}
              proizvodi
            </h2>
          </div>
          <div className="flex flex-col lg:items-end gap-6">
            <p className="text-lg text-neutral-600 max-w-md lg:text-right">
              Distribuiramo proizvode vodećih svjetskih proizvođača Promat i Rudolf Hensel.
            </p>
            <Link
              href="/proizvodi"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-brand-500 text-white rounded-full font-medium transition-colors self-start lg:self-end"
            >
              <span>Svi proizvodi</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Products Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            const isLarge = index === 0 || index === 3;

            return (
              <Link
                key={category.title}
                href={category.href}
                className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-neutral-50 hover:bg-white border-2 border-transparent hover:border-brand-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isLarge ? "md:col-span-1 row-span-1 min-h-[240px]" : "min-h-[200px]"
                } ${isVisible ? "animate-slideUp" : "opacity-0"}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon container */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-5 shadow-xl shadow-brand-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon className="h-10 w-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-center text-base lg:text-lg font-bold text-neutral-900 group-hover:text-brand-600 transition-colors">
                  {category.title}
                </h3>

                {/* Arrow */}
                <div className="relative mt-4 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="h-5 w-5 text-brand-500" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Partner logos */}
        <div className="mt-24 pt-12 border-t border-neutral-100">
          <p className="text-center text-sm text-neutral-400 mb-10 uppercase tracking-widest font-medium">
            Ovlašteni distributer
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24">
            <div className="text-3xl lg:text-4xl font-bold text-neutral-300 hover:text-neutral-900 transition-colors cursor-default">
              PROMAT
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-neutral-300 hover:text-neutral-900 transition-colors cursor-default">
              Rudolf Hensel
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-neutral-300 hover:text-neutral-900 transition-colors cursor-default">
              SILCA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
