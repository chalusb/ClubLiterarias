# Literarias — club de lectura

Esta rama (`main`, conectada al dominio `clubliterarias.com`) es **solo la
pantalla de "Próximamente"**: fondo, logo real y el texto, nada más. El sitio
completo vive en otras ramas de este mismo repo mientras se decide el diseño
final con el cliente:

- [`editorial-design`](https://github.com/chalusb/ClubLiterarias/tree/editorial-design) —
  la versión completa ya construida, con la identidad visual tomada del
  [Instagram del club](https://www.instagram.com/club.literarias) (tipografía
  redondeada, colores por mes, estrellitas, líneas onduladas, fichas
  bibliográficas).
- [`dualipa-redesign`](https://github.com/chalusb/ClubLiterarias/tree/dualipa-redesign) —
  rediseño nuevo inspirado en [service95.com/book-club](https://www.service95.com/book-club)
  (la referencia que dio el cliente), con el mismo contenido del club.

Cloudflare Pages genera automáticamente una URL de preview para cada rama
(`<rama>.clubliterarias.pages.dev` o similar) aunque solo `main` esté
conectada al dominio — así se pueden revisar las otras dos sin afectar lo que
ve el público.

Construido con [Astro](https://astro.build) + Tailwind CSS v4: 100% estático,
sin frameworks pesados, listo para Cloudflare Pages.

## Estructura

```
src/
├── components/Logo.astro   # El único componente que usa esta rama
├── layouts/Layout.astro    # <head>, SEO, fuentes
└── pages/index.astro       # La pantalla de "Próximamente"
```

Para editar el texto o el logo de esta pantalla, todo está en
`src/pages/index.astro`.

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
  logo, ciudad, Instagram) — ayuda a que Google entienda de qué se trata el
  sitio. (La rama `editorial-design` además agrega `Book` con los datos del
  libro del mes.)
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
