"use client";

import { useEffect, useState } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export default function PageHeader({
  title,
  subtitle,
  description,
  align = "left",
}: PageHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {subtitle && (
            <span
              className={`inline-flex items-center gap-2 text-brand-400 font-medium text-sm mb-4 transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="w-2 h-2 bg-brand-500 rounded-full" />
              {subtitle}
            </span>
          )}

          <h1
            className={`text-4xl md:text-5xl font-bold text-white leading-tight transform transition-all duration-500 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`mt-4 text-lg text-neutral-400 transform transition-all duration-500 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
