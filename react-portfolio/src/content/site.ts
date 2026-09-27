/* Contenido compartido. Textos tal cual aparecen en laurabenavente.com. */

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
  story1: '/story1-case-study',
  story2: '/story2-case-study',
  story3: '/story3-case-study',
};

export const TICKER = ['Strategy', 'Systems', 'Experience', 'AI', 'Build', 'B2B SaaS', 'Financial software', 'Consumer technology'];

export const STEPS = [
  { num: '01', name: 'Strategy', caption: 'Story 1 · Value against effort', img: '/images/fsb-01-strategy.jpg', alt: 'Value against effort matrix with the three proposals plotted, and the chosen one marked.' },
  { num: '02', name: 'Systems', caption: 'Story 1 · The flow across products', img: '/images/fsb-02-systems.jpg', alt: 'Concept board: problem statement, cross journey issues and the flow across products.' },
  { num: '03', name: 'Experience', caption: 'Story 3 · Smart WiFi wireflow', img: '/images/fsb-03-experience.jpg', alt: 'Wireflow of the Smart WiFi journey: screens, decision points, error states and recovery paths.' },
  { num: '04', name: 'AI', caption: 'Story 2 · Drafting with AI in the product', img: '/images/fsb-04-ai.jpg', alt: 'Draft with AI inside the product: document type, client, the instruction the user writes, and the review step before anything is saved.' },
  { num: '05', name: 'Build', caption: 'Story 1 · The returns list', img: '/images/fsb-05-returns.png', alt: 'The returns list: 142 returns with status, eFile state, last modified and tax year end, filtered to the eighteen that need attention.' },
];

export const WAYS = [
  {
    num: '01', title: 'See the system', company: 'Wolters Kluwer ecosystem', tags: 'Systems · Complexity · Scale',
    text: 'Understanding how products, workflows and people connect across a complex ecosystem.',
    to: ROUTES.story1, cta: 'Story 1', panel: 'story 1 · the flow across products', tone: 'dark' as const,
    img: '/images/fsb-02-systems.jpg', alt: 'Concept board: problem statement, cross journey issues and the flow across products.',
  },
  {
    num: '02', title: 'Find the opportunity', company: 'Wolters Kluwer strategy', tags: 'Product thinking · AI · Ambiguity',
    text: 'Looking beyond the original requirement to identify where technology can genuinely change the product.',
    to: ROUTES.story2, cta: 'Story 2', panel: 'story 2 · drafting with ai in the product', tone: 'light' as const,
    img: '/images/fsb-04-ai.jpg', alt: 'Draft with AI inside the product: document type, client, the instruction the user writes, and the review step before anything is saved.',
  },
  {
    num: '03', title: 'Make the experience work end to end', company: 'Movistar', tags: 'Interaction · Engineering · Execution',
    text: 'Taking product experiences end to end, designing interactions inside real technical constraints alongside the people building them',
    to: ROUTES.story3, cta: 'Story 3', panel: 'story 3 · smart wifi wireflow', tone: 'accent' as const,
    img: '/images/fsb-03-experience.jpg', alt: 'Wireflow of the Smart WiFi journey: screens, decision points, error states and recovery paths.',
  },
];

export const STORIES = [
  {
    label: 'Story 1', title: 'Wolters Kluwer ecosystem', to: ROUTES.story1,
    text: 'Designing a cloud ecosystem for tax professionals',
    metric: 'L → S', metricLabel: 'Development effort: from an L to an S',
    tags: ['Product design', 'B2B SaaS', 'AI-assisted build', 'Complex workflows', 'Multi-market', 'Cloud migration'],
    video: '/video/s1-coded-prototype.mp4', poster: '/images/story-1-poster.jpg',
    alt: 'The coded prototype running: selecting a client, moving to another product and arriving with the context intact.',
  },
  {
    label: 'Story 2', title: 'Wolters Kluwer strategy', to: ROUTES.story2,
    text: 'Bringing AI-Assisted drafting inside the product, so professionals never start a client from an empty page.',
    metric: '3/3', metricLabel: 'Validated 3/3 · shipped in Canada',
    tags: ['Product design', 'B2B SaaS', 'AI-native', 'Human review', 'MVP definition'],
    video: '/video/s2-template-ai.mp4', poster: '/images/story-2-poster.jpg',
    alt: 'The instruction step inside the product: the professional picks the document type and the client, then writes in plain sentences what the letter should cover.',
  },
  {
    label: 'Story 3', title: 'Movistar', to: ROUTES.story3,
    text: 'Designing a self-diagnosis experience for home connectivity, where the test could not be made faster and the wait had to be made understandable.',
    metric: '−12%', metricLabel: 'Call centre calls',
    tags: ['Interaction design', 'Consumer', 'Self-service', 'Motion', 'Design system'],
    img: '/images/story-3-movistar.png',
    alt: 'The Smart WiFi self-diagnosis flow: the app screens laid out as a grid, from the autodiagnostic entry point through the speed test to the help and interference advice.',
  },
];

export const FACTS: [string, string][] = [
  ['Degree', 'Digital Design'],
  ['Bootcamp', 'UX / UI Design'],
  ['Master’s', 'Front-End Development'],
  ['Experience', '8+ years'],
  ['Languages', 'Spanish and English'],
];
