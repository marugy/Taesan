import axios from 'axios';
import { REACT_APP_URL, MEMBER } from 'constants/API_URL';

export const getInfo = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${MEMBER}/info`);
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
