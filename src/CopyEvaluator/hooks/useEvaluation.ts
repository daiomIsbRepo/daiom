import { useState } from 'react';
import { evaluateCopy } from '../utils/api';
import { TextFormat } from '../types';
import { validateCopyLength } from '../../../utils/validation';

export const useEvaluation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const evaluate = async (copyText: string, crmChannel: string, textFormat: TextFormat) => {
    // Validate copy length first
    const validation = validateCopyLength(copyText);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid input');
      return null;
    }

    setIsLoading(true);
    setError('');

    try {
      const evaluation = await evaluateCopy(copyText, crmChannel, textFormat);
      return evaluation;
    } catch (err) {
      setError('Failed to evaluate copy. Please try again.');
      console.error('Error:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    evaluate,
    setError
  };
};