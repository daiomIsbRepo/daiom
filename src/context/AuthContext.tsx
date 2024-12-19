import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isTrialUser: boolean;
  username: string | null;
  credits: number;
  login: (username: string, password: string) => boolean;
  loginAsTrial: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isTrialUser, setIsTrialUser] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [credits, setCredits] = useState<number>(100);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const trial = localStorage.getItem('isTrialUser');
    const storedUsername = localStorage.getItem('username');
    const storedCredits = localStorage.getItem('credits');
    
    if (auth === 'true') {
      setIsAuthenticated(true);
      setIsTrialUser(trial === 'true');
      setUsername(storedUsername);
      setCredits(storedCredits ? parseInt(storedCredits) : trial === 'true' ? 10 : 100);
    }
  }, []);

  const login = (username: string, password: string) => {
    if (password === 'google-auth') {
      setIsAuthenticated(true);
      setIsTrialUser(false);
      setUsername(username);
      setCredits(100);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isTrialUser', 'false');
      localStorage.setItem('username', username);
      localStorage.setItem('credits', '100');
      return true;
    }

    if (username === 'Akshay' && password === '123') {
      setIsAuthenticated(true);
      setIsTrialUser(false);
      setUsername(username);
      setCredits(100);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isTrialUser', 'false');
      localStorage.setItem('username', username);
      localStorage.setItem('credits', '100');
      return true;
    }
    return false;
  };

  const loginAsTrial = () => {
    setIsAuthenticated(true);
    setIsTrialUser(true);
    setUsername('Trial User');
    setCredits(10);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('isTrialUser', 'true');
    localStorage.setItem('username', 'Trial User');
    localStorage.setItem('credits', '10');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsTrialUser(false);
    setUsername(null);
    setCredits(0);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isTrialUser');
    localStorage.removeItem('username');
    localStorage.removeItem('credits');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isTrialUser, 
      username,
      credits,
      login, 
      loginAsTrial, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};