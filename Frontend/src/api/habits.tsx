import axios from 'axios';
import { REACT_APP_URL, HABITS } from 'constants/API_URL';

// getTotalCalendarMonth
export const getTotalCalendarMonth = async (year: string, month: string) => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${HABITS}/total/calendar/month?year=${year}&month=${month}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getTotalCalendarDay
export const getTotalCalendarDay = async (year: string, month: string, day: string) => {
  try {
    const response = await axios.get(
      `${REACT_APP_URL}${HABITS}/total/calendar/day?year=${year}&month=${month}&day=${day}`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getBuying
export const getBuying = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${HABITS}/buying`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postNewHabit
export const postNewHabit = async (data: any) => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${HABITS}/new`, {
      title: '제목', //습관 제목
      habit: '금연', //선택 습관
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getProgress
export const getProgress = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${HABITS}/progress`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// putHabitEnd
const habitId = '1';
export const putHabitEnd = async () => {
  try {
    const response = await axios.put(`${REACT_APP_URL}${HABITS}/progress/1/end`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// getHabitComplete
export const getHabitComplete = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${HABITS}/complete`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
// getHabitDetail
export const getHabitDetail = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${HABITS}/${habitId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
// getHabitCalendar
export const getHabitCalendar = async (year: string, month: string) => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${HABITS}/${habitId}/calendar?year=${year}&month=${month}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
// getHabitToday
export const getHabitToday = async () => {
  try {
    const response = await axios.get(`${REACT_APP_URL}${HABITS}/today`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};

// postSavingToday
export const postSavingToday = async () => {
  try {
    const response = await axios.post(`${REACT_APP_URL}${HABITS}/today/saving`, {
      habitList: {
        habitId: '111111111111122112334', // 여기 타입 Long임.
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data: ', error);
  }
};
