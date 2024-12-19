import emailjs from '@emailjs/browser';

export const sendFeedback = async (satisfaction: number, feedback: string) => {
  return emailjs.send(
    'service_igeqnlq',
    'template_2x1nx5n',
    {
      satisfaction_level: satisfaction,
      feedback: feedback,
      to_email: 'dev@daiom.in'
    },
    'FZOgN0-XLwta8EBt6'
  );
};