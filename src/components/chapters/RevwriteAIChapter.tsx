'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ChapterHeading from '@/components/motion/ChapterHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RevwriteAIChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Problem statement
      gsap.fromTo(
        problemRef.current,
        { opacity: 0, y: 40, rotation: 2 },
        {
          opacity: 1, y: 0, rotation: -1,
          scrollTrigger: {
            trigger: problemRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );

      // Solution
      gsap.fromTo(
        solutionRef.current,
        { opacity: 0, y: 40, x: 20 },
        {
          opacity: 1, y: 0, x: 0,
          scrollTrigger: {
            trigger: solutionRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );

      // Screenshot
      gsap.fromTo(
        screenshotRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          scrollTrigger: {
            trigger: screenshotRef.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 1.5,
          },
        }
      );

      // Architecture
      gsap.fromTo(
        archRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: archRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-chapter="4"
      className="relative overflow-hidden bg-[#FFFDF7] px-6 py-24 md:px-12 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <ChapterHeading number="04" title="RevwriteAI" />

        {/* Project label */}
        <div className="mb-12 inline-block rounded-sm bg-[#171715] px-5 py-3 shadow-[3px_4px_12px_rgba(0,0,0,0.15)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#77746D]">
            Project 02
          </span>
          <p className="mt-1 text-lg font-bold tracking-tight text-[#FFFDF7]">
            RevwriteAI
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#F7E84B]">
            In Development · SaaS Product
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* The Problem */}
          <div
            ref={problemRef}
            className="relative rounded-sm bg-[#F3F0E8] p-6 shadow-[3px_4px_16px_rgba(0,0,0,0.05)]"
          >
            <div className="absolute -top-2 left-8">
              <div className="h-5 w-14 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
            </div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D94A38]">
              The Problem
            </span>
            <p className="mt-3 text-base leading-relaxed text-[#171715]">
              Businesses need authentic-sounding reviews but creating them manually is time-consuming 
              and often results in repetitive, unnatural language.
            </p>
          </div>

          {/* The Solution */}
          <div
            ref={solutionRef}
            className="relative rounded-sm bg-[#F3F0E8] p-6 shadow-[3px_4px_16px_rgba(0,0,0,0.05)]"
          >
            <div className="absolute -top-2 right-8">
              <div className="h-5 w-14 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(3deg)' }} />
            </div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D94A38]">
              The Solution
            </span>
            <p className="mt-3 text-base leading-relaxed text-[#171715]">
              An AI-powered tool that generates natural-sounding review drafts based on rating, 
              business category, and context — helping businesses save time while maintaining authenticity.
            </p>
          </div>
        </div>

        {/* Screenshot */}
        <div ref={screenshotRef} className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-sm bg-[#F3F0E8] p-3 shadow-[4px_6px_20px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#1a1a18]" style={{ position: 'relative' }}>
              <Image
                src="/images/adgenai-project.png"
                alt="RevwriteAI product interface showing AI-powered review generation"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-widest text-[#77746D]">
              Fig. 02 — Product Interface
            </p>
          </div>
          {/* Tape */}
          <div className="absolute -left-2 top-6">
            <div className="h-5 w-12 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(-10deg)' }} />
          </div>
        </div>

        {/* Architecture */}
        <div ref={archRef} className="mt-12">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#77746D]">
            Technology Architecture
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {['React', 'Node.js', 'AI APIs'].map((tech) => (
              <span
                key={tech}
                className="rounded-sm bg-[#171715] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#FFFDF7]"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#77746D]">
            This product is currently in development. The architecture and technology choices 
            may evolve as the project matures. No claims of live users or production deployment are made.
          </p>
        </div>
      </div>
    </section>
  );
}
