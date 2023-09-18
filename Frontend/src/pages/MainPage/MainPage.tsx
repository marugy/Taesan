import React from 'react';
import MainAssetInfo from 'components/Main/MainAssettInfo';
import MainMenu from 'components/Main/MainMenu';
import MainAssetRegister from 'components/Main/MainAssetRegister';
import MainCardInfo from 'components/Main/MainCardInfo';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

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
    <div>
      <div>
        <MainAssetRegister />
        <MainAssetInfo />
        <MainMenu />
        <MainCardInfo />
        그냥 아무asdasd거나 막 추가
      </div>
    </div>
  );
};

export default MainPage;
