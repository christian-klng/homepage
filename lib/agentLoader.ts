import { Agent, AgentMetadata } from '../types';

/**
 * Parses MDX frontmatter from raw file content.
 * Frontmatter is YAML-like content between --- delimiters.
 */
function parseFrontmatter(content: string): { metadata: Record<string, any>; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    throw new Error('Invalid MDX format: Missing frontmatter');
  }

  const [, frontmatterStr, body] = match;
  const metadata: Record<string, any> = {};

  // Parse YAML-like frontmatter
  const lines = frontmatterStr.split('\n');
  let currentKey: string | null = null;
  let isArray = false;

  for (const line of lines) {
    const trimmed = line.trim();
    
    // Check for array item
    if (trimmed.startsWith('- ') && currentKey) {
      if (!metadata[currentKey]) {
        metadata[currentKey] = [];
      }
      metadata[currentKey].push(trimmed.slice(2).trim());
      continue;
    }

    // Check for key-value pair
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      
      currentKey = key;
      
      if (value === '') {
        // Empty value indicates upcoming array or nested object
        isArray = true;
      } else {
        metadata[key] = value;
        isArray = false;
      }
    }
  }

  return { metadata, body: body.trim() };
}

/**
 * Converts parsed metadata into a typed Agent object.
 */
function metadataToAgent(metadata: Record<string, any>, body: string): Agent {
  return {
    id: metadata.id,
    name: metadata.name,
    role: metadata.role,
    description: metadata.description,
    avatarUrl: metadata.avatarUrl,
    status: metadata.status as 'online' | 'busy' | 'offline',
    capabilities: metadata.capabilities || [],
    content: body,
  };
}

/**
 * Loads a single agent from MDX content string.
 */
export function loadAgentFromMdx(mdxContent: string): Agent {
  const { metadata, body } = parseFrontmatter(mdxContent);
  return metadataToAgent(metadata, body);
}

/**
 * Type for the Vite glob import of MDX files.
 */
type MdxModule = {
  default: string;
};

/**
 * Loads all agents from the agents directory using Vite's glob import.
 * Usage in your app:
 * 
 * const agentModules = import.meta.glob('../agents/*.mdx', { as: 'raw', eager: true });
 * const agents = loadAgentsFromGlob(agentModules);
 */
export function loadAgentsFromGlob(modules: Record<string, string>): Agent[] {
  const agents: Agent[] = [];

  for (const path in modules) {
    const content = modules[path];
    try {
      const agent = loadAgentFromMdx(content);
      agents.push(agent);
    } catch (error) {
      console.error(`Failed to parse agent from ${path}:`, error);
    }
  }

  // Sort by ID for consistent ordering
  return agents.sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Gets just the metadata (without content) for listing views.
 */
export function getAgentMetadata(agent: Agent): AgentMetadata {
  const { content, ...metadata } = agent;
  return metadata;
}
