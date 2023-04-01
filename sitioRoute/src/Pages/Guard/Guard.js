import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext.js";

function Guard({ children }) {
  useEffect(() => {
    checkToken();
  });
  const navigate = useNavigate();
  const { checkToken, isLoggedIn } = useContext(LoginContext);
  if (isLoggedIn === false) {
    return navigate("/");
  }
  return children;
}

export default Guard;
