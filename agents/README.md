# Agent MDX Files

This folder contains MDX files for each AI agent. Each file combines YAML frontmatter (metadata) with Markdown content.

## File Structure

```
agents/
├── README.md       # This file
├── atlas.mdx       # Data Architect agent
├── kora.mdx        # Creative Copywriter agent
├── nexus.mdx       # System Orchestrator agent
└── vesper.mdx      # Security Sentinel agent
```

## MDX Format

Each agent file follows this structure:

```mdx
---
id: agent-001
name: Agent Name
role: Agent Role
description: Short description for cards
avatarUrl: https://example.com/avatar.jpg
status: online | busy | offline
capabilities:
  - Capability 1
  - Capability 2
  - Capability 3
---

# Full Markdown Content

Your detailed agent documentation goes here...
```

## Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (e.g., `agent-001`) |
| `name` | string | Display name of the agent |
| `role` | string | Agent's role/title |
| `description` | string | Short description for card preview |
| `avatarUrl` | string | URL to agent's avatar image |
| `status` | enum | Current status: `online`, `busy`, or `offline` |
| `capabilities` | array | List of agent capabilities (shown as tags) |

## Adding a New Agent

1. Create a new `.mdx` file in this folder (e.g., `newagent.mdx`)
2. Add the required frontmatter fields
3. Write your Markdown content below the frontmatter
4. The agent will be automatically loaded by the app

## Usage in Code

The agents are loaded automatically using Vite's glob import:

```typescript
import { AGENTS_DATA } from './constants';

// AGENTS_DATA is an array of Agent objects
// Each agent has all frontmatter fields plus a `content` field
// containing the Markdown body
```

## Content Guidelines

- Use Markdown headers (`#`, `##`, `###`) to structure content
- Code examples should use fenced code blocks with language hints
- Keep descriptions concise for the card view
- Detailed information belongs in the Markdown body
