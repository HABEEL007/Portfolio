import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
  Calendar,
  Share2,
} from 'lucide-react';
import { projects, getProjectBySlug } from '@/data/projects';
import { constructMetadata } from '@/lib/metadata';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return constructMetadata({
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    });
  }

  return constructMetadata({
    title: `${project.title} — AI Case Study`,
    description: project.hook,
    image: project.images.hero,
    canonicalUrl: `https://habeel.dev/projects/${project.slug}`,
  });
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Header Eyebrow & Title */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-primary/15 text-primary border border-primary/30">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white/5 text-text-muted border border-white/10">
              Status: {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-text-primary leading-relaxed font-sans max-w-3xl">
            {project.hook}
          </p>
        </div>

        {/* Action Bar (GitHub, Live, Tech pills) */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-surface border border-white/[0.08] mb-12 shadow-glass">
          <div className="flex flex-wrap items-center gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono text-text-muted bg-white/[0.03] border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white bg-surface-card border border-white/10 hover:border-primary/50 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-primary" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white bg-primary hover:bg-primary-hover shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Visual Asset */}
        <div className="relative w-full h-64 sm:h-[420px] rounded-3xl overflow-hidden border border-white/[0.08] mb-14 bg-surface-card shadow-neural-lg">
          <Image
            src={project.images.hero}
            alt={`${project.title} Architecture Visual`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
          />
        </div>

        {/* Problem vs. Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Problem */}
          <div className="p-7 rounded-2xl bg-surface border border-rose-500/20 shadow-glass">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h2 className="font-heading font-bold text-lg text-white">
                The Problem
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-7 rounded-2xl bg-surface border border-emerald-500/20 shadow-glass">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h2 className="font-heading font-bold text-lg text-white">
                The Solution & Architecture
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Architectural Details */}
        {project.architectureDetails && project.architectureDetails.length > 0 && (
          <div className="p-8 rounded-3xl bg-surface border border-white/[0.08] mb-14 shadow-glass">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <Cpu className="w-4 h-4" />
              </div>
              <h2 className="font-heading font-bold text-xl text-white">
                Pipeline Architecture Breakdown
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              {project.architectureDetails.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-card/70 border border-white/[0.04]"
                >
                  <span className="text-primary font-bold">{idx + 1}.</span>
                  <span className="text-text-primary leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="p-8 rounded-3xl bg-surface border border-white/[0.08] mb-14 shadow-glass">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="font-heading font-bold text-xl text-white">
                Core Highlights & Functionality
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface-card/60 border border-white/[0.04]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-text-primary leading-relaxed font-sans">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Project Footer Navigation */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-primary hover:bg-primary-hover shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
          >
            <span>Discuss this architecture</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
