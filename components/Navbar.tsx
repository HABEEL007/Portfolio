'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#070A12]/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-glass'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Avatar */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-text-primary hover:text-white transition-colors"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden bg-surface-card border border-white/10 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Image
                src="/profile.jpg"
                alt="Muhammad Habeel"
                fill
                sizes="40px"
                className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#070A12] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                Muhammad Habeel
              </span>
              <span className="text-[11px] font-mono text-text-muted flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                AI Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-white'
                      : 'text-text-muted hover:text-text-primary'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-primary/20 border border-primary/40 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions: Resume button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/resume"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-white bg-surface-card border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              <FileText className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface-card border border-white/10 text-text-muted hover:text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#070A12]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
              {navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors',
                      isActive
                        ? 'bg-primary/15 text-primary border border-primary/30'
                        : 'text-text-muted hover:bg-white/5 hover:text-white'
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-primary" />}
                  </Link>
                );
              })}

              <div className="pt-2">
                <Link
                  href="/resume"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-white bg-primary hover:bg-primary-hover transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>View & Download Resume</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
