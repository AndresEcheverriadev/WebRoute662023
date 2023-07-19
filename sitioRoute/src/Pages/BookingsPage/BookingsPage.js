import React, { useCallback, useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext.js";
import {
  filteredSimpleDate,
  normalizeDate,
} from "../../Data/utils/formatDates.js";
import { BookingService } from "../../Services/BookingService.js";
import logo from "../../logo-blanco.svg";
import bookingZones from "../../Data/bookingZones.mjs";
import timeRanges from "../../Data/timeRanges.mjs";
import { downloadPdf } from "./pdfGenerator.js";
import { Helmet } from "react-helmet";
import ModalService from "../../Services/ModalService.js";
import ModalSettings from "../ModalSettings/ModalSettings.js";
import "./BookingsPage.css";
import "./BookingsPageResponsive.css";

function BookingsPage() {
  const { logOut } = useContext(LoginContext);
  const [filterDays, setfilterDays] = useState(0);
  const toDay = new Date();
  const toDayFilter = filteredSimpleDate(toDay, filterDays);
  const [filteredBookings, setfilteredBookings] = useState([]);

  const handlerFilterDay = (days) => {
    setfilterDays(filterDays + days);
  };

  const handlerFilterToday = () => {
    setfilterDays(0);
  };

  const getBookings = useCallback(async () => {
    const bookings = await BookingService.getFilteredBookings(toDayFilter);
    if (!bookings) return;
    setfilteredBookings(bookings.data);
  }, [toDayFilter]);

  useEffect(() => {
    getBookings();
  }, [filteredBookings]);

  const filteredDates = filteredBookings?.map((booking, index) => {
    return (
      <div className="bookingPod" key={index}>
        <div className="bookingPodData">
          <p>{booking.diaReserva}</p>
          <p>{booking.horaReserva}</p>
          <p>{booking.cantidadReserva}</p>
          <p>{booking.zonaReserva}</p>
        </div>
        <div className="bookingPodContact">
          <div className="bookingContactNombre">
            <p id="bookingContactTitle">Nombre:</p>
            <p>{booking.nombreReserva}</p>
          </div>
          <div className="bookingContactTel">
            <p id="bookingContactTitle">Telefono:</p>
            <p>{booking.telefonoReserva}</p>
          </div>
          <div className="bookingContactComentario">
            <p id="bookingContactTitle">Comentarios:</p>
            <p className="bookingContactComentarioText">
              {booking.comentarioReserva}
            </p>
          </div>
        </div>
      </div>
    );
  });

  const reducer = filteredBookings.reduce(
    (accumulator, value) => accumulator + value.cantidadReserva,
    0
  );

  const [customBooking, setCustomBooking] = useState({
    nombreReserva: "",
    emailReserva: "",
    telefonoReserva: "",
    diaReserva: "",
    horaReserva: timeRanges.slice(0, 1).shift().time,
    cantidadReserva: 1,
    zonaReserva: bookingZones.slice(0, 1).shift().zone,
    comentarioReserva: "",
  });

  const handleCustomBooking = (inputCustomBooking) => {
    return setCustomBooking((prev) => {
      return { ...prev, ...inputCustomBooking };
    });
  };

  const createBooking = (e) => {
    e.preventDefault();
    if (
      !customBooking.nombreReserva ||
      customBooking.nombreReserva === "" ||
      !customBooking.emailReserva ||
      customBooking.emailReserva === "" ||
      !customBooking.diaReserva ||
      customBooking.diaReserva === "" ||
      !customBooking.horaReserva ||
      customBooking.horaReserva === "" ||
      !customBooking.cantidadReserva ||
      customBooking.cantidadReserva === ""
    ) {
      return alert("faltan datos para crear reserva");
    }
    const sendBooking = BookingService.addBooking(
      customBooking.nombreReserva,
      customBooking.emailReserva,
      customBooking.telefonoReserva,
      customBooking.diaReserva,
      customBooking.horaReserva,
      customBooking.cantidadReserva,
      customBooking.zonaReserva,
      customBooking.comentarioReserva
    );
    if (sendBooking) {
      window.location.reload(false);
    } else {
      return alert("Error creando reserva");
    }
  };

  const { show, showModal, hideModal } = ModalService();

  const btnsEditModalSettings = () => {
    return (
      <button className="btnBackModalSettings" onClick={hideModal}>
        Cerrar
      </button>
    );
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="bookingsMainWrapper">
        <a href="/">
          <img className="mainLogoBookings" src={logo} alt="" />
        </a>
        <h1>Administrador de reservas Route 66</h1>
        <div className="logBtns">
          <button className="logBtns_admin" onClick={showModal}>
            Admin Login
          </button>
          <a href="/">
            <button className="logBtns_logout" onClick={() => logOut()}>
              Logout
            </button>
          </a>
        </div>
        <div className="bookingsVisualizerContainer">
          <ModalSettings show={show} contextButton={btnsEditModalSettings()} />
          <div className="bookingsOptionsContainer">
            <div className="activeDateContainer">
              <h5 className="activeDateHeaderTitle">Opciones de filtro</h5>
              <h4 className="todayPod">{toDayFilter}</h4>
              <div className="todayFilterBtns">
                <button
                  className="btnDayMinus"
                  onClick={() => handlerFilterDay(-1)}
                >
                  Dia -
                </button>
                <button
                  className="btnDayToday"
                  onClick={() => handlerFilterToday()}
                >
                  Hoy
                </button>
                <button
                  className="btnDayPlus"
                  onClick={() => handlerFilterDay(1)}
                >
                  Dia +
                </button>
              </div>
            </div>
            <div className="bookingsStatsContainer">
              <h5 className="bookingStatsHeaderTitle">
                Estadísticas de reservas
              </h5>
              <div className="statPodsContainer">
                <div className="statPod">
                  <p>Cantidad de Reservas</p>
                  <h5> {filteredDates.length}</h5>
                </div>
                <div className="statPod">
                  <p>Total personas</p>
                  <h5> {reducer}</h5>
                </div>
              </div>
            </div>
            <div className="createBookingContainer">
              <h5 className="createBookingHeaderTitle">Crear reserva</h5>
              <div className="createBookingInputs">
                <form action="" className="bookingInputForm">
                  <div className="bookingInputDateData">
                    <div className="bookingInput">
                      <p className="bookingInputName">Dia</p>
                      <input
                        className="bookingInputField"
                        type="date"
                        locale="true"
                        onChange={(e) =>
                          handleCustomBooking({
                            diaReserva: normalizeDate(e.target.value),
                          })
                        }
                      />
                    </div>
                    <div className="bookingInput">
                      <p className="bookingInputName">Hora</p>

                      <select
                        className="bookingInputField"
                        name=""
                        id=""
                        onChange={(e) =>
                          handleCustomBooking({ horaReserva: e.target.value })
                        }
                      >
                        {timeRanges.map((times, index) => {
                          return (
                            <option key={index} value={times.time}>
                              {times.time}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="bookingInput">
                      <p className="bookingInputName">Cantidad</p>
                      <input
                        value={customBooking.cantidadReserva}
                        className="bookingInputField"
                        type="number"
                        onChange={(e) =>
                          handleCustomBooking({
                            cantidadReserva: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="bookingInput">
                      <p className="bookingInputName">Zona</p>

                      <select
                        className="bookingInputField"
                        onChange={(e) =>
                          handleCustomBooking({
                            zonaReserva: e.target.value,
                          })
                        }
                      >
                        {bookingZones.map((zones, index) => {
                          return (
                            <option key={index} value={zones.zone}>
                              {zones.zone}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="bookingInputPersonalData">
                    <div className="bookingInput">
                      <p className="bookingInputName">Nombre</p>
                      <input
                        className="bookingInputField"
                        type="text"
                        onChange={(e) =>
                          handleCustomBooking({
                            nombreReserva: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="bookingInput">
                      <p className="bookingInputName">Telefono</p>
                      <input
                        className="bookingInputField"
                        type="text"
                        onChange={(e) =>
                          handleCustomBooking({
                            telefonoReserva: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="bookingInput">
                      <p className="bookingInputName">Correo</p>
                      <input
                        className="bookingInputField"
                        type="email"
                        onChange={(e) =>
                          handleCustomBooking({
                            emailReserva: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="bookingInput">
                      <p className="bookingInputName">Comentario</p>
                      <input
                        className="bookingInputField"
                        type="text"
                        onChange={(e) =>
                          handleCustomBooking({
                            comentarioReserva: e.target.value,
                          })
                        }
                      />
                    </div>
                    <button
                      className="bookingInputBtn"
                      onClick={(e) => createBooking(e)}
                    >
                      Crear reserva
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bookingsTimesContainer">
            <div className="bookingPodsHeader">
              <h5>Reservas realizadas</h5>{" "}
              {downloadPdf(
                toDayFilter,
                filteredBookings.length,
                reducer,
                filteredBookings
              )}
            </div>
            <div className="bookingPodsContainer">
              <div className="bookingPodTitles">
                <p>Fecha</p>
                <p>Hora</p>
                <p>Cantidad</p>
                <p>Zona</p>
              </div>
              {filteredDates}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingsPage;
