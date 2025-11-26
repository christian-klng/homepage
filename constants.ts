import { Agent } from './types';
import { loadAgentsFromGlob } from './lib/agentLoader';

/**
 * Load all agent MDX files using Vite's glob import.
 * The `as: 'raw'` option imports the files as raw strings.
 * The `eager: true` option loads them synchronously at build time.
 */
const agentModules = import.meta.glob('./agents/*.mdx', { 
  query: '?raw',
  import: 'default',
  eager: true 
}) as Record<string, string>;

/**
 * All agents loaded from MDX files with parsed metadata and content.
 */
export const AGENTS_DATA: Agent[] = loadAgentsFromGlob(agentModules);

/**
 * Navigation links for the header.
 */
export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#company' },
];
