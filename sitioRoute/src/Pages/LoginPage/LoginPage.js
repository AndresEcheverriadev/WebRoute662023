import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../logo-blanco.svg";
import { LoginContext } from "../context/LoginContext.js";
import { AuthService } from "../../Services/AuthService.js";
import "./LoginPage.css";

function LoginPage() {
  const userer = "andresE";
  const passer = "123456A";
  const year = new Date().getFullYear();
  const [loginData, setLoginData] = useState({ user: "", password: "" });
  const inputPassword = document.getElementById("inputPassManager");
  const inputUser = document.getElementById("inputUserManager");
  const { setisLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const updateUser = (e) => {
    setLoginData((prev) => ({ ...prev, user: e.target.value }));
  };

  const updatePassword = (e) => {
    setLoginData((prev) => ({ ...prev, password: e.target.value }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await AuthService.login(
      loginData.user,
      loginData.password
    );
    if (response.success) {
      setisLoggedIn(true);
      navigate("/bookings");
    } else {
      alert("Intente Nuevamente");
      inputUser.value = "";
      inputPassword.value = "";
    }
  };

  return (
    <div className="loginPage">
      <a href="/">
        <img className="logo" src={logo} alt="logo Route" />
      </a>
      <form className="credentials">
        <p className="credentials__text">Usuario</p>
        <input
          className="credentials__input"
          type="text"
          onChange={(e) => updateUser(e)}
          id="inputUserManager"
        />
        <p className="credentials__text">Password</p>
        <input
          className="credentials__input"
          type="password"
          onChange={(e) => updatePassword(e)}
          id="inputPassManager"
        ></input>
        <button className="credentials__btn" onClick={loginUser}>
          Ingresar
        </button>
      </form>
      <p className="copyright">
        {year} Route SPA. Todos los derechos reservados.
      </p>
    </div>
  );
}

export default LoginPage;
