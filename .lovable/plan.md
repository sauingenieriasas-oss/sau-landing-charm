# Landing page SAU Ingeniería

Sitio con la identidad visual del modelo adjunto (verde/azul marino/dorado, tipografía sans geométrica), en español, responsive.

## Páginas

1. **Inicio (`/`)** — landing completa con todas las secciones del modelo.
2. **Servicios (`/servicios`)** — detalle de los 6 servicios con descripción ampliada y CTA.
3. **Contacto (`/contacto`)** — datos de contacto, formulario y bloque de WhatsApp.

Los enlaces del menú que no tienen página (Nosotros, Productos, Casos de éxito, Blog) apuntan a secciones de la página de inicio mediante anclas.

## Secciones de la página de inicio

- **Header fijo**: logo SAU Ingeniería, menú (Inicio, Nosotros, Servicios, Productos, Casos de éxito, Contacto), botón de WhatsApp y botón "Solicitar asesoría". Menú hamburguesa en móvil.
- **Hero**: titular "Ingeniería que transforma problemas en soluciones.", párrafo, dos botones (Solicitar asesoría / Conocer más), imagen de planta de tratamiento con las franjas diagonales verde/azul/dorado.
- **Tres diferenciales** sobre el hero: Soluciones integrales, Experiencia técnica, Compromiso y confianza.
- **Nuestros servicios**: grid de 6 tarjetas con ícono (agua, aguas residuales, optimización de procesos, insumos químicos y biológicos, biotecnología, asesorías) y botón "Ver todos los servicios" → `/servicios`.
- **Sobre SAU Ingeniería**: texto + imagen + 4 valores (Innovación, Sostenibilidad, Eficiencia, Confianza) y botón "Conócenos más".
- **Productos destacados**: 3 tarjetas (SUFLOC 379, SUFLOC 390, Hipoclorito de sodio 15%) con imagen y el bloque "¿No sabes qué producto necesitas?" con "Cotizar ahora".
- **Cifras**: +50 clientes, +80 proyectos, +100 sistemas optimizados, presencia en todo Colombia (banda azul marino).
- **CTA final**: "¿Tienes un proyecto en mente?" con botón de asesoría y WhatsApp.
- **Footer**: logo, datos de contacto, enlaces y redes.
- **Botón flotante de WhatsApp** en todas las páginas, con enlace a `https://wa.me/573015162267` y mensaje predefinido.

## Formulario (sin backend)

Formulario "Solicitar asesoría" en `/contacto` (nombre, empresa, correo, teléfono, servicio de interés, mensaje). Al enviar, se valida en el navegador y se abre WhatsApp con el mensaje ya redactado con los datos; también un enlace alternativo por correo. No se guarda nada en base de datos, tal como pediste.

## Imágenes

Generadas con IA en estilo fotográfico industrial coherente con el modelo: planta de tratamiento de agua (hero), planta al atardecer (sección Sobre), y tres productos (tambor azul, contenedor IBC, garrafa blanca). El logo "SAU INGENIERÍA" se construye con tipografía y color, sin imagen.

## Detalles técnicos

- Rutas TanStack en `src/routes/index.tsx`, `src/routes/servicios.tsx`, `src/routes/contacto.tsx`, con `head()` propio (título, descripción, og) en cada una.
- Tokens de color/tipografía en `src/styles.css` (`@theme inline`): verde SAU, azul marino, dorado, grises. Fuente vía `<link>` en `__root.tsx`.
- Componentes en `src/components/`: `SiteHeader`, `SiteFooter`, `WhatsappFab`, `HeroSection`, `ServicesGrid`, `AboutSection`, `ProductsSection`, `StatsBand`, `CtaBand`, `ContactForm`.
- Íconos con lucide-react; imágenes generadas en `src/assets/`.
- Sin backend ni base de datos.

## Falta definir (puedes darlo después)

Correo, teléfono fijo y dirección reales: por ahora se dejan como marcadores editables junto al WhatsApp +57 301 516 2267.
