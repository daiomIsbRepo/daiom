export const smsBestPractices = [
  {
    category: 'Message Format',
    practices: [
      {
        title: 'Character Limit',
        description: 'Keep messages within 160 characters for single SMS delivery',
        example: 'FLASH SALE! 30% off all shoes today only. Use code SHOES30. Shop now at bit.ly/shoesale'
      },
      {
        title: 'Clear CTA',
        description: 'Include one clear call-to-action per message',
        example: 'Your order #1234 is ready for pickup. Reply YES to confirm pickup today.'
      }
    ]
  },
  {
    category: 'Content Guidelines',
    practices: [
      {
        title: 'Abbreviations',
        description: 'Use standard abbreviations sparingly and only when necessary',
        example: 'Get 20% off w/code SAVE20. Valid til 3/31'
      },
      {
        title: 'Essential Information',
        description: 'Include only crucial details to maintain clarity',
        example: 'Appointment reminder: Dr. Smith, 3PM tomorrow. Reply C to cancel'
      }
    ]
  },
  {
    category: 'Compliance & Opt-out',
    practices: [
      {
        title: 'Opt-out Instructions',
        description: 'Include clear opt-out instructions in promotional messages',
        example: 'Shop spring collection at BRAND. 25% off w/code SPRING. Text STOP to opt out'
      },
      {
        title: 'Sender Identification',
        description: 'Always identify your business clearly',
        example: 'StyleCo: Your order has shipped! Track at bit.ly/track'
      }
    ]
  }
];