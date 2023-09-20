import React, { useState,useEffect } from 'react';
import LoginForm from 'components/Login/LoginForm';
import Landing from 'components/Login/Landing';
const LoginPage = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowLanding(false);
      }, 2500);
      return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLanding ? <Landing /> : <LoginForm />}
    </div>
  );
};

export default LoginPage;
