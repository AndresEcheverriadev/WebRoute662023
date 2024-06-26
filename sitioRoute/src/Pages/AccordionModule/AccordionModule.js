import React, { useState } from "react";
import TimeCheckboxes from "../TimeCheckboxes/TimeCheckboxes.js";
import "./AccordionModule.css";
import "./AccordionModuleResponsive.css";

const AccordionModule = ({ day }) => {
  const [isActive, setIsActive] = useState(false);

  const activateAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="weekdayTimesButton" onClick={activateAccordion}>
        {isActive ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
            <p>Ocultar horarios</p>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <p>Ver horarios</p>
          </>
        )}
      </div>

      <div className="weekdayTimesContainer">
        {isActive &&
          day.timesAlmuerzo?.map((time, index) => {
            return (
              <TimeCheckboxes
                segmentTime="almuerzo"
                key={index}
                dayNumber={day.dayNumber}
                time={time.time}
                index={index}
                disabled={day.enabled ? true : false}
                checkedProp={time.enabled ? true : false}
              />
            );
          })}
        {isActive &&
          day.timesCena?.map((time, index) => {
            return (
              <TimeCheckboxes
                segmentTime="cena"
                key={index}
                dayNumber={day.dayNumber}
                time={time.time}
                index={index}
                disabled={day.enabled ? true : false}
                checkedProp={time.enabled ? true : false}
              />
            );
          })}
      </div>
    </>
  );
};

export default AccordionModule;
