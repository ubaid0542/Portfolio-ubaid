'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { profile } from '@/data/profile';
import { Mail, Linkedin, Github, MessageSquare, ArrowUpRight, CheckCircle2, Sparkles, Phone, Instagram, Loader2, Send, Check } from 'lucide-react';

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
    projectType: 'Real Estate Website',
    budget: '$500 — $2,000 / ₹40k — ₹1.5L',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    setSubmittedEmail(formState.email);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
      } else {
        // Fallback: Opens mail app if direct SMTP is not yet configured with an App Password
        const subject = encodeURIComponent(`[Freelance Inquiry] ${formState.projectType} from ${formState.name || 'Client'}`);
        const body = encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.projectType}\nEstimated Scope/Budget: ${formState.budget}\n\nProject Details:\n${formState.message}`
        );
        window.location.href = `mailto:${profile.social.email}?subject=${subject}&body=${body}`;
        setSubmitStatus('fallback');
      }
    } catch (err) {
      console.warn('API error, triggering email client fallback:', err);
      const subject = encodeURIComponent(`[Freelance Inquiry] ${formState.projectType} from ${formState.name || 'Client'}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.projectType}\nEstimated Scope/Budget: ${formState.budget}\n\nProject Details:\n${formState.message}`
      );
      window.location.href = `mailto:${profile.social.email}?subject=${subject}&body=${body}`;
      setSubmitStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open(profile.social.whatsapp, '_blank');
  };

  const handleLinkClick = (label: string) => {
    if (label === 'LinkedIn') {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(
          'Hi Ubaid, I saw your portfolio and would like to discuss a full-stack web development project with you.'
        );
        setCopiedNotice('Personalized message copied to clipboard! You can paste it directly into LinkedIn.');
        setTimeout(() => setCopiedNotice(null), 4500);
      }
    }
  };

  const contactLinks = [
    {
      label: 'WhatsApp Quick Chat',
      value: '+91 8090507639',
      href: profile.social.whatsapp,
      icon: MessageSquare,
      color: 'text-[#128C7E]',
      badge: 'Auto Message',
      note: 'Pre-filled inquiry: "Hi Ubaid, I saw your portfolio..."',
    },
    {
      label: 'Direct Email',
      value: profile.social.email,
      href: profile.social.prefilledEmail,
      icon: Mail,
      color: 'text-[#D94A38]',
      badge: 'Auto Draft',
      note: 'Pre-filled project specification & inquiry template',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/mdubaid8090',
      href: profile.social.linkedin,
      icon: Linkedin,
      color: 'text-[#0A66C2]',
      badge: 'Auto Copy',
      note: 'Copies personalized intro message & opens LinkedIn profile',
    },
    {
      label: 'Direct Phone / Call',
      value: '+91 8090507639',
      href: `tel:${profile.social.mobile}`,
      icon: Phone,
      color: 'text-emerald-700',
      badge: 'Direct',
      note: 'Direct voice call for urgent project inquiries',
    },
    {
      label: 'GitHub',
      value: 'github.com/ubaid0542',
      href: profile.social.github,
      icon: Github,
      color: 'text-[#171715]',
      badge: 'Code',
      note: 'Open source repositories, stars & experiments',
    },
    {
      label: 'Instagram',
      value: `@${profile.social.instagramUsername}`,
      href: profile.social.instagram,
      icon: Instagram,
      color: 'text-[#E4405F]',
      badge: 'Social',
      note: 'Personal & creative developer profile',
    },
  ];

  return (
    <section
      ref={sectionRef}
      data-chapter="9"
      className="relative overflow-hidden bg-[#F3F0E8] px-4 py-24 md:px-12 md:py-32"
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
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D94A38] font-bold">
            Freelance & Career Inquiries
          </span>
          <h3 className="mt-1 font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#171715]">
            Have an idea worth building?
          </h3>
          <p className="mt-2 text-base leading-relaxed text-[#77746D]">
            Whether you are looking to commission a real estate website, create a memorable brand presence, or recruit a frontend / full-stack engineer, let&apos;s connect.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Inquiry Commission Sheet Card */}
          <div
            ref={cardRef}
            className="relative lg:col-span-7 rounded-sm bg-[#FFFDF7] p-6 md:p-10 shadow-[6px_10px_35px_rgba(23,23,21,0.07)] border border-[#171715]/10"
          >
            {/* Masking tape on top */}
            <div className="absolute -top-3 left-10">
              <div className="h-5 w-20 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
            </div>

            <div className="flex items-center justify-between border-b border-[#171715]/10 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D94A38] font-bold">
                  PROJECT SPECIFICATION DRAFT
                </span>
                <h4 className="font-serif text-xl font-bold text-[#171715]">
                  Start a Project Discussion
                </h4>
              </div>
              <span className="rounded-sm bg-[#F3F0E8] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#77746D]">
                Direct to Ubaid
              </span>
            </div>

            {submitStatus === 'success' ? (
              <div className="mt-8 rounded-sm bg-[#F3F0E8] p-8 text-center border border-[#171715]/10 animate-in fade-in duration-300">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3 shadow-sm">
                  <CheckCircle2 size={32} />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  Email Dispatched Successfully ✓
                </span>
                <h4 className="mt-3 font-serif text-2xl font-bold text-[#171715]">
                  Inquiry Received & Both Parties Notified!
                </h4>
                <p className="mt-2 text-sm text-[#4A4843] max-w-md mx-auto leading-relaxed">
                  1. A detailed project alert was sent to Ubaid (<strong className="text-[#171715]">{profile.social.email}</strong>).<br />
                  2. A confirmation email was sent to your inbox (<strong className="text-[#171715]">{submittedEmail}</strong>).
                </p>
                <p className="mt-3 text-xs text-[#77746D]">
                  Expect a personal response within <strong>2 to 4 hours</strong>.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormState({ name: '', email: '', projectType: 'Real Estate Website', budget: 'Flexible / Exploring Options', message: '' });
                    }}
                    className="rounded-sm bg-[#171715] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-[#D94A38] transition-colors"
                  >
                    ← Send Another Inquiry
                  </button>
                  <a
                    href={profile.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm bg-[#128C7E] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0e6e63] transition-colors"
                  >
                    <MessageSquare size={13} />
                    WhatsApp Quick Chat
                  </a>
                </div>
              </div>
            ) : submitStatus === 'fallback' ? (
              <div className="mt-8 rounded-sm bg-[#F3F0E8] p-8 text-center border border-[#171715]/10 animate-in fade-in duration-300">
                <CheckCircle2 size={36} className="mx-auto text-[#D94A38]" />
                <h4 className="mt-3 font-serif text-xl font-bold text-[#171715]">
                  Launching Your Email Client...
                </h4>
                <p className="mt-2 text-sm text-[#77746D] max-w-md mx-auto">
                  Your inquiry has been formatted into an email draft. If your mail client did not open automatically, reach out directly at:
                </p>
                <div className="mt-4 font-mono text-sm font-bold text-[#171715]">
                  {profile.social.email}
                </div>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 font-mono text-xs uppercase tracking-wider text-[#D94A38] hover:underline"
                >
                  ← Edit or Draft Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-[#171715] font-semibold">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Vikram Mehta"
                      className="mt-1 w-full rounded-sm border border-[#171715]/20 bg-transparent px-3 py-2 text-sm text-[#171715] placeholder-[#77746D]/50 focus:border-[#D94A38] focus:outline-none focus:ring-1 focus:ring-[#D94A38]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-[#171715] font-semibold">
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@company.com"
                      className="mt-1 w-full rounded-sm border border-[#171715]/20 bg-transparent px-3 py-2 text-sm text-[#171715] placeholder-[#77746D]/50 focus:border-[#D94A38] focus:outline-none focus:ring-1 focus:ring-[#D94A38]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="projectType" className="block font-mono text-[11px] uppercase tracking-wider text-[#171715] font-semibold">
                      Project Category
                    </label>
                    <select
                      id="projectType"
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="mt-1 w-full rounded-sm border border-[#171715]/20 bg-[#FFFDF7] px-3 py-2 text-sm text-[#171715] focus:border-[#D94A38] focus:outline-none focus:ring-1 focus:ring-[#D94A38]"
                    >
                      <option value="Real Estate Website">Real Estate & Property Portal</option>
                      <option value="Creative Animated Website">Creative Animated Brand Website</option>
                      <option value="Landing Page">High-Conversion Landing Page</option>
                      <option value="Full-Stack Application">Full-Stack Web App / MVP</option>
                      <option value="Frontend Development">Frontend / Motion Contract Role</option>
                      <option value="Website Redesign">Website Redesign & Speed Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block font-mono text-[11px] uppercase tracking-wider text-[#171715] font-semibold">
                      Scope / Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="mt-1 w-full rounded-sm border border-[#171715]/20 bg-[#FFFDF7] px-3 py-2 text-sm text-[#171715] focus:border-[#D94A38] focus:outline-none focus:ring-1 focus:ring-[#D94A38]"
                    >
                      <option value="Flexible / Exploring">Flexible / Exploring Options</option>
                      <option value="₹25k — ₹50k">₹25,000 — ₹50,000</option>
                      <option value="₹50k — ₹1.2L">₹50,000 — ₹1,20,000</option>
                      <option value="₹1.2L+ / $1,500+">₹1,20,000+ / $1,500+</option>
                      <option value="Full-Time / Contract Salary">Full-Time / Contract Salary</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-[#171715] font-semibold">
                    Project Goals & Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your business, the website you need, reference sites, or ideal launch date..."
                    className="mt-1 w-full rounded-sm border border-[#171715]/20 bg-transparent px-3 py-2 text-sm text-[#171715] placeholder-[#77746D]/50 focus:border-[#D94A38] focus:outline-none focus:ring-1 focus:ring-[#D94A38]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-sm bg-[#171715] py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-[#FFFDF7] transition-all hover:bg-[#D94A38] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38] disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin text-[#F7E84B]" />
                        <span>Dispatching Automated Emails...</span>
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>Send Project Inquiry (Automated Alert) →</span>
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-wider text-[#77746D]">
                    Automated confirmation sent to your inbox + instant alert to Ubaid
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Direct Communication Channels & Sign-Off */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div ref={linksRef} className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#77746D] font-bold">
                  Direct Communication Channels
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                  Pre-filled Messages Ready
                </span>
              </div>

              {/* Toast Notice when message copied */}
              {copiedNotice && (
                <div className="rounded-sm bg-[#171715] p-3 text-xs font-mono text-[#F7E84B] shadow-lg animate-in fade-in slide-in-from-top-2 border border-[#F7E84B]/30 flex items-center justify-between">
                  <span>✓ {copiedNotice}</span>
                  <button onClick={() => setCopiedNotice(null)} className="text-white hover:text-[#D94A38] ml-2">✕</button>
                </div>
              )}

              {contactLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith('http');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleLinkClick(link.label)}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between rounded-sm bg-[#FFFDF7] p-4 shadow-[2px_3px_10px_rgba(23,23,21,0.03)] border border-[#171715]/10 transition-all hover:-translate-y-0.5 hover:shadow-[3px_6px_16px_rgba(23,23,21,0.07)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#F3F0E8] text-[#171715] group-hover:bg-[#171715] group-hover:text-white transition-colors shrink-0">
                        <Icon size={18} className={link.color} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-xs font-bold text-[#171715]">{link.label}</p>
                          <span className="font-mono text-[8px] uppercase tracking-wider text-[#D94A38] bg-[#D94A38]/10 px-1.5 py-0.2 rounded font-semibold">
                            {link.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#77746D]">{link.note}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-[#77746D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
                  </a>
                );
              })}
            </div>

            {/* Restrained Handwritten Editorial Sign-off */}
            <div className="mt-8 rounded-sm bg-[#FFFDF7] p-6 shadow-[2px_4px_16px_rgba(23,23,21,0.03)] border border-[#171715]/10">
              <div className="flex items-center gap-2 text-[#D94A38] font-mono text-[10px] uppercase tracking-wider font-bold">
                <Sparkles size={12} />
                <span>Developer Note</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#77746D]">
                I believe great web development comes from the intersection of solid CS fundamentals (MCA graduate) and creative storytelling. Let&apos;s build an experience that sets your business apart.
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
