'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { skillCategories } from '@/data/skills';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SkillsChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      categoryRefs.current.forEach((ref, i) => {
        if (!ref) return;

        const rotations = [-1.5, 1.2, -1, 1.5];
        gsap.fromTo(
          ref,
          {
            opacity: 0,
            y: 50,
            rotation: rotations[i % 4],
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );

        // Animate individual skill labels
        const labels = ref.querySelectorAll('.skill-label');
        labels.forEach((label) => {
          gsap.fromTo(
            label,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: label,
                start: 'top 90%',
                end: 'top 75%',
                scrub: 1,
              },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categoryStyles = [
    { bg: 'bg-[#FFFDF7]', accent: 'border-[#D94A38]' },
    { bg: 'bg-[#F3F0E8]', accent: 'border-[#F7E84B]' },
    { bg: 'bg-[#FFFDF7]', accent: 'border-[#171715]' },
    { bg: 'bg-[#F3F0E8]', accent: 'border-[#77746D]' },
  ];

  return (
    <section
      ref={sectionRef}
      data-chapter="7"
      className="relative overflow-hidden bg-[#F3F0E8] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ChapterHeading number="07" title="My Technical Toolkit" />

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#77746D]">
          Core technologies, libraries, and tools organized by layer. Each technology listed represents direct implementation experience.
        </p>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
          {skillCategories.map((category, i) => {
            const style = categoryStyles[i % categoryStyles.length];
            return (
              <div
                key={category.id}
                ref={(el) => { categoryRefs.current[i] = el; }}
                className={`relative rounded-sm ${style.bg} border-l-4 ${style.accent} p-6 shadow-[3px_4px_16px_rgba(0,0,0,0.05)]`}
              >
                {/* Paper grain */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Tape decoration */}
                <div className="absolute -top-2 right-4">
                  <div className="h-4 w-10 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: `rotate(${i % 2 === 0 ? -2 : 3}deg)` }} />
                </div>

                <h3 className="relative font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#171715]">
                  {category.label}
                </h3>

                <div className="relative mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-label rounded-sm bg-[#171715]/5 border border-[#171715]/10 px-3 py-1.5 font-mono text-[11px] tracking-wider text-[#171715] transition-colors hover:bg-[#171715]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about skills */}
        <div className="mt-8 flex items-start gap-2">
          <div className="mt-1 h-2 w-2 rounded-full bg-[#77746D]/40" />
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#77746D]">
            Technologies listed reflect areas of active learning and project experience. 
            No unsupported proficiency claims or arbitrary percentage bars are made.
          </p>
        </div>
      </div>
    </section>
  );
}
