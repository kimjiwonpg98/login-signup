"use strict";

const db = require("../config/dbConfig");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const secretObject = require("../config/jwt");

const output = {
  home: (req, res) => res.render("./home.ejs"),
  login: (req, res) => res.render("./login.ejs"),
  signup: (req, res) => res.render("./signup.ejs"),
  success: (req, res) => res.render("./success.ejs"),
};

const process = {
  signup: (req, res) => {
    const data = req.body;
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log("bcrypt.genSalt() error :", err.message);
      } else {
        bcrypt.hash(data.password, salt, null, (err, hash) => {
          let sql = "INSERT INTO user (id, password, name) VALUES (?, ?, ?)";
          const params = [data.id, hash, data.userName];
          db.query(sql, params, (err) => {
            if (err) console.log(err);
          });
        });
      }
    });
  },
  //토큰 데이터베이스에도 넣어주기
  login: (req, res) => {
    const response = {};
    const user = req.body;
    let token = jwt.sign(
      {
        id: user.id,
      },
      secretObject.secret
    );
    let sql = `SELECT * FROM user WHERE id LIKE ?`;
    db.query(sql, [user.id], (err, rows) => {
      const db = rows[0];
      if (err) throw err;

      if (db && user.id === db.id && bcrypt.compareSync(user.pw, db.password)) {
        res.cookie("user", token);
        response.token = token;
        response.isSuccess = true;
        response.name = db.name;
        response.id = db.id;
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
