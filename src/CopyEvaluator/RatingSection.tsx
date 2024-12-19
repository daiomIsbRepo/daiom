import React from 'react';
import { Star } from 'lucide-react';
import StarRating from './StarRating';
import { RatingSectionProps } from './types';

const RatingSection: React.FC<RatingSectionProps> = ({ rating, theme }) => {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-lg font-semibold mb-2" style={{ color: '#000000' }}>
        <Star className="w-5 h-5 stroke-[2]" style={{ color: theme.primary }} /> Rating
      </h3>
      <StarRating rating={rating} theme={theme} />
    </div>
  );
};

export default RatingSection;