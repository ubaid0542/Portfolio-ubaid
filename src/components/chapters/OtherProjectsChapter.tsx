'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { projects } from '@/data/projects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OtherProjectsChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const otherProjects = projects.filter((p) =>
    ['sundown-studio', 'obys-agency', 'sorting-visualizer'].includes(p.id)
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      projectRefs.current.forEach((ref, i) => {
        if (!ref) return;

        const direction = i % 2 === 0 ? -1 : 1;
        gsap.fromTo(
          ref,
          {
            opacity: 0,
            y: 50,
            x: direction * 30,
            rotation: direction * 3,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotation: direction * -0.5,
            scrollTrigger: {
              trigger: ref,
              start: 'top 82%',
              end: 'top 50%',
              scrub: 1.5,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'recreation':
        return { text: 'Recreation / Study', color: 'text-[#D94A38]' };
      case 'in-development':
        return { text: 'In Development', color: 'text-[#D94A38]' };
      default:
        return { text: 'Completed', color: 'text-[#77746D]' };
    }
  };

  return (
    <section
      ref={sectionRef}
      data-chapter="5"
      className="relative overflow-hidden bg-[#F3F0E8] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ChapterHeading number="05" title="Creative Projects" />

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#77746D]">
          A collection of creative frontend projects, interaction studies, and educational tools. 
          Recreated websites are clearly labeled as practice projects — not affiliated with original studios.
        </p>

        <div className="mt-16 space-y-16 md:space-y-24">
          {otherProjects.map((project, i) => {
            const status = getStatusLabel(project.status);
            return (
              <div
                key={project.id}
                ref={(el) => { projectRefs.current[i] = el; }}
                className="relative"
              >
                <div className={`grid gap-8 md:grid-cols-2 md:gap-12 items-center ${i % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Screenshot */}
                  <div className={`relative ${i % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-sm bg-[#FFFDF7] p-3 shadow-[4px_6px_20px_rgba(0,0,0,0.08)]">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#1a1a18]">
                        <Image
                          src={project.image}
                          alt={`${project.title} — ${project.description}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-widest text-[#77746D]">
                        Fig. 0{i + 3} — {project.title}
                      </p>
                    </div>
                    {/* Tape */}
                    <div className="absolute -top-2 right-8">
                      <div
                        className="h-5 w-12 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm"
                        style={{ transform: `rotate(${i % 2 === 0 ? 5 : -3}deg)` }}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className={`flex flex-col justify-center ${i % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    <div className="inline-block rounded-sm bg-[#171715] px-4 py-1.5 self-start shadow-sm">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFFDF7]">
                        Project {project.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#171715] md:text-3xl">
                      {project.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#77746D]">
                        {project.category}
                      </span>
                      <span className="text-[#77746D]">·</span>
                      <span className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${status.color}`}>
                        {status.text}
                      </span>
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-[#77746D]">
                      {project.longDescription}
                    </p>

                    {/* Features list */}
                    <ul className="mt-4 space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-[#171715]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D94A38]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-sm bg-[#171715]/5 border border-[#171715]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#171715]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
