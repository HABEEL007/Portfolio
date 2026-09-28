'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, Terminal, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/lib/metadata';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070D] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Monogram */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-surface border border-white/10 group-hover:border-primary/50 transition-colors">
                <span className="font-heading font-bold text-base text-primary">
                  MH
                </span>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Muhammad Habeel
              </span>
            </Link>

            <p className="text-sm text-text-muted max-w-sm leading-relaxed font-sans">
              AI Engineer dedicated to architecting resilient Computer Vision models, multimodal biometrics, and production-grade intelligent systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:habeelnaveed@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-dim mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  All Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  Experience & Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-dim mb-4">
              Featured Case Studies
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/projects/bioattend"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  BioAttend Verification
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/lahore-travelmate"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  Lahore TravelMate
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/mri-scan-research"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  Medical AI Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/deepfake-detection"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  DeepFake Detection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dim">
          <p>
            © {new Date().getFullYear()} Muhammad Habeel. Built with Next.js 14, Tailwind CSS & Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-muted hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
