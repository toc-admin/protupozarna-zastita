import { container, monoLabel } from "@/components/site/tokens";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

// Kompaktna antracit traka u jeziku tehničkog lista: mono crveni natpis,
// naslov, opis. Tematski odvaja zaglavlje stranice od papirnate osnove.
export default function PageHeader({
  title,
  subtitle,
  description,
  align = "left",
}: PageHeaderProps) {
  return (
    <section className="bg-anthracite text-paper border-b border-hairline-dark">
      <div className={`${container} py-12 md:py-16`}>
        <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {subtitle && <span className={monoLabel}>{subtitle}</span>}
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.02]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-neutral-300 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
