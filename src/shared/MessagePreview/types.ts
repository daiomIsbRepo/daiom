export type Channel = 'whatsapp' | 'sms';
export type Variant = 'default' | 'sticky-note';

export interface MessagePreviewProps {
  message: string;
  time?: string;
  variant?: Variant;
}

export interface MessageStyles {
  container: string;
  message: string;
  bubble: {
    [key: string]: string;
  };
}