"use strict";

const db = require("../config/dbConfig");

const output = {
  home: (req, res) => res.render("./home.ejs"),
  login: (req, res) => res.render("./login.ejs"),
  signup: (req, res) => res.render("./signup.ejs"),
  success: (req, res) => res.render("./success.ejs"),
};

const process = {
  signup: (req, res) => {
    const data = req.body;

    let sql = "INSERT INTO user (id, password, name) VALUES (?, ?, ?)";
    const params = [data.id, data.password, data.userName];
    db.query(sql, params, (err, rows, fields) => {
      if (err) console.log(err);
    });
  },

  login: (req, res) => {
    const response = {};
    const user = req.body;

    let sql = `SELECT * FROM user WHERE id LIKE ?`;
    db.query(sql, [user.id], (err, rows) => {
      const db = rows[0];
      if (err) throw err;

      if (db && user.id === db.id && user.pw === db.password) {
        response.isSuccess = true;
        response.name = db.name;
        console.log(response);
        return res.json(response);
      }
      return res.json(response);
    });
  },
};

module.exports = {
  output,
  process,
};
