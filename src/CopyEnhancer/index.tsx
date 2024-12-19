import React, { useState } from 'react';
import { Copy, HelpCircle } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { getCRMTheme } from '../../utils/theme';
import InputSection from './InputSection';
import OutputSection from './OutputSection';
import { enhanceCopy } from './utils';

const CopyEnhancer = () => {
  const { state, updateCopyEnhancer } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const theme = getCRMTheme(state.copyEnhancer.formData.crmChannel);

  const handleInputChange = (field: string, value: any) => {
    updateCopyEnhancer({
      formData: {
        ...state.copyEnhancer.formData,
        [field]: value
      }
    });
  };

  const handleSubmit = async () => {
    if (!state.copyEnhancer.formData.copyText?.trim()) {
      setError('Please enter some text to enhance');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await enhanceCopy(state.copyEnhancer.formData);
      updateCopyEnhancer({ enhancedCopy: response });
    } catch (err) {
      setError('Failed to enhance copy. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Copy className="w-8 h-8" style={{ color: theme.primary }} />
          <h1 className="text-2xl font-bold">Copy Enhancer</h1>
        </div>
        <HelpCircle className="w-6 h-6 cursor-pointer" style={{ color: theme.primary }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputSection
            formData={state.copyEnhancer.formData}
            showAdvanced={showAdvanced}
            onToggleAdvanced={() => setShowAdvanced(!showAdvanced)}
            onChange={handleInputChange}
            theme={theme}
          />
        </div>

        <div className="space-y-6">
          <OutputSection
            formData={state.copyEnhancer.formData}
            enhancedCopy={state.copyEnhancer.enhancedCopy}
            error={error}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onEmojiToggle={(value) => handleInputChange('includeEmoji', value)}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default CopyEnhancer;