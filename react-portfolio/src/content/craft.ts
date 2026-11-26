/*
  CRAFT: la galería de la portada (#craft) y las páginas de cada proyecto de Craft. Solo datos:
  la rejilla, el visor, las páginas y el menú se ajustan solos.

  Para añadir una pieza suelta a la galería:
  1. Deja el archivo en public/craft/ (vídeo .mp4 H.264 o imagen .jpg / .png / .webp / .gif).
     Vídeo: mejor 1280 px de ancho, sin audio, menos de ~60 MB. Añade también un fotograma .jpg como póster.
  2. Añade una entrada a CRAFT (abajo). El orden de la lista es el orden en pantalla.
  3. `size` decide el ancho en escritorio: 'full' (toda la fila), 'wide' (2/3), 'half' (1/2), 'third' (1/3).
     En móvil todas ocupan el ancho entero. `ratio` es la proporción de la miniatura (por defecto 16 / 9).

  Proyectos con página propia (CRAFT_PROJECTS): la pieza de la galería lleva `project` con su slug
  y abre /craft/<slug>. Allí se ven sus vídeos en orden. Un vídeo sin archivo (`video` vacío) no se pinta;
  si el archivo no carga, tampoco. Un enlace sin `href` no se pinta.

  Si CRAFT está vacía, la sección, su punto lateral y su entrada en el menú no aparecen.
  Nada de piezas inventadas ni tarjetas vacías: solo trabajo real.
*/

export type CraftItem = {
  id: string;
  /** Nombre corto: va en el aria-label y en el visor */
  title: string;
  /** Antetítulo bajo la pieza, sobre el título (solo piezas con `project`) */
  eyebrow?: string;
  /** Una línea opcional, junto al nombre en el visor (mono, gris) */
  meta?: string;
  /** Qué se ve en pantalla, para lectores de pantalla */
  alt: string;
  /** Vídeo en bucle y sin sonido: /craft/archivo.mp4 */
  video?: string;
  /** Imagen (o GIF). En un vídeo, su póster (opcional: sin él se ve el primer fotograma) */
  image?: string;
  /** Proporción de la miniatura, p. ej. '16 / 9', '4 / 5', '1 / 1' */
  ratio?: string;
  size?: 'full' | 'wide' | 'half' | 'third';
  /** Slug de un proyecto de CRAFT_PROJECTS: la pieza abre su página */
  project?: string;
  /** Enlace externo opcional. Si está, la pieza lo abre en otra pestaña en vez del visor */
  href?: string;
  /** Texto de la tag del cursor al pasar por encima cuando hay enlace, p. ej. 'Open in Figma' */
  cursor?: string;
};

/** Un vídeo o una imagen de una etapa del proceso. Se pinta solo si `src` existe en public/ */
export type CraftMedia = {
  /** /video/archivo.mp4 o /craft/archivo.jpg. El tipo sale de la extensión (.mp4 / .webm = vídeo) */
  src: string;
  /** Póster del vídeo (opcional) */
  poster?: string;
  /** Qué se ve, para lectores de pantalla (texto de Laura) */
  alt: string;
  /** Pie opcional bajo la pieza (texto de Laura) */
  caption?: string;
  /** Ancho en escritorio. Sin él, la pieza destacada va a todo el ancho y el resto se reparte solo */
  size?: 'full' | 'wide' | 'half' | 'third';
  /** Proporción, p. ej. '16 / 9' (por defecto) */
  ratio?: string;
  /** Pieza principal de la etapa: a todo el ancho */
  feature?: boolean;
};

/** Una etapa del proceso: número, título, herramientas, descripción, explicaciones opcionales y sus piezas, en orden */
export type CraftStep = {
  num: string;
  title: string;
  tools: string;
  description: string;
  /** Párrafos opcionales tras la descripción (texto de Laura) */
  notes?: string[];
  media: CraftMedia[];
};

/** Tarjeta destacada en Selected work (portada). Textos propios, aprobados aparte de los de la página */
export type CraftCard = {
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  workflow: string[];
  /** Texto de la tag del cursor al pasar por encima (no hay botón) */
  cta: string;
  /** Vídeo propio de la portada. Mientras no exista (o no cargue) se ve `poster` */
  video?: string;
  poster: string;
};

export type CraftProject = {
  slug: string;
  card?: CraftCard;
  eyebrow: string;
  title: string;
  subtitle?: string;
  intro?: string;
  workflow?: string;
  /** Vídeo del proceso completo, bajo la cabecera y antes de las etapas. Se pinta solo si existe en public/ */
  overview?: CraftMedia;
  steps: CraftStep[];
  links: { label: string; href?: string }[];
};

export const craftPath = (slug: string) => `/craft/${slug}`;

