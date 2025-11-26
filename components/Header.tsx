import React, { useState } from 'react';
import { Icons } from './Icons';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icons.Cpu className="w-5 h-5 text-primary-content" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">Lumina</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call-to-Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Anmelden</a>
            <Button size="sm">Loslegen</Button>
          </div>

          {/* Mobile Menü Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 px-3">
              <Button className="w-full">Loslegen</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
