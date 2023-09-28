import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
const MainMenu = () => {
  const navigate = useNavigate();
  return (
    // Grid로 2행 2열로 4개의 버튼이 들어갈 곳을 4개의 div로 각각 배치.
    <div className="grid grid-cols-2 grid-rows-2 text-center gap-4 dt:gap-7 x-8 h-[40vh] dt:h-[70%] w-[80vw] dt:w-[80%] mt-3 aspect-square mb-20">
      <div>
        <div
          onClick={() => {
            navigate('/buyif');
          }}
          className="w-full h-full bg-pink-500 p-1  text-center rounded-2xl shadow-xl cursor-pointer hover:bg-pink-600 "
        >
          <div>
            <img src="/Main/샀다치고.png" className="h-[13vh] mx-auto dt:h-[23vh]" />
          </div>
          <div className="text-white text-lg font-semibold font-main dt:text-3xl">샀다 치고</div>
        </div>
      </div>
      <div>
        <div
          onClick={() => navigate('/habit')}
          className="w-full h-full p-1 text-center bg-blue-400 rounded-2xl shadow-2xl hover:bg-blue-600 cursor-pointer"
        >
          <div>
            <img src="/Main/습관저금통.png" className="h-[13vh] mx-auto dt:h-[23vh]" />
          </div>
          <div className="text-white text-lg font-semibold font-main dt:text-3xl">습관 저금통</div>
        </div>
      </div>
      <div>
        <div
          onClick={() => navigate('/challenge')}
          className="w-full h-full p-1 text-center bg-cyan-300 rounded-2xl shadow-xl cursor-pointer hover:bg-cyan-500 hover:animate-bounce"
        >
          <div>
            <img src="/Main/절약챌린지.png" className="h-[13vh] mx-auto dt:h-[23vh]" />
          </div>
          <div className="text-white text-lg font-semibold font-main dt:text-3xl ">절약 챌린지</div>
        </div>
      </div>
      <div>
        <div
          onClick={() => navigate('/pattern')}
          className="w-full h-full p-1 text-center bg-deep-purple-500 rounded-2xl shadow-xl cursor-pointer hover:bg-deep-purple-600" 
        >
          <div>
            <img src="/Main/소비패턴.png" className="h-[13vh] mx-auto dt:h-[23vh]" />
          </div>
          <div className="text-white text-lg font-semibold font-main dt:text-3xl">내 소비 패턴</div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
