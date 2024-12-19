import React from 'react';
import { ClipboardCheck, Copy, Pencil, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { images } from '../assets/images';

interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay: number;
}

interface LandingProps {
  onLoginClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-xl shadow-lg"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-[#145659]/10 rounded-lg">
        <Icon className="w-8 h-8 text-[#145659]" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Landing: React.FC<LandingProps> = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#004d4d] to-[#001a1a]">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img src={images.vyomLogo} alt="Vyom Logo" className="w-48" />
          <div className="w-px h-12 bg-white/20" />
          <img src={images.daiomLogo} alt="DAIOM Logo" className="w-32" />
        </div>
        <button
          onClick={onLoginClick}
          className="px-8 py-3 bg-white text-[#004d4d] rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          Login <ArrowRight className="w-4 h-4" />
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white mb-6"
        >
          Your AI-powered content creation assistant
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/80 mb-12 max-w-3xl mx-auto"
        >
          Enhance your content creation workflow with powerful AI tools designed to help you write, evaluate, and improve your content.
        </motion.p>

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
      </div>
    </div>
  );
};

export default Landing;