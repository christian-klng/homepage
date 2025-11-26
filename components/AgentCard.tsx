import React from 'react';
import { Agent } from '../types';
import { Badge } from './Badge';
import { Icons } from './Icons';
import { motion } from 'framer-motion';

interface AgentCardProps {
  agent: Agent;
  onClick: (agent: Agent) => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-linear hover:shadow-linear-hover transition-all duration-200 cursor-pointer flex flex-col h-full"
      onClick={() => onClick(agent)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="relative">
          <img 
            src={agent.avatarUrl} 
            alt={agent.name} 
            className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm"
          />
        </div>
        <Badge status={agent.status} />
      </div>

      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-content transition-colors">
          {agent.name}
        </h3>
        <p className="text-sm font-medium text-primary-content/70">{agent.role}</p>
      </div>

      <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow">
        {agent.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {agent.capabilities.slice(0, 2).map((cap, idx) => (
          <span 
            key={idx} 
            className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs text-gray-600 font-medium"
          >
            {cap}
          </span>
        ))}
        {agent.capabilities.length > 2 && (
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs text-gray-400 font-medium">
            +{agent.capabilities.length - 2}
          </span>
        )}
      </div>
      
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Icons.ArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </motion.div>
  );
};