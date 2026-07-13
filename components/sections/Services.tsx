"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Calculator, GraduationCap, FlaskConical } from "lucide-react";

const services = [
  {
    title: "Izvođenje radova",
    description: "Profesionalno izvođenje svih vrsta radova pasivne protupožarne zaštite.",
    href: "/usluge/izvodjenje-radova-protupozarne-zastite",
    icon: Wrench,
    image: "/images/fsb/rjesenja/obloge-1.jpg",
  },
  {
    title: "Razvoj i proizvodnja",
    description: "Vlastiti R&D tim i proizvodnja protupožarne bravarije.",
    href: "/usluge/razvoj-i-proizvodnja",
    icon: FlaskConical,
    image: "/images/fsb/factory/factory-aerial-1.jpg",
  },
  {
    title: "Savjetovanje i optimizacija",
    description: "Optimizacija troškova i odabir odgovarajućih rješenja.",
    href: "/usluge/optimizacija-troskova-protupozarne-zastite",
    icon: Calculator,
    image: "/images/fsb/rjesenja/stakla-1.jpg",
  },
  {
    title: "FSB Academy",
    description: "Edukacijski programi za sudionike u protupožarnoj zaštiti. Uskoro.",
    href: "/usluge/fsb-academy",
    icon: GraduationCap,
    image: "/images/fsb/rjesenja/parapet-1.jpg",
  },
];

function ServiceCard({
  service,
  className,
  index,
  isVisible
}: {
  service: typeof services[0];
  className?: string;
  index: number;
  isVisible: boolean;
}) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className={`group relative rounded-2xl overflow-hidden ${className} ${
        isVisible ? "animate-slideUp" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center mb-3">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">
          {service.title}
        </h3>
        <p className="text-neutral-300 text-sm mb-3">
          {service.description}
        </p>
        <div className="flex items-center gap-1.5 text-white text-sm font-medium">
          <span>Saznaj više</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
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
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-brand-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header - Left aligned */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">
            Naše usluge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            Sve što trebate za
            <br />
            <span className="text-gradient">protupožarnu zaštitu</span>
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              className="h-[280px]"
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
