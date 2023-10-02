import React, { useEffect, useState } from 'react';
import MainAssetInfo from 'components/Main/MainAssettInfo';
import MainMenu from 'components/Main/MainMenu';
import MainAssetRegister from 'components/Main/MainAssetRegister';
import MainCardInfo from 'components/Main/MainCardInfo';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import BottomNav from 'components/Common/BottomNav';
import { useUserStore } from 'store/UserStore';
import Notification from 'components/Common/Notification';
import { useNavigate } from 'react-router';

const MainPage = () => {
  const navigate = useNavigate();

  // 스토어에서 AT,RT 가져오기
  const { accessToken, refreshToken, setName, isTikkleCreated, storeDate, setStoreDate } = useUserStore();

  // 사용자 자산 관련 State
  const [createdTikkle, setCreatedTikkle] = useState(false); // 티끌모아 적금 생성 여부
  const [connectedAsset, setConnectedAsset] = useState(false); // 자산 연동 여부
  const [bankName, setBankName] = useState('카카오뱅크'); // 은행 이름
  const [accountNumber, setAccountNumber] = useState('110509677498'); // 계좌 번호
  const [balance, setBalance] = useState(870120); // 잔액
  const [cardList, setCardList] = useState([
    // Axios 쏘고 응답값 갈아 끼우기
    {
      cardId: 12312321321123121212,
      cardCompany: '신한은행',
      cardNumber: '2391-2812-3851-2847',
      cardType: 'Credit',
    },
    {
      cardId: 12312321321123121213,
      cardCompany: '카카오뱅크',
      cardNumber: '1364-1254-1634-1434',
      cardType: 'Credit',
    },
    {
      cardId: 12312321321123121213,
      cardCompany: '토스뱅크',
      cardNumber: '1534-1934-7834-9734',
      cardType: 'Check',
    },
    {
      cardId: 12312321321123121213,
      cardCompany: '우리은행',
      cardNumber: '1234-4812-4721-9281',
      cardType: 'Check',
    },
  ]); // 카드 리스트

  // useQuery를 이용해 사용자 정보 호출 ( 2개의 쿼리 사용 )
  // 쿼리 1
  const getInfo = async () => {
    const { data: userProfileInfo } = await axios.get('https://j9c211.p.ssafy.io/api/member-management/members/info', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    console.log(userProfileInfo);
    console.log(accessToken);
    setName(userProfileInfo.response.name);
    return userProfileInfo;
  };
  const query = useQuery('getInfo', getInfo);

  // 쿼리 2 ( API 관련 임시 주석처리 )
  const getAsset = async () => {
    const { data: userAssetInfo } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/assets/main', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    console.log(userAssetInfo);
    setCreatedTikkle(userAssetInfo.response.createdTikkle);
    setConnectedAsset(userAssetInfo.response.connectedAsset);
    setBankName(userAssetInfo.response.account.bank);
    setAccountNumber(userAssetInfo.response.account.accountNum);
    setBalance(userAssetInfo.response.account.balance);
    setCardList(userAssetInfo.response.cardList);
    return userAssetInfo;
  };
  const query2 = useQuery('getAsset', getAsset);

  // const mutation = useMutation(testPost);
  // console.log(mutation);

  // 알림
  useEffect(() => {
    const handleNotification = async () => {
      await Notification({
        navigate,
        accessToken,
        refreshToken,
        connectedAsset,
        isTikkleCreated,
        storeDate,
        setStoreDate,
      });
    };

    handleNotification();
  }, []);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="dt:w-screen dt:h-screen dt:flex">
        <div className="mt-3 dt:fixed dt:top-3 dt:left-6">
          <img src="/Main/logo.png" className="h-16" />
        </div>

        {/* 자산 등록 여부에 따라 다른 화면 띄우기 */}
        <div className="dt:w-[50vw] dt:flex dt:flex-col dt:justify-center dt:items-center">
          {connectedAsset ? <MainCardInfo cardList={cardList} main={'1'} /> : <MainAssetRegister />}

          <MainAssetInfo
            createdTikkle={createdTikkle}
            connectedAsset={connectedAsset}
            bankName={bankName}
            accountNumber={accountNumber}
            balance={balance}
          />
        </div>
        <div className="dt:w-[50vw] dt:flex dt:flex-col dt:justify-center dt:items-center">
          <MainMenu />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default MainPage;
