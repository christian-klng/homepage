import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import logoImage from '../cube_logo_mini.png';

interface ChatMessage {
  id: number;
  text: string;
  delay: number;
}

const messages: ChatMessage[] = [
  {
    id: 1,
    text: "Ich habe 12 qualifizierte Leads in deinem LinkedIn-Netzwerk gefunden, die zu deinem Ideal-Kundenprofil passen.",
    delay: 0.5
  },
  {
    id: 2,
    text: "Soll ich die Kontakte priorisieren und eine Ansprache-Strategie vorbereiten?",
    delay: 2.5
  }
];

export const AIChatDemo: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    messages.forEach((message) => {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, message.id]);
      }, message.delay * 1000);

      return () => clearTimeout(timer);
    });
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      {/* Chat-Fenster */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Fenster-Kopfzeile */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-sm font-medium text-gray-600">Lead-Agent</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Chat-Bereich */}
        <div className="p-4 min-h-[280px] bg-gray-50/50">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start gap-3">
                {/* Agent-Avatar mit Unternehmens-Logo */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img src={logoImage} alt="KI-Agent" className="w-5 h-5 object-contain" />
                </div>

                {/* Nachricht */}
                {visibleMessages.includes(message.id) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex-1 bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100"
                  >
                    <p className="text-gray-700 text-sm leading-relaxed">{message.text}</p>
                  </motion.div>
                ) : (
                  isInView && (
                    <div className="flex-1 bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
                      <TypingIndicator />
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Eingabefeld (deaktiviert, nur zur Darstellung) */}
        <div className="border-t border-gray-200 p-3 bg-white">
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
              <span className="text-gray-400 text-sm">Nachricht eingeben...</span>
            </div>
            <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dekorative Elemente */}
      <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-primary/5 rounded-2xl"></div>
    </div>
  );
};

const TypingIndicator: React.FC = () => (
  <div className="flex items-center gap-1">
    <motion.div
      className="w-2 h-2 bg-gray-400 rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
    />
    <motion.div
      className="w-2 h-2 bg-gray-400 rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
    />
    <motion.div
      className="w-2 h-2 bg-gray-400 rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
    />
  </div>
);

export default AIChatDemo;
