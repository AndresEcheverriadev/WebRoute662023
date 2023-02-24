import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("adminLogged");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = () => {
    alert("token1");
    const toDay = Date.now();
    sessionStorage.setItem("adminLogged", JSON.stringify(toDay));
    setToken(toDay.token);
    return alert("save token");
  };

  return {
    saveToken,
    token,
  };
}
