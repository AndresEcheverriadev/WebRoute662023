import { useContext, useEffect } from "react";
import { useNavigate, redirect, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext.js";
import { AuthService } from "../../Services/AuthService.js";
import NoLoginPage from "../NoLoginPage/NoLoginPage.js";

function Guard({ children }) {
  useEffect(() => {
    checkToken();
  });
  const navigate = useNavigate();
  const { checkToken, isLoggedIn } = useContext(LoginContext);
  if (isLoggedIn === false) {
    return navigate("/");
  }
  //   // return null;
  // return navigate("/")
  //   // return <NoLoginPage />;
  // }
  return children;
}

export default Guard;
