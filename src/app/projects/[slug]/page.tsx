import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { generateProjectMetadata } from '@/lib/seo';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return generateProjectMetadata(project.title, project.description, project.slug);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'recreation':
        return 'Recreation / Study Project';
      case 'in-development':
        return 'In Active Development';
      default:
        return 'Completed Implementation';
    }
  };

  return (
    <article className="min-h-screen bg-[#F3F0E8] px-6 py-24 md:px-12 md:py-32">
      {/* Background grain */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#77746D] transition-colors hover:text-[#171715]"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to overview
        </Link>

        {/* Paper Header */}
        <header className="relative mt-8 rounded-sm bg-[#FFFDF7] p-8 md:p-12 shadow-[4px_6px_24px_rgba(0,0,0,0.06)] border border-[#171715]/5">
          {/* Tape */}
          <div className="absolute -top-3 left-10">
            <div className="h-5 w-16 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#D94A38] font-semibold">
              Project {project.number}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#77746D] border border-[#171715]/10 px-2.5 py-1 rounded-sm">
              {getStatusBadge(project.status)}
            </span>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#171715] md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#77746D]">
            {project.subtitle} · {project.category}
          </p>

          <p className="mt-6 text-base leading-relaxed text-[#171715] md:text-lg">
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#171715]/10">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm bg-[#171715] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#FFFDF7]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm bg-[#D94A38] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#b83827] transition-all hover:scale-105"
              >
                <Globe size={13} />
                Visit Live Site: {project.liveUrl.replace('https://', '')}
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </header>

        {/* Project Image */}
        <div className="relative mt-12 rounded-sm bg-[#FFFDF7] p-4 shadow-[4px_6px_24px_rgba(0,0,0,0.06)] border border-[#171715]/5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#171715]" style={{ position: 'relative' }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
            Fig. 01 — {project.title} Interface & Layout
          </p>
        </div>

        {/* Key Features & Architecture */}
        <section className="mt-12 rounded-sm bg-[#FFFDF7] p-8 md:p-12 shadow-[4px_6px_24px_rgba(0,0,0,0.06)] border border-[#171715]/5">
          <h2 className="font-serif text-2xl font-bold text-[#171715]">
            Key Technical Features
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 rounded-sm bg-[#F3F0E8] p-4">
                <CheckCircle2 size={16} className="mt-0.5 text-[#D94A38] shrink-0" />
                <span className="text-sm text-[#171715]">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-sm bg-[#F3F0E8] p-6 border-l-4 border-[#171715]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#171715] font-bold">
              Engineering Notes & Status
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#77746D]">
              {project.status === 'recreation'
                ? 'This study was built independently for educational and exploration purposes to master interaction architecture and motion techniques. It is not affiliated with the original design agency.'
                : project.status === 'in-development'
                ? 'Active prototype stage. Features and backend integration continue to be iterated and refined.'
                : 'Built and engineered following production standards for performance, accessibility, and modern responsive design.'}
            </p>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            href="/"
            className="rounded-sm bg-[#171715] px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-[#FFFDF7] hover:bg-[#D94A38] transition-colors"
          >
            ← Return to Story
          </Link>
        </div>
      </div>
    </article>
  );
}
