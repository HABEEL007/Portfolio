'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, BrainCircuit, Server, Layout, CheckCircle } from 'lucide-react';
import { skillCategories } from '@/data/experience';

const iconMap: Record<string, React.ElementType> = {
  Eye: Eye,
  BrainCircuit: BrainCircuit,
  Server: Server,
  Layout: Layout,
};

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, idx) => {
        const IconComponent = iconMap[category.iconName] || BrainCircuit;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-primary/40 transition-all shadow-glass"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-surface-light border border-white/10 flex items-center justify-center text-primary">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {category.category}
              </h3>
            </div>

            <div className="space-y-2.5">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-card/60 border border-white/[0.04]"
                >
                  <span className="text-sm font-medium text-text-primary">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
