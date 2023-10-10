import React, { useEffect, useState } from "react";
import { DayService } from "../../Services/DayService";

function TimeCheckboxes({ dayNumber, time, index, disabled, checkedProp }) {
  const [checked, setchecked] = useState(checkedProp);

  const addTime = async (dayNumber, time) => {
    const addThisTime = await DayService.addTime(dayNumber, time);
  };

  const eraseTime = async (dayNumber, time) => {
    const eraseThisTime = await DayService.eraseTime(dayNumber, time);
  };

  const handleAddTime = (checked, dayNumber, timeToAdd) => {
    if (!checked) {
      addTime(dayNumber, time);
      setchecked(!checked);
    } else {
      eraseTime(dayNumber, time);
      setchecked(!checked);
    }
  };

  return (
    <div className="weekdayTime" key={index}>
      <p>{time ? time : null}</p>
      <input
        id={`${dayNumber}${time}`}
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
