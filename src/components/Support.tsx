import { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Support = () => {
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
      await emailjs.send(
        'service_igeqnlq',
        'template_2x1nx5n',
        {
          satisfaction_level: satisfaction,
          feedback: feedback,
          to_email: 'dev@daiom.in'
        },
        'FZOgN0-XLwta8EBt6'
      );

      setSubmitted(true);
      setSatisfaction(null);
      setFeedback('');
    } catch (err) {
      setError('Failed to send feedback. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const emojis = [
    { value: 1, label: '😞' },
    { value: 2, label: '😕' },
    { value: 3, label: '😐' },
    { value: 4, label: '🙂' },
    { value: 5, label: '😄' }
  ];

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#00B0FF] text-white p-6 rounded-t-lg relative">
          <button className="absolute right-4 top-4 hover:opacity-80">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold mb-2">We want your opinion!</h1>
        </div>

        <div className="bg-white p-8 rounded-b-lg shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-[#00B0FF] mb-4">Thank you for your feedback!</h2>
              <p className="text-gray-600">Your opinion helps us improve our product.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 bg-[#00B0FF] text-white rounded-lg hover:bg-[#0091ea] transition-colors"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">
                  How satisfied are you with our product? <span className="text-red-500">*</span>
                </h2>
                <div className="flex justify-between gap-4">
                  {emojis.map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => setSatisfaction(value)}
                      className={`flex-1 aspect-square flex items-center justify-center text-4xl rounded-full border-2 transition-all ${
                        satisfaction === value
                          ? 'border-[#00B0FF] bg-[#00B0FF]/10'
                          : 'border-gray-200 hover:border-[#00B0FF]/50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  What do you like/not like about our product?
                </h2>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Please fill in your answer"
                  className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF]"
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
                  className="px-8 py-3 bg-[#00B0FF] text-white rounded-lg hover:bg-[#0091ea] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Continue'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;