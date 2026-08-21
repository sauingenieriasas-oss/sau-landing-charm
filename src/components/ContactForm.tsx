import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { CONTACT, SERVICES, whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function buildMessage(data: FormData) {
    return [
      "Hola SAU Ingeniería, quiero contarles mi proyecto.",
      `Nombre del contacto: ${data.get("nombre")}`,
      `Empresa: ${data.get("empresa")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Correo: ${data.get("correo")}`,
      `Servicio de interés: ${data.get("servicio")}`,
      `Resumen del caso: ${data.get("caso")}`,
    ].join("\n");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.open(whatsappLink(buildMessage(data)), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6">
      <h2 className="text-xl font-bold text-navy">Cuéntanos tu proyecto</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Completa el formulario y enviaremos tu solicitud por WhatsApp con todos los datos.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Nombre del contacto" name="nombre" required />
        <Field label="Nombre de la empresa" name="empresa" required />
        <Field label="Teléfono" name="telefono" type="tel" required />
        <Field label="Correo electrónico" name="correo" type="email" required />

        <label className="sm:col-span-2 block text-sm font-medium text-navy">
          Servicio de interés
          <select
            name="servicio"
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Otro">Otro</option>
          </select>
        </label>

        <label className="sm:col-span-2 block text-sm font-medium text-navy">
          Resumen del caso
          <textarea
            name="caso"
            rows={4}
            required
            placeholder="Cuéntanos brevemente tu necesidad o proceso."
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
      >
        Enviar por WhatsApp <ArrowRight className="h-4 w-4" />
      </button>

      {sent && (
        <p className="mt-4 text-sm font-medium text-primary">
          Abrimos WhatsApp con tu solicitud. Si no se abrió, escríbenos a{" "}
          <a className="underline" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-navy">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}
