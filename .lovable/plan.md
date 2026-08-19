# Actualización de identidad y contenido — SAU Ingeniería

Aplicar la paleta oficial del PDF, el logo real y el contenido del resumen corporativo.

## 1. Paleta oficial (reemplaza la actual)

Del documento "PALETA DE COLORES SAU":

| Uso | HEX |
|---|---|
| Verde oscuro (letra S) | #007833 |
| Verde medio (letra A) | #63A63C |
| Verde lima (letra U) | #8DC63F |
| Azul petróleo (INGENIERÍA) | #18637F |
| Marrón (eslogan) | #5E3D22 |

Se convierten a tokens en `src/styles.css`: verde oscuro como color principal (botones, acentos), verde lima para resaltados sobre fondo oscuro, azul petróleo para bandas institucionales y titulares (reemplaza el azul marino actual), marrón solo para el eslogan y detalles finos. Se elimina el "dorado" actual.

## 2. Logo real

Se usa el logotipo del PDF (SAU en tres verdes + INGENIERÍA en azul petróleo + eslogan en marrón), recortado y con fondo transparente, en el header y el footer, en lugar del logo tipográfico actual.

## 3. Contacto (datos definitivos)

- WhatsApp: +57 301 516 2267
- Correo: ventas@sauingenieria.co
- Bodega: Cra 46 #84-8
- Razón social: Soluciones Ambientales Unificadas SAS — sigla SAU Ingeniería

Se actualizan header, footer, página de contacto, formulario y datos estructurados.

## 4. Servicios: pasan de 6 a 9 (según la imagen de portada)

1. Tratamiento de agua potable
2. Tratamiento de aguas residuales
3. Optimización de PTAP y PTAR
4. Procesos industriales
5. Tecnología MBBR
6. Ingeniería química aplicada
7. Automatización y control
8. Asesoría y cumplimiento ambiental
9. Suministro de productos químicos

Además, un bloque destacado: **"Somos expertos en tratamiento de lixiviados"** (rellenos sanitarios y estaciones de transferencia).

## 5. Nuevas secciones de contenido en Inicio

- **Propuesta de valor**: "Optimizamos lo que ya tienes, multiplicamos sus resultados" con los tres puntos: sin grandes inversiones, sin detener tu operación, mayor eficiencia y menor costo con cumplimiento garantizado.
- **Quiénes somos / Misión / Visión**: textos exactos del resumen corporativo.
- **Sectores que atendemos**: los 9 sectores (alimentos y bebidas, manufactura, papelera, acueductos, PTAP, PTAR, rellenos sanitarios y lixiviados, procesos industriales, gestión ambiental) más la nota de que se atienden pequeñas, medianas y grandes empresas.
- **Esencia de marca**: Innovación + Sostenibilidad + Eficiencia + Confianza, con el cierre "SAU no solo suministra soluciones: entiende el problema, analiza el proceso y acompaña al cliente hacia un resultado medible."
- **Franja de compromisos**: comprometidos con la sostenibilidad / enfocados en resultados / aliados estratégicos de nuestros clientes.

## 6. Ajustes en las otras páginas

- **Servicios**: los 9 servicios con descripción ampliada + bloque de lixiviados.
- **Contacto**: correo, WhatsApp y dirección de bodega reales; el formulario sigue enviando por WhatsApp, sin backend.

## 7. Nota sobre la imagen de portada

La imagen adjunta se usa como **referencia de diseño y fuente de contenido**, no se incrusta como imagen: su texto quedaría ilegible en móvil. Las fotos actuales (planta de tratamiento) se conservan y se generan dos imágenes adicionales en ese mismo estilo (lixiviados/relleno sanitario y equipos de bombeo) para las nuevas secciones.

## Detalles técnicos

- Tokens en `src/styles.css` (`@theme inline`) en oklch: `--primary` (#007833), `--primary-mid` (#63A63C), `--lime` (#8DC63F), `--petrol` (#18637F), `--brown` (#5E3D22). Se renombra el uso de `navy` a `petrol` y se elimina `gold`.
- Logo del PDF publicado como asset CDN y usado en `Logo.tsx`.
- `src/lib/site.ts`: contacto real, 9 servicios, sectores, misión/visión, esencia de marca.
- Nuevos componentes en `src/components/sections.tsx`: `ValueProp`, `SectorsSection`, `MissionVision`, `BrandEssence`, `CommitmentsBand`, `LixiviadosHighlight`.
- Sin backend ni base de datos.
