// Validation utility functions
export const countWords = (text: string): number => {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

export const validateCopyLength = (text: string, minWords: number = 5): {
  isValid: boolean;
  error?: string;
} => {
  if (!text) {
    return {
      isValid: false,
      error: 'Please enter some text to evaluate'
    };
  }

  const wordCount = countWords(text);
  
  if (wordCount < minWords) {
    return {
      isValid: false,
      error: 'Too short to evaluate!'
    };
  }

  return {
    isValid: true
  };
};