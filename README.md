# Literarias — club de lectura

Sitio en vivo en **`clubliterarias.com`**. El sistema visual está inspirado en
la referencia que dio el cliente, [service95.com/book-club](https://www.service95.com/book-club)
(el sitio de Dua Lipa), adaptado con fondo crema (en vez de blanco puro, a
pedido del cliente) y el contenido real del club — libros, portadas, cifras
e Instagram reales, no de relleno:

- Tipografía sans bold con tracking muy negativo (-2 a -4px) en los títulos
  grandes, todo en mayúsculas donde corresponde.
- Fondo crema (`#f5ecdb`) + tinta negra en toda la interfaz — nada de color
  en texto, nav o botones; el único color viene de las fotos (portadas).
- Header con logo centrado y una barra de navegación con borde punteado
  arriba/abajo, como el masthead del sitio de referencia.
- Franjas negras de ancho completo (CTA, footer) con texto blanco bold.
- Carrusel de "Lecturas anteriores" (las lecturas oficiales del mes) y,
  debajo, "Nuestra biblioteca": cuadrícula suelta con más libros recomendados
  por el club, portada + título nada más.

## Ramas de este repo

- **`main`** — esta rama. Es la que Cloudflare Pages construye y sirve en
  `clubliterarias.com`. Cualquier push aquí se ve reflejado en el sitio real.
- **`dualipa-redesign`** — ambiente de trabajo/pruebas para el mismo diseño,
  con su propio proyecto de Cloudflare (`dualipa.clubliterarias.com`). La
  idea es probar cambios ahí primero y, cuando se aprueben, traerlos a
  `main` (copiando el árbol de archivos, sin tocar el `wrangler.jsonc` de
  cada rama — cada una apunta a su propio Worker).
- **`editorial-design`** — la primera versión (identidad tomada directo del
  [Instagram del club](https://www.instagram.com/club.literarias), más
  ilustrada y a color). Se dejó de usar cuando el cliente eligió la
  dirección de Dua Lipa, pero queda en el repo por si se necesita retomar
  algo de ahí.

Construido con [Astro](https://astro.build) + Tailwind CSS v4: 100% estático,
sin frameworks pesados, listo para Cloudflare Pages.

## Estructura

```
src/
├── data/lecturas.ts       # Lectura del mes + archivo de lecturas anteriores
├── data/biblioteca.ts     # "Nuestra biblioteca": libros recomendados aparte
├── components/            # Header, Hero, PastReads, Biblioteca, About, Join, Footer, etc.
├── layouts/Layout.astro   # <head>, SEO, fuentes, script de scroll-reveal y contadores
└── pages/index.astro      # Ensambla la página
```

### Actualizar el libro del mes

Edita `src/data/lecturas.ts`:

1. Quita `destacado: true` del mes actual y agrégalo al mes nuevo (o simplemente
   agrega una entrada nueva con `destacado: true` y quítalo de la anterior).
2. Llena autora, páginas, género, editorial, cita, veredicto (1–5) y lugar de reunión.
3. Los colores disponibles son: `plum`, `orange`, `olive`, `teal`, `navy`, `coral`.

> Nota: varias citas y notas de meses anteriores vienen del texto (OCR) de las
> publicaciones de Instagram y se limpiaron a mano donde estaba borroso o
> ilegible. Vale la pena que alguien del club las revise contra el original
> antes de darlas por definitivas.
>
> Las portadas (`public/covers/{slug}.jpg`) se buscaron para que coincidan
> con la edición exacta que se ve en cada publicación de Instagram (misma
> editorial, mismo diseño de tapa) usando Open Library y las páginas de las
> propias editoriales (Lumen, Alfaguara, Seix Barral, Libros del Asteroide,
> El Acantilado, Impedimenta, Criatura Editora, Debolsillo). Coinciden 8 de
> 9; la única que no se encontró fue la edición morada de Debolsillo de
> "Penélope y las doce criadas" que aparece en su post de agosto — se dejó
> la edición de Salamandra (misma novela, portada distinta) mientras alguien
> del club no suba una foto de su propio ejemplar. Para reemplazar cualquier
> portada, solo hay que sobrescribir el archivo con el mismo nombre de
> `slug` en `public/covers/` — el componente `BookCover.astro` usa esa ruta
> automáticamente y, si el archivo no existe, cae de vuelta al bloque de
> color ilustrado.
>
> El logo (`public/logo/literarias-wordmark.svg`) es el archivo editable
> oficial que mandó el cliente (no una recreación ni un recorte de
> Instagram), recortado a su bounding box real. Es negro puro — el
> componente `Logo.astro` genera la versión clara sobre fondos oscuros
> (footer) invirtiéndolo con un filtro CSS, sin necesitar un segundo
> archivo. Si el cliente manda una versión nueva del logo, solo hay que
> reemplazar ese SVG.
>
> "Nuestra biblioteca" (`src/data/biblioteca.ts` + `public/biblioteca/`) es
> una lista aparte de libros recomendados por el club, fuera de las
> lecturas oficiales del mes — solo portada y título. Para agregar uno
> nuevo: mete la imagen en `public/biblioteca/` y agrega una entrada
> `{ titulo, autor, slug }` en `biblioteca.ts` con el mismo `slug` que el
> nombre del archivo.

## SEO

El dominio de producción (`https://clubliterarias.com`) ya está configurado en
`astro.config.mjs` (`site:`) — de ahí salen todas las URLs absolutas del sitio
(canonical, sitemap, Open Graph). Si el dominio cambia, hay que actualizarlo ahí.

Ya incluido:

- **Meta tags completos** por página vía `<Layout title=... description=... image=...>`:
  título, descripción, canonical, Open Graph y Twitter Card (`summary_large_image`).
- **Imagen para compartir** (`public/og-image.jpg`, 1200×630) — es la que se ve
  como tarjeta al mandar el link por WhatsApp, Instagram, iMessage, etc. Si
  cambian el logo o los colores de marca, hay que regenerar esta imagen a mano
  (es un JPG estático, no se genera solo).
- **Datos estructurados (JSON-LD)**: `Organization` en el `<head>` (nombre,
  logo, ciudad, Instagram) y `Book` en el Hero con los datos del libro del mes
  — ayuda a que Google pueda mostrar info enriquecida en resultados de búsqueda.
  Esto es lo que trae `main` de fábrica; si alguna vez se retoma la rama
  `editorial-design`, revisa que este bloque siga presente ahí también.
- **`sitemap-index.xml`** generado automático en cada build (`@astrojs/sitemap`)
  y **`robots.txt`** apuntando a él.
- **`site.webmanifest`** + `apple-touch-icon.png` para que "Agregar a pantalla
  de inicio" desde el celular use el ícono de la marca, no uno genérico.

Pendiente ahora que el sitio ya está publicado en `clubliterarias.com`:

1. Dar de alta la propiedad en [Google Search Console](https://search.google.com/search-console)
   y enviar `https://clubliterarias.com/sitemap-index.xml`.
2. Probar cómo se ve el link compartido en
   [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) y
   [Twitter Card Validator](https://cards-dev.twitter.com/validator) — a veces
   estas herramientas cachean la primera versión del link, así que si cambian
   el `og-image.jpg` después, hay que forzar ahí un refresh.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera ./dist
npm run preview   # sirve ./dist localmente
```

## Desplegar (Cloudflare Workers, ya configurado)

El repo está conectado a **Cloudflare Workers** (no Pages clásico — ese
flujo migró) con un proyecto por rama, cada uno con su propio dominio:

| Rama | Worker (nombre en `wrangler.jsonc`) | URL |
|---|---|---|
| `main` | `clubliterarias` | `clubliterarias.com` (producción) |
| `dualipa-redesign` | `clubliterariasdualipa` | `dualipa.clubliterarias.com` (pruebas) |
| `editorial-design` | `clubliterariasredesign` | (sin usar activamente) |

Cada push a una rama dispara su build/deploy solo, vía **Workers Builds**
(Build command `npm run build`, Deploy command `npx wrangler deploy`,
sirviendo `./dist` como assets). El `wrangler.jsonc` de cada rama debe traer
el `"name"` que le corresponde a **su propio** proyecto de Cloudflare — si
no coincide exacto con el nombre del proyecto en el dashboard, el deploy
falla o le pega al Worker equivocado.

**Para pasar cambios probados en `dualipa-redesign` a producción (`main`):**

```bash
git checkout main
git rm -rf .
git checkout dualipa-redesign -- .
```

Y luego corregir a mano el `"name"` de `wrangler.jsonc` de vuelta a
`clubliterarias` (el `checkout` trae el de la otra rama) antes de hacer
commit y push. Esto iguala el contenido de las dos ramas sin fusionar su
historial de git ni sus `wrangler.jsonc`.

Si el proyecto de Cloudflare de una rama muestra el sitio equivocado a
pesar de que el deploy salió "Active" sin errores: revisa **Deployments →
Version History** — es común que quede una versión vieja "Manually
deployed" (del asistente de creación del proyecto) como la activa, y hay
que promover a mano la versión correcta con **"Promote version"**.
