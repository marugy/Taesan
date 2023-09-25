import React from 'react';
import MainAssetInfo from 'components/Main/MainAssettInfo';
import MainMenu from 'components/Main/MainMenu';
import MainAssetRegister from 'components/Main/MainAssetRegister';
import MainCardInfo from 'components/Main/MainCardInfo';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import BottomNav from 'components/Common/BottomNav';

const testGet = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(data);
  return data;
};

const testPost = async () => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    userId: 11,
    id: 101,
    body: 'test body',
    title: 'test title',
  });
  console.log(data);
  return data;
};
const MainPage = () => {
  const query = useQuery('test', testGet);
  console.log(query);
  const mutation = useMutation(testPost);
  console.log(mutation);
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
