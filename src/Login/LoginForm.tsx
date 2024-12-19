import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';

interface LoginFormProps {
  onError: (error: string) => void;
  onShowLoginOverlay: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onError, onShowLoginOverlay }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login, loginAsTrial } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      onError('Invalid credentials');
    }
  };

  const handleLoginClick = () => {
    onShowLoginOverlay();
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${response.access_token}` },
        }).then(res => res.json());

        login(userInfo.email, 'google-auth');
      } catch (err) {
        onError('Failed to login with Google');
      }
    },
    onError: () => {
      onError('Failed to login with Google');
    },
    flow: 'implicit'
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border-2 border-black text-white rounded-full focus:ring-2 focus:ring-teal-300 focus:border-black placeholder-white/50"
          placeholder="Username"
        />
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border-2 border-black text-white rounded-full focus:ring-2 focus:ring-teal-300 focus:border-black placeholder-white/50"
          placeholder="Password"
        />
      </div>

      <div className="flex items-center justify-between text-sm text-white/80">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="mr-2 rounded border-teal-200/20 bg-white/5 text-teal-500 focus:ring-teal-500"
          />
          Remember me
        </label>
        <a href="#" className="hover:text-white">Forgot password?</a>
      </div>

      <button
        type="submit"
        className="w-full bg-[#001a1a] text-white py-3 rounded-full hover:bg-[#003333] transition-colors duration-200 font-medium"
      >
        LOGIN
      </button>

      <div className="relative flex items-center justify-center text-sm text-white/60 my-4">
        <div className="border-t border-white/20 flex-grow"></div>
        <span className="px-4">or continue with</span>
        <div className="border-t border-white/20 flex-grow"></div>
      </div>

      <button
        type="button"
        onClick={() => googleLogin()}
        className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-full transition-colors duration-200"
      >
        <Mail className="w-5 h-5" />
        Sign in with Gmail
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={loginAsTrial}
          className="w-full flex items-center justify-center gap-2 bg-teal-500/20 hover:bg-teal-500/30 text-white py-3 rounded-full transition-colors duration-200"
        >
          Try Without Login
        </button>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
        </div>
      </div>

      <div className="text-center text-white/80 text-sm">
        Don't have an account? <a href="#" className="text-teal-300 hover:text-teal-200">REGISTER</a>
      </div>
    </form>
  );
};

export default LoginForm;