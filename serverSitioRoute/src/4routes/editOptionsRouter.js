import { Router } from "express";
import optionController from "../3controllers/optionController.js";

const editOptionsRouter = Router();

editOptionsRouter.get("/getOptions", optionController.getAllOptions);
editOptionsRouter.post("/getOption", optionController.getOption);

export default editOptionsRouter;
