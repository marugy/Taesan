import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ChallengeMemberList from 'components/ChallengeRecruit/ChallengeMemberList';
import RoomCode from 'components/ChallengeRecruit/RoomCode';
import { Button } from '@material-tailwind/react';
import ArrowBackParam from 'components/Common/ArrowBackParam';
import BottomNav from 'components/Common/BottomNav';
import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';

import dayjs from 'dayjs';
import { useQuery } from 'react-query';

const ChallengeRecruitPage = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useUserStore();
  const [challengeId, setChallengeId] = useState(0);
  const [challengeState, setChallengeState] = useState(0);
  const [roomcode, setRoomcode] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [period, setPeriod] = useState('');
  const [players, setPlayers] = useState([]);
  const [creator, setCreator] = useState(false);

  console.log('챌린지상태', challengeState);
  console.log('챌린지아이디', challengeId);

  const fetchPlayersData = async () => {
    const response = await axios.get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/state`, {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });

    const chID = response.data.response.challengeId;
    setChallengeId(response.data.response.challengeId);
    setChallengeState(response.data.response.state);
    const challengeResponse = await axios.get(
      `https://j9c211.p.ssafy.io/api/challenge-management/challenges/recruit/${chID}`,
      {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      },
    );

    return challengeResponse.data.response;
  };

  const {
    data: challengeData,
    isError,
    isFetching,
  } = useQuery('playersData', fetchPlayersData, {
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (challengeData) {
      setTitle(challengeData.title);
      setPrice(challengeData.price);

      // const today = dayjs(); // 오늘 날짜
      // const targetDate = dayjs(challengeData.endDate); // 만기일
      // const duration = targetDate.diff(today, 'day') + 1;
      setPeriod(challengeData.period);

      setRoomcode(challengeData.uuid);
      setCreator(challengeData.creator);

      setPlayers(challengeData.participantNames); // 사용자 업데이트
    }
  }, [challengeData]);
  console.log(challengeData);

  // 챌린지 시작하기
  const handlePlay = () => {
    Swal.fire({
      title: '챌린지 시작',
      html: `
        <span>${players}</span>
        <br>
        <br>
        챌린지를 시작하시겠습니까?
    `,
      icon: 'question',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '시작',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',
    }).then((result) => {
      // POST 챌린지 시작
      if (result.isConfirmed) {
        axios
          .post(
            `https://j9c211.p.ssafy.io/api/challenge-management/challenges/start/${challengeId}`,
            {},
            {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            },
          )
          .then((res) => {
            console.log(res);
            Toast.fire({
              icon: 'success',
              title: '챌린지를 시작했습니다!',
            });
            navigate('/challenge');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  // 챌린지 나가기
  const handleExit = () => {
    Swal.fire({
      title: '챌린지 퇴장',
      html: `챌린지에서 나가시겠습니까?`,
      icon: 'question',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '나가기',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(
            `https://j9c211.p.ssafy.io/api/challenge-management/challenges/exit/${challengeId}`,
            {},
            {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            },
          )
          .then((res) => {
            navigate('/challenge');
            Toast.fire({
              icon: 'success',
              title: '챌린지를 나갔습니다.',
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  // 챌린지 폭파
  const handleBomb = () => {
    Swal.fire({
      title: '챌린지 삭제',
      html: `챌린지를 삭제하시겠습니까?`,
      icon: 'question',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '삭제하기',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/${challengeId}`, {
            headers: {
              'ACCESS-TOKEN': accessToken,
              'REFRESH-TOKEN': refreshToken,
            },
          })
          .then((res) => {
            navigate('/challenge');
            Toast.fire({
              icon: 'success',
              title: '챌린지를 삭제했습니다.',
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <ArrowBackParam pageName="절약 챌린지 모집" param="/challenge" />
      <div className="flex flex-col items-center">
        <img src="/Challenge/ChallengeRecruit.png" alt="ChallengeRecruit" className="w-auto h-24 dt:w-auto dt:h-52 " />
        <div className=" border-4 rounded-xl p-3 mb-2">
          <div className="mr-14 tb:mr-14 dt:mr-32 mb-5 tb:text-md dt:text-xl font-bold">{title}</div>
          <div className="flex">
            <div className="mr-14 tb:mr-14 dt:mr-32 mb-2 tb:text-md dt:text-xl">
              <div className=" font-bold">절약 기간</div>
              <div>{period}일</div>
            </div>
            <div className="mr-14 tb:mr-14 dt:mr-32  tb:text-md dt:text-xl ">
              <div className="font-bold">목표소비금액</div>
              <div>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#E3E9ED] w-11/12 p-1 rounded-xl ">
          <RoomCode roomcode={roomcode} />
          <ChallengeMemberList players={players} />
          <div className="mb-3 space-x-5">
            {creator && (
              <Button className="bg-main tb:text-md dt:text-xl" onClick={handlePlay}>
                시작하기
              </Button>
            )}
            {!creator && (
              <Button className="bg-main tb:text-md dt:text-xl" onClick={handleExit}>
                나가기
              </Button>
            )}
            {creator && (
              <Button className="bg-main tb:text-md dt:text-xl" onClick={handleBomb}>
                삭제하기
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeRecruitPage;
