import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Download,
  Printer,
  ArrowLeft,
  Mail,
  MapPin,
  Globe,
  Github,
  Linkedin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Resume — Muhammad Habeel',
  description:
    'Curriculum Vitae of Muhammad Habeel — AI Engineer specialized in Computer Vision, Biometrics, and Deep Learning.',
  canonicalUrl: 'https://habeel.dev/resume',
});

export default function ResumePage() {
  return (
    <div className="pt-28 pb-24 print:pt-4 print:pb-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Action Header (Hidden when printing) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 print:hidden">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Experience</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Muhammad_Habeel_AI_Engineer_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>
        </div>

        {/* Resume Paper Container */}
        <div className="rounded-3xl bg-surface border border-white/[0.08] p-8 sm:p-12 shadow-neural-lg print:border-none print:shadow-none print:p-0 print:bg-transparent">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-neural shrink-0">
                  <Image
                    src="/profile.jpg"
                    alt="Muhammad Habeel"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                    Muhammad Habeel
                  </h1>
                  <p className="text-base font-semibold text-primary mt-1">
                    AI Engineer · Computer Vision & Multi-Modal Systems
                  </p>
                </div>
              </div>
            </div>

            {/* Coordinates */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-5 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <a
                  href="mailto:habeelnaveed@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  habeelnaveed@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-primary" />
                <a href="https://habeel.dev" className="hover:text-white transition-colors">
                  habeel.dev
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-primary" />
                <a
                  href="https://github.com/HABEEL007"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  github.com/HABEEL007
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-primary" />
                <a
                  href="https://www.linkedin.com/in/muhammad-habeel-ai-engineer/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  linkedin.com/in/muhammad-habeel-ai-engineer
                </a>
              </div>
            </div>
          </div>

          {/* Section: Summary */}
          <div className="mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              Professional Summary
            </h2>
            <p className="text-sm text-text-primary leading-relaxed font-sans">
              Results-driven AI Engineer specialized in Computer Vision, Multi-modal Biometrics, Deep Learning pipelines, and high-performance backend architectures. Experienced in building production-grade verification pipelines combining facial recognition (InsightFace), sub-second vector search (FAISS), and custom anti-spoofing liveness classifiers (EfficientNet-B0) deployed via asynchronous FastAPI services.
            </p>
          </div>

          {/* Section: Experience */}
          <div className="mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-4">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {/* Role 1 */}
              <div className="p-5 rounded-2xl bg-surface-card/60 border border-white/[0.04]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="font-heading font-bold text-base text-white">
                    Synavos Global
                  </div>
                  <div className="text-xs font-mono text-text-muted">
                    Aug 2025 – Present · Lahore, PK
                  </div>
                </div>
                <div className="text-sm font-semibold text-primary mb-3">
                  AI Engineer
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-text-primary">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      Architected and deployed production-ready multi-modal biometric attendance pipelines integrating InsightFace Buffalo_L (512-D embeddings), FAISS vector similarity search, and secondary iris pattern verification.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      Developed and trained a custom EfficientNet-B0 anti-spoofing classifier on a self-collected dataset to detect print attacks, screen replays, and physical masks with minimal latency.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      Engineered scalable, asynchronous FastAPI microservices containerized with Docker, optimized for low-latency edge camera ingestion and GPU compute utilization.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      Integrated multimodal retrieval pipelines with vector databases (FAISS, Chroma) to empower intelligent automation workflows and internal analytical agents.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="p-5 rounded-2xl bg-surface-card/60 border border-white/[0.04]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="font-heading font-bold text-base text-white">
                    University Applied AI Research Lab
                  </div>
                  <div className="text-xs font-mono text-text-muted">
                    2024 – 2025 · Lahore, PK
                  </div>
                </div>
                <div className="text-sm font-semibold text-accent mb-3">
                  AI & Deep Learning Researcher
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-text-primary">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Conducted research on volumetric medical MRI scan classification and anomaly segmentation using CNN and Transformer backbones with Grad-CAM visual interpretability heatmaps.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Designed a conversational NLP triage system for ENT and nasal health guidance leveraging Hugging Face Transformers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Trained transfer learning models (MobileNetV2, ResNet50) on 140k+ Kaggle face datasets to classify and detect deepfake synthesis artifacts.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Core Projects */}
          <div className="mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-4">
              Selected Engineering Projects
            </h2>

            <div className="grid grid-cols-1 gap-3.5">
              <div className="p-4 rounded-xl bg-surface-card/40 border border-white/[0.04]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-heading font-bold text-sm text-white">
                    BioAttend — Multi-Modal Biometric Attendance Pipeline
                  </span>
                  <span className="text-[11px] font-mono text-primary">Production</span>
                </div>
                <div className="text-[11px] font-mono text-text-dim mb-1">
                  Python, FastAPI, InsightFace, FAISS, EfficientNet-B0, OpenCV
                </div>
                <p className="text-xs text-text-muted">
                  Complete verification system featuring face embeddings search across 10,000+ IDs, iris verification, and real-time anti-spoofing liveness detection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-card/40 border border-white/[0.04]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-heading font-bold text-sm text-white">
                    Lahore TravelMate — Tourism & Heritage Guide
                  </span>
                  <span className="text-[11px] font-mono text-amber-400">In Development</span>
                </div>
                <div className="text-[11px] font-mono text-text-dim mb-1">
                  Node.js, Express, JavaScript, MongoDB, TailwindCSS
                </div>
                <p className="text-xs text-text-muted">
                  Full-stack cultural discovery platform with hardened security middleware, rate limiting, and interactive itinerary routing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-card/40 border border-white/[0.04]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-heading font-bold text-sm text-white">
                    DeepFake Detection Engine — Transfer Learning Benchmark
                  </span>
                  <span className="text-[11px] font-mono text-purple-400">Research</span>
                </div>
                <div className="text-[11px] font-mono text-text-dim mb-1">
                  Python, TensorFlow, MobileNetV2, ResNet50, OpenCV
                </div>
                <p className="text-xs text-text-muted">
                  Deep learning classification notebook on Kaggle 140k dataset benchmarking residual architectures for synthetic facial boundary artifact detection.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              Technical Competencies
            </h2>

            <div className="space-y-2 text-xs font-mono">
              <div>
                <span className="text-white font-bold">Computer Vision & AI: </span>
                <span className="text-text-muted">
                  InsightFace, FAISS, EfficientNet-B0, OpenCV, DeepFake Detection, Transfer Learning, YOLO
                </span>
              </div>
              <div>
                <span className="text-white font-bold">Frameworks & Deep Learning: </span>
                <span className="text-text-muted">
                  PyTorch, TensorFlow, Keras, Hugging Face Transformers, Scikit-Learn, NumPy, ONNX
                </span>
              </div>
              <div>
                <span className="text-white font-bold">Backend & Infrastructure: </span>
                <span className="text-text-muted">
                  Python (FastAPI, Flask), Node.js, Express, REST APIs, WebSockets, Docker, Git
                </span>
              </div>
              <div>
                <span className="text-white font-bold">Frontend & Full-Stack: </span>
                <span className="text-text-muted">
                  TypeScript, JavaScript, Next.js 14, React, Tailwind CSS, Responsive Web Design
                </span>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              Education
            </h2>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-heading font-bold text-white">
                Bachelor of Science in Artificial Intelligence (BSAI)
              </span>
              <span className="font-mono text-xs text-text-muted">Graduated with Honors</span>
            </div>
            <p className="text-xs text-text-dim font-sans mt-0.5">
              Specialization in Deep Neural Networks, Computer Vision & Multimodal Systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
