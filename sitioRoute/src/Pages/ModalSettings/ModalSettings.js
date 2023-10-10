import React, { useEffect, useState } from "react";
import AccordionModule from "../AccordionModule/AccordionModule.js";
import { DayService } from "../../Services/DayService.js";
import { SettingsService } from "../../Services/SettingsService.js";
import "./ModalSettings.css";
import "./ModalSettingsResponsive.css";

const ModalSettings = ({ show, contextButton }) => {
  useEffect(() => {
    if (show === true) {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "auto";
      };
    }
  }, [show]);

  const [days, setDays] = useState([]);

  const getAllDays = async () => {
    const days = await DayService.getAllDays();
    if (!days) return;
    let newDays = { ...days };
    setDays(newDays.data);
  };

  useEffect(() => {
    getAllDays();
    getSameDayOption("sameDayBooking");
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

  const [updateModal, setUpdateModal] = useState(false);

  const updatedModal = () => {
    setUpdateModal(!updatedModal);
  };

  useEffect(() => {
    getAllDays();
    getSameDayOption("sameDayBooking");
  }, [updateModal]);

  const getSameDayOption = async (option) => {
    const sameDayOption = await SettingsService.getOption({ option: option });
    if (!sameDayOption) return;
    let newSameDayOption = { ...sameDayOption };
    setSameDayBooking({
      name: newSameDayOption.data.name,
      status: newSameDayOption.data.status,
    });
  };

  const [sameDayBooking, setSameDayBooking] = useState();

  const handleEnableSameDay = async (enabled) => {
    if (!enabled) {
      await SettingsService.enableOption({
        option: "sameDayBooking",
      });
    } else {
      await SettingsService.disableOption({
        option: "sameDayBooking",
      });
    }
  };

  // const getAllOptions = async () => {
  //   const configOptions = await SettingsService.getAllOptions();
  //   setConfigOptions(configOptions.data);
  // };

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
              <h2 className="modalTitle">Configuración de Reservas</h2>
              <div className="weekdaysSeparators">
                <h5 className="weekdaysSeparatorWeekday">Día de la semana</h5>
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
                      <AccordionModule
                        day={day}
                        key={day.nameDay}
                        updateModal={updatedModal}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="optionsWrapper">
                <div className="sameDayBookingWrapper">
                  <h5 className="sameDayBookingTitle">
                    Permitir reservas el mismo día
                  </h5>
                  <div className="sameDayCheckContainer">
                    <input
                      type="checkbox"
                      className="samedayCheckbox"
                      checked={sameDayBooking?.status ? true : false}
                      onChange={() =>
                        handleEnableSameDay(sameDayBooking.status)
                      }
                    />
                    {sameDayBooking?.status ? (
                      <h6 className="samedayTitleEnabled">Habilitado</h6>
                    ) : (
                      <h6 className="samedayTitleDisabled">Deshabilitado</h6>
                    )}
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
