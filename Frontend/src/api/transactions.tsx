import axios from 'axios';
import { REACT_APP_URL, TRANSACTIONS } from 'constants/API_URL';

// 테스트용 transaction_id
const transaction_id = 1;

// getHistory
export const getHistory = async (card_id:string,cursor:number,limit:number) => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${TRANSACTIONS}/history?card_id=${card_id}&cursor=${cursor}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getTransactionDetail
export const getTransactionDetail = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${TRANSACTIONS}/${transaction_id}/detail`);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getTransactionReceipt
export const getTransactionReceipt = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${TRANSACTIONS}/${transaction_id}/receipt`);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
