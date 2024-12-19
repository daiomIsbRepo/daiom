import React from 'react';
import { FormData } from './types';
import { campaigns, wordLimits } from './constants';

interface CampaignFormProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: any) => void;
}

const CampaignForm: React.FC<CampaignFormProps> = ({ formData, onChange }) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-2">Describe your Campaign</label>
        <textarea
          value={formData.campaignDescription}
          onChange={(e) => onChange('campaignDescription', e.target.value)}
          placeholder="Promotional Offer/Diwali/Independence Day/Discount Offer/End of Season Sale"
          className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Campaign Type</label>
        <select
          value={formData.selectedCampaign}
          onChange={(e) => onChange('selectedCampaign', e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
        >
          <option value="">Select campaign type</option>
          {campaigns.map(campaign => (
            <option key={campaign.value} value={campaign.value}>{campaign.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Word Limit</label>
        <select
          value={formData.wordLimit}
          onChange={(e) => onChange('wordLimit', e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
        >
          <option value="">Select word limit</option>
          {wordLimits.map(limit => (
            <option key={limit.value} value={limit.value}>{limit.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CampaignForm;