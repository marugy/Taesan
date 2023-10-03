import FrequencyPayList from 'components/HabitCreate/FrequencyPayList';
import React,{useState} from 'react';
import DefaultCategory from 'components/HabitCreate/DefaultCategory';
import RepeatCategory from 'components/HabitCreate/RepeatCategory';
import { useNavigate } from 'react-router-dom';
import { Button,Input,IconButton } from '@material-tailwind/react';
import axios from 'axios';
import Swal2 from 'sweetalert2';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { useUserStore } from 'store/UserStore';
const HabitCreatePage = () => {
  const { accessToken,refreshToken} = useUserStore();
  const navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [habit,setHabit] = useState('');

  const handleTitle = (event:any) => {
    setTitle(event.target.value);
  }

  // 습관 생성하기
  const createHabit = () => {
    axios.post('https://j9c211.p.ssafy.io/api/habit-management/habits',{
      title: title,
      habitName: habit,
      targetMoney:1000,
    },
    {
      headers: {
        "ACCESS-TOKEN": accessToken,
        "REFRESH-TOKEN": refreshToken,
      },
    }
    ).then((res)=>{
      console.log(res);
      navigate('/habit');
      Swal2.fire({
        icon: 'success',
        title: '습관이 생성되었습니다.',
      }
      )
    }).catch((err)=>{
      console.log(err);
      Swal2.fire({
        icon: 'error',
        title: '습관 생성에 실패했습니다.',
      }
      )
    })
  }

  return (
    <div className='h-screen w-full'>
      <ArrowBack pageName='습관 절약'/>
      <div className="font-semibold text-center text-3xl">'태산'에서 <br/>새로운 습관을 만들어 보아요.</div>
      <div className="flex justify-center ">
      <img src="/Habit/goodHabit.png" className="h-72 border rounded-full"/>
      </div>
      <div className=' mx-3 mt-4'>
      <div className="font-semibold text-2xl text-center ">
        생성할 습관의 <br/>제목을 입력해주세요.
      </div>
      <div className="mt-3 flex mx-auto w-4/5">
      <Input crossOrigin="anonymous" label="제목" onChange={handleTitle} size="lg" className="" />
      </div>
      
      {/* Default Category (술,담배,커피,택시) */}
      <div className="mt-10 mb-3 text-2xl text-center font-semibold"> 
        기본 카테고리
      </div>
<div className="flex flex-wrap justify-center items-center">
  <div className="w-2/5 p-2">
    <div className="bg-white border border-blue-500 p-4 text-center text-blue-500 text-lg cursor-pointer" onClick={() => { setHabit('담배') }}>
      담배
    </div>
  </div>
  <div className="w-2/5 p-2">
  <div className="bg-white border border-blue-500 p-4 text-center text-blue-500 text-lg cursor-pointer" onClick={() => { setHabit('술') }}>
  술
</div>
  </div>
  <div className="w-2/5 p-2">
    <div className="bg-white border border-blue-500 p-4 text-center text-blue-500 text-lg cursor-pointer" onClick={() => { setHabit('택시') }}>
      택시
    </div>
  </div>
  <div className="w-2/5 p-2">
    <div className="bg-white border border-blue-500 p-4 text-center text-blue-500 text-lg cursor-pointer" onClick={() => { setHabit('커피') }}>
      커피
    </div>
  </div>
</div>

      <div className="mt-10 mb-3 text-2xl text-center font-semibold"> 
        저번 달,<br/>
        자주 했던 소비
      </div>

      <div>
        
      </div>

      {/* <DefaultCategory /> */}
      {/* FrequencyPayList (사용자의 소비패턴에 따른 것들) */}
      {/* <RepeatCategory /> */}
      제목 : { title } 
      습관 : { habit}
<div className="flex justify-center mt-10 ">
      <Button color="blue" onClick={createHabit} className="bg-main">습관 생성하기</Button>
      </div>
      </div>
      <BottomNav/>
    </div>
  );
};

export default HabitCreatePage;
