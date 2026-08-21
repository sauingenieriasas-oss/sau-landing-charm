# Instagram y formulario "Cuéntanos tu proyecto"

Todo lo existente se conserva: colores, tipografía, hero con el banner, servicios, productos, misión/visión, sectores y el formulario de WhatsApp actual.

## 1. Instagram en Contacto

- Se agrega Instagram `@sauingenieriasas` a los datos de contacto, con enlace a `https://instagram.com/sauingenieriasas` (abre en pestaña nueva).
- Aparece en la lista "Datos de contacto" de la página Contacto y en la columna Contacto del pie de página, con ícono de Instagram del mismo set de iconos que ya se usa.

## 2. Cuadro "Cuéntanos tu proyecto" con envío por correo

Nuevo bloque en la página de Contacto (debajo del formulario de WhatsApp actual, que se mantiene) con los campos:

- Nombre del contacto (obligatorio)
- Nombre de la empresa
- Teléfono (obligatorio)
- Correo electrónico (obligatorio)
- Resumen del caso (área de texto, obligatorio)

Al enviar:

- Los datos llegan por correo a **sauingenierisas@gmail.com** con asunto tipo "Nuevo caso: {empresa o contacto}".
- Además se envía un correo breve de confirmación al cliente que llenó el formulario, con copia de lo que escribió.
- En pantalla se muestra un mensaje de éxito, o un mensaje de error con el WhatsApp y el correo como alternativa.
- Protección básica contra abuso: validación de los campos y límite de envíos por IP.

### Requisito de infraestructura

Para que el correo salga se necesita, en este orden: activar Lovable Cloud (backend integrado) y configurar el dominio de envío de correo. El dominio `sauingenieria.co` está en proceso de conexión; el envío queda activo cuando el dominio de correo esté verificado. Mientras eso ocurre, el formulario ya queda construido y, si el envío falla, muestra la alternativa por WhatsApp/correo directo.

## Detalles técnicos

- `src/lib/site.ts`: se agrega `instagram` (usuario + URL) y `PROJECT_INBOX = "sauingenierisas@gmail.com"` a `CONTACT`.
- `src/routes/contacto.tsx` y `src/components/SiteFooter.tsx`: fila de Instagram con ícono `Instagram` de lucide-react.
- Nuevo `src/components/ProjectInquiryForm.tsx`: formulario controlado, validación con Zod, estados enviando/éxito/error.
- Nuevo endpoint de servidor en `src/routes/api/public/project-inquiry.ts`: valida con Zod, limita por IP y envía los dos correos con el helper de correos de la app; la clave de envío nunca se expone al navegador.
- Plantillas React Email en `src/lib/email-templates/`: `project-inquiry-internal` (aviso interno con todos los datos) y `project-inquiry-confirmation` (confirmación al cliente), registradas en el registry.
- Sin tabla de base de datos nueva a menos que quieras además guardar el historial de solicitudes.
