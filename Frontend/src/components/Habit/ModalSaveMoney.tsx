import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  ListItemPrefix,
  Avatar,
  Checkbox
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import { useUserStore } from 'store/UserStore';
import Swal2 from 'sweetalert2';
interface ModalSaveMoneyProps {
  todaySave:Array<any>;

}


const ModalSaveMoney: React.FC<ModalSaveMoneyProps> = ({ todaySave }) => {
  const { accessToken, refreshToken } = useUserStore();
  const [size, setSize] = useState(null);
  const [totalMoney, setTotalMoney] = useState(0);
//    각 항목별로 체크 상태를 관리하기 위해 객체 형태로 변경
//  각 항목별로 체크 상태를 관리하기 위해 배열로 변경
 const initialSelectHabit = todaySave.map((habit) => ({
  id: habit.id,
  checked: true,
}));
   const [selectHabit, setSelectHabit] = useState(initialSelectHabit);
   const [selectedHabitIds, setSelectedHabitIds] = useState<string[]>([]);
  const handleOpen = (value: any) => setSize(value);

  const postSavingToday = () => {
    if (selectedHabitIds.length === 0) {
      Swal2.fire({
        icon: 'info',
        title: '저금할 습관을 선택해주세요.',
      });
      return;
    }

    axios.post(`https://j9c211.p.ssafy.io/api/habit-management/habits/today`, {
      habitIds: selectedHabitIds,
    },
    {
      headers: {
        'ACCESS-TOKEN' : accessToken,
        'REFRESH-TOKEN' : refreshToken
      }
    })
    .then((response) => {
      console.log('오늘의 습관 저금',response.data);
      Swal2.fire({
        icon: 'success',
        title: '오늘의 습관 저금을 성공했습니다!',
        showConfirmButton: false,
        timer: 1500,
      });

    })
    .catch((error) => {
      console.log(error);
    }
    )

  }
      // 체크박스가 클릭될 때 호출되는 함수
  const handleCheckboxClick = (habitId: string, isChecked: boolean) => {
    // 체크된 경우
    if (isChecked) {
      setSelectedHabitIds((prevSelected) => [...prevSelected, habitId]);
      setTotalMoney((prevTotal) => prevTotal + todaySave.find((habit) => habit.habitId === habitId).targetMoney);
    } else {
      // 체크 해제된 경우
      setSelectedHabitIds((prevSelected) => prevSelected.filter((id) => id !== habitId));
      setTotalMoney((prevTotal) => prevTotal - todaySave.find((habit) => habit.habitId === habitId).targetMoney);
    }

    console.log('선택된',selectedHabitIds)
    console.log(totalMoney)
  };
  return (
    <div className="text-center">
      <Button color="blue" onClick={() => {handleOpen('md');
          setSelectedHabitIds([]);
          setTotalMoney(0);
  }
    } variant="gradient">
        오늘 습관으로 아낀 돈 저금하기
      </Button>
      <Dialog
        open={size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl' || size === 'xxl'}
        size={size || 'md'}
        handler={handleOpen}
      >
        <DialogHeader className="flex justify-center text-2xl ">{dayjs().format('YYYY년 MM월 DD일')} 적금하기</DialogHeader>
        <DialogBody divider>
        {todaySave.length>0? (
  <>
    {todaySave.map((habit: any, index: number) => (
      <div className="w-full flex justify-between mt-2" key={index}>
        <ListItemPrefix>
          {habit.habitTitle === '담배' ? (
            <img className="p-1 w-14" alt="candice" src="/Habit/담배.png" />
          ) : habit.habitTitle === '술' ? (
            <img className="p-1 w-14" alt="candice" src="/Habit/술.png" />
          ) : habit.habitTitle === '택시' ? (
            <img className="p-1 w-14" alt="candice" src="/Habit/택시.png" />
          ) : habit.habitTitle === '커피' ? (
            <img className="p-1 w-14" alt="candice" src="/Habit/커피.png" />
          ) : (
            <img className="p-1 w-14" alt="candice" src="/Habit/그외.png" />
          )}
        </ListItemPrefix>
        <div className="w-full flex justify-between">
          <div>
            <Typography variant="h6" color="blue-gray">
              {habit.habitTitle}
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="green" className="text-end">
              {habit.targetMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Typography>
          </div>
        </div>
        <Checkbox
          onChange={(e) => handleCheckboxClick(habit.habitId, e.target.checked)}
          crossOrigin="anonymous"
        />
      </div>
    ))}
    <div className="text-center mt-3">
      오늘 아낀 금액 {totalMoney}원을 <br /> 티끌머니로 전환하시겠습니까?
    </div>
  </>
) : <div className="text-2xl text-center">오늘은 저금할 수 있는 돈이 없어요!</div>}
         
        </DialogBody>
        <DialogFooter className="flex justify-center gap-10">
          <Button variant="filled" color="blue" size="lg"   onClick={() => {
    handleOpen(null);
    postSavingToday();
  }} className="mr-1">
            <span>저금하기</span>
          </Button>
          <Button variant="filled" color="blue-gray" size="lg" onClick={() => handleOpen(null)}>
            <span>취소하기</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ModalSaveMoney;
