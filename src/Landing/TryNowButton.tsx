import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface TryNowButtonProps {
  onClick: () => void;
}

const TryNowButton: React.FC<TryNowButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white rounded-full overflow-hidden transition-all hover:bg-gray-100"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <span className="relative flex items-center gap-2">
        Try Evaluator Now
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
      <motion.div
        className="absolute inset-0 bg-black/5"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default TryNowButton;