# Literarias — club de lectura

Sitio del club de lectura Literarias (Chihuahua, Chih., desde 2022). Construido con
[Astro](https://astro.build) + Tailwind CSS v4: 100% estático, sin frameworks pesados,
listo para Cloudflare Pages.

La identidad visual (tipografía redondeada, colores por mes, estrellitas, líneas
onduladas, fichas bibliográficas) está tomada del [Instagram del club](https://www.instagram.com/club.literarias).

## Estructura

```
src/
├── data/lecturas.ts       # Contenido: lectura del mes + archivo de lecturas anteriores
├── components/            # Header, Hero, PastReads, About, Join, Footer, etc.
├── layouts/Layout.astro   # <head>, fuentes, script de scroll-reveal y contadores
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
> El logo (`public/logo/literarias-logo*.png`) es un recorte real de una de
> sus publicaciones de Instagram, no una tipografía. Si tienen el archivo
> original del logo (Canva, Illustrator, etc.) en mejor resolución, mejor
> reemplazar esos PNG por esa versión.

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
- **`sitemap-index.xml`** generado automático en cada build (`@astrojs/sitemap`)
  y **`robots.txt`** apuntando a él.
- **`site.webmanifest`** + `apple-touch-icon.png` para que "Agregar a pantalla
  de inicio" desde el celular use el ícono de la marca, no uno genérico.

Pendiente para cuando el sitio ya esté publicado en su dominio final:

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

## Desplegar en Cloudflare Pages (con tu dominio de Cloudflare)

Como el dominio ya está en Cloudflare, lo más simple es Cloudflare Pages —
mismo panel, sin pasos extra de DNS.

1. Sube este repo a GitHub (ya está conectado a `chalusb/ClubLiterarias`):
   ```bash
   git add -A
   git commit -m "Sitio inicial de Literarias"
   git push -u origin main
   ```
2. En el dashboard de Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**,
   elige el repo `ClubLiterarias`.
3. Configuración de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare te da una URL `*.pages.dev`.
5. En **Custom domains** del proyecto de Pages, agrega tu dominio — como ya
   vive en la misma cuenta de Cloudflare, el DNS se conecta automáticamente
   (no hace falta tocar nameservers ni copiar registros a mano).

Cada `git push` a `main` vuelve a desplegar solo.
