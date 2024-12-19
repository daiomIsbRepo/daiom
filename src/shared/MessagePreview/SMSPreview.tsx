import React from 'react';
import { MessagePreviewProps } from './types';
import { DEFAULT_TIME, SMS_STYLES } from './constants';

const SMSPreview: React.FC<MessagePreviewProps> = ({ 
  message, 
  time = DEFAULT_TIME 
}) => {
  return (
    <div className={SMS_STYLES.container}>
      <div className="flex justify-end">
        <div 
          className={SMS_STYLES.message}
          style={SMS_STYLES.bubble}
        >
          <div className="whitespace-pre-wrap text-sm leading-relaxed font-bold">
            {message}
          </div>
          <div className="text-right mt-1">
            <span className="text-[10px] opacity-80">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSPreview;