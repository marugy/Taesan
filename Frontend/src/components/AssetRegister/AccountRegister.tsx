import React, { useState } from 'react';
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography } from '@material-tailwind/react';
import { ACCOUNT_DATA } from 'constants/DUMMY';
import ArrowBack from 'components/Common/ArrowBack';
import { useQuery } from 'react-query';

interface AccountProps {
  accountList: Array<any>;
  setAccount: any;
}
const AccountRegister: React.FC<AccountProps> = ({ accountList, setAccount }) => {
  // 더미데이터

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index: any, accountNum: string) => {
    setSelectedItem(index);
    setAccount(accountNum); // setAccount 함수에 accountNum 전달
    console.log(accountNum);
  };
  return (
    <div>
      <ArrowBack pageName="계좌 선택하기" />
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <Typography variant="h4" color="gray">
            '태산' 사용을 위해 등록하실
          </Typography>
          <Typography variant="h4" color="gray">
            {' '}
            계좌를 선택해주세요.{' '}
          </Typography>
          <div>
            <Card className="w-96">
              <List>
                {accountList.map((account, index) => (
                  <ListItem
                    key={index}
                    onClick={() => handleItemClick(index, account.accountNum)}
                    className={`${
                      selectedItem === index ? 'border ring-main ring-[3px]' : 'ring-[3px] border ring-white'
                    } mb-4 `}
                  >
                    <ListItemPrefix>
                      <Avatar variant="circular" src={`/Account/${account.bank}.png`} className="h-10 aspect-square" />
                    </ListItemPrefix>
                    <div className="flex justify-between w-full">
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          {account.bank}
                        </Typography>
                        <Typography variant="small" color="blue-gray">
                          {account.accountName}
                        </Typography>
                        <Typography variant="paragraph" color="gray" className="font-normal">
                          {account.accountNum}
                        </Typography>
                      </div>

                      <div className="flex items-center">
                        <Typography variant="paragraph" color="blue" className="font-normal font-semibold">
                          {account.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                        </Typography>
                      </div>
                    </div>
                  </ListItem>
                ))}
              </List>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRegister;
