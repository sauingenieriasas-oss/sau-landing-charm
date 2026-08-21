# Ajustes SAU Ingeniería

Solo se tocan los 5 puntos indicados. Se conservan sin cambios: la paleta del PDF, la tipografía, los 9 servicios (incluido el bloque de tratamiento de lixiviados), la propuesta de valor, quiénes somos, misión, visión, sectores, esencia de marca y la banda de compromisos.



## 1. Hero con el banner proporcionado

- Se usa la imagen `BANNER_PAGINA_INICIO_SAU.png` tal cual (sin generar ni editar nada) como fondo del Hero, a todo el ancho de la sección.
- Se elimina el titular actual "Ingeniería que optimiza, transforma y protege" y la composición de dos columnas con foto recortada.
- Nuevo contenido sobre la zona clara izquierda:
  - Título: "INGENIERÍA QUE TRANSFORMA PROBLEMAS EN SOLUCIONES" (H1), ubicado debajo del logo que ya trae la imagen, sin superponerlo.
  - Párrafo corto de apoyo (mejoramos el rendimiento de tus plantas actuales sin necesidad de cambiarlas).
  - Botones "Solicitar asesoría" y "Ver servicios".
- No se añade ningún logo encima de la imagen; el logo del encabezado fijo se mantiene como está.
- En móvil, donde la zona clara no alcanza, el banner se muestra completo arriba y el texto queda debajo sobre fondo claro, para que nada tape el logo ni se pierda legibilidad.
- Se conserva la franja de tres diferenciales (soluciones integrales, experiencia técnica, compromiso) debajo del Hero.

## 2. Productos

- Se elimina la sección "Productos destacados" con imágenes de empaques (tambor, IBC, garrafa).
- Nueva sección "Nuestros productos" como listado limpio de tarjetas con ícono lineal, sin fotografías de presentaciones:
  1. Coagulantes: marcas propias línea SUFLOC y genéricos
  2. Floculantes para agua potable, residuales y deshidratación de lodos
  3. Antiespumantes
  4. Ajustadores de pH
  5. Limpiadores y antiincrustantes para osmosis inversa
  6. Ablandadores de agua potable
  7. Biocidas
  8. Biotecnologías
- Se mantiene el bloque "¿No sabes qué producto necesitas?" con botón a WhatsApp.
- Se borran los archivos de imagen de productos que quedan sin uso.

## 3. Empresa barranquillera

- Ajuste de textos en la sección "Sobre SAU Ingeniería", el pie de página y el contacto: empresa barranquillera con presencia en gran parte del territorio colombiano.
- Se refuerza con la dirección de bodega Cra 46 #84-8 (Barranquilla) y se ajustan las descripciones SEO y el JSON-LD de la organización para incluir la ciudad.

## 4. Indicadores

- Se elimina por completo la banda de cifras (+50 clientes, +80 proyectos, +100 sistemas optimizados, presencia en Colombia).
- El mensaje de cobertura nacional queda cubierto en el texto de "Sobre SAU Ingeniería" y en el pie de página.

## Detalles técnicos

- `src/components/sections.tsx`: reescritura de `HeroSection`, sustitución de `ProductsSection`, eliminación de `StatsBand` y de las importaciones de imágenes de productos.
- `src/lib/site.ts`: nueva lista `PRODUCTS` con las ocho líneas, textos de ubicación/cobertura.
- `src/routes/index.tsx`: se retira `StatsBand` del ensamblaje y se actualizan metadatos y JSON-LD (dirección en Barranquilla).
- `src/components/SiteFooter.tsx` y `src/routes/contacto.tsx`: textos de ubicación y cobertura.
- Banner subido como asset CDN desde el archivo original, sin recortes ni reprocesado.
