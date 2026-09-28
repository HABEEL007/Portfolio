'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, FlaskConical, Award } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function ExperienceTimeline() {
  return (
    <div className="relative border-l-2 border-white/[0.08] ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
      {experiences.map((exp, index) => {
        const isCurrent = exp.current;

        return (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Node Point */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                isCurrent
                  ? 'bg-primary border-white shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                  : 'bg-surface border-white/30 group-hover:border-primary'
              }`}
            />

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/[0.08] hover:border-primary/40 transition-all shadow-glass">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    {exp.role}
                  </h3>
                  {isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                <span>{exp.company}</span>
                <span className="text-text-dim">·</span>
                <span className="text-xs font-mono text-text-muted font-normal flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-6 font-sans">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-text-dim">
                  Key Accomplishments:
                </h4>
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-text-primary leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-text-dim mr-2">
                  Stack:
                </span>
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono text-text-muted bg-white/[0.04] border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
