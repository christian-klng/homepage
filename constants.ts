import { Agent } from './types';

// In a real application, these would be parsed from .mdx files in an 'agents' directory.
// We are simulating the "Frontmatter" (metadata) and the "Body" (content).

export const AGENTS_DATA: Agent[] = [
  {
    id: 'agent-001',
    name: 'Atlas',
    role: 'Data Architect',
    description: 'Specializes in structuring complex datasets and generating actionable insights from unstructured data lakes.',
    avatarUrl: 'https://picsum.photos/id/64/200/200',
    status: 'online',
    capabilities: ['Data Mining', 'SQL Generation', 'Trend Analysis'],
    content: `
# About Atlas

Atlas is designed to be the backbone of your data infrastructure. Unlike traditional ETL tools, Atlas uses semantic understanding to link disparate data sources.

## Core Competencies

*   **Schema Inference**: Automatically detects relationships between tables.
*   **Query Optimization**: Rewrites SQL queries for 10x performance improvements.
*   **Anomaly Detection**: Real-time monitoring of data quality streams.

## Integration Guide

To integrate Atlas into your pipeline, simply provide read-access credentials. Atlas operates in a read-only mode by default to ensure data integrity.

\`\`\`typescript
const atlas = new Agent('atlas-core');
await atlas.connect({ source: 'snowflake' });
\`\`\`
    `
  },
  {
    id: 'agent-002',
    name: 'Kora',
    role: 'Creative Copywriter',
    description: 'An imaginative agent capable of drafting marketing copy, blog posts, and technical documentation with a human touch.',
    avatarUrl: 'https://picsum.photos/id/338/200/200',
    status: 'online',
    capabilities: ['SEO Writing', 'Technical Docs', 'Social Media'],
    content: `
# Meet Kora

Kora isn't just a text generator; she is a style-adaptive creative partner. She learns your brand voice within 3 interactions and maintains consistency across all channels.

## Tone & Style

Kora can switch modes instantly:
1.  **Professional**: Concise, authoritative, and clean.
2.  **Playful**: Witty, engaging, and emoji-friendly.
3.  **Technical**: Precise, detailed, and structured.

## Recent Updates (v2.4)

*   Added support for multi-language localization.
*   Improved context window for long-form novel writing.
    `
  },
  {
    id: 'agent-003',
    name: 'Nexus',
    role: 'System Orchestrator',
    description: 'Manages API integrations and automates workflows between your SaaS tools.',
    avatarUrl: 'https://picsum.photos/id/823/200/200',
    status: 'busy',
    capabilities: ['Workflow Auto', 'API Management', 'Error Handling'],
    content: `
# Nexus System Overview

Nexus acts as the glue between your software stack. If Zapier had a PhD in Computer Science, it would be Nexus.

## How it works

Nexus listens to webhooks and triggers complex, multi-step logic chains. It can handle conditional branching, loops, and retries natively.

> "Nexus reduced our operational overhead by 40% in the first week." - *CTO at TechFlow*

## Security

*   SOC2 Compliant
*   End-to-End Encryption
*   Self-hosted options available
    `
  },
  {
    id: 'agent-004',
    name: 'Vesper',
    role: 'Security Sentinel',
    description: '24/7 cybersecurity monitoring agent that detects vulnerabilities and prevents unauthorized access attempts.',
    avatarUrl: 'https://picsum.photos/id/433/200/200',
    status: 'offline',
    capabilities: ['Threat Detection', 'Log Analysis', 'Access Control'],
    content: `
# Vesper Security Protocols

Vesper runs silently in the background of your infrastructure, analyzing traffic patterns for malicious intent.

## Detection Engine

Vesper uses a proprietary behavioral model to identify zero-day threats that signature-based antivirus software misses.

## Incident Response

In the event of a breach, Vesper can:
1.  Isolate compromised nodes.
2.  Revoke API keys.
3.  Generate a forensic report for your security team.
    `
  }
];

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#company' },
];
