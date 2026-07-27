interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

// Naslov sekcije: mono crveni natpis + čvrst naslov (K1 idiom).
export default function SectionHeading({
  title,
  subtitle,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-red mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">{title}</h2>
      {description && (
        <p
          className={`mt-4 text-lg text-neutral-600 ${
            centered ? "max-w-2xl mx-auto" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
