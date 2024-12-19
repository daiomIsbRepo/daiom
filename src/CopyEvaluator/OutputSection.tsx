import React from 'react';
import { getCRMTheme } from '../../utils/theme';
import RatingSection from './RatingSection';
import FeedbackSection from './FeedbackSection';
import { OutputSectionProps } from './types';

const OutputSection: React.FC<OutputSectionProps> = ({
  crmChannel,
  evaluation,
  error,
  isLoading
}) => {
  const theme = getCRMTheme(crmChannel);

  return (
    <div className="space-y-6">
      <div className="rounded-lg shadow-sm p-6 transition-all duration-300 bg-white">
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
          <div className="space-y-8">
            <RatingSection rating={evaluation.rating} theme={theme} />
            <FeedbackSection evaluation={evaluation} theme={theme} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputSection;