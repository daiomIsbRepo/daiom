import React from 'react';
import { ClipboardCheck, Copy, Pencil } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => (
  <div className="grid md:grid-cols-3 gap-8 mt-16">
    <FeatureCard
      icon={ClipboardCheck}
      title="Copy Evaluator"
      description="Get instant feedback on your content's effectiveness, readability, and engagement potential."
      delay={0.4}
    />
    <FeatureCard
      icon={Copy}
      title="Copy Enhancer"
      description="Transform your content with AI-powered suggestions for improved clarity, tone, and impact."
      delay={0.6}
    />
    <FeatureCard
      icon={Pencil}
      title="Copy Writer"
      description="Generate high-quality content tailored to your brand voice and marketing objectives."
      delay={0.8}
    />
  </div>
);

export default Features;