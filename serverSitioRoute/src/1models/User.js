import mongoose from "mongoose";
const { Schema } = mongoose;

class User {
  static get collection() {
    return "users";
  }

  static get schema() {
    return {
      userName: { type: String, maxLength: 20, require: true },
      password: { type: String, require: true },
      role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      },
    };
  }
}

export default User;
