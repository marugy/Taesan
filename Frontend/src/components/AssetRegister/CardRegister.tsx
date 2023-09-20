import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
const CardRegister = () => {
  return (
    <div>
      <div className="text-center my-10">
        <Typography variant="h5" color="blue-gray">
          '태산' 사용을 위해
        </Typography>
        <Typography variant="h5" color="blue-gray">
          회원님의 카드 목록을 불러 왔습니다.
        </Typography>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        {/* <div>
          <img src="/Card/Card1.png" className="h-36" />
        </div> */}
        <div className="relative">
          <img src="/Card/Card1.png" className="h-36" alt="Card1" />

          <div className="absolute top-4 left-4">
            <span className="text-white text-md">Credit</span>
          </div>
          <div className="absolute bottom-10 left-4">
            <span className="text-white text-sm">LEE JI HEON</span>
          </div>
          <div className="absolute bottom-5 left-4">
            <span className="text-white text-sm">6011 - 6175 - 8192 - 2346</span>
          </div>
        </div>

        {/* <img src="/Card/Card2.png" /> */}
        <div className="relative">
          <img src="/Card/Card4.png" className="h-36" alt="Card1" />

          <div className="absolute top-4 left-4">
            <span className="text-white text-md">Credit</span>
          </div>
          <div className="absolute bottom-10 left-4">
            <span className="text-white text-sm">LEE JI HEON</span>
          </div>
          <div className="absolute bottom-5 left-4">
            <span className="text-white text-sm">6011 - 6175 - 8192 - 2346</span>
          </div>
        </div>
        <div className="relative">
          <img src="/Card/Card5.png" className="h-36" alt="Card1" />

          <div className="absolute top-4 left-4">
            <span className="text-white text-md">Credit</span>
          </div>
          <div className="absolute bottom-10 left-4">
            <span className="text-white text-sm">LEE JI HEON</span>
          </div>
          <div className="absolute bottom-5 left-4">
            <span className="text-white text-sm">6011 - 6175 - 8192 - 2346</span>
          </div>
        </div>
        <div className="relative">
          <img src="/Card/Card3.png" className="h-36" alt="Card1" />

          <div className="absolute top-4 left-4">
            <span className="text-white text-md">Credit</span>
          </div>
          <div className="absolute bottom-10 left-4">
            <span className="text-white text-sm">LEE JI HEON</span>
          </div>
          <div className="absolute bottom-5 left-4">
            <span className="text-white text-sm">6011 - 6175 - 8192 - 2346</span>
          </div>
        </div>
        {/* <img src="/Card/Card6.png" /> */}
      </div>
      <div className="text-center mt-10">
        <Button color="blue">자산 연동하기</Button>
      </div>
    </div>
  );
};

export default CardRegister;
