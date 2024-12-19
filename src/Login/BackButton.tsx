import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 left-6 text-white/80 hover:text-white flex items-center gap-2 transition-colors z-50"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;