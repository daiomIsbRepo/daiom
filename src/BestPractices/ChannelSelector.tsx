import React from 'react';
import { Channel } from './types';

interface ChannelSelectorProps {
  selectedChannel: Channel;
  onChannelChange: (channel: Channel) => void;
}

const ChannelSelector: React.FC<ChannelSelectorProps> = ({ 
  selectedChannel, 
  onChannelChange 
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => onChannelChange('whatsapp')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          selectedChannel === 'whatsapp'
            ? 'bg-[#25D366] text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        WhatsApp
      </button>
      <button
        onClick={() => onChannelChange('sms')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          selectedChannel === 'sms'
            ? 'bg-[#0088cc] text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        SMS
      </button>
    </div>
  );
};

export default ChannelSelector;