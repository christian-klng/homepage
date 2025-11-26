import React from 'react';

interface BadgeProps {
  status: 'online' | 'busy' | 'offline';
}

export const Badge: React.FC<BadgeProps> = ({ status }) => {
  const config = {
    online: { color: 'bg-emerald-500', label: 'Online', bg: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    busy: { color: 'bg-amber-500', label: 'Busy', bg: 'bg-amber-50 text-amber-700 border-amber-100' },
    offline: { color: 'bg-gray-400', label: 'Offline', bg: 'bg-gray-50 text-gray-600 border-gray-100' },
  };

  const current = config[status];

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${current.bg}`}>
      <span className={`relative flex h-2 w-2 mr-1.5`}>
        {status === 'online' && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${current.color}`}></span>
      </span>
      {current.label}
    </span>
  );
};