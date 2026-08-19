export const WHATSAPP_NUMBER = "573015162267";

export const CONTACT = {
  whatsappDisplay: "+57 301 516 2267",
  whatsappNumber: WHATSAPP_NUMBER,
  email: "contacto@sauingenieria.com",
  phone: "+57 301 516 2267",
  city: "Colombia",
};

export function whatsappLink(message?: string) {
  const text = message ?? "Hola SAU Ingeniería, quiero solicitar una asesoría.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const SERVICES = [
  {
    id: "agua",
    icon: "droplet",
    title: "Tratamiento y calidad de agua",
    short: "Potabilización, optimización de PTAP y control de calidad de agua.",
    long: "Diseñamos y optimizamos plantas de potabilización, definimos esquemas de coagulación y desinfección, y establecemos programas de control de calidad para garantizar agua segura y cumplimiento normativo.",
  },
  {
    id: "residuales",
    icon: "recycle",
    title: "Tratamiento de aguas residuales",
    short: "Diseño, optimización y operación de sistemas de tratamiento.",
    long: "Evaluamos, diseñamos y ponemos en marcha sistemas de tratamiento de aguas residuales industriales y domésticas, con acompañamiento en operación, control de lodos y cumplimiento de vertimientos.",
  },
  {
    id: "procesos",
    icon: "settings",
    title: "Optimización de procesos",
    short: "Mejoramos la eficiencia, disminuimos costos y aumentamos la productividad.",
    long: "Analizamos variables críticas de operación, balances de masa y consumos de insumos para reducir costos, estabilizar procesos y aumentar la productividad de cada planta.",
  },
  {
    id: "insumos",
    icon: "flask",
    title: "Suministro de insumos químicos y biológicos",
    short: "Productos de alta calidad para diversas industrias y aplicaciones.",
    long: "Suministramos coagulantes, floculantes, desinfectantes y consorcios biológicos con soporte técnico, dosificación recomendada y seguimiento de desempeño en planta.",
  },
  {
    id: "biotecnologia",
    icon: "leaf",
    title: "Biotecnología y soluciones sostenibles",
    short: "Tecnologías biológicas para procesos más eficientes y amigables con el ambiente.",
    long: "Implementamos soluciones biotecnológicas para degradación de materia orgánica, control de olores y recuperación de sistemas biológicos, reduciendo el impacto ambiental de la operación.",
  },
  {
    id: "asesorias",
    icon: "clipboard",
    title: "Asesorías y estudios técnicos",
    short: "Diagnósticos, estudios, diseños y cumplimiento normativo.",
    long: "Realizamos diagnósticos integrales, estudios de tratabilidad, memorias de cálculo y acompañamiento en trámites y cumplimiento normativo ante autoridades ambientales.",
  },
] as const;

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