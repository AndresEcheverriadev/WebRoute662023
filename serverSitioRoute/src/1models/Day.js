import mongoose from "mongoose";
const { Schema } = mongoose;

class Day {
  static get collection() {
    return "bloqueodias";
  }

  static get schema() {
    return {
      dayNumber: { type: Number },
      nameDay: { type: String, required: true, maxLength: 9 },
      enabled: { type: Boolean, required: true },
      times: { type: Array },
    };
  }
}

export default Day;
