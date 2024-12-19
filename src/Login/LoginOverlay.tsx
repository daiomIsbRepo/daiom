import React from 'react';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';

interface LoginOverlayProps {
  onClose: () => void;
  onError: (error: string) => void;
  onShowLoginOverlay: () => void;
}

const LoginOverlay: React.FC<LoginOverlayProps> = ({ onClose, onError, onShowLoginOverlay }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[500px] bg-[#004d4d] p-12 rounded-2xl relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-white/80">Sign in to continue to VYOM</p>
        </div>

        <LoginForm onError={onError} onShowLoginOverlay={onShowLoginOverlay} />
      </div>
    </div>
  );
};

export default LoginOverlay;