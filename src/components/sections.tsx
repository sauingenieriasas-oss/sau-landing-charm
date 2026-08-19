import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardList,
  Droplet,
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
  Users,
  FileText,
} from "lucide-react";

import heroImg from "@/assets/hero-planta.jpg";
import sobreImg from "@/assets/sobre-planta.jpg";
import tamborImg from "@/assets/producto-tambor.png";
import ibcImg from "@/assets/producto-ibc.png";
import garrafaImg from "@/assets/producto-garrafa.png";
import { PRODUCTS, SERVICES, whatsappLink } from "@/lib/site";

const SERVICE_ICONS = {
  droplet: Droplet,
  recycle: Recycle,
  settings: Settings,
  flask: FlaskConical,
  leaf: Leaf,
  clipboard: ClipboardList,
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
            Ingeniería que <span className="text-primary">transforma problemas</span> en soluciones.
          </h1>
          <div className="mt-6 h-1 w-20 bg-gold" />
          <p className="mt-6 max-w-md text-base text-muted-foreground">
            Brindamos soluciones técnicas y químicas innovadoras para optimizar procesos, garantizar
            calidad y generar valor en cada operación.
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
            className="absolute -bottom-3 right-0 h-16 w-2/3 bg-primary"
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
            text: "Más de 8 años optimizando operaciones",
          },
          {
            Icon: ShieldCheck,
            color: "bg-primary",
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

export function ServicesGrid() {
  return (
    <section id="servicios" className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionLabel>Nuestros servicios</SectionLabel>
        <h2 className="mt-3 text-center text-3xl font-bold text-navy sm:text-4xl">
          Soluciones a la medida de cada necesidad
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <article
                key={service.id}
                className="rounded-lg border border-border bg-card p-5 text-center transition-shadow hover:shadow-md"
              >
                <Icon className="mx-auto h-9 w-9 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 text-sm font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
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
            Somos un equipo de ingenieros y especialistas comprometidos con brindar soluciones
            técnicas, eficientes y sostenibles. Acompañamos a nuestros clientes en cada etapa de sus
            proyectos, generando valor, cumpliendo la normatividad y optimizando sus procesos.
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
          alt="Planta industrial al atardecer"
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
            <Icon className="h-10 w-10 text-navy-foreground/80" strokeWidth={1.5} />
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
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar asesoría <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}