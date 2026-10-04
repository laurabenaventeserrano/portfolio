# Laura Benavente · Portfolio (React)

Portfolio en React + TypeScript + Vite. Diseño en blanco y negro con acento lila `#E7BFFF`, con el layout y el storytelling de cloudstudio.es como referencia. Todos los textos vienen de laurabenavente.com.

## Arrancar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera dist/
npm run preview   # sirve dist/ en local
```

## Páginas

| Ruta | Archivo |
|---|---|
| `/` | `src/pages/Home.tsx` · hero, experience, selected work, about, playground |
| `/work/cch-ifirm-cloud-migration` | `src/pages/Case1.tsx` · CCH iFirm Cloud Migration |
| `/work/ai-customer-communications` | `src/pages/Case2.tsx` · AI-Powered Customer Communications |
| `/work/ai-client-data-migration` | `src/pages/Case3.tsx` · AI-Powered Client Data Migration |
| `/work/telefonica-multi-device` | `src/pages/Case4.tsx` · Multi-device Product Design for Telefónica |
| cualquier otra | `src/pages/NotFound.tsx` |

Las rutas antiguas (`/story1-case-study`, etc.) redirigen al caso nuevo, así que los enlaces que ya circulan siguen funcionando.

## Estructura

```
src/
  main.tsx               rutas
  styles/global.css      tokens (colores, tipos, espaciado) y todos los estilos
  content/site.ts        textos y datos compartidos de la home, enlaces
  lib/particles.ts       motor del campo de partículas (Canvas 2D, sin librerías)
  lib/hooks.ts           movimiento reducido, sección activa, progreso de lectura, título
  components/
    Layout.tsx           cabecera, menú móvil, contacto y pie, barra de progreso
    ParticleCanvas.tsx   campo de partículas; en modo interactive el ratón lo dispersa y la quietud lo recoge
    CaseHero.tsx         cabecera común de los casos (empresa, rol, estado, tags, confidencial)
    ui.tsx               CaseSection, Steps, Pair, Callout, Item, Figure, Video, Stats, Tags, Flow, NextCase, Kicker
public/
  images/                imágenes de la web actual
  video/                 vídeos convertidos a mp4 (H.264, sin audio)
```

## Publicar

Es una SPA con rutas limpias, así que el servidor tiene que devolver `index.html` para cualquier ruta:

- **Netlify:** ya incluido en `public/_redirects`.
- **Vercel:** ya incluido en `vercel.json`.
- **Otro hosting (Apache, Nginx, GitHub Pages):** configura la reescritura a `index.html`.

## Lo que sigue viviendo fuera

- Los prototipos del lab (`/lab/postal/` y `/lab/arcana/`) y el CV en PDF son archivos independientes. Los enlaces apuntan a `https://laurabenavente.com/...`. Si los copias dentro de `public/`, puedes cambiarlos a rutas relativas en `src/content/site.ts`.

## Accesibilidad

- Con `prefers-reduced-motion`: partículas quietas, cinta parada y vídeos sin autoplay y con controles.
- Enlace para saltar al contenido, foco visible y una sola `h1` por página.
- Cada imagen lleva el texto alternativo de la web actual.
