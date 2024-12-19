export * from './whatsapp';
export * from './sms';

export const channelGuidelines = {
  whatsapp: {
    title: 'WhatsApp Best Practices',
    description: 'Guidelines for effective WhatsApp business messaging',
    keyPoints: [
      'Personalize messages using customer data',
      'Use rich media when relevant',
      'Maintain a conversational tone',
      'Include clear call-to-actions',
      'Use business-appropriate emojis'
    ]
  },
  sms: {
    title: 'SMS Best Practices',
    description: 'Guidelines for effective SMS business messaging',
    keyPoints: [
      'Keep messages concise and focused',
      'Use clear and simple language',
      'Include one call-to-action per message',
      'Follow compliance requirements',
      'Respect timing and frequency limits'
    ]
  }
};