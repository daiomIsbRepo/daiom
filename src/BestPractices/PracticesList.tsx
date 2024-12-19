import React from 'react';
import MessagePreview from './MessagePreview';
import { Practice } from './types';

interface PracticesListProps {
  practices: Practice[];
  channel: 'whatsapp' | 'sms';
}

const PracticesList: React.FC<PracticesListProps> = ({ practices, channel }) => {
  return (
    <div className="grid gap-8">
      {practices.map((category, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {category.practices.map((practice, practiceIndex) => (
              <div key={practiceIndex} className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <h4 className="font-medium text-lg mb-2">{practice.title}</h4>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-3">Example:</p>
                  <MessagePreview 
                    message={practice.example}
                    channel={channel}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticesList;