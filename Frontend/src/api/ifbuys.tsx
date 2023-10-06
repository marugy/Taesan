import axios from 'axios';
import { REACT_APP_URL, BUYIF } from 'constants/API_URL';

// getBuyIf
export const getBuyIf = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${BUYIF}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postBuyIf
export const postBuyIf = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${BUYIF}`, {
      data: {
        name: '물건 이름',
        price: '물건 가격',
      },
      img: 'asdfdsfda.png',
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getPos ( 이거 포스트인데 확인해봐야해 )
const price = 111111;
export const getPos = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${BUYIF}/possibility?price=${price}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
