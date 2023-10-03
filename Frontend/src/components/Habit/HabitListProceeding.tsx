import React from 'react';
import { Avatar, Typography, ListItemPrefix } from '@material-tailwind/react';
import axios from 'axios';
import { useUserStore} from 'store/UserStore';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
const HabitListProceeding = () => {
  const navigate = useNavigate();
  const { accessToken,refreshToken } = useUserStore();



  // 쿼리 1
  const proceedingHabit = async () => {
    const { data: proceedingHabit } = await axios.get('https://j9c211.p.ssafy.io/api/habit-management/habits/progress', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    })
    console.log(proceedingHabit);
    
    
   
    ;

    return proceedingHabit;
  };
  // const query = useQuery('getInfo', getInfo);
  const { data } = useQuery({
    queryKey: ['proceedingHabit'],
    queryFn: proceedingHabit,
  })
  return (
    <div>
      <div className="w-full flex flex-col justify-between mt-2">
      {

        data && data.response? (
        data.response.map((habit:any,index:number) => (
          <div className="w-full flex justify-between mt-2" onClick={()=>{navigate(`/habit/detail/${habit.habitId}`)}}
          >
        <ListItemPrefix>
          <Avatar variant="circular" className="p-1" alt="candice" src="/Habit/smoking.png" />
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
        ) :
        ''
      }
      </div>
    </div>
  );
};

export default HabitListProceeding;
