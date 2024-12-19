import React, { useState } from 'react';
import { ClipboardCheck, HelpCircle } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { getCRMTheme } from '../../utils/theme';
import { TextFormat } from './types';
import { INITIAL_TEXT_FORMAT } from './constants';
import { useEvaluation } from './hooks/useEvaluation';
import { transferContentToEnhancer } from '../../utils/contentTransfer';
import InputSection from './InputSection';
import OutputSection from './OutputSection';

interface CopyEvaluatorProps {
  onPageChange: (page: string) => void;
}

const CopyEvaluator: React.FC<CopyEvaluatorProps> = ({ onPageChange }) => {
  const { state, updateCopyEvaluator, updateCopyEnhancer } = useAppContext();
  const [textFormat, setTextFormat] = useState<TextFormat>(INITIAL_TEXT_FORMAT);
  const { isLoading, error, evaluate, setError } = useEvaluation();

  const theme = getCRMTheme(state.copyEvaluator.crmChannel);

  const handleInputChange = (field: string, value: any) => {
    updateCopyEvaluator({ 
      ...state.copyEvaluator,
      [field]: value 
    });
  };

  const handleFormatChange = (format: keyof TextFormat) => {
    if (format === 'alignment') return;
    setTextFormat(prev => ({
      ...prev,
      [format]: !prev[format]
    }));
  };

  const handleAlignmentChange = (alignment: string) => {
    setTextFormat(prev => ({
      ...prev,
      alignment
    }));
  };

  const handleEvaluate = async () => {
    const evaluation = await evaluate(
      state.copyEvaluator.copyText, 
      state.copyEvaluator.crmChannel, 
      textFormat
    );
    
    if (evaluation) {
      updateCopyEvaluator({ 
        ...state.copyEvaluator,
        evaluation 
      });
    }
  };

  const handleEnhance = () => {
    // First transfer the content
    transferContentToEnhancer(state, updateCopyEnhancer);
    // Then navigate to the Copy Enhancer page
    onPageChange('copy-enhancer');
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <ClipboardCheck className="w-8 h-8" style={{ color: theme.primary }} />
          <h1 className="text-2xl font-bold">Copy Evaluator</h1>
        </div>
        <HelpCircle className="w-6 h-6 cursor-pointer" style={{ color: theme.primary }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InputSection
          copyText={state.copyEvaluator.copyText}
          crmChannel={state.copyEvaluator.crmChannel}
          callToAction={state.copyEvaluator.callToAction}
          textFormat={textFormat}
          isLoading={isLoading}
          onInputChange={handleInputChange}
          onFormatChange={handleFormatChange}
          onAlignmentChange={handleAlignmentChange}
          onEvaluate={handleEvaluate}
          onEnhance={handleEnhance}
        />

        <OutputSection
          crmChannel={state.copyEvaluator.crmChannel}
          evaluation={state.copyEvaluator.evaluation}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CopyEvaluator;