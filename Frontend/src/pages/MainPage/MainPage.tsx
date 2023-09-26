import React, { useState } from 'react';
import MainAssetInfo from 'components/Main/MainAssettInfo';
import MainMenu from 'components/Main/MainMenu';
import MainAssetRegister from 'components/Main/MainAssetRegister';
import MainCardInfo from 'components/Main/MainCardInfo';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import BottomNav from 'components/Common/BottomNav';
import { useUserStore } from 'store/UserStore';

const MainPage = () => {
  // 스토어에서 AT,RT 가져오기
  const { accessToken, refreshToken, setName } = useUserStore();

  // 사용자 자산 관련 State
  const [createdTikkle, setCreatedTikkle] = useState(false); // 티끌모아 적금 생성 여부
  const [connectedAsset, setConnectedAsset] = useState(false); // 자산 연동 여부
  const [bankName, setBankName] = useState('카카오뱅크'); // 은행 이름
  const [accountNumber, setAccountNumber] = useState('110509677498'); // 계좌 번호
  const [balance, setBalance] = useState(0); // 잔액
  const [cardList, setCardList] = useState([
    {
      cardId: 12312321321123121212,
      cardCompany: '신한은행',
      cardNumber: '1234-1234-1234-1234',
      cardType: 'Credit',
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
    setName(userProfileInfo.response.name);
    return userProfileInfo;
  };
  const query = useQuery('getInfo', getInfo);

  // 쿼리 2
  const getSaving = async () => {
    const { data: userAssetInfo } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/assets', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    console.log(userAssetInfo);
    setCreatedTikkle(userAssetInfo.response.createdTikkle);
    setConnectedAsset(userAssetInfo.response.connetedAsset);
    setBankName(userAssetInfo.response.account.bank);
    setAccountNumber(userAssetInfo.response.account.accountNum);
    setBalance(userAssetInfo.response.account.balance);
    setCardList(userAssetInfo.response.cardList);
    return userAssetInfo;
  };
  const query2 = useQuery('getSaving', getSaving);

  // const mutation = useMutation(testPost);
  // console.log(mutation);
  return (
    <div className="flex flex-col items-center h-full">
      <div className="dt:w-screen dt:h-screen dt:flex">
        <div className="mt-3 dt:fixed dt:top-3 dt:left-6">
          <img src="/Main/logo.png" className="h-16" />
        </div>

        {/* 자산 등록 여부에 따라 다른 화면 띄우기 */}
        {/* <MainAssetRegister /> */}
        <div className="dt:w-[50vw] dt:flex dt:flex-col dt:justify-center dt:items-center">
          <MainCardInfo cardList={cardList} />
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
