import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Download, Sparkles, FileText, Code2, Award, ArrowUpRight } from 'lucide-react';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillGrid from '@/components/SkillGrid';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Experience & Technical Skills',
  description:
    'Career trajectory, engineering experience at Synavos Global, research background, and technical skillset in Computer Vision and AI.',
  canonicalUrl: 'https://habeel.dev/experience',
});

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3 font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>// CAREER TRAJECTORY & COMPETENCIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Experience & Expertise
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-sans">
            A comprehensive overview of my professional engineering roles, research endeavors, and technical proficiencies in AI systems.
          </p>
        </div>

        {/* Resume Download Banner */}
        <div
          id="resume"
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary/15 via-surface to-accent/15 border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 shadow-glass"
        >
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-heading font-bold text-lg sm:text-xl">
              <FileText className="w-5 h-5 text-primary" />
              <span>Download Full Curriculum Vitae</span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted font-sans">
              Comprehensive resume highlighting ML models, pipelines, and technical achievements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-medium text-sm text-text-primary bg-surface-card hover:bg-white/5 border border-white/10 hover:border-primary/40 transition-all shadow-glass"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span>View Online</span>
            </Link>

            <a
              href="/resume.pdf"
              download="Muhammad_Habeel_AI_Engineer_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-medium text-sm text-white bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Section 1: Experience Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-text-dim uppercase tracking-wider mb-6">
            <span>01 — PROFESSIONAL TIMELINE</span>
          </div>
          <ExperienceTimeline />
        </div>

        {/* Section 2: Technical Skill Grid */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-text-dim uppercase tracking-wider mb-6">
            <span>02 — CORE TECHNICAL STACK</span>
          </div>
          <SkillGrid />
        </div>
      </div>
    </div>
  );
}
