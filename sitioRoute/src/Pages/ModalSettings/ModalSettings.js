import React, { useEffect, useState } from "react";
import AccordionModule from "../Accordion/Accordion.js";
import { DayService } from "../../Services/DayService.js";
import "./ModalSettings.css";

const ModalSettings = ({ show, contextButton }) => {
  // useEffect(() => {
  //   if (show === true) {
  //     document.body.style.overflowY = "hidden";
  //     return () => {
  //       document.body.style.overflowY = "auto";
  //     };
  //   }
  // }, [show]);

  const [days, setDays] = useState([]);

  const getAllDays = async () => {
    const days = await DayService.getAllDays();
    if (!days) return;
    setDays(days.data);
  };

  useEffect(() => {
    getAllDays();
  }, []);

  const enableDay = async (dayNumber) => {
    await DayService.enableDay({ dayToEnable: dayNumber });
    getAllDays();
  };

  const disableDay = async (dayNumber) => {
    await DayService.disableDay({ dayToDisable: dayNumber });
    getAllDays();
  };

  const handleEnable = (enabled, dayNumber) => {
    if (!enabled) {
      enableDay(dayNumber);
    } else {
      disableDay(dayNumber);
    }
  };

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
                {days.map((day, index) => {
                  return (
                    <div className="weekday" key={index}>
                      <h6 className="weekdayTitle">{day.nameDay}</h6>

                      <div className="weekdayEnabledContainer">
                        {day.enabled ? (
                          <h6 className="weekdayTitleEnabled">Habilitado</h6>
                        ) : (
                          <h6 className="weekdayTitleDisabled">Bloqueado</h6>
                        )}
                        <input
                          type="checkbox"
                          className="weekdayCheckbox"
                          checked={day.enabled ? true : false}
                          onChange={() =>
                            handleEnable(day.enabled, day.dayNumber)
                          }
                        />
                      </div>
                      <div className="weekdayTimesContainer">
                        <AccordionModule content={day} key={index} />
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
