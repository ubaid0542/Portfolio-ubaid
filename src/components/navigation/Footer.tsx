'use client';

import { profile } from '@/data/profile';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, MessageSquare, Phone } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { label: 'GitHub', href: profile.social.github, icon: Github },
    { label: 'LinkedIn', href: profile.social.linkedin, icon: Linkedin },
    { label: 'Instagram', href: profile.social.instagram, icon: Instagram },
    { label: 'WhatsApp', href: profile.social.whatsapp, icon: MessageSquare },
    { label: 'Email', href: `mailto:${profile.social.email}`, icon: Mail },
  ];

  return (
    <footer className="relative bg-[#171715] px-6 py-12 text-[#FFFDF7] md:px-12 md:py-16">
      {/* Paper grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D94A38] font-bold">
                ● Available for Freelance Work
              </span>
            </div>
            <p className="mt-2 text-2xl font-bold font-serif tracking-tight">{profile.name}</p>
            <p className="mt-1 text-sm text-[#77746D]">
              {profile.title} · Varanasi, Uttar Pradesh, India
            </p>
            <p className="mt-1 font-mono text-xs text-[#FFFDF7]/60">
              MCA Graduate · End-to-End Web Developer
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
              Direct Channels & Socials
            </span>
            <div className="flex flex-wrap gap-4 md:justify-end">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                const isMailOrTel = link.href.startsWith('mailto') || link.href.startsWith('tel');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isMailOrTel ? undefined : '_blank'}
                    rel={isMailOrTel ? undefined : 'noopener noreferrer'}
                    className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#77746D] transition-colors hover:text-[#FFFDF7]"
                  >
                    <Icon size={13} className="text-[#D94A38] group-hover:text-white transition-colors" />
                    <span>{link.label}</span>
                    <ArrowUpRight size={11} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#77746D]">
              <Phone size={12} className="text-[#128C7E]" />
              <a href="tel:8090507639" className="hover:text-white transition-colors">
                +91 8090507639
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-[#FFFDF7]/10 pt-6 gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
            &copy; {new Date().getFullYear()} {profile.name} · Designed & Engineered in Varanasi, India
          </p>
          <button
            onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[10px] uppercase tracking-widest text-[#77746D] transition-colors hover:text-[#FFFDF7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38]"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
