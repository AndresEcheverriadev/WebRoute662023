import axios from "axios";
import { AuthService } from "./AuthService.js";
import { SessionStorageService } from "./SessionStorageService.js";

const get = async (url) => {
  try {
    const token = SessionStorageService.getItem("token");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Request no autorizado"
    ) {
      AuthService.logout();
      window.location.replace("/");
      return;
    }
    console.error(error);
  }
};

const post = async (url, data) => {
  try {
    const token = SessionStorageService.getItem("token");
    const response = await axios.post(url, data, {
      headers: { Authorization: `${token}` },
    });
    return response;
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      AuthService.logout();
      window.location.replace("/");
      return;
    }
    console.error(error);
  }
};

const postBooking = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data.status;
  } catch (error) {
    return error.response.data;
  }
};

const put = async (url, data) => {
  try {
    const token = SessionStorageService.getItem("token");
    const response = await axios.put(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      AuthService.logout();
      window.location.replace("/");
      return;
    }
    console.error(error);
  }
};

const remove = async (url, params) => {
  try {
    const token = SessionStorageService.getItem("token");
    const response = await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
      params,
    });
    return response;
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Request no autorizado"
    ) {
      AuthService.logout();
      window.location.replace("/");
      return;
    }
    console.error(error);
  }
};

export const HTTPRequestService = { get, post, postBooking, put, remove };
