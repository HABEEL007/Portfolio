'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API delivery
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Dr. Alex Rivera"
            className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/10 text-white placeholder-text-dim text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/10 text-white placeholder-text-dim text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2"
        >
          Subject / Project Domain *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
        >
          <option value="" className="bg-[#0D1220] text-text-dim">Select topic...</option>
          <option value="Computer Vision / Biometrics" className="bg-[#0D1220]">Computer Vision / Biometrics Consultation</option>
          <option value="Full-Time / Contract Role" className="bg-[#0D1220]">Engineering Role / Opportunity</option>
          <option value="AI Pipeline Architecture" className="bg-[#0D1220]">AI Pipeline & Backend Architecture</option>
          <option value="Research Collaboration" className="bg-[#0D1220]">Research Collaboration</option>
          <option value="Other" className="bg-[#0D1220]">Other General Inquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your technical goals, dataset challenges, or project scope..."
          className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/10 text-white placeholder-text-dim text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-50 transition-all duration-300"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-sans"
        >
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>Thank you! Your message has been received. I will reply within 24 hours.</span>
        </motion.div>
      )}
    </form>
  );
}
