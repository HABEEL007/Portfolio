'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { projects, ProjectCategory } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Computer Vision',
    'Full-Stack',
    'Research',
    'AI Automation',
    'NLP',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="featured-projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 mt-4 md:mt-0 text-sm font-mono text-primary hover:text-white transition-colors"
          >
            <span>View all projects catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 bg-surface-card rounded-xl border border-white/[0.08]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap',
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-text-muted hover:text-text-primary hover:bg-white/[0.03]'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 rounded-lg bg-primary/20 border border-primary/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-surface/50 rounded-2xl border border-white/5">
            <p className="text-text-muted text-sm font-mono">
              No projects found in this category yet. Stay tuned for upcoming releases.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
