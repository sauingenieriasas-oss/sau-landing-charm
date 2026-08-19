import { createFileRoute } from "@tanstack/react-router";

import {
  AboutSection,
  CtaBand,
  HeroSection,
  ProductsSection,
  ServicesGrid,
  StatsBand,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAU Ingeniería | Tratamiento de agua y procesos industriales" },
      {
        name: "description",
        content:
          "Soluciones Ambientales Unificadas SAS: tratamiento de agua, aguas residuales, optimización de procesos e insumos químicos y biotecnológicos en Colombia.",
      },
      {
        property: "og:title",
        content: "SAU Ingeniería | Tratamiento de agua y procesos industriales",
      },
      {
        property: "og:description",
        content:
          "Ingeniería que transforma problemas en soluciones: agua, procesos e insumos químicos con acompañamiento técnico.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Soluciones Ambientales Unificadas SAS",
          alternateName: "SAU Ingeniería",
          areaServed: "CO",
          telephone: "+573015162267",
          description:
            "Soluciones técnicas y químicas para tratamiento de agua, aguas residuales y optimización de procesos industriales.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <AboutSection />
      <ProductsSection />
      <StatsBand />
      <CtaBand />
    </>
  );
}
