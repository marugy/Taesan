import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
const MainAssettInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10">
      <div className="font-bold text-xl">내자산</div>
      {/* 계좌가 등록되어있는지 유무에 따라 다른 것을 띄워야함 */}
      <div className="flex justify-between">
        <div className="flex items-center font-semibold">
        자산을 먼저 등록해주세요.
        </div>
        
        <Button
          color="blue"
          onClick={() => {
            navigate('/saving/create');
          }}
        >
          자산 등록
        </Button>
      </div>

      {/* 저금통 등록 유무에 따라 다른 화면 띄우기 */}
      <div className="flex justify-between mt-2">
        <div className="flex items-center font-semibold"> 
        저금통을 생성해주세요.
        </div>
        <Button
          color="blue"
          onClick={() => {
            navigate('/saving');
          }}
        >
          적금통 만들기
        </Button>
      </div>
    </div>
  );
};

export default MainAssettInfo;
