import React from 'react';
import { 
  ClipboardCheck,
  Copy, 
  Pencil,
  Sparkles,
  LifeBuoy,
  LogOut,
  DoorOpen
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { images } from '../assets/images';

const menuItems = [
  { icon: ClipboardCheck, text: 'Copy Evaluator', id: 'copy-evaluator', isNew: true, allowTrial: true },
  { icon: Copy, text: 'Copy Enhancer', id: 'copy-enhancer', isNew: true, allowTrial: false },
  { icon: Pencil, text: 'Copy Writer', id: 'copy-writer', isNew: true, allowTrial: false },
  { icon: Sparkles, text: 'Inspirations', id: 'best-practices', allowTrial: true },
  { icon: LifeBuoy, text: 'Support', id: 'support', allowTrial: false }
];

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const { logout, isTrialUser } = useAuth();

  return (
    <div className="w-64 bg-white h-screen p-4 border-r border-gray-200 overflow-y-auto">
      <div className="flex items-center justify-center mb-8">
        <div className="w-48">
          <img 
            src={images.vyomLogo}
            alt="Vyom Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isDisabled = isTrialUser && !item.allowTrial;
          const isActive = currentPage === item.id;
          
          return (
            <div
              key={item.id}
              onClick={() => !isDisabled && onPageChange(item.id)}
              className={`
                group relative flex items-center p-3 rounded-lg transition-all duration-300
                ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-lg transition-all duration-300" />
              <div className="relative flex items-center w-full">
                <item.icon className={`w-5 h-5 mr-3 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className={`flex-1 font-semibold transition-colors duration-300 ${isActive ? 'text-primary' : ''}`}>
                  {item.text}
                </span>
                {item.isNew && !isDisabled && (
                  <span className="px-2 py-0.5 text-[10px] bg-red-500 text-white rounded-full font-medium animate-pulse">
                    new
                  </span>
                )}
                {isDisabled && (
                  <span className="text-xs text-gray-500 font-medium px-2 py-0.5 bg-gray-100 rounded-full">
                    Premium
                  </span>
                )}
              </div>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
              )}
            </div>
          );
        })}

        <div
          onClick={logout}
          className="group relative mt-8 p-3 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-600/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 transition-all duration-300" />
          <div className="relative flex items-center">
            {isTrialUser ? (
              <>
                <DoorOpen className="w-5 h-5 mr-3 text-red-500 transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-semibold text-red-500">Exit Guest Mode</span>
              </>
            ) : (
              <>
                <LogOut className="w-5 h-5 mr-3 text-red-500 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="font-semibold text-red-500">Exit</span>
              </>
            )}
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;