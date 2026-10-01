import React from 'react';
import { Metadata } from 'next';
import { Mail, Github, Linkedin, MapPin, Clock, MessageSquare, Sparkles } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { siteConfig, constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Muhammad Habeel',
  description:
    'Get in touch with Muhammad Habeel for AI engineering, Computer Vision consulting, and collaborations.',
  canonicalUrl: 'https://habeel.dev/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3 font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT INQUIRY CHANNELS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-sans">
            Whether you have a question about biometric vision pipelines, need an AI engineer for a high-impact initiative, or simply want to chat, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-surface border border-white/[0.08] shadow-glass">
            <h2 className="text-xl font-heading font-bold text-white mb-6">
              Send a Direct Message
            </h2>
            <ContactForm />
          </div>

          {/* Right: Contact Coordinates & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Information Card */}
            <div className="p-7 rounded-3xl bg-surface border border-white/[0.08] space-y-6 shadow-glass">
              <h3 className="font-heading font-bold text-lg text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:habeelnaveed@gmail.com"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light/60 border border-white/[0.04] hover:border-primary/40 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-text-dim">Email</span>
                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                      habeelnaveed@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light/60 border border-white/[0.04]">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-text-dim">Location</span>
                    <span className="text-sm font-medium text-white">
                      Lahore, Pakistan (UTC+5)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light/60 border border-white/[0.04]">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-text-dim">Availability</span>
                    <span className="text-sm font-medium text-white">
                      Full-Time Engineering / Selected Consultations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="p-7 rounded-3xl bg-surface border border-white/[0.08] shadow-glass">
              <h3 className="font-heading font-bold text-lg text-white mb-4">
                Professional Networks
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-surface-light/60 border border-white/[0.04] hover:border-primary/40 transition-colors group"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-xs font-mono text-text-muted group-hover:text-white transition-colors">
                    GitHub
                  </span>
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-surface-light/60 border border-white/[0.04] hover:border-primary/40 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-xs font-mono text-text-muted group-hover:text-white transition-colors">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
