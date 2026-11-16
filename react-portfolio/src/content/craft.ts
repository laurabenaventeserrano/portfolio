/*
  CRAFT: la galería de la portada (#craft). Solo datos: la rejilla, el visor y el menú se ajustan solos.

  Para añadir una pieza:
  1. Deja el archivo en public/craft/ (vídeo .mp4 H.264 o imagen .jpg / .png / .webp / .gif).
     Vídeo: mejor 1280 px de ancho, sin audio, menos de ~60 MB. Añade también un fotograma .jpg como póster.
  2. Añade una entrada a CRAFT (abajo). El orden de la lista es el orden en pantalla.
  3. `size` decide el ancho en escritorio: 'full' (toda la fila), 'wide' (2/3), 'half' (1/2), 'third' (1/3).
     En móvil todas ocupan el ancho entero. `ratio` es la proporción de la miniatura (por defecto 16 / 9).

  Si la lista está vacía, la sección, su punto lateral y su entrada en el menú no aparecen.
  Nada de piezas inventadas ni tarjetas vacías: solo trabajo real.
*/

export type CraftItem = {
  id: string;
  /** Nombre corto, debajo de la pieza */
  title: string;
  /** Una línea opcional, junto al nombre (mono, gris) */
  meta?: string;
  /** Qué se ve en pantalla, para lectores de pantalla */
  alt: string;
  /** Vídeo en bucle y sin sonido: /craft/archivo.mp4 */
  video?: string;
  /** Imagen (o GIF). En un vídeo, su póster */
  image: string;
  /** Proporción de la miniatura, p. ej. '16 / 9', '4 / 5', '1 / 1' */
  ratio?: string;
  size?: 'full' | 'wide' | 'half' | 'third';
  /** Enlace opcional (p. ej. el archivo de Figma). Si está, la pieza lo abre en otra pestaña en vez del visor */
  href?: string;
  /** Texto de la tag del cursor al pasar por encima cuando hay enlace, p. ej. 'Open in Figma' */
  cursor?: string;
};

export const CRAFT: CraftItem[] = [
  {
    id: 'figma-timelapse',
    title: 'AI Document Review, in Figma',
    meta: 'Design process · timelapse',
    video: '/craft/figma-timelapse.mp4',
    image: '/craft/figma-timelapse.jpg',
    alt: 'Sped-up screen recording of a Figma file for an AI document review: design foundations, text styles, component variants and annotated UX flows being built, with the review panel showing six checks passed.',
    size: 'full',
    href: 'https://www.figma.com/design/0o6fZYZgcKvpZlkbjAJFNr/craft--AI-Document-Review-%E2%80%94-Design-System--Copy-?node-id=0-1&t=CHgiHTJI9L2IakrI-1',
    cursor: 'Open in Figma',
  },
];
