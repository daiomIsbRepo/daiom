import { useState } from 'react';
import { getCRMTheme } from '../utils/theme';

type Channel = 'whatsapp' | 'sms';

export const useChannel = (initialChannel: Channel = 'whatsapp') => {
  const [channel, setChannel] = useState<Channel>(initialChannel);
  const theme = getCRMTheme(channel);

  const toggleChannel = () => {
    setChannel(prev => prev === 'whatsapp' ? 'sms' : 'whatsapp');
  };

  return {
    channel,
    theme,
    setChannel,
    toggleChannel
  };
};