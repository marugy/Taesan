import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { is } from 'date-fns/locale';

interface MainAssettInfoProps {
  createdTikkle: boolean;
  connectedAsset: boolean;
  bankName: string;
  accountNumber: string;
  balance: number;
}
const MainAssettInfo = ({ createdTikkle, connectedAsset, bankName, accountNumber, balance }: MainAssettInfoProps) => {
  // const [isAssetRegisterd, setIsAssetRegisterd] = useState(false); // 자산 등록 유무 확인
  // const [isSavingRegisterd, setIsSavingRegisterd] = useState(false); // 저금통 등록 유무 확인

  const navigate = useNavigate();
  return (
    <div className="dt:w-[60%] dt:mt-4">
      <div className="font-extrabold text-lg font-main">내자산</div>
      {/* 계좌가 등록되어있는지 유무에 따라 다른 것을 띄워야함 */}

      {connectedAsset ? (
        <div className="flex justify-between">
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <img src={`/Account/${bankName}.png`} className="h-8 border rounded-full" />
            </div>
            <div className="font-semibold font-main">
              {bankName} {accountNumber}{' '}
            </div>
          </div>

          <div className="flex items-center font-main font-semibold">{balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex items-center font-semibold font-main">자산을 먼저 등록해주세요.</div>
          <Button
            size="sm"
            className=""
            color="blue"
            onClick={() => {
              navigate('/main/mydata');
            }}
          >
            자산 등록
          </Button>
        </div>
      )}

      {/* 저금통 등록 유무에 따라 다른 화면 띄우기 */}
      {createdTikkle ? (
        <div className="flex justify-between mt-1">
          <div className="flex items-center font-semibold font-main">적금통을 확인하시겠습니까?</div>
          <Button
            size="sm"
            color="blue"
            onClick={() => {
              navigate('/saving');
            }}
          >
            적금통 조회
          </Button>
        </div>
      ) : (
        <div className="flex justify-between mt-1">
          <div className="flex items-center font-semibold font-main">적금통을 생성해주세요.</div>
          <Button
            size="sm"
            color="blue"
            onClick={() => {
              navigate('/saving/create');
            }}
          >
            적금통 만들기
          </Button>
        </div>
      )}
    </div>
  );
};

export default MainAssettInfo;
