import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
const MainMenu = () => {
  const navigate = useNavigate();
  return (
    // Grid로 2행 2열로 4개의 버튼이 들어갈 곳을 4개의 div로 각각 배치.
    <div className="grid grid-cols-2 grid-rows-2 text-center gap-4 mx-8 h-[30vh] dt:h-[40vh] dt:w-[40vh] mt-10 sh">
      <div>
        <div
          onClick={() => {
            navigate('/buyif');
          }}
          className="w-full h-full bg-pink-500 p-1  text-center rounded-2xl shadow-xl"
        > 
          <div>
            <img src="/Main/샀다치고.png"  className="h-24 mx-auto" />
          </div>
          <div className="text-white text-xl font-medium mt-1">샀다 치고</div>
          
        </div>
      </div>
      <div>
        <div  onClick={() => navigate('/habit')} className="w-full h-full p-1 text-center bg-blue-400 rounded-2xl shadow-xl">
        <div>
            <img src="/Main/습관저금통.png"  className="h-24 mx-auto" />
          </div>
          <div className="text-white text-xl font-medium mt-1">습관 저금통</div>
        </div>
      </div>
      <div>
        <div onClick={() => navigate('/challenge')} className="w-full h-full p-1 text-center bg-cyan-300 rounded-2xl shadow-xl">
            <div>
            <img src="/Main/절약챌린지.png" className="h-24 mx-auto" />
          </div>
          <div className="text-white text-xl font-medium mt-1">절약 챌린지</div>
        </div>
      </div>
      <div>
        <div onClick={() => navigate('/pattern')} className="w-full h-full p-1 text-center bg-deep-purple-500 rounded-2xl shadow-xl">
        <div>
            <img src="/Main/소비패턴.png" className="h-24 mx-auto" />
          </div>
          <div className="text-white text-xl font-medium mt-1">내 소비 패턴</div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
