import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1234567890-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com">
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);