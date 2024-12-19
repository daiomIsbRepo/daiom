import React from 'react';
import { FormatButtonProps } from './types';

const FormatButton: React.FC<FormatButtonProps> = ({
  format,
  icon: Icon,
  isActive,
  onClick,
  theme
}) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-lg transition-colors ${
      isActive ? 'bg-opacity-20' : 'hover:bg-opacity-10'
    }`}
    style={{ 
      backgroundColor: isActive ? theme.primary : 'transparent',
      color: '#000000'
    }}
  >
    <Icon className="w-5 h-5" />
  </button>
);

export default FormatButton;