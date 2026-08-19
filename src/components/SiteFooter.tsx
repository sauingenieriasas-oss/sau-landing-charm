import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { CONTACT, SERVICES } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-display text-3xl font-extrabold leading-none">
            <span className="text-primary">S</span>A<span className="text-primary">U</span>
          </div>
          <div className="font-display text-sm font-semibold tracking-[0.18em]">INGENIERÍA</div>
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            Soluciones Ambientales Unificadas SAS. Soluciones técnicas y químicas para procesos
            industriales más eficientes y sostenibles.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Servicios</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            {SERVICES.slice(0, 4).map((s) => (
              <li key={s.id}>
                <Link to="/servicios" hash={s.id} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Empresa</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            <li>
              <Link to="/" hash="nosotros" className="hover:text-primary">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/" hash="productos" className="hover:text-primary">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/" hash="casos" className="hover:text-primary">
                Casos de éxito
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-primary">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" /> {CONTACT.phone}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" /> {CONTACT.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" /> Presencia en todo {CONTACT.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15 px-4 py-5 text-center text-xs text-navy-foreground/60">
        © {new Date().getFullYear()} Soluciones Ambientales Unificadas SAS — SAU Ingeniería. Todos
        los derechos reservados.
      </div>
    </footer>
  );
}