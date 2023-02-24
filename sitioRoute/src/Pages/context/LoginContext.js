import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../Services/AuthService.js";

export const LoginContext = createContext([]);
function LoginContextProvider({ children }) {
  const navigate = useNavigate();

  //   const logIn = (userName, password) => {
  //     const data = sessionStorage.getItem("adminLogged");
  //     if (data == null) {
  //       sessionStorage.setItem(
  //         "adminLogged",
  //         JSON.stringify(`adminLogged${Date.now()}`)
  //       );
  //     } else {
  //       alert("Ya existe sesión");
  //     }
  //   };

  const logOut = () => {
    const data = AuthService.logout();
    if (data.success === true) {
      return navigate("/");
    }
  };

  const checkToken = async () => {
    const data = await AuthService.loginToken();
    if (data.success === true) {
      alert("data success");
      setisLoggedIn(true);
    } else {
      alert("data fail");
      setisLoggedIn(false);
    }
  };

  const [isLoggedIn, setisLoggedIn] = useState();

  return (
    <LoginContext.Provider
      value={{ checkToken, logOut, isLoggedIn, setisLoggedIn }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
