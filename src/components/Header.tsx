import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Coins, Sparkles, RotateCcw} from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const { isTrialUser, username, credits } = useAuth();

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute -top-3 -left-2">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
          <span className="text-xl">
            Welcome, {' '}
            <span className="font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {isTrialUser ? 'Trial User' : username || 'Guest'}
            </span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="group relative">
          <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary-light/10 px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 hover:from-primary/15 hover:to-primary-light/15">
            <div className="relative">
              <Coins className="w-5 h-5 text-primary animate-bounce" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-primary-light/80 font-medium">Available Credits</span>
              <span className="font-bold text-primary">
                {credits.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>
        { (   //isTrialUser &&
          < button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray transition-colors"
          >
            <RotateCcw className="w-5 h-5 transition-transform group-hover:translate-x-1"/>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;