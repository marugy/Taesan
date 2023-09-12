import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyPageList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate('/mypage/usermodify')}>😀내 정보 수정</button>
      </div>
      <div>
        <button onClick={() => navigate('/mypage/password')}>😁계정 비밀번호 변경</button>
      </div>
      <div>
        <button onClick={() => navigate('/mypage/pincode')}>😀간편 비밀번호 변경</button>
      </div>
      <div>
        <button onClick={() => navigate('/mypage/product')}>😹적금 상품 정보</button>
      </div>
      <div>
        <button onClick={() => navigate('/mypage/account')}>🐛내 계좌 변경</button>
      </div>
      <div>
        <button onClick={() => navigate('/mypage/userdelete')}>😥회원 탈퇴</button>
      </div>
      <div>
        <button>😄로그아웃</button>
      </div>
    </div>
  );
};

export default MyPageList;
