export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-development' | 'recreation';
}

export const projects: Project[] = [
  {
    id: 'wall-infra',
    slug: 'wall-infra',
    number: '01',
    title: 'WALL INFRA',
    subtitle: 'SHAPING INDIA',
    category: 'Real Estate Website · Freelance Client',
    description: 'End-to-end engineered freelance website for WALL INFRA — SHAPING INDIA, a premier real estate development company in Varanasi.',
    longDescription: 'Completed freelance client project engineered end-to-end by Ubaid for WALL INFRA (SHAPING INDIA) in Varanasi. Delivered the entire web presence from concept and design to responsive Next.js frontend development, GSAP animations, performance optimization, and live deployment at wallinfra.com.',
    technologies: ['Next.js', 'Tailwind CSS', 'GSAP', 'TypeScript'],
    features: [
      'End-to-end freelance engineering from design to deployment',
      'Real estate brand identity & property visual hierarchy',
      'Interactive project showcases & amenity presentations',
      'Responsive architecture optimized across mobile and desktop',
      'Fast performance & Core Web Vitals optimization',
      'SEO-friendly structure for Varanasi real estate visibility',
    ],
    image: '/images/wall-infra-mockup.png',
    liveUrl: 'https://wallinfra.com',
    status: 'completed',
  },
  {
    id: 'revwriteai',
    slug: 'revwriteai',
    number: '02',
    title: 'RevwriteAI',
    subtitle: 'Reviews That Drive Growth · AI SaaS',
    category: 'AI SaaS Platform · Full-Stack Engineering',
    description: 'AI-powered review generation platform helping local businesses collect 3.8x more Google reviews through counter QR standees and zero-effort AI drafting.',
    longDescription: 'RevwriteAI (revwriteai.com) is an AI SaaS product engineered to eliminate the local business review bottleneck. Customers scan a physical counter QR standee at checkout, select their star rating, and generative AI immediately crafts a natural, contextual Google review in under 10 seconds. With 1-tap auto-copy and direct redirection to the Google Business Profile, businesses experience +320% review velocity without requiring customer app downloads.',
    technologies: ['React', 'Next.js', 'Node.js', 'AI Prompt Pipeline', 'Tailwind CSS', 'Web Clipboard API'],
    features: [
      'Physical counter standee QR generation for cafes, clinics & retail',
      'Instant 10-second AI review drafting based on selected rating',
      '1-tap auto-copy & seamless Google Business Profile redirect',
      'No customer app download required (100% browser-based)',
      'Multi-location & shop profile switching architecture',
      'Accelerates local Google Map 3-pack rankings by 3.8x',
    ],
    image: '/images/revwriteai-project.png',
    liveUrl: 'https://revwriteai.com',
    status: 'completed',
  },
  {
    id: 'sundown-studio',
    slug: 'sundown-studio',
    number: '03',
    title: 'Sundown Studio',
    subtitle: 'Motion-Led Experience',
    category: 'Creative Frontend Project',
    description: 'A motion-led website project exploring immersive scrolling, bold typography, and interactive layouts.',
    longDescription: 'A creative frontend project exploring immersive scrolling experiences, bold typography, and interactive layouts. Built as a practice project to study motion design patterns and scroll-driven animation techniques.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll', 'Swiper.js'],
    features: [
      'Immersive scroll animations',
      'Bold typographic layouts',
      'Interactive page transitions',
      'Smooth locomotive scrolling',
      'Responsive image galleries',
    ],
    image: '/images/sundown-project.png',
    status: 'recreation',
  },
  {
    id: 'obys-agency',
    slug: 'obys-agency',
    number: '04',
    title: 'Obys Agency',
    subtitle: 'Typography & Animation',
    category: 'Creative Frontend Project',
    description: 'A website recreation exploring expressive typography, visual transitions, and animation.',
    longDescription: 'A website recreation and interaction study exploring expressive typography, visual transitions, and creative animation techniques. Built as a learning project — not affiliated with the original studio.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Shery.js'],
    features: [
      'Expressive typography system',
      'Creative page transitions',
      'Interactive hover effects',
      'Scroll-driven animations',
      'Visual storytelling elements',
    ],
    image: '/images/obys-project.png',
    status: 'recreation',
  },
  {
    id: 'sorting-visualizer',
    slug: 'sorting-visualizer',
    number: '05',
    title: 'Sorting Visualizer',
    subtitle: 'Algorithm Education',
    category: 'Interactive Application',
    description: 'An algorithm visualization project representing sorting operations through animated bars and sound effects.',
    longDescription: 'An interactive JavaScript application that visualizes sorting algorithms through animated bars and optional sound effects. Built for educational purposes to help understand how different sorting algorithms work step by step.',
    technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
    features: [
      'Multiple sorting algorithms',
      'Real-time visual feedback',
      'Sound effect feedback',
      'Speed control',
      'Array size customization',
      'Step-by-step visualization',
    ],
    image: '/images/sorting-project.png',
    status: 'completed',
  },
];
