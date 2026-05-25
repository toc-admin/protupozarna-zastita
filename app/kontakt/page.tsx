import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte FSB Protupožarna Zaštita za sve vaše upite o protupožarnoj zaštiti. Dostupni smo telefonom, emailom ili osobno u našim prostorima.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+385 1 4878 515",
    href: "tel:+38514878515",
    description: "Pon - Pet, 08:00 - 16:00",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@fsb-protupozarna-zastita.hr",
    href: "mailto:info@fsb-protupozarna-zastita.hr",
    description: "Odgovaramo unutar 24 sata",
  },
  {
    icon: Clock,
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
    <>
      <PageHeader
        title="Kontaktirajte nas"
        subtitle="Kontakt"
        description="Stojimo vam na raspolaganju za sve upite o protupožarnoj zaštiti."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="p-6 bg-neutral-50 rounded-2xl hover:bg-brand-50 transition-colors h-full">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-brand-500" />
                  </div>
                  <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-1 text-brand-600 font-medium">{item.content}</p>
                  {item.description && (
                    <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
                  )}
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={item.title}>{content}</div>;
            })}
          </div>

          {/* Location cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {locations.map((location) => (
              <a
                key={location.name}
                href={location.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-6 bg-neutral-50 rounded-2xl hover:bg-brand-50 transition-colors h-full">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-brand-500" />
                  </div>
                  <h3 className="font-semibold text-neutral-900">{location.name}</h3>
                  <p className="mt-1 text-brand-600 font-medium">{location.address}</p>
                  <p className="mt-1 text-sm text-neutral-500">{location.city}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form and map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Pošaljite upit
              </h2>
              <p className="text-neutral-600 mb-6">
                Ispunite obrazac i javit ćemo vam se u najkraćem roku.
              </p>
              <ContactForm />
            </div>

            {/* Maps */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Naše lokacije
              </h2>
              <p className="text-neutral-600 mb-6">
                Posjetite nas na jednoj od naših lokacija u Zagrebu.
              </p>
              <div className="space-y-4">
                {locations.map((location) => (
                  <div key={location.name}>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-brand-500" />
                      <span className="font-medium text-neutral-900">{location.name}</span>
                      <span className="text-neutral-500">—</span>
                      <span className="text-neutral-600">{location.address}</span>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100">
                      <iframe
                        src={location.embedUrl}
                        width="100%"
                        height="100%"
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
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Hitni slučajevi?</h2>
            <p className="text-neutral-400 mb-6">
              Za hitne situacije nazovite nas izravno. Dostupni smo za konzultacije i izvan radnog vremena.
            </p>
            <a
              href="tel:+38514878515"
              className="inline-flex items-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+385 1 4878 515</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
