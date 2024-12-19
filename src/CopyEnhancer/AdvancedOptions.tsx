import React from 'react';
import { CRMTheme } from './theme';
import { FormData } from './types';

interface AdvancedOptionsProps {
  formData: FormData;
  theme: CRMTheme;
  onInputChange: (field: keyof FormData, value: string) => void;
}

const AdvancedOptions: React.FC<AdvancedOptionsProps> = ({
  formData,
  theme,
  onInputChange
}) => {
  return (
    <div className="space-y-4 pt-4 border-t">
      <div>
        <label className="block text-sm font-medium mb-2">Point of view</label>
        <select
          value={formData.pointOfView || ''}
          onChange={(e) => onInputChange('pointOfView', e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2"
          style={{ 
            borderColor: theme.border,
            '--tw-ring-color': theme.primary
          } as React.CSSProperties}
        >
          <option value="">Select point of view</option>
          <option value="first">First Person</option>
          <option value="second">Second Person</option>
          <option value="third">Third Person</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Product Details</label>
        <div className="space-y-2">
          <input
            type="text"
            value={formData.productTitle || ''}
            onChange={(e) => onInputChange('productTitle', e.target.value)}
            placeholder="Product Title"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2"
            style={{ 
              borderColor: theme.border,
              '--tw-ring-color': theme.primary
            } as React.CSSProperties}
          />
          <input
            type="text"
            value={formData.vendor || ''}
            onChange={(e) => onInputChange('vendor', e.target.value)}
            placeholder="Vendor"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2"
            style={{ 
              borderColor: theme.border,
              '--tw-ring-color': theme.primary
            } as React.CSSProperties}
          />
          <input
            type="text"
            value={formData.productType || ''}
            onChange={(e) => onInputChange('productType', e.target.value)}
            placeholder="Product Type"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2"
            style={{ 
              borderColor: theme.border,
              '--tw-ring-color': theme.primary
            } as React.CSSProperties}
          />
          <input
            type="text"
            value={formData.keywords || ''}
            onChange={(e) => onInputChange('keywords', e.target.value)}
            placeholder="Keywords for our AI"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2"
            style={{ 
              borderColor: theme.border,
              '--tw-ring-color': theme.primary
            } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedOptions;