export interface AgentMetadata {
  id: string;
  name: string;
  role: string;
  description: string;
  avatarUrl: string;
  status: 'online' | 'busy' | 'offline';
  capabilities: string[];
}

export interface Agent extends AgentMetadata {
  content: string; // This simulates the MDX body content
}

export enum ViewState {
  LIST = 'LIST',
  DETAIL = 'DETAIL'
}
