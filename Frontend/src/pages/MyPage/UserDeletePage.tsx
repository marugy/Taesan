import React from 'react';
import ArrowBack from 'components/Common/ArrowBack';
import { Button } from '@material-tailwind/react';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useNavigate } from 'react-router-dom';

const UserDeletePage = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken, name } = useUserStore();

  const handleDeleteUser = () => {
    Swal.fire({
      title: `회원님의 이름을 입력해주세요.`,
      text:'이름이 맞으면 회원 탈퇴가 완료됩니다.',
      icon: 'question',
      input: 'text',

      confirmButtonColor: '#ef4444',
      confirmButtonText: '회원탈퇴',

      showCancelButton: true,
      cancelButtonColor: '#71717a',
      cancelButtonText: '취소',

      inputValidator: (value) => {
        if (!value || value !== name) {
          return '잘못된 입력입니다!!';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value === name) {
          axios
            .delete(`https://j9c211.p.ssafy.io/api/member-management/members`, {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            })
            .then((res) => {
              navigate('/');
              Toast.fire({
                icon: 'success',
                title: '회원탈퇴했습니다.',
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    });
  };

  return (
    <div>
      <ArrowBack pageName="회원 탈퇴" />
      <div className="h-screen flex flex-col  justify-center mx-10 space-y-3 font-main ">
        <div className="flex justify-center w-full mb-7">
        <img src="/MyPage/deleteUser.png" className="aspect-square w-40 dt:w-72"/>
        </div>
        <div className="font-bold text-xl dt:text-3xl">회원 탈퇴 안내</div>
        <div className="dt:text-lg"><span style={{ color: '#059669' }}>{name}</span>님께서 회원 탈퇴를 원하신다니 저희 '태산 : 泰山'의 서비스가 많이 부족하고 미흡했나 봅니다. 불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의 불편함을 해결해 드리도록 노력하겠습니다.</div>
        <br/>
        <div className="mt-10 font-bold text-xl dt:text-3xl">유의사항</div>
        <div className="dt:text-lg">회원 탈퇴 전에 꼭 확인하세요.</div>
        <div className="dt:text-lg">• '태산 : 泰山' 회원 탈퇴시 '태산 : 泰山' 서비스에 탈퇴되며 사용하고 계신 아이디는 복구가 절대 불가능합니다. </div>
        <div className="dt:text-lg">• '태산 : 泰山' 회원 탈퇴시 회원님의 '샀다 치고' 목록, 등록한 영수증, 참가중인 절약 챌린지 정보, <span style={{ color: '#059669' }}>{name}</span>님의 소비 패턴과 같은 개인정보들은 모두 삭제되며, 삭제된 데이터는 복구가 불가능합니다. 다만 법령에 의하여 보관해야 하는 경우 또는 회원가입 남용, 서비스 부정사용 등을 위한 회사 내부정책에 의하여 보관해야하는 정보는 회원탈퇴 후에도 일정기간 보관됩니다. 자세한 사항은 태산 개인정보 처리방침에서 확인하실 수 있습니다.</div>
        <Button size="lg" className="bg-red-500" onClick={handleDeleteUser}>
          탈퇴하기
        </Button>
      </div>
    </div>
  );
};

export default UserDeletePage;
