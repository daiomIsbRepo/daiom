export interface CRMTheme {
  primary: string;
  background: string;
  hover: string;
  border: string;
  text: string;
  pattern?: string;
}

export const getCRMTheme = (channel: string): CRMTheme => {
  switch (channel) {
    case 'whatsapp':
      return {
        primary: '#25D366',
        background: '#dcf8c6',
        hover: '#128C7E',
        border: '#25D366',
        text: '#075E54',
        pattern: 'https://i.ibb.co/VvC0vpN/medical-pattern.png'
      };
    case 'sms':
      return {
        primary: '#0088cc',
        background: '#e3f2fd',
        hover: '#006699',
        border: '#0088cc',
        text: '#01579b'
      };
    default:
      return {
        primary: '#145659',
        background: '#f0f9fa',
        hover: '#0d3d3f',
        border: '#145659',
        text: '#0a2425'
      };
  }
};