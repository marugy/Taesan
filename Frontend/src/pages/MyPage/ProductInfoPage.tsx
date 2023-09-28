import React, { useState } from 'react';
import ArrowBack from 'components/Common/ArrowBack';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import BottomNav from 'components/Common/BottomNav';

const ProductInfoPage = () => {
  const [title, setTitle] = useState('OOOO 행복적금');
  const [goldLee, setgoldLee] = useState('기본 이율: 연 1.5%');
  const [period, setPeriod] = useState('6개월');
  const [info, setInfo] = useState('');

  return (
    <div className='h-screen flex flex-col font-main'>
      <ArrowBack pageName='적금 정보'/>
      <div className="flex justify-between">
      <img src="/Main/logo.png" className="w-44" />
      <div className="flex items-center font-main text-gray-600">2023.10.05 준법감시인-2023-9 심의필 (유효기간 2025.10.23)
</div>
</div>
      <div className="text-center font-main font-semibold text-3xl dt:text-4xl mt-5">[태산] 적금통 핵심설명서</div>
    <div className="flex flex-col items-center mt-10 mx-10 space-y-3">
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


      <div>상품 기본 정보</div>
      <div>상품 특징</div>
      <div>기본 금리(세금 납부 전) '2023.10.05 기준</div>
      <div>예금자 보호</div>
      {/* /////////////// */}
      <div>유의사항</div>
      <div>중도해지 이율 / 가입일 당시 홈페이지에 고시한 중도해지이율 적용</div>
      <div>계약해지 방법</div>
      <div>이 설명서는 금융소비자의 권익 보호 및 예금상품에 대한 이해 증진을 위하여 '금융소비자 보호에 관한 법률' 및 관련 규정에 의거,
태산의 내부 통제절차를 거쳐 예금상품의 주요 내용을 쉽게 이해할 수 있도록 작성한 자료입니다.

설명내용을 제대로 이해하지 못하였음에도 불구하고 설명을 이해했다는 서명을 하거나 녹취기록을 남기시는 경우, 추후 해당 내용과 관련한 권리구제가 어려울 수 </div>
      <div>
        상품 개요: 정기적으로 일정 금액을 저축하여 목표 금액을 모을 수 있는 상품입니다. 계약기간 동안의 저축을 완료하면
        특별한 이율로 이자가 지급됩니다. 적용 이율: 기본 이율: 연 1.5% 충성 보너스 이율: 연 0.5% (계약기간 동안 무단해지
        없이 정상납입 시 적용) 계약기간: 6개월, 12개월, 24개월 중 선택 가능 납입 방식: 매월 고정금액 자동이체 계약금액:
        최소 50,000원 ~ 최대 2,000,000원 해지 조건: 중도해지 시 기본 이율의 50%만 적용되며, 충성 보너스 이율은 지급되지
        않습니다. 특징: 계약기간 동안 무단해지 없이 납입을 완료하면, 충성 보너스 이율이 추가로 지급됩니다. 온라인 뱅킹을
        통해 간편하게 가입 가능합니다. 하드코딩 ㅋ
      </div>
      <BottomNav/>
    </div>
    </div>
  );
};

export default ProductInfoPage;
