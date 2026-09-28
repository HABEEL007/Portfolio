'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Filter, X, Loader2 } from 'lucide-react';
import { projects, getAllCategories, ProjectCategory } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { cn } from '@/lib/utils';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...getAllCategories()];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.hook.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Filter Controls Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 p-4 rounded-2xl bg-surface border border-white/[0.08]">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200',
                  isActive
                    ? 'bg-primary text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                    : 'text-text-muted hover:text-white hover:bg-white/[0.04]'
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech or keywords..."
            className="w-full pl-10 pr-9 py-2 rounded-xl bg-surface-card border border-white/10 text-xs sm:text-sm text-white placeholder-text-dim focus:outline-none focus:border-primary transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Projects Count */}
      <div className="flex items-center justify-between text-xs font-mono text-text-dim mb-6">
        <span>Showing {filteredProjects.length} projects</span>
        {(selectedCategory !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-primary hover:underline"
          >
            Reset filters
          </button>
        )}
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
        <div className="text-center py-20 rounded-2xl bg-surface/50 border border-white/5">
          <p className="text-text-muted text-sm font-mono mb-2">
            No matching projects found.
          </p>
          <p className="text-text-dim text-xs">
            Try searching with different terms or selecting another category.
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// ARCHIVE & CASE STUDIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            AI Projects & Research
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-sans">
            A curated index of production systems, deep learning research experiments, computer vision pipelines, and full-stack platforms.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20 text-text-muted font-mono text-xs">
              <Loader2 className="w-5 h-5 animate-spin mr-2 text-primary" />
              Loading projects catalog...
            </div>
          }
        >
          <ProjectsContent />
        </Suspense>
      </div>
    </div>
  );
}
