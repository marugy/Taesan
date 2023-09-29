import FrequencyPayList from 'components/HabitCreate/FrequencyPayList';
import React,{useState} from 'react';
import DefaultCategory from 'components/HabitCreate/DefaultCategory';
import RepeatCategory from 'components/HabitCreate/RepeatCategory';
import { useNavigate } from 'react-router-dom';
import { Button,Input,IconButton } from '@material-tailwind/react';
import axios from 'axios';
import Swal2 from 'sweetalert2';
const HabitCreatePage = () => {
  const navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [habit,setHabit] = useState('');

  const handleTitle = (event:any) => {
    setTitle(event.target.value);
  }

  // 습관 생성하기
  const createHabit = () => {
    axios.post('주소입력하기',{
      title: title,
      habit: habit
    }).then((res)=>{
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
    <div>
      <div>
      <Input crossOrigin="anonymous" label="생성할 습관의 제목을 입력하세요." onChange={handleTitle}/>
      </div>
      
      {/* Default Category (술,담배,커피,택시) */}
      <div className="mt-10 mb-3 text-2xl text-center font-semibold"> 
        기본 카테고리
      </div>
      <div className=" flex justify-center gap-4" >
        <Button className="bg-main" onClick={()=>{setHabit('담배')}}>담배</Button>
        <Button className="bg-main" onClick={()=>{setHabit('술')}}>술</Button>
        <Button className="bg-main" onClick={()=>{setHabit('택시')}}>택시</Button>
        <Button className="bg-main" onClick={()=>{setHabit('커피')}}>커피</Button>
      </div>

      <div className="mt-10 mb-3 text-2xl text-center font-semibold"> 
        ㅇㅇㅇ님이 <br/> 자주하는 소비 (지난 달)
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
  );
};

export default HabitCreatePage;
