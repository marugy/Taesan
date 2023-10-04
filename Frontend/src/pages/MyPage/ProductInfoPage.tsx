import React, { useState,useEffect } from 'react';
import ArrowBack from 'components/Common/ArrowBack';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import BottomNav from 'components/Common/BottomNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
const ProductInfoPage = () => {
  const [title, setTitle] = useState('OOOO 행복적금');
  const [goldLee, setgoldLee] = useState('기본 이율: 연 1.5%');
  const [period, setPeriod] = useState('6개월');
  const [info, setInfo] = useState('');
  const { accessToken, refreshToken } = useUserStore();
  const navigate = useNavigate();
  const tokenCheck = ()=>{
    axios.post('https://j9c211.p.ssafy.io/api/member-management/members/check/access-token',{},{
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    })
    .then((res)=>{

      if(res.data.response === false){
        navigate('/')
      }
    })
    .catch((err)=>{
      console.log(err)
      navigate('/')
    })
  }
  useEffect(() => {
    tokenCheck();
  }, []);
  return (
    <div className="h-screen flex flex-col font-main">
      <ArrowBack pageName="적금 정보" />
      <div className="flex justify-between mx-10">
        <img src="/Main/logo.png" className="w-32 dt:w-44" />
      </div>
      <div className="w-full flex justify-end">
        <div className="flex items-center font-main text-end text-xs dt:text-base text-gray-600 mr-4">
          2023.10.05 준법감시인-2023-9 심의필 <br></br>(유효기간 2025.10.23)
        </div>
      </div>
      <div className="text-center font-main font-extrabold text-3xl dt:text-4xl mt-5">적금통 핵심설명서</div>
      <div className="flex flex-col items-center  mx-10 space-y-3">
        {/* <SavingsOutlinedIcon
        className="text-[#816BFF] w-12"
        sx={{
          fontSize: {
            xs: '150px', // 모바일
            md: '200px', // 태블릿
            lg: '250px', // 데스크톱
          },
        }}
      /> */}
        <img src="/Main/습관저금통.png" className="w-72 dt:w-80" />

        <div className="font-bold text-3xl">[상품 기본 정보]</div>
        <div className="border border-gray-300 rounded-xl p-2 text-center w-full dt:w-4/5">
          <div className="mt-3 font-semibold text-lg dt:text-xl">기본 금리(세금 납부 전) '2023.10.05 기준</div>
          <div className="font-extrabold text-xl dt:text-3xl text-blue-600 ">연 2.30%</div>
          <div className="font-semibold text-lg dt:text-xl mt-5">중도해지 이율 </div>
          <div className="font-extrabold text-xl dt:text-3xl text-blue-600">기본이율x50%x예치일수/365일</div>
          <div className="font-semibold text-lg dt:text-xl mt-5">적용 세율</div>
          <div className="font-extrabold text-xl dt:text-3xl text-blue-600 ">이자소득의 15.4% </div>
          <div className="text-md dt:text-2xl">(이자소득세(14.0%) + 지방소득세(1.4%))</div>
          <div className="font-light dt:text-lg text-gray-600">
            적용세율은 2023.10.05. 현재의 세율이며, 관계법령의 개정에 따라 변경될 수 있음
          </div>
        </div>
        <br />
        <br />
        <div className="font-bold text-3xl">[유의사항]</div>
        <div className="border border-gray-300 rounded-xl p-2 text-center w-full dt:w-4/5">
          <div className="font-semibold text-lg dt:text-xl text-blue-600 ">예금자 보호 여부 </div>
          <div className="font-bold text-lg dt:text-xl text-blue-600 mb-5">원금과 이자 포함 5천만원까지 가능</div>
          <div className="font-semibold text-sm dt:text-lg text-gray-600">
            이 설명서는 금융소비자의 권익 보호 및 예금상품에 대한 이해 증진을 위하여 '금융소비자 보호에 관한 법률' 및
            관련 규정에 의거, 태산의 내부 통제절차를 거쳐 예금상품의 주요 내용을 쉽게 이해할 수 있도록 작성한
            자료입니다. 설명내용을 제대로 이해하지 못하였음에도 불구하고 설명을 이해했다는 서명을 하거나 녹취기록을
            남기시는 경우, 추후 해당 내용과 관련한 권리구제가 어려울 수 있습니다.
          </div>
        </div>
        {/* <div>
        상품 개요: 정기적으로 일정 금액을 저축하여 목표 금액을 모을 수 있는 상품입니다. 계약기간 동안의 저축을 완료하면
        특별한 이율로 이자가 지급됩니다. 적용 이율: 기본 이율: 연 1.5% 충성 보너스 이율: 연 0.5% (계약기간 동안 무단해지
        없이 정상납입 시 적용) 계약기간: 6개월, 12개월, 24개월 중 선택 가능 납입 방식: 매월 고정금액 자동이체 계약금액:
        최소 50,000원 ~ 최대 2,000,000원 해지 조건: 중도해지 시 기본 이율의 50%만 적용되며, 충성 보너스 이율은 지급되지
        않습니다. 특징: 계약기간 동안 무단해지 없이 납입을 완료하면, 충성 보너스 이율이 추가로 지급됩니다. 온라인 뱅킹을
        통해 간편하게 가입 가능합니다. 하드코딩 ㅋ
      </div> */}
        <div className="h-[10vh]"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default ProductInfoPage;
