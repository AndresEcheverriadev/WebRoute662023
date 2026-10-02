import { useEffect, Suspense, lazy } from "react";
import "./ThanksPage.css";
import { analyticService } from "../../Services/AnalyticService.js";
import logo from "../../logo-contraste.svg";

function ThanksPage() {
  useEffect(() => {
    analyticService.pageTrackingListen();
  }, []);

  return (
    <div className="thanksPage">
      <a href="/">
        <img src={logo} className="logo" alt="logo Route 66" />
      </a>
      <h1>Gracias!</h1>
      <p>Revisa tu bandeja de correo con los detalles de tu reserva.</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="thanksPage__btnHome"
      >
        Volver al inicio
      </button>
    </div>
  );
}

export default ThanksPage;
