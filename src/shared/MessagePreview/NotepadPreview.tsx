import React from 'react';
import { MessagePreviewProps } from './types';

const NotepadPreview: React.FC<MessagePreviewProps> = ({ message }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 border-b flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <span className="text-sm text-gray-500 font-medium">Message Preview</span>
      </div>
      <div 
        className="p-4 font-mono text-sm whitespace-pre-wrap"
        style={{ 
          backgroundColor: '#FFFFFF',
          lineHeight: '1.6',
          minHeight: '200px'
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default NotepadPreview;