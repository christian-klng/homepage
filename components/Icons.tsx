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

// Deutschland-Flagge als SVG-Komponente
const FlagGermany: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="5.33" fill="#000000" />
    <rect y="5.33" width="24" height="5.33" fill="#DD0000" />
    <rect y="10.67" width="24" height="5.33" fill="#FFCC00" />
  </svg>
);

// Europa-Flagge als SVG-Komponente
const FlagEurope: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#003399" />
    {/* 12 Sterne im Kreis */}
    <g fill="#FFCC00">
      <polygon points="12,2 12.4,3.2 13.6,3.2 12.6,3.9 13,5.1 12,4.4 11,5.1 11.4,3.9 10.4,3.2 11.6,3.2" />
      <polygon points="15.1,2.9 15.5,4.1 16.7,4.1 15.7,4.8 16.1,6 15.1,5.3 14.1,6 14.5,4.8 13.5,4.1 14.7,4.1" />
      <polygon points="17.1,5.5 17.5,6.7 18.7,6.7 17.7,7.4 18.1,8.6 17.1,7.9 16.1,8.6 16.5,7.4 15.5,6.7 16.7,6.7" />
      <polygon points="17.1,9.5 17.5,10.7 18.7,10.7 17.7,11.4 18.1,12.6 17.1,11.9 16.1,12.6 16.5,11.4 15.5,10.7 16.7,10.7" />
      <polygon points="15.1,12.1 15.5,13.3 16.7,13.3 15.7,14 16.1,15.2 15.1,14.5 14.1,15.2 14.5,14 13.5,13.3 14.7,13.3" />
      <polygon points="12,13 12.4,14.2 13.6,14.2 12.6,14.9 13,16.1 12,15.4 11,16.1 11.4,14.9 10.4,14.2 11.6,14.2" />
      <polygon points="8.9,12.1 9.3,13.3 10.5,13.3 9.5,14 9.9,15.2 8.9,14.5 7.9,15.2 8.3,14 7.3,13.3 8.5,13.3" />
      <polygon points="6.9,9.5 7.3,10.7 8.5,10.7 7.5,11.4 7.9,12.6 6.9,11.9 5.9,12.6 6.3,11.4 5.3,10.7 6.5,10.7" />
      <polygon points="6.9,5.5 7.3,6.7 8.5,6.7 7.5,7.4 7.9,8.6 6.9,7.9 5.9,8.6 6.3,7.4 5.3,6.7 6.5,6.7" />
      <polygon points="8.9,2.9 9.3,4.1 10.5,4.1 9.5,4.8 9.9,6 8.9,5.3 7.9,6 8.3,4.8 7.3,4.1 8.5,4.1" />
    </g>
  </svg>
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
  ImagePlaceholder,
  FlagGermany,
  FlagEurope
};
