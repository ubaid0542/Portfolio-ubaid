'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WallInfraChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const techRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Project label entrance
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 30, rotation: -3 },
        {
          opacity: 1, y: 0, rotation: 1,
          scrollTrigger: {
            trigger: labelRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );

      // Browser mockup reveal
      gsap.fromTo(
        mockupRef.current,
        { opacity: 0, y: 60, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1,
          scrollTrigger: {
            trigger: mockupRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1.5,
          },
        }
      );

      // Camera zoom into mockup
      gsap.to(mockupRef.current, {
        scale: 1.03,
        y: -15,
        scrollTrigger: {
          trigger: mockupRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Detail cards
      detailRefs.current.forEach((ref, i) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 },
            {
              opacity: 1, x: 0, y: 0,
              scrollTrigger: {
                trigger: ref,
                start: 'top 82%',
                end: 'top 60%',
                scrub: 1,
              },
            }
          );
        }
      });

      // Tech labels
      techRefs.current.forEach((ref, i) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, y: 10 },
            {
              opacity: 1, y: 0,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: ref,
                start: 'top 85%',
                end: 'top 70%',
                scrub: 1,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const designDecisions = [
    { title: 'Brand Identity', note: 'Premium visual language reflecting real estate authority' },
    { title: 'Property Showcase', note: 'Visual hierarchy prioritizing property imagery and details' },
    { title: 'Responsive Design', note: 'Seamless experience across desktop, tablet, and mobile' },
    { title: 'Performance', note: 'Optimized loading for fast property browsing experience' },
  ];

  const technologies = ['Next.js', 'Tailwind CSS', 'GSAP'];

  return (
    <section
      ref={sectionRef}
      data-chapter="3"
      className="relative overflow-hidden bg-[#F3F0E8] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ChapterHeading number="03" title="Wall Infra" />

        {/* Project label card */}
        <div
          ref={labelRef}
          className="mb-12 inline-block rounded-sm bg-[#171715] px-5 py-3 shadow-[3px_4px_12px_rgba(0,0,0,0.15)]"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#77746D]">
            Project 01
          </span>
          <p className="mt-1 text-lg font-bold tracking-tight text-[#FFFDF7]">
            WALL — SHAPING INDIA
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#77746D]">
            Real Estate Website · Varanasi
          </p>
        </div>

        {/* Browser mockup */}
        <div ref={mockupRef} className="relative mx-auto max-w-4xl">
          {/* Browser chrome */}
          <div className="rounded-t-lg bg-[#E8E2D4] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#D94A38]/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#F7E84B]/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#77746D]/30" />
              <div className="ml-4 flex-1 rounded-full bg-[#FFFDF7] px-4 py-1">
                <span className="font-mono text-[10px] text-[#77746D]">wallinfra.com</span>
              </div>
            </div>
          </div>
          {/* Browser content area */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-lg bg-[#1a1a18]">
            {/* Illustrative mockup content */}
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#77746D]">
                WALL INFRA
              </span>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#FFFDF7] md:text-4xl">
                SHAPING INDIA
              </h3>
              <p className="mt-3 max-w-md text-sm text-[#77746D]">
                Premium real estate development in Varanasi — building homes, creating communities, shaping futures.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="rounded-sm bg-[#D94A38] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                  View Properties
                </div>
                <div className="rounded-sm border border-[#77746D]/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#77746D]">
                  About Us
                </div>
              </div>
            </div>

            {/* Note: This is an illustrative mockup, not a screenshot of a deployed website */}
            <div className="absolute bottom-3 right-3">
              <span className="font-mono text-[8px] uppercase tracking-wider text-[#77746D]/50">
                Illustrative mockup
              </span>
            </div>
          </div>

          {/* Tape holding the mockup */}
          <div className="absolute -right-3 -top-1">
            <div className="h-5 w-12 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(15deg)' }} />
          </div>
        </div>

        {/* Design decisions */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {designDecisions.map((decision, i) => (
            <div
              key={decision.title}
              ref={(el) => { detailRefs.current[i] = el; }}
              className="relative rounded-sm bg-[#FFFDF7] p-5 shadow-[2px_3px_12px_rgba(0,0,0,0.04)]"
            >
              {/* Red marker dot */}
              <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-[#D94A38]" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#171715]">
                {decision.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-[#77746D]">
                {decision.note}
              </p>
            </div>
          ))}
        </div>

        {/* Technology labels */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
            Built with:
          </span>
          {technologies.map((tech, i) => (
            <span
              key={tech}
              ref={(el) => { techRefs.current[i] = el; }}
              className="rounded-sm bg-[#171715] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#FFFDF7]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
