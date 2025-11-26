import React, { useState } from 'react';
import { Header } from './components/Header';
import { AgentCard } from './components/AgentCard';
import { AgentDetailModal } from './components/AgentDetailModal';
import { Icons } from './components/Icons';
import { Button } from './components/Button';
import { AGENTS_DATA } from './constants';
import { Agent } from './types';
import { motion } from 'framer-motion';

function App() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Bereich */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-gray-600 bg-white border border-gray-200 mb-8 shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Lumina 2.0 ist jetzt verfügbar
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              >
                Intelligente Agenten für <br/>
                <span className="relative inline-block">
                  <span className="relative z-10">moderne Teams</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/40 -z-0"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed"
              >
                Automatisiere komplexe Arbeitsabläufe mit unserer Palette spezialisierter KI-Agenten.
                Entwickelt für Genauigkeit, Sicherheit und nahtlose Integration.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center gap-4"
              >
                <Button size="lg">Agenten entdecken</Button>
                <Button size="lg" variant="secondary">Dokumentation ansehen</Button>
              </motion.div>
            </div>
          </div>
          
          {/* Dekorative Hintergrund-Elemente */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </section>

        {/* Agenten-Übersicht */}
        <section id="agents" className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:flex md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Lerne deine neue Arbeitskraft kennen</h2>
                <p className="text-gray-500 text-lg">
                  Wähle einen Agenten aus, um seine spezifischen Fähigkeiten, Integrationsanleitungen und Dokumentation anzusehen.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="secondary" className="gap-2">
                   Alle anzeigen <Icons.ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AGENTS_DATA.map((agent) => (
                <AgentCard 
                  key={agent.id} 
                  agent={agent} 
                  onClick={setSelectedAgent}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Funktions-Vorschau */}
        <section className="py-24 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm mb-6">
                    <Icons.ShieldCheck className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Unternehmensstandard</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Entwickelt mit SOC2-Konformität im Fokus. Deine Daten sind im Ruhezustand und während der Übertragung verschlüsselt.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm mb-6">
                    <Icons.Activity className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Echtzeit-Lernen</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Agenten passen sich sofort an das Feedback deines Teams an und verbessern die Genauigkeit mit jeder Interaktion.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm mb-6">
                    <Icons.Terminal className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Entwickler-API</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vollständiger programmatischer Zugriff auf jeden Agenten über unsere REST- und GraphQL-APIs.
                  </p>
                </div>
             </div>
           </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Icons.Cpu className="w-3 h-3 text-primary-content" />
              </div>
              <span className="font-bold text-gray-900">Lumina AI</span>
            </div>
            <div className="flex gap-6 text-gray-500">
               <a href="#" className="hover:text-gray-900"><Icons.Twitter className="w-5 h-5"/></a>
               <a href="#" className="hover:text-gray-900"><Icons.Github className="w-5 h-5"/></a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left text-sm text-gray-400">
            © 2024 Lumina AI GmbH. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>

      {/* Modal-Ebene */}
      {selectedAgent && (
        <AgentDetailModal 
          agent={selectedAgent} 
          onClose={() => setSelectedAgent(null)} 
        />
      )}
    </div>
  );
}

export default App;
