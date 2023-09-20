import React, { useState } from 'react';
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography } from '@material-tailwind/react';
const AccountRegister = () => {
  // 더미데이터
  const accountData = [
    {
      name: '국민은행',
      accountNumber: '052-1234-1234',
      image: '/Account/KB.jpg',
      balance: '1320000',
    },
    {
      name: '신한은행',
      accountNumber: '110-509-677498',
      image: '/Account/Shinhan.png',
      balance: '1220000',
    },
    {
      name: '우리은행',
      accountNumber: '110-509-677498',
      image: '/Account/Woori.jpg',
      balance: '465000',
    },
    {
      name: '하나은행',
      accountNumber: '110-509-677498',
      image: '/Account/Hana.png',
      balance: '230124',
    },
    {
      name: '신한은행',
      accountNumber: '110-509-677498',
      image: '/Account/Shinhan.png',
      balance: '1210122',
    },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index: any) => {
    setSelectedItem(index);
  };
  return (
    <div className="flex  flex-col  items-center">
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
            {accountData.map((bank, index) => (
              <ListItem
                key={index}
                onClick={() => handleItemClick(index)}
                className={`${
                  selectedItem === index ? 'border ring-main ring-[3px]' : 'ring-[3px] border ring-white'
                } mb-4 `}
              >
                <ListItemPrefix>
                  <Avatar variant="circular" alt={bank.name} src={bank.image} className="h-10 aspect-square" />
                </ListItemPrefix>
                <div className="flex justify-between w-full">
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {bank.name}
                    </Typography>
                    <Typography variant="paragraph" color="gray" className="font-normal">
                      {bank.accountNumber}
                    </Typography>
                  </div>

                  <div className="flex items-center">
                    <Typography variant="paragraph" color="blue" className="font-normal font-semibold">
                      {bank.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </Typography>
                  </div>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
};

export default AccountRegister;
