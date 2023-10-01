import React, { useState } from 'react';
import AccountRegister from 'components/AssetRegister/AccountRegister';
import CardRegister from 'components/AssetRegister/CardRegister';
import { Button } from '@material-tailwind/react';
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography } from '@material-tailwind/react';
import { ACCOUNT_DATA } from 'constants/DUMMY';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { useQuery } from 'react-query';
import { useUserStore } from 'store/UserStore';
import axios from 'axios';

const ChangeAccountPage = () => {
  const { accessToken,refreshToken} = useUserStore();
  const [selectedItem, setSelectedItem] = useState(null);
  const [changeAccount,setChangeAccount] = useState('');

  const handleItemClick = (index: any, accountNum: string) => {
    setSelectedItem(index);
    // console.log(accountNum);
  };

  // 1.계좌 목록 불러오는 함수
  const getAccountList = async () => {
    const { data: accountList } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/assets/account/list', {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      
    });
    console.log(accountList);
    return accountList;
  };
  const useAccountQuery = useQuery('getAccountList', getAccountList);

  // 2. 내 자산 조회하는 함수
  
  const [nextButton, setNextButton] = useState(false);
  return (
    <div className='h-scren flex flex-col'>
      <ArrowBack pageName='내 정보 수정'/>
    <div className="h-screen flex flex-col items-center mt-4">
      <Typography variant="h4" color="gray">
        현재 등록 계좌
      </Typography>
      <Card className="w-96">
          <List>
          <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt={ACCOUNT_DATA[0].name}
              src={ACCOUNT_DATA[0].image}
              className="h-10 aspect-square"
            />
          </ListItemPrefix>
          <div className="flex justify-between w-full">
            <div>
              <Typography variant="h6" color="blue-gray">
                {ACCOUNT_DATA[0].name}
              </Typography>
              <Typography variant="paragraph" color="gray" className="font-normal">
                {ACCOUNT_DATA[0].accountNumber}
              </Typography>
            </div>

            <div className="flex items-center">
              <Typography variant="paragraph" color="blue" className="font-normal ">
                {ACCOUNT_DATA[0].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </Typography>
            </div>
          </div>
        </ListItem>
          </List>
        </Card>

      <hr className="my-5 border-gray-400 border-1 w-full" />
      {/* 얘 나중에 수정해야함 (지헌 할 것) */}

      {useAccountQuery.data && useAccountQuery.data.response.accountList ? (
        <AccountRegister setAccount={setChangeAccount} accountList={useAccountQuery.data.response.accountList} />
      ) : null}
      <BottomNav/>
    </div>
    </div>
  );
};

export default ChangeAccountPage;
