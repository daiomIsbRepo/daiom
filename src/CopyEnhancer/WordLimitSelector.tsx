import React from 'react';

interface WordLimitSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const WordLimitSelector: React.FC<WordLimitSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Word limit (in words)</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
      >
        <option value="">Select word limit</option>
        <option value="0-50">0-50 (Concise)</option>
        <option value="50-100">50-100 (Normal)</option>
        <option value="100-150">100-150 (Long)</option>
      </select>
    </div>
  );
};

export default WordLimitSelector;