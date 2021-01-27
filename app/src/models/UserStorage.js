`use strict`;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const secretObject = require("../db/jwt");
const db = require("../db/dbConfig");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      let token = jwt.sign(
        {
          id: id,
        },
        secretObject.secret
      );
      let sql = `SELECT * FROM login WHERE id LIKE ?`;
      let insert = `UPDATE login  SET token = ? WHERE id = ?`;
      db.query(insert, [token, id], (err) => {
        if (err) console.log(err);
        db.query(sql, [id], (err, rows) => {
          if (err) reject(err);
          resolve(rows[0]);
        });
      });
    });
  }

  static save(data) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.log("bcrypt.genSalt() error :", err.message);
        } else {
          bcrypt.hash(data.password, salt, null, (err, hash) => {
            let sql = "INSERT INTO login (id, password, name) VALUES (?, ?, ?)";
            const params = [data.id, hash, data.userName];
            db.query(sql, params, (err) => {
              if (err) reject({ success: false });
              resolve({ success: true });
            });
          });
        }
      });
    });
  }
}

module.exports = UserStorage;
