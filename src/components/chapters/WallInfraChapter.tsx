'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { ArrowUpRight, CheckCircle2, Globe, Sparkles, Building2 } from 'lucide-react';

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
        { opacity: 0, y: 30, rotation: -2 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
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
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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
        scale: 1.02,
        y: -10,
        scrollTrigger: {
          trigger: mockupRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Detail cards
      detailRefs.current.forEach((ref, i) => {
        if (!ref) return;
        gsap.fromTo(
          ref,
          { opacity: 0, x: i % 2 === 0 ? -20 : 20, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'top 65%',
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const endToEndDeliverables = [
    {
      title: 'Real Estate Brand Identity',
      note: 'Engineered a commanding visual hierarchy reflecting the scale and authority of Wall Infra in Varanasi.',
    },
    {
      title: 'Property Showcase & Layouts',
      note: 'Custom responsive sections highlighting ongoing residential, commercial, and infrastructure developments.',
    },
    {
      title: 'Frontend & Motion Engineering',
      note: 'Built with Next.js, Tailwind CSS, and GSAP for buttery smooth animations and rapid page transitions.',
    },
    {
      title: 'End-to-End Freelance Delivery',
      note: 'Handled full lifecycle from client brief, architecture, coding, testing, to live production launch at wallinfra.com.',
    },
  ];

  const technologies = ['Next.js', 'Tailwind CSS', 'GSAP', 'TypeScript', 'SEO'];

  return (
    <section
      ref={sectionRef}
      data-chapter="3"
      className="relative overflow-hidden bg-[#F3F0E8] px-4 py-24 md:px-12 md:py-32"
    >
      {/* Background paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <ChapterHeading number="03" title="Wall Infra — Shaping India" />

        {/* Project Dossier Header Badge */}
        <div
          ref={labelRef}
          className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-sm bg-[#FFFDF7] p-6 shadow-[3px_5px_18px_rgba(23,23,21,0.06)] border border-[#171715]/10"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-[#171715] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#FFFDF7] font-bold">
                FLAGSHIP FREELANCE CLIENT
              </span>
              <span className="rounded-sm bg-[#D94A38]/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#D94A38] font-bold">
                End-to-End Developed
              </span>
            </div>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
              WALL INFRA — SHAPING INDIA
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#77746D]">
              Real Estate & Infrastructure Development · Varanasi, India
            </p>
          </div>

          {/* Direct Live Website Action Button */}
          <a
            href="https://wallinfra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#D94A38] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b83827] transition-all hover:scale-105 shrink-0"
          >
            <Globe size={14} />
            Visit Live Website: wallinfra.com
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Interactive Browser Window Mockup with Live Clickable URL */}
        <div ref={mockupRef} className="relative mx-auto mt-8 max-w-4xl shadow-[6px_12px_40px_rgba(23,23,21,0.12)]">
          {/* Masking tape on top right */}
          <div className="absolute -top-3.5 right-12 z-20">
            <div
              className="h-6 w-24 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm"
              style={{ transform: 'rotate(2deg)' }}
            />
          </div>

          {/* Browser Chrome Header */}
          <div className="rounded-t-lg bg-[#E8E2D4] px-4 py-3 border-b border-[#171715]/10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#D94A38]/70" />
                <div className="h-3 w-3 rounded-full bg-[#F7E84B]/80" />
                <div className="h-3 w-3 rounded-full bg-[#77746D]/40" />
              </div>

              {/* Clickable Address Bar */}
              <a
                href="https://wallinfra.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Click to visit live website: wallinfra.com"
                className="group flex-1 max-w-md rounded-full bg-[#FFFDF7] px-4 py-1.5 flex items-center justify-between border border-[#171715]/10 hover:border-[#D94A38] transition-colors"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-[10px] text-emerald-600 font-mono font-bold">🔒 https://</span>
                  <span className="font-mono text-xs font-bold text-[#171715] group-hover:text-[#D94A38] transition-colors truncate">
                    wallinfra.com
                  </span>
                </div>
                <ArrowUpRight size={12} className="text-[#77746D] group-hover:text-[#D94A38] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-[#77746D]">
                Live Production
              </span>
            </div>
          </div>

          {/* Browser Content Canvas with Real Wall Infra Screenshot */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-lg bg-[#141412] shadow-inner" style={{ position: 'relative' }}>
            <Image
              src="/images/wallinfra-project.png"
              alt="WALL INFRA — SHAPING INDIA Live Real Estate Website Interface"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 950px"
              className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Hover & Mobile overlay action button */}
            <a
              href="https://wallinfra.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Wall Infra live website"
              className="group absolute inset-0 z-10 flex items-end justify-end p-4 sm:p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-95 sm:opacity-0 hover:opacity-100 transition-opacity"
            >
              <span className="inline-flex items-center gap-2 rounded-sm bg-[#D94A38] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#b83827] transition-all">
                <Globe size={13} />
                Visit Live Site: wallinfra.com
                <ArrowUpRight size={13} />
              </span>
            </a>
          </div>

          {/* Screenshot Caption Bar */}
          <div className="rounded-b-sm bg-[#FFFDF7] p-3.5 border-t border-[#171715]/10 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#77746D]">
                Fig. 01 — WALL INFRA: Shaping India Real Estate Platform (Client: Varanasi, UP)
              </span>
            </div>
            <a
              href="https://wallinfra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-[#D94A38] font-bold hover:underline flex items-center gap-1"
            >
              Launch wallinfra.com ↗
            </a>
          </div>
        </div>

        {/* End-to-End Engineering Decisions */}
        <div className="mt-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D94A38] font-bold">
            <Sparkles size={14} />
            <span>End-to-End Freelance Scope Delivered</span>
          </div>

          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {endToEndDeliverables.map((item, i) => (
              <div
                key={item.title}
                ref={(el) => { detailRefs.current[i] = el; }}
                className="relative rounded-sm bg-[#FFFDF7] p-6 shadow-[2px_3px_12px_rgba(23,23,21,0.04)] border border-[#171715]/10"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D94A38]">
                  <CheckCircle2 size={14} />
                  <span>PHASE 0{i + 1}</span>
                </div>
                <h4 className="mt-2 font-serif text-lg font-bold text-[#171715]">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#77746D]">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Labels & Live Link Confirmation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-sm bg-[#FFFDF7] p-5 border border-[#171715]/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77746D] font-bold">
              Tech Stack:
            </span>
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm bg-[#171715] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#FFFDF7]"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://wallinfra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-[#D94A38] font-bold hover:underline flex items-center gap-1"
          >
            Launch wallinfra.com in new tab →
          </a>
        </div>
      </div>
    </section>
  );
}
