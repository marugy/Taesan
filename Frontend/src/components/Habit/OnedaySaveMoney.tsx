import React,{useState} from 'react';
import { Avatar, Typography, ListItemPrefix } from '@material-tailwind/react';
import dayjs from 'dayjs';
import { useNavigate} from  'react-router-dom';

interface OnedaySaveMoneyProps {
  dayData?: any; //
  selectedDate? : string;
}

const OnedaySaveMoney: React.FC<OnedaySaveMoneyProps> = ({ dayData,selectedDate }) => {
  const navigate = useNavigate();
  const [habitName,setHabitName] = useState('그외');
  return (
    <div className="mt-10">
      <div className="font-semibold">{selectedDate}</div>
      {
        dayData.map((habit:any,index:number) => (
          <div className="w-full flex justify-between mt-2" onClick={()=>{
            navigate(`/habit/detail/${habit.habitId}`)
          }}>
        <ListItemPrefix>
        {habit.habitName === '담배' ? (
  <img className="p-1 w-14" alt="candice" src="/Habit/담배.png" />
) : habit.habitName === '술' ? (
  <img className="p-1 w-14" alt="candice" src="/Habit/술.png" />
) : habit.habitName === '택시' ? (
  <img className="p-1 w-14" alt="candice" src="/Habit/택시.png" />
) : habit.habitName === '커피' ? (
  <img className="p-1 w-14" alt="candice" src="/Habit/커피.png" />
) : (
  <img className="p-1 w-14" alt="candice" src="/Habit/그외.png" />
)}
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
