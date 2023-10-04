import React, { useState } from 'react';
import CardRegister from 'components/AssetRegister/CardRegister';
import { Button } from '@material-tailwind/react';
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography } from '@material-tailwind/react';
import { ACCOUNT_DATA } from 'constants/DUMMY';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { useQuery } from 'react-query';
import { useUserStore } from 'store/UserStore';
import axios from 'axios';
import AccountRegister from 'components/ChangeAccount/AccountRegister';
import AssetRegisterList from 'components/ChangeAccount/AssetRegisterList';

const ChangeAccountPage = () => {
  const { accessToken, refreshToken, connectedAsset, setConnectedAsset, createdTikkle, setCreatedTikkle } =
    useUserStore();
  const [selectedItem, setSelectedItem] = useState(null);
  const [changeAccount, setChangeAccount] = useState('');
  const [bankName, setBankName] = useState(''); // 은행 이름
  const [accountNumber, setAccountNumber] = useState(''); // 계좌 번호
  const [balance, setBalance] = useState(0); // 잔액

  const handleItemClick = (index: any, accountNum: string) => {
    setSelectedItem(index);
    // console.log(accountNum);
  };

  // 1.계좌 목록 불러오는 함수
  const getAccountList = async () => {
    const { data: accountList } = await axios.get(
      'https://j9c211.p.ssafy.io/api/asset-management/assets/account/list',
      {
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

  // 2. 내 자산 조회하는 함수
  const getAsset = async () => {
    const { data: userAssetInfo } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/assets/main', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    setCreatedTikkle(userAssetInfo.response.createdTikkle);
    setConnectedAsset(userAssetInfo.response.connectedAsset);
    setBankName(userAssetInfo.response.account.bank);
    setAccountNumber(userAssetInfo.response.account.accountNum);
    setBalance(userAssetInfo.response.account.balance);
    return userAssetInfo;
  };
  const { data: userAssetInfo } = useQuery('getAsset', getAsset);
  const [nextButton, setNextButton] = useState(false);

  return (
    <div className="h-scren flex flex-col">
      <ArrowBack pageName="내 정보 수정" />
      <div className="h-screen flex flex-col items-center mt-4">
        <Typography variant="h4" color="gray">
          현재 등록 계좌
        </Typography>

        <div className="flex justify-between">
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <img src={`/Account/${bankName}.png`} className="h-8 border rounded-full" />
            </div>
            <div className="font-semibold font-main text-xs">
              {bankName} {accountNumber}{' '}
            </div>
          </div>
          <div className="flex items-center font-main font-semibold">
            {balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </div>
        </div>
        <hr className="my-5 border-gray-400 border-1 w-full" />

        <AssetRegisterList accountNumber={accountNumber} />
        {/* {useAccountQuery.data && useAccountQuery.data.response.accountList ? (
          <AccountRegister setAccount={setChangeAccount} accountList={useAccountQuery.data.response.accountList} />
        ) : null}
        <BottomNav /> */}
      </div>
    </div>
  );
};

export default ChangeAccountPage;
