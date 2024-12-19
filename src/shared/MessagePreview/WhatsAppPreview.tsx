import React from 'react';
import { Check } from 'lucide-react';
import { MessagePreviewProps } from './types';
import { DEFAULT_TIME, WHATSAPP_STYLES } from './constants';

const WhatsAppPreview: React.FC<MessagePreviewProps> = ({ 
  message, 
  time = DEFAULT_TIME 
}) => {
  return (
    <div className={WHATSAPP_STYLES.container}>
      <div 
        className={WHATSAPP_STYLES.message}
        style={WHATSAPP_STYLES.bubble}
      >
        <div className="text-[#303030] whitespace-pre-wrap text-sm leading-relaxed">
          {message}
        </div>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[10px] text-gray-500">{time}</span>
          <div className="flex">
            <Check className="w-3 h-3 text-[#53bdeb]" />
            <Check className="w-3 h-3 text-[#53bdeb] -ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPreview;