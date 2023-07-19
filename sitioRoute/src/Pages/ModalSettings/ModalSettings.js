import React, { useEffect } from "react";
import "./ModalSettings.css";

const ModalSettings = ({ show, contextButton, bookingSettingsData }) => {
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
        <div className={`modal-content modalContentStyle`}>
          <div className="modal-body modalBodyEdit">
            <div className="modalContent">
              <h2>Configuración de Reservas</h2>
              <div className="weekdaysWrapper">
                <div className="weekday">
                  <h5>Lunes</h5>
                  <h6>Habilitado</h6>
                  <div className="weekdayTimesContainer">
                    <h6>Horarios habilitados</h6>
                    <div className="weekdayTime">13:00</div>
                    <div className="weekdayTime">13:15</div>
                    <div className="weekdayTime">13:30</div>
                    <div className="weekdayTime">13:45</div>
                    <div className="weekdayTime">14:00</div>
                    <div className="weekdayTime">14:15</div>
                    <div className="weekdayTime">14:30</div>
                    <div className="weekdayTime">14:45</div>
                    <div className="weekdayTime">15:00</div>
                    <div className="weekdayTime">15:15</div>
                    <div className="weekdayTime">15:30</div>
                    <div className="weekdayTime">15:45</div>
                    <div className="weekdayTime">16:00</div>
                    <div className="weekdayTime">16:15</div>
                    <div className="weekdayTime">16:30</div>
                    <div className="weekdayTime">16:45</div>
                    <div className="weekdayTime">17:00</div>
                    <div className="weekdayTime">17:15</div>
                    <div className="weekdayTime">17:30</div>
                    <div className="weekdayTime">17:45</div>
                    <div className="weekdayTime">18:00</div>
                    <div className="weekdayTime">18:15</div>
                    <div className="weekdayTime">18:30</div>
                    <div className="weekdayTime">18:45</div>
                    <div className="weekdayTime">19:00</div>
                    <div className="weekdayTime">19:15</div>
                    <div className="weekdayTime">19:30</div>
                    <div className="weekdayTime">19:45</div>
                    <div className="weekdayTime">20:00</div>
                    <div className="weekdayTime">20:15</div>
                    <div className="weekdayTime">20:30</div>
                    <div className="weekdayTime">20:45</div>
                  </div>
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

export default ModalSettings;
