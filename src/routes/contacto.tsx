import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { WhatsappGlyph } from "@/components/SiteHeader";
import { CONTACT, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | SAU Ingeniería" },
      {
        name: "description",
        content:
          "Habla con SAU Ingeniería: asesoría en tratamiento de agua, procesos industriales e insumos químicos. WhatsApp +57 301 516 2267.",
      },
      { property: "og:title", content: "Contacto | SAU Ingeniería" },
      {
        property: "og:description",
        content: "Solicita asesoría técnica para tu planta o proceso industrial en Colombia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <div>
      <section className="bg-navy py-14 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Contacto</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Hablemos de tu proyecto</h1>
          <p className="mt-4 max-w-xl text-sm text-navy-foreground/75">
            Cuéntanos qué necesitas y te acompañamos con una solución técnica a la medida.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-6">
              <h2 className="text-lg font-bold text-navy">Datos de contacto</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" /> {CONTACT.phone}
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" /> {CONTACT.address}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" /> Presencia en gran parte de {CONTACT.city}
                </li>
              </ul>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg bg-primary p-6 text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              <WhatsappGlyph className="h-10 w-10" />
              <span>
                <span className="block text-sm font-bold">Escríbenos por WhatsApp</span>
                <span className="block text-sm text-primary-foreground/85">
                  {CONTACT.whatsappDisplay}
                </span>
              </span>
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}