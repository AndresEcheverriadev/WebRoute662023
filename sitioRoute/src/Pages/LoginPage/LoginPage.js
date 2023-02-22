import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo-blanco.svg";
import "./LoginPage.css";

function LoginPage() {
  const userer = "andresE";
  const passer = "123456A";
  const year = new Date().getFullYear();
  const [loginData, setLoginData] = useState({ user: "", password: "" });
  const navigate = useNavigate();

  const updateUser = (e) => {
    setLoginData((prev) => ({ ...prev, user: e.target.value }));
  };

  const updatePassword = (e) => {
    setLoginData((prev) => ({ ...prev, password: e.target.value }));
  };

  const login = () => {
    if ((loginData.user === userer) & (loginData.password === passer)) {
      navigate("/bookings");
    } else {
      alert("Datos incorrectos");
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
        />
        <p className="credentials__text">Password</p>
        <input
          className="credentials__input"
          type="password"
          onChange={(e) => updatePassword(e)}
        ></input>
        <button className="credentials__btn" onClick={login}>
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
