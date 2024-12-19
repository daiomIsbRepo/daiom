import React from 'react';

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {children}
    </div>
  );
};

export default ButtonGroup;