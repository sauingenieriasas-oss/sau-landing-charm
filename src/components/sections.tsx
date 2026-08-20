import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Atom,
  Beaker,
  Check,
  ClipboardList,
  Cpu,
  Droplet,
  FileText,
  FlaskConical,
  Gauge,
  HandHeart,
  Leaf,
  Lightbulb,
  MapPin,
  Recycle,
  Settings,
  ShieldCheck,
  Sprout,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import heroImg from "@/assets/hero-planta.jpg";
import sobreImg from "@/assets/sobre-planta.jpg";
import tamborImg from "@/assets/producto-tambor.png";
import ibcImg from "@/assets/producto-ibc.png";
import garrafaImg from "@/assets/producto-garrafa.png";
import {
  COMMITMENTS,
  MISSION,
  PRODUCTS,
  SECTORS,
  SERVICES,
  VALUE_POINTS,
  VISION,
  whatsappLink,
} from "@/lib/site";

export const SERVICE_ICONS = {
  droplet: Droplet,
  recycle: Recycle,
  trending: TrendingUp,
  settings: Settings,
  atom: Atom,
  flask: FlaskConical,
  cpu: Cpu,
  clipboard: ClipboardList,
  beaker: Beaker,
} as const;

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-center text-sm font-bold uppercase tracking-[0.14em] text-primary">
      {children}
    </p>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-8 pt-10 lg:grid-cols-2 lg:gap-4 lg:px-8 lg:pb-16 lg:pt-14">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl">
            Ingeniería que <span className="text-primary">optimiza, transforma</span> y{" "}
            <span className="text-primary-mid">protege</span>.
          </h1>
          <div className="mt-6 h-1 w-20 bg-brown" />
          <p className="mt-6 max-w-md text-base text-muted-foreground">
            Mejoramos el rendimiento de tus plantas actuales{" "}
            <strong className="font-semibold text-primary">sin necesidad de cambiarlas</strong>,
            multiplicando su eficiencia, reduciendo costos y asegurando el cumplimiento ambiental.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Solicitar asesoría <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              hash="nosotros"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-accent"
            >
              Conocer más <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="Planta de tratamiento de agua operada por SAU Ingeniería"
            width={1600}
            height={1100}
            className="h-[280px] w-full rounded-lg object-cover sm:h-[380px] lg:h-[440px]"
          />
          <div
            className="absolute -bottom-3 right-0 h-16 w-2/3 bg-primary-mid"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />
          <div
            className="absolute -bottom-3 right-0 h-10 w-1/2 bg-navy"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:grid-cols-3 lg:px-8">
        {[
          {
            Icon: Users,
            color: "bg-primary",
            title: "Soluciones integrales",
            text: "Enfocadas en eficiencia y sostenibilidad",
          },
          {
            Icon: FlaskConical,
            color: "bg-navy",
            title: "Experiencia técnica",
            text: "Conocimiento aplicado a cada proceso",
          },
          {
            Icon: ShieldCheck,
            color: "bg-primary-mid",
            title: "Compromiso y confianza",
            text: "Acompañamiento cercano y resultados medibles",
          },
        ].map(({ Icon, color, title, text }) => (
          <div key={title} className="flex items-start gap-4">
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${color} text-primary-foreground`}
            >
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-navy">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ValueProp() {
  return (
    <section className="bg-navy py-14 text-navy-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Optimizamos lo que <span className="text-lime">ya tienes</span>, multiplicamos{" "}
            <span className="text-lime">sus resultados</span>.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-navy-foreground/75">
            No necesitas cambiar tu planta para mejorar. Analizamos tu operación y entregamos mejoras
            técnicas medibles sobre la infraestructura que ya tienes.
          </p>
        </div>
        <ul className="space-y-4">
          {VALUE_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-mid text-primary-foreground">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-base font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section id="servicios" className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionLabel>Nuestros servicios</SectionLabel>
        <h2 className="mt-3 text-center text-3xl font-bold text-navy sm:text-4xl">
          Soluciones a la medida de cada necesidad
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <article
                key={service.id}
                className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-opacity hover:opacity-90"
          >
            Ver todos los servicios <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LixiviadosHighlight() {
  return (
    <section className="bg-muted py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 rounded-lg border border-primary/25 bg-card p-8 px-4 sm:flex-row sm:items-center lg:px-8">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary-mid">
            Somos expertos en
          </p>
          <h2 className="mt-1 text-2xl font-extrabold uppercase text-primary sm:text-3xl">
            Tratamiento de lixiviados
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Soluciones efectivas para el tratamiento de lixiviados en rellenos sanitarios y
            estaciones de transferencia, con control de carga orgánica, color y cumplimiento de
            vertimientos.
          </p>
        </div>
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section id="mision" className="bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
        <article className="rounded-lg border-l-4 border-primary bg-muted p-7">
          <h2 className="text-xl font-bold text-primary">Misión</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{MISSION}</p>
        </article>
        <article className="rounded-lg border-l-4 border-navy bg-muted p-7">
          <h2 className="text-xl font-bold text-navy">Visión</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{VISION}</p>
        </article>
      </div>
    </section>
  );
}

export function SectorsSection() {
  return (
    <section id="sectores" className="bg-muted py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionLabel>Sectores que atendemos</SectionLabel>
        <h2 className="mt-3 text-center text-3xl font-bold text-navy sm:text-4xl">
          Industrias con exigencias reales de agua y ambiente
        </h2>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => (
            <li
              key={sector}
              className="flex items-start gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium text-navy"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-mid" />
              {sector}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Atendemos pequeñas, medianas y grandes empresas, incluyendo organizaciones con operaciones
          industriales de alta exigencia.
        </p>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
            Sobre SAU Ingeniería
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy">
            Ingeniería con propósito, resultados que se ven.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            SAU Ingeniería (Soluciones Ambientales Unificadas SAS) es una empresa de ingeniería
            enfocada en transformar problemas operativos y ambientales en soluciones técnicas,
            eficientes y sostenibles. Combinamos conocimiento técnico, suministro de insumos
            especializados y acompañamiento cercano para generar resultados medibles.
          </p>
          <Link
            to="/servicios"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-accent"
          >
            Conócenos más <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <img
          src={sobreImg}
          alt="Planta industrial de tratamiento de agua al atardecer"
          loading="lazy"
          width={1200}
          height={900}
          className="h-full max-h-[340px] w-full rounded-lg object-cover"
        />

        <div className="space-y-5 rounded-lg bg-muted p-6">
          {[
            {
              Icon: Lightbulb,
              title: "Innovación",
              text: "Aplicamos tecnología y conocimiento para mejorar continuamente.",
            },
            {
              Icon: Sprout,
              title: "Sostenibilidad",
              text: "Desarrollamos soluciones que cuidan el ambiente y los recursos.",
            },
            {
              Icon: Gauge,
              title: "Eficiencia",
              text: "Optimizamos procesos para lograr resultados medibles.",
            },
            {
              Icon: HandHeart,
              title: "Confianza",
              text: "Relaciones basadas en transparencia, compromiso y cumplimiento.",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-navy">{title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUCT_IMAGES = [tamborImg, ibcImg, garrafaImg];

export function ProductsSection() {
  return (
    <section id="productos" className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionLabel>Productos destacados</SectionLabel>
        <h2 className="mt-3 text-center text-3xl font-bold text-navy sm:text-4xl">
          Insumos químicos y biotecnológicos de alta calidad
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="grid gap-0 divide-y divide-border rounded-lg border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:col-span-2">
            {PRODUCTS.map((product, i) => (
              <article key={product.name} className="flex gap-3 p-5">
                <img
                  src={PRODUCT_IMAGES[i]}
                  alt={product.name}
                  loading="lazy"
                  width={700}
                  height={700}
                  className="h-20 w-16 shrink-0 object-contain"
                />
                <div>
                  <h3 className="text-sm font-bold uppercase text-navy">{product.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-lg bg-muted p-6">
            <Target className="h-9 w-9 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 text-lg font-bold leading-snug text-navy">
              ¿No sabes qué producto necesitas?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Te ayudamos a encontrar la solución ideal para tu proceso.
            </p>
            <a
              href={whatsappLink("Hola SAU Ingeniería, quiero cotizar insumos químicos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Cotizar ahora <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandEssence() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <SectionLabel>Esencia de marca</SectionLabel>
        <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
          Innovación <span className="text-primary-mid">+</span> Sostenibilidad{" "}
          <span className="text-primary-mid">+</span> Eficiencia{" "}
          <span className="text-primary-mid">+</span> Confianza
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          SAU no solo suministra soluciones: entiende el problema, analiza el proceso y acompaña al
          cliente hacia un resultado medible.
        </p>
        <p className="mt-6 font-display text-lg font-bold text-brown">
          Convertimos tus desafíos en oportunidades de mejora continua.
        </p>
      </div>
    </section>
  );
}

export function CommitmentsBand() {
  const icons = [Leaf, Target, Users];
  return (
    <section className="bg-navy-dark py-10 text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 lg:px-8">
        {COMMITMENTS.map((item, i) => {
          const Icon = icons[i]!;
          return (
            <div key={item.title} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-mid text-primary-foreground">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="text-sm font-semibold uppercase leading-tight">
                <span className="block text-lime">{item.title}</span>
                <span className="block">{item.highlight}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section id="casos" className="bg-navy py-12 text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {[
          { Icon: Users, value: "+50", label: "Clientes satisfechos" },
          { Icon: FileText, value: "+80", label: "Proyectos ejecutados" },
          { Icon: Droplet, value: "+100", label: "Sistemas optimizados" },
          { Icon: MapPin, value: "Presencia en", label: "todo Colombia" },
        ].map(({ Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4">
            <Icon className="h-10 w-10 text-lime" strokeWidth={1.5} />
            <div>
              <p className="font-display text-2xl font-extrabold leading-none">{value}</p>
              <p className="text-sm text-navy-foreground/70">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary-dark py-12 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">¿Tienes un proyecto en mente?</h2>
          <p className="mt-2 text-sm text-primary-foreground/85">
            Hablemos y encontremos juntos la mejor solución para tu empresa.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-md bg-primary-mid px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar asesoría <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
