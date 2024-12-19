import React from 'react';
import { ButtonProps } from './types';
import { baseStyles, variantStyles, sizeStyles } from './styles';
import LoadingSpinner from './LoadingSpinner';

const StylishButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  loading = false,
  theme = {
    primary: '#145659',
    hover: '#0d3d3f'
  },
  className = ''
}) => {
  const getStyle = () => {
    let style: React.CSSProperties = {};
    
    if (variant === 'primary') {
      style.backgroundColor = theme.primary;
    } else if (variant === 'outline') {
      style.borderColor = theme.primary;
      style.color = theme.primary;
    }

    return style;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      style={getStyle()}
    >
      <span className="relative flex items-center gap-2">
        {loading ? (
          <LoadingSpinner />
        ) : Icon ? (
          <Icon className="w-5 h-5" />
        ) : null}
        {children}
      </span>
    </button>
  );
};

export default StylishButton;