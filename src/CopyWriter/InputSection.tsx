import React from 'react';
import { Settings2 } from 'lucide-react';
import { FormData } from './types';
import CRMChannelSelector from '../shared/CRMChannelSelector';
import BrandSelector from './BrandSelector';
import CallToActionSelector from './CallToActionSelector';
import CampaignForm from './CampaignForm';
import ProductDetailsForm from './ProductDetailsForm';

interface InputSectionProps {
  formData: FormData;
  showAdvanced: boolean;
  onToggleAdvanced: () => void;
  onChange: (field: keyof FormData, value: any) => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  formData,
  showAdvanced,
  onToggleAdvanced,
  onChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      
      <div className="space-y-6">
        <BrandSelector
          value={formData.brandVoice || ''}
          onChange={(value) => onChange('brandVoice', value)}
        />

        <div>
          <label className="block text-sm font-medium mb-2">
            Select your CRM Channel <span className="text-red-500">*</span>
          </label>
          <CRMChannelSelector
            value={formData.crmChannel}
            onChange={(value) => onChange('crmChannel', value)}
          />
        </div>

        <CampaignForm 
          formData={formData}
          onChange={onChange}
        />

        <CallToActionSelector
          value={formData.callToAction}
          onChange={(value) => onChange('callToAction', value)}
        />

        <div>
          <button
            onClick={onToggleAdvanced}
            className="flex items-center gap-2 text-[#145659] hover:text-[#0d3d3f] transition-colors"
          >
            <Settings2 className="w-4 h-4" />
            Advanced Options
          </button>
        </div>

        {showAdvanced && (
          <div className="space-y-4 pt-4 border-t">
            <div>
              <label className="block text-sm font-medium mb-2">Point of View</label>
              <select
                value={formData.pointOfView}
                onChange={(e) => onChange('pointOfView', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
              >
                <option value="">Select point of view</option>
                <option value="second">Second Person</option>
                <option value="third">Third Person</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Style</label>
              <select
                value={formData.style}
                onChange={(e) => onChange('style', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
              >
                <option value="">Select style</option>
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
                <option value="humour">Humour</option>
              </select>
            </div>

            <ProductDetailsForm 
              formData={formData}
              onChange={onChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSection;