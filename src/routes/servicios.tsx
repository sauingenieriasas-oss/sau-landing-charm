import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { LixiviadosHighlight, SERVICE_ICONS } from "@/components/sections";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de ingeniería ambiental | SAU Ingeniería" },
      {
        name: "description",
        content:
          "Agua potable, aguas residuales, optimización de PTAP y PTAR, MBBR, automatización, cumplimiento ambiental e insumos químicos en toda Colombia.",
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
            Nueve líneas de servicio para diagnosticar, diseñar, operar y optimizar procesos de agua
            y procesos industriales.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <article
                key={service.id}
                id={service.id}
                className="rounded-lg border border-border bg-card p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h2 className="mt-4 text-lg font-bold text-primary">{service.title}</h2>
                <p className="mt-2 text-sm font-medium text-navy/70">{service.short}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.long}</p>
              </article>
            );
          })}
        </div>
      </section>

      <LixiviadosHighlight />

      <section className="py-14">
        <div className="text-center">
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