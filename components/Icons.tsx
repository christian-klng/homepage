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

// Deutschland-Flagge als runde SVG-Komponente
const FlagGermany: React.FC<{ className?: string }> = ({ className }) => (
  <span className={`inline-block rounded-full overflow-hidden ${className}`}>
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <clipPath id="circleClipDE">
        <circle cx="8" cy="8" r="8" />
      </clipPath>
      <g clipPath="url(#circleClipDE)">
        <rect width="16" height="5.33" fill="#000000" />
        <rect y="5.33" width="16" height="5.33" fill="#DD0000" />
        <rect y="10.67" width="16" height="5.33" fill="#FFCC00" />
      </g>
    </svg>
  </span>
);

// Europa-Flagge als runde SVG-Komponente
const FlagEurope: React.FC<{ className?: string }> = ({ className }) => (
  <span className={`inline-block rounded-full overflow-hidden ${className}`}>
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <clipPath id="circleClipEU">
        <circle cx="8" cy="8" r="8" />
      </clipPath>
      <g clipPath="url(#circleClipEU)">
        <rect width="16" height="16" fill="#003399" />
        <g fill="#FFCC00" transform="translate(-4, 0)">
          <polygon points="12,2 12.3,2.9 13.2,2.9 12.5,3.4 12.7,4.3 12,3.8 11.3,4.3 11.5,3.4 10.8,2.9 11.7,2.9" />
          <polygon points="14.5,3.5 14.8,4.4 15.7,4.4 15,4.9 15.2,5.8 14.5,5.3 13.8,5.8 14,4.9 13.3,4.4 14.2,4.4" />
          <polygon points="15.5,6 15.8,6.9 16.7,6.9 16,7.4 16.2,8.3 15.5,7.8 14.8,8.3 15,7.4 14.3,6.9 15.2,6.9" />
          <polygon points="15.5,9 15.8,9.9 16.7,9.9 16,10.4 16.2,11.3 15.5,10.8 14.8,11.3 15,10.4 14.3,9.9 15.2,9.9" />
          <polygon points="14.5,11.5 14.8,12.4 15.7,12.4 15,12.9 15.2,13.8 14.5,13.3 13.8,13.8 14,12.9 13.3,12.4 14.2,12.4" />
          <polygon points="12,13 12.3,13.9 13.2,13.9 12.5,14.4 12.7,15.3 12,14.8 11.3,15.3 11.5,14.4 10.8,13.9 11.7,13.9" />
          <polygon points="9.5,11.5 9.8,12.4 10.7,12.4 10,12.9 10.2,13.8 9.5,13.3 8.8,13.8 9,12.9 8.3,12.4 9.2,12.4" />
          <polygon points="8.5,9 8.8,9.9 9.7,9.9 9,10.4 9.2,11.3 8.5,10.8 7.8,11.3 8,10.4 7.3,9.9 8.2,9.9" />
          <polygon points="8.5,6 8.8,6.9 9.7,6.9 9,7.4 9.2,8.3 8.5,7.8 7.8,8.3 8,7.4 7.3,6.9 8.2,6.9" />
          <polygon points="9.5,3.5 9.8,4.4 10.7,4.4 10,4.9 10.2,5.8 9.5,5.3 8.8,5.8 9,4.9 8.3,4.4 9.2,4.4" />
        </g>
      </g>
    </svg>
  </span>
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
