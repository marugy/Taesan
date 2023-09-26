import React from 'react';
import { Avatar, Typography, ListItemPrefix } from '@material-tailwind/react';

interface OnedaySaveMoneyProps {
  selectedDate?: string; //
}

const OnedaySaveMoney: React.FC<OnedaySaveMoneyProps> = ({ selectedDate }) => {
  return (
    <div className="mt-10">
      <div className="font-semibold">{selectedDate}</div>
      <div className="w-full flex justify-between mt-2">
        <ListItemPrefix>
          <Avatar variant="circular" className="p-1" alt="candice" src="/Habit/smoking.png" />
        </ListItemPrefix>
        <div className="w-full flex justify-between">
          <div>
            <Typography variant="h6" color="blue-gray">
              담배
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              2023.09.12~
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="green" className="text-end">
              3,000원
            </Typography>
            <Typography variant="small" color="blue-gray" className="font-normal text-end">
              3,000원
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-2">
        <ListItemPrefix>
          <Avatar variant="circular" className="p-1" alt="candice" src="/Habit/drinking.png" />
        </ListItemPrefix>
        <div className="w-full flex justify-between">
          <div>
            <Typography variant="h6" color="blue-gray">
              술
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              2023.08.23~
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="green" className="text-end">
              1,500원
            </Typography>
            <Typography variant="small" color="blue-gray" className="font-normal text-end">
              3,000원
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnedaySaveMoney;

{
  /* {transaction.type === 1 ? (
        // 원단위 절삭
        <Typography variant="h6" color="green" className="text-end">
        {transaction.depositAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </Typography>
    ) : (
        <Typography variant="h6" color="red" className="text-end">
        {transaction.withdrawAmount === undefined
            ? '0원'
            : `-${transaction.withdrawAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
        </Typography>
    )}
    <Typography variant="small" color="blue-gray" className="font-normal text-end">
        {transaction.transactionBalance === undefined
        ? '0원'
        : `${transaction.transactionBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
    </Typography> */
}
