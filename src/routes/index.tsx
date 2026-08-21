import { createFileRoute } from "@tanstack/react-router";

import {
  AboutSection,
  BrandEssence,
  CommitmentsBand,
  CtaBand,
  HeroSection,
  LixiviadosHighlight,
  MissionVision,
  ProductsSection,
  SectorsSection,
  ServicesGrid,
  ValueProp,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAU Ingeniería | Tratamiento y optimización de agua en Colombia" },
      {
        name: "description",
        content:
          "Empresa barranquillera con presencia en gran parte de Colombia: optimizamos PTAP y PTAR, tratamos aguas residuales y lixiviados, y suministramos insumos químicos.",
      },
      {
        property: "og:title",
        content: "SAU Ingeniería | Tratamiento y optimización de agua en Colombia",
      },
      {
        property: "og:description",
        content:
          "Optimizamos lo que ya tienes y multiplicamos sus resultados: agua potable, aguas residuales, lixiviados, MBBR e insumos químicos.",
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
          email: "ventas@sauingenieria.co",
          slogan: "innovación, sostenibilidad y economía",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Cra 46 #84-8",
            addressLocality: "Barranquilla",
            addressRegion: "Atlántico",
            addressCountry: "CO",
          },
          description:
            "Soluciones técnicas, químicas y biotecnológicas para tratamiento de agua, aguas residuales, lixiviados y optimización de procesos industriales.",
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
      <ValueProp />
      <ServicesGrid />
      <LixiviadosHighlight />
      <AboutSection />
      <MissionVision />
      <SectorsSection />
      <ProductsSection />
      <BrandEssence />
      <CommitmentsBand />
      <CtaBand />
    </>
  );
}
