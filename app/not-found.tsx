import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-surface border border-white/[0.08] shadow-neural">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 text-primary">
          <Terminal className="w-7 h-7" />
        </div>

        <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-2">
          ERROR 404 — ROUTE NOT FOUND
        </span>

        <h1 className="text-3xl font-heading font-bold text-white mb-3">
          Pipeline Exception
        </h1>

        <p className="text-sm text-text-muted leading-relaxed mb-8 font-sans">
          The node or document you are trying to query does not exist in the current neural cluster.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-medium text-sm text-white bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Safety</span>
        </Link>
      </div>
    </div>
  );
}
