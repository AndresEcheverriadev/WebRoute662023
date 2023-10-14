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

  useEffect(() => {
    getAllDays();
    getSameDayOption();
    getSalonOption();
    getTerrazaOption();
  }, []);

  const [days, setDays] = useState([]);

  const getAllDays = async () => {
    const days = await DayService.getAllDays();
    if (!days) return;
    let newDays = { ...days };
    setDays(newDays.data);
  };

  const enableDay = async (dayNumber) => {
    await DayService.enableDay({ dayToEnable: dayNumber });
    getAllDays();
  };

  const disableDay = async (dayNumber) => {
    await DayService.disableDay({ dayToDisable: dayNumber });
    getAllDays();
  };

  const handleEnableDay = (enabled, dayNumber) => {
    if (!enabled) {
      enableDay(dayNumber);
    } else {
      disableDay(dayNumber);
    }
  };

  const [sameDayBooking, setSameDayBooking] = useState();

  const getSameDayOption = async () => {
    const sameDayOption = await SettingsService.getSameDayOption();
    if (!sameDayOption) return;
    let newSameDayOption = { ...sameDayOption };
    setSameDayBooking({
      name: newSameDayOption.data.name,
      status: newSameDayOption.data.status,
    });
  };

  const [salonOption, setSalonOption] = useState();

  const getSalonOption = async () => {
    const salonOption = await SettingsService.getSalonOption();
    if (!salonOption) return;
    let newSalonOption = { ...salonOption };
    setSalonOption({
      name: newSalonOption.data.name,
      status: newSalonOption.data.status,
    });
  };

  const [terrazaOption, setTerrazaOption] = useState();

  const getTerrazaOption = async () => {
    const terrazaOption = await SettingsService.getTerrazaOption();
    if (!terrazaOption) return;
    let newTerrazaOption = { ...terrazaOption };
    setTerrazaOption({
      name: newTerrazaOption.data.name,
      status: newTerrazaOption.data.status,
    });
  };

  const enableOption = async (option) => {
    await SettingsService.enableOption({
      option: option,
    });
    getSameDayOption();
    getSalonOption();
    getTerrazaOption();
  };

  const disableOption = async (option) => {
    await SettingsService.disableOption({
      option: option,
    });
    getSameDayOption();
    getSalonOption();
    getTerrazaOption();
  };

  const handleEnableOption = (enabled, option) => {
    if (!enabled) {
      enableOption(option);
    } else {
      disableOption(option);
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
              <h2 className="modalTitle">Configuración de Reservas</h2>
              <div className="weekdaysSeparators">
                <h5 className="weekdaysSeparatorWeekday">Día de la semana</h5>
              </div>
              <div className="weekdaysWrapper">
                {days?.map((day, index) => {
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
                            handleEnableDay(day.enabled, day.dayNumber)
                          }
                        />
                      </div>
                      <AccordionModule day={day} key={day.nameDay} />
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
                        handleEnableOption(
                          sameDayBooking.status,
                          "sameDayBooking"
                        )
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
              <div className="optionsWrapper">
                <div className="sameDayBookingWrapper">
                  <h5 className="sameDayBookingTitle">
                    Permitir reservas en Salon
                  </h5>
                  <div className="sameDayCheckContainer">
                    <input
                      type="checkbox"
                      className="samedayCheckbox"
                      checked={salonOption?.status ? true : false}
                      onChange={() =>
                        handleEnableOption(
                          salonOption.status,
                          "bookingZoneSalon"
                        )
                      }
                    />
                    {salonOption?.status ? (
                      <h6 className="samedayTitleEnabled">Habilitado</h6>
                    ) : (
                      <h6 className="samedayTitleDisabled">Deshabilitado</h6>
                    )}
                  </div>
                </div>
              </div>
              <div className="optionsWrapper">
                <div className="sameDayBookingWrapper">
                  <h5 className="sameDayBookingTitle">
                    Permitir reservas en Terraza
                  </h5>
                  <div className="sameDayCheckContainer">
                    <input
                      type="checkbox"
                      className="samedayCheckbox"
                      checked={terrazaOption?.status ? true : false}
                      onChange={() =>
                        handleEnableOption(
                          terrazaOption.status,
                          "bookingZoneTerraza"
                        )
                      }
                    />
                    {terrazaOption?.status ? (
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
