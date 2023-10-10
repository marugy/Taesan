import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useUserStore } from 'store/UserStore';
import axios from 'axios';
import dayjs from 'dayjs';
import { Toast } from 'components/Common/Toast';
import { Pincode } from 'components/Common/Pincode';
import Swal from 'sweetalert2';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';

const SavingDelete = () => {
  const navigate = useNavigate();
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);
  const [pincodeVisible, setPincodeVisible] = useState(false);
  const [savingmoney, setSavingMoney] = useState(0);
  const [date, setDate] = useState(dayjs());
  const [aftermoney, setAfterMoney] = useState(0);
  const { accessToken, refreshToken } = useUserStore();
  // 쿼리 1
  const getSavingInfo = async () => {
    const { data: savingTikkleInfo } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/tikkle/', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    const today = dayjs();
    setSavingMoney(savingTikkleInfo.response.curMoney);
    setAfterMoney(savingTikkleInfo.response.futureMoney);
    setDate(savingTikkleInfo.response.endDate);

    // console.log(userProfileInfo);
    // setName(userProfileInfo.response.name);
    return savingTikkleInfo;
  };
  const query = useQuery('getSavingInfo', getSavingInfo);
  const today = dayjs();
  const expirationDate = dayjs(date).diff(today, 'day') + 1;
  const { name } = useUserStore();
  const onCorrectPincode = () => {
    setPincodeVisible(false);
    // POST_결제 API
    axios
      .delete('https://j9c211.p.ssafy.io/api/asset-management/tikkle', {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((respone) => {
        console.log(respone);

        Toast.fire({
          icon: 'success',
          title: '해지를 완료했습니다!',
        });
        navigate('/main');
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: '해지에 실패했습니다!',
        });
        navigate('/main');
        console.log(error);
        console.log('여기');
      });
  };
  const deleteTikkle = () => {
    Swal.fire({
      title: '티끌 적금 해지',
      html: `<span>
            <b> 만기 까지 ${expirationDate}일 남았습니다.
            <br/>
            <br>
              지금 해지하면 기본 이율의 <br/> 50%에 해당하는 이자를 받게 됩니다.
             <br>
             </b></span>
             <br>
             정말 해지하시겠습니까?`,
      icon: 'question',

      confirmButtonColor: 'red',
      confirmButtonText: '해지',

      showCancelButton: true,
      cancelButtonColor: 'gray',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        setPincodeVisible(true);
      }
    });
  };
  return (
    <div className="bg-back">
      <ArrowBack pageName="내 적금통" />
      {pincodeVisible && <Pincode onCorrectPincode={onCorrectPincode} visibleFalse={() => setPincodeVisible(false)} />}
      <div className="flex justify-end mr-5 mt-5">
        <Button
          color="blue"
          onClick={() => {
            navigate('/saving/detail');
          }}
        >
          상세 내역
        </Button>
      </div>
      <div className="text-center text-3xl text font-semibold mt-5">
        {name}님의 <br /> 적금통 해지하기
      </div>
      <div className="flex justify-center">
        <img className="h-44 dt:h-64" src="/Main/습관저금통.png" alt="pig" />
      </div>
      <div className="flex flex-col items-center mx-5 ">
        <div className="border-4 rounded-xl mb-5 p-3">
          <div className="mb-2">
            <span className="text-sm dt:text-xl text-gray-500 ">현재 적금통에 적립된 금액 : </span>
            <span className="text-sm dt:text-xl text-main font-bold">
              {savingmoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </span>
          </div>
          <div className="mb-2">
            <span className="text-sm dt:text-xl text-gray-500">만기까지 남은 일자 : </span>
            <span className="text-sm dt:text-xl text-main font-bold">{expirationDate}일</span>{' '}
          </div>
          <div className="">
            <span className="text-sm dt:text-xl text-gray-500">현재 해지시 출금액 : </span>
            <span className="text-sm dt:text-xl text-main font-bold">
              {aftermoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </span>
          </div>
        </div>
        <div className="text-sm dt:text-xl text-gray-800 ">적금통 계좌 해지 안내입니다.</div>
        <div className="text-xs dt:text-lg text-gray-800 mx-10">
          적금통 계좌를 해지하시기 전에 위 주의 사항을 숙고하시고, 궁금한 사항은 문의바랍니다. 주의! 계좌를 해지하게
          되면 현재까지의 이자를 받을 수 없습니다.
        </div>
        <Button
          className="my-4"
          size="lg"
          color="red"
          onClick={() => {
            deleteTikkle();
          }}
        >
          적금통 해지하기
        </Button>
        <div className="h-[120px]" />
      </div>
      <BottomNav />
    </div>
  );
};

export default SavingDelete;
