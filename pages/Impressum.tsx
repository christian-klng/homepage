import React from 'react';
import { StaticPageHeader } from '../components/StaticPageHeader';
import { Footer } from '../components/Footer';

export const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <StaticPageHeader />

      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                [Platzhalter: Hier steht der vollständige Impressumstext gemäß § 5 TMG. 
                Bitte ersetze diesen Text durch die rechtlich erforderlichen Angaben.]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                [Firmenname]<br />
                [Straße und Hausnummer]<br />
                [PLZ und Ort]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Vertreten durch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                [Name des Vertretungsberechtigten]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Kontakt
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Telefon: [Telefonnummer]<br />
                E-Mail: [E-Mail-Adresse]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Registereintrag
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eintragung im Handelsregister.<br />
                Registergericht: [Ort des Registergerichts]<br />
                Registernummer: [HRB-Nummer]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                [Name]<br />
                [Adresse]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Streitschlichtung
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                [Platzhalter: Haftungsausschluss für eigene Inhalte gemäß § 7 Abs. 1 TMG]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Haftung für Links
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                [Platzhalter: Haftungsausschluss für externe Links gemäß § 8 bis 10 TMG]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Urheberrecht
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                [Platzhalter: Hinweise zum Urheberrecht und zur Nutzung der Inhalte]
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
