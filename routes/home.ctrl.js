"use strict";
const home = (req, res) => res.render("./home.ejs");

const login = (req, res) => res.render("./login.ejs");

const signUp = (req, res) => res.render("./signUp.ejs");

module.exports = {
  home,
  login,
  signUp,
};
