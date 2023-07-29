import { Router } from "express";
import dayController from "../3controllers/dayController.js";

const allDaysRouter = Router();

allDaysRouter.get("/all", dayController.allDays);
allDaysRouter.post("/filtered", dayController.filteredDay);

export default allDaysRouter;
