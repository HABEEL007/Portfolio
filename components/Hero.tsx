'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  FileText,
  Terminal,
  Sparkles,
  Cpu,
  Eye,
  Workflow,
} from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interactive Neural Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(window.innerWidth / 22), 55);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    const colors = ['#3B82F6', '#8B5CF6', '#38BDF8', '#6366F1'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.18 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw mouse gravity connections
      for (let i = 0; i < particles.length; i++) {
        const dx = particles[i].x - mouseX;
        const dy = particles[i].y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 160) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.25 * (1 - dist / 160)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Neural Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
      />

      {/* Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[250px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Avatar with Neural Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-6"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-3xl p-1 bg-gradient-to-tr from-primary via-accent to-emerald-400 shadow-neural-lg">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-surface">
              <Image
                src="/profile.jpg"
                alt="Muhammad Habeel - AI Engineer"
                fill
                priority
                sizes="(max-width: 768px) 112px, 128px"
                className="object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Active status pill */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#070A12]/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow-glass">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to AI Roles</span>
          </div>
        </motion.div>

        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="block mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-white/10 shadow-glass">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              AI ENGINEER · COMPUTER VISION & MULTI-MODAL SYSTEMS
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6"
        >
          Muhammad{' '}
          <span className="neural-gradient-text">Habeel</span>
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl font-light text-text-primary max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Building intelligent systems that{' '}
          <span className="text-white font-medium">See</span> ·{' '}
          <span className="text-white font-medium">Understand</span> ·{' '}
          <span className="text-white font-medium">Automate</span>.
        </motion.p>

        {/* Bio description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          Specialized in multi-modal biometric verification, anti-spoofing liveness pipelines, sub-second vector similarity search, and high-performance FastAPI backends for real-world AI deployment.
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link
            href="#featured-projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-heading font-medium text-sm sm:text-base text-white bg-primary hover:bg-primary-hover shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/resume"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-medium text-sm sm:text-base text-text-primary bg-surface-card hover:bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-glass"
          >
            <FileText className="w-4 h-4 text-primary" />
            <span>View Resume</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-heading font-medium text-text-muted hover:text-white transition-colors"
          >
            <span>Get in Touch</span>
          </Link>
        </motion.div>

        {/* Live Tech Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto pt-4 border-t border-white/[0.06]"
        >
          {[
            { icon: Eye, label: 'Computer Vision' },
            { icon: Cpu, label: 'InsightFace & FAISS' },
            { icon: Workflow, label: 'FastAPI & PyTorch' },
            { icon: Sparkles, label: 'Anti-Spoofing Liveness' },
            { icon: Terminal, label: 'Full-Stack Deployment' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface/80 border border-white/[0.06] text-xs font-mono text-text-muted hover:text-text-primary hover:border-primary/30 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
