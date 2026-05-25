"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Check, ExternalLink, Award } from "lucide-react";

const partnerFeatures = [
  "Protupožarna vrata klase EI 30 do EI 120",
  "EU certifikacije i atesti",
  "Prilagođena rješenja po mjeri",
  "Tehnička podrška i konzultacije",
];

export default function PartnerSection() {
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
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl overflow-hidden ${
            isVisible ? "animate-slideUp" : "opacity-0"
          }`}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
          </div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-brand-500/20 text-brand-400 text-sm font-medium rounded-full">
                    Službeni partner
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  FSB DOORS
                </h2>
                <p className="text-xl text-brand-400 mb-6">
                  Partner za protupožarna vrata
                </p>
                <p className="text-neutral-300 leading-relaxed mb-8">
                  U suradnji s FSB DOORS nudimo vrhunska protupožarna vrata s europskim certifikacijama.
                  Od standardnih do prilagođenih rješenja - osiguravamo kompletnu zaštitu vašeg objekta.
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {partnerFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-3 ${
                        isVisible ? "animate-slideUp" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${(index + 2) * 100}ms` }}
                    >
                      <div className="w-6 h-6 bg-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-brand-400" />
                      </div>
                      <span className="text-neutral-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://www.fsb-doors.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-full hover:bg-brand-100 transition-colors group"
                >
                  <span>Posjetite FSB DOORS</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Visual element */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative">
                  {/* Main badge */}
                  <div className="w-64 h-64 bg-gradient-to-br from-brand-500/20 to-brand-600/10 rounded-full flex items-center justify-center border border-brand-500/20">
                    <div className="w-48 h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full flex items-center justify-center border border-neutral-700">
                      <div className="text-center">
                        <Award className="h-12 w-12 text-brand-500 mx-auto mb-3" />
                        <p className="text-white font-bold text-lg">Službeni partner</p>
                        <p className="text-neutral-400 text-sm">od 2015. godine</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div
                    className={`absolute -top-4 -right-4 px-4 py-2 bg-neutral-800 rounded-full border border-neutral-700 ${
                      isVisible ? "animate-slideUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: "400ms" }}
                  >
                    <span className="text-sm text-neutral-200">EI 30-120</span>
                  </div>
                  <div
                    className={`absolute -bottom-4 -left-4 px-4 py-2 bg-neutral-800 rounded-full border border-neutral-700 ${
                      isVisible ? "animate-slideUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: "500ms" }}
                  >
                    <span className="text-sm text-neutral-200">EU certifikati</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
