import { ServerResponse } from "../config/serverResponses.js";
import { dayService } from "../2services/index.js";

const allDays = async (req, res) => {
  try {
    const days = await dayService.getAll();
    ServerResponse.success({
      res,
      result: "Fechas obtenidas",
      data: days,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo fechas",
    });
  }
};

const filteredDay = async (req, res) => {
  try {
    const { day } = req.body;
    if (day == undefined || day == null || day < 0 || day > 6) {
      return ServerResponse.badRequest({
        res,
        error: "Sin filtro de día",
      });
    }
    const filteredDay = await dayService.getOne({
      dayNumber: day,
    });
    ServerResponse.success({
      res,
      result: "Día obtenido",
      data: filteredDay,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno días",
    });
  }
};

const enableDay = async (req, res) => {
  let { dayToEnable } = req.body;
  if (
    dayToEnable == undefined ||
    dayToEnable == null ||
    dayToEnable < 0 ||
    dayToEnable > 6
  )
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para habilitar día",
    });
  try {
    const enableDay = {
      dayNumber: dayToEnable,
    };
    const argEnabled = { enabled: true };
    let enabledDay = await dayService.updateOne(enableDay, argEnabled);
    ServerResponse.success({
      res,
      result: "Día habilitado",
      data: enabledDay,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno habilitando día",
    });
  }
};

const disableDay = async (req, res) => {
  let { dayToDisable } = req.body;
  if (
    dayToDisable == undefined ||
    dayToDisable == null ||
    dayToDisable < 0 ||
    dayToDisable > 6
  )
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para deshabilitar día",
    });
  try {
    const disableDay = {
      dayNumber: dayToDisable,
    };
    const argDisabled = { enabled: false };
    let disabledDay = await dayService.updateOne(disableDay, argDisabled);
    ServerResponse.success({
      res,
      result: "Día inhabilitado",
      data: disabledDay,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno inhabilitando día",
    });
  }
};

const addTime = async (req, res) => {
  let { day, timeToAdd } = req.body;
  const filteredDay = await dayService.getOne({
    dayNumber: day,
  });
  if (!timeToAdd || !filteredDay)
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para habilitar horario",
    });
  try {
    if (filteredDay.times.includes(timeToAdd)) {
      return ServerResponse.badRequest({
        res,
        error: "Horario ya existe",
      });
    }
    const enableTime = {
      $addToSet: { times: timeToAdd },
    };
    let enabledTime = await dayService.updateOne(filteredDay, enableTime);
    ServerResponse.success({
      res,
      result: "Horario habilitado",
      data: enabledTime,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno habilitando horario",
    });
  }
};

const eraseTime = async (req, res) => {
  let { day, timeToErase } = req.body;
  const filteredDay = await dayService.getOne({
    dayNumber: day,
  });
  if (!timeToErase || !filteredDay)
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para deshabilitar horario",
    });
  try {
    if (!filteredDay.times.includes(timeToErase)) {
      return ServerResponse.badRequest({
        res,
        error: "Horario no existe",
      });
    }
    const disableTime = {
      $pull: { times: timeToErase },
    };
    let disabledTime = await dayService.updateOne(filteredDay, disableTime);
    ServerResponse.success({
      res,
      result: "Horario deshabilitado",
      data: disabledTime,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno deshabilitando horario",
    });
  }
};

export default {
  allDays,
  filteredDay,
  enableDay,
  disableDay,
  addTime,
  eraseTime,
};
