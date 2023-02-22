import { Router } from "express";
import userController from "../3controllers/userController.js";

const usersRouter = Router();

usersRouter.post("/login", userController.loginUser);
usersRouter.post("/register", userController.registerUser);
usersRouter.get("/users", userController.allUsers);
usersRouter.delete("/delete", userController.deleteUser);
usersRouter.post("/logout", userController.logoutUser);

export default usersRouter;
