import React, { useState } from "react";
import { DayService } from "../../Services/DayService";

function TimeCheckboxes({ dayNumber, time, index, disabled, checkedProp }) {
  const [checked, setchecked] = useState(checkedProp);

  const addTime = async (dayNumber, time) => {
    await DayService.addTime(dayNumber, time);
  };

  const eraseTime = async (dayNumber, time) => {
    await DayService.eraseTime(dayNumber, time);
  };

  const handleAddTime = (checked, dayNumber, timeToAdd) => {
    if (checked) {
      eraseTime(dayNumber, timeToAdd);
      setchecked(false);
    } else {
      addTime(dayNumber, timeToAdd);
      setchecked(true);
    }
  };

  return (
    <div className="weekdayTime" key={index}>
      <p>{time ? time : null}</p>
      <input
        type="checkbox"
        className="weekdayTimeCheckbox"
        disabled={disabled ? false : true}
        checked={checked ? true : false}
        onChange={() => handleAddTime(checked, dayNumber, time)}
      />
    </div>
  );
}

export default TimeCheckboxes;
