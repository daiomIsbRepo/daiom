import React from 'react';
import WhatsAppPreview from './MessagePreview/WhatsAppPreview';
import SMSPreview from './MessagePreview/SMSPreview';

interface MessagePreviewProps {
  message: string;
  channel: 'whatsapp' | 'sms';
}

const MessagePreview: React.FC<MessagePreviewProps> = ({ message, channel }) => {
  const Preview = channel === 'whatsapp' ? WhatsAppPreview : SMSPreview;
  return <Preview message={message} />;
};

export default MessagePreview;