import React from 'react';
import { getCRMTheme } from '../../utils/theme';

interface CRMChannelSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const CRMChannelSelector: React.FC<CRMChannelSelectorProps> = ({ value, onChange }) => {
  const channels = [
    { id: 'whatsapp', label: 'Whatsapp' },
    { id: 'sms', label: 'SMS' }
  ];

  return (
    <div className="flex gap-4">
      {channels.map(channel => {
        const channelTheme = getCRMTheme(channel.id);
        return (
          <label key={channel.id} className="flex items-center cursor-pointer group">
            <input
              type="radio"
              name="crmChannel"
              value={channel.id}
              checked={value === channel.id}
              onChange={(e) => onChange(e.target.value)}
              className="mr-2"
              style={{ accentColor: channelTheme.primary }}
            />
            <span 
              className="transition-colors"
              style={{ color: value === channel.id ? channelTheme.primary : 'inherit' }}
            >
              {channel.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default CRMChannelSelector;