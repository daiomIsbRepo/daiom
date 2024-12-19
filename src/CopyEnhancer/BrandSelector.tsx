import React from 'react';
import { brands } from './constants';

interface BrandSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const BrandSelector: React.FC<BrandSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Select Brand</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#145659] focus:border-[#145659]"
      >
        <option value="">Select brand</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
    </div>
  );
};

export default BrandSelector;