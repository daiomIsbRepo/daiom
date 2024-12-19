import React from 'react';
import { Lightbulb, BookOpen } from 'lucide-react';
import MessagePreview from '../shared/MessagePreview';
import { FeedbackSectionProps } from './types';

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ evaluation, theme }) => {
  return (
    <>
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-2" style={{ color: '#000000' }}>
          <Lightbulb className="w-5 h-5" style={{ color: theme.primary }} /> Feedback
        </h3>
        <MessagePreview 
          message={evaluation.response || 'No feedback available'} 
          channel={'whatsapp'}
          variant="sticky-note"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-2" style={{ color: '#000000' }}>
          <BookOpen className="w-5 h-5" style={{ color: theme.primary }} /> Suggestions
        </h3>
        <MessagePreview 
          message={evaluation.rulesViolated || 'No suggestions'} 
          channel={'whatsapp'}
          variant="sticky-note"
        />
      </div>
    </>
  );
};

export default FeedbackSection;