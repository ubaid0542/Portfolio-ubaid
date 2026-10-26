'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { profile } from '@/data/profile';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EducationChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Draw timeline line
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength?.() || 400;
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1.5,
          },
        });
      }

      // Reveal cards
      cardRefs.current.forEach((ref, i) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, y: 40, rotation: i % 2 === 0 ? -2 : 2 },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: ref,
                start: 'top 80%',
                end: 'top 55%',
                scrub: 1,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineItems = [
    {
      year: '2019',
      title: 'B.Sc. Computer Science',
      subtitle: profile.education[1].institution,
      description: 'Started the journey into computer science fundamentals, programming, and software development.',
      highlight: false,
    },
    {
      year: '2023',
      title: 'B.Sc. Completed',
      subtitle: profile.education[1].institution,
      description: 'Completed undergraduate studies with a foundation in computer science, data structures, and web technologies.',
      highlight: true,
    },
    {
      year: '',
      title: 'Master of Computer Applications',
      subtitle: 'MCA — Completed',
      description: 'Advanced studies in application development, focusing on modern web technologies and software engineering.',
      highlight: true,
    },
    {
      year: '',
      title: 'Frontend & Creative Development',
      subtitle: 'Ongoing Learning',
      description: 'Deep dive into GSAP animations, Three.js, React, Next.js, and interactive web experiences.',
      highlight: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      data-chapter="2"
      className="relative overflow-hidden bg-[#FFFDF7] px-6 py-24 md:px-12 md:py-32"
    >
      {/* Paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <ChapterHeading number="02" title="Education & Journey" />

        <div ref={timelineRef} className="relative mt-16">
          {/* Timeline line SVG */}
          <svg
            className="absolute left-6 top-0 hidden h-full w-1 md:left-1/2 md:-ml-0.5 md:block"
            viewBox="0 0 2 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={lineRef}
              d="M1,0 L1,400"
              stroke="#D94A38"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-[#D94A38]/30 md:hidden" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`relative pl-16 md:pl-0 ${
                  i % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%]'
                }`}
              >
                {/* Dot on timeline */}
                <div
                  className={`absolute left-4 top-6 h-4 w-4 rounded-full border-2 md:left-1/2 md:-ml-2 ${
                    item.highlight
                      ? 'border-[#D94A38] bg-[#D94A38]'
                      : 'border-[#77746D] bg-[#FFFDF7]'
                  }`}
                />

                {/* Card */}
                <div className="relative rounded-sm bg-[#F3F0E8] p-5 shadow-[3px_4px_16px_rgba(0,0,0,0.05)] md:p-6">
                  {/* Tape */}
                  <div className="absolute -top-2 right-6">
                    <div className="h-4 w-10 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(2deg)' }} />
                  </div>

                  {item.year && (
                    <span className="font-mono text-xs font-bold tracking-wider text-[#D94A38]">
                      {item.year}
                    </span>
                  )}
                  <h3 className="mt-1 text-lg font-bold tracking-tight text-[#171715]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-[#77746D]">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#77746D]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
