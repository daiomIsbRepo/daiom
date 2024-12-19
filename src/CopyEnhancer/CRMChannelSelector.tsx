import React from 'react';
import { getCRMTheme } from './theme';

interface CRMChannelSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const CRMChannelSelector: React.FC<CRMChannelSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Select your CRM Channel</label>
      <div className="flex gap-4">
        {['whatsapp', 'sms'].map(channel => {
          const theme = getCRMTheme(channel);
          return (
            <label key={channel} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="crmChannel"
                value={channel}
                checked={value === channel}
                onChange={(e) => onChange(e.target.value)}
                className="mr-2"
                style={{ accentColor: theme.primary }}
              />
              <span 
                className="capitalize transition-colors"
                style={{ color: value === channel ? theme.primary : 'inherit' }}
              >
                {channel}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CRMChannelSelector;