import React from 'react';
import { Avatar, Typography, ListItemPrefix } from '@material-tailwind/react';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
const HabitListCompleted = () => {
  const { accessToken, refreshToken } = useUserStore();
  const navigate = useNavigate();

  // 쿼리 1
  const completedHabit = async () => {
    const { data: completedHabit } = await axios.get('https://j9c211.p.ssafy.io/api/habit-management/habits/complete', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    console.log(completedHabit);

    return completedHabit;
  };
  // const query = useQuery('getInfo', getInfo);
  const { data } = useQuery({
    queryKey: ['completedHabit'],
    queryFn: completedHabit,
  });
  return (
    <div>
      <div className="w-full flex flex-col justify-between mt-2">
        {data && data.response
          ? data.response.map((habit: any, index: number) => (
              <div
                className="w-full flex justify-between mt-2"
                onClick={() => {
                  navigate(`/habit/detail/${habit.habitId}`);
                }}
              >
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
                    <img className="p-1 w-14" alt="candice" src={`/Category/${habit.habitName}.png`} />
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
          : ''}
      </div>
    </div>
  );
};

export default HabitListCompleted;
