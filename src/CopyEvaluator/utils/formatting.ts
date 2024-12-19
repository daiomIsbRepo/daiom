import { TextFormat } from '../types';

export const getFormattedText = (text: string, format: TextFormat): string => {
  let formattedText = text;

  if (format.bold) formattedText = `**${formattedText}**`;
  if (format.italic) formattedText = `*${formattedText}*`;
  if (format.underline) formattedText = `__${formattedText}__`;

  const lines = formattedText.split('\n');
  const alignedLines = lines.map(line => {
    switch (format.alignment) {
      case 'center':
        return `:center:${line}`;
      case 'right':
        return `:right:${line}`;
      default:
        return line;
    }
  });

  return alignedLines.join('\n');
};