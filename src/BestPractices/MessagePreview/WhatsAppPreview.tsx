import React from 'react';
import { Check } from 'lucide-react';

interface WhatsAppPreviewProps {
  message: string;
  time?: string;
}

const WhatsAppPreview: React.FC<WhatsAppPreviewProps> = ({ 
  message, 
  time = '10:30 AM'
}) => {
  return (
    <div className="max-w-sm bg-[#E5DDD5] rounded-lg p-4">
      <div 
        className="bg-white rounded-lg p-3 relative ml-4"
        style={{
          borderRadius: '7px 7px 7px 0',
          maxWidth: '85%',
          boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
        }}
      >
        <div className="text-[#303030] whitespace-pre-wrap text-sm leading-relaxed">{message}</div>
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