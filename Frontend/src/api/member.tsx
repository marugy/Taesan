import axios from 'axios';
import { REACT_APP_URL, MEMBER } from 'constants/API_URL';

// postJoin
export const postJoin = async (
  loginId: string,
  password: string,
  email: string,
  name: string,
  phone: string,
  address: string,
  zipCode: string,
  addressDetail: string,
  simplePasswrod: string,
) => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${MEMBER}/join`, {
      loginId: loginId,
      password: password,
      email: email,
      name: name,
      phone: phone,
      address: address,
      zipCode: zipCode,
      addressDetail: addressDetail,
      simplePasswrod: simplePasswrod,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postLogin
export const postLogin = async (login: string, password: string) => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${MEMBER}/login`, {
      login: login,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
// postSimpleLogin

export const postSimpleLogin = async (simplePasswrod: string) => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${MEMBER}/simple-login`, {
      simplePasswrod: simplePasswrod,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getInfo
export const getInfo = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${MEMBER}/info`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// putInfo
export const putInfo = async (email: string, address: string, addressDetail: string, zipCode: string) => {
  try {
    const response = await axios.put(`${REACT_APP_URL}${MEMBER}/info`, {
      email: email,
      address: address,
      addressDetail: addressDetail,
      zipCode: zipCode,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// putPassword
export const putPassword = async (password: string) => {
  try {
    const response = await axios.put(`${REACT_APP_URL}${MEMBER}/password`, {
      password: password, //기존 비밀번호
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// putSimplePassword
export const putSimplePassword = async (putSimplePassword: string) => {
  try {
    const response = await axios.put(`${REACT_APP_URL}${MEMBER}/simple-password`, {
      putSimplePassword: putSimplePassword, //기존 비밀번호
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getSaving
export const getSaving = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${MEMBER}/saving`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// deleteMember
export const deleteMember = async () => {
  try {
    const response = await axios.delete(`${REACT_APP_URL}${MEMBER}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
