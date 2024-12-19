import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  label,
  error,
  required = false,
  className = ''
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659] ${className}`}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;