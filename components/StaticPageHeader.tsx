import React from 'react';
import { Icons } from './Icons';
import logoImage from '../cube_logo_mini.png';

export const StaticPageHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Human in the Loop Logo" className="w-8 h-8" />
            <span className="text-lg font-bold tracking-tight text-gray-900">Human in the Loop</span>
          </a>

          {/* Zurück-Link */}
          <nav>
            <a 
              href="/" 
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Icons.ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
