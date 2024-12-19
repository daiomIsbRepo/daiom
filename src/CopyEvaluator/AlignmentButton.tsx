import React from 'react';
import { AlignmentButtonProps } from './types';

const AlignmentButton: React.FC<AlignmentButtonProps> = ({
  alignment,
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

export default AlignmentButton;