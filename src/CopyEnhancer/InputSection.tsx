import React from 'react';
import { Settings2 } from 'lucide-react';
import { InputSectionProps } from './types';
import CRMChannelSelector from '../shared/CRMChannelSelector';
import { improvementOptions } from './constants';

const InputSection: React.FC<InputSectionProps> = ({
  formData,
  showAdvanced,
  onToggleAdvanced,
  onChange,
  theme
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Select Brand</label>
          <select
            value={formData.brandVoice || ''}
            onChange={(e) => onChange('brandVoice', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
          >
            <option value="">Select brand</option>
            {[
              'BookMyShow', 'Flipkart', 'Giva', 'Lenskart', 'MakeMyTrip',
              'Myntra', 'Nykaa', 'Semrush', 'Simpl', 'Swiggy', 'UrbanMonkey', 'Zepto'
            ].map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Select your CRM Channel</label>
          <CRMChannelSelector
            value={formData.crmChannel}
            onChange={(value) => onChange('crmChannel', value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Input Text</label>
          <textarea
            value={formData.copyText}
            onChange={(e) => onChange('copyText', e.target.value)}
            placeholder="Enter your text here..."
            className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 transition-colors"
            style={{ 
              borderColor: theme.border,
              '--tw-ring-color': theme.primary
            } as React.CSSProperties}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tell us how to improve? (Press Ctrl to select multiple options)</label>
          <select
            multiple
            value={formData.improvementContext}
            onChange={(e) => {
              const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
              onChange('improvementContext', selectedOptions);
            }}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
            size={5}
          >
            {improvementOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Call To Action (CTA)</label>
          <input
            type="text"
            value={formData.callToAction}
            onChange={(e) => onChange('callToAction', e.target.value)}
            placeholder="Enter your call to action text..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors"
            style={{ 
              borderColor: theme.border,
              '--tw-ring-color': theme.primary
            } as React.CSSProperties}
          />
        </div>

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
              <label className="block text-sm font-medium mb-2">Point of view</label>
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
              <label className="block text-sm font-medium mb-2">Product Details</label>
              <div className="space-y-2">
                <input
                  type="text"
                  value={formData.productTitle}
                  onChange={(e) => onChange('productTitle', e.target.value)}
                  placeholder="Product Title"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
                />
                <input
                  type="text"
                  value={formData.vendor}
                  onChange={(e) => onChange('vendor', e.target.value)}
                  placeholder="Vendor"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
                />
                <input
                  type="text"
                  value={formData.productType}
                  onChange={(e) => onChange('productType', e.target.value)}
                  placeholder="Product Type"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
                />
                <input
                  type="text"
                  value={formData.keywords}
                  onChange={(e) => onChange('keywords', e.target.value)}
                  placeholder="Keywords for our AI"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSection;