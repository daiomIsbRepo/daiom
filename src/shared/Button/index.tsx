import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = ''
}) => {
  const baseStyles = 'rounded-lg transition-colors flex items-center justify-center gap-2';
  
  const variantStyles = {
    primary: 'bg-[#145659] text-white hover:bg-[#0d3d3f]',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: 'border-2 border-[#145659] text-[#145659] hover:bg-[#145659]/5'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;