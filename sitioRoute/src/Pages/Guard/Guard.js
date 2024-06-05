import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext.js";

function Guard({ children }) {
  const { checkToken, isLoggedIn } = useContext(LoginContext);
  useEffect(() => {
    checkToken();
  }, []);
  const navigate = useNavigate();
  if (isLoggedIn === false) {
    return navigate("/");
  }
  return children;
}

export default Guard;
