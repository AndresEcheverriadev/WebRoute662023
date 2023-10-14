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
      result: "Día deshabilitado",
      data: disabledDay,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno inhabilitando día",
    });
  }
};

const enableTimeAlmuerzo = async (req, res) => {
  let { dayNumber, timeToAdd } = req.body;
  if (
    dayNumber == undefined ||
    dayNumber == null ||
    dayNumber < 0 ||
    dayNumber > 6 ||
    !timeToAdd
  )
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para habilitar horario",
    });
  try {
    const enableTime = {
      dayNumber: dayNumber,
      "timesAlmuerzo.time": timeToAdd,
    };
    const argEnabled = { $set: { "timesAlmuerzo.$.enabled": true } };
    let enabledTime = await dayService.updateOne(enableTime, argEnabled);
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

const disableTimeAlmuerzo = async (req, res) => {
  let { dayNumber, timeToErase } = req.body;
  if (
    dayNumber == undefined ||
    dayNumber == null ||
    dayNumber < 0 ||
    dayNumber > 6 ||
    !timeToErase
  )
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para deshabilitar horario",
    });
  try {
    const disableTime = {
      dayNumber: dayNumber,
      "timesAlmuerzo.time": timeToErase,
    };
    const argDisabled = { $set: { "timesAlmuerzo.$.enabled": false } };
    let disabledTime = await dayService.updateOne(disableTime, argDisabled);
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

const enableTimeCena = async (req, res) => {
  let { dayNumber, timeToAdd } = req.body;
  if (
    dayNumber == undefined ||
    dayNumber == null ||
    dayNumber < 0 ||
    dayNumber > 6 ||
    !timeToAdd
  )
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para habilitar horario",
    });
  try {
    const enableTime = { dayNumber: dayNumber, "timesCena.time": timeToAdd };
    const argEnabled = { $set: { "timesCena.$.enabled": true } };
    let enabledTime = await dayService.updateOne(enableTime, argEnabled);
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

const disableTimeCena = async (req, res) => {
  let { dayNumber, timeToErase } = req.body;
  if (
    dayNumber == undefined ||
    dayNumber == null ||
    dayNumber < 0 ||
    dayNumber > 6 ||
    !timeToErase
  )
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para deshabilitar horario",
    });
  try {
    const disableTime = { dayNumber: dayNumber, "timesCena.time": timeToErase };
    const argDisabled = { $set: { "times.$.enabled": false } };
    let disabledTime = await dayService.updateOne(disableTime, argDisabled);
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
  enableTimeAlmuerzo,
  disableTimeAlmuerzo,
  enableTimeCena,
  disableTimeCena,
};
