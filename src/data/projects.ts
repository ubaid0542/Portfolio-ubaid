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
    category: 'Real Estate Website',
    description: 'A real estate website experience focused on brand identity, property presentation, and premium digital presence.',
    longDescription: 'A comprehensive real estate website built for WALL INFRA, a Varanasi-based real estate business. The project focused on creating a premium digital presence with responsive layouts, clear navigation, and property-focused visual hierarchy.',
    technologies: ['Next.js', 'Tailwind CSS', 'GSAP'],
    features: [
      'Responsive real estate layouts',
      'Brand-focused visual identity',
      'Property showcase sections',
      'Clear navigation architecture',
      'Performance-optimized delivery',
      'SEO-friendly structure',
    ],
    image: '/images/wall-infra-mockup.png',
    status: 'completed',
  },
  {
    id: 'revwriteai',
    slug: 'revwriteai',
    number: '02',
    title: 'RevwriteAI',
    subtitle: 'AI Review Generation',
    category: 'SaaS Product',
    description: 'An AI-powered review-generation product designed to help businesses create natural-sounding review drafts.',
    longDescription: 'RevwriteAI is a product concept designed to help businesses generate natural-sounding review drafts using AI. The platform allows users to generate reviews based on rating and business category.',
    technologies: ['React', 'Node.js', 'AI APIs'],
    features: [
      'AI-powered review generation',
      'Rating-based output control',
      'Business category customization',
      'Natural language generation',
      'User-friendly interface',
    ],
    image: '/images/adgenai-project.png',
    status: 'in-development',
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
