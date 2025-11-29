import { Agent } from './types';
import { loadAgentsFromGlob } from './lib/agentLoader';

/**
 * Lädt alle Agenten-MDX-Dateien mithilfe von Vites Glob-Import.
 * Die Option `as: 'raw'` importiert die Dateien als reine Strings.
 * Die Option `eager: true` lädt sie synchron zur Build-Zeit.
 */
const agentModules = import.meta.glob('./agents/*.mdx', { 
  query: '?raw',
  import: 'default',
  eager: true 
}) as Record<string, string>;

/**
 * Alle Agenten, die aus MDX-Dateien mit geparsten Metadaten und Inhalten geladen wurden.
 */
export const AGENTS_DATA: Agent[] = loadAgentsFromGlob(agentModules);

/**
 * Navigationslinks für die Kopfzeile.
 */
export const NAV_LINKS = [
  { label: 'Vorteile', href: '#value' },
  { label: 'Features', href: '#features' },
  { label: 'Agenten', href: '#agents' },
];
