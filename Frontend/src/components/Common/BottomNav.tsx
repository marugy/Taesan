import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { IconButton } from '@material-tailwind/react';
import { HiHome } from 'react-icons/hi';
import { BsPerson, BsCreditCard } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/UserStore';
import Swal2 from 'sweetalert2';

const BottomNav = () => {
  const navigate = useNavigate();
  const { connectedAsset, } = useUserStore();
  const handleHabit = () =>{
    if(connectedAsset===false){
      Swal2.fire({
        icon: 'info',
        title: '자산을 연결해 주세요',
      });
    }
    else{
      navigate('/pay')
    }
  }
  return (
    <div className="z-10 flex justify-around items-center bg-white h-[8vh] max-w-full fixed bottom-0 left-0 right-0">
      <div className="flex flex-col items-center w-5">
        <div>
          <BsCreditCard
            className="text-main text-xl cursor-pointer"
            onClick={() => {
              handleHabit()
            }}
          />
        </div>
        <div className="font-extrabold text-sm text-main font-main">Card</div>
      </div>

      {/* <IconButton variant="filled"  className="bg-main rounded-full h-[9vh] w-[9vh] max-w-none max-h-none mb-[5vh] flex justify-center items-center" >
          <HiHome className="text-xl"/>
      </IconButton> */}
      <div
        className="relative"
        onClick={() => {
          navigate('/main');
        }}
      >
        {/* 반지름 20px 짜리 투명색 원 */}
        {/* <div className="w-24 h-24 rounded-full bg-opacity-0 bg-white z-40 absolute bottom-8  left-1/2 transform -translate-x-1/2 "></div> */}
        <IconButton
          variant="filled"
          className="bg-main  rounded-full z-30 h-[9vh] w-[9vh] max-w-none max-h-none mb-[5vh] flex justify-center items-center"
        >
          <HiHome className="text-xl" />
        </IconButton>
      </div>
      <div
        className="flex flex-col items-center w-5"
        onClick={() => {
          navigate('/mypage');
        }}
      >
        <div>
          <BsPerson className="text-main text-2xl cursor-pointer" />
        </div>
        <div className="font-extrabold text-sm text-main font-main">Profile</div>
      </div>
    </div>
  );
};

export default BottomNav;
