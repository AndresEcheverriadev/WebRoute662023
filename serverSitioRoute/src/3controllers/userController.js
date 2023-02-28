import jwt from "jsonwebtoken";
import { ServerResponse } from "../config/serverResponses.js";
import { userService } from "../2services/index.js";
import { createHash, isValidPassword } from "../config/bcrypt.js";

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await userService.getOne({ userName });
    if (!user || !isValidPassword(user, password)) {
      return ServerResponse.unauthorized({
        res,
        error: "Datos de sesión incorrectos",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "10m",
    });
    ServerResponse.success({
      res,
      data: {
        token,
      },
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno en login de usuario",
    });
  }
};

const registerUser = async (req, res) => {
  let { userName, password } = req.body;
  if (!userName || !password)
    return ServerResponse.badRequest({
      res,
      error: "Sin datos de usuario/password",
    });
  try {
    let user = await userService.getOne({ userName });
    if (user) {
      return ServerResponse.forbidden({ res, error: "Usuario ya existe" });
    }
    const hashedPassword = await createHash(password);
    const newUser = {
      userName,
      password: hashedPassword,
    };
    let result = await userService.save(newUser);
    ServerResponse.success({ res, result: "Usuario creado", data: result });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno registrando usuarios",
    });
  }
};

const deleteUser = async (req, res) => {
  let { userName } = req.body;
  try {
    let user = await userService.getOne({ userName });
    if (!user) {
      return ServerResponse.notFound({ res, error: "Usuario no encontrado" });
    }
    let result = await userService.deleteOne(user);
    ServerResponse.success({ res, result: "Usuario borrado", data: result });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno borrando usuarios",
    });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    ServerResponse.success({ res, result: "Usuarios obtenidos", data: users });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo usuarios",
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    delete req.session;
    ServerResponse.success({ res, result: "Usuarios deslogueado" });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno deslogueando usuario",
    });
  }
};

export default {
  loginUser,
  registerUser,
  deleteUser,
  allUsers,
  logoutUser,
};
