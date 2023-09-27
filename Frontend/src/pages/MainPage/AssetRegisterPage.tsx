import React, { useState } from 'react';
import AccountRegister from 'components/AssetRegister/AccountRegister';
import CardRegister from 'components/AssetRegister/CardRegister';
import { Button } from '@material-tailwind/react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';

const AssetRegisterPage = () => {
  const [nextButton, setNextButton] = useState(false);
  const { accessToken, refreshToken, userId } = useUserStore();

  // useQuery를 이용해 계좌 정보 호출

  const getAccountList = async () => {
    const { data: accountList } = await axios.get('https://j9c211.p.ssafy.io/mydata/account-management/accounts', {
      headers: {
        'user-ci': userId,

        'x-api-tran-id': '1234567890M00000000000001',
        'x-api-type': 'user-search',
      },
      params: {
        org_code: 'ssafy00001',
        search_timestamp: Date.now(),
        next_page: 0,
        limit: 500,
      },
    });
    console.log(accountList);
    return accountList;
  };
  const useAccountQuery = useQuery('getAccountList', getAccountList);

  // useQuery를 이용해 카드 정보 호출
  const getCardList = async () => {
    const { data: cardList } = await axios.get('https://j9c211.p.ssafy.io/mydata/card-management/cards', {
      headers: {
        // 거래고유번호, api 유형
        'user-ci': userId,
        'x-api-tran-id': '1234567890M00000000000001',
        'x-api-type': 'user-search',
      },
      params: {
        org_code: 'ssafy00001',
        search_timestamp: Date.now(),
        next_page: 0,
        limit: 500,
      },
    });
    console.log(cardList);
    return cardList;
  };
  const useCardQuery = useQuery('getCardList', getCardList);

  return (
    <div>
      {/* 다음 버튼이 눌리면 카드 등록 페이지로 이동 
      각각의 페이지에서는 useQuery를 이용해 카드 정보와 계좌 정보를 가져오는데,
      useQuery로 받아온 데이터가 있어야하고, 각 데이터에 카드나 계좌가 존재해야 페이지가 렌더링 됨. ( undefined인 경우를 위한 예외처리 )
      */}
      {nextButton ? (
        useCardQuery.data && useCardQuery.data.card_list ? (
          <CardRegister cardList={useCardQuery.data.card_list} />
        ) : null
      ) : useAccountQuery.data && useAccountQuery.data.account_list ? (
        <AccountRegister accountList={useAccountQuery.data.account_list} />
      ) : null}
      {nextButton ? null : (
        <div className="flex justify-center mt-5">
          <Button
            color="blue"
            onClick={() => {
              setNextButton(true);
            }}
          >
            다음 단계로 이동하기
          </Button>
        </div>
      )}
    </div>
  );
};

export default AssetRegisterPage;
