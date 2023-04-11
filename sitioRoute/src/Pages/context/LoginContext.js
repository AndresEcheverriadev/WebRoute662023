import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../Services/AuthService.js";

export const LoginContext = createContext([]);
function LoginContextProvider({ children }) {
  const navigate = useNavigate();

  const logOut = () => {
    const data = AuthService.logout();
    if (data.success === true) {
      return navigate("/");
    }
  };

  const checkToken = async () => {
    const data = await AuthService.loginToken();
    if (data.success === true) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  };

  const [isLoggedIn, setisLoggedIn] = useState();

  return (
    <LoginContext.Provider
      value={{
        checkToken,
        logOut,
        isLoggedIn,
        setisLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
