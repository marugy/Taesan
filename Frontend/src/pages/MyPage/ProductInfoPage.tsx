import React, { useState } from 'react';
import ArrowBack from 'components/Common/ArrowBack';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const ProductInfoPage = () => {
  const [title, setTitle] = useState('OOOO 행복적금');
  const [goldLee, setgoldLee] = useState('기본 이율: 연 1.5%');
  const [period, setPeriod] = useState('6개월');
  const [info, setInfo] = useState('');

  return (
    <div className="bg-back">
      <ArrowBack pageName="내 정보 수정" />
      <div className="flex flex-col items-center mx-10 space-y-3">
        <SavingsOutlinedIcon
          className="text-[#816BFF] w-12"
          sx={{
            fontSize: {
              xs: '100px', // 모바일
              md: '200px', // 태블릿
              lg: '250px', // 데스크톱
            },
          }}
        />
        <div className="font-bold">{title}</div>
        <div>{goldLee}</div>
        <div>{period}</div>
        <div>
          상품 개요: 정기적으로 일정 금액을 저축하여 목표 금액을 모을 수 있는 상품입니다. 계약기간 동안의 저축을
          완료하면 특별한 이율로 이자가 지급됩니다. 적용 이율: 기본 이율: 연 1.5% 충성 보너스 이율: 연 0.5% (계약기간
          동안 무단해지 없이 정상납입 시 적용) 계약기간: 6개월, 12개월, 24개월 중 선택 가능 납입 방식: 매월 고정금액
          자동이체 계약금액: 최소 50,000원 ~ 최대 2,000,000원 해지 조건: 중도해지 시 기본 이율의 50%만 적용되며, 충성
          보너스 이율은 지급되지 않습니다. 특징: 계약기간 동안 무단해지 없이 납입을 완료하면, 충성 보너스 이율이 추가로
          지급됩니다. 온라인 뱅킹을 통해 간편하게 가입 가능합니다. 하드코딩 ㅋ
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPage;
