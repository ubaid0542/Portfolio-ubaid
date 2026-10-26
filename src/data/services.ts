export interface Service {
  id: string;
  number: string;
  title: string;
  badge: string;
  targetClient: string;
  description: string;
  keyDeliverables: string[];
  proofProject: string;
}

export const services: Service[] = [
  {
    id: 'real-estate',
    number: '01',
    title: 'Real Estate & Infrastructure Portals',
    badge: 'CORE NICHE',
    targetClient: 'Builders, Developers, Realtors & Property Agencies',
    description: 'High-end property showcase websites engineered to command authority, display floorplans and project locations, and convert visitors into qualified property inquiries.',
    keyDeliverables: [
      'Interactive project showcases & amenity tours',
      'Fast-loading visual galleries & floorplans',
      'Direct WhatsApp inquiry integration',
      'Local Varanasi & regional SEO optimization',
    ],
    proofProject: 'Case Study: WALL INFRA',
  },
  {
    id: 'creative',
    number: '02',
    title: 'Creative Animated Brand Experiences',
    badge: 'SIGNATURE CRAFT',
    targetClient: 'Design Studios, Marketing Agencies, Lifestyle Brands',
    description: 'Immersive, editorial-grade websites featuring scroll-choreographed GSAP animations, tactile paper textures, micro-interactions, and bold typography that make brands unforgettable.',
    keyDeliverables: [
      'Custom GSAP / ScrollTrigger choreographies',
      'Tactile paper, halftone & editorial aesthetics',
      'Smooth 60fps mobile-responsive animation',
      'Awwwards / FWA inspired interactive flair',
    ],
    proofProject: 'Case Study: Sundown Studio & Obys Agency Recreations',
  },
  {
    id: 'landing',
    number: '03',
    title: 'High-Conversion Product Landing Pages',
    badge: 'HIGH ROI',
    targetClient: 'SaaS Founders, Course Creators, Campaign Launches',
    description: 'Single-page conversion engines designed around persuasive copywriting hierarchy, rapid load speeds, and intuitive call-to-action paths.',
    keyDeliverables: [
      'Sticky navigation & clear conversion funnel',
      'Interactive pricing tables & FAQ accordions',
      'Sub-second first contentful paint (FCP)',
      'A/B test ready component architecture',
    ],
    proofProject: 'Case Study: RevwriteAI SaaS Concept',
  },
  {
    id: 'fullstack',
    number: '04',
    title: 'Full-Stack Web MVPs & Custom Apps',
    badge: 'END-TO-END',
    targetClient: 'Tech Startups, Small Businesses, Solo Founders',
    description: 'Complete web application engineering with Next.js / React frontends, Node.js / Express or PHP backends, database modeling (PostgreSQL / MongoDB), and secure API endpoints.',
    keyDeliverables: [
      'Scalable Next.js App Router architecture',
      'REST API design & third-party integrations',
      'Authentication & protected user dashboards',
      'Automated deployment on Vercel or cloud VPS',
    ],
    proofProject: 'Case Study: RevwriteAI & Sorting Visualizer',
  },
  {
    id: 'redesign',
    number: '05',
    title: 'Website Redesigns & Modernization',
    badge: 'TRANSFORMATION',
    targetClient: 'Established Businesses with Outdated Web Presence',
    description: 'Taking slow, cluttered legacy websites and reimagining them with modern design principles, contemporary layouts, mobile optimization, and clean maintainable code.',
    keyDeliverables: [
      'Complete visual facelift & modern typography',
      'Mobile-first responsive overhaul',
      'Preservation of existing SEO rankings & URLs',
      'Content migration & streamlined information architecture',
    ],
    proofProject: 'Complete Redesign Architecture',
  },
  {
    id: 'performance',
    number: '06',
    title: 'Speed, Core Web Vitals & Technical SEO',
    badge: 'OPTIMIZATION',
    targetClient: 'Any Website Suffering from Slow Speeds or Poor Rank',
    description: 'Deep audit and remediation of layout shifts, image compression, script bloat, and metadata tags to achieve 90+ Lighthouse scores and rank higher on Google search.',
    keyDeliverables: [
      'Next.js image & font optimization pipeline',
      'Cumulative Layout Shift (CLS) reduction',
      'JSON-LD Schema markup & Open Graph tags',
      'Automated XML sitemaps & robots.txt configuration',
    ],
    proofProject: 'Built directly into every client delivery',
  },
];
