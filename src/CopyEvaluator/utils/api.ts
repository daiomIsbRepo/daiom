import { TextFormat } from '../types';
import { getFormattedText } from './formatting';

export const evaluateCopy = async (copyText: string, crmChannel: string, textFormat: TextFormat) => {
  const formattedText = getFormattedText(copyText, textFormat);
  
  const response = await fetch('https://4hxh76qgti.execute-api.ap-south-1.amazonaws.com/dev/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      uinput: formattedText,
      tool: 'Evaluator',
      crmChannel,
      textFormat
    })
  });

  if (!response.ok) {
    throw new Error('Failed to evaluate copy');
  }

  const data = await response.json();
  return {
    response: data.response || 'No feedback available',
    rating: data.rating || '',
    rulesViolated: data.rulesViolated || 'No rules violated'
  };
};