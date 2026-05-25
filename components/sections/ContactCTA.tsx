"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";

export default function ContactCTA() {
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
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/30 via-neutral-900 to-neutral-900" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Glowing line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto ${
            isVisible ? "animate-slideUp" : "opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-medium text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Kontaktirajte nas
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Trebate stručnu pomoć za{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
              protupožarnu zaštitu?
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-neutral-400 leading-relaxed">
            Kontaktirajte nas za besplatne konzultacije. Naš tim stručnjaka stoji vam na
            raspolaganju za sve vaše upite i projekte.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/kontakt" size="lg" className="group w-full sm:w-auto">
              Zatražite ponudu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="tel:+38514878515"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5 mr-2" />
              +385 1 4878 515
            </Button>
          </div>
        </div>

        {/* Contact cards */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto ${
            isVisible ? "animate-slideUp" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="tel:+38514878515"
            className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Nazovite nas</p>
              <p className="text-lg font-semibold text-white">+385 1 4878 515</p>
            </div>
          </a>

          <a
            href="mailto:info@fsb-protupozarna-zastita.hr"
            className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Pošaljite email</p>
              <p className="text-lg font-semibold text-white truncate">info@fsb-protupozarna-zastita.hr</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
