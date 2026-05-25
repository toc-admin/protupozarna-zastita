"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Award, Clock, Users, CheckCircle, Zap } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "30+ godina",
    description: "Iskustva u industriji",
  },
  {
    icon: Award,
    title: "ISO 9001",
    description: "Certificirani sustav",
  },
  {
    icon: CheckCircle,
    title: "300+ projekata",
    description: "Uspješno realizirano",
  },
  {
    icon: Users,
    title: "Stručni tim",
    description: "Certificirani inženjeri",
  },
  {
    icon: Zap,
    title: "Brza reakcija",
    description: "24/7 podrška",
  },
  {
    icon: Clock,
    title: "Na vrijeme",
    description: "Poštivanje rokova",
  },
];

export default function TrustBadges() {
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
    <section ref={ref} className="py-16 bg-brand-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600/50 via-transparent to-brand-600/50 animate-shimmer" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className={`flex flex-col items-center text-center text-white ${
                  isVisible ? "animate-slideUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="font-bold text-lg">{badge.title}</div>
                <div className="text-sm text-white/80">{badge.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
