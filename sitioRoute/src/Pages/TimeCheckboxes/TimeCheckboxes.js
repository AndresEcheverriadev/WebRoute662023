import React, { useState } from "react";
import { DayService } from "../../Services/DayService";

function TimeCheckboxes({
  dayNumber,
  segmentTime,
  time,
  index,
  disabled,
  checkedProp,
}) {
  const [checked, setchecked] = useState(checkedProp);

  const addTime = async (segmentTime, dayNumber, time) => {
    const addThisTime = await DayService.addTime(segmentTime, dayNumber, time);
  };

  const eraseTime = async (segmentTime, dayNumber, time) => {
    const eraseThisTime = await DayService.eraseTime(
      segmentTime,
      dayNumber,
      time
    );
  };

  const handleUpdateTime = (checked, segmentTime, dayNumber, timeToUpdate) => {
    if (!checked) {
      addTime(segmentTime, dayNumber, timeToUpdate);
      setchecked(!checked);
    } else {
      eraseTime(segmentTime, dayNumber, timeToUpdate);
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
        onChange={() => handleUpdateTime(checked, segmentTime, dayNumber, time)}
      />
    </div>
  );
}

export default TimeCheckboxes;
