import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: string;
  theme: {
    primary: string;
    text: string;
  };
}

const StarRating: React.FC<StarRatingProps> = ({ rating, theme }) => {
  const numericRating = parseFloat(rating) || 0;
  const maxRating = 5;
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          {[...Array(maxRating)].map((_, index) => {
            const fillPercentage = Math.max(0, Math.min(100, (numericRating - index) * 100));
            
            return (
              <div key={index} className="relative">
                <div className="relative w-10 h-10 group">
                  {/* Base star */}
                  <Star 
                    className="absolute w-full h-full stroke-[1.5] transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: theme.text }} 
                  />
                  
                  {/* Filled star overlay */}
                  <div 
                    className="absolute w-full h-full overflow-hidden transition-transform duration-300"
                    style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
                  >
                    <Star 
                      className="w-full h-full stroke-[1.5]" 
                      style={{ fill: theme.primary, color: theme.text }}
                    />
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star 
                      className="w-full h-full stroke-[2]" 
                      style={{ color: theme.primary }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span 
            className="text-2xl font-bold"
            style={{ color: theme.primary }}
          >
            {numericRating.toFixed(1)}
          </span>
          <span className="text-sm text-gray-500">
            out of {maxRating}
          </span>
        </div>
      </div>

      {/* Rating description */}
      <div className="text-sm text-gray-600">
        {numericRating >= 4.5 ? 'Excellent! Your copy is highly effective.' :
         numericRating >= 4.0 ? 'Great work! Minor improvements possible.' :
         numericRating >= 3.0 ? 'Good start, but room for improvement.' :
         numericRating >= 2.0 ? 'Needs significant improvement.' :
         'Requires major revision.'}
      </div>
    </div>
  );
};

export default StarRating;