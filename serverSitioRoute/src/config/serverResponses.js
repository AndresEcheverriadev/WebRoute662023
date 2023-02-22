class ServerResponse {
  static HTTP_STATUS = {
    SUCCESS: { code: 200, message: "OK" },
    BAD_REQUEST: { code: 400, message: "Bad request" },
    UNAUTHORIZED: { code: 401, message: "Unauthorized" },
    FORBIDDEN: { code: 403, message: "Forbidden" },
    NOT_FOUND: { code: 404, message: "Not found" },
    INTERNAL_ERROR: { code: 500, message: "Internal error" },
  };

  static success({ res, result, data }) {
    return res.status(ServerResponse.HTTP_STATUS.SUCCESS.code).json({
      status: ServerResponse.HTTP_STATUS.SUCCESS.code,
      message: ServerResponse.HTTP_STATUS.SUCCESS.message,
      result,
      data,
    });
  }

  static badRequest({ res, error }) {
    return res.status(ServerResponse.HTTP_STATUS.BAD_REQUEST.code).json({
      status: ServerResponse.HTTP_STATUS.BAD_REQUEST.code,
      message: ServerResponse.HTTP_STATUS.BAD_REQUEST.message,
      error,
    });
  }

  static unauthorized({ res, error }) {
    return res.status(ServerResponse.HTTP_STATUS.UNAUTHORIZED.code).json({
      status: ServerResponse.HTTP_STATUS.UNAUTHORIZED.code,
      message: ServerResponse.HTTP_STATUS.UNAUTHORIZED.message,
      error,
    });
  }

  static forbidden({ res, error }) {
    return res.status(ServerResponse.HTTP_STATUS.FORBIDDEN.code).json({
      status: ServerResponse.HTTP_STATUS.FORBIDDEN.code,
      message: ServerResponse.HTTP_STATUS.FORBIDDEN.message,
      error,
    });
  }

  static notFound({ res, error }) {
    return res.status(ServerResponse.HTTP_STATUS.NOT_FOUND.code).json({
      status: ServerResponse.HTTP_STATUS.NOT_FOUND.code,
      message: ServerResponse.HTTP_STATUS.NOT_FOUND.message,
      error,
    });
  }

  static internalError({ res, error }) {
    return res.status(ServerResponse.HTTP_STATUS.INTERNAL_ERROR.code).json({
      status: ServerResponse.HTTP_STATUS.INTERNAL_ERROR.code,
      message: ServerResponse.HTTP_STATUS.INTERNAL_ERROR.message,
      error,
    });
  }
}

export { ServerResponse };
