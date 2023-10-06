import { Button } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';

const ChallengeButtonList = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useUserStore();
  const [challengeState, setChallengeState] = useState(0);
  const [challengeId, setChallengeId] = useState(0);

  useEffect(() => {
    axios
      .get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/state`, {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((res) => {
        console.log(res.data.response);
        if (res.data.response.state === 0) {
          // 생성하기
          setChallengeState(0);
        } else if (res.data.response.state === 1) {
          setChallengeState(1);
          setChallengeId(res.data.response.challengeId);
        } else if (res.data.response.state === 2) {
          setChallengeState(2);
          setChallengeId(res.data.response.challengeId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputRoomcode = () => {
    Swal.fire({
      title: '방 코드를 입력하세요.',
      icon: 'question',
      input: 'text',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '참여',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',

      inputValidator: (value) => {
        if (!value) {
          return '방 코드를 입력해주세요!';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(
            `https://j9c211.p.ssafy.io/api/challenge-management/challenges/join`,
            {
              uuid: result.value,
            },
            {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            },
          )
          .then((res) => {
            navigate('/challenge/recruit');
            Toast.fire({
              icon: 'success',
              title: '챌린지에 참여했습니다.',
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="m-5 space-x-7">
        {challengeState === 0 && (
          <Button className="bg-main tb:text-md dt:text-xl" onClick={() => navigate('/challenge/create')}>
            생성하기
          </Button>
        )}
        {challengeState === 1 && (
          <Button className="bg-main tb:text-md dt:text-xl" onClick={() => navigate(`/challenge/recruit`)}>
            모집중
          </Button>
        )}
        {challengeState === 2 && (
          <Button className="bg-main tb:text-md dt:text-xl" onClick={() => navigate('/challenge/play')}>
            진행중
          </Button>
        )}
        {challengeState === 0 && (
          <Button className="bg-main tb:text-md dt:text-xl" onClick={handleInputRoomcode}>
            같이하기
          </Button>
        )}
      </div>
      {/* <Button onClick={() => navigate('/challenge/recruit')}>모집중</Button>
      <Button onClick={() => navigate('/challenge/play')}>진행중</Button> */}
      <div>
        <Button className="bg-main tb:text-md dt:text-xl" onClick={() => navigate('/challenge/result')}>
          이전 챌린지
        </Button>
      </div>
    </div>
  );
};

export default ChallengeButtonList;
