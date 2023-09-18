import axios from 'axios';
import { REACT_APP_URL, AUTH } from 'constants/API_URL';

// postCheck
export const postIdCheck = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${AUTH}/id/check`, {
      id: 'test',
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postSmsSend
export const postSmsSend = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${AUTH}/sms/send`, {
      to: '01012345678',
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postSmsCheck

export const postSmsCheck = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${AUTH}/sms/check`, {
      phone: '01012345678',
      sms: '123456',
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postSimplePasswordCheck
export const postSimplePasswordCheck = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${AUTH}/simple-password/check`, {
      simplePassword: '123456',
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postPasswordCheck

export const postPasswordCheck = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${AUTH}/password/check`, {
      password: 'test',
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
