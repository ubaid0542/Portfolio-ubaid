export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'real-estate',
    title: 'Real Estate Websites',
    description: 'Property-focused websites with strong brand presentation and clear property showcases.',
  },
  {
    id: 'business',
    title: 'Business & Corporate Websites',
    description: 'Professional web presence for businesses with clear messaging and conversion paths.',
  },
  {
    id: 'landing',
    title: 'Landing Pages',
    description: 'Conversion-focused single-page experiences for campaigns and product launches.',
  },
  {
    id: 'creative',
    title: 'Creative Animated Websites',
    description: 'Motion-rich websites with scroll animations, interactive transitions, and visual storytelling.',
  },
  {
    id: 'frontend',
    title: 'Responsive Frontend Development',
    description: 'Pixel-perfect responsive implementations across all device sizes and browsers.',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Web Applications',
    description: 'End-to-end web application development with modern frontend and backend technologies.',
  },
  {
    id: 'redesign',
    title: 'Website Redesigns',
    description: 'Transform existing websites with modern design, better performance, and improved user experience.',
  },
  {
    id: 'performance',
    title: 'Performance & Technical SEO',
    description: 'Speed optimization, Core Web Vitals improvement, and search engine visibility.',
  },
];
