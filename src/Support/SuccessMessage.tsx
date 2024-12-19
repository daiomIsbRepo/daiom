interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-[#1e81b0] mb-4">Thank you for your feedback!</h2>
      <p className="text-gray-600">Your opinion helps us improve our product.</p>
      <button
        onClick={onReset}
        className="mt-6 px-6 py-2 bg-[#1e81b0] text-white rounded-lg hover:bg-[#1a6f98] transition-colors"
      >
        Submit Another Response
      </button>
    </div>
  );
};

export default SuccessMessage;