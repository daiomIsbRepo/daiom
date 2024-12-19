import { useState } from 'react';
import SatisfactionRating from './SatisfactionRating';
import { sendFeedback } from './utils';

interface FeedbackFormProps {
  onSubmitSuccess: () => void;
}

const FeedbackForm = ({ onSubmitSuccess }: FeedbackFormProps) => {
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (satisfaction === null) {
      setError('Please select your satisfaction level');
      return;
    }

    if (!feedback.trim()) {
      setError('Please provide your feedback');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await sendFeedback(satisfaction, feedback);
      onSubmitSuccess();
      setSatisfaction(null);
      setFeedback('');
    } catch (err) {
      setError('Failed to send feedback. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          How satisfied are you with our product? <span className="text-red-500">*</span>
        </h2>
        <SatisfactionRating value={satisfaction} onChange={setSatisfaction} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          What do you like/not like about our product?
        </h2>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Please fill in your answer"
          className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-[#1e81b0] focus:border-[#1e81b0]"
        />
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-8 py-3 bg-[#1e81b0] text-white rounded-lg hover:bg-[#1a6f98] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Continue'}
        </button>
      </div>
    </>
  );
};

export default FeedbackForm;