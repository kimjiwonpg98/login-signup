"use strict";

const User = require("../models/User");

const output = {
  home: (req, res) => res.render("./home.ejs"),
  login: (req, res) => res.render("./login.ejs"),
  signup: (req, res) => res.render("./signup.ejs"),
  success: (req, res) => res.render("./success.ejs"),
};

const process = {
  signup: async (req, res) => {
    const user = new User(req.body);
    const response = await user.signup();
    return res.json(response);
  },
  //토큰 데이터베이스에도 넣어주기
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    res.cookie("user", response.token);
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
