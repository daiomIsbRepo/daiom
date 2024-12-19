import React from 'react';
import { PenLine } from 'lucide-react';
import MessagePreview from '../shared/MessagePreview';
import StylishButton from '../shared/Button/StylishButton';
import { OutputSectionProps } from './types';
import { getCRMChannelTheme } from './utils';

const OutputSection: React.FC<OutputSectionProps> = ({
  formData,
  generatedContent,
  error,
  isLoading,
  onSubmit,
  onEmojiToggle
}) => {
  const theme = getCRMChannelTheme(formData.crmChannel);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="includeEmoji"
              checked={formData.includeEmoji}
              onChange={(e) => onEmojiToggle(e.target.checked)}
              className="rounded"
              style={{ accentColor: theme.primary }}
            />
            <label htmlFor="includeEmoji">Include Emoji</label>
          </div>
          <StylishButton
            onClick={onSubmit}
            disabled={isLoading}
            loading={isLoading}
            theme={{
              primary: theme.primary,
              hover: theme.hover
            }}
            icon={PenLine}
          >
            {isLoading ? 'Generating...' : 'Generate Copy'}
          </StylishButton>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* <h2 className="text-lg font-bold mb-6" style={{ color: theme.text }}>
          Output Pane
        </h2> */}
        
        {error && (
          <div className="p-4 mb-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <div 
              className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent"
              style={{ borderColor: `${theme.primary} transparent ${theme.primary} ${theme.primary}` }}
            />
          </div>
        ) : (
          <MessagePreview 
            message={generatedContent || 'Generated content will appear here...'} 
            channel={formData.crmChannel as 'whatsapp' | 'sms'} 
          />
        )}
      </div>
    </div>
  );
};

export default OutputSection;