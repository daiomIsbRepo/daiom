import React from 'react';
import { motion } from 'framer-motion';
import TryNowButton from './TryNowButton';
import { useAuth } from '../../context/AuthContext';

interface HeroSectionProps {
  onTryNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onTryNowClick }) => {
  const { loginAsTrial } = useAuth();

  const handleTryNowClick = () => {
    loginAsTrial();
  };

  return (
    <>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mb-16"
      >
        <TryNowButton onClick={handleTryNowClick} />
      </motion.div>
    </>
  );
};

export default HeroSection;