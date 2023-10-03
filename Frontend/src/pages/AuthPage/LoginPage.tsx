import React, { useState,useEffect } from 'react';
import LoginForm from 'components/Login/LoginForm';
import Landing from 'components/Login/Landing';
import { useUserStore } from 'store/UserStore';
import axios from 'axios'
const LoginPage = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [isSimpleLogin,setIsSimpleLogin] = useState(false);
  const { accessToken, refreshToken } = useUserStore();

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowLanding(false);
      }, 2900);
      return () => clearTimeout(timer);
  }, []);
  
  useEffect(()=>{
    if (refreshToken) {
      axios.post('https://j9c211.p.ssafy.io/api/member-management/members/check/token',{}
      ,{
        headers : {
          'REFRESH-TOKEN':refreshToken
        }
      }
      )
      .then((response) => {
        console.log(response.data);
        setIsSimpleLogin(response.data.response);
      }
        )
        .catch((error) => {
console.log(error)
        }
          )
        
    }
  })

  return (
    <div className='h-full flex items-center justify-center'>
      {showLanding ? <Landing /> : isSimpleLogin?<></>:<LoginForm />}
    </div>
  );
};

export default LoginPage;
