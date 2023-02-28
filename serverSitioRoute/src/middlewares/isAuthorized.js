import { ServerResponse } from "../config/serverResponses.js";
import jwt from "jsonwebtoken";

const isAuthorized = (req, res, next) => {
  const token = req.headers["authorization"];
  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) {
      return ServerResponse.forbidden({
        res,
        error: "No Autorizado",
      });
    } else {
      next();
    }
  });
};

export { isAuthorized };
