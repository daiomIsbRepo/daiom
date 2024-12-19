import { useState } from 'react';
import { X } from 'lucide-react';
import FeedbackForm from './FeedbackForm';
import SuccessMessage from './SuccessMessage';

const Support = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#097b7b] text-white p-6 rounded-t-lg relative">
          <button className="absolute right-4 top-4 hover:opacity-80">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-3xl bg-[#097b7b] font-bold mb-2">We want your opinion!</h1>
        </div>

        <div className="bg-white p-8 rounded-b-lg shadow-sm">
          {submitted ? (
            <SuccessMessage onReset={() => setSubmitted(false)} />
          ) : (
            <FeedbackForm onSubmitSuccess={() => setSubmitted(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;