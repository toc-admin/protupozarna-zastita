import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Products from "@/components/sections/Products";
import Projects from "@/components/sections/Projects";
import BlogSection from "@/components/sections/BlogSection";
import Certifications from "@/components/sections/Certifications";
import PartnerSection from "@/components/sections/PartnerSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero
        title="Vaš pouzdan partner za protupožarnu zaštitu"
        subtitle="FSB d.o.o."
        description="20 godina iskustva u proizvodnji i izvođenju pasivne protupožarne zaštite. Proizvođač je partner, ne samo dobavljač."
        primaryCta={{
          text: "Naše usluge",
          href: "/usluge",
        }}
        secondaryCta={{
          text: "O nama",
          href: "/o-nama",
        }}
        backgroundImage="/images/herobg.png"
        size="large"
      />
      <Services />
      <Stats />
      <Products />
      <Projects />
      <BlogSection />
      <Certifications />
      <PartnerSection />
      <ContactCTA />
    </>
  );
}
