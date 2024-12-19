import React from 'react';
import WhatsAppPreview from './WhatsAppPreview';
import SMSPreview from './SMSPreview';
import StickyNotePreview from './StickyNotePreview';
import { Channel, Variant } from './types';

interface MessagePreviewProps {
  message: string;
  channel: Channel;
  variant?: Variant;
  time?: string;
}

const MessagePreview: React.FC<MessagePreviewProps> = ({ 
  message, 
  channel,
  variant = 'default',
  time 
}) => {
  if (variant === 'sticky-note') {
    return <StickyNotePreview message={message} />;
  }

  const Preview = channel === 'whatsapp' ? WhatsAppPreview : SMSPreview;
  return <Preview message={message} time={time} />;
};

export default MessagePreview;