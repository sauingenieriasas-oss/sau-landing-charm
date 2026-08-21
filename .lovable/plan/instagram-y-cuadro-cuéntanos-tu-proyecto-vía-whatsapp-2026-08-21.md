# Instagram y cuadro "Cuéntanos tu proyecto" (vía WhatsApp)

Todo lo existente se conserva: colores, tipografía, hero con el banner, servicios, productos, misión/visión, sectores y textos.

## 1. Instagram en Contacto

- Se agrega Instagram `@sauingenieriasas`, con enlace a `https://instagram.com/sauingenieriasas` que abre en pestaña nueva.
- Aparece en la lista "Datos de contacto" de la página Contacto y en la columna Contacto del pie de página, con ícono de Instagram del mismo set de iconos que ya se usa.

## 2. Cuadro "Cuéntanos tu proyecto"

El formulario actual de Contacto se convierte en este cuadro (un solo formulario, sin duplicados), con el título "Cuéntanos tu proyecto" y los campos:

- Nombre del contacto (obligatorio)
- Nombre de la empresa (obligatorio)
- Teléfono (obligatorio)
- Correo electrónico (obligatorio)
- Resumen del caso (área de texto, obligatorio)
- Se mantiene el selector de servicio de interés que ya existe.

Al enviar, se abre WhatsApp con el mensaje ya redactado con todos los datos diligenciados, igual que hoy. Si WhatsApp no se abre, se muestra el aviso con el correo `ventas@sauingenieria.co` como alternativa.

Nota: no se envía correo automático todavía; cuando quieras que las solicitudes lleguen a `sauingenierisas@gmail.com` se puede agregar después (necesita el backend y el dominio de correo verificado).

## Detalles técnicos

- `src/lib/site.ts`: se agrega `instagram` (usuario + URL) a `CONTACT`.
- `src/routes/contacto.tsx` y `src/components/SiteFooter.tsx`: fila de Instagram con el ícono `Instagram` de lucide-react.
- `src/components/ContactForm.tsx`: título y campos ajustados (empresa y teléfono obligatorios, "Resumen del caso" en lugar de "Mensaje") y el mensaje de WhatsApp incluye los nuevos rótulos.
