import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PracticeCardProps {
  title: string;
  description: string;
  example: string;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ title, description, example }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div 
        className="p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h4 className="font-medium">{title}</h4>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </div>
      
      {isExpanded && (
        <div className="p-4 border-t bg-gray-50">
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm font-medium text-gray-500 mb-2">Example:</p>
            <p className="text-gray-800">{example}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeCard;