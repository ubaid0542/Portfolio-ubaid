export interface SkillItem {
  name: string;
  level: string;
  usage: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  badge: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend Engineering',
    badge: 'CORE CAPABILITY',
    skills: [
      { name: 'Next.js (App Router)', level: 'Advanced', usage: 'Server Components, SSR/SSG, Dynamic Routing & SEO' },
      { name: 'React 18 / 19', level: 'Advanced', usage: 'Hooks, Component Architecture, State Management' },
      { name: 'TypeScript', level: 'Proficient', usage: 'Type-safe interfaces, strict contracts, scalable codebase' },
      { name: 'Tailwind CSS', level: 'Advanced', usage: 'Custom design systems, responsive layouts, theme tokens' },
      { name: 'HTML5 & CSS3', level: 'Mastery', usage: 'Semantic structure, CSS grid/flexbox, accessibility (WCAG)' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', usage: 'Async patterns, DOM manipulation, Web APIs, Canvas' },
    ],
  },
  {
    id: 'animation',
    label: 'Motion & Interaction Design',
    badge: 'CREATIVE SPECIALTY',
    skills: [
      { name: 'GSAP 3', level: 'Advanced', usage: 'Timeline choreography, SVG morphing, scrub physics' },
      { name: 'ScrollTrigger', level: 'Advanced', usage: 'Pinned narrative scenes, scrubbed unfolds, camera zooms' },
      { name: 'Locomotive Scroll', level: 'Proficient', usage: 'Smooth inertial scrolling and viewport parallax' },
      { name: 'Shery.js & Swiper.js', level: 'Proficient', usage: 'Fluid mouse tracking, touch carousels, 3D cards' },
      { name: 'CSS Keyframe Physics', level: 'Advanced', usage: 'Micro-interactions, paper fold transforms, tactile hover' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Server Systems',
    badge: 'FULL-STACK DELIVERY',
    skills: [
      { name: 'Node.js', level: 'Proficient', usage: 'Event-driven server runtimes, file pipelines, scripts' },
      { name: 'Express.js', level: 'Proficient', usage: 'RESTful API routing, middleware, authentication flows' },
      { name: 'PHP / Laravel', level: 'Working Knowledge', usage: 'Backend fundamentals, MVC architectures, database queries' },
      { name: 'REST APIs', level: 'Advanced', usage: 'CRUD integration, rate handling, payload optimization' },
    ],
  },
  {
    id: 'tools',
    label: 'Databases, Cloud & Workflow',
    badge: 'PRODUCTION READY',
    skills: [
      { name: 'PostgreSQL', level: 'Working Knowledge', usage: 'Relational data modeling, indexing, foreign keys' },
      { name: 'MongoDB', level: 'Proficient', usage: 'Document data stores, flexible schemas, aggregation' },
      { name: 'Git & GitHub', level: 'Advanced', usage: 'Version control, feature branching, release workflows' },
      { name: 'Vercel & CI/CD', level: 'Advanced', usage: 'Automated static edge deployment, CDN caching' },
    ],
  },
];

export const processSteps = [
  {
    number: '01',
    phase: 'DISCOVERY',
    title: 'Understand the Mission',
    timeline: 'Day 1 — 2',
    description: 'We deconstruct business goals, audience expectations, competitors, and functional requirements. Every design decision starts with a clear objective.',
    deliverable: 'Project scope blueprint & interactive brief',
  },
  {
    number: '02',
    phase: 'ARCHITECTURE',
    title: 'Structure & Flow',
    timeline: 'Day 3 — 5',
    description: 'Establish information hierarchy, URL structure, wireframes, and responsive layout foundations. Ensures frictionless navigation on all screen sizes.',
    deliverable: 'Wireframes, content outline & sitemap',
  },
  {
    number: '03',
    phase: 'INTERACTION',
    title: 'Design & Motion Language',
    timeline: 'Day 6 — 9',
    description: 'Design custom visual direction, typography hierarchy, tactile textures, and choreographed GSAP scroll transitions that elevate brand prestige.',
    deliverable: 'Fidelity visual system & motion prototypes',
  },
  {
    number: '04',
    phase: 'ENGINEERING',
    title: 'Develop & Connect',
    timeline: 'Day 10 — 14',
    description: 'Build modular React/Next.js components, integrate dynamic content, hook up APIs, and implement bulletproof TypeScript code.',
    deliverable: 'Working staging site with live testing',
  },
  {
    number: '05',
    phase: 'DELIVERY',
    title: 'Refine, Test & Launch',
    timeline: 'Day 15 — 16',
    description: 'Perform cross-browser QA, mobile responsiveness audit, Core Web Vitals optimization, semantic SEO markup, and Vercel edge deployment.',
    deliverable: 'Production launch with zero-defect guarantee',
  },
];
