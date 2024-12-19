export type Channel = 'whatsapp' | 'sms';

export interface Guidelines {
  title: string;
  description: string;
  keyPoints: string[];
}

export interface PracticeItem {
  title: string;
  description: string;
  example: string;
}

export interface Practice {
  category: string;
  practices: PracticeItem[];
}