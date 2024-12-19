import { useState } from 'react';
import { Channel } from '../types';
import { channelGuidelines, whatsappBestPractices, smsBestPractices } from '../data';

export const useChannel = () => {
  const [selectedChannel, setSelectedChannel] = useState<Channel>('whatsapp');

  const guidelines = channelGuidelines[selectedChannel];
  const practices = selectedChannel === 'whatsapp' ? whatsappBestPractices : smsBestPractices;

  return {
    selectedChannel,
    setSelectedChannel,
    guidelines,
    practices
  };
};