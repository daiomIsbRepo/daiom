import React, { useState } from 'react';
import { PenLine } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import InputSection from './InputSection';
import OutputSection from './OutputSection';
import { FormData } from './types';

const CopyWriter = () => {
  const { state, updateCopyWriter } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleInputChange = (field: keyof FormData, value: any) => {
    updateCopyWriter({
      formData: {
        ...state.copyWriter.formData,
        [field]: value
      }
    });
  };

  const handleGenerate = async () => {
    if (!state.copyWriter.formData.brandVoice) {
      setError('Please select a brand');
      return;
    }

    if (!state.copyWriter.formData.crmChannel) {
      setError('Please select a CRM channel');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://4hxh76qgti.execute-api.ap-south-1.amazonaws.com/dev/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...state.copyWriter.formData,
          tool: 'Writer'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate copy');
      }

      const data = await response.json();
      updateCopyWriter({ generatedContent: data.response || 'No content generated' });
    } catch (err) {
      setError('Failed to generate copy. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <PenLine className="w-8 h-8 text-[#145659]"/>
          <h1 className="text-2xl font-bold">Copy Writer</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputSection
            formData={state.copyWriter.formData}
            showAdvanced={showAdvanced}
            onToggleAdvanced={() => setShowAdvanced(!showAdvanced)}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-6">
          <OutputSection
            formData={state.copyWriter.formData}
            generatedContent={state.copyWriter.generatedContent}
            error={error}
            isLoading={isLoading}
            onSubmit={handleGenerate}
            onEmojiToggle={(value) => handleInputChange('includeEmoji', value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CopyWriter;