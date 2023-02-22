const simpleDate = (date, day) => {
  const newDate = `${date.getDate() + day}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return newDate;
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

export { simpleDate, normalizeDate };
