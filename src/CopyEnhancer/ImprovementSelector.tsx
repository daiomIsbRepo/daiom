import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { improvementOptions } from './constants';

interface ImprovementSelectorProps {
  selectedOptions: string[];
  onChange: (values: string[]) => void;
}

const ImprovementSelector: React.FC<ImprovementSelectorProps> = ({
  selectedOptions,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleOption = (optionValue: string) => {
    const newValue = selectedOptions.includes(optionValue)
      ? selectedOptions.filter(v => v !== optionValue)
      : [...selectedOptions, optionValue];
    onChange(newValue);
  };

  const getSelectedLabels = () => {
    if (!selectedOptions || selectedOptions.length === 0) return 'Select improvement areas';
    if (selectedOptions.length === 1) {
      return improvementOptions.find(opt => opt.value === selectedOptions[0])?.label;
    }
    return `${selectedOptions.length} areas selected`;
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Tell us how to improve?</label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 text-left bg-white border rounded-lg flex items-center justify-between hover:border-[#145659] focus:outline-none focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
        >
          <span className="block truncate">
            {getSelectedLabels()}
          </span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
            {improvementOptions.map((option) => {
              const isSelected = selectedOptions.includes(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleToggleOption(option.value)}
                  className={`w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-gray-50 ${
                    isSelected ? 'bg-[#145659]/10' : ''
                  }`}
                >
                  <span className={`${isSelected ? 'font-medium text-[#145659]' : ''}`}>
                    {option.label}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-[#145659]" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {selectedOptions.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedOptions.map(value => {
            const option = improvementOptions.find(opt => opt.value === value);
            if (!option) return null;
            
            return (
              <span
                key={value}
                className="inline-flex items-center gap-1 px-2 py-1 bg-[#145659]/10 text-[#145659] rounded-full text-sm"
              >
                {option.label}
                <button
                  onClick={() => handleToggleOption(value)}
                  className="hover:text-[#0d3d3f]"
                >
                  ×
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImprovementSelector;