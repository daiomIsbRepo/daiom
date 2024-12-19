import React from 'react';
import { CTASelectorProps } from './types';

const CTASelector: React.FC<CTASelectorProps> = ({ value, onChange, theme }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Call To Action (CTA)
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your call to action text..."
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors"
        style={{ 
          borderColor: theme.border,
          '--tw-ring-color': theme.primary
        } as React.CSSProperties}
      />
    </div>
  );
};

export default CTASelector;