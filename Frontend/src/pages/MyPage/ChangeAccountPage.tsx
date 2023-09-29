import React, { useState } from 'react';
import AccountRegister from 'components/AssetRegister/AccountRegister';
import CardRegister from 'components/AssetRegister/CardRegister';
import { Button } from '@material-tailwind/react';
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography } from '@material-tailwind/react';
import { ACCOUNT_DATA } from 'constants/DUMMY';
import ArrowBack from 'components/Common/ArrowBack';

const ChangeAccountPage = () => {
  const [nextButton, setNextButton] = useState(false);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Typography variant="h4" color="gray">
        현재 등록 계좌
      </Typography>
      <Card className="w-96">
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
              <Typography variant="paragraph" color="blue" className="font-normal font-semibold">
                {ACCOUNT_DATA[0].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </Typography>
            </div>
          </div>
        </ListItem>
      </Card>

      <hr className="my-5 border-gray-400 border-1 w-full" />
      <AccountRegister />
    </div>
  );
};

export default ChangeAccountPage;
