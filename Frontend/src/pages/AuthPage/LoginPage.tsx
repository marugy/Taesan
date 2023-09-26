import React, { useState,useEffect } from 'react';
import LoginForm from 'components/Login/LoginForm';
import Landing from 'components/Login/Landing';
const LoginPage = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowLanding(false);
      }, 2900);
      return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-full flex items-center justify-center'>
      {showLanding ? <Landing /> : <LoginForm />}
    </div>
  );
};

export default LoginPage;
