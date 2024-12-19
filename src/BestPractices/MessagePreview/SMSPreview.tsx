import React from 'react';

interface SMSPreviewProps {
  message: string;
  time?: string;
}

const SMSPreview: React.FC<SMSPreviewProps> = ({ 
  message, 
  time = '10:30 AM'
}) => {
  return (
    <div className="max-w-sm bg-[#F6F6F6] rounded-lg p-4">
      <div className="flex justify-end">
        <div 
          className="bg-[#34B7F1] text-white rounded-[22px] p-3 relative"
          style={{
            maxWidth: '85%',
            borderRadius: '22px 22px 3px 22px',
            boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
          }}
        >
          <div className="whitespace-pre-wrap text-sm leading-relaxed">{message}</div>
          <div className="text-right mt-1">
            <span className="text-[10px] opacity-80">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSPreview;