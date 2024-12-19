import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay: number;
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

export default FeatureCard;