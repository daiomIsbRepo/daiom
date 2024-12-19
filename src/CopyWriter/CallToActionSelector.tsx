import React from 'react';

interface CallToActionSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const CallToActionSelector: React.FC<CallToActionSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Call to Action (CTA)</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your call to action text..."
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
      />
    </div>
  );
};

export default CallToActionSelector;