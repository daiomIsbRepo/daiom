import React from 'react';
import { MessagePreviewProps } from './types';

const StickyNotePreview: React.FC<MessagePreviewProps> = ({ message }) => {
  return (
    <div 
      className="relative p-6 rounded-lg shadow-md transform rotate-[0.5deg]"
      style={{
        backgroundColor: '#FFFFED',
        boxShadow: '3px 3px 8px rgba(0,0,0,0.15)',
        backgroundImage: 'linear-gradient(transparent 0px, transparent calc(100% - 1px), #e6e6a2 100%)',
        backgroundSize: '100% 24px'
      }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-16 h-4"
        style={{
          backgroundColor: '#FFFFED',
          boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
          clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)'
        }}
      />
      <div 
        className=" text-base leading-6 whitespace-pre-wrap"
        style={{ 
          color: '#2d2d2d',
          textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default StickyNotePreview;