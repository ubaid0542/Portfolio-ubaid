'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { profile } from '@/data/profile';
import { Mail, Linkedin, Github, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }

      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
              trigger: linksRef.current,
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    // Direct user to email client with pre-filled message for guaranteed delivery without a backend
    const subject = encodeURIComponent(`Project Inquiry from ${formState.name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${profile.social.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const contactLinks = [
    {
      label: 'Email',
      value: profile.social.email,
      href: `mailto:${profile.social.email}`,
      icon: Mail,
      note: 'Direct inquiries',
    },
    {
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: profile.social.linkedin,
      icon: Linkedin,
      note: 'Professional network',
    },
    {
      label: 'GitHub',
      value: 'Explore repositories',
      href: profile.social.github,
      icon: Github,
      note: 'Code & experiments',
    },
    {
      label: 'WhatsApp',
      value: 'Instant Chat',
      href: profile.social.whatsapp,
      icon: MessageSquare,
      note: 'Quick communication',
    },
  ];

  return (
    <section
      ref={sectionRef}
      data-chapter="9"
      className="relative overflow-hidden bg-[#F3F0E8] px-6 py-24 md:px-12 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <ChapterHeading number="09" title="Let's Work Together" />

        <div className="mt-4 max-w-2xl">
          <h3 className="font-serif text-3xl font-bold tracking-tight text-[#171715] md:text-4xl">
            Have an idea worth building?
          </h3>
          <p className="mt-3 text-base leading-relaxed text-[#77746D]">
            Let&apos;s talk about your website, product, or next development opportunity.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Inquiry form card */}
          <div
            ref={cardRef}
            className="relative lg:col-span-7 rounded-sm bg-[#FFFDF7] p-8 shadow-[4px_6px_24px_rgba(0,0,0,0.06)] border border-[#171715]/5"
          >
            {/* Paper grain */}
            <div
              className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Tape top */}
            <div className="absolute -top-2.5 left-12">
              <div className="h-5 w-16 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
            </div>

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#77746D]">
              Inquiry Draft
            </span>

            {submitted ? (
              <div className="mt-6 rounded-sm bg-[#F3F0E8] p-6 text-center">
                <CheckCircle2 size={32} className="mx-auto text-[#D94A38]" />
                <h4 className="mt-3 font-serif text-lg font-bold text-[#171715]">
                  Opening your email client...
                </h4>
                <p className="mt-2 text-xs text-[#77746D]">
                  If your mail application did not open automatically, write directly to{' '}
                  <a href={`mailto:${profile.social.email}`} className="font-semibold text-[#171715] underline">
                    {profile.social.email}
                  </a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 font-mono text-[10px] uppercase tracking-wider text-[#D94A38]"
                >
                  Write another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-[#171715]">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Maya Sharma"
                    className="mt-1 w-full rounded-sm border border-[#171715]/15 bg-transparent px-3 py-2 text-sm text-[#171715] placeholder-[#77746D]/50 focus:border-[#171715] focus:outline-none focus:ring-1 focus:ring-[#171715]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-[#171715]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="mt-1 w-full rounded-sm border border-[#171715]/15 bg-transparent px-3 py-2 text-sm text-[#171715] placeholder-[#77746D]/50 focus:border-[#171715] focus:outline-none focus:ring-1 focus:ring-[#171715]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-[#171715]">
                    Project Details & Scope
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your website or project goals..."
                    className="mt-1 w-full rounded-sm border border-[#171715]/15 bg-transparent px-3 py-2 text-sm text-[#171715] placeholder-[#77746D]/50 focus:border-[#171715] focus:outline-none focus:ring-1 focus:ring-[#171715]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm bg-[#171715] py-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#FFFDF7] transition-colors hover:bg-[#D94A38] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38]"
                >
                  Send Inquiry via Email
                </button>
                <p className="text-center font-mono text-[9px] uppercase tracking-wider text-[#77746D]">
                  Launches your default email client with your message drafted
                </p>
              </form>
            )}
          </div>

          {/* Direct channels & handwritten sign-off */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div ref={linksRef} className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#77746D]">
                Direct Channels
              </span>

              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center justify-between rounded-sm bg-[#FFFDF7] p-4 shadow-[2px_3px_12px_rgba(0,0,0,0.03)] border border-[#171715]/5 transition-all hover:-translate-y-0.5 hover:shadow-[3px_5px_16px_rgba(0,0,0,0.07)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#171715]/5 text-[#171715] group-hover:bg-[#D94A38] group-hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="font-mono text-xs font-bold text-[#171715]">{link.label}</p>
                        <p className="text-[11px] text-[#77746D]">{link.note}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-[#77746D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>

            {/* Restrained handwritten sign-off */}
            <div className="mt-12 rounded-sm bg-[#FFFDF7] p-6 shadow-[2px_3px_12px_rgba(0,0,0,0.03)] border border-[#171715]/5">
              <p className="text-sm text-[#77746D] leading-relaxed">
                Thank you for taking the time to read through my story and work. 
                Looking forward to creating something meaningful together.
              </p>
              <div className="mt-4 pt-3 border-t border-[#171715]/10 flex items-center justify-between">
                <span className="font-serif italic text-lg text-[#171715]" style={{ fontFamily: 'Georgia, serif' }}>
                  — Ubaid
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#77746D]">
                  Varanasi, UP, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
