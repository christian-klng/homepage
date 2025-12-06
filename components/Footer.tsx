import React from 'react';
import { Icons } from './Icons';
import logoImage from '../cube_logo_mini.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src={logoImage} alt="Human in the Loop Logo" className="w-8 h-8" />
            <span className="font-semibold text-gray-900">Human in the Loop</span>
          </div>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-gray-900">
              <Icons.Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-900">
              <Icons.Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400">
          {/* Linke Seite: Badges untereinander */}
          <div className="flex flex-col gap-2 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span>Made in Germany</span>
              <span>🇩🇪</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Gehostet in Europa</span>
              <span>🇪🇺</span>
            </div>
          </div>

          {/* Rechte Seite: Links */}
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-gray-600">Impressum</a>
            <a href="/datenschutz" className="hover:text-gray-600">Datenschutz</a>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          <span>© 2024 Human in the Loop. Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  );
};
