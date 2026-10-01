'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  FlaskConical,
  Wrench,
  ShieldCheck,
} from 'lucide-react';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusConfig = {
  Production: {
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: CheckCircle2,
  },
  'In Development': {
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    icon: Wrench,
  },
  Research: {
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: FlaskConical,
  },
  Confidential: {
    color: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    icon: ShieldCheck,
  },
};

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, index = 0 }, ref) => {
    const StatusIcon = statusConfig[project.status]?.icon || CheckCircle2;
    const statusClass =
      statusConfig[project.status]?.color ||
      'bg-blue-500/10 text-blue-400 border-blue-500/30';

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col justify-between rounded-card bg-surface border border-white/[0.08] hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neural overflow-hidden"
      >
        <div>
          {/* Visual Thumbnail Header */}
          <div className="relative w-full h-52 sm:h-56 bg-surface-light overflow-hidden border-b border-white/[0.06]">
            <Image
              src={project.images.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

            {/* Badges Overlay */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide bg-[#070A12]/80 backdrop-blur-md text-primary border border-primary/30">
                {project.title}
              </span>

              <span
                className={cn(
                  'flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium backdrop-blur-md border',
                  statusClass
                )}
              >
                <StatusIcon className="w-3 h-3" />
                <span>{project.status}</span>
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <Link href={`/projects/${project.slug}`}>
              <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors flex items-center justify-between gap-2 mb-2">
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </h3>
            </Link>

            {/* Hook */}
            <p className="text-sm font-medium text-text-primary mb-3 line-clamp-2">
              {project.hook}
            </p>

            {/* Problem & Solution Summary */}
            <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-3 font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Footer: Tech Stack & Actions */}
        <div className="px-6 pb-6 pt-2 border-t border-white/[0.04]">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono text-text-muted bg-white/[0.04] border border-white/[0.04]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono text-text-dim bg-white/[0.02]">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="text-xs font-mono font-medium text-primary hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Read Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
