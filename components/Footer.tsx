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
            <span className="font-bold text-gray-900">Human in the Loop</span>
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
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <span>© 2024 Human in the Loop. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/impressum" className="hover:text-gray-600">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
