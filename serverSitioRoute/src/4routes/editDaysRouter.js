import { Router } from "express";
import dayController from "../3controllers/dayController.js";

const editDaysRouter = Router();

editDaysRouter.post("/enableDay", dayController.enableDay);
editDaysRouter.post("/disableDay", dayController.disableDay);
editDaysRouter.post("/addTime/almuerzo", dayController.enableTimeAlmuerzo);
editDaysRouter.post("/eraseTime/almuerzo", dayController.disableTimeAlmuerzo);
editDaysRouter.post("/addTime/cena", dayController.enableTimeCena);
editDaysRouter.post("/eraseTime/cena", dayController.disableTimeCena);

export default editDaysRouter;
