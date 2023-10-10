import { Router } from "express";
import optionController from "../3controllers/optionController.js";

const editOptionsRouter = Router();

editOptionsRouter.get("/getOptions", optionController.getAllOptions);
editOptionsRouter.post("/getOption", optionController.getOption);
editOptionsRouter.post("/enableOption", optionController.enableOption);
editOptionsRouter.post("/disableOption", optionController.disableOption);

export default editOptionsRouter;
