/* Contenido compartido. Textos de laurabenavente.com y de la presentación de Laura. */

export const LINKS = {
  email: 'mailto:laurabenavente@me.com',
  emailText: 'laurabenavente@me.com',
  cv: 'https://laurabenavente.com/Laura_Benavente_CV_En.pdf?v=4',
  linkedin: 'https://www.linkedin.com/in/laura-benavente-serrano/',
  instagram: 'https://www.instagram.com/havingfunwithai_/',
  github: 'https://github.com/laurabenaventeserrano',
  // Los prototipos del lab son apps independientes que ya viven en el dominio.
  postcard: 'https://laurabenavente.com/lab/postal/',
  arcana: 'https://laurabenavente.com/lab/arcana/',
};

export const ROUTES = {
  home: '/',
  case1: '/work/cch-ifirm-cloud-migration',
  case2: '/work/ai-customer-communications',
  case3: '/work/ai-client-data-migration',
  case4: '/work/ifirm-ai-contextual-assistant',
  case5: '/work/telefonica-multi-device',
};

/* URLs de la versión anterior: siguen funcionando y llevan al caso nuevo (ver main.tsx y public/_redirects) */
export const LEGACY_ROUTES: [string, string][] = [
  ['/story1-case-study', ROUTES.case1],
  ['/story2-case-study', ROUTES.case2],
  ['/story3-case-study', ROUTES.case5],
];

export const TICKER = ['Product design', 'AI', 'Systems', 'Code', 'Design systems', 'B2B SaaS', 'Tax & accounting', 'Telecommunications'];

export const STEPS = [
  { num: '01', name: 'Strategy', caption: 'Case 01 · Value against effort', img: '/images/fsb-01-strategy.jpg', alt: 'Value against effort matrix with the three proposals plotted, and the chosen one marked.' },
  { num: '02', name: 'Systems', caption: 'Case 01 · The flow across products', img: '/images/fsb-02-systems.jpg', alt: 'Concept board: problem statement, cross journey issues and the flow across products.' },
  { num: '03', name: 'Experience', caption: 'Case 05 · Smart WiFi wireflow', img: '/images/fsb-03-experience.jpg', alt: 'Wireflow of the Smart WiFi journey: screens, decision points, error states and recovery paths.' },
  { num: '04', name: 'AI', caption: 'Case 02 · Drafting with AI in the product', img: '/images/fsb-04-ai.jpg', alt: 'Draft with AI inside the product: document type, client, the instruction the user writes, and the review step before anything is saved.' },
  { num: '05', name: 'Build', caption: 'Case 01 · The returns list', img: '/images/fsb-05-returns.png', alt: 'The returns list: 142 returns with status, eFile state, last modified and tax year end, filtered to the eighteen that need attention.' },
];

export const EXPERIENCE = [
  {
    company: 'Wolters Kluwer', role: 'Senior Product Designer', years: '2021–2026',
    text: 'Led product design for complex B2B SaaS workflows across accounting and professional services, connecting fragmented journeys, systems and user needs across international markets. Evolving product and design systems through AI, automation and code.',
    tags: ['B2B SaaS', 'Tax & accounting', 'Cloud', 'AI', 'Design systems', 'Complex workflows'],
  },
  {
    company: 'frog / Telefónica', role: 'Product Designer', years: '2019–2021',
    text: 'Designed multi-device experiences across mobile, TV and voice, including tools used by partners to build and manage interactive Living Apps.',
    tags: ['Mobile', 'Web', 'TV', 'Voice', 'Multi-device', 'Product design'],
  },
];

/* Los cuatro casos de Selected work. El orden es el de la portada. */
export const WORK = [
  {
    num: '01', title: 'CCH iFirm Cloud Migration', company: 'Wolters Kluwer', to: ROUTES.case1, status: 'Shipped',
    text: 'Designing continuity across a fragmented SaaS ecosystem.',
    metric: 'L → S', metricLabel: 'Development effort',
    tags: ['Product design', 'Product strategy', 'Systems', 'Design systems'],
    video: '/video/s1-coded-prototype.mp4', img: '/images/story-1-poster.jpg',
    alt: 'The coded prototype running: selecting a client, moving to another product and arriving with the context intact.',
  },
  {
    num: '02', title: 'AI-Powered Customer Communications', company: 'Wolters Kluwer / CCH iFirm', to: ROUTES.case2, status: 'Shipped',
    text: 'Bringing AI inside the product, so professionals never start a client communication from an empty page.',
    metric: '3/3', metricLabel: 'Validated · shipped in Canada',
    tags: ['AI product design', 'Product strategy', 'Human-AI interaction'],
    video: '/video/s2-template-ai.mp4', img: '/images/story-2-poster.jpg',
    alt: 'The instruction step inside the product: the professional picks the document type and the client, then writes in plain sentences what the letter should cover.',
  },
  {
    num: '03', title: 'AI-Powered Client Data Migration', company: 'Adsolut Accounting', to: ROUTES.case3, status: 'Shipped',
    text: 'An AI powered flow to migrate client data from competitor software.',
    metric: 'Day → min', metricLabel: 'Manual review time',
    tags: ['AI product design', 'Design + build', 'Prototyping'],
    img: '/images/s4-dashboard.jpg',
    alt: 'The Data Migration dashboard in Adsolut: migrations from Exact and Yuki listed by client, with connected, pending and failed counts.',
  },
  {
    num: '04', title: 'AI Contextual Assistant for CCH iFirm', company: 'Wolters Kluwer', to: ROUTES.case4, status: 'Concept',
    text: 'From preserving context to understanding context: an AI sidebar that knows what the user is working on.',
    metric: '', metricLabel: '',
    tags: ['AI product design', 'Human-AI interaction', 'Product strategy'],
    video: '/video/s1-ai-concept.mp4', img: '/images/s1-hd-ask-ai.jpg',
    alt: 'Future concept: from the CCH iFirm dashboard the user opens Ask iFirm AI, and the contextual sidebar answers which returns need attention first.',
  },
  {
    num: '05', title: 'Multi-device Product Design for Telefónica', company: 'frog / Telefónica', to: ROUTES.case5, status: 'Shipped',
    text: 'Three products. Three interaction models. Web, mobile and TV.',
    metric: '−12%', metricLabel: 'Call centre calls',
    tags: ['Multi-device', 'Interaction', 'Mobile', 'TV', 'Voice'],
    img: '/images/story-3-movistar.png',
    alt: 'The Smart WiFi self-diagnosis flow: the app screens laid out as a grid, from the autodiagnostic entry point through the speed test to the help and interference advice.',
  },
];

export const FACTS: [string, string][] = [
  ['Experience', '8+ years'],
  ['Degree', 'Digital Design'],
  ['Bootcamp', 'UX / UI Design'],
  ['Master’s', 'Front-End Development'],
  ['Languages', 'Spanish and English'],
];

export const ABOUT_ROWS: [string, string][] = [
  ['Sectors', 'Financial products · Tax & accounting · Telecommunications'],
  ['Experience', 'Wolters Kluwer · frog / Telefónica'],
  ['Builds with', 'Figma · HTML · CSS · TypeScript · React · Git · GitHub Copilot · Claude Code'],
];
