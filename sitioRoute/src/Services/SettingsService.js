import { HTTPRequestService } from "./HTTPRequestService.js";

const getAllOptions = async () => {
  try {
    const { data } = await HTTPRequestService.get(
      process.env.REACT_APP_CONFIG_GET_OPTIONS_URL
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const getOption = async (option) => {
  alert(option);
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_CONFIG_GET_OPTION_URL,
      option
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const getSameDayOption = async () => {
  try {
    const { data } = await HTTPRequestService.get(
      process.env.REACT_APP_CONFIG_GET_SAMEDAY_OPTION_URL
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const enableOption = async (option) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_CONFIG_ENABLE_OPTION_URL,
      option
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const disableOption = async (option) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_CONFIG_DISABLE_OPTION_URL,
      option
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

export const SettingsService = {
  getAllOptions,
  getOption,
  getSameDayOption,
  enableOption,
  disableOption,
};
