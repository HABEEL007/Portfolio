'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, MessageSquareCode, Workflow, Layers, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    id: 'cv',
    title: 'Computer Vision',
    eyebrow: '01 / SIGHT',
    description:
      'Multi-modal facial recognition, secondary iris pattern matching, EfficientNet anti-spoof liveness models, and deepfake artifact detection.',
    icon: Eye,
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'group-hover:border-blue-500/50',
    iconColor: 'text-blue-400',
    tags: ['InsightFace', 'EfficientNet-B0', 'FAISS', 'OpenCV'],
    targetCategory: 'Computer Vision',
  },
  {
    id: 'nlp',
    title: 'NLP & Conversational AI',
    eyebrow: '02 / UNDERSTAND',
    description:
      'Domain-specific medical chatbots, clinical symptom triage, Hugging Face transformers, and semantic embeddings for dialogue systems.',
    icon: MessageSquareCode,
    color: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'group-hover:border-purple-500/50',
    iconColor: 'text-purple-400',
    tags: ['Hugging Face', 'PyTorch', 'Chatbots', 'Embeddings'],
    targetCategory: 'NLP',
  },
  {
    id: 'automation',
    title: 'AI Automation & Pipelines',
    eyebrow: '03 / SCALE',
    description:
      'High-throughput vector indexing (FAISS), asynchronous FastAPI pipelines, edge optimization with ONNX, and automated inference services.',
    icon: Workflow,
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'group-hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
    tags: ['FAISS 512-D', 'FastAPI Async', 'Docker', 'Vector DBs'],
    targetCategory: 'AI Automation',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Systems',
    eyebrow: '04 / INTEGRATE',
    description:
      'Hardened Node/Express and Next.js applications, robust security middleware, clean API contracts, and high-performance user experiences.',
    icon: Layers,
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'group-hover:border-amber-500/50',
    iconColor: 'text-amber-400',
    tags: ['Next.js 14', 'Node.js', 'Express', 'Tailwind CSS'],
    targetCategory: 'Full-Stack',
  },
];

export default function CapabilityTiles() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-2 font-semibold">
              <span>// ARCHITECTURAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              What I Build
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-text-muted text-sm sm:text-base max-w-md font-sans">
            End-to-end engineering from deep neural network training to scalable cloud deployment.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-surface p-7 border border-white/[0.08] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neural"
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Row: Eyebrow + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs tracking-wider text-text-dim">
                        {cap.eyebrow}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-surface-light border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-6 h-6 ${cap.iconColor}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors mb-3">
                      {cap.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-muted text-sm leading-relaxed mb-6 font-sans">
                      {cap.description}
                    </p>
                  </div>

                  {/* Bottom: Tags + Quick Link */}
                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                      {cap.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-text-muted border border-white/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects?category=${encodeURIComponent(
                        cap.targetCategory
                      )}`}
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-primary group-hover:text-white transition-colors"
                    >
                      <span>Explore {cap.title} projects</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
