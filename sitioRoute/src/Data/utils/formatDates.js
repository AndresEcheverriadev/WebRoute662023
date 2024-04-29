const simpleDate = (date) => {
  const newDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return newDate;
};

const filteredSimpleDate = (date, day) => {
  const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth());
  const newDate = (date, dayChange, monthChange) =>
    `${date.getDate() + dayChange}/${
      date.getMonth() + monthChange
    }/${date.getFullYear()}`;
  if (date.getDate() + day <= 0) {
    const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth() - 1);
    return newDate(
      new Date(date.getFullYear(), date.getMonth(), daysInMonth),
      0,
      -1
    );
  } else if (date.getDate() + day > daysInMonth) {
    return newDate(new Date(date.getFullYear(), date.getMonth(), 1), 0, 2);
  }
  return newDate(date, day, 1);
};

const normalizeDate = (strDate) => {
  let [ano, mes, dia] = strDate.split("-");

  function eraseZero(num) {
    if (num.length === 2 && num[0] === "0") {
      return num[1];
    } else return num;
  }

  let diaNormalizado = eraseZero(dia);
  let mesNormalizado = eraseZero(mes);

  let normalizedDate = `${diaNormalizado}/${mesNormalizado}/${ano}`;
  return normalizedDate;
};

const getDay = (date) => {
  return date.getDay();
};

const getDate = (date) => {
  return date.getDate();
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export {
  simpleDate,
  filteredSimpleDate,
  normalizeDate,
  getDay,
  getDaysInMonth,
  getDate,
};
