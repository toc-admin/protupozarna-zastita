import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container } from "@/components/site/tokens";

// Certifikati kao numerirani redovi spec-tablice — dokument, ne marketing.
const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Certifikat sustava upravljanja kvalitetom",
  },
  {
    title: "Ovlaštenja MUP-a",
    description: "Ovlaštenje za izvođenje radova protupožarne zaštite",
  },
  {
    title: "ETA Certifikati",
    description: "Europska tehnička ocjena proizvoda",
  },
  {
    title: "CE oznake",
    description: "Sukladnost s europskim standardima",
  },
];

export default function Certifications() {
  return (
    <section className={`${container} py-20 md:py-28`}>
      <Reveal>
        <SectionHead index="3.0" title="Certifikati" note="Jamstvo kvalitete" />
      </Reveal>
      <Reveal>
        <p className="max-w-2xl text-lg text-neutral-600 mb-12">
          Posjedujemo sve potrebne certifikate i ovlaštenja za profesionalno
          izvođenje protupožarne zaštite.
        </p>
      </Reveal>
      <div className="border-t border-hairline">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.08}>
            <div className="grid grid-cols-12 gap-4 items-baseline border-b border-hairline py-6">
              <span className="col-span-2 md:col-span-1 font-mono text-[12px] text-red">
                C.{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-10 md:col-span-4 text-xl font-bold tracking-tight">
                {cert.title}
              </h3>
              <p className="col-span-10 col-start-3 md:col-span-7 md:col-start-6 text-sm text-neutral-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
