"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  size?: "default" | "large";
}

export default function Hero({
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage = "/images/herobg.png",
  size = "default",
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`relative overflow-hidden ${
        size === "large" ? "h-screen" : "h-[70vh] min-h-[500px]"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Protupožarna zaštita"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {subtitle && (
              <div
                className={`transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="inline-flex items-center gap-2 text-brand-400 font-medium text-sm mb-6">
                  <span className="w-2 h-2 bg-brand-500 rounded-full" />
                  {subtitle}
                </span>
              </div>
            )}

            <h1
              className={`font-bold text-white leading-[1.1] tracking-tight transform transition-all duration-700 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } text-4xl md:text-5xl lg:text-6xl`}
            >
              Vaš pouzdan
              <br />
              <span className="text-gradient">partner</span> za
              <br />
              protupožarnu zaštitu
            </h1>

            {description && (
              <p
                className={`mt-6 text-lg text-neutral-300 leading-relaxed max-w-lg transform transition-all duration-700 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div
                className={`mt-8 flex flex-wrap gap-4 transform transition-all duration-700 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg" className="group">
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
            )}

            {/* Stats row */}
            <div
              className={`mt-12 flex flex-wrap gap-8 transform transition-all duration-700 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div>
                <div className="text-3xl font-bold text-white">20</div>
                <div className="text-neutral-400 text-sm">godina iskustva</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">300+</div>
                <div className="text-neutral-400 text-sm">projekata</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">ISO</div>
                <div className="text-neutral-400 text-sm">9001 certifikat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
