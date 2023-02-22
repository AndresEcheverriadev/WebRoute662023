import { ServerResponse } from "../config/serverResponses.js";

const isAuthenticated = (req, res, next) => {
  try {
    if (!req.isAuthenticated()) return ServerResponse.unauthorized({ res });
    next();
  } catch (error) {
    ServerResponse.internalError({ res, error });
  }
};

export { isAuthenticated };
