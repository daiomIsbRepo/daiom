import React from 'react';
import { PenLine, MoveDown } from 'lucide-react';
import StylishButton from '../shared/Button/StylishButton';
import { ButtonGroupProps } from './types';

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onEvaluate,
  onEnhance,
  isLoading,
  theme
}) => {
  return (
    <div className="flex items-center gap-4">
      <StylishButton
        onClick={onEvaluate}
        disabled={isLoading}
        loading={isLoading}
        theme={theme}
        icon={PenLine}
      >
        {isLoading ? 'Evaluating...' : 'Evaluate Copy'}
      </StylishButton>

      <StylishButton
        onClick={onEnhance}
        disabled={isLoading}
        theme={theme}
        icon={MoveDown}
      >
        Copy To Enhancer
      </StylishButton>
    </div>
  );
};

export default ButtonGroup;