# Human in the Loop - Homepage

Eine moderne, responsive Landing Page für Human in the Loop – die AI-Agent-Plattform für intelligentes Lead-Management.

## Technologie

- **React 19** mit TypeScript
- **Tailwind CSS** für Styling
- **Framer Motion** für Animationen
- **Lucide Icons** für Icons
- **Vite** als Build-Tool

## Struktur

```
homepage/
├── App.tsx              # Hauptkomponente mit allen Sektionen
├── index.tsx            # React-Einstiegspunkt
├── index.html           # HTML-Template
├── constants.ts         # Navigationslinks
├── components/
│   ├── Header.tsx       # Kopfzeile mit Navigation
│   ├── Button.tsx       # Wiederverwendbare Button-Komponente
│   └── Icons.tsx        # Icon-Sammlung
└── package.json
```

## Sektionen

1. **Hero** – Hauptüberschrift mit Call-to-Action
2. **Value Proposition** – Kernversprechen
3. **Features** – Die 5 Hauptfunktionen
4. **How it Works** – 3-Schritte-Prozess
5. **Trust** – DSGVO und Datenschutz
6. **Closing CTA** – Abschluss-Handlungsaufforderung

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Die Produktionsdateien werden im `dist/`-Verzeichnis erstellt.
