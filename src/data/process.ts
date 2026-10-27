export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  subtitle: string;
  timeline: string;
  description: string;
  activities: string[];
  deliverable: string;
  highlightTag: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    phase: 'DISCOVERY & STRATEGY',
    title: 'Project Understanding & Business Goal Mapping',
    subtitle: 'Uncovering what makes your business unique, profitable, and memorable',
    timeline: 'Day 1 — 2',
    description:
      'Before writing a single line of code, we thoroughly deconstruct your business model, target audience personas (e.g. prospective luxury homebuyers, SaaS evaluators, corporate clients), and key competitors. We establish exact success metrics, conversion goals, and technical requirements to ensure every dollar spent directly advances your commercial objectives.',
    activities: [
      '1-on-1 Stakeholder discovery briefing to capture vision, tone, and brand values',
      'Target audience persona analysis & conversion pathway mapping',
      'Competitor benchmarking to identify market gaps and design opportunities',
      'Detailed project scope document, milestone schedule, and fixed timeline agreement',
    ],
    deliverable: 'Project Specification Document & Strategic Roadmap Blueprint',
    highlightTag: 'Requirement Discovery',
  },
  {
    number: '02',
    phase: 'ARCHITECTURE & PLANNING',
    title: 'System Architecture, Sitemap & Wireframe Flow',
    subtitle: 'Engineering the structural blueprint for frictionless navigation and scale',
    timeline: 'Day 3 — 5',
    description:
      'We establish the information architecture, clean URL hierarchy, and sitemap to eliminate user friction and maximize lead capture. Low-fidelity wireframes map out exact visual hierarchies and content placement across mobile and desktop, while data models and API requirements are mapped out for scalability without technical debt.',
    activities: [
      'Information architecture, URL structure & complete SEO sitemap planning',
      'Low-fidelity responsive wireframes for mobile, tablet, and desktop viewports',
      'Full-stack technology stack selection (Next.js App Router, TypeScript, Tailwind CSS)',
      'Database schema modeling & third-party API integration planning',
    ],
    deliverable: 'Interactive Wireframes, Sitemap & System Architecture Schema',
    highlightTag: 'Structural Blueprint',
  },
  {
    number: '03',
    phase: 'DESIGN & INTERACTION',
    title: 'UI/UX Design & Choreographed Motion Language',
    subtitle: 'Crafting tactile editorial visual prestige that builds immediate client trust',
    timeline: 'Day 6 — 9',
    description:
      'We translate your brand into a distinctive design system featuring bespoke typography, high-contrast layouts, paper/editorial textures, and smooth GSAP scroll animations. Every interaction, hover state, and visual transition is purposefully choreographed to tell your story and retain visitor attention without sacrificing readability.',
    activities: [
      'Bespoke visual identity system (editorial typography, custom color palette, textures)',
      'High-fidelity responsive UI layouts designed in Figma with client review rounds',
      'GSAP timeline choreography, scroll-driven triggers & micro-interactions design',
      'Accessibility review (WCAG 2.1 AA contrast, touch targets, and readability standards)',
    ],
    deliverable: 'High-Fidelity UI Design System & Motion Prototype',
    highlightTag: 'Visual & Motion Design',
  },
  {
    number: '04',
    phase: 'CORE DEVELOPMENT',
    title: 'Next.js & TypeScript Full-Stack Clean-Code Engineering',
    subtitle: 'Modular, maintainable, production-grade codebase built with zero bloat',
    timeline: 'Day 10 — 14',
    description:
      'We engineer the website using Next.js App Router, React Server Components, TypeScript, and Tailwind CSS. The frontend is built for blazing fast load speeds with zero layout shifts, while robust backend APIs, form validation pipelines, database connectivity, and WhatsApp / email webhooks are securely wired together.',
    activities: [
      'React Server Components & App Router for lightning-fast initial load times',
      'Strict TypeScript type safety for zero runtime crashes and maintainable code',
      'Custom GSAP ScrollTrigger timeline implementation with 60fps hardware acceleration',
      'Backend route handlers, lead capture APIs, WhatsApp integration & email triggers',
    ],
    deliverable: 'Feature-Complete Private Staging Environment with Live Preview',
    highlightTag: 'Full-Stack Engineering',
  },
  {
    number: '05',
    phase: 'QA & PERFORMANCE',
    title: 'Cross-Device QA, Speed & Core Web Vitals Audit',
    subtitle: 'Stress-testing across every screen size, browser, and network speed',
    timeline: 'Day 15 — 16',
    description:
      'Your website undergoes exhaustive quality assurance across real devices—from 320px compact smartphones to 4K ultra-wide monitors, spanning Chrome, Safari, Firefox, and Edge. We optimize images into modern WebP/AVIF formats, inline critical CSS, subset fonts, and tune JavaScript bundles to achieve sub-second load times and flawless 95+ Google Lighthouse scores.',
    activities: [
      'Cross-browser testing (Chrome, Safari iOS, Firefox, Android Chrome, Edge)',
      'Mobile responsive audit (fluid typography, 44px+ touch targets, zero horizontal jitter)',
      'Core Web Vitals optimization (Sub-second LCP, zero CLS, smooth INP)',
      'Asset compression, next/image optimization, font subsetting & bundle minification',
    ],
    deliverable: 'Comprehensive QA Audit Report & 95+ Google Lighthouse Scorecard',
    highlightTag: 'Performance & QA',
  },
  {
    number: '06',
    phase: 'SEO & VISIBILITY',
    title: 'Technical SEO, Schema Markup & Analytics Setup',
    subtitle: 'Engineering search engine dominance from the HTML foundation up',
    timeline: 'Day 17 — 18',
    description:
      'Great websites must be discovered. We engineer complete technical SEO into the HTML structure: automated XML sitemaps, robots.txt, dynamic OpenGraph social cards, canonical tags, and rich JSON-LD structured data schemas (LocalBusiness, Organization, RealEstateAgent). We configure Google Search Console and Google Analytics 4 so you can track every visitor, lead, and traffic source accurately.',
    activities: [
      'Semantic HTML5 heading tags (H1-H6) & keyword-targeted meta titles/descriptions',
      'JSON-LD Structured Data Schema implementation for Google Rich Snippets',
      'OpenGraph & Twitter preview cards for viral social media sharing',
      'Google Search Console property verification & XML sitemap submission',
      'Google Analytics 4 (GA4) or privacy-focused analytics event tracking setup',
    ],
    deliverable: 'Fully Indexed Technical SEO Foundation & Live Analytics Dashboard',
    highlightTag: 'Technical SEO & Analytics',
  },
  {
    number: '07',
    phase: 'DEPLOYMENT & LAUNCH',
    title: 'Global Edge CDN Deployment & Custom Domain Setup',
    subtitle: 'Seamless, zero-downtime launch backed by world-class edge infrastructure',
    timeline: 'Day 19 — 20',
    description:
      'We orchestrate the production release on the Vercel Edge Network / global CDN with automated CI/CD pipelines connected directly to GitHub. We handle your DNS configuration, custom domain mapping (e.g., wallinfra.com), automated SSL/TLS certificates, enterprise security headers, and caching policies to ensure 99.99% uptime and worldwide low latency.',
    activities: [
      'Automated CI/CD deployment pipeline via GitHub & Vercel Edge Network',
      'Custom domain DNS mapping (A records, CNAME, HTTPS SSL auto-renewal)',
      'Security headers implementation (Content-Security-Policy, HSTS, X-Frame-Options)',
      'Anti-spam honeypot & reCAPTCHA / rate-limiting protection on forms',
      'Final production smoke tests and live URL validation',
    ],
    deliverable: 'Live Production Website on Custom Domain with 100% Uptime SLA',
    highlightTag: 'Production Edge Launch',
  },
  {
    number: '08',
    phase: 'HANDLING & LONG-TERM CARE',
    title: 'Complete Asset Handover & Ongoing Website Care',
    subtitle: 'You own everything. 30 days of free support plus continuous website handling.',
    timeline: 'Day 21 & Ongoing',
    description:
      'We do not disappear after launch. You receive 100% ownership of all source code, design assets, and hosting accounts. We provide a personalized video walkthrough showing how to manage incoming leads and update content. Every client receives 30 days of complimentary hyper-care support, with flexible monthly website handling packages available for ongoing security updates, content revisions, and performance monitoring.',
    activities: [
      '100% intellectual property & code ownership transfer (GitHub, domain, hosting)',
      'Personalized video walkthrough & admin training for client team',
      '30-Day Complimentary Post-Launch Hyper-Care (immediate bug fixes & small tweaks)',
      'Ongoing Website Handling Retainer: Regular dependency updates, cloud backups & uptime monitoring',
      'Monthly performance & lead conversion review reports',
    ],
    deliverable: 'Complete Asset Handover Package, Video Guide & 30-Day Support Guarantee',
    highlightTag: 'Handling & Maintenance',
  },
];

export const clientAssurances = [
  {
    title: '100% IP & Code Ownership',
    desc: 'You own every line of code, design asset, and repository. No vendor lock-in or proprietary traps.',
    badge: 'Full Ownership',
  },
  {
    title: '30-Day Free Hyper-Care',
    desc: 'Complimentary post-launch warranty covering any bug fixes, styling tweaks, and performance monitoring.',
    badge: 'Warranty Included',
  },
  {
    title: 'Milestone & Price Transparency',
    desc: 'Fixed-price contract with defined deliverables at each stage. No surprise bills or hidden fees.',
    badge: 'Fixed Pricing',
  },
  {
    title: 'Continuous Website Handling',
    desc: 'Optional monthly retainers for ongoing feature additions, security patching, and backup management.',
    badge: 'Ongoing Support',
  },
];
