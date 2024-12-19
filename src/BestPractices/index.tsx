import React from 'react';
import { Book } from 'lucide-react';
import ChannelSelector from './ChannelSelector';
import GuidelinesCard from './GuidelinesCard';
import PracticesList from './PracticesList';
import { useChannel } from './hooks/useChannel';

const BestPractices = () => {
  const { selectedChannel, setSelectedChannel, guidelines, practices } = useChannel();

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Book className="w-8 h-8 text-[#145659]" />
            <h1 className="text-2xl font-bold">Best Practices</h1>
          </div>
          <ChannelSelector 
            selectedChannel={selectedChannel}
            onChannelChange={setSelectedChannel}
          />
        </div>

        <GuidelinesCard guidelines={guidelines} />
        <PracticesList 
          practices={practices} 
          channel={selectedChannel}
        />
      </div>
    </div>
  );
};

export default BestPractices;