import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo-blanco.svg";
import { AuthService } from "../../Services/AuthService.js";
import "./LoginPage.css";

function LoginPage() {
  const userer = "andresE";
  const passer = "123456A";
  const year = new Date().getFullYear();
  const [loginData, setLoginData] = useState({ user: "", password: "" });
  const inputPassword = document.getElementById("inputPassManager");
  const inputUser = document.getElementById("inputUserManager");
  const navigate = useNavigate();

  const updateUser = (e) => {
    setLoginData((prev) => ({ ...prev, user: e.target.value }));
  };

  const updatePassword = (e) => {
    setLoginData((prev) => ({ ...prev, password: e.target.value }));
  };

  const loginUser = async () => {
    const response = await AuthService.login(
      loginData.user,
      loginData.password
    );
    if (response.success) {
      inputUser.value = "";
      inputPassword.value = "";
      return navigate("/bookings");
    } else {
      alert("Intente Nuevamente");
    }

    // if ((loginData.user === userer) & (loginData.password === passer)) {
    //   AuthService.login(loginData.user, loginData.password);
    //   navigate("/bookings");
    //   inputUser.value = "";
    //   inputPassword.value = "";
    // } else {
    //   inputUser.value = "";
    //   inputPassword.value = "";
    //   alert("Datos incorrectos");
    // }
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
