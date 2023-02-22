import { ServerResponse } from "../config/serverResponses.js";

const IS_ADMIN = true;

const isAuthorized = (req, res, next) => {
  if (!IS_ADMIN)
    return ServerResponse.unauthorized({
      res,
      error: "Usuario no autorizado",
    });
  next();
};

export { isAuthorized };
