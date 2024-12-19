import React from 'react';
import { Lightbulb, Star, Target, Heart, Zap, MessageCircle } from 'lucide-react';
import TipCard from './TipCard';
import { tips } from './tips';

const Inspiration = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="flex items-center gap-3 mb-8">
        <Lightbulb className="w-8 h-8 text-[#145659]" />
        <h1 className="text-2xl font-bold">Copywriting Inspiration</h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {tips.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-[#145659]">
                {section.icon === 'star' && <Star className="w-5 h-5" />}
                {section.icon === 'target' && <Target className="w-5 h-5" />}
                {section.icon === 'heart' && <Heart className="w-5 h-5" />}
                {section.icon === 'zap' && <Zap className="w-5 h-5" />}
                {section.icon === 'message' && <MessageCircle className="w-5 h-5" />}
                {section.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {section.tips.map((tip, tipIndex) => (
                  <TipCard 
                    key={tipIndex}
                    title={tip.title}
                    description={tip.description}
                    example={tip.example}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;