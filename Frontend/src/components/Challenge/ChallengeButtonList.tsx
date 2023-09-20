import { Button } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

const ChallengeButtonList = () => {
  const navigate = useNavigate();

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
        // 존재하는 코드인지 조회
        // 존재하는 방 코드면 참여
        navigate('/challenge/play');
        Toast.fire({
          icon: 'success',
          title: '챌린지에 참여했습니다.',
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="m-5 space-x-5">
        <Button className="bg-main tb:text-md dt:text-xl" onClick={() => navigate('/challenge/create')}>
          생성하기
        </Button>
        <Button className="bg-main tb:text-md dt:text-xl" onClick={handleInputRoomcode}>
          같이하기
        </Button>
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
