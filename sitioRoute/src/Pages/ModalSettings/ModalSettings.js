import React, { useEffect, useState } from "react";
import days from "../../Data/days.mjs";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import AccordionModule from "../Acordion/Acordion.js";
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
            {contextButton}
            <div className="modalContent">
              <h2>Configuración de Reservas</h2>
              <div className="weekdaysSeparators">
                <p className="weekdaysSeparatorWeekday">Día de la semana</p>
              </div>
              <div className="weekdaysWrapper">
                {days.map((day) => {
                  return (
                    <div className="weekday">
                      <h6 className="weekdayTitle">{day.nameDay}</h6>

                      <div className="weekdayEnabledContainer">
                        {day.enabled ? (
                          <h6 className="weekdayTitleEnabled">Habilitado</h6>
                        ) : (
                          <h6 className="weekdayTitleDisabled">Bloqueado</h6>
                        )}
                        <input type="checkbox" className="weekdayCheckbox" />
                      </div>
                      <div className="weekdayTimesContainer">
                        <AccordionModule content={day} />
                      </div>
                    </div>
                  );
                })}
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
