export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'animation',
    label: 'Animation & Interaction',
    skills: ['GSAP', 'ScrollTrigger', 'Swiper.js', 'Shery.js', 'CSS Animations'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP/Laravel'],
  },
  {
    id: 'tools',
    label: 'Databases & Tools',
    skills: ['PostgreSQL', 'MongoDB', 'REST APIs', 'Git', 'GitHub', 'Vercel'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Identify business objectives, users, and requirements.',
  },
  {
    number: '02',
    title: 'Structure',
    description: 'Organize content, navigation, page structure, and user flows.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Establish typography, visual direction, responsive layouts, and interaction patterns.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build reusable components and implement functionality.',
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Test responsiveness, accessibility, SEO, and performance.',
  },
];
