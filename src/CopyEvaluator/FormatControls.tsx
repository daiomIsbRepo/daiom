import React from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { FormatControlsProps } from './types';
import FormatButton from './FormatButton';
import AlignmentButton from './AlignmentButton';

const FormatControls: React.FC<FormatControlsProps> = ({
  textFormat,
  theme,
  onFormatChange,
  onAlignmentChange
}) => {
  return (
    <div className="flex items-center gap-2 p-2 border-b" style={{ borderColor: theme.border }}>
      <div className="flex items-center gap-1">
        <FormatButton
          format="bold"
          icon={Bold}
          isActive={textFormat.bold}
          onClick={() => onFormatChange('bold')}
          theme={theme}
        />
        <FormatButton
          format="italic"
          icon={Italic}
          isActive={textFormat.italic}
          onClick={() => onFormatChange('italic')}
          theme={theme}
        />
        <FormatButton
          format="underline"
          icon={Underline}
          isActive={textFormat.underline}
          onClick={() => onFormatChange('underline')}
          theme={theme}
        />
      </div>
      <div className="w-px h-6 bg-gray-200 mx-2" />
      <div className="flex items-center gap-1">
        <AlignmentButton
          alignment="left"
          icon={AlignLeft}
          isActive={textFormat.alignment === 'left'}
          onClick={() => onAlignmentChange('left')}
          theme={theme}
        />
        <AlignmentButton
          alignment="center"
          icon={AlignCenter}
          isActive={textFormat.alignment === 'center'}
          onClick={() => onAlignmentChange('center')}
          theme={theme}
        />
        <AlignmentButton
          alignment="right"
          icon={AlignRight}
          isActive={textFormat.alignment === 'right'}
          onClick={() => onAlignmentChange('right')}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default FormatControls;