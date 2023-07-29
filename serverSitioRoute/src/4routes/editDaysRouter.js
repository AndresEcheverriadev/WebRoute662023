import { Router } from "express";
import dayController from "../3controllers/dayController.js";

const editDaysRouter = Router();

editDaysRouter.post("/enableDay", dayController.enableDay);
editDaysRouter.post("/disableDay", dayController.disableDay);
editDaysRouter.post("/addTime", dayController.addTime);
editDaysRouter.post("/eraseTime", dayController.eraseTime);

export default editDaysRouter;
