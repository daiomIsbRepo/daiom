import React, { useState } from 'react';
import Landing from '../Landing';
import LoginOverlay from './LoginOverlay';

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState('');

  const handleShowLoginOverlay = () => {
    setShowLogin(true);
  };

  return (
    <>
      <Landing onLoginClick={() => setShowLogin(true)} />
      {showLogin && (
        <LoginOverlay
          onClose={() => setShowLogin(false)}
          onError={setError}
          onShowLoginOverlay={handleShowLoginOverlay}
        />
      )}
    </>
  );
};

export default Login;