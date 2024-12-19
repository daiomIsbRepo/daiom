import React from 'react';
import { Book } from 'lucide-react';
import { whatsappBestPractices, smsBestPractices, channelGuidelines } from './bestPractices';
import PracticeCard from './PracticeCard';

const BestPracticesSection = () => {
  const [selectedChannel, setSelectedChannel] = React.useState<'whatsapp' | 'sms'>('whatsapp');

  const practices = selectedChannel === 'whatsapp' ? whatsappBestPractices : smsBestPractices;
  const guidelines = channelGuidelines[selectedChannel];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Book className="w-6 h-6 text-[#145659]" />
          <h2 className="text-xl font-semibold">Copywriting Best Practices</h2>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedChannel('whatsapp')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedChannel === 'whatsapp'
                ? 'bg-[#25D366] text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            WhatsApp
          </button>
          <button
            onClick={() => setSelectedChannel('sms')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedChannel === 'sms'
                ? 'bg-[#0088cc] text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            SMS
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-semibold mb-4">{guidelines.title}</h3>
        <p className="text-gray-600 mb-4">{guidelines.description}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {guidelines.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="grid gap-8">
        {practices.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {category.practices.map((practice, practiceIndex) => (
                <PracticeCard
                  key={practiceIndex}
                  title={practice.title}
                  description={practice.description}
                  example={practice.example}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPracticesSection;