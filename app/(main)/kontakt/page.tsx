import { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel } from "@/components/site/tokens";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte FSB d.o.o. za sve vaše upite o protupožarnoj zaštiti. Dostupni smo telefonom, emailom ili osobno u našim prostorima.",
};

const contactInfo = [
  {
    title: "Telefon",
    content: "+385 1 3496 811",
    href: "tel:+38513496811",
    description: "Pon - Pet, 08:00 - 16:00",
  },
  {
    title: "Email",
    content: "info@fsb-zagreb.hr",
    href: "mailto:info@fsb-zagreb.hr",
    description: "Odgovaramo unutar 24 sata",
  },
  {
    title: "Radno vrijeme",
    content: "Pon - Pet: 08:00 - 16:00",
    description: "Subota i nedjelja: zatvoreno",
  },
];

const locations = [
  {
    name: "FSB d.o.o.",
    address: "Samoborska Cesta 91B",
    city: "10000 Zagreb",
    href: "https://maps.google.com/?q=Samoborska+Cesta+91B+Zagreb",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6438.3273898673!2d15.875223!3d45.811062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d1a0699a9dc5%3A0xf26ff3eba66388d6!2sSamoborska%20cesta%2091B%2C%2010000%2C%20Zagreb%2C%20Croatia!5e1!3m2!1sen!2sus!4v1779105245054!5m2!1sen!2sus",
  },
  {
    name: "FSB SOLUTIONS d.o.o.",
    address: "Samoborski Odvojak 1",
    city: "10000 Zagreb",
    href: "https://maps.google.com/?q=Samoborski+Odvojak+1+Zagreb",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6438.34565421049!2d15.875127!3d45.810904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d1a041da1359%3A0xaf04362b9c99e403!2sSamoborski%20Cesta%20odv.%201%2C%2010000%2C%20Zagreb%2C%20Croatia!5e1!3m2!1sen!2sus!4v1779105234450!5m2!1sen!2sus",
  },
];

export default function KontaktPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title="Kontaktirajte nas"
        subtitle="Kontakt"
        description="Stojimo vam na raspolaganju za sve upite o protupožarnoj zaštiti."
      />

      {/* ── 1.0 Kontakt podaci — spec-tablica ──────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="1.0" title="Kontakt podaci" note="Odgovaramo unutar 24 sata" />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-hairline border border-hairline">
          {contactInfo.map((item, i) => {
            const inner = (
              <div className="bg-white p-6 h-full transition-colors group-hover:bg-paper">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  {String(i + 1).padStart(2, "0")} / {item.title}
                </span>
                <p className="mt-3 text-lg font-bold tracking-tight">{item.content}</p>
                {item.description && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                    {item.description}
                  </p>
                )}
              </div>
            );

            if (item.href) {
              return (
                <Reveal key={item.title} delay={i * 0.08} className="bg-white">
                  <a href={item.href} className="group block h-full">
                    {inner}
                  </a>
                </Reveal>
              );
            }

            return (
              <Reveal key={item.title} delay={i * 0.08} className="bg-white">
                {inner}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── 2.0 Pošaljite upit — obrazac i lokacije ────── */}
      <section className={`${container} pb-20 md:pb-28`}>
        <Reveal>
          <SectionHead index="2.0" title="Pošaljite upit" note="Obrazac i lokacije" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Obrazac */}
          <Reveal>
            <p className="text-neutral-600 mb-8">
              Ispunite obrazac i javit ćemo vam se u najkraćem roku.
            </p>
            <ContactForm />
          </Reveal>

          {/* Karte */}
          <Reveal delay={0.08}>
            <p className="text-neutral-600 mb-8">
              Posjetite nas na jednoj od naših lokacija u Zagrebu.
            </p>
            <div className="space-y-8">
              {locations.map((location, i) => (
                <div key={location.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em]">
                      <span className="text-red">L.{String(i + 1).padStart(2, "0")}</span>{" "}
                      <span className="font-semibold text-ink">{location.name}</span>{" "}
                      <span className="text-neutral-400">
                        — {location.address}, {location.city}
                      </span>
                    </p>
                    <a
                      href={location.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-red hover:opacity-80 transition-opacity"
                    >
                      Karta ↗
                    </a>
                  </div>
                  <div className="relative aspect-video border border-hairline bg-white">
                    <iframe
                      src={location.embedUrl}
                      width="100%"
                      height="100%"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Lokacija ${location.name}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Hitni slučajevi — tinta ────────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-24`}>
          <Reveal>
            <span className={monoLabel}>Hitni slučajevi</span>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-[1.05]">
              Za hitne situacije nazovite nas izravno.
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl leading-relaxed">
              Dostupni smo za konzultacije i izvan radnog vremena.
            </p>
            <a
              href="tel:+38513496811"
              className="mt-8 inline-block px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
            >
              +385 1 3496 811
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
