"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl.js");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/signup", ctrl.output.signup);
router.post("/singup", ctrl.process.signup);

module.exports = { router };
