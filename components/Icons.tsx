import React from 'react';
import { 
  Terminal, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft,
  X, 
  Github, 
  Twitter, 
  CheckCircle2,
  Menu,
  Users,
  Search,
  Target,
  Network,
  Linkedin,
  Image
} from 'lucide-react';

// Platzhalter-Icon für Bilder
const ImagePlaceholder: React.FC<{ className?: string }> = ({ className }) => (
  <Image className={className} />
);

export const Icons = {
  Terminal,
  Cpu,
  Activity,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  X,
  Github,
  Twitter,
  CheckCircle2,
  Menu,
  Users,
  Search,
  Target,
  Network,
  Linkedin,
  ImagePlaceholder
};
