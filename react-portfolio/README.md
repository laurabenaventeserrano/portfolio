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
| `/` | `src/pages/Home.tsx` |
| `/story1-case-study` | `src/pages/Story1.tsx` · CCH iFirm by Wolters Kluwer |
| `/story2-case-study` | `src/pages/Story2.tsx` · AI-Assisted Drafting for CCH iFirm |
| `/story3-case-study` | `src/pages/Story3.tsx` · Movistar |
| cualquier otra | `src/pages/NotFound.tsx` |

Las rutas son las mismas que en la web actual, así que los enlaces que ya circulan siguen funcionando.

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
    StoryHero.tsx        cabecera común de las stories
    ui.tsx               Chapter, Callout, Item, Figure, Video, Stats, Tags, Flow, MeasurePlan, NextStory, Ellipse, Kicker
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
