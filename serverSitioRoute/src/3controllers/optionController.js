import { ServerResponse } from "../config/serverResponses.js";
import { optionService } from "../2services/index.js";

const getAllOptions = async (req, res) => {
  try {
    const optionsConfig = await optionService.getAll();
    ServerResponse.success({
      res,
      result: "Opciones obtenidas",
      data: optionsConfig,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo opciones",
    });
  }
};

const getOption = async (req, res) => {
  try {
    let { option } = req.body;
    if (!option) {
      return ServerResponse.badRequest({
        res,
        error: "Sin opción elegida",
      });
    }
    const optionConfig = await optionService.getOne({ name: option });
    ServerResponse.success({
      res,
      result: "Opción obtenida",
      data: optionConfig,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo opcion",
    });
  }
};

const getSameDayOption = async (req, res) => {
  try {
    const sameDayConfig = await optionService.getOne({
      name: "sameDayBooking",
    });
    ServerResponse.success({
      res,
      result: "Opción obtenida",
      data: sameDayConfig,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo opcion",
    });
  }
};

const getSalonOption = async (req, res) => {
  try {
    const salonConfig = await optionService.getOne({
      name: "bookingZoneSalon",
    });
    ServerResponse.success({
      res,
      result: "Opción obtenida",
      data: salonConfig,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo opcion",
    });
  }
};

const getTerrazaOption = async (req, res) => {
  try {
    const terrazaConfig = await optionService.getOne({
      name: "bookingZoneTerraza",
    });
    ServerResponse.success({
      res,
      result: "Opción obtenida",
      data: terrazaConfig,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo opcion",
    });
  }
};

const enableOption = async (req, res) => {
  try {
    let { option } = req.body;
    if (!option) {
      return ServerResponse.badRequest({
        res,
        error: "Sin opción elegida",
      });
    }
    const enabledOption = await optionService.updateOne(
      { name: option },
      { status: true }
    );
    ServerResponse.success({
      res,
      result: "Opción habilitada",
      data: enabledOption,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error habilitando opcion",
    });
  }
};

const disableOption = async (req, res) => {
  try {
    let { option } = req.body;
    if (!option) {
      return ServerResponse.badRequest({
        res,
        error: "Sin opción elegida",
      });
    }
    const disabledOption = await optionService.updateOne(
      { name: option },
      { status: false }
    );
    ServerResponse.success({
      res,
      result: "Opción deshabilitada",
      data: disabledOption,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error deshabilitando opcion",
    });
  }
};

export default {
  getAllOptions,
  getOption,
  getSameDayOption,
  getSalonOption,
  getTerrazaOption,
  enableOption,
  disableOption,
};
