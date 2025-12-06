import React from 'react';
import { StaticPageHeader } from '../components/StaticPageHeader';
import { Footer } from '../components/Footer';

export const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <StaticPageHeader />

      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. 
                Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen 
                Bestimmungen (DSGVO, TKG 2003).
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                1. Verantwortlicher
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                [Firmenname]<br />
                [Straße und Hausnummer]<br />
                [PLZ und Ort]<br />
                E-Mail: [E-Mail-Adresse]
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. 
                Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, 
                das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                3. Zweck der Datenverarbeitung
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Die Verarbeitung personenbezogener Daten erfolgt zur Bereitstellung unserer 
                Website und deren Inhalte, zur Gewährleistung der Sicherheit unserer 
                informationstechnischen Systeme sowie zur Optimierung unseres Angebots.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                4. Rechtsgrundlage
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO 
                (berechtigtes Interesse). Unser berechtigtes Interesse besteht in der 
                Bereitstellung unserer Website und der Verbesserung unserer Angebote.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                5. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser 
                auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot 
                nutzerfreundlicher und effektiver zu gestalten.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                6. Ihre Rechte
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung 
                der Verarbeitung Ihrer personenbezogenen Daten. Sie haben zudem das Recht, 
                der Datenverarbeitung zu widersprechen sowie das Recht auf Datenübertragbarkeit.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                7. Kontakt bei Datenschutzfragen
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, 
                bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich 
                bitte an die im Impressum genannte Adresse.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                8. Änderung der Datenschutzerklärung
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets 
                den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
                Leistungen in der Datenschutzerklärung umzusetzen.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
