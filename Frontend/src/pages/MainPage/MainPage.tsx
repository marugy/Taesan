import React from 'react';
import MainAssetInfo from 'components/Main/MainAssettInfo';
import MainMenu from 'components/Main/MainMenu';
import MainAssetRegister from 'components/Main/MainAssetRegister';
import MainCardInfo from 'components/Main/MainCardInfo';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import BottomNav from 'components/Common/BottomNav';
import { useUserStore } from 'store/UserStore';



const MainPage = () => {

  // 스토어에서 AT,RT 가져오기
const { accessToken, refreshToken,setName } = useUserStore();
// useQuery를 이용해 사용자 정보 호출
const getInfo = async () => {
  const { data } = await axios.get('https://j9c211.p.ssafy.io/api/member-management/members/info', {
    headers: {
      'ACCESS-TOKEN': accessToken,
      'REFRESH-TOKEN': refreshToken,
    },
  });
  console.log(data);
  setName(data.response.name)
  return data;
};
  const query = useQuery('getInfo', getInfo);
  // const mutation = useMutation(testPost);
  // console.log(mutation);
  return (
    <div className="flex flex-col items-center h-full">
      <div className='dt:w-screen dt:h-screen dt:flex'>
        <div className='mt-3 dt:fixed dt:top-3 dt:left-6'>
          <img src="/Main/logo.png" className="h-16" />
        </div>
        
        {/* <div className="font-extrabold text-3xl">태산 : 泰山</div> */}

        {/* 자산 등록 여부에 따라 다른 화면 띄우기 */}
        {/* <MainAssetRegister /> */}
        <div className='dt:w-[50vw] dt:flex dt:flex-col dt:justify-center dt:items-center'>
          <MainCardInfo />
          <MainAssetInfo />
        </div>
        <div className='dt:w-[50vw] dt:flex dt:flex-col dt:justify-center dt:items-center'>
        <MainMenu />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default MainPage;
