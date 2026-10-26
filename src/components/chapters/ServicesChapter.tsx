'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { services } from '@/data/services';
import { profile } from '@/data/profile';
import { ArrowUpRight, MessageSquare, Mail, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((ref) => {
        if (!ref) return;
        gsap.fromTo(
          ref,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'top 65%',
              scrub: 1,
            },
          }
        );
      });

      if (ctaBannerRef.current) {
        gsap.fromTo(
          ctaBannerRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            scrollTrigger: {
              trigger: ctaBannerRef.current,
              start: 'top 85%',
              end: 'top 65%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('[data-chapter="9"]');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(profile.social.whatsapp, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      data-chapter="8"
      className="relative overflow-hidden bg-[#FFFDF7] px-4 py-24 md:px-12 md:py-32"
    >
      {/* Background paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <ChapterHeading number="08" title="Freelance Services & Client Solutions" />

        {/* Section Lead & Availability Notice */}
        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171715]/10 pb-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D94A38] font-bold">
              ● Primary Specialization · Accepting Projects
            </span>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#171715]">
              Let&apos;s turn your next idea into something real.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#77746D]">
              I help business owners, real estate developers, and marketing agencies build distinctive web properties that load instantaneously, feel alive through subtle motion, and drive high-intent conversions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 rounded-sm bg-[#128C7E] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#075e54] transition-all hover:scale-105"
            >
              <MessageSquare size={14} />
              Quick WhatsApp
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-sm bg-[#D94A38] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#b83827] transition-all hover:scale-105"
            >
              <Mail size={14} />
              Commission a Project
            </button>
          </div>
        </div>

        {/* Value Props Row (Why Work with Ubaid) */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.freelanceFocus.valueProps.map((vp, idx) => (
            <div
              key={idx}
              className="rounded-sm bg-[#F3F0E8] p-4 shadow-[2px_3px_10px_rgba(23,23,21,0.03)] border border-[#171715]/5"
            >
              <div className="flex items-center gap-2 text-[#D94A38] font-mono text-xs font-bold">
                {idx === 0 && <Sparkles size={14} />}
                {idx === 1 && <Zap size={14} />}
                {idx === 2 && <ShieldCheck size={14} />}
                {idx === 3 && <CheckCircle2 size={14} />}
                <span>0{idx + 1}</span>
              </div>
              <h4 className="mt-2 text-sm font-bold text-[#171715]">
                {vp.title}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[#77746D]">
                {vp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="relative flex flex-col justify-between rounded-sm bg-[#F3F0E8] p-6 shadow-[3px_4px_16px_rgba(23,23,21,0.04)] border border-[#171715]/10 hover:shadow-[5px_8px_24px_rgba(23,23,21,0.08)] transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#171715]/10 pb-3">
                  <span className="font-mono text-xs font-bold text-[#D94A38]">
                    SERVICE {service.number}
                  </span>
                  <span className="rounded-sm bg-[#171715] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#FFFDF7] font-semibold">
                    {service.badge}
                  </span>
                </div>

                <h4 className="mt-4 font-serif text-lg md:text-xl font-bold tracking-tight text-[#171715]">
                  {service.title}
                </h4>

                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#77746D]">
                  Best For: {service.targetClient}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#171715]">
                  {service.description}
                </p>

                {/* Key Deliverables list */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-[#171715]/10">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#77746D] font-bold">
                    Included in Delivery:
                  </span>
                  {service.keyDeliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#77746D]">
                      <CheckCircle2 size={12} className="text-[#D94A38] mt-0.5 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#171715]/10 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#77746D] italic">
                  {service.proofProject}
                </span>
                <button
                  onClick={scrollToContact}
                  className="font-mono text-[10px] uppercase tracking-wider text-[#D94A38] font-bold hover:underline flex items-center gap-1"
                >
                  Inquire
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Freelance Engagement Banner */}
        <div
          ref={ctaBannerRef}
          className="relative mt-16 rounded-sm bg-[#171715] p-8 md:p-12 text-[#FFFDF7] shadow-xl overflow-hidden"
        >
          {/* Subtle paper grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-sm bg-[#FFFDF7]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#F7E84B]">
                <Sparkles size={12} />
                Direct Partnership · Varanasi & Remote Global
              </div>
              <h4 className="mt-3 font-serif text-2xl md:text-3xl font-bold tracking-tight">
                Have a client project, real estate website, or contract role?
              </h4>
              <p className="mt-2 text-sm text-[#77746D] max-w-2xl leading-relaxed">
                Whether you need a full turnkey web delivery from Figma to Next.js or a specialized motion developer to choreograph GSAP animations for your agency, I am ready to collaborate.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 rounded-sm bg-[#128C7E] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-105"
              >
                <MessageSquare size={14} />
                Chat on WhatsApp
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 rounded-sm bg-[#D94A38] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-105"
              >
                Draft Project Scope
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
