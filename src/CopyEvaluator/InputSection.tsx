import React from 'react';
import { getCRMTheme } from '../../utils/theme';
import { TextFormat } from './types';
import CRMChannelSelector from '../shared/CRMChannelSelector';
import FormatControls from './FormatControls';
import ButtonGroup from './ButtonGroup';
import { countWords } from '../../utils/validation';

interface InputSectionProps {
  copyText: string;
  crmChannel: string;
  callToAction: string;
  textFormat: TextFormat;
  isLoading: boolean;
  onInputChange: (field: string, value: any) => void;
  onFormatChange: (format: keyof TextFormat) => void;
  onAlignmentChange: (alignment: string) => void;
  onEvaluate: () => void;
  onEnhance: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  copyText,
  crmChannel,
  callToAction,
  textFormat,
  isLoading,
  onInputChange,
  onFormatChange,
  onAlignmentChange,
  onEvaluate,
  onEnhance
}) => {
  const theme = getCRMTheme(crmChannel);
  const wordCount = countWords(copyText);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="space-y-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Select your CRM Channel <span className="text-red-500">*</span>
          </label>
          <CRMChannelSelector
            value={crmChannel}
            onChange={(value) => onInputChange('crmChannel', value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Input Text Copy <span className="text-red-500">*</span>
          </label>
          <div className="border rounded-lg overflow-hidden" style={{ borderColor: theme.border }}>
            <FormatControls
              textFormat={textFormat}
              theme={theme}
              onFormatChange={onFormatChange}
              onAlignmentChange={onAlignmentChange}
            />
            <textarea
              value={copyText}
              onChange={(e) => onInputChange('copyText', e.target.value)}
              placeholder="Type your message here..."
              className="w-full h-48 p-4 resize-none focus:outline-none transition-all duration-300"
              style={{ 
                backgroundColor: theme.pattern ? 'transparent' : `${theme.background}20`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                textAlign: textFormat.alignment as any,
                fontWeight: textFormat.bold ? 'bold' : 'normal',
                fontStyle: textFormat.italic ? 'italic' : 'normal',
                textDecoration: textFormat.underline ? 'underline' : 'none'
              }}
            />
            <div className="px-4 py-2 border-t text-sm text-gray-500 flex justify-between items-center">
              <span>Words: {wordCount}</span>
              {wordCount < 5 && (
                <span className="text-red-500 text-xs">(Minimum 5 words)</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Call To Action (CTA)
          </label>
          <input
            type="text"
            value={callToAction}
            onChange={(e) => onInputChange('callToAction', e.target.value)}
            placeholder="Enter your call to action text..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors"
            style={{ 
              borderColor: theme.border,
              '--tw-ring-color': theme.primary
            } as React.CSSProperties}
          />
        </div>

        <ButtonGroup
          onEvaluate={onEvaluate}
          onEnhance={onEnhance}
          isLoading={isLoading}
          theme={{
            primary: theme.primary,
            hover: theme.hover
          }}
        />
      </div>
    </div>
  );
};

export default InputSection;