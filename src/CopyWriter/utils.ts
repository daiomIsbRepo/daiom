import { ButtonTheme } from './types';

export const getCRMChannelTheme = (channel: string): {
  primary: string;
  hover: string;
  text: string;
  buttonClassName: string;
} => {
  switch (channel) {
    case 'whatsapp':
      return {
        primary: '#25D366',
        hover: '#128C7E',
        text: '#075E54',
        buttonClassName: 'bg-[#25D366] hover:bg-[#128C7E]'
      };
    case 'sms':
      return {
        primary: '#0088cc',
        hover: '#006699',
        text: '#01579b',
        buttonClassName: 'bg-[#0088cc] hover:bg-[#006699]'
      };
    default:
      return {
        primary: '#145659',
        hover: '#0d3d3f',
        text: '#0a2425',
        buttonClassName: 'bg-[#145659] hover:bg-[#0d3d3f]'
      };
  }
};