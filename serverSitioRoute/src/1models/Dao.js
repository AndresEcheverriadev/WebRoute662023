import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import User from "./User.js";
import Booking from "./Booking.js";
mongoose.set("strictQuery", false);

class Dao {
  constructor() {
    this.mongoose = mongoose
      .connect(`${process.env.MONGOURL}`)
      .then(() => {
        console.log(`conectado a base de datos`);
      })
      .catch((err) => {
        console.log(err.message);
      });
    const timestamps = {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    };

    const userSchema = mongoose.Schema(User.schema, timestamps);
    const bookingSchema = mongoose.Schema(Booking.schema, timestamps);

    this.models = {
      [User.collection]: mongoose.model(User.collection, userSchema),
      [Booking.collection]: mongoose.model(Booking.collection, bookingSchema),
    };
  }

  save = async (document, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity].create(document);
    return result;
  };

  getAll = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity].find(options).lean();
    return result;
  };

  getOne = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity].findOne(options).lean();
    return result;
  };

  updateOne = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity].findOneAndUpdate(options).lean();
    return result;
  };

  deleteOne = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity].deleteOne(options).lean();
    return result;
  };
}

export default Dao;