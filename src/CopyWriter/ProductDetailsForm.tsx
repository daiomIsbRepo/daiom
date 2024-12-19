import React from 'react';
import { FormData } from './types';

interface ProductDetailsFormProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: any) => void;
}

const ProductDetailsForm: React.FC<ProductDetailsFormProps> = ({ formData, onChange }) => {
  return (
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
  );
};

export default ProductDetailsForm;