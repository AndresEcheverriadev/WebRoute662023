import { LocalStorageService } from "./LocalStorageService.js";
import { HTTPRequestService } from "./HTTPRequestService.js";

const login = async (userName, password) => {
  try {
    const checkToken = await loginToken();
    if (checkToken) {
      logout();
    }
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_LOGIN_USER_URL,
      {
        userName,
        password,
      }
    );
    if (data.status === 200 && data.data.token) {
      LocalStorageService.setItem("token", data.data.token);
      return { success: true, user: data.data.user };
    }
    return { success: false };
  } catch (error) {
    return { success: false };
  }
};

const register = async ({ userName, password }) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_API_REGISTER_URL,
      {
        userName,
        password,
      }
    );
    return { success: data.status === 200 };
  } catch (error) {
    return { success: false };
  }
};

const loginToken = async () => {
  try {
    const token = await LocalStorageService.getItem("token");
    if (!token) return { success: false };
    return { success: true, user: true };
  } catch (error) {
    return { success: false };
  }
};

const logout = async () => {
  try {
    const deleteToken = LocalStorageService.removeItem("token");
    if (!deleteToken) return { success: false };
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const AuthService = { login, register, loginToken, logout };
