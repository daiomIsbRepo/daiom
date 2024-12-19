import React from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '../../assets/images';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => (
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
);

export default Header;