import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChallengeMemberList from 'components/ChallengeRecruit/ChallengeMemberList';
import RoomCode from 'components/ChallengeRecruit/RoomCode';
import { Button } from '@material-tailwind/react';
import ArrowBack from 'components/Common/ArrowBack';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

const ChallengeRecruitPage = () => {
  const [roomcode, setRoomcode] = useState('ABCDEF');
  const [playerOne, setPlayerOne] = useState('신규람');
  const [playerTwo, setPlayerTwo] = useState('김하영');
  const [playerThree, setPlayerThree] = useState('배용현');
  const [playerFour, setPlayerFour] = useState('김성준');
  const [playerFive, setPlayerFive] = useState('이지헌');
  const navigate = useNavigate();
  // 방 정보 불러오기
  console.log('GET_챌린지 모집정보');
  // 방 멤버 리스트 불러오기
  console.log('GET_챌린지 모집멤버 정보');

  // 챌린지 시작하기
  const handlePlay = () => {
    Swal.fire({
      title: '챌린지 시작',
      html: `<span><b>
      ${playerOne}
            <br>
            ${playerTwo}
             <br>
             ${playerThree}
             <br>
             ${playerFour}
             <br>
             ${playerFive}
             </b></span>
             <br>
             <br>
             챌린지를 시작하시겠습니까?`,
      icon: 'question',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '시작',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: 'success',
          title: '챌린지를 시작했습니다!',
        });
        console.log('POST_챌린지 모집정보');
        console.log('방 이동');
        navigate('/challenge/play');
      }
    });
  };
  // 챌린지 나가기
  const handleExit = () => {
    console.log('DELETE_유저 IN 챌린지');
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
        Toast.fire({
          icon: 'success',
          title: '챌린지에서 나갔습니다!!',
        });
        navigate('/challenge');
      }
    });
  };
  return (
    <div>
      <ArrowBack pageName="절약 챌린지 모집" />
      <div className="flex flex-col items-center">
        <div className="m-5">
          <div className="mr-14 tb:mr-14 dt:mr-32 mb-10 tb:text-md dt:text-xl font-bold">
            일주일동안 열심히 모아봐요
          </div>
          <div className="mr-14 tb:mr-14 dt:mr-32 mb-2 tb:text-md dt:text-xl font-bold">
            절약 기간 <br /> 12일
          </div>
          <div className="mr-14 tb:mr-14 dt:mr-32 tb:text-md dt:text-xl font-bold">
            목표소비금액 <br /> ￦100,000원
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#E3E9ED] w-[400px] dt:w-[500px] rounded-xl mb-5">
          <RoomCode roomcode={roomcode} />
          <ChallengeMemberList
            playerOne={playerOne}
            playerTwo={playerTwo}
            playerThree={playerThree}
            playerFour={playerFour}
            playerFive={playerFive}
          />
          <div className="mb-5 space-x-5">
            <Button className="bg-main tb:text-md dt:text-xl" onClick={handlePlay}>
              시작하기
            </Button>
            <Button className="bg-main tb:text-md dt:text-xl" onClick={handleExit}>
              나가기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeRecruitPage;
