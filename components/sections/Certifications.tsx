"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Certifikat sustava upravljanja kvalitetom",
    icon: Award,
  },
  {
    title: "Ovlaštenja MUP-a",
    description: "Ovlaštenje za ispitivanje protupožarnih sustava",
    icon: Shield,
  },
  {
    title: "ETA Certifikati",
    description: "Europska tehnička ocjena proizvoda",
    icon: CheckCircle,
  },
  {
    title: "CE oznake",
    description: "Sukladnost s europskim standardima",
    icon: FileCheck,
  },
];

export default function Certifications() {
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
    <section ref={ref} className="py-24 md:py-32 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">
            Certifikati
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
            Jamstvo kvalitete
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Posjedujemo sve potrebne certifikate i ovlaštenja za profesionalno izvođenje protupožarne zaštite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className={`group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "animate-slideUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
