import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppPreview from './MessagePreview/WhatsAppPreview';
import SMSPreview from './MessagePreview/SMSPreview';

interface PracticeCardProps {
  title: string;
  description: string;
  example: string;
  channel: 'whatsapp' | 'sms';
}

const PracticeCard: React.FC<PracticeCardProps> = ({ 
  title, 
  description, 
  example,
  channel 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MessagePreview = channel === 'whatsapp' ? WhatsAppPreview : SMSPreview;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button 
        className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h4 className="font-medium">{title}</h4>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="p-4 border-t bg-gray-50">
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="bg-[#F7F7F7] p-4 rounded-lg border">
            <p className="text-sm font-medium text-gray-500 mb-3">Example:</p>
            <MessagePreview message={example} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeCard;