import React, { useState } from 'react';
import AccountRegister from 'components/AssetRegister/AccountRegister';
import CardRegister from 'components/AssetRegister/CardRegister';
import { Button } from '@material-tailwind/react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import Swal2 from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AssetRegisterPage = () => {
  const navigate = useNavigate();
  const [nextButton, setNextButton] = useState(false);
  const { accessToken, refreshToken, userId, setConnectedAsset } = useUserStore();
  const [account, setAccount] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // useQuery를 이용해 계좌 정보 호출

  const getAccountList = async () => {
    const { data: accountList } = await axios.get(
      'https://j9c211.p.ssafy.io/api/asset-management/assets/account/list',
      {
        // headers: {
        //   'user-ci': userId,

        //   'x-api-tran-id': '1234567890M00000000000001',
        //   'x-api-type': 'user-search',
        // },
        // params: {
        //   org_code: 'ssafy00001',
        //   search_timestamp: Date.now(),
        //   next_page: 0,
        //   limit: 500,
        // },

        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      },
    );
    console.log(accountList);
    return accountList;
  };
  const useAccountQuery = useQuery('getAccountList', getAccountList);

  // useQuery를 이용해 카드 정보 호출
  const getCardList = async () => {
    const { data: cardList } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/assets/card/list', {
      // headers: {
      //   // 거래고유번호, api 유형
      //   'user-ci': userId,
      //   'x-api-tran-id': '1234567890M00000000000001',
      //   'x-api-type': 'user-search',
      // },
      // params: {
      //   org_code: 'ssafy00001',
      //   search_timestamp: Date.now(),
      //   next_page: 0,
      //   limit: 500,
      // },
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    console.log(cardList);
    return cardList;
  };
  const useCardQuery = useQuery('getCardList', getCardList);
  const enrollAsset = () => {
    // 자산 등록 API
    axios
      .post(
        'https://j9c211.p.ssafy.io/api/member-management/members/account',

        { account: account },
        {
          headers: {
            'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        },
      )
      .then((response) => {
        Swal2.fire({
          icon: 'success',
          title: '자산 연동이 완료되었습니다.',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(response);
        console.log(account, '계좌번호');
        setConnectedAsset(true);
        navigate('/main');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextButton = () => {
    if (account === '') {
      setErrorMsg('등록할 계좌를 선택해주세요!');
      return;
    }
    setNextButton(true);
    setErrorMsg('');
  };

  return (
    <div className="flex flex-col items-center">
      {/* 다음 버튼이 눌리면 카드 등록 페이지로 이동 
      각각의 페이지에서는 useQuery를 이용해 카드 정보와 계좌 정보를 가져오는데,
      useQuery로 받아온 데이터가 있어야하고, 각 데이터에 카드나 계좌가 존재해야 페이지가 렌더링 됨. ( undefined인 경우를 위한 예외처리 )
      */}
      {nextButton ? (
        useCardQuery.data && useCardQuery.data.response.cardList ? (
          <CardRegister cardList={useCardQuery.data.response.cardList} />
        ) : null
      ) : useAccountQuery.data && useAccountQuery.data.response.accountList ? (
        <AccountRegister setAccount={setAccount} accountList={useAccountQuery.data.response.accountList} />
      ) : null}
      {nextButton ? (
        <div className="text-center mt-10">
          <Button
            color="blue"
            onClick={() => {
              enrollAsset();
            }}
          >
            자산 연동하기
          </Button>
        </div>
      ) : (
        <div className="flex justify-center mt-5">
          <Button color="blue" onClick={handleNextButton}>
            다음 단계로 이동하기
          </Button>
        </div>
      )}
      {errorMsg && <div className="text-red-500">{errorMsg}</div>}
    </div>
  );
};

export default AssetRegisterPage;
