interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

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
        <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{title}</h2>
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
