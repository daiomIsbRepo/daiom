import { useState } from 'react';
import { formatMessage } from '../utils/message';

export const useMessagePreview = (initialMessage: string = '') => {
  const [message, setMessage] = useState(initialMessage);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const updateMessage = (newMessage: string) => {
    setMessage(formatMessage(newMessage));
  };

  const resetMessage = () => {
    setMessage('');
    setError('');
  };

  return {
    message,
    isLoading,
    error,
    setIsLoading,
    setError,
    updateMessage,
    resetMessage
  };
};