import React from 'react';

interface BrandSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const BrandSelector: React.FC<BrandSelectorProps> = ({ value, onChange }) => {
  const brands = [
    'BookMyShow', 'Flipkart', 'Giva', 'Lenskart', 'MakeMyTrip',
    'Myntra', 'Nykaa', 'Semrush', 'Simpl', 'Swiggy', 'UrbanMonkey', 'Zepto'
  ];

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">
        Select Brand <span className="text-red-500">*</span>
      </label>
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