import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardList,
  Droplet,
  FlaskConical,
  Leaf,
  Recycle,
  Settings,
} from "lucide-react";

import { SERVICES } from "@/lib/site";

const ICONS = {
  droplet: Droplet,
  recycle: Recycle,
  settings: Settings,
  flask: FlaskConical,
  leaf: Leaf,
  clipboard: ClipboardList,
} as const;

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de ingeniería ambiental | SAU Ingeniería" },
      {
        name: "description",
        content:
          "Tratamiento de agua y aguas residuales, optimización de procesos, insumos químicos, biotecnología y estudios técnicos en toda Colombia.",
      },
      { property: "og:title", content: "Servicios de ingeniería ambiental | SAU Ingeniería" },
      {
        property: "og:description",
        content:
          "Soluciones técnicas y químicas para tratamiento de agua, procesos industriales y cumplimiento normativo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <div>
      <section className="bg-navy py-14 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
            Nuestros servicios
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Soluciones a la medida de cada necesidad
          </h1>
          <p className="mt-4 max-w-xl text-sm text-navy-foreground/75">
            Acompañamos a la industria en el diagnóstico, diseño, operación y optimización de sus
            procesos técnicos y ambientales.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <article
                key={service.id}
                id={service.id}
                className="rounded-lg border border-border bg-card p-6"
              >
                <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
                <h2 className="mt-4 text-lg font-bold text-navy">{service.title}</h2>
                <p className="mt-2 text-sm font-medium text-navy/70">{service.short}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.long}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Solicitar asesoría <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}