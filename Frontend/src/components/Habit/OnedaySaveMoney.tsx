import React from 'react';
import { Avatar, Typography, ListItemPrefix } from '@material-tailwind/react';
import dayjs from 'dayjs';

interface OnedaySaveMoneyProps {
  dayData?: any; //
  selectedDate? : string;
}

const OnedaySaveMoney: React.FC<OnedaySaveMoneyProps> = ({ dayData,selectedDate }) => {
  return (
    <div className="mt-10">
      <div className="font-semibold">{selectedDate}</div>
      {
        dayData.map((habit:any,index:number) => (
          <div className="w-full flex justify-between mt-2">
        <ListItemPrefix>
          <Avatar variant="square" className="p-1" alt="candice" src="Account/KB.jpg" />
        </ListItemPrefix>
        <div className="w-full flex justify-between">
          <div>
            <Typography variant="h6" color="blue-gray">
              {habit.habitName}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {dayjs(habit.startDate).format('시작일 : YYYY-MM-DD')}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography variant="h6" color="green">
              {habit.saving.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Typography>
          </div>
        </div>
      </div>
        ))

      }
      

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
