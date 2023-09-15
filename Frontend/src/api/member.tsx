import axios from 'axios';
import { REACT_APP_URL, MEMBER } from 'constants/API_URL';

// postJoin
export const postJoin = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${MEMBER}/join`, {
      loginId: 'test',
      password: 'test',
      email: 'abc123123@naver.com',
      name: '홍길동',
      phone: '01012345678',
      address: '경기도 경기시 경기구 경기동 어쩌구',
      zipCode: '123456',
      addressDetail: '새솔가 401호',
    });

    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postLogin
export const postLogin = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${MEMBER}/login`, {
      login: 'test',
      password: 'test',
    });
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
// postSimpleLogin

export const postSimpleLogin = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${MEMBER}/simple-login`, {
      simplePasswrod: '123456',
    });
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getInfo
export const getInfo = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${MEMBER}/info`);
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// putInfo
export const putInfo = async () => {
  try {
    const response = await axios.put(`${REACT_APP_URL}${MEMBER}/info`, {
      email: 'asdf@naver.com', //이메일
      address: '집가고싶다', //주소
      addressDetail: '새솔가222호', //상세 주소
      zipCode: '123456', //우편번호
    });
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// putPassword
export const putPassword = async () => {
  try {
    const response = await axios.put(`${REACT_APP_URL}${MEMBER}/password`, {
      password: 'test', //기존 비밀번호
    });
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// putSimplePassword
export const putSimplePassword = async () => {
  try {
    const response = await axios.put(`${REACT_APP_URL}${MEMBER}/simple-password`, {
      putSimplePassword: '123456', //기존 비밀번호
    });
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getSaving
export const getSaving = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${MEMBER}/saving`);
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// deleteMember
export const deleteMember = async () => {
  try {
    const response = await axios.delete(`${REACT_APP_URL}${MEMBER}`);
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
