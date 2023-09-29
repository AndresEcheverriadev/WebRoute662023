import { ServerResponse } from "../config/serverResponses.js";
import { optionService } from "../2services/index.js";

const getAllOptions = async (req, res) => {
  console.log("llegada getAllOptions");
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
    console.log(option);
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

export default {
  getAllOptions,
  getOption,
};
