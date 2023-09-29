import mongoose from "mongoose";
const { Schema } = mongoose;

class Option {
  static get collection() {
    return "configoptions";
  }

  static get schema() {
    return {
      name: { type: String },
      status: { type: Boolean },
    };
  }
}

export default Option;
