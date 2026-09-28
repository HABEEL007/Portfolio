'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function ExperiencePreview() {
  const currentRole = experiences.find((e) => e.current) || experiences[0];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-surface border border-white/[0.08] p-8 sm:p-12 overflow-hidden shadow-glass">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            {/* Left: Role Info & Badges */}
            <div className="lg:max-w-md">
              <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3 font-semibold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>// CURRENT ENGAGEMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-2">
                Experience
              </h2>

              <div className="mt-4 p-5 rounded-2xl bg-surface-light/70 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-lg text-white">
                    {currentRole.role}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="text-base font-semibold text-primary mb-3">
                  {currentRole.company}
                </div>

                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono text-text-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentRole.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{currentRole.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/experience"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-heading font-medium text-white bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                >
                  <span>View Full Experience & Skills</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Key Highlights */}
            <div className="flex-1 lg:max-w-xl">
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-4">
                Key Responsibilities & Deliverables
              </h3>

              <div className="space-y-3.5">
                {currentRole.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-card/60 border border-white/[0.04] hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-text-primary leading-relaxed font-sans">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Core Technologies Used */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <span className="font-mono text-xs text-text-dim block mb-2.5">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentRole.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-text-muted bg-white/[0.03] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
