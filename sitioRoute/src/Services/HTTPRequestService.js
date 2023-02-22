import axios from "axios";
import { AuthService } from "./AuthService.js";
import { LocalStorageService } from "./LocalStorageService.js";

const get = async (url) => {
  try {
    const token = LocalStorageService.getItem("token");
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
    const token = LocalStorageService.getItem("token");
    const response = await axios.post(url, data, {
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

const postBooking = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const put = async (url, data) => {
  try {
    const token = LocalStorageService.getItem("token");
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
    const token = LocalStorageService.getItem("token");
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
