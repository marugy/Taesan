import axios from 'axios';
import { REACT_APP_URL, ANALYST } from 'constants/API_URL';

// postPlace
export const postPlace = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${ANALYST}/place`, {
      shop_name: '상점이름',
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postReceipt

export const postReceipt = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${ANALYST}/receipt`, {
      img_url: '영수증 이미지 URL',
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
