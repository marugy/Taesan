import React, { useEffect } from 'react';
import HabitDetail from 'components/HabitDetail/HabitDetail';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import './Habit.css';

const HabitDetailPage = () => {
  const { accessToken, refreshToken, connectedAsset, createdTikkle } = useUserStore();
  const navigate = useNavigate();
  const tokenCheck = () => {
    axios
      .post(
        'https://j9c211.p.ssafy.io/api/member-management/members/check/access-token',
        {},
        {
          headers: {
            'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        },
      )
      .then((res) => {
        if (res.data.response === false) {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/');
      });
  };
  useEffect(() => {
    tokenCheck();
    if (connectedAsset === false || createdTikkle === false) {
      navigate('/main');
    }
  }, []);
  return (
    <div>
      <HabitDetail />
    </div>
  );
};

export default HabitDetailPage;