/* Textos aprobados por Laura (21 Nov 2026), carácter a carácter. No cambiarlos. */
export const CRAFT_PROJECTS: CraftProject[] = [
  {
    slug: 'ai-document-review',
    // Página del proyecto (textos aprobados 21 Nov 2026)
    eyebrow: 'DESIGN ENGINEERING / 001',
    title: 'AI Document Review',
    subtitle: 'From AI prototype to polished UI.',
    intro: 'An iterative design workflow combining AI-assisted prototyping, hands-on UI refinement and code implementation.',
    workflow: 'Claude Code → Figma → React',
    // El proceso completo con sus rótulos (hecho en Remotion, 26 Nov 2026). `alt` es texto nuevo: pendiente de que Laura lo apruebe.
    overview: {
      src: '/video/ai-document-review-process.mp4',
      poster: '/video/ai-document-review-process.jpg',
      alt: 'Screen recordings of the whole process in six captioned steps: a coded prototype, pairing with Claude Code, design tokens and components in Figma, the review flows, and the final React build.',
    },
    // Tarjeta de la portada (textos aprobados 21 Nov 2026). El vídeo aún no existe: al dejarlo en
    // public/video/ai-document-review-home-process.mp4 aparece solo. Hasta entonces, el fotograma de la portada del archivo de Figma.
    // El timelapse de Figma no va aquí: se queda en Craft.
    card: {
      eyebrow: 'DESIGN ENGINEERING · AI WORKFLOW',
      title: 'AI Document Review',
      headline: 'From AI prototype to polished UI.',
      description: 'Prototyped with Claude Code, refined in Figma using design tokens and variables, then brought back to React.',
      workflow: ['Claude Code', 'Figma', 'React'],
      cta: 'Explore the process',
      video: '/video/ai-document-review-home-process.mp4',
      poster: '/craft/figma-timelapse.jpg',
    },
    /*
      Las cuatro etapas, en orden. Para añadir un vídeo o una captura, deja el archivo en public/video/
      y añade (o descomenta) una línea en `media` de su etapa. El orden de la lista es el orden en pantalla.
      Una pieza cuyo archivo no existe no se pinta; una etapa sin piezas muestra solo su texto.
      `alt` (y `caption`, `notes`) son textos de Laura: los que están vacíos esperan su texto.
    */
    steps: [
      {
        num: '01', title: 'AI prototyping', tools: 'Claude Code · React · shadcn/ui',
        description: 'I started by building a functional prototype with Claude Code, exploring the core interactions and user flows directly in React.',
        media: [
          { src: '/video/ai-document-review-01-prototype.mp4', alt: '', feature: true },
        ],
      },
      {
        num: '02', title: 'UI refinement', tools: 'Figma · UI Design',
        description: 'I brought the prototype into Figma to refine the visual hierarchy, typography, spacing and interaction states. AI helped me move faster, but the final design decisions were mine.',
        media: [
          // El timelapse de Figma de Craft: se enlaza desde aquí, el archivo no se mueve
          { src: '/craft/figma-timelapse.mp4', poster: '/craft/figma-timelapse.jpg', alt: 'Sped-up screen recording of a Figma file for an AI document review: design foundations, text styles, component variants and annotated UX flows being built, with the review panel showing six checks passed.', feature: true },
          { src: '/video/ai-document-review-02-figma-refinement.mp4', alt: '', feature: true },
        ],
      },
      {
        num: '03', title: 'Design system & tokens', tools: 'Figma Variables · Design Tokens · Components',
        description: 'I created and organized Figma variables, design tokens and reusable components to establish a consistent visual language across the interface.',
        media: [
          { src: '/video/ai-document-review-03-tokens.mp4', alt: '', feature: true },
        ],
      },
      {
        num: '04', title: 'Back to code', tools: 'VS Code · Claude Code · React',
        description: 'I brought the refined Figma designs back into VS Code, using Claude Code to update the React components and align the implementation with the final design.',
        media: [
          { src: '/video/ai-document-review-04-back-to-code.mp4', alt: '', feature: true },
        ],
      },
    ],
    links: [
      { label: 'Explore in Figma', href: 'https://www.figma.com/design/0o6fZYZgcKvpZlkbjAJFNr/craft--AI-Document-Review-%E2%80%94-Design-System--Copy-?node-id=0-1&t=CHgiHTJI9L2IakrI-1' },
      // Falta la URL del prototipo en vivo: mientras esté vacía, el enlace no aparece
      { label: 'View live prototype', href: '' },
    ],
  },
];

export const CRAFT: CraftItem[] = [
  {
    id: 'ai-document-review',
    eyebrow: 'CRAFT / 001',
    title: 'AI Document Review',
    project: 'ai-document-review',
    video: '/craft/figma-timelapse.mp4',
    image: '/craft/figma-timelapse.jpg',
    alt: 'Sped-up screen recording of a Figma file for an AI document review: design foundations, text styles, component variants and annotated UX flows being built, with the review panel showing six checks passed.',
    size: 'full',
  },
];
