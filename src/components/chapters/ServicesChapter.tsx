'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((ref) => {
        if (!ref) return;

        gsap.fromTo(
          ref,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'top 65%',
              scrub: 1,
            },
          }
        );
      });

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 85%',
              end: 'top 70%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const contactElem = document.querySelector('[data-chapter="9"]');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      data-chapter="8"
      className="relative overflow-hidden bg-[#FFFDF7] px-6 py-24 md:px-12 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <ChapterHeading number="08" title="What I Can Build For Clients" />

        <div className="mt-4 max-w-2xl">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-[#171715] md:text-3xl">
            Let&apos;s turn your next idea into something real.
          </h3>
          <p className="mt-3 text-base leading-relaxed text-[#77746D]">
            Available for freelance development projects, agency collaborations, and engineering roles.
            Clear scopes, clean architecture, and communicative delivery.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="relative flex flex-col justify-between rounded-sm bg-[#F3F0E8] p-6 shadow-[3px_4px_16px_rgba(0,0,0,0.04)] border border-[#171715]/5 hover:shadow-[4px_6px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
                    0{i + 1}
                  </span>
                  <CheckCircle2 size={16} className="text-[#D94A38]/70" />
                </div>
                <h4 className="mt-3 text-base font-bold tracking-tight text-[#171715]">
                  {service.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#77746D]">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#171715]/5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#D94A38] font-semibold">
                  Tailored Delivery
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Discuss a project banner */}
        <div
          ref={ctaRef}
          className="relative mt-16 rounded-sm bg-[#171715] p-8 md:p-12 text-[#FFFDF7] shadow-xl overflow-hidden"
        >
          {/* Subtle paper grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F7E84B]">
                Direct Partnership
              </span>
              <h4 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                Looking for a developer for your next release?
              </h4>
              <p className="mt-2 text-sm text-[#77746D] max-w-xl">
                Whether you need a full real estate portal, an animated marketing site, or full-stack application engineering, I am ready to collaborate.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 rounded-sm bg-[#D94A38] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D94A38]"
            >
              Discuss a Project
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
