import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

import NumericKeypad from 'components/ChallengeCreate/NumericKeypad';
import { Button, Input } from '@material-tailwind/react';
import { Slider } from '@material-tailwind/react';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';

const ChallengeCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [money, setMoney] = useState('');
  const [sliderBarPercent, setSliderBarPercent] = useState(3.3333);
  const [period, setPeriod] = useState(0);
  const { accessToken, refreshToken } = useUserStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleRecruit = (title: string, money: string, period: number) => {
    Swal.fire({
      title: '챌린지 생성',
      html: `<span><b>${title}
            <br>
             ￦ ${money} 
             <br>
             ${period}일
             <br>
             </b></span>
             <br>
             챌린지를 생성하시겠습니까?`,
      icon: 'question',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '생성',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        if (title === '') {
          Toast.fire({
            icon: 'info',
            title: '제목을 입력하세요!',
          });
        } else {
          axios
            .post(
              `https://j9c211.p.ssafy.io/api/challenge-management/challenges/new`,
              {
                title: title,
                period: period,
                price: Number(money),
              },
              {
                headers: {
                  'ACCESS-TOKEN': accessToken,
                  'REFRESH-TOKEN': refreshToken,
                },
              },
            )
            .then((res) => {
              console.log(res);
              navigate('/challenge');
              Toast.fire({
                icon: 'success',
                title: '챌린지를 생성했습니다.',
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    });
    console.log('OK 시 챌린지 생성');
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderBarPercent(newValue);
  };

  useEffect(() => {
    const newPeriod = parseInt((sliderBarPercent / 3.3333).toString(), 10);
    setPeriod(newPeriod);
  }, [sliderBarPercent]);

  return (
    <div>
      <div className="flex flex-col h-screen">
        <ArrowBack pageName="절약 챌린지 생성" />
        <div className="flex flex-col items-center">
          <div className="m-5 w-[300px] dt:w-[350px]">
            <Input label="챌린지 제목" value={title} onChange={onChange} crossOrigin="anonymous" />
          </div>
          <div className="mb-5 flex flex-col items-center">
            <div className="">{period} 일</div>
            <Slider
              color="indigo"
              size="lg"
              defaultValue={sliderBarPercent}
              className="w-[300px] dt:w-[400px]"
              onChange={handleSliderChange}
              min={3.3333}
            />
          </div>
          <NumericKeypad money={money} setMoney={setMoney} />
          <br />
          <div className="mb-5">
            <Button className="bg-main tb:text-md dt:text-xl" onClick={() => handleRecruit(title, money, period)}>
              챌린지 생성
            </Button>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default ChallengeCreatePage;
