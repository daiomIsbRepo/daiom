import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Features from './Features';

interface LandingProps {
  onLoginClick: () => void;
}

const Landing: React.FC<LandingProps> = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#004d4d] to-[#001a1a]">
      <Header onLoginClick={onLoginClick} />
      <div className="max-w-6xl mx-auto px-8 py-20 text-center">
        <HeroSection onTryNowClick={onLoginClick} />
        <Features />
      </div>
    </div>
  );
};

export default Landing;