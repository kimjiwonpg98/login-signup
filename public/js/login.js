const mysql = require("mysql");
const db = require("../../config/dbConfig");
const userSchema = mysql.Schema(
  {
    userid: {
      type: String,
      required: [true, "Username is required!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      select: false,
    },
    name: { type: String, required: [true, "Name is required"] },
  },
  {
    toObject: { virtuals: true },
  }
);
