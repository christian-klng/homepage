import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Agent } from '../types';
import { Icons } from './Icons';
import { Badge } from './Badge';
import { MarkdownRenderer } from './MarkdownRenderer';
import { Button } from './Button';

interface AgentDetailModalProps {
  agent: Agent | null;
  onClose: () => void;
}

export const AgentDetailModal: React.FC<AgentDetailModalProps> = ({ agent, onClose }) => {
  // Kein Agent ausgewählt? Nichts anzeigen
  if (!agent) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Hintergrund-Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity"
        />

        {/* Modal-Inhalt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Kopfzeile */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <img 
                src={agent.avatarUrl} 
                alt={agent.name} 
                className="w-12 h-12 rounded-full border border-gray-100"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">{agent.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500">{agent.role}</span>
                  <Badge status={agent.status} />
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Schließen"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollbarer Inhalt */}
          <div className="overflow-y-auto p-6 sm:p-8">
            <div className="max-w-none">
              <MarkdownRenderer content={agent.content} />
            </div>
          </div>

          {/* Fußzeile mit Aktionen */}
          <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
             <Button variant="secondary" onClick={onClose}>Schließen</Button>
             <Button>{agent.name} bereitstellen</Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
