// Message formatting utilities
export const formatMessage = (text: string): string => {
  if (!text) return '';
  return text.split('\\n').map(line => line.trim()).join('\n');
};

export const validateMessage = (text: string): boolean => {
  if (!text) return false;
  return text.trim().length > 0;
};

export const truncateMessage = (text: string, limit: number): string => {
  if (!text) return '';
  if (text.length <= limit) return text;
  return text.substring(0, limit - 3) + '...';
};

export const countWords = (text: string): number => {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
};