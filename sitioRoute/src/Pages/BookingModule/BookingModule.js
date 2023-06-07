import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import es from "date-fns/locale/es";
import timeRanges from "../../Data/timeRanges.mjs";
import bookingZones from "../../Data/bookingZones.mjs";
import interiorDemo from "../BookingModule/interiorDemo.jpg";
import terrazaDemo from "../BookingModule/terrazaDemo.jpg";
import { BookingService } from "../../Services/BookingService.js";
import Modal from "../Modal/Modal.js";
import ModalService from "../../Services/ModalService.js";
import "./BookingModule.css";
import "./BookingModuleResponsive.css";
setDefaultLocale("es");
registerLocale("es", es);

function BookingModule() {
  const [beforeDays, setBeforeDays] = useState(1);
  const [afterDays, setAfterDays] = useState(0);
  const [displayDate, setDisplayDate] = useState(new Date());
  const [startingDate, setStartingDate] = useState(new Date());
  const [peopleBooking, setPeopleBooking] = useState(1);
  const [zoneSelected, setZoneSelected] = useState("");
  const [dataOk, setDataOk] = useState(false);
  const [disabled, setDisabled] = useState("disabled");

  useEffect(() => {
    const toDay = new Date();
    const newStart = startingDate.setDate(toDay.getDate() + beforeDays);
    setDisplayDate(newStart);
  }, [startingDate, beforeDays]);

  const [bookingData, setBookingData] = useState({
    nombreReserva: "",
    emailReserva: "",
    telefonoReserva: "",
    diaReserva: "",
    horaReserva: timeRanges[0],
    cantidadReserva: peopleBooking,
    zonaReserva: bookingZones[0],
    comentarioReserva: "",
  });
  const [bookingCompleted, setBookingCompleted] = useState(false);

  useEffect(() => {
    updateBooking({ diaReserva: simpleDate(startingDate) });
  }, []);

  useEffect(() => {
    const quantityNotification = document.getElementById(
      "quantityNotification"
    );
    if (peopleBooking > 6) {
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
  };

  const minusPeople = () => {
    if (peopleBooking > 1) {
      setPeopleBooking(peopleBooking - 1);
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
      bookingData.telefonoReserva !== ""
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

  const simpleDate = (date) => {
    const newDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return newDate;
  };

  const upDates = (date) => {
    setStartingDate(date);
    setDisplayDate(startingDate);
    updateBooking({ diaReserva: date });
  };

  const sendDataBooking = () => {
    if (dataOk === true) {
      const sendBooking = BookingService.addBooking(
        bookingData.nombreReserva,
        bookingData.emailReserva,
        bookingData.telefonoReserva,
        bookingData.diaReserva,
        bookingData.horaReserva,
        bookingData.cantidadReserva,
        bookingData.zonaReserva,
        bookingData.comentarioReserva
      );
      setBookingCompleted(true);
    } else {
      alert("Faltan datos para generar la reserva");
    }
  };

  const { show, showModal, hideModal } = ModalService();

  useEffect(() => {
    if (bookingCompleted === true) {
      showModal();
    }
  }, [bookingCompleted]);

  const refreshAndScroll = () => {
    // window.scrollTo(0, 0);
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  };

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
                  className="datePicker"
                  dateFormat="dd/MM/yyyy"
                  locale="es"
                  selected={startingDate}
                  excludeDates={[new Date()]}
                  includeDateIntervals={[
                    { start: startingDate, end: addDays(new Date(), 30) },
                  ]}
                  onChange={(date) => upDates(date)}
                  withPortal
                />
              </div>
              <div className="timePickerContainer">
                <p>Seleccione horario</p>
                <select
                  className="timeSelector"
                  name=""
                  id=""
                  onChange={(e) =>
                    updateBooking({ horaReserva: e.target.value })
                  }
                >
                  {timeRanges.map((times) => {
                    return <option value={times}>{times}</option>;
                  })}
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
                  <select
                    className="zoneSelector"
                    id="zoneSelector"
                    name=""
                    onChange={getOptionValue}
                  >
                    {bookingZones.map((zones) => {
                      return <option value={zones}>{zones}</option>;
                    })}
                  </select>
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
              <p id="titleMessagge">¿Algún comentario sobre tu reserva? </p>
              <textarea
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

        {/* <div className="confirmedWrapper">
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
            <div className="bookingDataZoneContainer">
              <img id="imgBookingConfirmed" src={interiorDemo} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default BookingModule;
