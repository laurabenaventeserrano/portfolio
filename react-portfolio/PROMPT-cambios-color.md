Estamos en el proyecto React de mi portfolio (react-portfolio: Vite + React + TypeScript). El acento es el lila #E7BFFF, definido como `--accent` en `src/styles/global.css`. Quiero usar más el color y quitar recursos que se ven anticuados. Haz estos cambios sin tocar textos, rutas ni la estructura de las páginas.

## 1. Fuera el subrayado lila de los textos
- Elimina la clase `.marker` de `global.css` y todos sus usos en `src/pages/*.tsx`. El texto queda igual, sin fondo ni span extra: "build." en la home; "starting." y "Decide" en Story 2; "From an L to an S" en Story 1; "clock time and brain time." en Story 3.
- En las cabeceras de las stories, `.stat__value--accent` (L → S, 3/3, −12%) pierde también el fondo lila. La cifra queda en negro, como las demás.

## 2. Hero: fuera la elipse de "engineers."
- Quita `<Ellipse>` del titular de `Home.tsx`. Queda `who engineers<span className="accent">.</span>`: solo el punto final en lila.
- En `NotFound.tsx` ("wandered"), quita la elipse sin más.
- Borra el componente `Ellipse` de `src/components/ui.tsx` y el bloque `.ellipse` de `global.css`.

## 3. La cinta bajo el hero, en lila
- `.ticker`: fondo `var(--accent)`, texto `var(--ink)`.
- `.ticker__item span` (los ✦): `var(--ink)`.

## 4. Nuevo tono de sección lila
- Crea `.section--accent { background: var(--accent); color: var(--ink); }` en `global.css`.
- Dentro de `.section--accent`:
  - Los textos secundarios (`.kicker--muted`, `.muted`, `.lead`, `.fact dt`, `.indicator__n` inactivo) van en `#3E3D3A`. `#5C5B57` se queda por debajo de AA sobre lila.
  - `.way__ghost` va en `rgba(14, 14, 12, 0.06)`.
  - El `.panel` de imagen se queda negro.

## 5. Qué secciones pasan a lila (home)
- **"Make the experience work end to end":** es el bloque 03 de "Three ways", `WAYS[2]` en `src/content/site.ts`. Cambia su `tone` de `soft` a un nuevo valor `accent`, y en `Home.tsx` mapea `tone === 'accent'` a `section--accent`.
- **"Find the opportunity" (`WAYS[1]`):** se queda en blanco. No lo toques.
- **About me** (`#about`): cambia `section--soft` por `section--accent`. La etiqueta "Laura Benavente" sobre la foto (`.about__badge`) pasa a fondo blanco, para que no se funda con la sección.
- **Having fun with AI** (`#lab`): cambia `section--soft` por `section--accent`. Las tarjetas `.pass` se quedan blancas, con su borde negro, el punto lila de la cabecera y el botón negro, que pasa a lila en hover.

Así, los tres bloques de "Three ways" alternan negro, blanco y lila.

## Reglas
- El lila va solo como fondo, o como detalle decorativo (el punto del hero). Nunca como color de texto sobre blanco.
- Ningún hover puede acabar en lila sobre fondo lila. Revisa `pill--line`, `pill--dark` y los enlaces dentro de `.section--accent`: si alguno se pone lila en hover, que pase a negro con texto blanco.
- Comprueba el contraste AA de todo el texto sobre `#E7BFFF`.
- Al terminar: `npm run build` sin errores, y un resumen de los archivos tocados.
