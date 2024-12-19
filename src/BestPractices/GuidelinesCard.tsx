import React from 'react';
import { Guidelines } from './types';

interface GuidelinesCardProps {
  guidelines: Guidelines;
}

const GuidelinesCard: React.FC<GuidelinesCardProps> = ({ guidelines }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">{guidelines.title}</h2>
      <p className="text-gray-600 mb-4">{guidelines.description}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {guidelines.keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuidelinesCard;