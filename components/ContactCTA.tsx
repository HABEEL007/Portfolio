'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Copy, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/metadata';

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const email = 'habeelnaveed@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-surface to-[#0A0E1A] border border-white/[0.08] p-8 sm:p-14 text-center overflow-hidden shadow-neural-lg">
          {/* Radial Neural Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-white/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                OPEN FOR COLLABORATIONS & AI INITIATIVES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
              Let&apos;s build something{' '}
              <span className="neural-gradient-text">intelligent</span>.
            </h2>

            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-8 font-sans">
              Have a computer vision problem, biometric workflow, or deep learning system you want to bring to life? Let&apos;s connect and architect solutions together.
            </p>

            {/* Action Buttons & Quick Copy */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-heading font-medium text-sm sm:text-base text-white bg-primary hover:bg-primary-hover shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300"
              >
                <span>Send a Direct Message</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm text-text-primary bg-surface-card border border-white/10 hover:border-primary/40 hover:bg-white/5 transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-primary" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/[0.06]">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-card border border-white/[0.06] text-text-muted hover:text-white hover:border-primary/40 transition-all text-xs font-mono"
              >
                <Github className="w-4 h-4 text-primary" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-card border border-white/[0.06] text-text-muted hover:text-white hover:border-primary/40 transition-all text-xs font-mono"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Send email"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-card border border-white/[0.06] text-text-muted hover:text-white hover:border-primary/40 transition-all text-xs font-mono"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
