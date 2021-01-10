"use strict";

const db = require("../config/dbConfig");

const output = {
  home: (req, res) => res.render("./home.ejs"),
  login: (req, res) => res.render("./login.ejs"),
  signup: (req, res) => res.render("./signUp.ejs"),
};

const process = {
<<<<<<< HEAD
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
=======
	signup : (req, res) => {
		const data = req.body;
		let sql = "INSERT INTO user (id, password, name) VALUES (?, ?, ?)";
		// const params = [id, password, userName];
		// db.query(sql, params, (err, rows, fields) => {
			// if (err) console.log(err);
		// });
	}
}
>>>>>>> 91c471ac2c8a3c129cac1964e7a7265a0527e74e
module.exports = {
  output,
  process,
};
