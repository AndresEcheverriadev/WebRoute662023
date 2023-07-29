import { HTTPRequestService } from "./HTTPRequestService.js";

const getAllDays = async () => {
  try {
    const { data } = await HTTPRequestService.get(
      process.env.REACT_APP_ALL_DAYS_URL
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const getFilteredDay = async (day) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_FILTERED_DAY_URL,
      day
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false }, console.log(error);
  }
};

const enableDay = async (day) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_ENABLE_DAY_URL,
      day
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const disableDay = async (day) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_DISABLE_DAY_URL,
      day
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const addTime = async (day, time) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_ADD_TIME_URL,
      { day, time }
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const eraseTime = async (day, time) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_ERASE_TIME_URL,
      { day, time }
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

export const DayService = {
  getAllDays,
  getFilteredDay,
  enableDay,
  disableDay,
  addTime,
  eraseTime,
};
