"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl.js");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/signUp", ctrl.output.signUp);
router.post("/singUp", ctrl.process.signUp);

module.exports = { router };
