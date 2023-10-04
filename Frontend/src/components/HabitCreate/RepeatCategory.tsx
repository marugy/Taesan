import React from 'react';
import { Card, List, ListItem, ListItemPrefix, Avatar, Typography } from '@material-tailwind/react';
interface RepeatCategoryProps {
  oftenCategory: Array<any>;
}

const RepeatCategory: React.FC<RepeatCategoryProps> = ({ oftenCategory }) => {
  return (
    <div>
      사용자의 소비패턴을 분석해서 자주 구매하는 카테고리를 띄우는 곳.
      {/* <div>{oftenCategory}</div> */}
      {/* <Card className="w-96">
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
      </Card> */}
    </div>
  );
};

export default RepeatCategory;
