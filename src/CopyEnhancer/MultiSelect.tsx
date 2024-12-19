import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { ImprovementOption } from './types';

interface MultiSelectProps {
  options: ImprovementOption[];
  value: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value = [],
  onChange,
  placeholder = 'Select options'
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
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 text-left bg-white border rounded-lg flex items-center justify-between hover:border-[#145659] focus:outline-none focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
      >
        <span className="block truncate">
          {value.length === 0 ? placeholder : `${value.length} option(s) selected`}
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => {
            const isSelected = value.includes(option.value);
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
  );
};

export default MultiSelect;