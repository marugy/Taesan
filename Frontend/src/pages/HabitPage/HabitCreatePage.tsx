import FrequencyPayList from 'components/HabitCreate/FrequencyPayList';
import React, { useState, useEffect } from 'react';
import DefaultCategory from 'components/HabitCreate/DefaultCategory';
import RepeatCategory from 'components/HabitCreate/RepeatCategory';
import './Habit.css';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  IconButton,
  List,
  Card,
  ListItemPrefix,
  Avatar,
  ListItem,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import Swal2 from 'sweetalert2';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { useUserStore } from 'store/UserStore';
const HabitCreatePage = () => {
  const { accessToken, refreshToken, connectedAsset, createdTikkle, name } = useUserStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [habit, setHabit] = useState('');
  const [type, setType] = useState(1);
  const [targetMoney, setTargetMoney] = useState(0);
  const [oftenCategory, setOftenCategory] = useState([
    {
      category: '카페',
      count: 20,
      dateMoney: 4000,
      money: 120000,
      type: 1,
    },
    {
      category: '주류',
      count: 10,
      dateMoney: 5000,
      money: 150000,
      type: 1,
    },
    {
      category: '음식점',
      count: 20,
      dateMoney: 5000,
      money: 150000,
      type: 1,
    },
  ]);

  const tokenCheck = () => {
    axios
      .post(
        'https://j9c211.p.ssafy.io/api/member-management/members/check/access-token',
        {},
        {
          headers: {
            'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        },
      )
      .then((res) => {
        if (res.data.response === false) {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/');
      });
  };
  useEffect(() => {
    tokenCheck();
    if (connectedAsset === false || createdTikkle === false) {
      navigate('/main');
    }
  }, []);

  const handleTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (index: any, category: any, type: any, dateMoney: any) => {
    // 이미 선택된 항목이면 선택 해제
    if (selectedItem === index) {
      setSelectedItem(null);
      setHabit(''); // habit 상태를 비웁니다.
      setType(1);
      setTargetMoney(0);
    } else {
      setSelectedItem(index);
      setHabit(category);
      setType(type);
      setTargetMoney(dateMoney);
    }
  };

  useEffect(() => {
    axios
      .get('https://j9c211.p.ssafy.io/api/transactions/oftenTransaction', {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((res) => {
        console.log(res);
        setOftenCategory(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 습관 생성하기
  const createHabit = () => {
    if (title === '') {
      Swal2.fire({
        icon: 'info',
        title: '습관 제목을 입력해주세요.',
      });
      return;
    }

    if (habit === '') {
      Swal2.fire({
        icon: 'info',
        title: '생성할 습관을 선택해주세요.',
      });
      return;
    }
    axios
      .post(
        'https://j9c211.p.ssafy.io/api/habit-management/habits',
        {
          title: title,
          habitName: habit,
          targetMoney: targetMoney,
          type: type,
        },
        {
          headers: {
            'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        },
      )
      .then((res) => {
        console.log(res);
        navigate('/habit');
        Swal2.fire({
          icon: 'success',
          title: '습관이 생성되었습니다.',
        });
      })
      .catch((err) => {
        console.log(err);
        Swal2.fire({
          icon: 'error',
          title: '습관 생성에 실패했습니다.',
        });
      });
  };

  return (
    <div className="h-screen w-full font-main">
      <ArrowBack pageName="습관 저금통" />
      <div className="h-24 dt:h-36 w-4/5 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 border rounded-md flex flex-col items-center justify-center ">
        <div className="text-white text-2xl dt:text-3xl font-semibold">습관 생성하기</div>
        {/* <div className="mt-5 text-center text-lg dt:text-2xl text-white">습관도 만들고, 돈도 모으고 !</div> */}
      </div>
      <div className="flex justify-center ">
        <img src="/Habit/습관로고.png" className="h-72 mt-10" />
      </div>
      <div className=" mx-3 mt-4">
        <div className="font-semibold text-xl text-center ">
          생성할 습관의 <br />
          제목을 입력해주세요.
        </div>
        <div className="mt-3 flex mx-auto w-4/5">
          <Input crossOrigin="anonymous" label="습관 제목" color="blue" onChange={handleTitle} size="lg" className="" />
        </div>

        <div className="font-bold text-center text-3xl mt-10">생성할 습관을 골라주세요.</div>
        {/* Default Category (술,담배,커피,택시) */}
        <div className="mb-5 text-2xl text-center font-semibold mt-10">[ 기본 카테고리 ]</div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-2/5 p-2">
            <div
              className={`${
                habit === '담배' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              } border-2 flex flex-col  dt:justify-center items-center gap-2 border-blue-500 p-4 text-center  text-lg cursor-pointer`}
              onClick={() => {
                setHabit('담배');
                setType(1);
                setTargetMoney(4500);
              }}
            >
              <img src="/Habit/담배.png" className="w-8 dt:w-12 " />
              <div className="text-md dt:text-4xl font-semibold">담배</div>
            </div>
          </div>
          <div className="w-2/5 p-2">
            <div
              className={`${
                habit === '술' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              } border-2 flex flex-col  dt:justify-center items-center gap-2 border-blue-500 p-4 text-center  text-lg cursor-pointer`}
              onClick={() => {
                setHabit('술');
                setType(1);
                setTargetMoney(4500);
              }}
            >
              <img src="/Habit/술.png" className="w-8 dt:w-12 " />
              <div className="text-md dt:text-4xl font-semibold ">술</div>
            </div>
          </div>
          <div className="w-2/5 p-2">
            <div
              className={`${
                habit === '택시' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              } border-2 flex flex-col  dt:justify-center items-center gap-2  border-blue-500 p-4 text-center  text-lg cursor-pointer`}
              onClick={() => {
                setHabit('택시');
                setType(1);
                setTargetMoney(5000);
              }}
            >
              <img src="/Habit/택시.png" className="w-8 dt:w-12 " />
              <div className="text-md dt:text-4xl font-semibold">택시</div>
            </div>
          </div>
          <div className="w-2/5 p-2">
            <div
              className={`${
                habit === '커피' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              } border-2 flex flex-col  dt:justify-center items-center gap-2 border-blue-500  p-4 text-center  text-lg cursor-pointer`}
              onClick={() => {
                setHabit('커피');
                setType(1);
                setTargetMoney(3000);
              }}
            >
              <img src="/Habit/커피.png" className="w-8 dt:w-12 " />
              <div className="text-md dt:text-4xl font-semibold">커피</div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-1 text-2xl text-center font-semibold">[ 퍼스널 카테고리 ]</div>

        <div className="mb-3 text-lg text-gray-500 text-center font-semibold">
          지난 달 {name}님의 소비 습관을 분석한 후, <br></br>도출된 결과를 기반으로 추천해드리는 습관 목록입니다.
        </div>

        <div></div>

        {/* FrequencyPayList (사용자의 소비패턴에 따른 것들) */}
        {/* <RepeatCategory oftenCategory={oftenCategory} /> */}
        <div className="flex justify-center ">
          <List className="w-full dt:w-4/5">
            {oftenCategory.map((category, index) => (
              <ListItem
                key={index}
                onClick={() => handleItemClick(index, category.category, category.type, category.dateMoney)}
                className={`${
                  // selectedItem === index ? 'border ring-main ring-[3px]' : 'ring-[3px] border ring-white'
                  habit === category.category ? 'border ring-blue-500 ring-[3px]' : 'ring-[3px] border ring-white'
                } mb-5`}
              >
                <div className="flex justify-between w-full">
                  <div className="flex flex-row">
                    <div className="flex items-center">
                      <img src={`/Category/${category.category}.png`} className="w-8 dt:w-12 mr-2" />
                    </div>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        {category.category}
                      </Typography>
                      <Typography variant="small" color="blue-gray">
                        지난 달 : {category.count}회
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <Typography variant="small" color="gray" className="font-normal">
                      하루 평균 소비 {category.dateMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </Typography>
                    <Typography variant="paragraph" color="blue" className="font-normal font-semibold">
                      총 소비액 {category.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </Typography>
                  </div>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="flex justify-center mt-10 ">
          <Button color="blue" onClick={createHabit}>
            습관 생성하기
          </Button>
        </div>
      </div>
      <BottomNav />
      <div className="h-[15vh]"></div>
    </div>
  );
};

export default HabitCreatePage;
