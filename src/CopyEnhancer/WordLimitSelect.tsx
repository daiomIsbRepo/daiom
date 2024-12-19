import React from 'react';

interface WordLimitSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const WordLimitSelect: React.FC<WordLimitSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Word limit (in words)</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
        >
          <option value="">Select word limit</option>
          <option value="0-50">0-50 (Concise)</option>
          <option value="50-100">50-100 (Normal)</option>
          <option value="100-150">100-150 (Long)</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WordLimitSelect;