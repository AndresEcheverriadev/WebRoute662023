import React from "react";
import timeRanges from "../../Data/timeRanges";
import "./AdminPage.css";

function AdminPage() {
  const timeHours = [
    " 00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "23",
  ];
  const timeMinutes = ["00", "15", "30", "45"];

  return (
    <div className="adminMainWrapper">
      <div className="bookingOptionsContainer">
        <div className="bookingTimesContainer">
          <p>Editar horarios de reserva</p>
          <div className="addTimeContainer">
            <div className="addHourContainer">
              <p>Hora:</p>
              <select className="timeAggregator" name="" id="">
                {timeHours.map((times) => {
                  return <option value={times}>{times}</option>;
                })}
              </select>
            </div>
            <div className="addMinutesContainer">
              <p>Minutos:</p>
              <select className="timeAggregator" name="" id="">
                {timeMinutes.map((times) => {
                  return <option value={times}>{times}</option>;
                })}
              </select>
            </div>
            <button className="timeAggregatorBtn">
              <p>Agregar</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
          <div className="timePodContainer" overflow="scroll">
            {timeRanges.map((times, index) => {
              return (
                <div
                  className="timePod"
                  id={index % 2 !== 0 ? "timePodEvenCell" : null}
                  value={times}
                >
                  <p className="timeHour">{times}</p>
                  <div className="timeEraserContainer">
                    <button className="timeEraserBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                      </svg>
                      <p>Quitar</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
