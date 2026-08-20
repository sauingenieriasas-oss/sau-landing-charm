export const WHATSAPP_NUMBER = "573015162267";

export const COMPANY = {
  legalName: "Soluciones Ambientales Unificadas SAS",
  brand: "SAU Ingeniería",
  slogan: "innovación, sostenibilidad y economía",
  claim: "Ingeniería que transforma problemas en soluciones.",
};

export const CONTACT = {
  whatsappDisplay: "+57 301 516 2267",
  whatsappNumber: WHATSAPP_NUMBER,
  email: "ventas@sauingenieria.co",
  phone: "+57 301 516 2267",
  address: "Bodega: Cra 46 #84-8",
  city: "Colombia",
};

export function whatsappLink(message?: string) {
  const text = message ?? "Hola SAU Ingeniería, quiero solicitar una asesoría.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const MISSION =
  "Acompañar a empresas e instituciones en la optimización de sus procesos ambientales y de tratamiento de agua, mediante soluciones técnicas, químicas y biotecnológicas que mejoren la eficiencia, la calidad, el cumplimiento normativo y la sostenibilidad de sus operaciones.";

export const VISION =
  "Ser una empresa de referencia en Colombia en soluciones de ingeniería ambiental y tratamiento de agua, reconocida por su innovación, confiabilidad, eficiencia y capacidad para generar resultados sostenibles para sus clientes.";

export const SERVICES = [
  {
    id: "agua-potable",
    icon: "droplet",
    title: "Tratamiento de agua potable",
    short: "Optimización y operación de plantas potabilizadoras para garantizar calidad y continuidad.",
    long: "Diseñamos, optimizamos y acompañamos la operación de plantas potabilizadoras: esquemas de coagulación, floculación, filtración y desinfección, con programas de control de calidad que aseguran agua segura y continuidad del servicio.",
  },
  {
    id: "aguas-residuales",
    icon: "recycle",
    title: "Tratamiento de aguas residuales",
    short: "Soluciones eficientes para agua residual industrial y doméstica.",
    long: "Evaluamos, diseñamos y ponemos en marcha sistemas de tratamiento de aguas residuales industriales y domésticas, con acompañamiento en operación, manejo de lodos y cumplimiento de la normativa de vertimientos.",
  },
  {
    id: "optimizacion-ptap-ptar",
    icon: "trending",
    title: "Optimización de PTAP y PTAR",
    short: "Ajustamos y mejoramos tus plantas actuales para aumentar su eficiencia sin necesidad de cambiarlas.",
    long: "Diagnosticamos la planta existente, identificamos cuellos de botella hidráulicos, químicos y biológicos, y ejecutamos mejoras de bajo costo que multiplican su capacidad y estabilidad sin grandes inversiones ni paradas de operación.",
  },
  {
    id: "procesos-industriales",
    icon: "settings",
    title: "Procesos industriales",
    short: "Soluciones químicas y técnicas para diversas industrias.",
    long: "Analizamos variables críticas de operación, balances de masa y consumo de insumos para reducir costos, estabilizar procesos y aumentar la productividad en alimentos y bebidas, manufactura, papel y otros sectores.",
  },
  {
    id: "mbbr",
    icon: "atom",
    title: "Tecnología MBBR",
    short: "Sistemas biológicos de alta eficiencia y bajo consumo energético.",
    long: "Implementamos reactores de lecho móvil (MBBR) para aumentar la carga tratable en el mismo volumen, con alta eficiencia de remoción de materia orgánica y nitrógeno y menor consumo energético que los sistemas convencionales.",
  },
  {
    id: "ingenieria-quimica",
    icon: "flask",
    title: "Ingeniería química aplicada",
    short: "Diseño y desarrollo de soluciones a la medida.",
    long: "Desarrollamos formulaciones y esquemas de dosificación específicos para cada agua y cada proceso, con ensayos de tratabilidad, pruebas de jarras y validación en planta.",
  },
  {
    id: "automatizacion",
    icon: "cpu",
    title: "Automatización y control",
    short: "Integración de tecnología para procesos más seguros, estables y eficientes.",
    long: "Instrumentamos y automatizamos dosificación, bombeo y monitoreo en línea para operar con datos, reducir variabilidad y garantizar trazabilidad del proceso.",
  },
  {
    id: "cumplimiento-ambiental",
    icon: "clipboard",
    title: "Asesoría y cumplimiento ambiental",
    short: "Cumplimiento normativo y acompañamiento técnico especializado.",
    long: "Realizamos diagnósticos integrales, memorias de cálculo, planes de cumplimiento y acompañamiento en trámites ante autoridades ambientales.",
  },
  {
    id: "productos-quimicos",
    icon: "beaker",
    title: "Suministro de productos químicos",
    short: "Productos de alta calidad para el tratamiento de agua y procesos industriales.",
    long: "Suministramos coagulantes, floculantes, desinfectantes y consorcios biológicos con soporte técnico, dosificación recomendada y seguimiento de desempeño en planta.",
  },
] as const;

export const SECTORS = [
  "Industria de alimentos y bebidas",
  "Industria manufacturera",
  "Industria papelera",
  "Acueductos y empresas de servicios públicos",
  "Plantas de tratamiento de agua potable",
  "Plantas de tratamiento de aguas residuales",
  "Rellenos sanitarios y gestión de lixiviados",
  "Procesos industriales con tratamiento de agua",
  "Empresas con requerimientos de gestión ambiental",
];

export const VALUE_POINTS = [
  "Sin grandes inversiones",
  "Sin detener tu operación",
  "Mayor eficiencia, menor costo y cumplimiento garantizado",
];

export const COMMITMENTS = [
  { title: "Comprometidos", highlight: "con la sostenibilidad" },
  { title: "Enfocados en", highlight: "resultados" },
  { title: "Aliados estratégicos", highlight: "de nuestros clientes" },
];

export const PRODUCTS = [
  {
    name: "SUFLOC 379",
    description: "Coagulante inorgánico de alto desempeño para tratamiento de agua.",
  },
  {
    name: "SUFLOC 390",
    description: "Polímero aniónico de alta eficiencia para clarificación y deshidratación.",
  },
  {
    name: "Hipoclorito de sodio 15%",
    description: "Desinfectante eficaz para sistemas de potabilización y saneamiento.",
  },
];
