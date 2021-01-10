"use strict";

const db = require("../config/dbConfig");

const output = {
  home: (req, res) => res.render("./home.ejs"),
  login: (req, res) => res.render("./login.ejs"),
  signup: (req, res) => res.render("./signUp.ejs"),
};

const process = {
  signup: (req, res) => {
    const data = req.body;
    console.log(data);
    let sql = "INSERT INTO user (id, password, name) VALUES (?, ?, ?)";
    const params = [id, password, userName];
    db.query(sql, params, (err, rows, fields) => {
      if (err) console.log(err);
    });
  },
};
module.exports = {
  output,
  process,
};
