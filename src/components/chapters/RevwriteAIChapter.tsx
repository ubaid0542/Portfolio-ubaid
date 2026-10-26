'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { ArrowUpRight, Globe, Zap, QrCode, TrendingUp, Smartphone, CheckCircle2, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RevwriteAIChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const problemSolutionRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header & cards reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            end: 'top 65%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        problemSolutionRef.current?.children || [],
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          scrollTrigger: {
            trigger: problemSolutionRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );

      // Screenshot reveal with camera zoom
      gsap.fromTo(
        screenshotRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: screenshotRef.current,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1.5,
          },
        }
      );

      // Workflow cards
      gsap.fromTo(
        workflowRef.current?.children || [],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: workflowRef.current,
            start: 'top 82%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const workflowSteps = [
    {
      step: '01',
      title: 'Counter Standee QR',
      desc: 'Customer finishes meal or service and scans a personalized acrylic QR standee placed at checkout.',
      icon: QrCode,
    },
    {
      step: '02',
      title: 'Tap Star Rating',
      desc: 'Opens directly in browser with zero app download. Customer taps 1 to 5 stars based on their experience.',
      icon: Smartphone,
    },
    {
      step: '03',
      title: '10-Second AI Review',
      desc: 'AI generates a natural, highly contextual Google-ready review praising specific menu items and ambiance.',
      icon: Zap,
    },
    {
      step: '04',
      title: '1-Tap GMB Publish',
      desc: 'Review is auto-copied to clipboard; 1 tap redirects to Google Business Profile for instant review submission.',
      icon: TrendingUp,
    },
  ];

  const keyMetrics = [
    { label: 'Review Generation', value: '10 Sec ⚡', note: 'Near-instant generative drafting' },
    { label: 'Google Map Ranking', value: '3.8x More', note: 'Higher local 3-pack visibility' },
    { label: 'Frictionless UX', value: 'No App ✓', note: '100% web & mobile browser native' },
    { label: 'GMB Review Velocity', value: '+320%', note: 'Average monthly review growth' },
  ];

  return (
    <section
      ref={sectionRef}
      data-chapter="4"
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
        <ChapterHeading number="04" title="RevwriteAI — Reviews That Drive Growth" />

        {/* Project Header Dossier */}
        <div
          ref={headerRef}
          className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-sm bg-[#F3F0E8] p-6 shadow-[3px_5px_18px_rgba(23,23,21,0.05)] border border-[#171715]/10"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-[#171715] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#FFFDF7] font-bold">
                SAAS PRODUCT 02
              </span>
              <span className="rounded-sm bg-purple-100 text-purple-800 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider font-bold border border-purple-200">
                AI Full-Stack Architecture
              </span>
            </div>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
              REVWRITE.AI
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#77746D]">
              More Reviews, Zero Effort · AI Customer Review Acceleration Platform
            </p>
          </div>

          {/* Direct Live Product Link */}
          <a
            href="https://revwriteai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#7C3AED] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#6D28D9] transition-all hover:scale-105 shrink-0"
          >
            <Globe size={14} />
            Visit Live Platform: revwriteai.com
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* The Problem vs Solution Paper Cards */}
        <div ref={problemSolutionRef} className="grid gap-6 md:grid-cols-2">
          {/* The Problem */}
          <div className="relative rounded-sm bg-[#F3F0E8] p-6 md:p-8 shadow-[3px_4px_16px_rgba(23,23,21,0.04)] border border-[#171715]/10">
            <div className="absolute -top-3 left-8">
              <div className="h-5 w-16 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D94A38]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D94A38]">
                The Local Business Bottleneck
              </span>
            </div>
            <h4 className="mt-3 font-serif text-xl font-bold text-[#171715]">
              Happy Customers Leave Without Writing Reviews
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#171715]">
              Over 85% of satisfied customers intend to leave a 5-star Google review, but staring at a blank text box feels like homework. They abandon the review midway, costing cafes, retail stores, and clinics hundreds of potential local search leads.
            </p>
          </div>

          {/* The Solution */}
          <div className="relative rounded-sm bg-[#F3F0E8] p-6 md:p-8 shadow-[3px_4px_16px_rgba(23,23,21,0.04)] border border-[#171715]/10">
            <div className="absolute -top-3 right-8">
              <div className="h-5 w-16 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm" style={{ transform: 'rotate(2deg)' }} />
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#128C7E]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#128C7E]">
                The RevwriteAI Innovation
              </span>
            </div>
            <h4 className="mt-3 font-serif text-xl font-bold text-[#171715]">
              Instant AI Drafting in 10 Seconds
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#171715]">
              RevwriteAI bridges the gap: a customer simply scans a counter QR standee, selects their star rating, and AI generates an authentic, natural-sounding review tailored to that specific business. 1-tap copies the text and redirects straight to Google Maps.
            </p>
          </div>
        </div>

        {/* Real Product Screenshot in Browser Frame */}
        <div ref={screenshotRef} className="relative mx-auto mt-12 max-w-4xl shadow-[6px_12px_40px_rgba(23,23,21,0.12)]">
          {/* Masking tape on top center */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <div
              className="h-6 w-28 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm"
              style={{ transform: 'rotate(-1.5deg)' }}
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

              {/* Clickable Address Bar linking to revwriteai.com */}
              <a
                href="https://revwriteai.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Click to visit live platform: revwriteai.com"
                className="group flex-1 max-w-md rounded-full bg-[#FFFDF7] px-4 py-1.5 flex items-center justify-between border border-[#171715]/10 hover:border-[#7C3AED] transition-colors"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-[10px] text-purple-600 font-mono font-bold">🔒 https://</span>
                  <span className="font-mono text-xs font-bold text-[#171715] group-hover:text-[#7C3AED] transition-colors truncate">
                    revwriteai.com
                  </span>
                </div>
                <ArrowUpRight size={12} className="text-[#77746D] group-hover:text-[#7C3AED] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-purple-700 font-bold">
                Live AI Platform
              </span>
            </div>
          </div>

          {/* Screenshot Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-lg bg-[#0F0E17]" style={{ position: 'relative' }}>
            <Image
              src="/images/revwriteai-project.png"
              alt="RevwriteAI Live Product Interface showing AI-powered review generator and counter standee flow"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 950px"
              className="object-cover"
            />
          </div>

          <div className="rounded-b-sm bg-[#FFFDF7] p-3 text-center border-t border-[#171715]/10 flex flex-wrap items-center justify-between gap-2 px-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
              Fig. 02 — RevwriteAI Landing & Live Standee Interactive Preview
            </span>
            <a
              href="https://revwriteai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-[#7C3AED] font-bold hover:underline flex items-center gap-1"
            >
              Open revwriteai.com live ↗
            </a>
          </div>
        </div>

        {/* 4-Step How It Works Breakdown */}
        <div className="mt-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#7C3AED] font-bold">
            <Sparkles size={14} />
            <span>The Customer Experience Architecture</span>
          </div>

          <div ref={workflowRef} className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-sm bg-[#F3F0E8] p-5 shadow-[2px_3px_10px_rgba(23,23,21,0.03)] border border-[#171715]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#171715]/10 pb-2">
                      <span className="font-mono text-xs font-bold text-[#7C3AED]">
                        STEP {item.step}
                      </span>
                      <Icon size={16} className="text-[#171715]" />
                    </div>
                    <h5 className="mt-3 font-serif text-base font-bold text-[#171715]">
                      {item.title}
                    </h5>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#77746D]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Metrics Row */}
        <div ref={metricsRef} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-sm bg-[#171715] p-5 text-[#FFFDF7] shadow-md border border-[#FFFDF7]/10"
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#F7E84B]">
                {metric.label}
              </span>
              <div className="mt-1 text-2xl font-bold font-serif text-[#FFFDF7]">
                {metric.value}
              </div>
              <p className="mt-1 text-[11px] text-[#77746D]">
                {metric.note}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Architecture & Stack Specs */}
        <div className="mt-10 rounded-sm bg-[#FFFDF7] p-6 md:p-8 shadow-[3px_4px_16px_rgba(23,23,21,0.04)] border border-[#171715]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#171715]/10 pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C3AED] font-bold">
                ENGINEERING SPECIFICATIONS
              </span>
              <h4 className="mt-1 font-serif text-xl font-bold text-[#171715]">
                How RevwriteAI Was Engineered
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Next.js / React', 'Node.js', 'AI Prompt Pipeline', 'Tailwind CSS', 'Clipboard API'].map((t) => (
                <span key={t} className="rounded-sm bg-[#171715] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#FFFDF7]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs leading-relaxed text-[#171715]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={14} className="text-[#7C3AED] shrink-0 mt-0.5" />
              <span>
                <strong>Zero-App Web Architecture:</strong> Built 100% responsive for iOS Safari and Android Chrome, ensuring customers can complete the entire review flow in under 15 seconds without installing anything.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={14} className="text-[#7C3AED] shrink-0 mt-0.5" />
              <span>
                <strong>Contextual Prompt Engineering:</strong> AI pipeline dynamically balances customer rating (1-5 stars) with restaurant / cafe / retail category nuances to produce natural, non-repetitive prose.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#171715]/10 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs text-[#77746D]">
              Direct Platform Access: <a href="https://revwriteai.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[#7C3AED] underline">revwriteai.com</a>
            </span>
            <a
              href="https://revwriteai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm bg-[#7C3AED] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-[#6D28D9] transition-all hover:scale-105"
            >
              Launch RevwriteAI Platform
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
