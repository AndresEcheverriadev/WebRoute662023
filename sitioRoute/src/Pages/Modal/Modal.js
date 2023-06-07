import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ show, contextButton, bookingData, peopleBooking }) => {
  useEffect(() => {
    if (show === true) {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "auto";
      };
    }
  }, [show]);
  return (
    <div
      className={`modal fade ${
        show === true ? "show showStyleBackground" : ""
      }`}
      style={{ display: show === true ? "block" : "none" }}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modalDialogStyle">
        <div
          className={`modal-content modalContentStyle modalContentWidthDesktop`}
        >
          <div className="modal-body modalBodyEdit">
            <div className="confirmedWrapper">
              <div className="bookingConfirmDataContainer">
                <div className="titlesBookingContainer">
                  <b>¡Tu reserva ya esta lista!</b>
                  <b>Revisa tu correo.</b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="calendarOkIcon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>
                </div>
                <div className="bookingDataContainer">
                  <p>Nombre: {bookingData.nombreReserva}</p>
                  <p>Email: {bookingData.emailReserva}</p>
                  <p>Teléfono: {bookingData.telefonoReserva}</p>
                  <p>Fecha: {bookingData.diaReserva}</p>
                  <p>Hora:{bookingData.horaReserva}</p>
                  <p>Cantidad de personas: {peopleBooking}</p>
                  <p>Zona de reserva: {bookingData.zonaReserva}</p>
                  <p>Comentario: {bookingData.comentarioReserva}</p>
                </div>
              </div>
            </div>
            {contextButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
