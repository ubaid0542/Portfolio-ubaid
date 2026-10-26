export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    reveal: 1.2,
  },
  ease: {
    smooth: 'power2.out',
    bounce: 'power3.out',
    snap: 'power4.out',
    elastic: 'elastic.out(1, 0.5)',
    draw: 'power2.inOut',
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
  },
  scroll: {
    scrub: 1,
    smoothScrub: 2,
  },
} as const;

export const CHAPTER_LABELS = [
  { number: '00', title: 'THE OPENING' },
  { number: '01', title: 'MEET UBAID' },
  { number: '02', title: 'EDUCATION & JOURNEY' },
  { number: '03', title: 'WALL INFRA' },
  { number: '04', title: 'REVWRITEAI' },
  { number: '05', title: 'CREATIVE PROJECTS' },
  { number: '06', title: 'HOW I BUILD' },
  { number: '07', title: 'TOOLKIT' },
  { number: '08', title: 'SERVICES' },
  { number: '09', title: 'CONNECT' },
] as const;
