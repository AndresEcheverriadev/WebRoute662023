import React, { useEffect, useRef, useState } from "react";
import { simpleDate, getDay } from "../../Data/utils/formatDates.js";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";
import es from "date-fns/locale/es";
import interiorDemo from "../BookingModule/interiorDemo.webp";
import terrazaDemo from "../BookingModule/terrazaDemo.webp";
import { BookingService } from "../../Services/BookingService.js";
import Modal from "../Modal/Modal.js";
import ModalService from "../../Services/ModalService.js";
import { DayService } from "../../Services/DayService.js";
import { SettingsService } from "../../Services/SettingsService.js";
import { analyticService } from "../../Services/AnalyticService.js";
import "./BookingModule.css";
import "./BookingModuleResponsive.css";
setDefaultLocale("es");
registerLocale("es", es);

function BookingModule() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookingZones, setBookingZones] = useState([]);

  const getAvailableTimes = async (day) => {
    let date = new Date(day).toDateString();
    let toDay = new Date().toDateString();
    let hour = new Date().getHours();
    let dayNumber = getDay(day);
    let availableTimesTemp = [];
    const days = await DayService.getAllDays();
    const filteredDay = await days.data?.filter(
      (day) => day.dayNumber === dayNumber
    );
    const filteredTimesAlmuerzo = filteredDay[0].timesAlmuerzo.filter(
      (time) => time.enabled === true
    );
    for (let index = 0; index < filteredTimesAlmuerzo.length; index++) {
      availableTimesTemp.push(filteredTimesAlmuerzo[index].time);
    }
    const filteredTimesCena = filteredDay[0].timesCena.filter(
      (time) => time.enabled === true
    );
    for (let index = 0; index < filteredTimesCena.length; index++) {
      availableTimesTemp.push(filteredTimesCena[index].time);
    }
    const filteredAvailableTime = availableTimesTemp.filter(
      (time) => time > `${hour}:45` && time < "18:15"
    );
    if (date === toDay) {
      setAvailableTimes(filteredAvailableTime);
    } else setAvailableTimes(availableTimesTemp);
  };

  useEffect(() => {
    if (availableTimes.length !== 0) {
      updateBooking({ horaReserva: availableTimes[0] });
    }
  }, [availableTimes]);

  useEffect(() => {
    if (bookingZones.length !== 0) {
      updateBooking({ zonaReserva: bookingZones[0] });
    }
  }, [bookingZones]);

  const [bookingDaysRange, setBookingDaysRange] = useState(20);
  const [displayDate, setDisplayDate] = useState();
  const [peopleBooking, setPeopleBooking] = useState(1);
  const [zoneSelected, setZoneSelected] = useState("");
  const [dataOk, setDataOk] = useState(false);
  const [disabled, setDisabled] = useState("disabled");
  const [bookingData, setBookingData] = useState({
    nombreReserva: "",
    emailReserva: "",
    telefonoReserva: "",
    diaReserva: "",
    horaReserva: availableTimes[0],
    cantidadReserva: peopleBooking,
    zonaReserva: bookingZones[0],
    comentarioReserva: "",
  });
  const [bookingCompleted, setBookingCompleted] = useState(false);

  useEffect(() => {
    const quantityNotification = document.getElementById(
      "quantityNotification"
    );
    if (peopleBooking > 10) {
      quantityNotification.style.visibility = "visible";
    } else {
      quantityNotification.style.visibility = "hidden";
    }
  }, [peopleBooking]);

  useEffect(() => {
    const salonNotification = document.getElementById("salonNotification");
    const imgBooking = document.getElementById("bookingImg");
    switch (zoneSelected) {
      case "Interior":
        imgBooking.src = interiorDemo;
        break;
      case "Terraza":
        imgBooking.src = terrazaDemo;
        break;
      default:
        break;
    }
    if (zoneSelected === "Salon ejecutivo") {
      salonNotification.style.visibility = "visible";
    } else {
      salonNotification.style.visibility = "hidden";
    }
  }, [zoneSelected]);

  const getOptionValue = () => {
    const zoneSelector = document.getElementById("zoneSelector");
    let selectorValue = zoneSelector.value;
    setZoneSelected(selectorValue);
    updateBooking({ zonaReserva: selectorValue });
  };

  const addPeople = () => {
    setPeopleBooking(peopleBooking + 1);
    updateBooking({ cantidadReserva: peopleBooking + 1 });
  };

  const minusPeople = () => {
    if (peopleBooking > 1) {
      setPeopleBooking(peopleBooking - 1);
      updateBooking({ cantidadReserva: peopleBooking - 1 });
    }
  };

  function updateBooking(value) {
    return setBookingData((prev) => {
      return { ...prev, ...value };
    });
  }

  useEffect(() => {
    const bookingNotification = document.getElementById("notificationBooking");
    if (
      bookingData.nombreReserva !== "" &&
      bookingData.emailReserva !== "" &&
      bookingData.telefonoReserva !== "" &&
      bookingData.diaReserva !== "" &&
      bookingData.horaReserva !== "" &&
      bookingData.cantidadReserva !== ""
    ) {
      setDataOk(true);
      setDisabled("");
      bookingNotification.style.visibility = "hidden";
    } else {
      setDataOk(false);
      setDisabled("disabled");
      bookingNotification.style.visibility = "visible";
    }
  }, [bookingData]);

  const sendDataBooking = async () => {
    if (dataOk === true) {
      const sendBooking = await BookingService.addBooking(
        bookingData.nombreReserva,
        bookingData.emailReserva,
        bookingData.telefonoReserva,
        bookingData.diaReserva,
        bookingData.horaReserva,
        bookingData.cantidadReserva,
        bookingData.zonaReserva,
        bookingData.comentarioReserva
      );
      analyticService.customEvent("Reservar");
      if (sendBooking.result.error === "Faltan datos para reserva") {
        alert("Faltan datos para generar la reserva.");
      } else if (sendBooking.result.error === "Reserva ya existe") {
        alert("Ya existe reserva con estos datos. Elija otro día/horario.");
      } else {
        setBookingCompleted(true);
      }
    } else {
      alert("Error generando reserva. Disculpe las molestias.");
    }
  };

  const { show, showModal, refreshAndScroll } = ModalService();

  useEffect(() => {
    if (bookingCompleted === true) {
      showModal();
    }
  }, [bookingCompleted, showModal]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const btnsEditModal = () => {
    return (
      <button className="btnBackHome" onClick={refreshAndScroll}>
        Volver al sitio
      </button>
    );
  };

  const handleDateChange = (date) => {
    setDisplayDate(date);
    getAvailableTimes(date);
    updateBooking({ diaReserva: simpleDate(date) });
    updateBooking({ horaReserva: availableTimes[0] });
  };

  const filterDates = (date) => {
    const day = date.getDay();
    const result = blockDays.every((element) => {
      if (element === day) {
        return false;
      } else {
        return true;
      }
    });
    return result;
  };

  const [blockDays, setBlockDays] = useState([]);

  const getblockDays = async () => {
    let blockDays = [];
    const days = await DayService.getAllDays();
    const filteredDays = await days.data?.filter(
      (day) => day.enabled === false
    );
    if (!filteredDays) return;
    filteredDays?.map((day) => {
      return blockDays.push(day.dayNumber);
    });
    setBlockDays(blockDays);
  };

  const [sameDayBooking, setSameDayBooking] = useState();

  const getSameDayOption = async () => {
    const sameDayOption = await SettingsService.getSameDayOption();
    if (!sameDayOption) return;
    let newSameDayOption = { ...sameDayOption };
    setSameDayBooking(newSameDayOption.data.status);
  };

  const getBookingOptions = async () => {
    let bookingZonesTemp = [];
    const salonOption = await SettingsService.getSalonOption();
    if (salonOption.data.status) {
      bookingZonesTemp.push("Salón");
    }
    const terrazaOption = await SettingsService.getTerrazaOption();
    if (terrazaOption.data.status) {
      bookingZonesTemp.push("Terraza");
    }
    setBookingZones(bookingZonesTemp);
  };

  useEffect(() => {
    getblockDays();
    getSameDayOption();
    getBookingOptions();
    const datePickerRef = document.querySelector(".datePicker");
    datePickerRef.setAttribute("aria-label", "selector fecha de reserva");
  }, []);

  console.log("display date: ", displayDate);

  return (
    <>
      <Modal
        show={show}
        contextButton={btnsEditModal()}
        bookingData={bookingData}
        peopleBooking={peopleBooking}
      />
      <div className="bookingModuleMainWrapper" id="reservas">
        <div className="titleBookingWrapper">
          <h2 id="bookingTitle">Agenda tu reserva</h2>
          <img id="bookingImg" src={interiorDemo} alt="" />
        </div>
        <div className="conditionalWrapper">
          <div className="bookingWrapper">
            <div className="pickersWrapper">
              <div className="datePickerContainer">
                <p>Seleccione día</p>
                <DatePicker
                  aria-label="selector fecha"
                  className="datePicker"
                  dateFormat="dd/MM/yyyy"
                  locale="es"
                  filterDate={filterDates}
                  selected={displayDate}
                  includeDateIntervals={[
                    {
                      start: subDays(new Date(), sameDayBooking ? 1 : 0),
                      end: addDays(new Date(), bookingDaysRange),
                    },
                  ]}
                  onChange={(date) => handleDateChange(date)}
                  withPortal
                />
              </div>
              <div className="timePickerContainer">
                <p>Seleccione horario</p>
                <select
                  disabled={displayDate === undefined ? true : false}
                  aria-label="selector hora reserva"
                  defaultValue={availableTimes[0]}
                  className="timeSelector"
                  name=""
                  id=""
                  onChange={(e) =>
                    updateBooking({ horaReserva: e.target.value })
                  }
                >
                  {availableTimes.length === 0 && displayDate != undefined ? (
                    <option>Sin horario disponible</option>
                  ) : (
                    availableTimes.map((times, index) => {
                      return (
                        <option key={index} value={times}>
                          {times}
                        </option>
                      );
                    })
                  )}
                </select>
              </div>
            </div>
            <div className="optionsWrapper">
              <div className="peopleContainer">
                <p id="titlePeople">Cantidad de personas</p>
                <div className="quantityControlsContainer">
                  <button
                    className="quantityMinus"
                    onClick={() => minusPeople()}
                  >
                    -
                  </button>
                  <p className="quantityIndicator">{peopleBooking}</p>
                  <button className="quantityPlus" onClick={() => addPeople()}>
                    +
                  </button>
                </div>
                <p id="quantityNotification">*Sujeto a confirmación</p>
              </div>
              <div className="zonesContainer">
                <p id="titleZones">¿En que zona te gustaría reservar?</p>
                <div className="zoneContainer">
                  {peopleBooking > 10 ? (
                    <select
                      aria-label="selector zona de reserva"
                      className="zoneSelector"
                      id="zoneSelector"
                      onChange={getOptionValue}
                      defaultValue={bookingZones[0]}
                    >
                      {bookingZones
                        ?.filter((zone) => zone != "Terraza")
                        .map((zone, index) => {
                          return (
                            <option key={index} value={zone}>
                              {zone}
                            </option>
                          );
                        })}
                    </select>
                  ) : (
                    <select
                      aria-label="selector zona de reserva"
                      className="zoneSelector"
                      id="zoneSelector"
                      onChange={getOptionValue}
                      defaultValue={bookingZones[0]}
                    >
                      {bookingZones.map((zone, index) => {
                        return (
                          <option key={index} value={zone}>
                            {zone}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
                <p id="salonNotification">*Sujeto a disponibilidad</p>
              </div>
            </div>
          </div>
          <div className="userWrapper">
            <div className="userInputsContainer">
              <p id="titleContact">Tus datos de contacto</p>
              <input
                type="text"
                placeholder="*Nombre"
                onChange={(e) =>
                  updateBooking({ nombreReserva: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="*Email"
                onChange={(e) =>
                  updateBooking({ emailReserva: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="*Teléfono"
                onChange={(e) =>
                  updateBooking({ telefonoReserva: e.target.value })
                }
              />
            </div>
            <div className="userMessaggeContainer">
              <p id="titleMessagge">
                ¿Tienes algún comentario sobre tu reserva?{" "}
              </p>
              <textarea
                aria-label="comentario sobre reserva"
                maxLength="100"
                id="userMessaggeInput"
                onChange={(e) =>
                  updateBooking({ comentarioReserva: e.target.value })
                }
              />
            </div>
            <div className="btnReservarContainer">
              <p id="notificationBooking">*Datos requeridos</p>
              <button
                id="btnReservar"
                disabled={disabled}
                onClick={sendDataBooking}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="calendarIcon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <b>Agendar reserva</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingModule;
