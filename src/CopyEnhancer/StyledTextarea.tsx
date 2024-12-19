import React from 'react';
import { CRMTheme } from './theme';

interface StyledTextareaProps {
  value: string;
  onChange: (value: string) => void;
  theme: CRMTheme;
  placeholder?: string;
}

const StyledTextarea: React.FC<StyledTextareaProps> = ({
  value,
  onChange,
  theme,
  placeholder
}) => {
  const backgroundStyle = theme.pattern 
    ? {
        backgroundImage: `url(${theme.pattern})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    : {
        backgroundColor: `${theme.background}20`
      };

  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-48 p-4 border rounded-lg resize-none focus:ring-2 transition-all duration-300"
      style={{ 
        borderColor: theme.border,
        '--tw-ring-color': theme.primary,
        ...backgroundStyle
      } as React.CSSProperties}
    />
  );
};

export default StyledTextarea;