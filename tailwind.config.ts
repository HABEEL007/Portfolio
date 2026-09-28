import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070A12',
        surface: {
          DEFAULT: '#0D1220',
          light: '#131B2E',
          card: '#0F1626',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(59, 130, 246, 0.35)',
        },
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          glow: 'rgba(59, 130, 246, 0.25)',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          glow: 'rgba(139, 92, 246, 0.25)',
        },
        text: {
          primary: '#E5E7EB',
          muted: '#9CA3AF',
          dim: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        'card': '18px',
        'card-lg': '22px',
      },
      boxShadow: {
        'neural': '0 0 25px -5px rgba(59, 130, 246, 0.15)',
        'neural-accent': '0 0 25px -5px rgba(139, 92, 246, 0.2)',
        'neural-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(59, 130, 246, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neural-gradient': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'neural-subtle': 'linear-gradient(180deg, rgba(13, 18, 32, 0.8) 0%, rgba(7, 10, 18, 0.95) 100%)',
        'mesh': 'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.12) 0px, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glowPulse: {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
