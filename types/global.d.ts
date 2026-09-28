import * as React from 'react';

declare module 'lucide-react' {
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }
  export type LucideIcon = React.FC<LucideProps>;
  export const ArrowRight: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const FileText: LucideIcon;
  export const Terminal: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Cpu: LucideIcon;
  export const Eye: LucideIcon;
  export const Workflow: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Github: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Mail: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const FlaskConical: LucideIcon;
  export const Wrench: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Filter: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Calendar: LucideIcon;
  export const MapPin: LucideIcon;
  export const Copy: LucideIcon;
  export const Check: LucideIcon;
  export const Send: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const Layers: LucideIcon;
  export const Loader2: LucideIcon;
  export const BrainCircuit: LucideIcon;
  export const Server: LucideIcon;
  export const Layout: LucideIcon;
  export const Clock: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const MessageSquareCode: LucideIcon;
  export const Search: LucideIcon;
  export const Download: LucideIcon;
  export const Code2: LucideIcon;
  export const Award: LucideIcon;
  export const Share2: LucideIcon;
  export const Heart: LucideIcon;
  const icons: Record<string, LucideIcon>;
  export default icons;
}
