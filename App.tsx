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
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              >
                Deine KI-Agenten für{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">intelligentes Lead-Management</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/40 -z-0"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed"
              >
                KI-Agenten reduzieren deinen Aufwand in der Neukundenakquise – von der Lead-Recherche 
                bis zur CRM-Pflege. Bleib im Zentrum des Prozesses, während die KI die Arbeit übernimmt.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center gap-4"
              >
                <Button size="lg">Kontakt aufnehmen</Button>
                <Button size="lg" variant="secondary">Dokumentation</Button>
              </motion.div>
            </div>
          </div>
          
          {/* Dekorative Hintergrund-Elemente */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="value" className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Mehr Leads. Weniger Aufwand.{' '}
                  <span className="text-primary">Smarter wachsen.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Schluss mit manueller Recherche und Excel-Listen. Unsere AI-Agenten analysieren 
                  dein Netzwerk, finden qualifizierte Leads und halten deine Dokumentation automatisch 
                  aktuell – während du die Kontrolle behältst.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                {/* Platzhalter für Bild */}
                <div className="aspect-video bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Icons.ImagePlaceholder className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Bild-Platzhalter</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Unsere Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Drei leistungsstarke Module für dein Lead-Management
              </p>
            </div>

            <div className="space-y-24">
              {/* Feature 1: Netzwerk-Intelligenz */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 lg:order-1">
                  {/* Platzhalter für Bild */}
                  <div className="aspect-video bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center shadow-sm">
                    <div className="text-center text-gray-400">
                      <Icons.ImagePlaceholder className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">Bild-Platzhalter</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/10 mb-4">
                    <Icons.Network className="w-4 h-4 mr-2" />
                    Netzwerk-Intelligenz
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Entdecke verborgenes Potenzial in deinem LinkedIn-Netzwerk
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Analysiere automatisch deine bestehenden Kontakte und identifiziere 
                    die wertvollsten Leads für dein Business.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2: Automatisierte Lead-Recherche */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/10 mb-4">
                    <Icons.Search className="w-4 h-4 mr-2" />
                    Automatisierte Lead-Recherche
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Finde die richtigen Ansprechpartner – nicht irgendwelche
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unsere AI durchsucht das Web nach passenden Unternehmen und Kontakten 
                    basierend auf deinem idealen Kundenprofil.
                  </p>
                </div>
                <div>
                  {/* Platzhalter für Bild */}
                  <div className="aspect-video bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center shadow-sm">
                    <div className="text-center text-gray-400">
                      <Icons.ImagePlaceholder className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">Bild-Platzhalter</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3: Zentrale Marketing-Intelligenz */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 lg:order-1">
                  {/* Platzhalter für Bild */}
                  <div className="aspect-video bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center shadow-sm">
                    <div className="text-center text-gray-400">
                      <Icons.ImagePlaceholder className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">Bild-Platzhalter</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/10 mb-4">
                    <Icons.Target className="w-4 h-4 mr-2" />
                    Zentrale Marketing-Intelligenz
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Eine zentrale Strategie für dein Unternehmen
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Erstelle eine zentrale Dokumentation, die automatisch zur Validierung 
                    und Qualifizierung jedes Leads herangezogen wird.
                  </p>
                </div>
              </motion.div>
            </div>
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
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icons.Users className="w-4 h-4 text-primary-content" />
              </div>
              <span className="font-bold text-gray-900">Human in the Loop</span>
            </div>
            <div className="flex gap-6 text-gray-500">
               <a href="#" className="hover:text-gray-900"><Icons.Twitter className="w-5 h-5"/></a>
               <a href="#" className="hover:text-gray-900"><Icons.Linkedin className="w-5 h-5"/></a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left text-sm text-gray-400">
            © 2024 Human in the Loop. Alle Rechte vorbehalten.
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
